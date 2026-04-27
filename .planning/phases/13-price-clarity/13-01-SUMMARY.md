---
phase: 13-price-clarity
plan: 01
subsystem: ui
tags: [i18n, index, pricing, static-html]

requires:
  - phase: 02-content-i18n-accessibility
    provides: data-i18n + SHM_TRANSLATIONS pattern
provides:
  - Per-piece qualifier under 15,000 THB in EN/RU/TH
affects:
  - launch copy review

tech-stack:
  added: []
  patterns:
    - "Scarcity block: h2 price → data-i18n qualifier p → data-lang limited production p"

key-files:
  created: []
  modified:
    - i18n.js
    - index.html
    - .planning/GLOSSARY.md

key-decisions:
  - "Qualifier copy per plan: EN “Per piece.”, RU “За единицу.”, TH “ต่อชิ้น” (no TH period)."

patterns-established: []

requirements-completed:
  - I18N-01
  - I18N-02

duration: 12 min
completed: 2026-04-27
---

# Phase 13 Plan 01: Price clarity — Summary

**Collection home scarcity block now shows a single `data-i18n` line under `15,000 THB` clarifying per-piece pricing in EN, RU, and TH, with GLOSSARY alignment.**

## Performance

- **Duration:** ~12 min
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- `index_scarcity_price_qualifier` in all three `SHM_TRANSLATIONS` tables.
- New subordinate `<p>` between price `h2` and “Limited Weekly Production” italic block.
- Glossary row mirrors strings character-for-character.

## Task Commits

1. **Qualifier + markup** — `13f803c` (feat)
2. **Glossary** — `7b2fb85` (docs)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## Self-Check: PASSED

---
*Phase: 13-price-clarity*
*Completed: 2026-04-27*
