---
phase: 18-dead-class-cleanup
status: passed
verified: 2026-04-27
---

# Phase 18 — Verification

## Goal (from roadmap)

Remove or implement misleading utility/CSS/JS pairs project-wide (dead hooks cleanup per research).

## Must-haves (from plan)

| Criterion | Evidence |
|-----------|----------|
| No `current-lang` / `data-lang-btn` in i18n | Grep `i18n.js`: no matches |
| No redundant locale ID updates in i18n | Grep: no `index-locale-label` / `story-locale-label` in `i18n.js` |
| Single Material Symbols link on index | One `Material+Symbols+Outlined` href in `index.html` |
| No `.pb-safe` in bespoke | Grep `bespoke.html`: no matches |
| `node --check i18n.js` | Exit 0 |
| No legacy `slow fade` strings in deliverables | Grep `*.{html,css,js}`: no matches |

## human_verification

Optional: locale toggle on index + bespoke (documented in `18-01-SUMMARY.md`).

## Gaps

None.
