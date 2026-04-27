---
phase: 18-dead-class-cleanup
plan: 01
completed: 2026-04-27
---

# Phase 18 — Plan 01 summary

## Files touched

- `i18n.js`
- `bespoke.html`
- `index.html` (verified only)

## Changes

- **i18n.js:** Removed `data-lang-btn` fallback in `shmSyncLangButtons`; removed `getElementById('current-lang')` block; removed redundant `index-locale-label` / `story-locale-label` updates after `[data-shm-locale-label]` forEach.
- **bespoke.html:** Removed unused `.pb-safe` inline `<style>` block.
- **index.html:** **Material Symbols** link already present exactly once — no edit required.

## **Manual UAT**

Locale toggle on **index** and **bespoke**: EN/RU/TH still updates mobile disclosure labels (`[data-shm-locale-label]`).

## Automated

- `node --check i18n.js`: exit 0
- No `slow fade` / `slow-fade` in `*.html` / `*.css` / `*.js` at repo root

## Deviations

None.
