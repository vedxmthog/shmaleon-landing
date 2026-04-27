# Phase 9: Production social URLs - Context

**Gathered:** 2026-04-27  
**Status:** Ready for planning  
**Source:** Roadmap v1.2 Phase 9 + REQUIREMENTS (SOCIAL-01) — no separate discuss-phase

## Phase boundary

- Replace every **placeholder** `instagram.com/TODO`, `t.me/TODO`, `wa.me/TODO` in marketing HTML/JS with **real** public profile/channel URLs, **or** hide the three footer social links until the brand supplies URLs (no TODO links in production).
- **In scope:** Footer social targets on `index.html`, `bespoke.html`, `the-story.html`, `legal.html`, `privacy.html`, `compliance.html` and any `SOCIAL` constant / sync script on those pages.
- **Out of scope:** Bespoke form channel *selector* (Telegram/Instagram/Email as contact method)—unchanged; only the **branded** footer links.

## Implementation decisions

- **Single source of truth:** One file (e.g. root-level `social-urls.js` or a clearly named config module) that defines the three final URLs, loaded before existing footer `sync*Footer` logic; remove duplicated `const SOCIAL = { ... }` literals across pages in favor of `window.SHMALEON_SOCIAL` (or equivalent) from that file.
- **“Hide until final” path:** If URLs are not ready at cutover, a boolean flag in the same file (or absence of a well-known placeholder pattern) can suppress rendering of the three `<a>` elements or a wrapper—documented in README and a line in `.planning/`.
- **Open in new tab:** Keep `rel="noopener noreferrer" target="_blank"`.

## Canonical references

- `.planning/REQUIREMENTS.md` — SOCIAL-01
- `.planning/README.md` / `README.md` — pre-launch replacement notes
- `.planning/deploy.md` — SOCIAL / mailto pre-flight

## Deferred

- None — Phase 9 only delivers URL truth or hidden state.

---

*Phase: 09-production-social-urls*
