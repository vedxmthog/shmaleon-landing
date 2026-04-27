# Roadmap: SHMALEON Landing

## Overview

**Active milestone:** v1.1 — Execution refresh (2026-04-27), plus **v1.2 UI/UX** backlog (Phases 5–18 below; 5–7 started/completed 2026-04-27).

Ship a production-credible static site: **`index.html` as home** (collection experience), mobile-first chrome (burger nav, collapsed locale), full EN/RU/TH coverage with browser language detection, bespoke contact capture, social links, compliance-facing pages, and documented deploy plus SEO.

## Phases

- [ ] **Phase 1: Site shell & navigation** — Home IA, mobile-first chrome, social footer, bespoke contact UI
- [ ] **Phase 2: Content, i18n & accessibility** — Full translations, auto-locale + persistence, glossary, a11y/form polish
- [ ] **Phase 3: Trust & compliance** — Legal destinations and copy review hooks
- [ ] **Phase 4: Launch readiness** — Deploy documentation, SEO (canonical, meta/OG, optional JSON-LD)

### v1.2 — UI/UX polish (backlog)

- [x] **Phase 5: Locale chrome parity** — Shared `shm-chrome.css` + `shm-locale-ui.js`; identical EN|RU|TH strip, separators, mobile disclosure, and focus rings on all pages (including legal/privacy/compliance); `data-shm-locale-toggle` + `window.shmCloseMobileNav` contract.
- [x] **Phase 6: Responsive & overflow pass** — `min-w-0` / `overflow-x` safety; hero and product image heights scale on small viewports; responsive type for hero and story titles; horizontal padding `px-4 sm:px-6` before `margin-edge`; bespoke step headers and intensity cards avoid clipping.
- [x] **Phase 7: Bespoke hero full-bleed** — Hero background image spans full viewport width (no `max-w-container-max` gutter on the media block); form content remains in `max-w-4xl` with responsive padding.
- [ ] **Phase 8: Home hero CTA wiring** — “Inquire” / “Enter” map to real destinations (`bespoke.html`, story, scroll target, or mailto); no dead buttons.
- [ ] **Phase 9: Production social URLs** — Replace `TODO` links or hide the block until URLs are final.
- [ ] **Phase 10: Claims & counsel alignment** — Single voice for product/dose language across index, story, and bespoke; record review in `.planning/`.
- [ ] **Phase 11: Accent unification** — Replace ad-hoc gold (e.g. Story CTA `#C5A059`) with design-token `secondary` everywhere.
- [ ] **Phase 12: Bespoke `<select>` i18n** — Channel option labels via `i18n` keys for EN/RU/TH.
- [ ] **Phase 13: Price clarity** — One line of microcopy under `15,000 THB` (per unit / from / inclusive) in all locales.
- [ ] **Phase 14: A11y follow-up** — Skip link; `prefers-reduced-motion` for any future motion; audit focus order after hero CTA fix.
- [ ] **Phase 15: Media hardening** — Self-host or stabilize image URLs; width/height hints to reduce CLS.
- [ ] **Phase 16: Typography pass (optional)** — Body type with more character than Inter while keeping Noto for display.
- [ ] **Phase 17: Legal page density** — Tighter mobile rhythm on draft legal/privacy/compliance if needed after content finalization.
- [ ] **Phase 18: Dead class cleanup** — Remove or implement utility classes (e.g. legacy `slow fade`) project-wide.

## Phase Details

### Phase 1: Site shell & navigation

**Goal**: Users can enter on the collection home, navigate all pillars on **phone and desktop**, reach bespoke from the priority CTA, leave social contacts in footer, and complete bespoke **contact fields** with channel-aware validation.

**Depends on**: Nothing (first phase)

**Requirements**: SITE-01, SITE-02, SITE-03, SITE-04, NAV-01, CHROME-01, I18N-03, SOCIAL-01, FORM-01

**Success Criteria** (what must be TRUE):

1. **`/` serves `index.html`** (collection content); **`the-collection.html`** redirects to it; nav `href`s use **`index.html`**, `bespoke.html`, `the-story.html`.
2. **“Join priority list”** on the collection page goes to **`bespoke.html`**; nav active states remain consistent.
3. Below the `md` breakpoint, **burger + panel** exposes the same links as desktop; **SHMALEON** title does not collide with controls; at least one documented pass fixes other overlap issues (hero padding, etc.).
4. **`shopping_bag`** and **`person`** are gone from all pages.
5. **Language** is chosen from a **collapsed control** (pattern reusable across pages).
6. Footer includes **Instagram, Telegram, WhatsApp** links (editable URL block).
7. Bespoke includes **channel selector + validated contact input** (English UI acceptable until Phase 2 completes string pass).

**Plans**: 3 plans

Plans:

- [x] 01-01: **Home & IA** — **`index.html`** as collection home; **`the-collection.html`** stub → `index.html`; wire nav/footer across all pages; **Join / priority list CTAs → `bespoke.html`**; remove dead `#` pillar links.
- [x] 01-02: **Mobile-first chrome** — Implement burger + accessible drawer/panel; remove commerce/person icons; **locale disclosure** in header; responsive audit (nav/hero/sections) to stop overlap.
- [x] 01-03: **Footer & bespoke contact** — Add social link row with centralized URLs; add bespoke **contact channel** UI (Telegram / Instagram / WhatsApp / Email) with matching validation and submit hand-off per static constraint (see REQUIREMENTS out-of-scope).

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

- [x] 02-01: **Unify i18n + full RU/TH** — Consolidate `data-lang` / `data-i18n` / bespoke dictionary; translate all strings including contact block and chrome.
- [x] 02-02: **Auto-locale + persistence** — Implement `navigator.languages` mapping, storage key, and edge cases (private mode, missing storage).
- [x] 02-03: **A11y & form polish** — Heading hierarchy, focus rings, `aria-expanded` on burger/locale, live validation messaging for FORM-01.

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

- [x] 04-01: Deploy doc, canonical + meta/OG + SEO-01 checklist, final link crawl before go-live

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
