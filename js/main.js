/* Deliberately almost nothing. Nothing follows the cursor, no
   scroll observers, no reveal system. The hero's fade is pure
   CSS. See the motion policy at the top of style.css before
   adding to this file. */

(() => {
  "use strict";

  /* current year */
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });

  /* dev guard — shout while placeholders remain, so this never
     ships half-written by accident. */
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
