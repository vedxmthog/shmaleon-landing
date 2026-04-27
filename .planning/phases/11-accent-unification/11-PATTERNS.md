# Phase 11 — Pattern map (accent unification)

**Date:** 2026-04-27

## Target file

| File | Role | Change |
|------|------|--------|
| `the-story.html` | Story closing CTA | Replace arbitrary `#C5A059` utilities with `secondary` / `tertiary-container` tokens |

## Reference implementations (copy class semantics)

- **`index.html`** — scarcity CTA (~line 526): `border border-secondary text-secondary` … `hover:bg-secondary hover:text-tertiary-container`
- **`index.html`** — hero secondary CTA (~line 322): ghost variant with `border-secondary/70`; story CTA should use **solid** treatment like scarcity primary, not ghost

## Analog excerpt (scarcity CTA — gold fill on hover)

Use as the behavioral reference for hover text color (`tertiary-container`), not necessarily padding (`px-16` vs story `px-8`).

```html
<a class="... border border-secondary text-secondary ... hover:bg-secondary hover:text-tertiary-container ..." href="bespoke.html">
```

## Out of scope

- `bespoke.html` `#2C2C2C` dividers — neutral, not gold accent.

---

## PATTERN MAPPING COMPLETE
