---
phase: 13-price-clarity
status: passed
verified: 2026-04-27
---

# Phase 13 verification — price clarity

## Must-haves

| Criterion | Check |
|-----------|--------|
| Key in en/ru/th | `grep index_scarcity_price_qualifier i18n.js` — 3 assignments |
| Single `data-i18n` on index | `index.html` scarcity section |
| Order | `h2` (15,000 THB) → qualifier `p` → italic limited-production `p` |
| GLOSSARY | Row matches `i18n.js` strings |

## Automated

- `node --check i18n.js` — pass

## Self-Check: PASSED
