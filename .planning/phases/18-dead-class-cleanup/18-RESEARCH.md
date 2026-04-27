# Phase 18: Dead class cleanup — RESEARCH

## RESEARCH COMPLETE

**Date:** 2026-04-27

---

## Planning gates

- **CONTEXT.md:** None. Scope from ROADMAP + repo audit.
- **UI-SPEC:** `18-UI-SPEC.md` — hygiene only.

---

## Findings

### Legacy roadmap example

- **`slow fade`:** **No** matches in current `*.html` / `*.css` / `*.js`. Either already removed or hypothetical; phase still applies to **other** dead hooks.

### `shm-chrome.css`

- **Defined:** `.shm-hero-title`, `.shm-skip-link` (+ focus rules), `prefers-reduced-motion` block.
- **Used in HTML:** `shm-skip-link` and `shm-hero-title` appear on live pages — **not dead**.

### Per-page `<style>` blocks

- **Pattern:** `.lang-{ru,th,en} [data-lang="..."] { display: none; }` on `index.html`, `the-story.html`, `compliance.html`, `privacy.html`, `legal.html`.
- **Purpose:** Hide non-active locale copy — **active**, matches `i18n.js` `lang-*` on `<html>`.

### `i18n.js` vs DOM

| Hook | Status |
|------|--------|
| `.lang-btn` | Used on desktop EN/RU/TH strips |
| `data-target-lang` | Primary attribute on lang buttons |
| `data-lang-btn` | **Fallback** in `shmSyncLangButtons` — **no** `data-lang-btn` in deliverable `*.html` → **dead branch** |
| `#current-lang` | **`getElementById('current-lang')`** — **no** element with `id="current-lang"` in repo → **dead branch** (guarded, but misleading) |
| `[data-shm-locale-label]` | Updates all mobile locale labels |
| `#index-locale-label`, `#story-locale-label` | **Redundant** after `[data-shm-locale-label]` loop (both spans also carry `data-shm-locale-label`) |

### `index.html` head

- **Duplicate** `<link>` for Material Symbols (same URL twice) — **hygiene** fix.

### `bespoke.html` inline style

- **`.pb-safe`** — verify used in markup (executor grep).

---

## Recommended approach

1. **Single audit pass:** List CSS classes / meaningful hooks → grep HTML/JS consumers.
2. **Prune i18n:** Remove `data-lang-btn` fallback; remove `#current-lang` block; remove redundant `#index-locale-label` / `#story-locale-label` updates after confirming `data-shm-locale-label` covers them.
3. **HTML:** Remove duplicate Material Symbols link on `index.html`.
4. **Remove** unused `.pb-safe` rule from `bespoke.html` (defined only, never applied in `class`).

---

## Validation Architecture

1. **`i18n.js`:** After edits, `node --check i18n.js` exits **0**.
2. **No dead attribute references:** `rg 'data-lang-btn' --glob '*.html' .` → deliverable HTML has **no** requirement for fallback (may be **zero** matches).
3. **Chrome classes:** `rg 'shm-' shm-chrome.css` vs `rg 'shm-' --glob '*.html' .` — every **defined** `shm-` class still has **≥1** HTML use (or removed in same change).
4. **Manual:** EN/RU/TH on `index.html` and `bespoke.html` — desktop strip + mobile locale button label updates correctly.

---

## References

- `.planning/ROADMAP.md` — Phase 18
- `shm-chrome.css`, `i18n.js`, `index.html`, `bespoke.html`
