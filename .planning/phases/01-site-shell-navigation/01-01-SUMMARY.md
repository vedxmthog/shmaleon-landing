---
phase: 01-site-shell-navigation
plan: 01
subsystem: ui
tags: [html, tailwind, i18n, information-architecture]

requires: []
provides:
  - Canonical home at index.html with pillar nav hrefs and active states
  - Legacy the-collection.html redirect to index
  - Priority CTAs routing to bespoke.html
  - Footer © alignment (2026) with SHMALEON + invitation pattern
affects: [02-content-i18n-accessibility]

tech-stack:
  added: []
  patterns: [Relative pillar links, lang-class visibility for footer strings]

key-files:
  created: []
  modified: [index.html, bespoke.html, the-story.html, the-collection.html]

key-decisions:
  - "Footer year set to 2026 per PROJECT.md note to verify vs current year"

patterns-established:
  - "Pillar nav: active link uses text-secondary + border-b border-secondary/40; inactive uses text-neutral-400"

requirements-completed: [SITE-01, SITE-02, SITE-03, SITE-04]

duration: 25min
completed: 2026-04-27
---

# Phase 01: Plan 01 Summary

**Information architecture verified: real pillar hrefs, collection home, legacy redirect, bespoke CTAs, and aligned multilingual footer copyright (2026).**

## Performance

- **Duration:** ~25 min (inline with waves 1–3)
- **Tasks:** 3
- **Files touched:** `index.html`, `bespoke.html`, `the-story.html` (redirect unchanged; already correct)

## Accomplishments

- Desktop and mobile nav targets point to `index.html`, `bespoke.html`, `the-story.html` with correct active styling per page.
- `the-collection.html` keeps immediate redirect to home via meta refresh + `location.replace`.
- Scarcity / story CTAs use `href="bespoke.html"`.
- Footer © strings unified to **2026** with SHMALEON and per-locale invitation wording where applicable.

## Task Commits

Delivered with phase 01 feature commit (see repository history). Tasks verified in working tree before commit.

## Deviations from Plan

None — IA matched plan; footer year updated from 2024 to 2026 per project context.

## Self-Check: PASSED

- Pillar `href="#"` not used in desktop nav blocks.
- Join / priority CTAs resolve to bespoke.

---
*Phase: 01-site-shell-navigation · Plan 01*
