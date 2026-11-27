# Yuliia Ivanenko

Portfolio website for Yuliia Ivanenko, aerial artist, dancer and performer. It's a static site in the `build/` folder that deploys to GitHub Pages.

## Adding or changing photos

1. Copy the original photos into `data/` (JPEG, PNG, HEIC, etc.). This folder is not committed.
2. Run `npm install` once, then `npm run images`.
   This writes small AVIF and WebP versions at several sizes to `build/assets/img/<name>/` and prints a `<picture>` tag for each new photo.
3. In `build/index.html`, swap the folder name in an existing photo (for example `img-7715` → `img-8001`) or paste the printed tag. Update `width`, `height` and `alt` to match.

Photos that haven't changed are skipped. HEIC files can't be read: export them as JPEG first (iPhone: Settings → Camera → Formats → Most Compatible). If a JPEG copy with the same name sits beside the HEIC, the script uses the JPEG. Use `npm run images -- --force` to re-encode everything.

## Before going live

- **Email:** replace `hello@example.com` in `build/index.html` (3 places) and in `build/assets/js/site.js` (`EMAIL`).
- **CV:** add `build/cv/Yuliia-Ivanenko-CV.pdf`. Until then the buttons read "CV coming soon".
- **Social links:** replace the TikTok, Instagram and YouTube URLs in the footer of `build/index.html`.

The contact form and newsletter signup have no server. They open the visitor's email app with the message filled in.

## Preview locally

```
npm run serve        # http://localhost:4321
```

## Deploy

Every push to `main` deploys `build/` through `.github/workflows/pages.yml`.
One-time setup: in the repository on GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
