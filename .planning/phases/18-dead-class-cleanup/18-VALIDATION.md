---
phase: 18
slug: dead-class-cleanup
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 18 — Validation Strategy

> Static repo: **`node --check` + `rg`** + short manual locale pass.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None |
| **Quick run command** | `node --check i18n.js` |
| **Full suite command** | Quick + `rg 'current-lang' i18n.js` (expect no stale references if removed per plan) |
| **Estimated runtime** | &lt; 5 s + ~2 min manual |

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | Status |
|---------|------|------|-------------|-----------|-------------------|--------|
| 18-01-01 | 01 | 1 | (hygiene) | node + rg | `node --check i18n.js` | ⬜ pending |
| 18-01-02 | 01 | 1 | (hygiene) | rg | `rg -c 'Material\+Symbols' index.html` → **1** (one link) | ⬜ pending |

---

## Manual-Only Verifications

| Behavior | Instructions |
|----------|--------------|
| Locale labels | After i18n edits, toggle EN/RU/TH on index + bespoke; mobile locale button text matches |

---

## Validation Sign-Off

- [ ] `nyquist_compliant: true` after green run

**Approval:** pending
