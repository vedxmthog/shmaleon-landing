---
phase: 8
slug: home-hero-cta-wiring
status: approved
shadcn_initialized: false
preset: none
created: 2026-04-27
---

# Phase 8 — UI design contract (home hero CTAs)

> Scope: **`index.html` hero** only (first full-viewport hero; lines ~301–323). Scarcity CTA at page bottom is same pattern but separate surface—mirror decisions if copy aligns.

---

## System

| Property | Value |
|----------|-------|
| Stack | Static HTML + Tailwind CDN (matches Phase 1 contract) |
| No new component library | Reuse `font-label-caps`, `text-label-caps`, border-secondary button chrome |

---

## Layout

- **Container:** `div.mt-12.w-full.max-w-xl` holds CTAs. **Target:** `flex flex-col min-[400px]:flex-row` (or `flex-wrap`) with **gap-4** so two primary actions sit side by side on wide mobile, stack on very narrow.
- **Primary (Inquire / join):** `href="bespoke.html"` — gold outline button (existing class stack).
- **Secondary (Enter / story):** `href="the-story.html"` — same visual family; optional `hover:bg-secondary/5` or ghost variant so primary stays dominant (executor picks one; document in commit).

---

## Copy (EN / RU / TH)

| Slot | EN | RU (direction) | TH (direction) |
|------|----|----------------|---------------|
| Primary | Inquire (or “Join priority list” if brand keeps current string) | Short imperative, invitation tone | Polite CTA, formal register |
| Secondary | Enter | “Enter” / “step inside” story tone | Short verb + story |
| | Use existing `data-lang` blocks per `index.html` patterns | Must match site glossary | No mixed scripts |

If brand keeps “Join Priority List” on one surface only, record decision in `08-SUMMARY.md` and keep ROADMAP success criteria (resolvable target, not exact English words).

---

## States

- **Focus:** `focus-visible:ring-2` on both anchors (match nav buttons).
- **No** `button`+`click` for navigation; **links** for story/bespoke.
- **No** `href="#"` in hero CTA group.

---

## Registry safety

- No new third-party assets in this phase. Links are relative: `bespoke.html`, `the-story.html`.
