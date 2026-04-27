---
phase: 11
slug: accent-unification
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 11 — Validation Strategy

> Static marketing site — validation is **grep + manual visual**; no Wave 0 test install.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | none — static HTML |
| **Config file** | n/a |
| **Quick run command** | `grep -r "C5A059" --include='*.html' .` from repo root (expect empty excluding `.planning`) |
| **Full suite command** | same + open `the-story.html` in browser |
| **Estimated runtime** | &lt; 30 seconds |

---

## Sampling Rate

- **After every task commit:** Grep for stray `#C5A059` / bracket gold on story CTA.
- **After wave:** Full HTML grep + manual story page hover check.
- **Before `/gsd-verify-work`:** Grep clean + visual confirm.

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 11-01-01 | 01 | 1 | visual consistency | T-01 | N/A — static colors | grep | `! grep -r "C5A059" --include='*.html' .` | ✅ | ⬜ pending |
| 11-01-02 | 01 | 1 | visual consistency | T-01 | N/A | grep + doc | grep + note `the-collection` | ✅ | ⬜ pending |

---

## Wave 0 Requirements

- Existing infrastructure covers phase — **no** new test framework.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Story CTA hover/focus | visual consistency | Browser paint | Load `the-story.html`; tab to CTA; hover; contrast acceptable |

---

## Validation Sign-Off

- [x] All tasks have grep or manual verify
- [x] Wave 0 n/a — marked complete
- [x] No watch-mode flags
- [ ] `nyquist_compliant: true` set after execution review

**Approval:** pending execution
