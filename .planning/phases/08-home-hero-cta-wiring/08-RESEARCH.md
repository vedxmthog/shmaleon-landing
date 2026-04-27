# Phase 8 — Research: Home hero CTA wiring

**Date:** 2026-04-27  
**Question:** What must we change on `index.html` so HERO-CTA-01 passes?

## Current markup (2026-04-27)

- **Hero** (`<section` with `min-h-[100svh]`, ~line 301): **One** CTA, label “Join Priority List” (EN) / RU / TH, **`href="bespoke.html"`** — resolvable, not dead.
- **Scarcity block** (~line 515): Second “Join Priority List” → **`bespoke.html`** — same.
- **Roadmap** names **Inquire** / **Enter**; those exact strings are **not** in hero today.

## Decision

- **HERO-CTA-01** needs **two** clear hero actions aligned with roadmap: **intake (bespoke)** and **brand narrative (story)**. Current single CTA is semantically “inquire only”.
- **Recommended:** Add **second** link in the hero CTA row: `the-story.html`, labeled **Enter** (localized). Rename or relabel primary to **Inquire** (localized) for parity with roadmap **or** document that “Join Priority List” = Inquire equivalent (product call).
- **Grep target:** In the hero `section` only, **zero** `href="#"`; every CTA `a` has `bespoke.html` or `the-story.html` (or `mailto:` if product adds email CTA—out of default scope).

## i18n

- Follow existing `data-lang="en|ru|th"` span blocks (same as hero subline).
- Add RU/TH for new “Enter” (and “Inquire” if replacing “Join Priority List” in hero only).

## Social / TODO links

- Footer `instagram.com/TODO` etc. are **Phase 9** scope, not blockers for HERO-CTA-01.

## Validation Architecture

Static site — **no** unit test framework. Validation:

| Dimension | Approach |
|-----------|------------|
| Functional | Manual: load `/` on mobile + desktop; tap each hero CTA; expect correct navigation |
| Grep | `rg 'href=\"#\"' index.html` must not include matches in hero CTA group after task; target zero `href="#"` in CTA block |
| i18n | Switch EN/RU/TH; each hero CTA still navigates; labels present |

Nyquist: after executor lands changes, re-run grep + one manual pass before `/gsd-verify-work`.

---

## RESEARCH COMPLETE

Findings sufficient for `08-01-PLAN.md`. No blockers.
