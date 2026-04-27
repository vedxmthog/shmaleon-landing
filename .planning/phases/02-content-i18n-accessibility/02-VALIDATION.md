---
phase: 2
slug: content-i18n-accessibility
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 2 — Validation Strategy

> Static HTML milestone — **no Jest/pytest.** Verification = `rg`/`grep` contracts + documented manual passes.

---

## Test infrastructure

| Property | Value |
|----------|-------|
| **Framework** | none |
| **Config file** | none |
| **Quick run command** | `rg -n "shm_locale|getInitialLocale|applyLocale" i18n.js index.html bespoke.html the-story.html` |
| **Full suite command** | Run quick command + all `acceptance_criteria` `rg` lines from `02-0*-PLAN.md` in order |
| **Estimated runtime** | &lt; 30 seconds (grep) + ~15 min manual keyboard/locale pass |

---

## Sampling rate

- **After every task:** Run that task’s listed `rg` acceptance lines.
- **After each plan wave:** Full grep sweep + short manual smoke (locale + one keyboard path).
- **Before `/gsd-verify-work`:** Complete manual matrix in §Manual-only.

---

## Per-task verification map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure behavior | Test type | Automated command | File exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 02-01-01 | 01 | 1 | I18N-05 | — | N/A | grep | `test -f i18n.js && test -f .planning/GLOSSARY.md` | ✅ | ⬜ |
| 02-01-02 | 01 | 1 | I18N-01, I18N-02 | — | N/A | grep + manual | Plans specify per-page `rg` | ✅ | ⬜ |
| 02-02-01 | 02 | 2 | I18N-04 | — | N/A | grep + manual | `rg "shm_locale" i18n.js` | ✅ | ⬜ |
| 02-03-01 | 03 | 3 | A11Y-01 | — | N/A | grep + manual | `rg "data-alt|alt=" index.html` | ✅ | ⬜ |
| 02-03-02 | 03 | 3 | A11Y-02, FORM-01 | — | N/A | manual primary | `rg "aria-expanded|aria-invalid" *.html` | ✅ | ⬜ |

---

## Wave 0 requirements

- [x] **Existing infrastructure:** No test framework — grep + manual is explicit wave 0 for this repo.

---

## Manual-only verifications

| Behavior | Requirement | Why manual | Test instructions |
|----------|-------------|------------|-------------------|
| First-visit locale | I18N-04 | Browser API | DevTools → Application → clear storage → set `navigator.language` override or use RU/TH system locale → load `index.html` → expect matching locale |
| Sticky locale | I18N-04 | Storage | Choose TH → reload → still TH |
| Focus order | A11Y-02 | Visual | Tab from top: burger → locale → links; open panel → focus moves inside |
| Screen reader labels | A11Y-02 | AT | Icon-only controls announce localized name |

---

## Validation sign-off

- [x] All tasks have grep or manual verify paths
- [x] No watch-mode flags
- [x] `nyquist_compliant: true` set after research Validation Architecture present

**Approval:** pending execution
