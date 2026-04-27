---
phase: 15
slug: media-hardening
status: draft
nyquist_compliant: false
wave_0_complete: true
created: 2026-04-27
---

# Phase 15 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution. **Static site — no test runner.**

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | none — static HTML |
| **Config file** | none |
| **Quick run command** | `rg 'lh3\.googleusercontent\.com' index.html bespoke.html the-story.html` (expect **no** matches after Plan 01) |
| **Full suite command** | Quick command + `ls media/shm-*.jpg 2>/dev/null \| wc -l` (expect **12** after Plan 01; adjust glob if extension differs) |
| **Estimated runtime** | &lt; 5 seconds |

---

## Sampling Rate

- **After every task commit:** Run **quick run command** + spot-check one HTML file in browser
- **After every plan wave:** Full suite + visual pass of all three pages
- **Before `/gsd-verify-work`:** All `media/` references resolve; no console 404 for images
- **Max feedback latency:** 60 seconds (manual browser included)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 15-01-01 | 01 | 1 | A11Y-01 | T-15-01 / — | No untrusted HTML execution; binary assets only | manual+grep | `rg 'lh3\.googleusercontent\.com' index.html bespoke.html the-story.html` → empty | ✅ | ⬜ pending |
| 15-01-02 | 01 | 1 | A11Y-01 | — | README lists provenance | grep | `test -f media/README.md` | ✅ | ⬜ pending |
| 15-02-01 | 02 | 2 | A11Y-01 | T-15-02 / — | Alt text is static in HTML | grep | `rg 'width="' index.html` (spot); per-plan criteria | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠ flaky*

---

## Wave 0 Requirements

- [x] **Existing infrastructure** — grep + browser; no new npm packages required for verification.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| CLS on hero/object sections | A11Y-01 / roadmap | Needs DevTools performance / visual | Throttle network; reload `index.html`; confirm no large layout jump when images appear |
| Decorative vs non-decorative alt | A11Y-01 | Judgment call | Screen reader or axe DevTools on all three pages |

---

## Validation Sign-Off

- [ ] All tasks have `<acceptance_criteria>` satisfied in PLAN.md
- [ ] No 3 consecutive tasks without grep or file-exists checks
- [ ] No watch-mode flags
- [ ] `nyquist_compliant: true` set in frontmatter after UAT

**Approval:** pending
