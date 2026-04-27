# SHMALEON Landing

## What This Is

SHMALEON is an invitation-only luxury brand positioning around **precision pastry** and **elevated botanical (cannabis) infusion**, anchored in Phuket. This repository holds a **static multi-page marketing site**: `the-collection.html` (catalogue and ritual), `bespoke.html` (configuration flow), and `the-story.html` (brand narrative). Content is available in **English, Russian, and Thai** with mixed i18n implementations per page.

## Core Value

Deliver a cohesive, trustworthy, visually premium web experience that matches the brand voice (ritual, restraint, craft) while remaining maintainable and legally defensible for the product category.

## Current Milestone: v1.1 Execution refresh

**Goal:** Deliver the existing v1 static-site roadmap from a clean execution baseline: working shell and navigation, intentional i18n and accessibility, trust and compliance surfaces, then launch documentation and SEO metadata.

**Target features:**

- **`the-collection.html` as canonical home** with root redirect; primary CTAs (e.g. join priority list) route to **Bespoke**
- **Mobile-first chrome:** burger nav, collapsed locale picker, no decorative commerce icons; overlap/reflow audit
- **Social:** Instagram, Telegram, WhatsApp in footer; **Bespoke** gains channel-based contact capture (TG / IG / WA / email) with validation
- Full **EN → RU/TH** coverage, **browser language detection** + stored override, then accessibility and trust pages
- Deploy documentation, **SEO** (canonical, meta/OG), and launch checks

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Cohesive information architecture: **collection as home**, working cross-links between the three pages, priority CTA to Bespoke, and no placeholder-only navigation.
- [ ] **Mobile-first** global chrome: burger nav, collapsed language control, no faux commerce icons; fix overlapping layouts on small screens.
- [ ] **Social links** (Instagram, Telegram, WhatsApp) in footer; **bespoke** contact capture with channel-specific validation.
- [ ] **Locale:** full RU/TH against EN source; **auto-detect** browser language on first visit with stored user override.
- [ ] Consistent multilingual product and navigation terminology across pages.
- [ ] Accessible, meaningful text alternatives for imagery and keyboard-reachable primary actions.
- [ ] Compliance-oriented placeholders or real pages for Legal, Privacy, and product-adjacent disclaimers where required.
- [ ] Launch-ready static hosting, **technical SEO** (canonical, titles/descriptions/OG), and documented deploy steps.

### Out of Scope

- **Full e-commerce / payments** — not represented in current static HTML; defer until product and legal stack exist.
- **Backend or CMS** — out of scope for initial static delivery unless explicitly added later.

## Context

- **Stack:** Plain HTML, Tailwind via CDN, Google Fonts, Material Symbols, remote hero imagery (Google CDN URLs).
- **Pages:** `the-collection.html` (canonical home), `bespoke.html`, `the-story.html`; **`index.html`** should redirect to collection per REQUIREMENTS.
- **Brand:** Nav and titles use **SHMALEON**; repository folder name may differ (`smaleon-landing`).
- **Footers** currently show © 2024; verify intentional vs update for current year.

## Constraints

- **Regulatory:** Cannabis-related claims and marketing are jurisdiction-sensitive (e.g. Thailand). Public copy and structure should be reviewed by qualified counsel before go-live.
- **Technical:** Static-first; avoid introducing build tooling unless the team commits to it.
- **Content:** Third-party image URLs create dependency and longevity risk.

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
*Last updated: 2026-04-27 — milestone v1.1; IA, mobile chrome, i18n, social, bespoke contact, SEO reflected in REQUIREMENTS*
