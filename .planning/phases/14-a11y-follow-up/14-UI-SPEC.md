---
phase: 14
slug: a11y-follow-up
status: approved
shadcn_initialized: false
preset: none
created: 2026-04-27
reviewed_at: 2026-04-27
---

# Phase 14 — UI Design Contract

> **A11y follow-up:** visual/interaction contracts for skip link, keyboard focus, reduced motion, and image text alternatives. **No new layout chrome** — extends existing SHMALEON static HTML + Tailwind CDN + `shm-chrome.css`.

**Aligns with:** `.planning/phases/14-a11y-follow-up/14-CONTEXT.md` (D-01–D-10).

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none (static HTML) |
| Preset | not applicable |
| Component library | none |
| Icon library | Material Symbols Outlined (existing nav only; skip link is text-only) |
| Font | **Inter** (body/UI), **Noto Serif** (display — unchanged; skip link uses Inter) |

---

## Spacing Scale

Declared values for **new UI introduced in Phase 14** (multiples of 4). All other spacing **inherits** existing pages.

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Skip link focus outline offset companion |
| sm | 8px | Skip link horizontal padding when visible (focus) |
| md | 16px | Skip link vertical padding when visible (focus) |

**Exceptions:** none.

---

## Typography

**Phase 14 declares only roles touched by the skip link and a11y copy.** Remaining type **inherits** `index.html` / Tailwind theme (`font-body-md`, `font-headline-xl`, etc.).

| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Skip link (visible on focus) | 12px | 500 | 1.0 |
| Body (reference) | 16px | 400 | 1.5 |
| Label / caps (nav family reference) | 10px | 500 | 1.0 |

---

## Color

**Inherits** existing Tailwind tokens (`background`, `on-surface`, `secondary`, `outline`, etc.). Phase 14 does not introduce new palette roles.

| Role | Value | Usage |
|------|-------|-------|
| Dominant (60%) | `#121414` (`background`) | Page backdrop (unchanged) |
| Secondary (30%) | surface / neutral chrome | Nav bar, panels (unchanged) |
| Accent (10%) | `#e9c176` (`secondary`) | Primary hero CTAs, active nav emphasis (unchanged) |
| Focus ring | `secondary` + ring-offset `background` | Skip link, burger, locale, hero links — **same pattern as shipped** (`focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background`) |

**Accent reserved for:** primary hero CTAs, active nav state, **visible focus rings** (keyboard), scarcity/secondary CTA accents per Phase 11 tokens — **not** for decorative-only elements.

---

## Copywriting Contract

| Element | Copy |
|---------|------|
| Skip link (EN) | Skip to main content |
| Skip link (RU) | К основному содержанию |
| Skip link (TH) | ข้ามไปยังเนื้อหาหลัก |
| Primary CTA (unchanged) | Inquire → `bespoke.html` (per Phase 8 / i18n) |
| Secondary CTA (unchanged) | Enter → `the-story.html` (per Phase 8 / i18n) |
| Empty state heading | N/A — not in phase scope |
| Empty state body | N/A — not in phase scope |
| Error state | N/A for skip link; bespoke form errors unchanged (linked labels + `aria-invalid` per FORM-01) |
| Destructive confirmation | N/A — no destructive actions in this phase |

**i18n:** Skip strings live in `i18n.js` with keys agreed at implementation time (e.g. `skip_to_main`); visible label must update with locale like nav.

---

## Focus, Skip Link, and Keyboard

| Contract | Specification |
|----------|----------------|
| **DOM order** | Skip link is **first focusable** in `<body>`, before fixed `<nav>`. |
| **Visibility** | **Visually hidden** until `:focus` / `:focus-visible`; on focus, appears as a **small text control** (label typography above) with **sm/md padding** and **same focus ring treatment** as header controls. |
| **Target** | `href="#main-content"`; `<main id="main-content">` (single landmark). |
| **Tab order expectation** | Skip → header interactive cluster (burger / desktop nav / locale) → first focusable in main (hero **Inquire** then **Enter** on `index.html`) → rest of page. Wordmark remains non-interactive. |
| **Panels** | Escape closes mobile nav and locale panel; `aria-expanded` / `aria-hidden` stay in sync. If focus was inside a closed panel, **return focus to launcher** when practical (improvement allowed per CONTEXT D-07). |

---

## Motion (`prefers-reduced-motion`)

| Contract | Specification |
|----------|----------------|
| **Location** | Rules in **`shm-chrome.css`** inside `@media (prefers-reduced-motion: reduce)`. |
| **Intent** | Reduce or remove **non-essential** transitions (long `transition-all`, opacity sweeps on chrome/hero) so updates are **effectively instant**; **no information conveyed by animation alone**. |
| **Future** | Any new motion must be gated by the same media query (comment in CSS). |

---

## Imagery (A11Y-01)

| Contract | Specification |
|----------|----------------|
| **Meaningful images** | Concise, accurate **`alt`** in EN intent (hero/catalog); decorative backgrounds may use `alt=""` only if **purely decorative** and not redundant with adjacent text. |
| **Hero** | Resolve `data-alt` vs `alt=""` mismatch: either promote description to **`alt`** or confirm decorative treatment per CONTEXT D-09. |

---

## Visual Hierarchy (focal points)

| Surface | Primary focal | Notes |
|---------|---------------|-------|
| Collection home | Hero **H1** + **Inquire** / **Enter** | Unchanged; skip link is **not** a visual focal point — keyboard/screen-reader first. |
| Bespoke / Story | Page `<h1>` or lead section | Skip lands at `#main-content` then natural tab order. |

---

## Registry Safety

| Registry | Blocks Used | Safety Gate |
|----------|-------------|-------------|
| shadcn official | none | not required |
| Third-party block registries | none | not applicable — static HTML |

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS
- [x] Dimension 2 Visuals: PASS
- [x] Dimension 3 Color: PASS
- [x] Dimension 4 Typography: PASS
- [x] Dimension 5 Spacing: PASS
- [x] Dimension 6 Registry Safety: PASS

**Approval:** approved 2026-04-27

---

*Generated for Phase 14 — UI design contract. Downstream: `/gsd-plan-phase 14`.*
