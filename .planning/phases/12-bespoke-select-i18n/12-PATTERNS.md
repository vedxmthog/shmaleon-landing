# Phase 12 — Pattern map (bespoke select i18n)

**Date:** 2026-04-27

## Files

| File | Role |
|------|------|
| `i18n.js` | Add `channel_option_*` keys under `en`, `ru`, `th` |
| `bespoke.html` | Add `data-i18n` on `<option>` under `#contact-channel`; optional `shm:locale` listener |
| `.planning/GLOSSARY.md` | Four new rows |

## Reference

Existing bespoke labels already use `data-i18n` (e.g. `contact_channel_label`). Options use the **same** attribute; `shmApplyLocale` applies `textContent` uniformly.

```html
<option value="telegram" data-i18n="channel_option_telegram">Telegram</option>
```

---

## PATTERN MAPPING COMPLETE
