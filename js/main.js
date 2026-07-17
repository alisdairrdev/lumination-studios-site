/* ══════════════════════════════════════════════════════════
   Lumination Studios VR — interaction layer

   Everything here is progressive enhancement. With JS off the
   page is fully readable, fully navigable, and simply doesn't
   animate. Nothing is hidden behind a script.

   There is no scroll-reveal code here and there shouldn't be.
   See the motion policy at the top of style.css.
   ══════════════════════════════════════════════════════════ */

(() => {
  "use strict";

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(pointer: fine)").matches;

  /* ── current year ── */
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });

  /* ── the lumination: a light that trails the cursor ──── */
  if (finePointer && !reduced) {
    const lumen = document.querySelector(".lumen");
    if (lumen) {
      let raf = 0, x = 0, y = 0;

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

  const eyes = [...document.querySelectorAll("[data-eye]")];

  /* ── the eyes follow you ───────────────────────────────
     Pupils track the cursor, clamped inside the iris so they
     never escape the eye. This is the one thing people
     remember, so it has to feel alive but never silly. */
  if (eyes.length && finePointer && !reduced) {
    const svg = document.querySelector(".iris");
    const MAX = 5;              // travel inside the iris, in SVG units
    let raf = 0;

    const track = (cx, cy) => {
      const box = svg.getBoundingClientRect();
      if (!box.width) return;

      // viewport px -> the svg's 400x200 user space
      const px = (cx - box.left) * (400 / box.width);
      const py = (cy - box.top) * (200 / box.height);

      eyes.forEach(eye => {
        const dx = px - Number(eye.dataset.cx);
        const dy = py - Number(eye.dataset.cy);
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

  /* ── and they blink ────────────────────────────────────
     Randomised interval, with an occasional double-blink. A
     fixed CSS loop blinks like a metronome, which reads worse
     than not blinking at all. */
  if (eyes.length && !reduced) {
    const shut = () => {
      eyes.forEach(e => e.classList.add("is-blink"));
      setTimeout(() => eyes.forEach(e => e.classList.remove("is-blink")), 105);
    };

    const schedule = () => {
      setTimeout(() => {
        shut();
        if (Math.random() < 0.18) setTimeout(shut, 260);   // occasional double
        schedule();
      }, 2800 + Math.random() * 6500);
    };

    // don't blink at a tab nobody's looking at
    let started = false;
    const begin = () => { if (!started && !document.hidden) { started = true; schedule(); } };
    document.addEventListener("visibilitychange", begin);
    setTimeout(begin, 1800);
  }

  /* ── dev guard ─────────────────────────────────────────
     Shout while placeholders remain, so this never ships
     half-written by accident. */
  const todos = document.querySelectorAll(".slot").length;
  if (todos) {
    console.warn(
      `%c LUMINATION %c ${todos} unfilled placeholder${todos === 1 ? "" : "s"} still in this page. ` +
      `Search the repo for "TODO" before publishing. See PLACEHOLDERS.md.`,
      "background:#f2a73b;color:#08080b;font-weight:700;padding:2px 6px;border-radius:2px",
      "color:#f2a73b"
    );
  }
})();
