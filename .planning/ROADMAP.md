# Roadmap: SHMALEON Landing

## Overview

**Active milestone:** v1.1 — Execution refresh (2026-04-27). Phase workspaces were cleared; all checklist items below are reset to not started.

Ship a production-credible static site: real navigation and entry point, aligned translations, accessible media, compliance-facing pages, and documented deploy plus SEO metadata.

## Phases

- [ ] **Phase 1: Site shell & navigation** — Entry page, working cross-links, consistent chrome
- [ ] **Phase 2: Content, i18n & accessibility** — Glossary, alt text, keyboard paths
- [ ] **Phase 3: Trust & compliance** — Legal destinations and copy review hooks
- [ ] **Phase 4: Launch readiness** — Deploy documentation, SEO/OG

## Phase Details

### Phase 1: Site shell & navigation

**Goal**: Users can browse the three pillars of the site without broken primary navigation.

**Depends on**: Nothing (first phase)

**Requirements**: SITE-01, SITE-02, SITE-03

**Success Criteria** (what must be TRUE):

1. A clear entry URL (e.g. `index.html` or agreed default) loads and links to Collection, Bespoke, and Story.
2. Nav links on each page target the correct relative files and highlight the active section consistently.
3. Footer brand and year match PROJECT.md decisions.

**Plans**: 2 plans

Plans:

- [ ] 01-01: Add entry page and wire all nav/footer links across the three existing pages
- [ ] 01-02: Normalize shared chrome (typos, duplicate assets, stray class text) across pages

**UI hint**: yes

### Phase 2: Content, i18n & accessibility

**Goal**: EN/RU/TH experience feels intentional; assistive tech users get meaningful structure.

**Depends on**: Phase 1

**Requirements**: I18N-01, I18N-02, A11Y-01, A11Y-02

**Success Criteria** (what must be TRUE):

1. Switching language on each page updates all strings that page owns (or documents a single supported pattern per file).
2. Shared terminology matches a short glossary referenced from `.planning/` or comments.
3. Hero and product imagery have appropriate `alt` (or `aria-hidden` + decorative pattern where truly ornamental).
4. Buttons and nav targets show visible focus and logical tab order on keyboard-only pass.

**Plans**: 2 plans

Plans:

- [ ] 02-01: Unify i18n approach or document per-page contracts; fix RU/TH glossary drift
- [ ] 02-02: Image alts, focus states, and heading hierarchy audit on all pages

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

**Goal**: The site can be handed to hosting with operational clarity.

**Depends on**: Phase 3

**Requirements**: REL-01, REL-02

**Success Criteria** (what must be TRUE):

1. README (or `.planning/deploy.md`) describes hosting steps and any env/domain assumptions.
2. Each public page has distinct title and meta description; at least one OG preview path validated manually.

**Plans**: 1 plan

Plans:

- [ ] 04-01: Deploy doc, meta/OG, and final link check before go-live

**UI hint**: no

## Progress

**Execution order:** 1 → 2 → 3 → 4  
**Last reset:** 2026-04-27 (milestone v1.1)

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-------------|
| 1. Site shell & navigation | 0/2 | Not started | — |
| 2. Content, i18n & accessibility | 0/2 | Not started | — |
| 3. Trust & compliance | 0/1 | Not started | — |
| 4. Launch readiness | 0/1 | Not started | — |
