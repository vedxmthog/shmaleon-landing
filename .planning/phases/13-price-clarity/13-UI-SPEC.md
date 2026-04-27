---
phase: 13
slug: price-clarity
status: approved
shadcn_initialized: false
preset: none
created: 2026-04-27
---

# Phase 13 — UI design contract (THB price qualifier)

> Scope: **`index.html`**, scarcity/CTA block — one **subordinate line of microcopy** directly under the **`15,000 THB`** headline so visitors understand what the number refers to (commerce-adjacent clarity without a cart).

---

## System

| Property | Value |
|----------|-------|
| Mechanism | `[data-i18n="index_scarcity_price_qualifier"]` on a single new `<p>`, `SHM_TRANSLATIONS` in `i18n.js` |
| Source of truth | `.planning/GLOSSARY.md` (review), then `i18n.js` |
| Number display | `15,000 THB` stays in the **`<h2>`** (no structural change to thousands separator or currency) |

---

## Markup

- **Placement:** New `<p>` **immediately after** the `15,000 THB` `<h2>`, **before** the existing italic "Limited Weekly Production" `<p>`.
- **Styling:** Subordinate to headline — smaller body text, `text-on-surface-variant` (or same token family as nearby secondary copy in that section). **No** all-caps label treatment; this is a clarifier, not a second hero line.

---

## Semantic (locked for this phase)

- **Intent:** The figure is **per completed piece (unit)**, not per gram, not a partial deposit, not an open-ended "from" range unless the headline is later changed to "From 15,000 THB" (out of scope here).
- **EN:** Short declarative: "Per piece."
- **RU:** Equivalent: "За единицу."
- **TH:** Equivalent: "ต่อชิ้น"

(If brand/legal later require "inclusive" or "from", that is a **new copy pass**, not an executor interpretation.)

---

## Non-goals

- Do not add pricing engines, strikethrough, or multiple price tiers.
- Do not change `Limited Weekly Production` or CTA in this phase.

---

## Registry safety

- No new third-party assets.
