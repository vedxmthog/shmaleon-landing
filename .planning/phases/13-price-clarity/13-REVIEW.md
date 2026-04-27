---
phase: 13-price-clarity
status: clean
depth: quick
reviewed: 2026-04-27
---

# Code review — Phase 13 (quick)

## Scope

`i18n.js`, `index.html` scarcity section, `.planning/GLOSSARY.md`

## Findings

- **Injection:** `shmApplyLocale` uses `textContent` for `data-i18n` — static strings only.
- **Order:** Qualifier sits between `15,000 THB` heading and existing limited-production paragraph; CTA untouched.
- **i18n:** Single node avoids triple `data-lang` duplication for this line.

## Conclusion

No blocking issues.
