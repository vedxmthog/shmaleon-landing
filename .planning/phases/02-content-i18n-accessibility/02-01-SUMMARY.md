---
phase: 02-content-i18n-accessibility
plan: 01
subsystem: ui
tags: [i18n, static-html, tailwind]

requires: []
provides:
  - Shared i18n.js with SHM_TRANSLATIONS (en/ru/th) and shmApplyLocale / shmPersistLocale / shmReadStoredLocale
  - .planning/GLOSSARY.md and .planning/I18N-PATTERN.md
affects: [02-02, 02-03]

tech-stack:
  added: []
  patterns: [data-i18n for chrome, data-lang + root lang-* class for long-form copy]

key-files:
  created: [i18n.js, .planning/GLOSSARY.md, .planning/I18N-PATTERN.md]
  modified: [bespoke.html, index.html, the-story.html]

key-decisions:
  - "Unified Russian nav_bespoke as «На заказ» site-wide (glossary + i18n.js)."
  - "Index nav/footer use data-i18n; body copy keeps data-lang triplets with existing CSS."

patterns-established:
  - "Single SHM_TRANSLATIONS object; pages load i18n.js before inline scripts."

requirements-completed: [I18N-01, I18N-02, I18N-05]

duration: 45min
completed: 2026-04-27
---

# Phase 02 — Plan 01 Summary

**Shared `i18n.js`, glossary, and pattern docs wired into `index.html`, `the-story.html`, and `bespoke.html` with aligned EN/RU/TH chrome.**

## Performance

- **Tasks:** 3 (atomic commits)
- **Commits:** `a132d2d`, `a38e490`, `81fa9ab`

## Task Commits

1. **Glossary + i18n module + pattern doc** — `a132d2d`
2. **Wire bespoke.html** — `a38e490`
3. **Unify index + the-story** — `81fa9ab`

## Files Created/Modified

- `i18n.js` — locale APIs, translations, lang class on `documentElement`, `data-i18n` / placeholder application
- `.planning/GLOSSARY.md`, `.planning/I18N-PATTERN.md`
- `bespoke.html`, `index.html`, `the-story.html` — script load order and unified behavior

## Deviations from Plan

None — plan executed as written.

## Next Phase Readiness

- Plan 02-02 can extend `shmGetInitialLocale` (stub was present in 02-01).

---
*Phase: 02-content-i18n-accessibility · Plan 01*
