---
phase: 1
slug: site-shell-navigation
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 1 — Validation Strategy (static HTML)

> No unit-test framework. Verification = **grep + manual browser smoke**.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | none |
| **Config file** | none |
| **Quick run command** | `rg "shopping_bag|href=\"#\"" index.html bespoke.html the-story.html` (expect no shopping_bag; `#` only non-nav if any) |
| **Full suite command** | Quick command + manual `npx serve` link crawl |
| **Estimated runtime** | ~2 min manual |

---

## Sampling Rate

- **After every task commit:** Quick grep checks from plan `verify` blocks
- **After every plan:** Open site at 375px and 1280px width; tab through header
- **Before milestone UAT:** Lighthouse accessibility spot-check (manual)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| IA-audit | 01-01 | 1 | SITE-* | T-01 | Same-origin relative links | grep | `rg 'href=\"(index|bespoke|the-story)\\.html\"' *.html` | ✅ | ⬜ |
| Mobile-nav | 01-02 | 2 | NAV-01 | T-02 | No open redirects | manual | — | ✅ | ⬜ |
| Form | 01-03 | 3 | FORM-01 | T-03 | No raw HTML injection from inputs | manual + grep | — | ✅ | ⬜ |

---

## Wave 0 Requirements

- **Existing infrastructure:** Grep + browser only. No Wave 0 test stubs.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|---------------------|
| Burger focus trap | NAV-01 | DOM focus | Open menu; Tab cycles; ESC closes |
| Locale disclosure on iOS | I18N-03 | Touch | Tap open/close; no hover dependency |
| mailto / wa handoff | FORM-01 | External app | Submit triggers mail client or wa.me |

---

## Validation Sign-Off

- [x] All tasks have manual or grep verify
- [x] Sampling: grep between tasks
- [x] Wave 0 N/A — marked complete
- [x] `nyquist_compliant: true`

**Approval:** pending execution
