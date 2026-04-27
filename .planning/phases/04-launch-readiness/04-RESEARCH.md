# Phase 4 — Research: Launch readiness

**Phase:** 4 — Launch readiness  
**Question:** What do we need to know to plan deploy documentation, technical SEO (canonical, meta, OG), and a pre-go-live link pass?

## RESEARCH COMPLETE

---

## 1. Requirements mapping

| ID | Implication |
|----|-------------|
| **REL-01** | Hosting path documented: how to serve repo root over HTTP(S), how `/` maps to collection home (`index.html`), domain/env assumptions, placeholder replacements (social URLs, bespoke mailto) called out. Prefer **`.planning/deploy.md`** for operator detail + keep **README** as contributor entry. |
| **REL-02** | Every **public** HTML surface needs a **unique** `<title>`, a **meta name="description"** (distinct per page), and **Open Graph** basics (`og:title`, `og:description`, `og:type`, `og:url` — `og:image` optional but document). |
| **SEO-01** | **Canonical** `<link rel="canonical">` on each URL the crawler might see; **the-collection.html** already has a relative canonical to `index.html` — align with production **absolute** URLs via one replaceable prefix. **Single `<h1>`** per page (verify after Phase 3 trust pages). **Internal link graph:** no dead `href="#"` for real destinations; pillars + trust pages cross-linked. **JSON-LD:** optional Organization schema — **do not** emit live JSON-LD until brand/legal approves; ship a **template file** under `.planning/` only. |

## 2. Codebase touchpoints (static, no build)

- **Pages (post–Phase 3):** `index.html`, `bespoke.html`, `the-story.html`, `the-collection.html`, `legal.html`, `privacy.html`, `compliance.html`.
- **Head pattern:** Today only `<title>` + viewport; no meta description, no OG, no canonical on main pillars (except redirect stub).
- **README:** Already documents `npx serve` and brief deploy; Phase 4 deepens **REL-01** and points to `.planning/deploy.md`.

## 3. Canonical & OG without a bundler

Use a **single literal placeholder** in all HTML heads, e.g. `__CANONICAL_ORIGIN__` (no trailing slash), documented in `deploy.md`. Pre-launch replace with production origin (`https://www.example.com` or `https://user.github.io/repo`). Canonical paths:

| File | Suggested canonical path (after origin) |
|------|----------------------------------------|
| `index.html` | `/` or `/index.html` (pick one; document in deploy) |
| `bespoke.html` | `/bespoke.html` |
| `the-story.html` | `/the-story.html` |
| `the-collection.html` | `/` (same as home; redirect page) |
| Trust pages | `/legal.html`, etc. |

**og:url** must match the same canonical URL string for that page.

## 4. Risks

- **Wrong canonical after move:** Mitigate with checklist + grep for placeholder until replaced.
- **Duplicate titles** after i18n: `<title>` stays one string per document (locale-specific title is a Phase 2 concern; if already localized, keep one primary title per file for REL-02).

## Validation Architecture

**Goal:** Verifiable loop without a test framework (static HTML).

| Layer | Method |
|-------|--------|
| **Per-task** | `rg` / `test -f` in each task’s `acceptance_criteria` (meta tags, canonical, placeholder presence). |
| **Per-plan** | Manual `npx serve` + browser: view source on each page; share preview uses correct OG tags. |
| **SEO-01** | Checklist file + `rg` for internal `href` to known HTML basenames; no `href="#"` on nav/footer real destinations. |
| **Dimension 8** | Manual UAT + scripted greps; documented in `04-VALIDATION.md`. |

**Sampling rate:** After the single wave, run full grep checklist + one manual pass.

**Secure behavior:** OG URLs and canonicals must not point at user-controlled hosts; only `__CANONICAL_ORIGIN__` substitution.

---

*Phase 4 research — 2026-04-27*
