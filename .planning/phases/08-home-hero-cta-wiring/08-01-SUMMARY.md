---
phase: 08-home-hero-cta-wiring
plan: 01
subsystem: ui
tags: [static-html, tailwind, i18n, hero-cta]

requires:
  - phase: 02-content-i18n-accessibility
    provides: data-lang visibility pattern on index
provides:
  - Hero dual CTAs (bespoke + the-story) with EN/RU/TH labels
affects:
  - launch-readiness

tech-stack:
  added: []
  patterns:
    - "Hero CTA cluster: flex-col / min-[400px]:flex-row + gap-4; primary solid hover, secondary ghost (border-secondary/70, hover:bg-secondary/10)"

key-files:
  created: []
  modified:
    - index.html

key-decisions:
  - "Secondary CTA uses lighter border and hover:bg-secondary/10 so primary remains visually dominant (per 08-UI-SPEC)."

patterns-established:
  - "Hero labels use three span siblings with data-lang=en|ru|th matching existing h1 subline pattern."

requirements-completed:
  - HERO-CTA-01

duration: 12 min
completed: 2026-04-27
---

# Phase 08 Plan 01: Home hero CTA wiring — Summary

**Hero shows two resolvable CTAs—bespoke (Inquire) and the-story (Enter)—with EN/RU/TH `data-lang` labels, no hash links, and scarcity block unchanged.**

## Performance

- **Duration:** 12 min
- **Started:** 2026-04-27T00:00:00Z (approx.)
- **Completed:** 2026-04-27T00:12:00Z (approx.)
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments

- Replaced single hero CTA with flex row/stack pair linking `bespoke.html` and `the-story.html`.
- Localized primary and secondary labels per plan (Inquire / Enter and RU/TH equivalents).
- Added `focus-visible` rings on both anchors; secondary uses ghost styling per UI-SPEC.

## Task Commits

1. **Task 1: Dual hero CTA row + i18n** — `bdd2925` (feat)
2. **Task 2: Scarcity block CTA check (non-regression)** — `2ea5759` (chore, empty — verified existing `href="bespoke.html"` after 15,000 THB block)

## Files Created/Modified

- `index.html` — Hero CTA container and two anchors with i18n spans.

## Decisions Made

- Ghost secondary button: `border-secondary/70`, `hover:bg-secondary/10`, slightly softer shadow so primary keeps emphasis.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## User Setup Required

None

## Next Phase Readiness

HERO-CTA-01 satisfied; safe to proceed to later roadmap phases.

## Self-Check: PASSED

---
*Phase: 08-home-hero-cta-wiring*
*Completed: 2026-04-27*
