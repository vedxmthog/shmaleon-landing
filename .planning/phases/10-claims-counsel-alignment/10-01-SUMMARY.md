---
phase: 10-claims-counsel-alignment
plan: 01
subsystem: ui
tags: i18n, copy, trust-02, static-html

requires:
  - phase: 2
    provides: site-wide i18n patterns and locale keys
provides:
  - Aligned 1,000mg / botanical + cannabis phrasing for Ingot (index) and Profound note (bespoke via i18n)
  - TRUST-02 alignment memo under phase directory
affects:
  - counsel review
  - future product copy edits

tech-stack:
  added: []
  patterns:
    - EN anchor string drives RU/TH parenthetical for intensity note

key-files:
  created:
    - .planning/phases/10-claims-counsel-alignment/10-TRUST-02-ALIGNMENT.md
  modified:
    - index.html
    - i18n.js

key-decisions:
  - Lowercase “cannabis” in EN Ingot line; Profound note uses same “cannabis-infused botanical extract” product class without the word “discreet.”
  - RU parenthetical uses short “ботанический экстракт с каннабисом” to match Ingot class; TH parenthetical uses same สารสกัด… phrase as Ingot body (replaces oil-only “น้ำมันชง” in the note).

patterns-established:
  - "Potency microcopy: index Ingot + bespoke Profound note stay in semantic lockstep per locale."

requirements-completed:
  - TRUST-02

duration: 15min
completed: 2026-04-27
---

# Phase 10: Claims & counsel alignment — Plan 01 summary

**Ingot and Profound intensity copy now share one product-class voice in EN/RU/TH; TRUST-02 alignment memo records scope and honest counsel status.**

## Performance

- **Duration:** ~15 min
- **Tasks:** 2
- **Files modified:** 2 source + 1 planning memo

## Accomplishments

- `index.html`: Ingot EN uses `cannabis-infused` (lowercase); RU uses `1 000 мг` spacing consistent with i18n.
- `i18n.js`: `intensity_profound_note` updated in en/ru/th to align with Ingot framing; TH note matches botanical-extract class (not oil-only).
- `10-TRUST-02-ALIGNMENT.md`: jurisdiction, scope, anchors, **Counsel status: Pending**.

## Verification

- Confirmed `the-story.html` has no potency/mg marketing strings requiring edit in this pass.
- Acceptance strings from plan present in `index.html` and `i18n.js` (see grep in session).

## Follow-ups

- Counsel sign-off when ready; update memo **Counsel status** and **Outcome** accordingly.
