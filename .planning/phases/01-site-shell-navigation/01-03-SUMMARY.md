---
phase: 01-site-shell-navigation
plan: 03
subsystem: ui
tags: [html, forms, static-handoff]

requires:
  - phase: 01-02
    provides: Mobile-safe chrome and nav
provides:
  - Footer Instagram / Telegram / WhatsApp links driven from `SOCIAL` constants
  - Bespoke section 04: channel select + validated contact field + mailto / wa.me hand-off
  - README note for replacing `BESPOKE_MAILTO` and `SOCIAL` before launch
affects: [launch-readiness]

tech-stack:
  added: []
  patterns: [Client-only submit via mailto and wa.me with encodeURIComponent body]

key-files:
  created: []
  modified: [index.html, bespoke.html, the-story.html, README.md]

key-decisions:
  - "Placeholder URLs remain TODO; README documents replacement before production"

patterns-established:
  - "Sanitize contact and inscription snippets before building mailto body (strip < >)"

requirements-completed: [SOCIAL-01, FORM-01]

duration: 40min
completed: 2026-04-27
---

# Phase 01: Plan 03 Summary

**Footer social row on all pillars plus bespoke concierge channel UI with validation and static mailto/WhatsApp hand-off; README calls out pre-launch URL replacement.**

## Accomplishments

- `SOCIAL` map syncs footer hrefs on load; `rel="noopener noreferrer"` on external links.
- Bespoke: `#contact-channel`, dynamic label/placeholder/inputmode, `aria-invalid` + visible error on invalid submit; success path opens `mailto:` (with `BESPOKE_MAILTO`) or `wa.me` with encoded text.
- README documents client-only hand-off and constants to replace.

## Deviations from Plan

None — no backend `fetch` added.

## Self-Check: PASSED

- Acceptance strings: `contact-channel`, validation path, `concierge@` / `mailto` present in script.

---
*Phase: 01-site-shell-navigation · Plan 03*
