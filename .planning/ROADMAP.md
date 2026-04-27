# Roadmap: SHMALEON Landing

## Overview

**Active milestone:** v1.1 — Execution refresh (2026-04-27). Phase workspaces were cleared; all checklist items below are reset to not started.

Ship a production-credible static site: **`the-collection.html` as home**, mobile-first chrome (burger nav, collapsed locale), full EN/RU/TH coverage with browser language detection, bespoke contact capture, social links, compliance-facing pages, and documented deploy plus SEO.

## Phases

- [ ] **Phase 1: Site shell & navigation** — Home IA, mobile-first chrome, social footer, bespoke contact UI
- [ ] **Phase 2: Content, i18n & accessibility** — Full translations, auto-locale + persistence, glossary, a11y/form polish
- [ ] **Phase 3: Trust & compliance** — Legal destinations and copy review hooks
- [ ] **Phase 4: Launch readiness** — Deploy documentation, SEO (canonical, meta/OG, optional JSON-LD)

## Phase Details

### Phase 1: Site shell & navigation

**Goal**: Users can enter on the collection home, navigate all pillars on **phone and desktop**, reach bespoke from the priority CTA, leave social contacts in footer, and complete bespoke **contact fields** with channel-aware validation.

**Depends on**: Nothing (first phase)

**Requirements**: SITE-01, SITE-02, SITE-03, SITE-04, NAV-01, CHROME-01, I18N-03, SOCIAL-01, FORM-01

**Success Criteria** (what must be TRUE):

1. `/` resolves to the collection experience via **`index.html` → `the-collection.html`** (or documented host rewrite) and nav `href`s point at real HTML files.
2. **“Join priority list”** on the collection page goes to **`bespoke.html`**; nav active states remain consistent.
3. Below the `md` breakpoint, **burger + panel** exposes the same links as desktop; **SHMALEON** title does not collide with controls; at least one documented pass fixes other overlap issues (hero padding, etc.).
4. **`shopping_bag`** and **`person`** are gone from all pages.
5. **Language** is chosen from a **collapsed control** (pattern reusable across pages).
6. Footer includes **Instagram, Telegram, WhatsApp** links (editable URL block).
7. Bespoke includes **channel selector + validated contact input** (English UI acceptable until Phase 2 completes string pass).

**Plans**: 3 plans

Plans:

- [ ] 01-01: **Home & IA** — `index.html` redirect to `the-collection.html`; wire nav/footer across all pages; **Join priority list → `bespoke.html`**; remove dead `#` pillar links.
- [ ] 01-02: **Mobile-first chrome** — Implement burger + accessible drawer/panel; remove commerce/person icons; **locale disclosure** in header; responsive audit (nav/hero/sections) to stop overlap.
- [ ] 01-03: **Footer & bespoke contact** — Add social link row with centralized URLs; add bespoke **contact channel** UI (Telegram / Instagram / WhatsApp / Email) with matching validation and submit hand-off per static constraint (see REQUIREMENTS out-of-scope).

**UI hint**: yes

### Phase 2: Content, i18n & accessibility

**Goal**: EN/RU/TH is complete and intentional; locale is auto-detected then user-sticky; assistive tech and keyboard users get full coverage including the new controls.

**Depends on**: Phase 1

**Requirements**: I18N-01, I18N-02, I18N-04, I18N-05, A11Y-01, A11Y-02

**Success Criteria** (what must be TRUE):

1. One documented i18n pattern; **no** mixed untranslated islands on Collection, Story, or Bespoke (including form labels, errors, social `aria-label`s if used).
2. Glossary alignment for shared terms (RU/TH).
3. **First visit:** language from browser prefs; **after user choice:** `localStorage` wins on return; behavior documented.
4. Imagery: meaningful `alt` or decorative pattern; **focus order** sane for burger, disclosure, and form errors.

**Plans**: 3 plans

Plans:

- [ ] 02-01: **Unify i18n + full RU/TH** — Consolidate `data-lang` / `data-i18n` / bespoke dictionary; translate all strings including contact block and chrome.
- [ ] 02-02: **Auto-locale + persistence** — Implement `navigator.languages` mapping, storage key, and edge cases (private mode, missing storage).
- [ ] 02-03: **A11y & form polish** — Heading hierarchy, focus rings, `aria-expanded` on burger/locale, live validation messaging for FORM-01.

**UI hint**: yes

### Phase 3: Trust & compliance

**Goal**: Legal and product-adjacent claims have a defensible public footprint.

**Depends on**: Phase 2

**Requirements**: TRUST-01, TRUST-02

**Success Criteria** (what must be TRUE):

1. Legal, Privacy, and Compliance links resolve to HTML (or MD-exported HTML) with non-placeholder counsel-approved text or an explicit “draft — not for publication” gate.
2. TRUST-02 review outcome recorded under `.planning/` (short decision memo).

**Plans**: 1 plan

Plans:

- [ ] 03-01: Implement trust pages and tie footers; capture compliance review notes

**UI hint**: yes

### Phase 4: Launch readiness

**Goal**: The site can be handed to hosting with operational clarity and **search/social** hygiene.

**Depends on**: Phase 3

**Requirements**: REL-01, REL-02, SEO-01

**Success Criteria** (what must be TRUE):

1. README (or `.planning/deploy.md`) describes hosting steps, `/` → collection behavior, and any env/domain assumptions.
2. Each public page has distinct title, meta description, and OG basics; **canonical URLs** set for home + pillars; internal links re-checked after IA.
3. Optional Organization JSON-LD only if approved.

**Plans**: 1 plan

Plans:

- [ ] 04-01: Deploy doc, canonical + meta/OG + SEO-01 checklist, final link crawl before go-live

**UI hint**: no

## Progress

**Execution order:** 1 → 2 → 3 → 4  
**Last reset:** 2026-04-27 (milestone v1.1)

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Site shell & navigation | 0/3 | Not started | — |
| 2. Content, i18n & accessibility | 0/3 | Not started | — |
| 3. Trust & compliance | 0/1 | Not started | — |
| 4. Launch readiness | 0/1 | Not started | — |
