---
phase: 03
reviewers: [claude-cli, codebase-spot-check]
reviewed_at: 2026-04-27T12:00:00Z
plans_reviewed: [03-01-PLAN.md]
---

# Cross-AI Plan Review — Phase 3 (Trust & compliance)

## Claude CLI Review

## Cross-AI Review: Phase 03-01 — Trust & Compliance

---

### Summary

Plan is lean and well-scoped for a static site. Three tasks map cleanly to TRUST-01 and TRUST-02. The draft-gate pattern is the right call given the regulatory context. Main gaps: no i18n strategy decision for legal body copy (deferred from research), no explicit handling of `the-collection.html` footer (it's a redirect, but still has markup), and the memo template is prescribed without ensuring it captures what counsel actually needs to unblock publication. Verification is manual-only — sufficient for static, but fragile if footer link counts change.

---

### Strengths

- **Scope is honest.** Three pages, three footer wires, one memo. No gold-plating.
- **Draft gate is explicit and visible.** Correct approach — signals to users and counsel that copy isn't live.
- **Memo schema prescribed.** Jurisdiction / Scope / Method / Outcome / Open items covers the minimum defensible paper trail.
- **Verification is concrete.** `rg href="#"` on trust rows is a repeatable check, not vague "confirm it works."
- **Reuses story shell.** No new layout debt.

---

### Concerns

**HIGH**

- **`the-collection.html` footer omitted.** It redirects, but it has a DOM. If it ships with `href="#"` trust links while the others are wired, the redirect target could expose stale markup if the redirect is ever removed. Plan says "index, the-story, bespoke" — `the-collection.html` is never mentioned anywhere in the phase.
- **i18n body copy decision is unresolved.** Research flagged the risk: EN-first legal body vs. "no mixed islands" standard. The plan proceeds without deciding. If TH/RU legal copy doesn't exist yet, the draft gate must explicitly say so — otherwise a TH user sees an EN legal page with no gate explaining why, which is worse than a monolingual stub. This needs a documented decision before Task 1 executes, not after.

**MEDIUM**

- **Memo ownership is undefined.** Who writes it? If it's Claude generating a self-review, that's not a compliance review — it's a placeholder masquerading as one. The memo should clearly state it is internal/self-assessment, not external counsel review, or it creates false assurance.
- **Draft gate copy is not standardized.** Plan says "EN + data-lang RU/TH" for the banner. If RU/TH translations for the gate phrase don't exist, the `data-lang` attributes will silently fall back — i18n JS must handle missing keys. No check prescribed for this.
- **No 404 fallback check.** Three new HTML files are created. If the server (or GitHub Pages / Netlify config) doesn't serve them correctly (case sensitivity, trailing slash), links will 404 in production. Manual `npx serve` catches this locally but not deploy-time routing edge cases.

**LOW**

- **Footer acceptance check is count-based, not path-based.** `rg href="#"` on trust rows passes if the link exists but points to the wrong file (e.g., `legal.html` wired where `privacy.html` should be). A content check (`rg 'privacy.html' bespoke.html`) per link target would be stronger.
- **Nav "neutral active states" is underspecified.** What does neutral mean — no active class, greyed out, hidden? If the story shell uses JS to set active nav by URL, trust pages may incorrectly highlight a nav item. Needs explicit handling or explicit exemption.

---

### Suggestions

- **Decide i18n body copy policy in Task 1 precondition.** Two options: (a) EN-only with gate explaining monolingual draft status, or (b) RU/TH stubs that mirror EN structure. Document the choice in the memo. Don't let it slip into execution ambiguity.
- **Add `the-collection.html` to Task 2 scope**, or explicitly document why it's excluded (e.g., "redirect has no user-visible footer").
- **Clarify memo authorship.** Add a line to the template: "Author: [internal / external counsel / third-party review]" so the memo can't be read as counsel sign-off when it isn't.
- **Strengthen verification:** replace count-only `rg href="#"` with per-file per-link path checks (6 assertions: 3 files × 3 links).
- **Add a deploy-path smoke test note.** Even a comment: "confirm pages resolve at `/legal.html` not `/legal/`" — catches the most common static host routing mistake.

---

### Risk Assessment

**MEDIUM**

Regulatory exposure is the ceiling risk here, but the draft gate correctly caps it. The real danger is shipping a memo that looks like a compliance review but isn't, or having one footer still pointing to `#` in production because `the-collection.html` was missed. Neither is catastrophic pre-launch, but both are embarrassing and the `the-collection.html` gap is a mechanical error that should be fixed before execution starts.

---

## Codebase spot-check (in-environment)

**Scope:** Quick factual check against repo; not a second model.

- **`the-collection.html`:** Current file is a minimal redirect stub (canonical + short message + link to `index.html`). **No footer row with Legal/Privacy/Compliance.** Claude’s “stale `#` footer” scenario does not apply *today*; if the stub grows into a full page later, footers would need to be wired then. The plan should still **explicitly exclude** or **reference** this file to avoid future drift.
- **Task 2 acceptance:** The criterion `rg ... | wc -l` equals 3 for `legal.html` counts **per-file matches**, not total matches across the repo — confirm the plan intent (one footer link per pillar vs. total occurrences) to avoid false failures if, e.g., trust pages add second `legal.html` references in their own footers.
- **Trust pages + Phase 2 i18n:** New pages will need `i18n.js` + `shmGetInitialLocale` if nav/locale parity with pillars is required; the plan copies story shell but does not mention loading `i18n.js` — worth one line in Task 1 so locale and `data-i18n` footers stay consistent with `bespoke.html`.

---

## Consensus Summary

### Agreed strengths

- Tight mapping from TRUST-01 / TRUST-02 to three concrete deliverables (pages, wiring, memo).
- Draft banner is the right mitigation for non-counsel copy.
- Grep-based acceptance is appropriate for a static milestone.

### Agreed concerns (prioritized)

1. **Legal-page i18n policy** — EN-only vs. full RU/TH structure should be decided before build; align with Phase 2 “no mixed islands” expectation.
2. **Memo semantics** — TRUST-02 must read as **internal assessment / pending counsel**, not implied sign-off; add authorship and status fields.
3. **`the-collection.html`** — Explicitly out of scope *with rationale* (current stub has no trust links) to close the loop on reviewer concern.
4. **Trust pages chrome** — Confirm whether `i18n.js` and nav/locale behavior match pillar pages to avoid regressions.

### Divergent views

- **Claude:** HIGH severity on `the-collection.html` omission. **Spot-check:** LOW — file has no trust footer today; risk is **future** IA drift, not current broken links.

### Suggested next step for planning

Run `/gsd-plan-phase 3 --reviews` (or manually fold the bullets above into `03-01-PLAN.md` / CONTEXT) before `/gsd-execute-phase 3`.

---

*Generated by GSD cross-AI review workflow.*
