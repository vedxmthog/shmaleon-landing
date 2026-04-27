# Phase 3 — Research: Trust & compliance

**Phase:** 3 — Trust & compliance  
**Question:** What do we need to know to plan legal pages, footer wiring, and compliance memo (TRUST-02)?

## RESEARCH COMPLETE

---

## 1. Requirements mapping

| ID | Implication |
|----|----------------|
| **TRUST-01** | Three destinations (Legal, Privacy, Compliance) become real static HTML. Placeholder `#` is replaced with `legal.html`, `privacy.html`, `compliance.html`. If copy is not counsel-approved, each page shows an explicit **draft — not for publication** gate. |
| **TRUST-02** | A short **decision memo** under `.planning/` records: jurisdiction focus (e.g. Thailand), review of product-adjacent copy on the **marketing** pages (not inventing new claims in the memo — documenting what was reviewed and outcome: approved / revise / defer). |

## 2. Codebase touchpoints (grep-verified)

- `index.html`: footer trust links use `href="#"` with `data-lang` spans for EN/RU/TH labels.
- `the-story.html`: `href="#"` on Legal / Privacy / Compliance.
- `bespoke.html`: `data-i18n` keys `footer_legal`, `footer_privacy`, `footer_compliance` with `href="#"`.

Executor must **align all three** to the same three filenames and keep i18n keys consistent with Phase 2’s bespoke dictionary and Collection `data-lang` pattern.

## 3. Thailand / product category (non-legal — planning only)

- Public cannabis-related marketing is **jurisdiction-sensitive**; legal pages and compliance page should **not** assert health benefits or defy local advertising rules. Final wording is **counsel-owned**. Research outcome: static site delivers **structure + draft gate** until counsel supplies text.

## 4. Static-site constraints

- No server: legal “acceptance” is **not** a form post; privacy page describes client-side and third-party behavior honestly (e.g. hosting, analytics if any — or “none” if true).
- Optional: `mailto:` in privacy for DSR — only if brand wants; not required by REQUIREMENTS.

## Validation Architecture

**Goal:** Give executors a verifiable loop without a test framework (static HTML milestone).

| Layer | Method |
|-------|--------|
| **Per-task** | `rg` / file read checks in each task’s `acceptance_criteria` (links, strings, draft banner). |
| **Per-plan** | `npx serve` manual click-through: every pillar loads; footer trust links open three HTML files; no 404. |
| **TRUST-02** | File exists: `.planning/phases/03-trust-compliance/03-TRUST-02-MEMO.md` (or single agreed path in PLAN) with sections: scope, pages reviewed, outcome, open items. |
| **Dimension 8 (feedback)** | Manual UAT + scripted greps; no Jest required — document in VALIDATION.md. |

**Sampling rate:** After plan wave 1, run full grep checklist + one manual pass on mobile width.

**Secure behavior:** No `target="_blank"` on internal trust pages unless spec says otherwise; `rel` on external only.

---

## 5. Risks

- **Content risk:** Inventing legal text — mitigated by draft banner + “replace with counsel copy” task boundaries.
- **i18n drift:** Legal body copy may be EN-first until translation — plan should require `data-lang` structure on headings at minimum for the three locales if Phase 2 standard is “no mixed islands”.

## 6. Open decisions (planner / CONTEXT)

- Exact filenames: **`legal.html`**, **`privacy.html`**, **`compliance.html`** (matches footer labels; SEO titles set in Phase 4 or stub now).
- Memo filename locked in PLAN frontmatter / must_haves.

---

*Phase 3 research — 2026-04-27*
