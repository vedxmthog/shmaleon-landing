---
phase: 02-content-i18n-accessibility
status: passed
verified: 2026-04-27
---

# Phase 02 verification — content, i18n, accessibility

## Must-haves (from plans)

| Criterion | Check |
|-----------|--------|
| Single i18n mechanism (`i18n.js` + glossary + pattern doc) | `i18n.js`, `.planning/GLOSSARY.md`, `.planning/I18N-PATTERN.md` present; pages load script before inline JS |
| EN/RU/TH chrome on index, story, bespoke | `data-i18n` / `data-lang` + `lang-*` on root |
| `shm_locale` sticky + navigator fallback | `.planning/I18N-RESOLUTION.md`; `shmGetInitialLocale` in `i18n.js`; pages call it on `DOMContentLoaded` |
| Meaningful `img` alts from `data-alt` | `shmHydrateImageAlts` invoked from `shmApplyLocale` |
| Single `<h1>` on index, bespoke, story | Grep confirms one each |
| Disclosure ARIA + focus rings | Burger/locale buttons: `aria-expanded`, `aria-controls`, `focus-visible:ring-*` |
| Bespoke form: localized errors, `aria-invalid`, `aria-describedby`, live region | `bespoke.html` + `error_*` keys in `i18n.js` |

## Automated / spot checks

- `node --check i18n.js` — pass
- No `const translations =` in `bespoke.html` — removed
- `src="i18n.js"` on all three main HTML pages

## Human follow-up (optional)

- Keyboard-only walkthrough on real devices; screen reader spot check on bespoke errors.

## Self-Check

## Self-Check: PASSED
