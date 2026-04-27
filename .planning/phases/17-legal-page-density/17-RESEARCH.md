# Phase 17 — Research

**Status:** complete  
**Question answered:** What do we need to know to plan **Legal page density** (mobile rhythm on `legal.html`, `privacy.html`, `compliance.html`)?

---

## Current state (codebase)

- All three trust pages share the same shell: fixed nav, `<main id="main-content" class="... pt-28 md:pt-32 pb-section-padding">`, inner `max-w-3xl` column.
- Theme defines `section-padding: 128px` — `pb-section-padding` creates **128px bottom padding** on all breakpoints unless overridden.
- Placeholder copy is **short** (draft banner + H1 + three `p` blocks). On narrow viewports the combination of `mb-10` (banner), `mb-8` (H1), `mb-4` (paragraphs), and **128px** bottom padding reads as **excessive empty scroll** after the last paragraph.
- **Phase 6** already set horizontal padding to `px-4 sm:px-6` before `margin-edge`; no change to that contract here.
- **No new i18n keys** are required for this phase; only utility classes on existing markup.
- **TRUST-01** (defensible public footprint) is supported by **readable, non-wasteful** presentation of legal surfaces — density is presentational, not a copy change.

---

## Recommended approach

1. **Responsive bottom padding on `<main>`** — use smaller `pb-*` on default/`sm`/`md`, and keep `lg:` (or `xl:`) at `pb-section-padding` for wide layouts where long counsel-approved text will eventually live.
2. **Tighten vertical stack inside the content column** — reduce draft-banner margin, H1 margin, and paragraph `mb` **on small screens only**; restore roomier values from `md:` up so future long-form legal text does not feel cramped on tablet/desktop.
3. **Apply the same class edits to all three files** in one pass to avoid drift (same pattern as Phase 3 / 16 multi-page edits).

**Out of scope:** font family changes, nav/footer, draft-banner copy, or trust link URLs.

---

## Validation Architecture

**Dimension 8 (execution feedback):** This repo is static HTML with no test runner. Validation is **manual viewport + automated string checks**:

- After implementation, `rg` must confirm the **new responsive utility pattern** is present in all three files (proves the edit landed).
- Executor documents a **375px-width** (or devtools iPhone) pass in `17-01-SUMMARY.md`: no horizontal scroll, readable stack, no accidental hiding of `data-lang` blocks.
- **Regression:** Draft gate strings and three-locale `data-lang` spans must remain; do not change `main` `id` or skip-link target.

---

## RESEARCH COMPLETE

Proceed to `17-UI-SPEC.md` and `17-01-PLAN.md`.
