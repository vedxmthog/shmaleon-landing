---
phase: 08-home-hero-cta-wiring
status: clean
depth: quick
reviewed: 2026-04-27
---

# Code review — Phase 08 (quick)

## Scope

`index.html` (hero CTA cluster ~316–327)

## Findings

- **Navigation:** Only relative `bespoke.html` and `the-story.html` in hero; no `javascript:` or external hero targets.
- **i18n:** Labels follow existing `data-lang` + `.lang-*` CSS hide pattern used elsewhere on the page.
- **a11y:** `focus-visible:ring-*` added on both CTAs; native `<a>` elements preserve link semantics.

## Conclusion

No blocking issues for phase goal.
