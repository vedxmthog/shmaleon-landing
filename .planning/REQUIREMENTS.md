# Requirements: SHMALEON Landing

**Defined:** 2026-04-26  
**Active milestone:** v1.1 — Execution refresh (2026-04-27)  
**Core value:** Cohesive, trustworthy, premium static experience aligned with brand and compliance reality.

## v1 Requirements

### Site & navigation

- [ ] **SITE-01**: **`the-collection.html` is the canonical marketing home.** Root **`index.html`** performs an immediate redirect (or hosting-level equivalent) to `the-collection.html` so `/` and the collection URL behave as one entry. Primary nav links resolve to real files (`the-collection.html`, `bespoke.html`, `the-story.html`)—no `href="#"` for pillar IA.
- [ ] **SITE-02**: Primary navigation labels and active-state treatment are consistent across all three pages for each locale.
- [ ] **SITE-03**: Footer copyright year and brand string reflect the agreed business facts (or an explicit “est.” pattern).
- [ ] **SITE-04**: The **“Join priority list”** call-to-action on the collection page (and any equivalent priority-list CTAs on other pages) navigates to **`bespoke.html`** (relative path appropriate to host depth).

### Layout & chrome (mobile-first)

- [ ] **NAV-01**: **Mobile-first shell:** On small viewports, primary nav links are available through a **burger control** that opens an accessible panel/drawer (not only hidden `md:flex` rows). The centered **SHMALEON** wordmark must not overlap language or menu controls; audit other sections (e.g. hero `min-height`, horizontal padding, stacked components) and refactor Tailwind/layout where text or controls collide.
- [ ] **CHROME-01**: Remove **`shopping_bag`** and **`person`** icon buttons/links site-wide—they are non-goals for this static marketing phase and read as dead commerce/account UI.

### Internationalization

- [ ] **I18N-01**: For each page, the chosen language (EN/RU/TH) updates all user-visible strings that page is responsible for, without leaking untranslated fragments.
- [ ] **I18N-02**: High-visibility terms (e.g. Bespoke, collection object names) use a single glossary per language across pages.
- [ ] **I18N-03**: Language selection uses a **single collapsed/disclosure control** on every page (e.g. button opens a list or menu; touch-friendly; ESC/outside-click/ARIA patterns as appropriate)—not a permanent three-button EN|RU|TH strip in the top bar on mobile.
- [ ] **I18N-04**: **Automatic locale on first visit:** Infer initial language from `navigator.language` / `navigator.languages` (map `ru-*` → RU, `th-*` → TH, else EN or agreed default). **Persist** explicit user choice (e.g. `localStorage` key such as `shm_locale`) and prefer it on later visits. Document resolution order in code or `.planning/` (browser → stored → EN fallback).
- [ ] **I18N-05**: **English is the source locale;** Russian and Thai strings cover **all** user-visible copy on Collection, Story, and Bespoke—including nav, footer, social labels, bespoke steps, and the new contact block—via **one maintainable mechanism** (unify `data-lang` class toggles, `data-i18n` maps, and bespoke’s inline `translations` object into a documented pattern).

### Bespoke & contact capture

- [ ] **FORM-01**: The bespoke flow includes **contact capture** before or with submit: user selects channel **Telegram** | **Instagram** | **WhatsApp** | **Email**. The input field switches **label, placeholder, `inputmode`/`type`, and client-side validation** to match: Telegram/Instagram → handle/username rules; WhatsApp → E.164 or validated international phone; Email → email format. Inline validation errors are perceivable (linked labels, `aria-invalid` / live region where appropriate—see A11Y in Phase 2).

### Social & discovery

- [ ] **SOCIAL-01**: Footer or agreed **bottom bar** exposes **Instagram, Telegram, and WhatsApp** links. Target URLs live in one easy-to-edit place (constants block or shared include strategy documented for static HTML) until final handles are fixed.

### Accessibility & quality

- [ ] **A11Y-01**: Non-decorative images expose concise, accurate `alt` text (not empty placeholders where content matters).
- [ ] **A11Y-02**: Primary CTAs and navigation targets are reachable and operable via keyboard (focus order, visible focus—including burger, locale disclosure, and form controls).

### Trust & compliance

- [ ] **TRUST-01**: Legal, Privacy, and Compliance destinations resolve to real pages or clearly marked stubs approved for public use.
- [ ] **TRUST-02**: Product-adjacent copy (potency, cannabis) is reviewed for placement and wording against target jurisdiction guidance (document outcome in planning notes).

### Release engineering & SEO

- [ ] **REL-01**: `README` or `.planning` note documents how to build/serve or deploy the static site to the chosen host (including how `/` maps to collection home).
- [ ] **REL-02**: Key pages include unique `<title>`, meta description, and Open Graph basics suitable for sharing.
- [ ] **SEO-01**: **Technical SEO pass:** canonical `<link rel="canonical">` for each public URL (including home redirect target), sensible `<h1>` hierarchy per page, internal link graph sanity after IA change, and optional lightweight **Organization** `JSON-LD` only if brand/legal approves structured data for this category.

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
| Server-side form submission | Static milestone; contact capture may be mailto:, `tel:`, or documented hand-off until backend exists |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SITE-01 | Phase 1 | Pending |
| SITE-02 | Phase 1 | Pending |
| SITE-03 | Phase 1 | Pending |
| SITE-04 | Phase 1 | Pending |
| NAV-01 | Phase 1 | Pending |
| CHROME-01 | Phase 1 | Pending |
| I18N-03 | Phase 1 | Pending |
| SOCIAL-01 | Phase 1 | Pending |
| FORM-01 | Phase 1 | Pending |
| I18N-01 | Phase 2 | Pending |
| I18N-02 | Phase 2 | Pending |
| I18N-04 | Phase 2 | Pending |
| I18N-05 | Phase 2 | Pending |
| A11Y-01 | Phase 2 | Pending |
| A11Y-02 | Phase 2 | Pending |
| TRUST-01 | Phase 3 | Pending |
| TRUST-02 | Phase 3 | Pending |
| REL-01 | Phase 4 | Pending |
| REL-02 | Phase 4 | Pending |
| SEO-01 | Phase 4 | Pending |

**Coverage:**

- v1 requirements: 20 total  
- Mapped to phases: 20  
- Unmapped: 0  

---
*Requirements defined: 2026-04-26*  
*Last updated: 2026-04-27 — IA, mobile-first chrome, i18n UX, social, bespoke contact, SEO*
