---
phase: 4
slug: launch-readiness
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 4 — Validation Strategy

> Static-site milestone: verification is **grep + manual HTTP serve**, not a unit-test framework.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | none — static HTML |
| **Config file** | — |
| **Quick run command** | `rg -n 'rel="canonical"' *.html` and `rg -n 'meta name="description"' *.html` |
| **Full suite command** | Quick commands + `rg 'href="#"' index.html bespoke.html the-story.html legal.html privacy.html compliance.html` (expect **no** matches in primary nav/footer link rows — document exceptions if any) |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run the **quick** grep set for files touched.
- **After the plan wave:** Run **full suite** + manual `npx serve` page list.
- **Before `/gsd-verify-work`:** All greps green + checklist file signed off.

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 04-01-01 | 01 | 1 | REL-01 | T-01 / — | No secrets in deploy doc | manual+grep | `test -f .planning/deploy.md` | ✅ W0 | ⬜ pending |
| 04-01-02 | 01 | 1 | REL-02 | — | N/A | grep | `rg 'meta property="og:title"' *.html` | ✅ W0 | ⬜ pending |
| 04-01-03 | 01 | 1 | SEO-01 | T-02 | Canonical/OG only on origin placeholder | grep | `rg 'rel="canonical"' *.html` | ✅ W0 | ⬜ pending |

---

## Wave 0 Requirements

- [x] Existing infrastructure: repository HTML + README — no install step.

*Wave 0 satisfied by static milestone.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|---------------------|
| OG preview card | REL-02 | Slack/Telegram/Facebook debugger needs live URL | After deploy to staging, paste URL into a social preview debugger |
| Replace `__CANONICAL_ORIGIN__` | SEO-01 | Human confirms production domain | Search repo for placeholder; confirm zero matches before go-live |

---

## Validation Sign-Off

- [ ] All tasks have grep-level `acceptance_criteria`
- [ ] Checklist `04-SEO-CHECKLIST.md` completed for go-live
- [ ] `nyquist_compliant: true` in frontmatter

**Approval:** pending
