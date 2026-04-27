---
phase: 17
slug: legal-page-density
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 17 — Validation Strategy

> Static site: no unit-test infrastructure. Wave 0 is **N/A**; verification is grep + manual viewport checks per `17-RESEARCH.md` **Validation Architecture**.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | none — static HTML |
| **Config file** | none |
| **Quick run command** | `rg 'mb-6 sm:mb-8 md:mb-10' legal.html privacy.html compliance.html` |
| **Full suite command** | same + manual 375px pass per SUMMARY |
| **Estimated runtime** | &lt; 5 seconds |

---

## Sampling Rate

- **After task commit:** Run quick `rg` command above; confirm three files match
- **After plan wave:** Read `17-01-SUMMARY.md` for manual UAT note
- **Before `/gsd-verify-work`:** Manual pass required for visual rhythm (cannot full-automate)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 17-01-01 | 01 | 1 | TRUST-01 | T-17-01 | N/A (layout only) | grep | `rg 'pb-12 sm:pb-16 md:pb-24' legal.html` | n/a | ⬜ pending |

---

## Wave 0 Requirements

*Existing infrastructure: none required. `wave_0_complete: true` — no test stubs for static marketing HTML.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|---------------------|
| Mobile rhythm “not runaway” | TRUST-01 | Visual density | 375px: scroll past last paragraph; bottom padding should feel proportional, not a huge empty field |

---

## Validation Sign-Off

- [x] All tasks have grep-verifiable acceptance criteria
- [x] Sampling: grep after implementation
- [x] No watch-mode flags
- [x] `nyquist_compliant: true` (manual + grep hybrid documented)

**Approval:** pending plan execution
