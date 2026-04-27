# Phase 3 — Pattern map (trust pages)

**Generated:** 2026-04-27

## PATTERN MAPPING COMPLETE

---

## New files (analog: existing pillar page)

| New file | Closest analog | Pattern to reuse |
|----------|----------------|-------------------|
| `legal.html` | `the-story.html` | Top nav block, footer, Tailwind classes, `data-lang` or shared head script |
| `privacy.html` | `the-story.html` | Same |
| `compliance.html` | `the-story.html` | Same; body is category/compliance copy only |

**Source excerpt idea:** Copy `<head>` charset/viewport/tailwind script pattern from `the-story.html` lines 1–~80; replace `<main>` with legal content region.

## Files to modify

| File | Change |
|------|--------|
| `index.html` | Replace `href="#"` on three trust anchor rows with `legal.html`, `privacy.html`, `compliance.html` (lines ~571–585 region) |
| `the-story.html` | Same for footer trust links (currently raw text links at ~383–385) |
| `bespoke.html` | `footer_legal` / `footer_privacy` / `footer_compliance` anchor `href` from `#` to real paths |

## i18n

- **index / story:** `data-lang` spans already wrap labels — only `href` changes.
- **bespoke:** Keys exist in `translations` — ensure link `href` attributes update in HTML for all three locales (same `href` targets).

## Data flow

- No JS API — static links only. Optional: `i18n.js` (Phase 2) on new pages if they share the locale controller.

---

*End of PATTERNS.md*
