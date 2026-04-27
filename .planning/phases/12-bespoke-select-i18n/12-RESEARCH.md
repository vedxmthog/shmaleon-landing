# Phase 12 — Research: Bespoke `<select>` i18n

**Date:** 2026-04-27  
**Question:** How should channel `<select>` options join the existing i18n system?

## Current state

- **`bespoke.html`** (~282–286): four `<option>` elements with **hard-coded English** labels only.
- **`i18n.js`**: `shmApplyLocale` applies `[data-i18n]` via `textContent` to **all** matching elements, including `<option>` children (no special case needed).
- **`applyContactChannel()`** updates `#contact-label` from `SHM_TRANSLATIONS` by channel; **`setLanguage`** already calls `shmApplyLocale` then `applyContactChannel()`.

## Decision

1. Add **four keys** to `SHM_TRANSLATIONS` for `en`, `ru`, `th`:
   - `channel_option_telegram`
   - `channel_option_instagram`
   - `channel_option_whatsapp`
   - `channel_option_email`
2. Add **`data-i18n`** to each `<option>` with the matching key; keep **`value`** unchanged.
3. Mirror strings in **`.planning/GLOSSARY.md`** per `I18N-PATTERN.md`.
4. **Optional hardening:** `window.addEventListener('shm:locale', …)` → `applyContactChannel()` so contact label stays correct if something calls `shmApplyLocale` alone.

## Depends on

- **Phase 2** — i18n mechanism and bespoke integration baseline.

## Validation Architecture

| Dimension | Approach |
|-----------|----------|
| Static | `node --check i18n.js` — must exit 0 |
| Grep | Each `#contact-channel option` has `data-i18n="channel_option_` |
| Manual | Bespoke page: switch RU/TH; dropdown shows non-English labels; change channel; validation still works |

Nyquist: run `--check` + grep after edits; manual locale toggle before verify-work.

---

## RESEARCH COMPLETE

Findings sufficient for `12-01-PLAN.md`. No blockers.
