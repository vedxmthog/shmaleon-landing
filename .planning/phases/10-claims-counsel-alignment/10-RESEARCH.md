# Phase 10 — Research

**Question:** What must align for a single product/dose voice across `index.html`, `the-story.html`, and `bespoke.html`?

## 1. String inventory (mg / cannabis / botanical)

| Surface | Location | EN snippet (2026-04-27) |
|--------|----------|-------------------------|
| index (Ingot) | `data-lang="en"` | `1,000mg discreet Cannabis-infused botanical extract.` — **Capital C in Cannabis** |
| bespoke (Profound) | `i18n.js` `intensity_profound_note` | `(1,000mg cannabis-infused)` — **lowercase**; omits "botanical extract" |
| the-story | body | No "mg" or "cannabis" in grep pass — **infusion narrative only** |

**RU/TH:** Index Ingot block uses per-page `data-lang` spans. Bespoke `intensity_profound_note` uses `i18n.js`. Phrasing for RU/TH is **not** identical structure between those two (e.g. TH index: full extract line vs i18n parenthetical) — **alignment pass must harmonize** semantics: same 1,000mg fact, no contradictory product class (e.g. oil vs extract) unless intentional tier difference (none in roadmap).

## 2. Risk

- Inconsistent **capitalization** and **ingredient list** (botanical extract vs short parenthetical) reads like **different products**.
- Jurisdiction: Thailand-oriented site — English source strings should be counsel-safe; RU/TH follow glossary (I18N-02) once EN anchor fixed.

## 3. Recommended approach

1. Lock an **EN anchor** for the 1,000mg descriptor (one capitalization rule for "cannabis" as adjective; one product phrase for Ingot + Profound note per counsel).
2. Update `index.html` `data-lang` (EN/RU/TH) and `i18n.js` (bespoke keys + same locales) in **one** edit pass.
3. Re-grep: `1,000mg` / `1 000` / `1,000` / `1000` per locale; ensure no duplicate contradictory sentences on the same product tier.
4. Add **`.planning/phases/10-claims-counsel-alignment/10-TRUST-02-ALIGNMENT.md`**: files reviewed, decisions, counsel field `Pending | Approved | N/A` (honest).

## 4. Files to touch (executor)

- `index.html` (Ingot block at minimum)
- `i18n.js` (`intensity_profound_note` and any related intensity copy if needed)
- `bespoke.html` only if a string remains **hardcoded** (currently profound note is `data-i18n` → JS only)
- `the-story.html` only if review finds claim tension

## Validation Architecture

| Dimension | Method |
|-----------|--------|
| Human editorial | RU/TH fluent reader or translator confirms parallel meaning to EN anchor |
| Automated | `rg` for mg patterns and `cannabis` / `каннаб` / `กัญ` across `index.html`, `bespoke.html`, `the-story.html`, `i18n.js` — zero stray legacy phrases after pass |
| TRUST-02 | Memo file exists; lists scope and sign-off state |

**Note:** No unit-test framework in repo — validation is **grep + human** for this phase.

## RESEARCH COMPLETE
