# Locale resolution order (`shmGetInitialLocale`)

1. **Explicit user choice** — `localStorage` key `shm_locale` (`SHM_LOCALE_STORAGE_KEY`). Values: `en`, `ru`, or `th`. If present, it wins on every page load.
2. **Browser languages** — If the key is absent, `navigator.languages` (or `navigator.language`) is scanned in order. Tags are lowercased. First match: `th` or `th-*` → `th`; `ru` or `ru-*` → `ru`.
3. **Fallback** — `en` when no tag matches or when `navigator` is unavailable.
4. **Storage failures** — `shmReadStoredLocale` returns `null` if `localStorage` is missing or throws (e.g. private mode). Resolution then continues at step 2. `shmPersistLocale` is a no-op on failure but does not throw.

Language toggle buttons should call `shmPersistLocale(lang)` then `shmApplyLocale(lang)` so the choice becomes sticky.
