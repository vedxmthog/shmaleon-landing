---
phase: 3
slug: trust-compliance
status: approved
shadcn_initialized: false
preset: none
created: 2026-04-27
---

# Phase 3 — UI design contract (trust & compliance)

> Extends Phases 1–2: plain HTML + Tailwind CDN. This phase adds **legal pillar pages** and **footer trust links** with a clear **publication / draft** posture per TRUST-01.

---

## Design system (unchanged)

| Property | Value |
|----------|-------|
| Stack | Plain HTML + Tailwind CDN (existing pattern) |
| Icons | Material Symbols Outlined (if used — optional on legal pages) |
| Typography | Inter + Noto Serif |
| Surfaces | `bg-neutral-950` footer band; `text-neutral-*` + `text-secondary` accents |

---

## New surfaces

| Route | Role |
|-------|------|
| `legal.html` | Terms / legal information (jurisdiction, invitation-only positioning as counsel directs) |
| `privacy.html` | Privacy / data (static site: minimal PII; align with real practices) |
| `compliance.html` | Product category / regulatory framing (cannabis-adjacent — counsel-reviewed wording only) |

All three: **mobile-first** reading width (max-w prose or existing content column pattern), top nav + footer **consistent** with `index.html` / `bespoke.html` / `the-story.html` (same link set and locale control when Phase 2 i18n applies site-wide).

---

## Draft vs publication (TRUST-01)

1. If counsel has **not** approved final copy: every legal surface must show a **visible draft gate** at the top of the `<body>` content — e.g. banner: **Draft — not for publication** (EN; add RU/TH `data-lang` spans matching Phase 2 string pattern).
2. If approved: remove draft banner; ensure pages still state effective date / version if counsel requires it (concrete text supplied by legal — executor does not invent claims).

---

## Copy & i18n

1. **Trust link labels** in footers: already `data-lang` / `data-i18n` on Collection; **Bespoke** uses `data-i18n` keys. New pages must use the **same locale mechanism** as the rest of the milestone (one pattern — no English-only body on RU/TH if Phase 2 is complete for those files).
2. **Product-adjacent language** (potency, cannabis): only where TRUST-02 memo allows; no new marketing claims in legal pages beyond counsel-approved text.

---

## Navigation & footer

1. `Legal` → `legal.html`, `Privacy` → `privacy.html`, `Compliance` → `compliance.html` (relative `href` from each page).
2. No `href="#"` for trust links on any pillar page after this phase.
3. New legal pages include the same **primary nav** and **footer** blocks as other pillars (or shared partials if introduced — prefer copy-paste consistency with `index.html` to match static constraints).

---

## Accessibility

- Each new page: one logical `<h1>`; main landmark (`<main>`) wraps primary content; draft banner is **not** a misleading heading — use `role="status"` or `aria-live="polite"` only if the banner can change (static draft: simple `p` with high contrast is enough).
- Trust links: real `href` targets; focus styles match Phase 1/2.

---

## Checker sign-off

- [x] Dimension 1: Draft/publish path explicit
- [x] Dimension 2–3: Nav/footer consistency with existing pillars
- [x] Registry: No new heavy deps
- [x] TRUST-01/02 traceable in plan tasks

**Approval:** approved 2026-04-27 (orchestrator)
