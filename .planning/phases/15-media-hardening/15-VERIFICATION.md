---
phase: 15-media-hardening
status: passed
verified: 2026-04-27
---

# Phase 15 — Media hardening verification

**Date:** 2026-04-27

## Must-haves (automated)

| Criterion | Check |
|-----------|--------|
| No hotlinked `lh3` in content `src` on scope pages | `grep -r 'src="https://lh3.googleusercontent' index.html bespoke.html the-story.html` — no matches |
| Twelve `media/shm-*.jpg` + README | `ls media/shm-*.jpg \| wc -l` → 12; `test -f media/README.md` |
| Intrinsic dimensions on in-scope images | `grep 'media/shm-'` on three HTML files — each line includes `width="512"` and `height="512"` |
| `decoding="async"` | Same grep set — every `media/shm-` line includes `decoding="async"` |
| Hero images without `loading="lazy"` | `shm-index-hero`, `shm-bespoke-hero`, `shm-story-hero` lines lack `loading="lazy"` |
| Below-fold lazy | Section/tile `media/shm-` images (non-hero) include `loading="lazy"` |
| No empty alts for marketing images on index / story | `grep '<img alt=""' index.html the-story.html` — no matches |
| A11Y-01 (images) | Concise non-empty `alt` on all 12 in-scope images; `data-alt` preserved |

## Plan traceability

| Plan | SUMMARY | Commit grep |
|------|---------|-------------|
| 15-01 | `15-01-SUMMARY.md` | `git log --oneline -1 --grep=15` (feat(15) includes P01) |
| 15-02 | `15-02-SUMMARY.md` | same |

## Human checklist (browser)

- [ ] Open `index.html`, `bespoke.html`, `the-story.html` from disk: all images render (no broken icon).
- [ ] Network: no requests to `lh3.googleusercontent.com` for page images.
- [ ] LCP: hero image still loads first on each page (DevTools / Lighthouse snapshot).

## Sign-off

Executor: GSD execute-phase 15  Date: 2026-04-27

## Self-Check: PASSED
