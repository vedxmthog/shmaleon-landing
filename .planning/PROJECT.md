# SHMALEON Landing

## What This Is

SHMALEON is an invitation-only luxury brand positioning around **precision pastry** and **elevated botanical (cannabis) infusion**, anchored in Phuket. This repository holds a **static multi-page marketing site**: **`index.html`** (catalogue and ritual—the public home), `bespoke.html` (configuration flow), and `the-story.html` (brand narrative). `the-collection.html` redirects to the home for legacy URLs. Content is available in **English, Russian, and Thai** with mixed i18n implementations per page.

## Core Value

Deliver a cohesive, trustworthy, visually premium web experience that matches the brand voice (ritual, restraint, craft) while remaining maintainable and legally defensible for the product category.

## Current Milestone: v1.1 Execution refresh

**Goal:** Deliver the existing v1 static-site roadmap from a clean execution baseline: working shell and navigation, intentional i18n and accessibility, trust and compliance surfaces, then launch documentation and SEO metadata.

**Target features:**

- **`index.html` as canonical home** (collection experience); legacy `the-collection.html` → redirect; primary CTAs (e.g. join priority list) route to **Bespoke**
- **Mobile-first chrome:** burger nav, collapsed locale picker, no decorative commerce icons; overlap/reflow audit
- **Social:** Instagram, Telegram, WhatsApp in footer; **Bespoke** gains channel-based contact capture (TG / IG / WA / email) with validation
- Full **EN → RU/TH** coverage, **browser language detection** + stored override, then accessibility and trust pages
- Deploy documentation, **SEO** (canonical, meta/OG), and launch checks

## Requirements

### Validated

- Cohesive information architecture: **collection as home**, cross-links, priority CTA to Bespoke — **Phase 01 (2026-04-27)**.
- **Mobile-first** global chrome: burger nav, collapsed/click language control, no faux commerce icons; small-screen padding — **Phase 01**.
- **Social links** (Instagram, Telegram, WhatsApp) in footer; **bespoke** channel-based contact capture with client-side hand-off — **Phase 01** (replace TODO URLs/email before launch).
- **Home hero CTAs:** primary **Inquire** → `bespoke.html`, secondary **Enter** → `the-story.html`, with EN/RU/TH labels — **Phase 08 (2026-04-27)**.
- **Accent tokens on public HTML:** priority-list / scarcity-style CTAs use design-token classes (`secondary`, `tertiary-container`); no ad-hoc gold hex in shipped `*.html` — **Phase 11 (2026-04-27)**.
- **A11y follow-up:** localized skip links, `main-content` landmark, `prefers-reduced-motion`, informative alts on index/story catalog imagery, keyboard verification checklist — **Phase 14 (2026-04-27)**.
- **Media hardening (hero / catalogue / story):** self-hosted `media/shm-*.jpg` with provenance README; relative paths; intrinsic `width`/`height`, `decoding="async"`, below-the-fold `loading="lazy"`, concise alts (A11Y-01 for in-scope images) — **Phase 15 (2026-04-27)**.

### Active

- [ ] **Locale:** full RU/TH against EN source; **auto-detect** browser language on first visit with stored user override.
- [ ] Consistent multilingual product and navigation terminology across pages.
- [ ] Compliance-oriented placeholders or real pages for Legal, Privacy, and product-adjacent disclaimers where required.
- [ ] Launch-ready static hosting, **technical SEO** (canonical, titles/descriptions/OG), and documented deploy steps.

### Out of Scope

- **Full e-commerce / payments** — not represented in current static HTML; defer until product and legal stack exist.
- **Backend or CMS** — out of scope for initial static delivery unless explicitly added later.

## Context

- **Stack:** Plain HTML, Tailwind via CDN, Google Fonts, Material Symbols; **hero/catalogue/story** imagery is **self-hosted** under `media/` (Phase 15); fonts/CDN scripts unchanged.
- **Pages:** **`index.html`** (home / collection), `bespoke.html`, `the-story.html`; **`the-collection.html`** is a redirect stub only.
- **Brand:** Nav and titles use **SHMALEON**; repository folder name may differ (`smaleon-landing`).
- **Footers** currently show © 2024; verify intentional vs update for current year.

## Constraints

- **Regulatory:** Cannabis-related claims and marketing are jurisdiction-sensitive (e.g. Thailand). Public copy and structure should be reviewed by qualified counsel before go-live.
- **Technical:** Static-first; avoid introducing build tooling unless the team commits to it.
- **Content:** Third-party **font/script** CDNs remain; main marketing **photos** on index / bespoke / the-story are local assets under `media/`.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Initialize GSD planning in-repo | Track landing work with phases, requirements, and verification | — Pending |
| Coarse roadmap (4 phases) | Small surface area; fewer phases reduce overhead | — Pending |
| v1.1 execution refresh | Clear stale phase dirs; align STATE with roadmap; restart work from Phase 1 | Applied 2026-04-27 |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):

1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):

1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-27 — Phase 15 complete; self-hosted `media/` imagery and A11Y image attributes in PROJECT context*
