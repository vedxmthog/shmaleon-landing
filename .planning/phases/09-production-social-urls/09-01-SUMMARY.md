---
phase: 09-production-social-urls
plan: 01
subsystem: ui
---

# Plan 09-01 — Summary

**Completed:** 2026-04-27

## Delivered

- **`social-urls.js`:** `window.SHM_SOCIAL_ENABLED` (default `false` hides the three-link footer), `window.SHMALEON_SOCIAL` with non-placeholder `https://` roots (no `*TODO` substrings). Single edit point for going live.
- **Six pages** (`index`, `bespoke`, `the-story`, `legal`, `privacy`, `compliance`): load `social-urls.js` after `i18n.js`; per-page `sync*FooterSocial` adds `hidden` to the footer social row when disabled; `getElementById` roots unchanged; static `href` values match the config object.
- **Docs:** `README.md` and `.planning/deploy.md` point to `social-urls.js` first.

## Verification

- `rg 'instagram\.com/TODO|t\.me/TODO|wa\.me/TODO' --glob '*.html' --glob '*.js'` — no matches in repo root marketing files.
- `rg 'social-urls\.js' README.md .planning/deploy.md` — both reference the file.

## SOCIAL-01

- Production: set `SHM_SOCIAL_ENABLED = true` and replace `SHMALEON_SOCIAL` values with the brand’s public profile URLs. Until then, the footer social strip is not shown (`hidden`).
