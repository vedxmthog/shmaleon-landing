# Internationalization pattern (SHMALEON static site)

## File load order

1. Load `i18n.js` **before** any page script that calls `shmApplyLocale`, `shmPersistLocale`, or reads `SHM_TRANSLATIONS`.
2. Inline page scripts run after `i18n.js` so they can attach `DOMContentLoaded` handlers that call `window.shmGetInitialLocale()` (phase 02-02+) then `window.shmApplyLocale(...)`.

## Public API (`i18n.js`)

| Name | Role |
|------|------|
| `SHM_LOCALE_STORAGE_KEY` | Constant `'shm_locale'` |
| `SHM_TRANSLATIONS` | `{ en, ru, th }` flat key → string maps |
| `shmReadStoredLocale()` | Returns `'en' \| 'ru' \| 'th' \| null` (null if missing or `Storage` throws) |
| `shmPersistLocale(lang)` | Persists choice; try/catch around `localStorage` |
| `shmApplyLocale(lang)` | Applies UI: `[data-i18n]`, `[data-i18n-placeholder]`, root `lang-*` class on `document.documentElement`, syncs `.lang-btn` and known locale labels |
| `shmGetInitialLocale()` | Resolution order documented in `.planning/I18N-RESOLUTION.md` (phase 02-02) |

## `[data-lang]` + CSS (index, the-story body copy)

- **Mechanism:** `shmApplyLocale` sets `document.documentElement` class to `lang-{en|ru|th}` (strips previous `lang-*` tokens, preserves e.g. `dark`).
- **Visibility:** Pages include a small CSS block:

```css
.lang-ru [data-lang="en"], .lang-th [data-lang="en"],
.lang-en [data-lang="ru"], .lang-th [data-lang="ru"],
.lang-en [data-lang="th"], .lang-ru [data-lang="th"] {
  display: none;
}
```

- **No extra `hidden` toggles** are required on story copy when this pattern is used; one visible `data-lang` block per phrase.

## `[data-i18n]` (shared chrome)

- Nav labels, bespoke configuration UI, and footers that use a **single** DOM node per string use `data-i18n="key"`. Text is replaced from `SHM_TRANSLATIONS[activeLocale][key]`.
- **Do not** mix bespoke-only keys with index `data-lang` triplets for the same nav label; use one mechanism per element.

## Glossary workflow

1. Edit `.planning/GLOSSARY.md` (source of truth for copy review).
2. Mirror changes into `i18n.js` `SHM_TRANSLATIONS`.
3. Prefer reusing existing keys (`nav_bespoke`, etc.) before adding new ones.
