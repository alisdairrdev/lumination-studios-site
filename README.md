# Lumination Studios VR — website

Static site. No build step, no dependencies, no framework. Open `index.html` and it runs.

## Status

⚠️ **Not ready to publish.** The Fever Dream content is placeholders — see
[`PLACEHOLDERS.md`](PLACEHOLDERS.md). Nothing about the studio was invented; every
unknown is a visible amber slot on the page.

## Structure

```
index.html      # the whole site — one page
css/style.css   # all styling
js/main.js      # cursor lumination, eye tracking, scroll reveals (all optional)
assets/         # logo + key art
PLACEHOLDERS.md # what still needs filling in
```

## Local preview

No tooling needed — double-click `index.html`.

If you'd rather serve it over HTTP (closer to how Pages behaves):

```powershell
# any one of these, from the repo root
python -m http.server 8080
npx serve .            # needs Node, which isn't installed on this machine
```

## Design

| | |
|---|---|
| Base | `#08080b` near-black, with a fixed sodium bloom so it never reads flat |
| Accent | `#f2a73b` amber — the "lumination" |
| Counter | `#8fc7dd` glacial, used sparingly |
| Display | Instrument Serif (italic for emphasis) |
| Body | Archivo |
| Labels | JetBrains Mono |

The logo is white-on-transparent, so the site is dark by necessity as much as by choice.

**Signature interactions** — both are progressive enhancement, and both switch off for
`prefers-reduced-motion` and on touch devices:
- A soft amber light trails your cursor through the dark.
- The pupils in the infinity-eye motif follow your cursor.

## Accessibility

- Skip link, visible focus rings, semantic landmarks.
- `prefers-reduced-motion` fully honoured — reveals resolve, grain and cursor light stop.
- Links without real destinations are `aria-disabled` and non-clickable rather than
  fake `href="#"` traps.
- Body text meets WCAG AA on the void background.

## Deploying to GitHub Pages

**This repo is private, and GitHub Pages does not serve private repos on the free plan.**
So the site won't be live yet. Options:

1. **Keep it private, preview locally** — where things stand now.
2. **Upgrade to GitHub Pro** — Pages then publishes from a private repo.
3. **Make the repo public** when you're ready to launch (source becomes visible).

When Pages is available, `Settings → Pages → Source: main / (root)`. A `.nojekyll` file
is already in place so nothing gets swallowed by Jekyll.
