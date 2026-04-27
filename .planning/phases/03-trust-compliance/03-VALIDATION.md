---
phase: 3
slug: trust-compliance
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 3 — Validation strategy

> Static HTML milestone: verification is **grep + manual UAT** (no unit test framework required).

---

## Test infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — acceptability via `rg` and file inspection |
| **Config file** | n/a |
| **Quick run command** | `rg 'legal\\.html|privacy\\.html|compliance\\.html' --glob '*.html' .` + `rg 'href=\"#\"' index.html bespoke.html the-story.html` (trust row must be clean) |
| **Full suite command** | Quick command + `npx --yes serve -l 3456` — click Legal/Privacy/Compliance on each pillar |
| **Estimated runtime** | ~2 minutes manual |

---

## Sampling rate

- **After every task commit:** Run task-specific `rg` from PLAN acceptance criteria
- **After plan wave 1:** Full quick command + one mobile-width pass
- **Before `/gsd-verify-work`:** All acceptance strings present; memo file exists

---

## Per-task verification map

| Task ID | Plan | Wave | Requirement | Test type | Automated command | Status |
|---------|------|------|-------------|-----------|-------------------|--------|
| 03-01-01 | 01 | 1 | TRUST-01 | rg + read | `rg 'legal\\.html' index.html` (and siblings) | ⬜ |
| 03-01-02 | 01 | 1 | TRUST-01 | rg | Draft banner or removal per gate | ⬜ |
| 03-01-03 | 01 | 1 | TRUST-02 | file exists | `test -f .planning/phases/03-trust-compliance/03-TRUST-02-MEMO.md` | ⬜ |

---

## Wave 0 requirements

- [x] No test runner install — **existing static workflow covers phase**

## Manual-only verifications

| Behavior | Requirement | Why manual | Test instructions |
|----------|-------------|------------|-------------------|
| Legal meaning | TRUST-01/02 | Counsel | Send HTML to qualified counsel before removing draft |
| Readability | TRUST-01 | UX | Resize to 320px; legal pages scroll and remain legible |

---

*Phase 3 — 2026-04-27*
