---
phase: 15-media-hardening
plan: 01
subsystem: ui
tags: [static, assets, media]

requires: []
provides:
  - Self-hosted `media/shm-*.jpg` (12) + provenance README
  - `index.html`, `bespoke.html`, `the-story.html` use relative `media/` paths; no `lh3` in `src`
affects: [15-02]
tech-stack:
  added: [curl, sips re-encode for PNG→JPEG]
  patterns: [repo-root `media/` for static multi-page site]
key-files:
  created:
    - media/README.md
    - media/shm-index-hero.jpg
    - media/shm-ingot.jpg
    - media/shm-pulse.jpg
    - media/shm-heart-cake.jpg
    - media/shm-delivery.jpg
    - media/shm-bespoke-hero.jpg
    - media/shm-heart-product.jpg
    - media/shm-story-hero.jpg
    - media/shm-story-sourcing.jpg
    - media/shm-story-infusion.jpg
    - media/shm-story-presentation.jpg
    - media/shm-story-handover.jpg
  modified:
    - index.html
    - bespoke.html
    - the-story.html
key-decisions:
  - Re-encoded CDN PNG payloads to JPEG so `.jpg` filenames match bytes.
requirements-completed: [A11Y-01]
duration: —
completed: 2026-04-27
---

# Phase 15 — Plan 01 Summary

**Twelve unique Google CDN images are vendored under `media/` with a provenance table; catalogue, bespoke, and story pages now load them via relative paths.**

## Performance

- **Tasks:** 3
- **Files modified:** 15 (12 binaries + README + 3 HTML)

## Accomplishments

- Downloaded all remote `src` URLs with `curl -fL`; normalized PNGs to JPEG via `sips`.
- Replaced every content image `src` on `index.html`, `bespoke.html`, and `the-story.html` with `media/shm-*.jpg` paths.

## Dimension map (all assets)

| File | pixels (W×H) |
|------|----------------|
| All `shm-*.jpg` | 512×512 |

## Self-Check: PASSED

- `grep` / manual: no `src="https://lh3.googleusercontent.com` in the three HTML files.
- `ls media/shm-* | wc -l` → 12.
- `file media/shm-index-hero.jpg` → JPEG image data.

## Deviations

- None.
