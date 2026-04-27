# Phase 14 — Pattern Map

## Analog: Nav + locale (existing)

- **`index.html`**: First elements after `<body>` today start with `<nav>` — insert **skip link** immediately **before** `<nav>`.
- **Focus ring:** Reuse same Tailwind stack as burger: `focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background` on skip control **in addition** to `.shm-skip-link` positioning from `shm-chrome.css`.
- **i18n:** Mirror `nav_collection` — new key `skip_to_main` in `SHM_TRANSLATIONS` en/ru/th; element `<a ...><span data-i18n="skip_to_main">...</span></a>` or `data-i18n` on `<a>` if text-only node (plan uses inner pattern consistent with nav spans).

## Files touched

| File | Role |
|------|------|
| `i18n.js` | Keys + locale apply |
| `shm-chrome.css` | Skip link + reduced-motion |
| `index.html`, `bespoke.html`, `the-story.html`, `legal.html`, `privacy.html`, `compliance.html` | Skip + `main` id |

## PATTERN MAPPING COMPLETE
