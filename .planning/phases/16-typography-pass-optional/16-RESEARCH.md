# Phase 16: Typography pass (optional) — RESEARCH

## RESEARCH COMPLETE

**Date:** 2026-04-27

---

## Planning gates (orchestrator)

- **CONTEXT.md:** Not present. Roadmap goal and inline Tailwind tokens are sufficient; optional phase.
- **UI-SPEC:** `16-UI-SPEC.md` defines IBM Plex Sans + Noto pairing and file list.

---

## Findings

### Current implementation

- **Body / label sans:** `tailwind.config` maps `body-lg`, `body-md`, and `label-caps` to **`Inter`** on `index.html`, `bespoke.html`, `the-story.html`, `compliance.html`, `privacy.html`, `legal.html`.
- **Display:** `headline-xl`, `headline-md`, `headline-lg` map to **`Noto Serif`**; many nav strings use `font-noto-serif` (utility → Noto).
- **Google Fonts:** Each page loads `family=Inter` + `family=Noto+Serif` (bespoke uses Noto **700** in URL).
- **i18n:** Public copy uses **EN, RU, TH**. Any body font must support **Latin, Cyrillic, and Thai** so text does not fall back inconsistently.

### Candidate: IBM Plex Sans

- **Google Fonts** ships **IBM Plex Sans** with **Latin, Cyrillic, Thai** coverage (verify in QA).
- **Character:** More geometric/humanist than Inter; still appropriate for luxury-adjacent restraint.
- **Weights:** 300 / 400 / 500 align with existing `fontSize` token weights for body and label-caps.

### Alternatives (deferred)

- **Source Sans 3:** Strong Latin; Thai/Cyrillic coverage thinner on free tier — higher fallback risk.
- **Noto Sans** as body: safe for scripts but does not meet “more character than Inter” as strongly.

### Dependency

- **ROADMAP:** Depends on Phase 4 (launch readiness). Planning assumes Phase 4 baseline complete for token structure.

---

## Risks

| Risk | Mitigation |
|------|------------|
| FOUT/CLS on slow networks | Keep `display=swap`; manual check hero + body after swap |
| Subtle metric shift breaks layout | No fontSize changes in same task; if wrap changes, document in SUMMARY only |

---

## Validation Architecture

**Dimensions (static site):**

1. **No Inter in font stacks:** Root `*.html` (excluding `.planning/` and `the-collection.html`) — `grep -r '"Inter"' --include='*.html'` returns **no** matches inside `tailwind.config` `fontFamily` values.
2. **Font link unified:** Each in-scope page’s Google Fonts `href` contains **`IBM+Plex+Sans`** and **`Noto+Serif`** and **`display=swap`**.
3. **No stray Inter in link:** `grep -r 'family=Inter' --include='*.html'` returns **no** lines for deliverable pages (same scope as above).
4. **Manual UAT:** Open `index.html`, `bespoke.html`, `the-story.html`; spot-check EN/RU/TH body paragraphs for tofu or system-font fallback; legal trio for consistency.

**Automated:** `grep` / `rg` only — no unit test framework in repo.

---

## References

- `.planning/ROADMAP.md` — Phase 16
- `.planning/phases/16-typography-pass-optional/16-UI-SPEC.md`
- `index.html`, `bespoke.html`, `the-story.html`, `compliance.html`, `privacy.html`, `legal.html`
