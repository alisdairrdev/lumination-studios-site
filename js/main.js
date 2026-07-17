/* ══════════════════════════════════════════════════════════
   Lumination Studios VR — interaction layer
   Everything here is progressive enhancement: with JS off the
   page is still fully readable and navigable.
   ══════════════════════════════════════════════════════════ */

(() => {
  "use strict";

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(pointer: fine)").matches;

  /* ── current year ── */
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });

  /* ── reveal on scroll ──────────────────────────────────
     Staggered within each section so a scroll lands as one
     orchestrated beat rather than N independent twitches. */
  const targets = document.querySelectorAll("[data-reveal]");

  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      // stagger only among the entries appearing in this same frame
      entries
        .filter(e => e.isIntersecting)
        .forEach((e, i) => {
          e.target.style.setProperty("--d", `${Math.min(i, 5) * 90}ms`);
          e.target.classList.add("is-in");
          obs.unobserve(e.target);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    targets.forEach(el => io.observe(el));
  }

  /* ── the lumination: a light that trails the cursor ────
     Skipped entirely on touch and for reduced-motion users. */
  if (finePointer && !reduced) {
    const lumen = document.querySelector(".lumen");
    if (lumen) {
      let raf = 0, x = innerWidth / 2, y = innerHeight / 2;

      addEventListener("pointermove", e => {
        x = e.clientX; y = e.clientY;
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          lumen.style.setProperty("--mx", `${x}px`);
          lumen.style.setProperty("--my", `${y}px`);
          lumen.classList.add("is-live");
        });
      }, { passive: true });

      addEventListener("pointerleave", () => lumen.classList.remove("is-live"), { passive: true });
    }
  }

  /* ── the eyes follow you ───────────────────────────────
     The pupils track the cursor, clamped inside the iris so
     they never escape the eye. This is the one thing people
     remember, so it has to feel alive but never silly. */
  const eyes = [...document.querySelectorAll("[data-eye]")];

  if (eyes.length && finePointer && !reduced) {
    const MAX = 5;           // px of travel inside the iris (SVG units)
    let raf = 0;

    const track = (cx, cy) => {
      const svg = document.querySelector(".iris");
      if (!svg) return;
      const box = svg.getBoundingClientRect();
      if (!box.width) return;

      // map viewport px -> the svg's 400x200 user space
      const sx = 400 / box.width;
      const sy = 200 / box.height;
      const px = (cx - box.left) * sx;
      const py = (cy - box.top) * sy;

      eyes.forEach(eye => {
        const ex = Number(eye.dataset.cx);
        const ey = Number(eye.dataset.cy);
        const dx = px - ex;
        const dy = py - ey;
        const dist = Math.hypot(dx, dy) || 1;
        const reach = Math.min(dist / 45, 1) * MAX;   // ease in as you approach
        const pupil = eye.querySelector("[data-pupil]");
        if (pupil) {
          pupil.style.transform =
            `translate(${((dx / dist) * reach).toFixed(2)}px, ${((dy / dist) * reach).toFixed(2)}px)`;
        }
      });
    };

    addEventListener("pointermove", e => {
      if (raf) return;
      const cx = e.clientX, cy = e.clientY;
      raf = requestAnimationFrame(() => { raf = 0; track(cx, cy); });
    }, { passive: true });
  }

  /* ── dev guard ─────────────────────────────────────────
     Shout in the console while placeholders are still in the
     page, so this never ships half-written by accident. */
  const todos = document.querySelectorAll(".slot").length;
  if (todos) {
    console.warn(
      `%c LUMINATION %c ${todos} unfilled placeholder${todos === 1 ? "" : "s"} still in this page. ` +
      `Search the repo for "TODO" and "CONFIRM" before publishing. See PLACEHOLDERS.md.`,
      "background:#f2a73b;color:#08080b;font-weight:700;padding:2px 6px;border-radius:2px",
      "color:#f2a73b"
    );
  }
})();
