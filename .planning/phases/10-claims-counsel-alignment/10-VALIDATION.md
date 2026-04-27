---
phase: 10
slug: claims-counsel-alignment
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 10 — Validation Strategy

> Static site — **no** npm test suite. Wave 0 = "grep + manual read" as agreed in RESEARCH.

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | none — static HTML/JS |
| **Config file** | none |
| **Quick run command** | `rg -n "1000|1,000|mg|каннаб|กัญ|cannabis|Cannabis" index.html bespoke.html the-story.html i18n.js` |
| **Full suite command** | Same + open pages EN/RU/TH in browser per `/gsd-verify-work` |
| **Estimated runtime** | ~2 minutes |

## Sampling Rate

- After every task: run quick `rg` command from repo root
- Before verify-work: all locales visually scanned for Ingot + Profound block

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 10-01-01 | 01 | 1 | TRUST-02 | T-10-01 / — | No inflated claims | grep | `rg` mg/cannabis strings | N/A | ⬜ pending |
| 10-01-02 | 01 | 1 | TRUST-02 | T-10-02 / — | Memo honest re counsel | file | `test -f` memo path | 10-TRUST-02-ALIGNMENT.md | ⬜ pending |

## Wave 0 Requirements

- [x] Existing infrastructure — no new test harness

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| RU/TH meaning matches EN | TRUST-02 | No CI for natural language | Compare translator table in memo; spot-read pages |

## Validation Sign-Off

- [x] All tasks have grep-based or file-exists verification
- [x] `nyquist_compliant: true` — manual/grep pattern registered

**Approval:** pending execution
