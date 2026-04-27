---
phase: 16
slug: typography-pass-optional
status: approved
shadcn_initialized: false
preset: none
created: 2026-04-27
---

# Phase 16 — UI design contract (typography)

> Scope: Replace **Inter** as the **body and label sans** with **IBM Plex Sans** (more distinct, still neutral-premium) while **keeping Noto Serif** for all `headline-*` tokens and `font-noto-serif` utility usage unchanged.

---

## System

| Property | Value |
|----------|-------|
| Stack | Static HTML + Tailwind CDN + per-page `tailwind.config` in `<script id="tailwind-config">` |
| Delivery | Google Fonts (`display=swap`); no self-hosted fonts in this phase |

---

## Type roles (mandatory)

| Role | Token / utility | Face |
|------|-----------------|------|
| Body copy | `font-body-lg`, `font-body-md`, default body | **IBM Plex Sans** |
| Label / caps | `font-label-caps`, `text-label-caps` | **IBM Plex Sans** |
| Display / headlines | `font-headline-xl`, `font-headline-md`, `font-headline-lg`, `font-noto-serif` | **Noto Serif** (unchanged) |

---

## Google Fonts `<link>` (canonical)

Use **one** combined href on every page that loads the design tokens (replace the existing Inter + Noto link):

```text
https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500&family=Noto+Serif:wght@300;400;500;700&display=swap
```

- **IBM Plex Sans:** 300, 400, 500 — matches current Inter weight usage in `fontSize` tokens.
- **Noto Serif:** include **700** wherever bespoke already relied on it; safe to load on all pages.

**Pages to update:** `index.html`, `bespoke.html`, `the-story.html`, `compliance.html`, `privacy.html`, `legal.html`  
**Out of scope:** `the-collection.html` (redirect stub; system fonts only).

---

## `tailwind.config.theme.extend.fontFamily` (mandatory)

In the JSON for `fontFamily`, replace every **`"Inter"`** array member used for **`label-caps`**, **`body-lg`**, and **`body-md`** with **`"IBM Plex Sans"`** (string must match Google family name).

Do **not** change arrays whose **only** family is **`"Noto Serif"`** (headline keys).

---

## Non-goals

- Do not change `fontSize`, `lineHeight`, `letterSpacing`, or `fontWeight` token definitions unless a post-swap readability issue is documented in SUMMARY.
- Do not rename Tailwind font token keys (`body-md`, etc.).
- Do not switch Material Symbols link.

---

## CLS / readability

- Keep `display=swap` on the font link.
- After implementation: executor documents **one** manual note in SUMMARY (hero + one body block EN/RU/TH: no disruptive FOUT; line lengths acceptable).

---

## Registry safety

- Third-party dependency remains Google Fonts only (existing pattern).
