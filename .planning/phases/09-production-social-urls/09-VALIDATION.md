---
phase: 9
slug: production-social-urls
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 9 — Validation Strategy

> Static HTML/CSS/JS: no test framework. Verification is grep + manual browser checks.

---

## Test infrastructure

| Property | Value |
|----------|-------|
| **Framework** | none — static site |
| **Config file** | n/a |
| **Quick run command** | `rg 'instagram\.com/TODO|t\.me/TODO|wa\.me/TODO' --glob '*.html' --glob '*.js'` from repo root |
| **Full suite command** | same `rg` + open `npx --yes serve` and click footer links on 2+ pages |
| **Estimated runtime** | &lt; 10 seconds |

---

## Sampling rate

- **After every task commit:** Re-run the `rg` command (must return exit 1 or empty, i.e. no matches)
- **After the plan wave:** `rg` + manual spot-check
- **Before `/gsd-verify-work`:** `rg` clean + confirm social row behavior

---

## Per-task verification map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure behavior | Test type | Automated command | File exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 9-01-01 | 01 | 1 | SOCIAL-01 | T-9-01 / — | Only fixed `https` brand URLs; no `javascript:` | grep | `rg 'instagram\.com/TODO' …` (see quick run) | n/a | ⬜ pending |
| 9-01-02 | 01 | 1 | SOCIAL-01 | — | n/a (docs) | read | `rg 'SHMALEON_SOCIAL\|social-urls' README.md .planning/deploy.md` | ✅ | ⬜ pending |

---

## Wave 0 requirements

- Existing infrastructure: **grep-only**; no new npm deps.

---

## Manual-only verifications

| Behavior | Requirement | Why manual | Test instructions |
|----------|-------------|------------|-------------------|
| Click-through | SOCIAL-01 | External HTTPS profiles | In EN: click Instagram / TG / WA in footer; expect correct brand pages (or hidden UI) |

---

## Validation sign-off

- [ ] All tasks have `rg` or doc acceptance rows
- [ ] `nyquist_compliant: true` in frontmatter after green run

**Approval:** pending
