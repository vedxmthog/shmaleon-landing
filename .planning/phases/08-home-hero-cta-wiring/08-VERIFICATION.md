---
phase: 08-home-hero-cta-wiring
status: passed
verified: 2026-04-27
---

# Phase 08 verification — home hero CTA wiring

## Must-haves (from plan / REQUIREMENTS)

| Criterion | Check |
|-----------|--------|
| HERO-CTA-01: hero primary → `bespoke.html`, secondary → `the-story.html` | Hero block (lines ~316–327): first `<a href="bespoke.html">`, second `<a href="the-story.html">` |
| No `href="#"` in hero CTA cluster | `href="#"` absent from entire `index.html` |
| EN/RU/TH labels for both CTAs | Each anchor contains three `<span data-lang="en|ru|th">` |
| Scarcity section still `bespoke.html` | After `15,000 THB` block: single link `href="bespoke.html"` |

## Automated / spot checks

- Grep `href="#"` on `index.html` — no matches
- Visual structure: `flex flex-col min-[400px]:flex-row gap-4` on CTA container

## Human follow-up (optional)

- Open `/` in browser: toggle locale EN/RU/TH; confirm visible labels and destinations for both hero buttons.

## Self-Check: PASSED
