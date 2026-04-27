---
phase: 12
slug: bespoke-select-i18n
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 12 — Validation Strategy

> Static site — **Node syntax check + grep + manual locale toggle**.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | none |
| **Quick run command** | `node --check i18n.js` |
| **Grep** | `option` elements inside `#contact-channel` must each include `data-i18n="channel_option_` |

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Command / check |
|---------|------|------|-------------|-----------|-----------------|
| 12-01-01 | 01 | 1 | I18N-01, I18N-05 | node + grep | `--check`; count options with data-i18n |
| 12-01-02 | 01 | 1 | I18N-05 | doc | GLOSSARY rows exist for four keys |

---

## Wave 0

- Not required — mark complete.

---

## Manual-Only

| Behavior | Instructions |
|----------|----------------|
| Select labels RU/TH | Open `bespoke.html`, switch locale, open channel dropdown |

---

## Validation Sign-Off

**Approval:** pending execution
