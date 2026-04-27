---
phase: 8
slug: home-hero-cta-wiring
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-04-27
---

# Phase 8 — Validation strategy

> Static HTML — no Jest/Pytest. **Manual + grep** only.

## Test infrastructure

| Property | Value |
|----------|-------|
| Framework | none |
| Config | none |
| Quick check | `rg` / `grep` for `href` in hero; optional `npx --yes serve` |
| Full | Manual browser EN/RU/TH + click pass |

## Sampling

- After `08-01` task: run grep from plan + open `/` in browser once.
- Before UAT: full manual pass in three locales on mobile width.

## Per-task map

| Task | Plan | Wave | Requirement | Test type | Command / instruction |
|------|------|------|---------------|-----------|------------------------|
| 8-01-01 | 01 | 1 | HERO-CTA-01 | grep + manual | See plan `acceptance_criteria` |

## Wave 0

- N/A (no new framework). `Existing infrastructure covers all phase requirements.`

## Manual-only

| Behavior | Requirement | Why manual | Instructions |
|----------|-------------|------------|--------------|
| Tap hero CTAs | HERO-CTA-01 | No headless in repo | iPhone + desktop: each link lands correct page |
| Locale switch | I18N carry-through | — | RU, TH: labels visible, same targets |
