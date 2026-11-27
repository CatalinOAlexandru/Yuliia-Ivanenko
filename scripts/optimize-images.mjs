#!/usr/bin/env node
// Turns the original photos in data/ into small, sharp web images.
//
//   npm run images            process new or changed photos
//   npm run images -- --force re-encode everything
//
// For every photo it writes AVIF + WebP at several widths to
// build/assets/img/<slug>/<width>.<ext>, records size and average colour in
// build/assets/img/manifest.json, and prints a ready-to-paste <picture> tag.

import { readdir, mkdir, stat, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "data");
const OUT = path.join(root, "build/assets/img");
const MANIFEST = path.join(OUT, "manifest.json");

// Widths cover phone thumbnails up to a full-screen lightbox on a retina display.
const WIDTHS = [480, 800, 1200, 1600, 2000];
const AVIF = { quality: 52, effort: 4, chromaSubsampling: "4:2:0" };
const WEBP = { quality: 78, effort: 6, smartSubsample: true };
const INPUT = /\.(jpe?g|png|webp|tiff?|heic|heif|avif)$/i;
const force = process.argv.includes("--force");

const slugify = (file) =>
  file
    .replace(/(\.(jpe?g|png|webp|tiff?|heic|heif|avif))+$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const hex = ({ r, g, b }) =>
  "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");

async function loadManifest() {
  try {
    return JSON.parse(await readFile(MANIFEST, "utf8"));
  } catch {
    return {};
  }
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const manifest = await loadManifest();
  // When two files share a name (e.g. IMG_1.HEIC and an exported IMG_1.HEIC.jpg), use the non-HEIC one.
  const all = (await readdir(SRC)).filter((f) => INPUT.test(f)).sort();
  const isHeic = (f) => /\.(heic|heif)$/i.test(f);
  const files = all.filter((f) => !(isHeic(f) && all.some((g) => g !== f && !isHeic(g) && slugify(g) === slugify(f))));
  if (!files.length) {
    console.log("No photos found in data/.");
    return;
  }

  let failed = 0;
  for (const file of files) {
    const src = path.join(SRC, file);
    const slug = slugify(file);
    const { mtimeMs } = await stat(src);
    const prev = manifest[slug];

    if (!force && prev && prev.source === file && prev.sourceMtime === Math.round(mtimeMs)) {
      console.log(`skip  ${file} (unchanged)`);
      continue;
    }

    // Apply the camera's rotation once so width/height are the displayed ones.
    const base = sharp(src, { failOn: "none" }).rotate();
    let meta;
    try {
      meta = await base.clone().metadata();
      await base.clone().resize(16).raw().toBuffer(); // proves the file can be decoded
    } catch (err) {
      console.log(`fail  ${file}: can't read this file (${err.message.split("\n")[0]}).`);
      console.log(`      Export it as JPEG (on iPhone: Settings > Camera > Formats > Most Compatible) and run again.`);
      failed++;
      continue;
    }
    const width = meta.autoOrient?.width ?? meta.width;
    const height = meta.autoOrient?.height ?? meta.height;
    const { dominant } = await base.clone().resize(64).stats();

    const widths = WIDTHS.filter((w) => w < width);
    if (widths.length < WIDTHS.length) widths.push(Math.min(width, WIDTHS.at(-1)));

    const dir = path.join(OUT, slug);
    await mkdir(dir, { recursive: true });

    let bytes = 0;
    for (const w of widths) {
      const resized = base.clone().resize({ width: w, withoutEnlargement: true }).toColourspace("srgb");
      const avif = await resized.clone().avif(AVIF).toFile(path.join(dir, `${w}.avif`));
      const webp = await resized.clone().webp(WEBP).toFile(path.join(dir, `${w}.webp`));
      bytes += avif.size + webp.size;
    }

    manifest[slug] = {
      source: file,
      sourceMtime: Math.round(mtimeMs),
      width,
      height,
      color: hex(dominant),
      widths,
    };
    console.log(`done  ${file} -> img/${slug}/ (${widths.join(", ")}px, ${(bytes / 1024).toFixed(0)} KB total)`);
    console.log(snippet(slug, manifest[slug]));
    await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  }

  const missing = Object.keys(manifest).filter((s) => !files.some((f) => slugify(f) === s));
  for (const s of missing) console.log(`note  img/${s}/ has no source in data/ any more (delete it if unused)`);

  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  if (failed) process.exitCode = 1;
}

function snippet(slug, { width, height, color, widths }) {
  const set = (ext) => widths.map((w) => `assets/img/${slug}/${w}.${ext} ${w}w`).join(", ");
  const mid = widths.find((w) => w >= 800) ?? widths.at(-1);
  return `
  <picture>
    <source type="image/avif" srcset="${set("avif")}" sizes="SIZES">
    <img src="assets/img/${slug}/${mid}.webp" srcset="${set("webp")}" sizes="SIZES"
         width="${width}" height="${height}" alt="DESCRIBE THE PHOTO" loading="lazy" decoding="async"
         style="background-color:${color}">
  </picture>
`;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
