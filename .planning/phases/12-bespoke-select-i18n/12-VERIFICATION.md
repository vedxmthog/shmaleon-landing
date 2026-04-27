---
phase: 12-bespoke-select-i18n
status: passed
verified: 2026-04-27
---

# Phase 12 verification — bespoke select i18n

## Must-haves (from plan)

| Criterion | Check |
|-----------|--------|
| Four options have `data-i18n="channel_option_*"` | `bespoke.html` lines ~283–286 |
| Keys in en, ru, th | `i18n.js` grep `channel_option_` × 12 lines |
| `value=` unchanged | `telegram`, `instagram`, `whatsapp`, `email` |
| Glossary | `channel_option_telegram` … `channel_option_email` rows in `GLOSSARY.md` |
| `shm:locale` listener | `bespoke.html` contains `addEventListener('shm:locale'` |

## Automated

- `node --check i18n.js` — exit 0

## Human follow-up (optional)

- Toggle RU/TH on `bespoke.html`; open channel dropdown and confirm labels.

## Self-Check: PASSED
