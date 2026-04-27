# SEO & pre-launch checklist (Phase 04)

## Before production

- [ ] **Replace `__CANONICAL_ORIGIN__`** — `rg __CANONICAL_ORIGIN__` across `*.html` returns **zero** matches after find-replace with the live origin (no trailing slash on origin).
- [ ] **HTTP 200** — All public HTML routes return 200 on the target host (`/`, `/index.html`, pillars, trust pages).
- [ ] **Titles** — Unique per page (browser tab / `document.title`).
- [ ] **Meta descriptions** — Unique per page; aligned with on-page intent.
- [ ] **Canonical** — Each page’s `<link rel="canonical">` matches the final public URL for that resource.
- [ ] **Internal nav** — Primary chrome links include `index.html`, `bespoke.html`, `the-story.html` where applicable; trust footers use `legal.html`, `privacy.html`, `compliance.html`.
- [ ] **Footer trust row** — No `href="#"` on Legal / Privacy / Compliance in pillar pages.

## Link / hash audit

Run from repo root and record the output:

```bash
rg -n 'href="#"' index.html bespoke.html the-story.html legal.html privacy.html compliance.html
```

**Target:** zero matches, or list allowed exceptions here: _(none expected for trust/footer nav)._

## Open Graph

- [ ] **`og:title` / `og:description`** — Match each page’s positioning; preview in Facebook Debugger / LinkedIn Post Inspector after launch URL is final.
- [ ] **`og:image`** — **Not set** in HTML until an approved absolute image URL exists (add when brand supplies asset).

## JSON-LD

The file `04-ORGANIZATION-JSON-LD-TEMPLATE.json` is a **template only** — **not wired** in any HTML. Do not embed or script-load Organization structured data until **brand and legal** approve.
