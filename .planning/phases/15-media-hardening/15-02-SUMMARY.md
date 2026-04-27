---
phase: 15-media-hardening
plan: 02
subsystem: ui
tags: [a11y, images, cls]

requires: [15-01]
provides:
  - Intrinsic 512×512 `width`/`height` on all `media/shm-*` `<img>` nodes
  - `decoding="async"` on each; `loading="lazy"` below the fold (per plan)
  - Concise `alt` (story/index heroes trimmed from long copy); bespoke tiles keep product names
affects: []
tech-stack:
  added: [sips dimension probe]
  patterns: [hero eager / section images lazy for LCP]
key-files:
  created: []
  modified:
    - index.html
    - bespoke.html
    - the-story.html
key-decisions:
  - All on-disk assets are 512×512; attributes match natural dimensions.
requirements-completed: [A11Y-01]
duration: —
completed: 2026-04-27
---

# Phase 15 — Plan 02 Summary

**Content images now reserve layout space (512×512 intrinsic match), load lazily only off-hero, decode asynchronously, and expose short accessible `alt` text aligned with A11Y-01.**

## Performance

- **Tasks:** 2
- **Files modified:** 3 HTML

## Accomplishments

- Applied `width="512" height="512"` and `decoding="async"` to all 12 in-scope `<img src="media/shm-…">` tags.
- Set `loading="lazy"` for below-the-fold images; omitted on index/bespoke/story hero images.

## Self-Check: PASSED

- Index hero: has dimensions + `decoding="async"`, no `loading="lazy"`.
- Index ingot: includes `loading="lazy"`.
- No empty `alt=""` on `index.html` or `the-story.html` for these images.

## Deviations

- None.
