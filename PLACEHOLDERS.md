# Placeholders

Nothing about Fever Dream was invented. Every unknown is a dashed amber box on the page.
The page shows **where** content is missing; this file explains **what** goes there —
keep it that way, the instructions don't belong back on the page.

Find them: `grep -rn "TODO" index.html`

---

### Fever Dream — `#work`

Done: key art, the one-line genre/inspiration description, the store page link.
Platform/Status/Players was dropped rather than filled in — a `dl.meta` list of
three unknowns wasn't pulling its weight next to one real sentence. There's no
trailer, so that button is gone too, not just disabled.

If a trailer shows up later, it's a normal `<a class="btn" href="…" target="_blank"
rel="noopener">Trailer</a>` back in `.feature__links` — no special handling needed.

### Studio — `#studio`

Done: the two-paragraph "who we are." It's deliberately vague on specifics —
no founding date, no team headcount, no named members — since none of that
was given and the whole point of this file is not inventing it. If you want
those specifics on the page later, they'll need to come from you.

### Contact — `#contact`

Email, Discord, X, YouTube. Links stay dimmed and unclickable until they have real
destinations — a link to `#` is worse than no link.

### Hero

- Headline — *"We build worlds that watch back."* is my line, written to your eye/infinity
  mark. Keep it or bin it; it's not a claim about you either way.
- The only fact on the page that came from you is the underlined one: **you make Fever Dream.**

### Head / SEO

- `<meta name="description">` and the `og:` tags are still generic.
- `og:image` points at the logo. A 1200×630 social card would be better.
- Favicon is the raw 644×644 logo — works, not optimised.

---

While any `.slot` remains, the browser console logs a warning with the count.
When it stops appearing, you're clean.
