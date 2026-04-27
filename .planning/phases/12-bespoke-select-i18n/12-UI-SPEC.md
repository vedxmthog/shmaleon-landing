---
phase: 12
slug: bespoke-select-i18n
status: approved
shadcn_initialized: false
preset: none
created: 2026-04-27
---

# Phase 12 — UI design contract (bespoke `<select>` i18n)

> Scope: **`bespoke.html`** channel `<select>` (`#contact-channel`) — option **visible labels** must follow the same **`data-i18n` + `SHM_TRANSLATIONS`** mechanism as the rest of bespoke chrome.

---

## System

| Property | Value |
|----------|-------|
| Mechanism | `[data-i18n]` on each `<option>`; `shmApplyLocale` in `i18n.js` sets `textContent` (already supports any element with the attribute) |
| Source of truth | `i18n.js` maps + `.planning/GLOSSARY.md` |

---

## Markup

- Keep **`value`** attributes unchanged: `telegram` | `instagram` | `whatsapp` | `email` (submit logic, validation, mailto/wa deep links depend on them).
- Each `<option>` gets **`data-i18n="channel_option_*"`** with English fallback text in body matching `SHM_TRANSLATIONS.en`.

---

## Behavior

- On **`setLanguage`** / **`shmApplyLocale`**, option labels update like other `data-i18n` nodes.
- **`applyContactChannel()`** must still run after locale change (already invoked from `setLanguage`); optionally subscribe to **`shm:locale`** so label/placeholder sync if `shmApplyLocale` is called without `setLanguage` (defensive).

---

## Copy direction

- **EN:** Telegram, Instagram, WhatsApp, Email.
- **RU/TH:** Localized or brand-consistent labels per `GLOSSARY` — no English-only options when RU/TH active.

---

## Non-goals

- Do not change validation rules or `value` strings.
- Do not migrate bespoke to `data-lang` triplets for this control.

---

## Registry safety

- No new third-party assets.
