# Phase 14: A11y follow-up - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.  
> Decisions are captured in `14-CONTEXT.md`.

**Date:** 2026-04-27  
**Phase:** 14 — A11y follow-up  
**Areas discussed:** Skip link; prefers-reduced-motion; Focus order (hero + nav); Alt text scope (A11Y-01)

---

## Session mode

Orchestrator executed **roadmap-scoped discuss**: Phase 14 goal and REQ **A11Y-01 / A11Y-02** fully bound the work; gray areas below were **all in scope** and resolved to **WCAG-aligned defaults** consistent with existing `index.html` / `i18n.js` / `shm-chrome.css` patterns (no separate multi-select UI in this session).

---

## Skip link

| Option | Description | Selected |
|--------|-------------|----------|
| A | Visually hidden, first in tab order, targets `<main>` via id | ✓ |
| B | Visible strip (not chosen) | |
| C | Defer to later phase | |

**User's choice:** Roadmap-mandated — implement skip link (pattern A).  
**Notes:** Localized label via `data-i18n` + `i18n.js`; target id `main-content` on existing `<main>`.

---

## prefers-reduced-motion

| Option | Description | Selected |
|--------|-------------|----------|
| A | Global rules in `shm-chrome.css` under `prefers-reduced-motion` | ✓ |
| B | Per-component only | |
| C | No CSS change (not acceptable for phase goal) | |

**User's choice:** Pattern A — global stylesheet bucket; future motion must respect same query.

---

## Focus order (hero + nav)

| Option | Description | Selected |
|--------|-------------|----------|
| A | Audit against documented order (skip → header → main hero CTAs); fix regressions | ✓ |
| B | Code change only, no written pass | |

**User's choice:** Pattern A — includes **documented keyboard walkthrough** in verification/summary artifacts.

---

## Alt text (A11Y-01)

| Option | Description | Selected |
|--------|-------------|----------|
| A | Pass on `index`, `bespoke`, `the-story` (+ legal trio if images) | ✓ |
| B | Hero only | |

**User's choice:** Pattern A — align `alt` with meaningful content; resolve hero `data-alt` vs `alt=""` inconsistency.

---

## Claude's Discretion

- Exact RU/TH skip-link strings; optional `tabindex="-1"` on main for programmatic focus; which transitions to zero under reduced-motion.

## Deferred Ideas

- Full automated a11y CI; Phase 15 media overlap — see `14-CONTEXT.md` `<deferred>`.
