# Requirements: SHMALEON Landing

**Defined:** 2026-04-26  
**Active milestone:** v1.1 — Execution refresh (2026-04-27)  
**Core value:** Cohesive, trustworthy, premium static experience aligned with brand and compliance reality.

## v1 Requirements

### Site & navigation

- [ ] **SITE-01**: Visitor can open a designated entry page and follow navigation to The Collection, Bespoke, and The Story without dead `href="#"` loops for primary IA.
- [ ] **SITE-02**: Primary navigation labels and active-state treatment are consistent across all three pages for each locale.
- [ ] **SITE-03**: Footer copyright year and brand string reflect the agreed business facts (or an explicit “est.” pattern).

### Internationalization

- [ ] **I18N-01**: For each page, the chosen language (EN/RU/TH) updates all user-visible strings that page is responsible for, without leaking untranslated fragments.
- [ ] **I18N-02**: High-visibility terms (e.g. Bespoke, collection object names) use a single glossary per language across pages.

### Accessibility & quality

- [ ] **A11Y-01**: Non-decorative images expose concise, accurate `alt` text (not empty placeholders where content matters).
- [ ] **A11Y-02**: Primary CTAs and navigation targets are reachable and operable via keyboard (focus order, visible focus).

### Trust & compliance

- [ ] **TRUST-01**: Legal, Privacy, and Compliance destinations resolve to real pages or clearly marked stubs approved for public use.
- [ ] **TRUST-02**: Product-adjacent copy (potency, cannabis) is reviewed for placement and wording against target jurisdiction guidance (document outcome in planning notes).

### Release engineering

- [ ] **REL-01**: `README` or `.planning` note documents how to build/serve or deploy the static site to the chosen host.
- [ ] **REL-02**: Key pages include unique `<title>`, meta description, and Open Graph basics suitable for sharing.

## v2 Requirements

### Commerce & identity

- **COMM-01**: Authenticated area or account flows (if brand requires it).
- **COMM-02**: Cart/checkout integration tied to real inventory and legal fulfillment.

### Content operations

- **CMS-01**: Non-developer content updates via CMS or structured data source.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Native mobile apps | Web-first deliverable; separate product decision |
| Full marketing automation | Email/CRM left to future milestone |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SITE-01 | Phase 1 | Pending |
| SITE-02 | Phase 1 | Pending |
| SITE-03 | Phase 1 | Pending |
| I18N-01 | Phase 2 | Pending |
| I18N-02 | Phase 2 | Pending |
| A11Y-01 | Phase 2 | Pending |
| A11Y-02 | Phase 2 | Pending |
| TRUST-01 | Phase 3 | Pending |
| TRUST-02 | Phase 3 | Pending |
| REL-01 | Phase 4 | Pending |
| REL-02 | Phase 4 | Pending |

**Coverage:**

- v1 requirements: 11 total  
- Mapped to phases: 11  
- Unmapped: 0  

---
*Requirements defined: 2026-04-26*  
*Last updated: 2026-04-27 — milestone v1.1; traceability unchanged (all v1 items pending)*
