# Phase 14 — Technical Research

**Phase:** 14 — A11y follow-up  
**Status:** Complete

## Summary

Static HTML + Tailwind CDN site. **Skip links** use `href="#main-content"` with a single `<main id="main-content">` per page. **i18n** for skip label uses existing `[data-i18n]` + `SHM_TRANSLATIONS` in `i18n.js` (`shmApplyLocale` already hydrates all `[data-i18n]`). **Reduced motion:** add global `@media (prefers-reduced-motion: reduce)` in `shm-chrome.css` (central override; Tailwind utilities alone do not cover all transitions). **Hero image:** `shmHydrateImageAlts()` copies `data-alt` → `alt` on locale change; for **no-JS and SEO**, set static `alt` in HTML to the meaningful string (keep `data-alt` in sync). **Focus order:** skip link must be first focusable in `<body>` before fixed `<nav>`.

## Stack

| Layer | Choice |
|-------|--------|
| Markup | HTML5 landmarks (`nav`, `main`) |
| Styling | Tailwind CDN + `shm-chrome.css` |
| i18n | `i18n.js` static key map |

## Dependencies

- Phase 8: hero CTAs and tab order baseline on `index.html`.
- `14-CONTEXT.md`, `14-UI-SPEC.md` for copy and interaction contracts.

## Pitfalls

- Duplicating `<main>` or `id="main-content"` breaks skip target uniqueness.
- `sr-only` + focus without a dedicated class can fail across Tailwind versions — use **`.shm-skip-link`** in `shm-chrome.css` per plan.
- Omitting a page that shares chrome (legal/privacy/compliance) leaves keyboard users without skip on that URL.

## RESEARCH COMPLETE

---

## Validation Architecture

| Dimension | Strategy |
|-----------|----------|
| **Automated** | `node --check i18n.js`; `rg` for `skip_to_main`, `id="main-content"`, `shm-skip-link`, `prefers-reduced-motion` in `shm-chrome.css` |
| **Manual (required)** | Keyboard-only pass per `14-VERIFICATION.md`: Tab order skip → chrome → main first interactive → rest |
| **Sampling** | After each task: run quick grep/node checks; after wave: full manual checklist once |

Static milestone has **no unit test framework** — verification is **command + manual UAT** documented in phase VALIDATION and VERIFICATION artifacts.
