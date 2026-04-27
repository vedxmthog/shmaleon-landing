# SHMALEON Landing

Static marketing site for **SHMALEON**—an invitation-only brand focused on **precision pastry** and **elevated botanical (cannabis) infusion**, anchored in Phuket. The experience is **English, Russian, and Thai** (shared terminology is recorded in [`.planning/GLOSSARY.md`](.planning/GLOSSARY.md); the lobby is **English-only** by design).

**Core aim:** a cohesive, premium, trustworthy web presence (ritual, restraint, craft) that stays **static-first** and **defensible in regulated markets**—public copy and claims should be reviewed with qualified counsel before go-live.

**Technology:** plain HTML, [Tailwind CSS](https://tailwindcss.com/) via CDN, Google Fonts, Material Symbols, and remote images. **No build step** is required to edit or serve the site. Product and planning context live under [`.planning/PROJECT.md`](.planning/PROJECT.md).

## Run locally

Use a small **HTTP server** from the **repository root** so scripts and relative paths behave like they will on the host. Do not rely on `file://` for full behavior.

```bash
npx --yes serve -l 8080
```

Use the URL the tool prints (often `http://localhost:8080`). The home page is **`index.html`** (open `/` or `/index.html`). Stop the server with **Ctrl+C** in the terminal.

## Deploy (brief)

Full hosting steps, local verify, and **`__CANONICAL_ORIGIN__`** find-replace before production are documented in [`.planning/deploy.md`](.planning/deploy.md). The site is static; **GitHub Pages** (or any static host) can serve the root of this branch. Use **relative** links between pages so a project site at `https://<user>.github.io/<repo>/` keeps working.

**Bespoke request hand-off:** `bespoke.html` submits only via client-side `mailto:` or `https://wa.me/…` (no backend). Before launch, replace the `BESPOKE_MAILTO` placeholder and the `SOCIAL` URL map (`instagram` / `telegram` / `whatsapp`) in each page script with production destinations.
