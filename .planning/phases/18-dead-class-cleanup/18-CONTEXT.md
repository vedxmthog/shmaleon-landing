# Phase 18: Dead class cleanup - Context

**Gathered:** 2026-04-27  
**Status:** Ready for planning  
**Mode:** Autonomous — execute per `18-01-PLAN.md` / `18-RESEARCH.md`

<domain>
## Phase Boundary

Remove dead i18n DOM hooks, unused bespoke CSS, and confirm no duplicate font links; no feature work.

</domain>

<decisions>
## Implementation Decisions

### i18n
- `shmSyncLangButtons` uses `data-target-lang` only; remove `#current-lang` and redundant ID updates after `[data-shm-locale-label]` loop.

### Assets
- `index.html`: keep single Material Symbols link (already singular in tree).
- `bespoke.html`: drop unused `.pb-safe` inline rule.

</decisions>

<code_context>
## Existing Code Insights

Locale labels on index/story use both `id=*-locale-label` and `data-shm-locale-label`; the forEach covers them.

</code_context>

<specifics>
## Specific Ideas

None.

</specifics>

<deferred>
## Deferred Ideas

None.

</deferred>
