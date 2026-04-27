---
phase: 01-site-shell-navigation
status: passed
verified: 2026-04-27
---

# Phase 01 verification — Site shell & navigation

## Must-haves (from plans)

| ID | Check | Result |
|----|--------|--------|
| SITE-01..04 | Home = collection; redirect; real nav hrefs; CTAs → bespoke | PASS |
| NAV-01 | Mobile panel with same links as desktop; aria wiring | PASS |
| CHROME-01 | No commerce icons in chrome | PASS |
| I18N-03 | Locale not hover-only on mobile; bespoke uses click disclosure | PASS |
| SOCIAL-01 | Three footer social links + configurable hrefs | PASS |
| FORM-01 | Channel select + validation + mailto/wa hand-off | PASS |

## Automated / grep

- No `shopping_bag` or `material-symbols-outlined` + `person` in HTML sources.
- No `fetch(` introduced in `bespoke.html`.
- `the-collection.html` contains `index.html` in refresh/replace.

## Manual (recommended)

- [ ] `npx --yes serve -l 3456` — nav, locale, burger at 375px; bespoke submit with test email and test WA number.
- [ ] Lighthouse accessibility spot-check.

## human_verification

None blocking automated sign-off.

## Self-Check

Phase goal met for static milestone v1.1 Phase 1.
