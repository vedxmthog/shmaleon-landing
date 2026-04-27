---
phase: 17-legal-page-density
status: passed
verified: 2026-04-27
---

# Phase 17 — Verification

## Goal (from roadmap)

Tighter mobile rhythm on draft legal/privacy/compliance if needed after content finalization.

## Must-haves (from plan)

| Criterion | Evidence |
|-----------|----------|
| Same responsive spacing on all three trust pages | `pb-12 sm:pb-16 md:pb-24 lg:pb-section-padding` on each `<main>` |
| Draft banner + H1 + paragraph spacing | Classes per `17-01-PLAN.md` |
| `id="main-content"` preserved | One per file |
| Draft copy + `data-lang` intact | `Draft — not for publication` and `data-lang` spans present |

## Automated checks run

- Workspace search: padding and margin class strings present on `legal.html`, `privacy.html`, `compliance.html`: **pass**

## human_verification

Deferred to stakeholder; executor documented **375px** spot-check in `17-01-SUMMARY.md`.

## Gaps

None.
