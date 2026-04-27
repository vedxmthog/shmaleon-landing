# Deploy — SHMALEON static site (REL-01)

## Hosting model

- **Static files only.** The **repository root** is the **web root** (no `public/` subfolder). Hosts serve `index.html` for directory `/` when configured (default on GitHub Pages, Netlify, most static hosts).

## Local verify

From repo root:

```bash
npx --yes serve -l 8080
```

Open the printed URL (often `http://localhost:8080`). Confirm `/` and `/index.html` show the collection home; exercise pillar and trust links.

## Production URLs and canonical placeholder

- Before production, **replace every** literal **`__CANONICAL_ORIGIN__`** in HTML with your final site origin **without a trailing slash** (example: `https://www.example.com`).
- After replacement, **no** `__CANONICAL_ORIGIN__` should remain (verify with `rg __CANONICAL_ORIGIN__ *.html`).
- **`og:url`** and **`<link rel="canonical">`** use the same placeholder until then.

## Index / collection

- **`/`** must resolve to **`index.html`** (collection experience).
- **`the-collection.html`** is a **legacy** entry that redirects to the home page; canonical for that file points to **`__CANONICAL_ORIGIN__/index.html`** (collection home).

## Pre-flight placeholders

- **`BESPOKE_MAILTO`** and the **`SOCIAL`** URL map in page scripts — replace with production values (see `README.md` and `.planning/REQUIREMENTS.md`).
- Trust/legal copy: remove **draft** banners only after counsel approval.

## GitHub Pages (project site, optional)

- Site URL shape: `https://<user>.github.io/<repo>/`
- **Relative** links between `.html` files keep working when the site is served under a subpath.

## Rollback

- Redeploy a **previous commit** or restore the last known-good static artifact from your host’s history / object storage.
