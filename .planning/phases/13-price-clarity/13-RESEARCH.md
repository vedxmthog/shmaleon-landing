# Phase 13: Price clarity — RESEARCH

## RESEARCH COMPLETE

**Date:** 2026-04-27

---

## Findings

### Current implementation

- **Location:** `index.html` — scarcity block (~lines 525–535). Headline is literal `15,000 THB` with no `data-i18n` (number is not translated). Following line is the italic triplet for "Limited Weekly Production" via `data-lang`.
- **i18n:** `i18n.js` drives `[data-i18n]` and locales `en` / `ru` / `th`. `shmApplyLocale` updates all `data-i18n` nodes. Nav/footer on `index.html` already use this pattern; the price block is the gap.

### Pattern choice

- **Use `data-i18n` + new key** `index_scarcity_price_qualifier` (not a third `data-lang` triplet) so one DOM node and one glossary row stay aligned with `I18N-PATTERN.md` for shared-chrome style copy.
- **GLOSSARY.md** first, then `i18n.js`, per existing workflow.

### Copy rationale

- Roadmap options *(per unit / from / inclusive)*: **per-unit (piece)** is the smallest change that disambiguates the headline without rewriting the number line. "From" and "inclusive" would need different headline or longer legal microcopy; defer unless product asks.

### Dependency

- **Phase 2** already delivered `SHM_TRANSLATIONS` + `shmApplyLocale`; this phase only adds keys and markup.

---

## Risks

| Risk | Mitigation |
|------|------------|
| Mistranslation of "per piece" in TH | Use standard commerce phrasing "ต่อชิ้น"; GLOSSARY sign-off |
| User thinks price includes shipping/tax | Out of scope for one line; TRUST/counsel can extend later |

---

## Validation Architecture

**Dimensions for this static site:**

1. **Source completeness:** `index_scarcity_price_qualifier` present in `en`, `ru`, and `th` in `i18n.js`.
2. **Binding:** `index.html` contains exactly one `data-i18n="index_scarcity_price_qualifier"` in the scarcity section after the `15,000 THB` h2.
3. **Runtime (manual UAT):** Switch EN → RU → TH via the site locale control; the new line updates and matches GLOSSARY intent.

**Automated (execution):**
- `node --check i18n.js` exits 0.
- `rg 'index_scarcity_price_qualifier' i18n.js` — expect 3 string values (or 3+ if key name appears in comments; prefer grep counts for key in object bodies).

**No** unit test framework in repo; regression is **grep + one manual pass** in browser.

---

## References

- `.planning/ROADMAP.md` — Phase 13 goal
- `.planning/I18N-PATTERN.md`
- `.planning/phases/13-price-clarity/13-UI-SPEC.md`
