# Phase 18 — PATTERN MAP

## Custom CSS registry (`shm-chrome.css`)

| Class | Consumers |
|-------|-----------|
| `.shm-hero-title` | `index.html`, `the-story.html`, `bespoke.html` (hero `<h1>`) |
| `.shm-skip-link` | All main pages with skip link |

## i18n selectors (`i18n.js`)

| Selector / hook | Consumers |
|-----------------|-----------|
| `.lang-btn` | Desktop language row buttons |
| `.lang-menu-btn` | Mobile disclosure menu items (inline listeners per page) |
| `[data-i18n]` | Copy nodes |
| `[data-i18n-placeholder]` | Bespoke inputs |
| `[data-shm-locale-label]` | Mobile locale button inner `<span>` |
| `img[data-alt]` | Images using data-alt pattern |

## Inline locale CSS

| File | Selectors |
|------|-----------|
| index, story, compliance, privacy, legal | `.lang-* [data-lang]` display toggles |

## Bespoke-only

| Rule | Status |
|------|--------|
| `.pb-safe` | **Dead** — defined in `<style>` but **no** `class="...pb-safe..."` in markup; remove in Phase 18 |
