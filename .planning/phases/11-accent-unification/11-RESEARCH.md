# Phase 11 — Research: Accent unification

**Date:** 2026-04-27  
**Question:** Where does the site diverge from design-token `secondary` for gold accents, and what is the lowest-risk fix?

## Findings

### Ad-hoc gold (must fix)

| Location | Pattern | Token replacement |
|----------|---------|-------------------|
| `the-story.html` ~370 | `border-[#C5A059]`, `text-[#C5A059]`, `hover:bg-[#C5A059]`, `hover:text-black` | `border-secondary`, `text-secondary`, `hover:bg-secondary`, `hover:text-tertiary-container` |

`#C5A059` is **not** the same as theme `secondary` (`#e9c176`); unifying removes visual drift and matches ROADMAP.

### Already aligned

- **M3 inline config** on each page defines `"secondary": "#e9c176"`.
- **`index.html`, `bespoke.html` CTAs** already use `border-secondary` / `text-secondary` utilities.
- **`the-collection.html`** uses inline `color:#e9c176` on the fallback link — equals `secondary` hex; stub has no Tailwind; acceptable without adding CDN.

### Out of scope (neutral grays)

- `bespoke.html`: `bg-[#2C2C2C]`, `border-[#2C2C2C]` — divider chrome, not gold accent.

### Optional parity

- `bespoke.html` submit: `hover:text-[#0A0A0A]` → `hover:text-tertiary-container` (`#0a0a0a` in theme).

## Depends on

- **Phase 6** (roadmap): responsive/overflow baseline stable — no layout dependency for color-only edits.

## Validation Architecture

Static site — **no** unit test framework.

| Dimension | Approach |
|-----------|----------|
| Grep | After changes: **zero** matches for `C5A059` / `#C5A059` in `*.html` at repo root (excluding `.planning/` if documenting history only). |
| Visual | Open `the-story.html`; closing CTA reads as same gold family as collection home CTAs; hover state uses `tertiary-container` text on gold fill. |
| Regression | `the-collection.html` redirect still works; link visible. |

Nyquist: executor runs grep acceptance after each task; manual spot-check story page before `/gsd-verify-work`.

---

## RESEARCH COMPLETE

Findings sufficient for `11-01-PLAN.md`. No blockers.
