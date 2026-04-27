---
phase: 16
slug: typography-pass-optional
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 16 — Validation Strategy

> Static site: **grep/rg** for font stack and href consistency; **manual** readability / script coverage.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — shell + manual UAT |
| **Config file** | none |
| **Quick run command** | `rg '"Inter"' --glob '*.html' .` (exclude `.planning`; expect no hits in `fontFamily` after execute) |
| **Full suite command** | Quick command + `rg 'family=Inter' --glob '*.html' .` + `rg 'IBM\+Plex\+Sans' --glob '*.html' .` (expect hits on all design pages) |
| **Estimated runtime** | &lt; 5 seconds (automated) + ~3 min manual |

---

## Sampling Rate

- **After task commit:** Full grep suite on repo-root HTML
- **Before `/gsd-verify-work`:** Manual EN/RU/TH spot-check on index, bespoke, story

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 16-01-01 | 01 | 1 | (optional polish) | T-16-01 / — | N/A (static assets) | grep | `rg 'family=Inter' index.html bespoke.html the-story.html compliance.html privacy.html legal.html` → empty | ✅ | ⬜ pending |
| 16-01-02 | 01 | 1 | (optional polish) | — | N/A | grep | `rg '"Inter"' index.html` in `fontFamily` block → no | ✅ | ⬜ pending |

---

## Wave 0 Requirements

- **None** — no new tooling

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Readability + scripts | Phase 16 success #1 | Fonts render in browser | Load `index.html`, `bespoke.html`, `the-story.html` locally; EN/RU/TH body copy has no missing glyphs; note FOUT in SUMMARY if notable |

---

## Validation Sign-Off

- [x] All tasks have automated or manual row above
- [ ] `nyquist_compliant: true` retained after execution green

**Approval:** pending
