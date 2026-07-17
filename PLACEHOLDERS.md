# Placeholders — fill these before publishing

Nothing about Fever Dream was invented. Every unknown is a visible amber slot on the
page rather than plausible-sounding filler.

Find them all: `grep -rn "TODO" index.html`

---

## 1. Fever Dream — `#work`

This is the only game on the site, so this section carries it.

- [ ] **Key art** → save a 16:9 image to `assets/fever-dream-key-art.png`, then replace
      the `<div class="slot slot--media">` block with:
      `<img src="assets/fever-dream-key-art.png" alt="…" width="1920" height="1080" loading="lazy" />`
- [ ] **Description** — 2–4 sentences: what it is, what you do, the hook.
- [ ] **Platform** — Quest / PCVR / Steam / other?
- [ ] **Status** — released, early access, in development?
- [ ] **Players** — single player, co-op, multiplayer?
- [ ] **Store link** — remove `class="is-disabled"` and `aria-disabled` once there's a real URL.
- [ ] **Trailer link** — same.

## 2. Studio — `#studio`

- [ ] **Studio story** — founded when/by whom, based where, team size, what you care about.
- [ ] **Four capabilities** — what you want to be known for. Engine work, multiplayer,
      art, audio, performance, whatever's true.

## 3. Hero

- [ ] **Headline** — "We build worlds that watch back." is my line, written to your
      eye/infinity mark. Keep it or replace it; it's not a claim about you either way.
- [ ] **Studio one-liner** — the first thing a publisher reads.
- [ ] The only fact on this page that came from you is the underlined one:
      **you make Fever Dream.**

## 4. Contact — `#contact`

- [ ] Business email, press email, Discord, X, YouTube, TikTok.
- [ ] Links stay dimmed and non-clickable until they have real destinations.

## 5. Meta / SEO — `<head>`

- [ ] `<meta name="description">` and the `og:` tags still describe the studio generically.
- [ ] `og:image` points at the logo. A 1200×630 social card would be better.
- [ ] Add a real favicon set — the 644×644 logo works but isn't optimised.

---

## Console warning

While any `.slot` remains in the page, the browser console logs a warning with the
placeholder count. When it stops appearing, you're clean.
