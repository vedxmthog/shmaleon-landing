---
phase: 10
slug: claims-counsel-alignment
status: approved
shadcn_initialized: false
preset: none
created: 2026-04-27
---

# Phase 10 — UI design contract (copy & terminology)

> **Scope:** Editorial / i18n alignment only. **No** new layout, navigation, or color-token changes. Extends Phase 1–2 patterns and Phase 3 TRUST posture.

## Design system

| Property | Value |
|----------|-------|
| Stack | Static HTML + Tailwind CDN; `i18n.js` + per-page `data-lang` (unchanged) |
| Surfaces | Only **copy** inside existing nodes (`<span data-lang>`, `data-i18n` values in `i18n.js`) |

## Copy contract (TRUST-02)

1. **Single voice** for product-adjacent language: potency (mg), cannabis/botanical framing, and “infusion” semantics across:
   - `index.html` (collection product blocks)
   - `bespoke.html` (intensity step, especially `intensity_profound_note`)
   - `i18n.js` (all locales for the above keys)
2. **the-story.html:** If no quantitative claims, memo states “narrative-only — no mg alignment required”; if body copy is edited, same glossary applies.
3. **Counsel:** Do not add new health/medical/efficacy claims. Alignment = consistency + existing TRUST-02 track; final counsel sign-off status recorded in the phase memo, not invented.

## Interaction

No new interactions. Locale switching behavior unchanged.

## Out of scope

Layout, images, `href`s, form logic, hero CTA wiring (other phases).
