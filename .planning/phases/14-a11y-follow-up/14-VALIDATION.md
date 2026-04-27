---
phase: 14
slug: a11y-follow-up
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 14 — Validation Strategy

> Per-phase validation for static HTML accessibility work. No Jest/pytest — **grep + `node --check` + documented keyboard pass**.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | none — static site |
| **Config file** | none |
| **Quick run command** | `node --check i18n.js` |
| **Full suite command** | Quick command + `rg` checks from `14-VERIFICATION.md` |
| **Estimated runtime** | &lt; 5 seconds automated; ~10 minutes manual once |

---

## Sampling Rate

- **After every task commit:** `node --check i18n.js` + task-specific `rg` from plan acceptance criteria
- **After wave:** Complete `14-VERIFICATION.md` checklist in browser (keyboard only)
- **Before `/gsd-verify-work`:** Manual checklist signed off in SUMMARY or VERIFICATION

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 14-01-01 | 01 | 1 | A11Y-02 | T-14-01 | No script injection; static strings only | grep + node | `node --check i18n.js` | ✅ | ⬜ pending |
| 14-01-02 | 01 | 1 | A11Y-02 | T-14-02 | Skip target is same-origin fragment | grep | `rg 'main-content' *.html` | ✅ | ⬜ pending |
| 14-01-03 | 01 | 1 | A11Y-02 | — | CSS only | grep | `rg 'prefers-reduced-motion' shm-chrome.css` | ✅ | ⬜ pending |
| 14-01-04 | 01 | 1 | A11Y-01 | — | Alt text static; no user HTML | grep + read | `rg '<img' index.html bespoke.html the-story.html` | ✅ | ⬜ pending |
| 14-01-05 | 01 | 1 | A11Y-02 | — | Doc only | file | test -f `14-VERIFICATION.md` | ✅ | ⬜ pending |

---

## Wave 0 Requirements

- [x] Existing repo — no test framework install
- [x] Quick commands defined above

*Wave 0 satisfied by existing static workflow.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|---------------------|
| Tab order skip → nav → main | A11Y-02 | Keyboard UX | Open each page; Tab from load; confirm skip appears on focus; Enter activates main; first tab stop in main matches UI-SPEC |
| Reduced motion | A11Y-02 adj. | OS setting | Enable “Reduce motion” in OS; reload; transitions noticeably shortened or instant |
| Screen reader spot-check (optional) | A11Y-01/02 | Tooling | VoiceOver: skip link announced; landmark main |

---

## Validation Sign-Off

- [ ] All tasks have automated grep/node verify or manual row above
- [ ] `14-VERIFICATION.md` exists before phase complete
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending execution
