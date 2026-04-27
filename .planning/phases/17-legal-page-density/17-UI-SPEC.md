---
phase: 17
slug: legal-page-density
status: approved
shadcn_initialized: false
preset: none
created: 2026-04-27
reviewed_at: 2026-04-27
---

# Phase 17 — UI Design Contract

> **Legal page density:** tighter **mobile** vertical rhythm on `legal.html`, `privacy.html`, and `compliance.html` after placeholder content. **No** nav/footer/typography family changes. Aligns with ROADMAP Phase 17 and TRUST-01 presentation quality.

**Stack:** static HTML + Tailwind CDN (same as rest of site). **No** new CSS files unless a shared utility in `shm-chrome.css` is later promoted — this phase is **class-only** on the three trust pages.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none (static HTML) |
| Preset | not applicable |
| Component library | none |
| Icon library | unchanged (Material Symbols in nav) |
| Font | inherits per-page `tailwind.config` (Phase 16+ body/headline tokens) — **do not change `fontFamily` in this phase** |

---

## Spacing — Trust page main column (applies to all three HTML files)

**Goal:** On **default and `sm`**, reduce vertical gaps so short placeholder copy does not leave a “runway” of empty space; from **`md` upward**, keep generous spacing for future long legal copy.

| Region | Current (excerpt) | Target contract |
|--------|-------------------|-----------------|
| `<main>` bottom padding | `pb-section-padding` (128px) at all widths | `pb-12 sm:pb-16 md:pb-24 lg:pb-section-padding` — only `lg` and up use full `section-padding` |
| Draft banner margin below | `mb-10` | `mb-6 sm:mb-8 md:mb-10` |
| Page `<h1>` margin below | `mb-8` | `mb-5 sm:mb-6 md:mb-8` |
| Body paragraphs (`p.font-body-md` in main) | `mb-4` | `mb-3 md:mb-4` |

**Horizontal padding** on the inner wrapper stays **`px-4 sm:px-6 md:px-12`** (Phase 6 contract). **Do not** change `max-w-3xl` or `mx-auto`.

---

## Typography & Color

**No changes** in this phase — inherit existing `font-headline-md`, `font-body-md`, `text-secondary`, `text-on-surface-variant`, draft banner amber treatment.

---

## Copywriting Contract

| Element | Contract |
|---------|----------|
| Draft banner text | **Unchanged** — same EN/RU/TH `data-lang` spans |
| H1 | **Unchanged** — Legal / Privacy / Compliance |
| Body | **Unchanged** — counsel placeholder copy only |

---

## Registry Safety

N/A — no npm registry or shadcn.

---

## Checker Sign-Off (planning self-check)

- [x] Dimension 1 Copywriting: N/A (no copy edits)
- [x] Dimension 2–5: Spacing/typography contracts above
- [x] Dimension 6 Registry: N/A

**Approval:** 2026-04-27 (orchestrated with plan-phase; executor re-validates in browser)
