# Phase 9 — Research: Production social URLs

**Date:** 2026-04-27  
**Question:** What is the least fragile way to ship real Instagram / Telegram / WhatsApp links (or a hidden block) for this static site?

## Current state

| Location | Pattern |
|----------|---------|
| `index.html` | Inline `/* SOCIAL: replace TODO */` + `const SOCIAL = { ... TODO ... }` + `sync` setting `footer-social` links; static `<a href="https://instagram.com/TODO">` etc. |
| `bespoke.html` | Same `const SOCIAL` + footer `data-i18n` social row |
| `the-story.html` | Same |
| `legal.html` | `footer-social-legal` + `SOCIAL` |
| `privacy.html` | `footer-social-privacy` + `SOCIAL` |
| `compliance.html` | `footer-social-compliance` + `SOCIAL` |

**Count:** 6 files × duplicate object + HTML href placeholders.

## Options

1. **Central `social-urls.js` (recommended)**  
   One IIFE that assigns `window.SHMALEON_SOCIAL` (or `SHM_SOCIAL`) with the three `https://` strings. Every page adds `<script src="social-urls.js" defer></script>` before the first script that needs it; inline blocks delete `const SOCIAL` and read from the global. Footer `href` in HTML: either (a) keep matching production URLs in HTML for no-JS fallback, or (b) set via existing sync only—acceptable if policy is “we always run JS for chrome.”

2. **Find-replace in place**  
   Brand supplies three URL strings; replace all six files in one pass. Simpler but high drift risk for the next change.

3. **Hide**  
   `SHM_SOCIAL_ENABLED === false` or empty strings → `display: none` on the footer sub-row; document. Still remove raw `…/TODO` from shipped HTML/JS (grep must be clean or explicitly allowlisted in verification).

## i18n

- Social **labels** stay in `i18n.js` / `data-i18n`—this phase only changes `href` targets, not copy.

## Phishing / abuse

- Only **fixed** `https://` links to the brand’s official profiles; no user-controlled `href` in this phase.
- `noopener noreferrer` on external links—already present.

## Validation Architecture

Static deploy — no Jest/Pytest. Contract:

| Dimension | Approach |
|-----------|------------|
| Correctness | `rg 'instagram\.com/TODO|t\.me/TODO|wa\.me/TODO' --glob '*.html' --glob '*.js'` → **0 matches** in repo root marketing files (exclude `.planning` draft notes if any reference TODO) |
| Manual | Open each of the six pages; three footer links open the intended public destinations (or block is not visible in hide mode) |
| Consistency | `social-urls.js` (or chosen artifact) is the **only** place holding production href strings in the “single file” design |

## Nyquist

- After each task commit: re-run the `rg` line above.  
- Before `/gsd-verify-work`: full `rg` + spot-check 2 pages.

---

## RESEARCH COMPLETE

Findings sufficient for `09-01-PLAN.md`. No blockers; brand must supply final URLs for the “ship” path.
