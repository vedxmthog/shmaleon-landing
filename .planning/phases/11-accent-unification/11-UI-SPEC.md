---
phase: 11
slug: accent-unification
status: approved
shadcn_initialized: false
preset: none
created: 2026-04-27
---

# Phase 11 — UI design contract (accent unification)

> Scope: Remove **ad-hoc gold hex** (`#C5A059` and similar arbitrary bracket colors) from public HTML; use **Tailwind semantic tokens** (`border-secondary`, `text-secondary`, `hover:bg-secondary`, `hover:text-tertiary-container`) so accents match the M3 config embedded in each page.

---

## System

| Property | Value |
|----------|-------|
| Stack | Static HTML + Tailwind CDN + per-page `tailwind.config` (existing) |
| Source of truth | `secondary` / `tertiary-container` in inline `tailwind.config.theme.extend.colors` |

---

## Primary surface (mandatory)

**`the-story.html` — closing CTA** (~line 370):

- **Today:** `border-[#C5A059]`, `text-[#C5A059]`, `hover:bg-[#C5A059]`, `hover:text-black`
- **Target:** Match **`index.html` scarcity / hero gold CTA** pattern:
  - `border border-secondary text-secondary`
  - `hover:bg-secondary hover:text-tertiary-container`
  - Keep existing padding, typography (`font-label-caps`, `text-label-caps`, tracking), width, and `transition-all duration-500`
  - Add `focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background` for parity with Phase 8 hero CTAs

---

## Secondary surfaces (audit)

- **`the-collection.html`:** No Tailwind on stub; link already uses `#e9c176` (canonical `secondary` hex). **No change required** unless audit finds a different hex; document in SUMMARY if left as inline hex with rationale.
- **`bespoke.html`:** Neutral dividers `#2C2C2C` are **out of scope** (not gold). Optional **follow-up** in same phase: replace `hover:text-[#0A0A0A]` on submit with `hover:text-tertiary-container` for token parity (executor only if timeboxed in plan task).

---

## Non-goals

- Do not edit JSON token values inside `tailwind.config` blocks unless product requests a palette change.
- Do not refactor remote image URLs or copy.

---

## Registry safety

- No new third-party assets.
