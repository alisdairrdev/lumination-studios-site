# Placeholders — fill these before publishing

Nothing about Fever Dream was invented. Every unknown is a visible slot on the page
(amber dashed box) rather than plausible-sounding filler. Two kinds:

| Chip | Meaning |
|---|---|
| **TODO** (amber) | I have no information. You supply it. |
| **CONFIRM** (red) | I inferred this from your Unity project. Verify or delete it. |

Find them all: `grep -rn "TODO\|CONFIRM" index.html`

---

## 1. Fever Dream — `index.html`, first `<article class="game">`

- [ ] **Key art** → save 16:9 image to `assets/fever-dream-key-art.png`, then replace the
      `<div class="slot slot--media">` block with:
      `<img src="assets/fever-dream-key-art.png" alt="…" width="1920" height="1080" loading="lazy" />`
- [ ] **Description** — 2–4 sentences: what it is, what you do, the hook.
- [ ] **Platform** — Quest / PCVR / Steam / other?
- [ ] **Status** — released, early access, in development?
- [ ] **Players** — single player, co-op, multiplayer?
- [ ] **Store link** — remove `class="is-disabled"` and `aria-disabled` once there's a real URL.
- [ ] **Trailer link** — same.

## 2. Brick Mania — `index.html`, second `<article class="game">`

- [ ] **CONFIRM this is a Lumination Studios title.** I took the key art from the Unity
      project at `C:\Users\User\Brick Mania\Assets`. You never told me it's yours to
      publish — if it isn't, delete the whole `<article class="game game--flip">`.
- [ ] **Check you have the rights to the art** before it goes on a public page.
- [ ] Description, platform, status, players, links — same as above.

## 3. Studio — `#studio`

- [ ] **Studio story** — founded when/by whom, based where, team size, what you care about.
- [ ] **Capabilities** — three are marked CONFIRM because I inferred them from packages in
      your Unity project, not from anything you said:
  - Multiplayer VR ← **Photon** in the project
  - Live backend ← **PlayFab** in the project
  - Standalone headsets ← **Oculus / XR** SDKs in the project

  Confirm each or cut it. The fourth is an empty TODO — your call.

## 4. Hero — `#main .hero`

- [ ] **Headline** — "We build worlds that watch back." is my line, written to your
      eye/infinity mark. Keep it or replace it; it's not a claim about you either way.
- [ ] **Studio one-liner** — the first thing a publisher reads.
- [ ] Only one fact on this page came from you and it's the one that's underlined:
      **you are the developers of Fever Dream.**

## 5. Contact — `#contact`

- [ ] Business email, press email, Discord, X, YouTube, TikTok.
- [ ] Links stay dashed and non-clickable until they have real destinations.

## 6. Meta / SEO — `<head>`

- [ ] `<meta name="description">` and the `og:` tags still describe the studio generically.
- [ ] `og:image` currently points at the logo. A 1200×630 social card would be better.
- [ ] Add a real favicon set — the 644×644 logo works but isn't optimised.

---

## Console warning

While any `.slot` remains in the page, the browser console logs a warning with the
placeholder count. When it stops appearing, you're clean.
