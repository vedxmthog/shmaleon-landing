# Phase 1 — Technical Research: Site shell & navigation

**Question:** What do we need to know to plan mobile-first chrome, IA verification, footer social, and bespoke contact on static HTML?

---

## Stack constraints

- **No build step** — duplicate nav/footer patterns across three files until Phase 2 i18n unification (shared `i18n.js` optional later).
- **Tailwind CDN** — use `md:` breakpoints; default styles = mobile.
- **Material Symbols** — burger `menu`, close `close`; social icons optional (brand SVG or text links).

---

## Mobile navigation (NAV-01)

- **Pattern:** `button[aria-expanded]` controls `nav` panel; `aria-controls` id on panel; **focus trap** inside open panel (minimal: first focusable = first link, ESC closes — can be incremental).
- **Overlap fix:** Centered absolute title + `ml-auto` trailing cluster = collision. Mitigations: (a) shorter logo text / smaller `text-xl` on `<md`, (b) single row: burger left · logo center · locale right with grid `grid-cols-3`, (c) hide absolute center on `<md` and show logo in panel header.
- **Reference:** [WAI-ARIA Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) and navigation patterns for mobile menus.

---

## Locale disclosure (I18N-03)

- **Touch:** Hover-only bespoke dropdown **fails** on mobile; use **click** toggle + dismiss on outside tap.
- **Consistency:** Story uses `data-lang` + `hidden`; Collection uses `lang-en` class on `html`; Bespoke uses `data-i18n` map. Phase 1 can implement **visual** disclosure on each page with existing JS pattern extended; full unify = Phase 2.

---

## FORM-01 (client-only)

- **Validation:** `input.checkValidity()` + custom patterns for IG/TG handles; WhatsApp: `/^\+[1-9]\d{1,14}$/` style E.164.
- **Submit:** `mailto:concierge@…?subject=…&body=…` (encodeURIComponent) **or** `window.open('https://wa.me/'+digits)` — **no** POST without backend per REQUIREMENTS out-of-scope.

---

## Social links (SOCIAL-01)

- Centralize at top of one `<script>` block per page **or** single `assets/social.js` if introduced — prefer **same inline constant** copied once per file for static simplicity, with comment `<!-- TODO: replace SOCIAL_* URLs -->`.

---

## Validation Architecture

Phase has **no automated test framework** (static HTML). Validation strategy:

| Dimension | Approach |
|-----------|----------|
| Functional | Manual browser pass: iPhone width + desktop; keyboard Tab through nav |
| A11y spot | axe DevTools or Lighthouse on each page (manual) |
| Regression | Grep: no `shopping_bag`, no `person` in HTML; `href="bespoke.html"` on priority CTAs |

Nyquist “sampling” = **after each plan**: run grep checks + optional `npx serve` smoke (document in VALIDATION.md).

---

## RESEARCH COMPLETE

Findings sufficient for PLAN.md generation. No blockers.
