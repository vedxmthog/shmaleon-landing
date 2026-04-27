---
phase: 12-bespoke-select-i18n
status: clean
depth: quick
reviewed: 2026-04-27
---

# Code review — Phase 12 (quick)

## Scope

`i18n.js` (new keys), `bespoke.html` (select options, `shm:locale` listener), `.planning/GLOSSARY.md`

## Findings

- **`value=` preserved** — validation and hand-off logic unchanged.
- **`shmApplyLocale`** already applies `textContent` to `[data-i18n]`; options behave like other nodes.
- **Locale event** avoids stale `#contact-label` if `shmApplyLocale` is invoked without `setLanguage`.

## Conclusion

No blocking issues for phase goal.
