---
phase: 13
slug: price-clarity
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 13 — Validation Strategy

> Static site: no Jest/Vitest; **syntax + string presence + browser locale switch** cover this phase.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — shell + manual UAT |
| **Config file** | none |
| **Quick run command** | `node --check i18n.js` |
| **Full suite command** | `node --check i18n.js` + `rg "index_scarcity_price_qualifier" i18n.js index.html .planning/GLOSSARY.md` |
| **Estimated runtime** | &lt; 5 seconds (automated) + ~2 min manual |

---

## Sampling Rate

- **After task commit:** `node --check i18n.js` and grep for key in three files
- **Before `/gsd-verify-work`:** Full grep + one browser pass EN/RU/TH on `index.html` scarcity block

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 13-01-01 | 01 | 1 | (commerce-adjacent clarity) | T-13-01 / — | N/A (static copy) | grep + node --check | `node --check i18n.js` | ✅ | ⬜ pending |
| 13-01-02 | 01 | 1 | (commerce-adjacent clarity) | T-13-01 / — | N/A | read | GLOSSARY row | ✅ | ⬜ pending |

---

## Wave 0 Requirements

- Existing infrastructure: **none to install** — `node` available for `--check`

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Qualifier string visible under price | Phase 13 success #1 | Locale switching is UI | Open `index.html` locally; set EN/RU/TH; confirm new line under `15,000 THB` matches GLOSSARY for that locale |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or manual row above
- [ ] `nyquist_compliant: true` in frontmatter after execution green

**Approval:** pending
