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

- [x] **Phase 5: Locale chrome parity** — Shared `shm-chrome.css` plus the same per-page EN|RU|TH strip, separators, mobile disclosure, and focus rings on all pages (including legal/privacy/compliance); `data-shm-locale-toggle` + `window.shmCloseMobileNav` contract (locale binding implemented inline, not a separate script).
- [x] **Phase 6: Responsive & overflow pass** — `min-w-0` / `overflow-x` safety; hero and product image heights scale on small viewports; responsive type for hero and story titles; horizontal padding `px-4 sm:px-6` before `margin-edge`; bespoke step headers and intensity cards avoid clipping.
- [x] **Phase 7: Bespoke hero full-bleed** — Hero background image spans full viewport width (no `max-w-container-max` gutter on the media block); form content remains in `max-w-4xl` with responsive padding.
- [ ] **Phase 8: Home hero CTA wiring** — “Inquire” / “Enter” map to real destinations (`bespoke.html`, story, scroll target, or mailto); no dead buttons.
- [x] **Phase 9: Production social URLs** — Replace `TODO` links or hide the block until URLs are final.
- [x] **Phase 10: Claims & counsel alignment** — Single voice for product/dose language across index, story, and bespoke; record review in `.planning/`. (completed 2026-04-27)
- [x] **Phase 11: Accent unification** — Replace ad-hoc gold (e.g. Story CTA `#C5A059`) with design-token `secondary` everywhere. (completed 2026-04-27)
- [x] **Phase 12: Bespoke `<select>` i18n** — Channel option labels via `i18n` keys for EN/RU/TH. (completed 2026-04-27)
- [x] **Phase 13: Price clarity** — One line of microcopy under `15,000 THB` (per unit / from / inclusive) in all locales. (completed 2026-04-27)
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

### Phase 5: Locale chrome parity

**Goal**: Shared `shm-chrome.css` and `shm-locale-ui.js` deliver identical EN|RU|TH strip, separators, mobile disclosure, and focus rings on all pages (including legal/privacy/compliance); `data-shm-locale-toggle` and `window.shmCloseMobileNav` contract is stable.

**Depends on**: Phase 4 (launch hygiene baseline); stacks on Phase 1–2 chrome work.

**Requirements**: I18N-03, A11Y-02

**Success Criteria** (what must be TRUE):

1. Locale UI matches across pages; no one-off copy of the old three-button pattern on mobile.
2. Documented contract: `data-shm-locale-toggle`, `window.shmCloseMobileNav` for executors and future pages.

**Plans**: 0 plans (executed as rolling fixes)

Plans:

- [x] Chrome + locale script parity site-wide

**UI hint**: yes

### Phase 6: Responsive & overflow pass

**Goal**: `min-w-0` / `overflow-x` safety; hero and product image heights scale on small viewports; responsive type for hero and story titles; horizontal padding `px-4 sm:px-6` before `margin-edge`; bespoke step headers and intensity cards avoid clipping.

**Depends on**: Phase 5

**Requirements**: A11Y-01, A11Y-02

**Success Criteria** (what must be TRUE):

1. No horizontal scroll on common mobile widths for home, story, bespoke, and legal shells.
2. Hero/story typographic scale reads intentional at `sm` and below.

**Plans**: 0 plans (executed as rolling fixes)

Plans:

- [x] Overflow and responsive type pass

**UI hint**: yes

### Phase 7: Bespoke hero full-bleed

**Goal**: Bespoke hero background image spans full viewport width (no `max-w-container-max` gutter on the media block); form content remains in `max-w-4xl` with responsive padding.

**Depends on**: Phase 6

**Requirements**: A11Y-01

**Success Criteria** (what must be TRUE):

1. Media block is full-bleed; content column remains narrow and legible.
2. Visual regression pass on narrow + wide viewports.

**Plans**: 0 plans (executed as rolling fixes)

Plans:

- [x] Bespoke hero full-bleed layout

**UI hint**: yes

### Phase 8: Home hero CTA wiring

**Goal**: Home (`index.html`) hero **Inquire** / **Enter** (and locale equivalents) map to real destinations—`bespoke.html`, `the-story.html`, in-page section anchors, or `mailto:` / channel links as appropriate; **no** dead buttons, `href="#"`, or placeholder handlers.

**Depends on**: Phase 7

**Requirements**: HERO-CTA-01

**Success Criteria** (what must be TRUE):

1. Every hero primary/secondary CTA has a resolvable target in EN, RU, and TH.
2. Quick manual pass: click/tap each CTA on mobile + desktop; no no-op.

**Plans**: 0 plans

Plans:

- [x] 08-01: Wire hero CTAs to real destinations; verify i18n labels unchanged

**UI hint**: yes

### Phase 9: Production social URLs

**Goal**: Replace `TODO` placeholder social deep links in the static site with final production Instagram, Telegram, and WhatsApp targets **or** hide the social row until the brand finalizes handles—so users never see dead `instagram.com/TODO`–style links in a production deploy.

**Depends on**: Phase 5 (footer chrome and locale are stable)

**Requirements**: SOCIAL-01 (production fulfillment)

**Success Criteria** (what must be TRUE):

1. Every public page that shows footer social links either uses **ship-ready URLs** in one documented edit location or the three links are **omitted** (or visually suppressed) with a code comment and `.planning` note when URLs are TBD.
2. `rg 'TODO' --glob '*.html'` (and key JS) shows **no** `instagram.com/TODO`, `t.me/TODO`, or `wa.me/TODO` (unless explicitly documented as a deliberate staging exception).

**Plans**: 1 plan (`09-01-PLAN.md`)

Plans:

- [x] 09-01: Centralize social URLs in `social-urls.js`, remove all `*TODO` hrefs, update README and deploy

**UI hint**: no (link targets only; layout unchanged)

### Phase 10: Claims & counsel alignment

**Goal**: Single voice for product, potency, and dose-related language across `index.html`, `the-story.html`, and `bespoke.html` in every locale; align with TRUST-02 counsel posture; record review outcome or alignment notes in `.planning/`.

**Depends on**: Phase 2; stacks on Phase 3 (trust memos) where present.

**Requirements**: TRUST-02 (copy alignment and review record)

**Success Criteria** (what must be TRUE):

1. No contradictory product/dose/potency phrasing between the three pages for EN, RU, and TH (editorial pass + short `.planning/` note listing decisions).
2. `.planning/` holds an updated **review / alignment** artifact (e.g. memo or addendum) tied to this pass—not placeholder-only if counsel has ruled.

**Plans**: 0 plans

**UI hint**: yes (copy and microcopy)

### Phase 11: Accent unification

**Goal**: Replace ad-hoc gold (e.g. Story CTA `#C5A059`) with design-token `secondary` everywhere.

**Depends on**: Phase 6

**Requirements**: (visual consistency — site-wide)

**Success Criteria** (what must be TRUE):

1. No stray hex gold outside the agreed token; Story CTA and peers use `secondary` (or shared CSS variable) consistently.

**Plans**: 0 plans

**UI hint**: yes

### Phase 12: Bespoke `<select>` i18n

**Goal**: Channel option labels in bespoke flow use `i18n` keys for EN/RU/TH.

**Depends on**: Phase 2

**Requirements**: I18N-01, I18N-05

**Success Criteria** (what must be TRUE):

1. Channel `<select>` options fully translated; no hard-coded English-only option text.

**Plans**: 1 plan (`12-01-PLAN.md`)

Plans:

- [x] 12-01: Add `channel_option_*` keys to `i18n.js`; `data-i18n` on bespoke channel `<option>`; `shm:locale` → `applyContactChannel`; mirror `GLOSSARY.md`

**UI hint**: yes

### Phase 13: Price clarity

**Goal**: One line of microcopy under `15,000 THB` (per unit / from / inclusive) in all locales.

**Depends on**: Phase 2

**Requirements**: (commerce-adjacent clarity)

**Success Criteria** (what must be TRUE):

1. THB line meaning is unambiguous in EN, RU, and TH; same semantic intent in each locale.

**Plans**: 1 plan (`13-01-PLAN.md`)

Plans:

- [x] 13-01: `index_scarcity_price_qualifier` in `i18n.js` + `data-i18n` under `15,000 THB` on `index.html`; mirror `GLOSSARY.md`

**UI hint**: yes

### Phase 14: A11y follow-up

**Goal**: Skip link; `prefers-reduced-motion` for any future motion; audit focus order after hero CTA fix.

**Depends on**: Phase 8

**Requirements**: A11Y-01, A11Y-02

**Success Criteria** (what must be TRUE):

1. Documented pass: skip link, reduced-motion where applicable, focus order re-checked for hero + nav.

**Plans**: 0 plans

**UI hint**: yes

### Phase 15: Media hardening

**Goal**: Self-host or stabilize image URLs; width/height hints to reduce CLS.

**Depends on**: Phase 6

**Requirements**: A11Y-01 (image stability)

**Success Criteria** (what must be TRUE):

1. No hot-linked fragile URLs in hero/catalog without fallback; key images have dimensions or stable layout.

**Plans**: 2 plans (`15-01-PLAN.md`, `15-02-PLAN.md`)

**UI hint**: partial (images)

### Phase 16: Typography pass (optional)

**Goal**: Body type with more character than Inter while keeping Noto for display.

**Depends on**: Phase 4

**Requirements**: (optional polish)

**Success Criteria** (what must be TRUE):

1. If executed: document font stack change and check CLS/readability; if skipped: N/A.

**Plans**: 0 plans

**UI hint**: yes

### Phase 17: Legal page density

**Goal**: Tighter mobile rhythm on draft legal/privacy/compliance if needed after content finalization.

**Depends on**: Phase 3

**Requirements**: TRUST-01

**Success Criteria** (what must be TRUE):

1. Mobile legal pages read without excessive whitespace runaway; class/HTML tweaks as needed.

**Plans**: 0 plans

**UI hint**: yes

### Phase 18: Dead class cleanup

**Goal**: Remove or implement utility classes (e.g. legacy `slow fade`) project-wide.

**Depends on**: Phase 5

**Requirements**: (hygiene)

**Success Criteria** (what must be TRUE):

1. No unused or misleading utility classes; JS/CSS match actual behavior.

**Plans**: 0 plans

**UI hint**: partial

## Progress

**Execution order:** 1 → 2 → 3 → 4  
**Last reset:** 2026-04-27 (milestone v1.1)

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Site shell & navigation | 0/3 | Not started | — |
| 2. Content, i18n & accessibility | 0/3 | Not started | — |
| 3. Trust & compliance | 0/1 | Not started | — |
| 4. Launch readiness | 0/1 | Not started | — |
