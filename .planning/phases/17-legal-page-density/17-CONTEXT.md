# Phase 17: Legal page density - Context

**Gathered:** 2026-04-27  
**Status:** Ready for planning  
**Mode:** Autonomous — recommendations accepted without interactive discuss (Cursor execution)

<domain>
## Phase Boundary

Tighter mobile vertical rhythm on `legal.html`, `privacy.html`, and `compliance.html` only; no copy or nav changes. Matches existing `17-UI-SPEC.md` and `17-01-PLAN.md`.

</domain>

<decisions>
## Implementation Decisions

### Mobile spacing
- Responsive bottom padding on `<main>`: `pb-12 sm:pb-16 md:pb-24 lg:pb-section-padding`; draft banner and H1/paragraph stacks tighter below `md` only.

### Claude's Discretion
- None beyond plan text; class substitutions applied identically on all three trust pages.

</decisions>

<code_context>
## Existing Code Insights

Trust pages share the same main-column structure (`max-w-3xl`, draft amber banner, three locale paragraphs).

</code_context>

<specifics>
## Specific Ideas

Follow `17-01-PLAN.md` acceptance greps verbatim.

</specifics>

<deferred>
## Deferred Ideas

None.

</deferred>
