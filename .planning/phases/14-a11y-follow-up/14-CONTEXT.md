# Phase 14: A11y follow-up - Context

**Gathered:** 2026-04-27  
**Status:** Ready for planning  
**Source:** `/gsd-discuss-phase 14` — roadmap + requirements + codebase scout (interactive gray-area pick: full phase scope; defaults aligned to WCAG 2.1 AA and existing i18n/chrome patterns)

<domain>
## Phase Boundary

Deliver the **A11y follow-up** from ROADMAP: **skip link** to main content; **`prefers-reduced-motion`** handling for transitions/animations already used in the static shell and content; **keyboard focus order audit** after Phase 8 hero CTA wiring — especially **hero + primary nav** (burger, locale disclosure, desktop nav links). Satisfy **A11Y-01** (meaningful `alt` where content matters) and **A11Y-02** (keyboard-reachable CTAs and nav) on the public marketing pages in scope.

**Depends on:** Phase 8 (hero CTA targets and labels).

**Out of scope:** New motion-heavy features, full-site WCAG conformance audit beyond this checklist, backend/forms server behavior.

</domain>

<decisions>
## Implementation Decisions

### Skip link
- **D-01:** Add one **visually hidden until focused** skip link as the **first focusable element** in document order inside `<body>` on each page that uses the marketing chrome: at minimum **`index.html`**, **`bespoke.html`**, **`the-story.html`**; include **`legal.html`**, **`privacy.html`**, **`compliance.html`** if they use the same global nav pattern.
- **D-02:** Skip link `href` targets the primary content wrapper: set **`id="main-content"`** on the existing **first `<main>`** (add the id if absent). Do not introduce a duplicate landmark.
- **D-03:** Skip link visible label is **localized** via the same mechanism as nav copy (**`data-i18n` + `i18n.js`**), with EN / RU / TH strings (e.g. English: “Skip to main content”). Exact phrasing can follow `GLOSSARY.md` tone if entries are added there.

### `prefers-reduced-motion`
- **D-04:** Add **global** CSS under `@media (prefers-reduced-motion: reduce)` in **`shm-chrome.css`** to minimize or remove **non-essential** transitions/animations that affect layout perception (e.g. long `transition-all` / opacity transitions on chrome and hero). Prefer disabling or shortening to **effectively instant** while preserving instant state changes (no reliance on animation for meaning).
- **D-05:** **Future motion:** Any new animation added after this phase must respect the same media query (document in code comment or README snippet).

### Focus order and keyboard (hero + nav)
- **D-06:** **Expected tab order** (verify and fix if broken): skip link → **mobile:** burger → locale control → **desktop:** left cluster nav links (Collection, Bespoke, Story) → other header controls → **first meaningful focus inside `<main>`** (hero **Inquire** then **Enter** per current DOM on `index.html`) → rest of page. Center wordmark stays **non-interactive** (`pointer-events-none` is fine).
- **D-07:** **Mobile nav + locale:** Keep existing **Escape** closes panels; **`aria-expanded` / `aria-hidden`** on toggle targets stays consistent with open/closed state (already partially implemented in inline scripts). Re-check **focus return** after close if focus was inside a panel (improve if missing).
- **D-08:** **Documented pass:** Add a short **keyboard walkthrough note** in phase verification artifacts (e.g. `14-VERIFICATION.md` after planning, or bullet list in phase `SUMMARY` post-execute) listing pages checked and “skip link → main → hero CTAs → nav” result.

### Images and A11Y-01
- **D-09:** **Hero / catalog images:** Where an image carries **meaningful** visual content, set **`alt`** to a concise accurate description; **`data-alt`** on `index.html` hero should not be the only store — align **`alt`** with the intended description (or confirm intentional decorative treatment with empty `alt` and no misleading content).
- **D-10:** **Scope of alt pass:** **`index.html`**, **`bespoke.html`**, **`the-story.html`** plus legal/compliance stubs if they include non-decorative imagery.

### Claude's Discretion
- Exact RU/TH skip-link translations if not yet in `i18n.js` (natural, concise).
- Whether to add `tabindex="-1"` on `#main-content` for programmatic focus from skip link (recommended pattern: optional **focus** without adding to tab order — implement if skip link should move focus into main for SR consistency).
- Fine-tuning which Tailwind utility transitions are suppressed under reduced-motion vs. kept for opacity that does not affect vestibular sensitivity.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Requirements and roadmap
- `.planning/REQUIREMENTS.md` — **A11Y-01**, **A11Y-02** (definitions and acceptance intent)
- `.planning/ROADMAP.md` — **Phase 14** goal, success criteria, **Depends on: Phase 8**
- `.planning/PROJECT.md` — Active accessibility expectations; stack (static HTML, Tailwind CDN, `shm-chrome.css`)

### Prior phase context
- `.planning/phases/09-production-social-urls/09-CONTEXT.md` — Footer/social patterns (not primary to 14 but shared chrome)

### Project guidance
- `CLAUDE.md` — regulatory and static-site constraints

### Code (implementation truth)
- `index.html` — nav, `<main>`, hero CTAs, locale/burger behavior
- `bespoke.html`, `the-story.html` — same chrome conventions
- `shm-chrome.css` — global styles including reduced-motion bucket
- `i18n.js` — keys for skip link labels

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable assets
- **Chrome & ARIA:** Nav toggle, locale toggle, and panels already use **`aria-expanded`**, **`aria-controls`**, **`aria-hidden`**, **`role="menu"`** / **`menuitem`** on `index.html` (and mirrored on other pages).
- **Focus rings:** **`focus-visible:ring-2`** pattern on burger, locale, and hero CTAs.
- **Landmarks:** **`index.html`** already has **`<main>`** wrapping hero+content; no skip link; **`<main>`** needs **`id`** for skip target.

### Established patterns
- **i18n:** **`data-i18n`** for nav; **`data-lang`** blocks for hero/buttons; **`i18n.js`** as single map — skip link should use **`data-i18n`** (or agreed key pattern) for consistency.
- **Motion:** Tailwind **`transition-*`** and **`duration-*`** on nav, links, hero buttons, top bar — candidates for **`prefers-reduced-motion`** overrides.

### Integration points
- **First element in `<body>`:** Insert skip link **before** fixed `<nav>` so it is first in tab order.
- **Phase 8:** Hero primary/secondary anchors and translated labels already wired — focus audit validates order after those links.

</code_context>

<specifics>
## Specific Ideas

- Success criteria ask for a **documented pass** — ship a short checklist artifact per phase, not only code changes.
- Hero image currently has **`alt=""`** with **`data-alt="..."`** — treat as **must-resolve** under A11Y-01 unless explicitly decorative.

</specifics>

<deferred>
## Deferred Ideas

- Comprehensive automated accessibility testing (axe CI, etc.) — not required for this phase unless already in roadmap.
- **Phase 15** media hardening (image stability, CLS) may touch some of the same nodes — coordinate alt/loading attributes without duplicating work.

</deferred>

---

*Phase: 14-a11y-follow-up*  
*Context gathered: 2026-04-27*
