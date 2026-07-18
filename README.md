# Lumination Studios VR website

Static site. No build step, no dependencies, no framework. Open `index.html` and it runs.

## Status

⚠️ **Not ready to publish.** Fever Dream's content is placeholders. See
[`PLACEHOLDERS.md`](PLACEHOLDERS.md). Nothing about the studio was invented; every unknown
is a visible dashed box on the page.

## Structure

```
index.html      # the whole site, one page
css/style.css   # all styling
js/main.js      # year stamp + a console warning about placeholders. That's it.
assets/         # logo
404.html
PLACEHOLDERS.md # what still needs filling in
```

## Local preview

Double-click `index.html`. Or, closer to how Pages behaves:

```powershell
python -m http.server 8080
```

## Design

| | |
|---|---|
| Base | `#08080b` near-black, one soft amber bloom behind the mark |
| Accent | `#f2a73b` amber, used sparingly |
| Display | Instrument Serif (italic for emphasis) |
| Body | Archivo |
| Labels | JetBrains Mono |

The logo is white-on-transparent, so the site is dark by necessity as much as by choice.

## Motion policy

**Motion happens once: the hero fades up on load.** That's all.

No scroll reveals, nothing follows the cursor, nothing loops in the viewport. Fading every
block up on scroll is the loudest tell of a machine-built page, and on a site this short it
makes it feel padded. Sections are simply present.

The only exception is a film grain at 3% opacity, which exists to stop the blacks banding.

If you're tempted to animate a section in on scroll: don't.

## Accessibility

- Skip link, visible focus rings, semantic landmarks.
- `prefers-reduced-motion` honoured: the fade and the grain stop.
- Links without destinations are `aria-disabled` and unclickable rather than fake `href="#"`
  traps.
- Body text meets WCAG AA on the void background.

## Deploying to GitHub Pages

**This repo is private, and Pages doesn't serve private repos on the free plan**, so the
site isn't live. Options:

1. Keep it private and preview locally, where things stand now.
2. Upgrade to GitHub Pro. Pages then publishes from a private repo.
3. Make the repo public at launch (source becomes visible).

When Pages is available: `Settings → Pages → Source: main / (root)`. A `.nojekyll` file is
already in place.
