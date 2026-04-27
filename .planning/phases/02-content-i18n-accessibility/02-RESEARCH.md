# Phase 2 — Technical research: Content, i18n & accessibility

**Phase:** 2 — Content, i18n & accessibility  
**Gathered:** 2026-04-27  
**Question answered:** What do we need to know to plan EN/RU/TH unification, auto-locale, and a11y polish on a static multi-page HTML site?

---

## Current codebase snapshot

| Page | i18n pattern | Locale init | Issues vs REQUIREMENTS |
|------|--------------|-------------|-------------------------|
| `index.html` | CSS `.lang-{en,ru,th}` on `document.documentElement` hides `[data-lang]` siblings; `setLanguage()` | `DOMContentLoaded` → **always `en`** | No `navigator.languages`; no `localStorage`; desktop shows three lang buttons (Phase 1 may replace with disclosure) |
| `the-story.html` | `switchLanguage()` toggles `hidden` on `[data-lang]` nodes | Default visible = EN in markup | Nav links **hardcoded English**; three permanent `lang-btn` on `md+` |
| `bespoke.html` | `translations` object + `[data-i18n]` / `[data-i18n-placeholder]` | `setLanguage` exists but **not wired** to DOMContentLoaded in excerpt; no persistence | Duplicated dictionary vs other pages; contact/FORM-01 strings may need audit post–Phase 1 |

**Implication (I18N-05):** Three parallel systems — merge into **one shared module** (`i18n.js`) exporting: `resolveInitialLocale()`, `applyLocale(lang)`, `STORAGE_KEY = 'shm_locale'`, and either a unified dictionary shape or adapters for `data-lang` vs `data-i18n` during migration.

---

## Recommended architecture

### 1. Shared module (`i18n.js` at repo root)

- **API (minimal):**
  - `getInitialLocale(): 'en'|'ru'|'th'` — order: try `localStorage.getItem('shm_locale')` inside try/catch → if missing, map `navigator.languages` (`ru-*`→`ru`, `th-*`→`th`, else `en`).
  - `persistLocale(lang)` — try/catch around `localStorage.setItem`; silent no-op in private mode / quota errors.
  - `applyLocale(lang)` — dispatches to page: set `document.documentElement` class **or** update all `data-i18n` nodes + `data-lang` visibility (one code path preferred after DOM migration).
- **Include order:** `<script src="i18n.js"></script>` before inline page scripts that depend on locale.

### 2. DOM strategy (pick one target)

**Option A (preferred long-term):** Migrate all pages to **`data-i18n` + central dictionary** (matches bespoke). Remove per-page duplicate strings.

**Option B (incremental):** Keep `data-lang` blocks on index/story; `applyLocale` calls existing `setLanguage`/`switchLanguage` logic moved into `i18n.js`. Higher maintenance.

**Plan 02-01** should pick **Option A** unless file churn is too high — then document **Option B** in `.planning/I18N-PATTERN.md`.

### 3. Glossary

- File: `.planning/GLOSSARY.md` — table columns: key | EN | RU | TH | notes.
- Keys: `nav_collection`, `nav_bespoke`, `nav_story`, `product_ingot`, `product_pulse`, `product_heart`, `intensity_subtle`, `intensity_elevated`, `intensity_profound`, `cta_priority_list`, etc.
- **Acceptance:** Russian word for “Bespoke” must match between nav and hero (currently index uses **Индивидуально** in nav vs bespoke ru `На заказ` — **must align**).

### 4. Auto-locale (I18N-04)

- Map `navigator.languages` with prefix match (case-insensitive).
- **First visit:** no valid `shm_locale` → browser inference.
- **Return visit:** valid stored code wins.
- Document resolution order in `.planning/I18N-RESOLUTION.md` (bullet list, same as REQUIREMENTS).

### 5. Accessibility

- **Images:** Script or build-step to copy `data-alt` → `alt` on load for meaningful images; decorative: `alt=""` only.
- **Headings:** One logical `h1` per page; section `h2`/`h3` don’t skip levels.
- **Keyboard:** Tab order: header (burger → locale → nav links) → main → footer; focus trap inside mobile panel when open (Phase 1 dependency).

---

## Risks

| Risk | Mitigation |
|------|------------|
| Cross-page script caching | Cache-bust query on `i18n.js` only if needed; keep version comment in file |
| localStorage blocked | try/catch; fall back to session-only locale (memory) or browser default each load — document |
| Large HTML churn | Wave 1 = shared JS + glossary; wave 2 = migrate one page at a time |

---

## Validation Architecture

> Nyquist / Dimension 8 — **static site has no unit test runner.** Validation = **deterministic grep + manual browser passes** recorded in `02-VALIDATION.md`.

| Dimension | Strategy |
|-----------|----------|
| String coverage | `rg` asserts `shm_locale`, `getInitialLocale`, or dictionary keys exist; no bare English literals in nav regions post-migration (per PLAN acceptance lists) |
| Locale behavior | Manual: clear site data → first load follows browser lang; set locale → reload → stored lang applies |
| A11y | Manual: keyboard-only traverse; VoiceOver spot-check optional; `rg 'aria-expanded'` on disclosure triggers |
| Regression | Optional Lighthouse a11y score snapshot (not blocking if CLI not in repo) |

**Gate:** Every PLAN task lists **grep-verifiable** `acceptance_criteria` plus at least one **manual** step where UX cannot be grep’d.

---

## RESEARCH COMPLETE
