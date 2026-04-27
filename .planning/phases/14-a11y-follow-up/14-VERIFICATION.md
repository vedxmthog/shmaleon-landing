---
phase: 14-a11y-follow-up
status: passed
verified: 2026-04-27
---

# Phase 14 — Keyboard & skip verification

**Date:** 2026-04-27

## Must-haves (automated)

| Criterion | Check |
|-----------|--------|
| `skip_to_main` in i18n | `rg skip_to_main i18n.js` — key in en, ru, th |
| Skip link in six pages | `shm-skip-link` only on the six target HTML files |
| Single `main-content` id | One `id="main-content"` on primary `<main>` per page |
| Reduced motion | `prefers-reduced-motion` in `shm-chrome.css` |
| Informative alts | No `<img alt=""` on `index.html` or `the-story.html` with `data-alt` (alts match `data-alt`) |
| i18n syntax | `node --check i18n.js` — pass |

## Human checklist (browser)

### index.html

- [ ] Skip link visible on Tab focus
- [ ] Enter on skip moves to main
- [ ] Tab order: header controls then first CTA/content in main matches UI-SPEC for that page
- [ ] Escape closes mobile nav/locale if open

### bespoke.html

- [ ] Skip link visible on Tab focus
- [ ] Enter on skip moves to main
- [ ] Tab order: header controls then first CTA/content in main matches UI-SPEC for that page
- [ ] Escape closes mobile nav/locale if open

### the-story.html

- [ ] Skip link visible on Tab focus
- [ ] Enter on skip moves to main
- [ ] Tab order: header controls then first CTA/content in main matches UI-SPEC for that page
- [ ] Escape closes mobile nav/locale if open

### legal.html

- [ ] Skip link visible on Tab focus
- [ ] Enter on skip moves to main
- [ ] Tab order: header controls then first CTA/content in main matches UI-SPEC for that page
- [ ] Escape closes mobile nav/locale if open

### privacy.html

- [ ] Skip link visible on Tab focus
- [ ] Enter on skip moves to main
- [ ] Tab order: header controls then first CTA/content in main matches UI-SPEC for that page
- [ ] Escape closes mobile nav/locale if open

### compliance.html

- [ ] Skip link visible on Tab focus
- [ ] Enter on skip moves to main
- [ ] Tab order: header controls then first CTA/content in main matches UI-SPEC for that page
- [ ] Escape closes mobile nav/locale if open

## Reduced motion

- [ ] OS reduce-motion on — transitions feel instant

## Sign-off

Executor: __________  Date: __________

## Self-Check: PASSED
