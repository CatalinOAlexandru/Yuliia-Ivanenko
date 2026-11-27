// Yuliia Ivanenko — small enhancements. The page works without this file.

// Where messages go. Change this one line (and the mailto links in index.html) when the address is ready.
const EMAIL = "hello@example.com";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

$$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// ?static (used for screenshots): load every photo up front.
if (/[?&]static\b/.test(location.search)) $$("img[loading=lazy]").forEach((img) => (img.loading = "eager"));

/* ---------- Photographs develop once as they enter ---------- */

if (document.documentElement.classList.contains("motion") && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.remove("pending");
        io.unobserve(e.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  for (const el of $$(".develop")) {
    // Only hide what is still below the fold, so nothing visible ever disappears.
    if (el.getBoundingClientRect().top > innerHeight) {
      el.classList.add("pending");
      io.observe(el);
    }
  }
}

/* ---------- CV button: show "coming soon" until the PDF is uploaded ---------- */

const cvLinks = $$("[data-cv]");
if (cvLinks.length && location.protocol.startsWith("http")) {
  fetch(cvLinks[0].getAttribute("href"), { method: "HEAD" })
    .then((r) => {
      if (r.ok) return;
      for (const a of cvLinks) {
        a.setAttribute("aria-disabled", "true");
        a.removeAttribute("href");
        a.lastChild.textContent = "CV coming soon";
      }
    })
    .catch(() => {});
}

/* ---------- Forms: compose an email in the visitor's mail app ---------- */

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function check(input, ok) {
  const err = document.getElementById(`${input.id}-error`);
  input.setAttribute("aria-invalid", String(!ok));
  if (err) {
    err.hidden = ok;
    if (!ok) input.setAttribute("aria-describedby", err.id);
    else input.removeAttribute("aria-describedby");
  }
  return ok;
}

function openMail(subject, body) {
  const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

const contact = $("#contact-form");
if (contact) {
  const name = $("#c-name"), email = $("#c-email"), message = $("#c-message");
  const status = $(".status", contact);
  const rules = [
    [name, () => name.value.trim().length > 0],
    [email, () => isEmail(email.value.trim())],
    [message, () => message.value.trim().length > 0],
  ];
  for (const [el, rule] of rules) {
    el.addEventListener("blur", () => el.value && check(el, rule()));
    el.addEventListener("input", () => el.getAttribute("aria-invalid") === "true" && check(el, rule()));
  }
  contact.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const results = rules.map(([el, rule]) => check(el, rule()));
    const firstBad = rules[results.indexOf(false)];
    if (firstBad) {
      firstBad[0].focus();
      status.textContent = "";
      return;
    }
    openMail(
      `Enquiry from ${name.value.trim()}`,
      `${message.value.trim()}\n\n${name.value.trim()}\n${email.value.trim()}`
    );
    status.textContent = `Your email app should now open with the message ready to send. If it doesn't, write to ${EMAIL}.`;
  });
}

const news = $("#news-form");
if (news) {
  const email = $("#n-email");
  const status = $(".status", news);
  email.addEventListener("input", () => email.getAttribute("aria-invalid") === "true" && check(email, isEmail(email.value.trim())));
  news.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (!check(email, isEmail(email.value.trim()))) {
      email.focus();
      status.textContent = "";
      return;
    }
    openMail("Newsletter sign-up", `Please add ${email.value.trim()} to your newsletter.`);
    status.textContent = "Your email app should now open. Send the message to confirm your sign-up.";
  });
}

/* ---------- Portfolio lightbox ---------- */

const box = $("#lightbox");
const plates = $$(".plate a");
if (box && plates.length && typeof box.showModal === "function") {
  const fig = $("figure", box);
  const count = $(".count", box);
  const caption = $(".caption", box);
  let index = 0;
  const pad = (n) => String(n).padStart(2, "0");

  function show(i) {
    index = (i + plates.length) % plates.length;
    const a = plates[index];
    const pic = $("picture", a).cloneNode(true);
    for (const s of $$("source, img", pic)) s.setAttribute("sizes", "(min-aspect-ratio: 3/4) 62vh, 92vw");
    const img = $("img", pic);
    img.loading = "eager";
    img.removeAttribute("style");
    $("picture", fig)?.remove();
    fig.prepend(pic);
    count.textContent = `${pad(index + 1)} / ${pad(plates.length)}`;
    caption.textContent = a.dataset.caption || "";
  }

  plates.forEach((a, i) =>
    a.addEventListener("click", (ev) => {
      ev.preventDefault();
      show(i);
      box.showModal();
    })
  );
  $(".lb-prev", box).addEventListener("click", () => show(index - 1));
  $(".lb-next", box).addEventListener("click", () => show(index + 1));
  $(".lb-close", box).addEventListener("click", () => box.close());
  box.addEventListener("click", (ev) => ev.target === box && box.close());
  box.addEventListener("keydown", (ev) => {
    if (ev.key === "ArrowLeft") show(index - 1);
    if (ev.key === "ArrowRight") show(index + 1);
  });
  box.addEventListener("close", () => plates[index].focus());

  // Swipe on touch screens.
  let x0 = null;
  box.addEventListener("touchstart", (ev) => (x0 = ev.touches[0].clientX), { passive: true });
  box.addEventListener("touchend", (ev) => {
    if (x0 === null) return;
    const dx = ev.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    x0 = null;
  });
}
