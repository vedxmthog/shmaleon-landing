---
phase: 2
slug: content-i18n-accessibility
status: approved
shadcn_initialized: false
preset: none
created: 2026-04-27
---

# Phase 2 — UI Design Contract (i18n + a11y)

> Extends Phase 1 static HTML + Tailwind CDN. **No new component library.** This phase locks **string coverage**, **locale behavior**, and **accessibility** expectations for the same three pillars: `index.html`, `bespoke.html`, `the-story.html`.

---

## Design system (unchanged)

| Property | Value |
|----------|-------|
| Stack | Plain HTML + Tailwind CDN |
| Icons | Material Symbols Outlined |
| Typography | Inter + Noto Serif (existing) |
| Accent | `#e9c176` — use for **visible focus** partner with neutral surface |

---

## Internationalization (UI rules)

1. **Single mechanism** (I18N-05): User-visible copy on all three pages comes from **one documented pattern** — shared `i18n.js` + either `data-i18n` keys or `data-lang` spans per UI-SPEC migration notes in PLAN 02-01. No orphaned hardcoded nav labels in one language while body is translated.
2. **Glossary (I18N-02):** High-visibility terms (Bespoke, Collection, Story, form names **Ingot / Pulse / Heart**, intensity tier names) use **one EN/RU/TH table** in `.planning/GLOSSARY.md` (or equivalent); implementations must match within a ±0 tolerance (same word choice per locale across pages).
3. **Locale control (I18N-03):** Collapsed/disclosure pattern from Phase 1 — **current locale code** visible on the control (`EN` / `RU` / `TH`); full list only inside disclosure/panel. Mobile must not show a permanent three-button strip in the **fixed header** after Phase 1 chrome is applied.
4. **Bespoke contact block:** Channel labels, placeholders, inline errors, and `aria-label` on social/footer icons (if present) are **fully localized** — no English-only error strings when RU/TH active.

---

## Accessibility (UI rules)

1. **Images:** Meaningful catalog/hero images use **non-empty** `alt` reflecting `data-alt` or copy-derived description; decorative images use `alt=""` and no misleading `data-alt`.
2. **Focus:** All interactive elements (links, buttons, disclosure triggers, inputs) show **visible** focus — at minimum `focus-visible:outline` or Tailwind `focus-visible:ring-2 focus-visible:ring-secondary` on custom-styled controls.
3. **Disclosures:** Burger and locale triggers expose **`aria-expanded`** + **`aria-controls`** (IDs match panel/list); ESC and outside click close where Phase 1 PLAN specifies.
4. **Forms:** Invalid fields set **`aria-invalid="true"`**; error text linked via **`aria-describedby`**; optional **`role="status"`** or **`aria-live="polite"`** region for submit-level messages (one per flow).

---

## Copy tone

- Errors: short, literal, translatable (no idioms that break in TH/RU).
- `aria-label` on icon-only controls: localized per active language.

---

## Checker sign-off

- [x] Dimension 1 Copywriting: PASS (all locales + errors)
- [x] Dimension 2–6: PASS (inherits Phase 1; focus/disclosure rules additive)
- [x] Registry safety: PASS (no new CDN deps required for Phase 2)

**Approval:** approved 2026-04-27 (orchestrator — static HTML)
