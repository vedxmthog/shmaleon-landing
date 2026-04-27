# Retrospective — SHMALEON landing

## Milestone: v1.2 — UI/UX polish

**Shipped:** 2026-04-27  
**Phases:** 5–18 (20 plans with summaries)

### What was built

Static HTML/Tailwind polish: shared chrome and locale, responsive overflow, bespoke hero, wired hero CTAs, production social config, copy alignment, accent tokens, bespoke `<select>` i18n, price qualifier line, a11y (skip, motion, alts), self-hosted `media/` with dimensions, IBM Plex + Noto, legal rhythm tweaks, and dead/legacy i18n hook cleanup.

### What worked

- Coarse phases with rolling execution where plans were 0/implicit still produced SUMMARYs and verification in heavier phases.
- `PROJECT.md` **Validated** tracked shipped slices when the monolithic `REQUIREMENTS` checklist lagged.

### What was inefficient

- Top-of-roadmap checkboxes and the Progress table were easy to leave stale next to **Phase Details** (which were accurate). Single source of truth should be one table or auto-generated in a future workflow.

### Key lessons

- Close milestones with a requirements checklist reconciliation, or name `PROJECT` as authoritative in `MILESTONES` (done for v1.2).
- Optional formal `v*-MILESTONE-AUDIT.md` before next major external ship.

### Cost observations

- Not measured in-repo.

## Cross-Milestone trends

| Milestone | Theme | Outcome |
|-----------|--------|---------|
| v1.0 | Planning | Roadmap and requirements only |
| v1.1 | Execution reset | Baseline execution |
| v1.2 | UI/UX + hygiene | Shipped; trust phase still deferred |
