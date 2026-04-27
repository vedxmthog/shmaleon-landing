---
phase: 12-bespoke-select-i18n
plan: 01
subsystem: ui
tags: [i18n, static-html, bespoke, accessibility]

requires:
  - phase: 02-content-i18n-accessibility
    provides: shmApplyLocale, data-i18n pattern
provides:
  - Localized channel `<select>` option labels (EN/RU/TH) via `channel_option_*` keys
affects:
  - future i18n audits on bespoke

tech-stack:
  added: []
  patterns:
    - "`<option data-i18n=\"channel_option_*\">` — labels updated by shmApplyLocale like other nodes"

key-files:
  created: []
  modified:
    - i18n.js
    - bespoke.html
    - .planning/GLOSSARY.md

key-decisions:
  - "RU email option label: Эл. почта; TH: อีเมล; brand channels stay Latin where glossary matches footer."

patterns-established:
  - "Listen for `shm:locale` to re-run `applyContactChannel` so detail label stays aligned after locale-only updates."

requirements-completed:
  - I18N-01
  - I18N-05

duration: 15 min
completed: 2026-04-27
---

# Phase 12 Plan 01: Bespoke select i18n — Summary

**Channel dropdown on bespoke now uses `data-i18n` keys in all three locales, with glossary rows and a `shm:locale` hook so the contact detail label stays in sync.**

## Performance

- **Duration:** ~15 min
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- Added `channel_option_telegram|instagram|whatsapp|email` to `SHM_TRANSLATIONS` (en/ru/th).
- Wired `data-i18n` on each `#contact-channel` option; `value` unchanged.
- `window.addEventListener('shm:locale', …)` calls `applyContactChannel()`.
- GLOSSARY table updated.

## Task Commits

1. **Translations + markup + listener** — `583eab1` (feat)
2. **Glossary mirror** — `616e6f0` (docs)

## Files Created/Modified

- `i18n.js` — four keys × three locales
- `bespoke.html` — option attributes + listener
- `.planning/GLOSSARY.md` — four rows

## Decisions Made

- Matched plan copy: RU `Эл. почта` for email option; brands Telegram/Instagram/WhatsApp unchanged in RU/TH per glossary alignment.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## User Setup Required

None

## Next Phase Readiness

Bespoke select slice complete; broader I18N-01/05 site-wide work may remain in other surfaces.

## Self-Check: PASSED

---
*Phase: 12-bespoke-select-i18n*
*Completed: 2026-04-27*
