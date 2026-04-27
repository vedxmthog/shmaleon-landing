# TRUST-02 — Claims alignment (Phase 10)

## Jurisdiction

Thailand is the primary anchor market for public marketing copy; English is the source locale for product-adjacent strings, with RU/TH as parallel renditions. Final wording remains subject to qualified counsel in that jurisdiction and any others the brand targets.

## Scope reviewed

- `index.html` — The Ingot product block (EN/RU/TH `data-lang` spans for 1,000mg / botanical + cannabis framing).
- `bespoke.html` — Botanical Intensity step; Profound line uses `data-i18n="intensity_profound_note"` (no hardcoded change required when `i18n.js` is the source of truth).
- `i18n.js` — `intensity_profound_note` for `en`, `ru`, `th` (aligned with Ingot in the same pass).
- `the-story.html` — Reviewed: no `mg` / explicit cannabis potency strings in public body copy; **no** edits in this pass.

## EN anchor

- **Ingot (collection home):** `1,000mg discreet cannabis-infused botanical extract.`
- **Bespoke Profound note (`i18n.js` `en.intensity_profound_note`):** ` (1,000mg cannabis-infused botanical extract)` (leading space; parenthetical omits “discreet” for length while keeping the same product-class phrase as the Ingot line after the mg clause.)

## Method

Editorial alignment pass to satisfy Phase 10 / TRUST-02 **single-voice** goal: one coherent description of 1,000mg product class across collection and bespoke, with RU/TH updated in parallel. No new efficacy or health claims. Independent legal review of final public copy is still required for publication decisions.

## Counsel status

**Pending** — this memo documents internal alignment and scope only, not completed external legal sign-off.

## Outcome

**Aligned copy** on the three locales for the Ingot + Profound note pair; **Pending review** for counsel approval before any go-live where jurisdiction rules require it.

## Open items

- External counsel: confirm EN/RU/TH product-class wording for Thailand (and any export markets).
- TH: optional nuance pass by fluent reviewer (botanical + cannabis phrasing) after counsel input.
