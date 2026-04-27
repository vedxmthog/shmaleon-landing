# Phase 1 — Pattern map

## Files to modify (primary)

| File | Role | Analog pattern |
|------|------|----------------|
| `index.html` | Home / collection | Nav block L184–230; footer L472–498; hero CTA section |
| `bespoke.html` | Config + new contact | Nav L105–140; footer L264–276; form sections L154–260 |
| `the-story.html` | Story + CTA | Nav L121–152; footer L291–303; final CTA L275–288 |
| `the-collection.html` | Redirect stub | Keep minimal — do not restore full layout |

## Existing conventions

- **Nav:** `fixed top-0 w-full z-50` bar; `max-w-container-max mx-auto`; centered SHMALEON `absolute left-1/2 -translate-x-1/2`.
- **i18n:** `data-lang` + `.lang-en` / `switchLanguage` (story); `lang-*` on `<html>` + CSS hide (collection/index); `data-i18n` + `translations` object (bespoke).
- **CTAs:** Story closing CTA uses `border-secondary`, `text-secondary`, `hover:bg-secondary`, `hover:text-tertiary-container` (design tokens; no ad-hoc hex).

## Gaps vs target

- Mobile burger **non-functional** (button only).
- Locale **not** unified disclosure on all pages.
- **No** social row; **no** bespoke contact channel block.
