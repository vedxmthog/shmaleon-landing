# Phase 2 — Pattern map

**Phase:** 02 — Content, i18n & accessibility

---

## Files to create

| File | Role | Analog in codebase |
|------|------|---------------------|
| `i18n.js` | Shared locale resolution + apply + persistence | `bespoke.html` inline `translations` + `setLanguage` (lines ~272–381) |
| `.planning/I18N-PATTERN.md` | Human doc for maintainers | `.planning/REQUIREMENTS.md` I18N-* sections |
| `.planning/GLOSSARY.md` | EN/RU/TH term table | N/A (new) |
| `.planning/I18N-RESOLUTION.md` | Browser → storage → fallback order | REQUIREMENTS I18N-04 bullet text |

## Files to modify

| File | Change | Pattern source |
|------|--------|------------------|
| `index.html` | Remove inline-only locale default; load `i18n.js`; align nav/body with glossary | `index.html` existing `setLanguage` + `[data-lang]` CSS |
| `the-story.html` | Localize nav; unify with shared i18n; fix hardcoded `href` link text | `the-story.html` `switchLanguage` + `data-lang` blocks |
| `bespoke.html` | Move dictionary to shared module or import merged keys; wire init | `bespoke.html` `translations` object |
| `the-collection.html` | If any visible chrome — keep minimal; else skip | redirect stub |

## Code excerpts (reference)

**Bespoke translation application:**

```javascript
document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
        el.textContent = translations[lang][key];
    }
});
```

**Index language CSS hiding:**

```css
.lang-ru [data-lang="en"], .lang-th [data-lang="en"],
.lang-en [data-lang="ru"], .lang-th [data-lang="ru"],
.lang-en [data-lang="th"], .lang-ru [data-lang="th"] {
    display: none;
}
```

**Story visibility toggle:**

```javascript
document.querySelectorAll('[data-lang]').forEach(el => {
    if (el.dataset.lang === lang) {
        el.classList.remove('hidden');
    } else {
        el.classList.add('hidden');
    }
});
```

---

## PATTERN MAPPING COMPLETE
