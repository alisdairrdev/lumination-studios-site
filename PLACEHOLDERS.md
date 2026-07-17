# Placeholders

Nothing about Fever Dream was invented. Every unknown is a dashed amber box on the page.
The page shows **where** content is missing; this file explains **what** goes there —
keep it that way, the instructions don't belong back on the page.

Find them: `grep -rn "TODO" index.html`

---

### Fever Dream — `#work`

Key art and the store page link are in. Still open:

| Slot | What it needs |
|---|---|
| description | 2–4 sentences on what Fever Dream is, what you do, the hook. Only game on the site, so this carries it. There's no on-page dashed box for this one anymore — it was pulled off the page rather than left as clutter, so it lives here until it's written. |
| Platform | Quest / PCVR / Steam? |
| Status | Released / early access / in development? |
| Players | Single / co-op / multiplayer? |
| Trailer | Real URL. Drop `class="is-disabled"`, `aria-disabled`, and `tabindex="-1"` once it exists. |

### Studio — `#studio`

| Slot | What it needs |
|---|---|
| `TODO — studio story` | Founded when and by whom, based where, team size, what you care about. 1–2 short paragraphs. Publishers read this closely. |

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
