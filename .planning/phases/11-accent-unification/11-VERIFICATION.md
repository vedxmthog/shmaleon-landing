---
phase: 11-accent-unification
status: passed
verified: 2026-04-27
---

# Phase 11 verification — accent unification

## Must-haves (from plan)

| Criterion | Check |
|-----------|--------|
| No `#C5A059` / bracket gold utilities in repo-root `*.html` | `grep -ri "c5a059" --include="*.html" .` — no hits outside `.planning/` |
| Story closing CTA uses token classes | Single `href="bespoke.html"` with “Join the Priority List”: `border-secondary`, `text-secondary`, `hover:bg-secondary`, `hover:text-tertiary-container`; focus-visible ring present |
| `01-PATTERNS.md` free of `C5A059` | Grep — no matches |
| `href` unchanged | Story CTA still `bespoke.html` |

## Automated / spot checks

- Commits: `7caee3b`, `d5b3a84` with messages grep `11-01`
- `bespoke.html` submit: `hover:text-tertiary-container` (no `#0A0A0A`)

## Human follow-up (optional)

- Browser: `the-story.html` — CTA hover (gold fill, dark label) and keyboard focus ring.

## Self-Check: PASSED
