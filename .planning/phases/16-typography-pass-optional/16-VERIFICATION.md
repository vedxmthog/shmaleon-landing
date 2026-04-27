---
phase: 16-typography-pass-optional
status: passed
verified: 2026-04-27
---

# Phase 16 — Verification

## Goal (from roadmap)

Body type with more character than Inter while keeping Noto for display; document font stack change and readability/CLS note.

## Must-haves (from plan)

| Criterion | Evidence |
|-----------|----------|
| Body/label tokens use IBM Plex Sans; headlines Noto Serif | `tailwind.config` in six HTML files: `label-caps`, `body-md`, `body-lg` → `"IBM Plex Sans"`; `headline-*` → `"Noto Serif"` |
| No `family=Inter` in target pages | Grep: no matches in the six files |
| No `"Inter"` in fontFamily JSON for those pages | Grep: no matches |
| Combined Google Fonts link includes IBM Plex + Noto (700) | Single `css2` link with `IBM+Plex+Sans` and `Noto+Serif:wght@300;400;500;700` |
| SUMMARY documents change + manual UAT | `16-01-SUMMARY.md` |

## Automated checks run

- Pattern search for `family=Inter` and `"Inter"` in the six deliverable HTML files: **pass**
- Presence of `IBM+Plex+Sans` in font link href on each file: **pass**

## human_verification

None required for merge; optional browser pass: load `index.html`, `bespoke.html`, `the-story.html` and confirm EN/RU/TH body text renders (executor noted in SUMMARY).

## Gaps

None.
