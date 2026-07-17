# Placeholders

Nothing about Fever Dream was invented. Every unknown is a dashed amber box on the page.
The page shows **where** content is missing; this file explains **what** goes there —
keep it that way, the instructions don't belong back on the page.

Find them: `grep -rn "TODO" index.html`

---

### Fever Dream — `#work`

| Slot | What it needs |
|---|---|
| `TODO — key art` | 16:9 image → `assets/fever-dream-key-art.png`, then replace the `slot--media` div with `<img src="assets/fever-dream-key-art.png" alt="…" width="1920" height="1080" loading="lazy" />` |
| `TODO — what is Fever Dream?` | 2–4 sentences. What it is, what you do, the hook. Only game on the site, so this carries it. |
| Platform | Quest / PCVR / Steam? |
| Status | Released / early access / in development? |
| Players | Single / co-op / multiplayer? |
| Store page, Trailer | Real URLs. Drop `class="is-disabled"` and `aria-disabled` once they exist. |

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
