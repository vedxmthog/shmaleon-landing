---
phase: 01-site-shell-navigation
status: clean
depth: quick
reviewed: 2026-04-27
---

# Code review — Phase 01 (quick)

## Scope

`index.html`, `bespoke.html`, `the-story.html`, `README.md`

## Findings

- **Static hand-off:** `BESPOKE_MAILTO` and `SOCIAL` use placeholders by design; documented in README and plan `user_setup`.
- **XSS / injection:** Mailto and WhatsApp bodies use `sanitizeContactInput` stripping `<`/`>`; acceptable for static marketing hand-off.
- **a11y:** Focus rings added on key toggles; mobile panels use `aria-hidden` toggling. Burger does not swap icon to “close” — minor UX gap, non-blocking.
- **i18n:** Index mobile locale menu labels are EN/RU/TH only (not localized); acceptable for Phase 2 scope per plan notes.

## Conclusion

No blocking issues for phase goal. Advisory: replace TODO social URLs and concierge email before production.
