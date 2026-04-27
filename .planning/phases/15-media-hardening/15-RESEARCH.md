# Phase 15: Media hardening — RESEARCH

## RESEARCH COMPLETE

**Date:** 2026-04-27

---

## Planning gates (orchestrator)

- **CONTEXT.md:** Not present for Phase 15. Planning used `ROADMAP.md`, `REQUIREMENTS.md` (A11Y-01), and repository HTML only. Capture `/gsd-discuss-phase 15` before execute if product wants locked copy decisions.
- **UI-SPEC:** Roadmap marks **UI hint: partial (images)**. Plans were produced with **`--skip-ui` semantics** (image delivery and attributes only; no new interactive UI). Run `/gsd-ui-phase 15` first if you require a formal UI contract.

---

## Findings

### Current implementation

- **Hot-linked hosts:** All catalogue / hero / story photography uses `https://lh3.googleusercontent.com/...` paths under **`aida`** and **`aida-public`** (Google-hosted delivery). These URLs are **not version-controlled**, may **expire or rotate**, and create **third-party dependency** (see `CLAUDE.md` content constraint).
- **Files affected:** `index.html` (5 `<img>`), `bespoke.html` (4 `<img>`), `the-story.html` (5 `<img>`). **12 unique** `src` URLs after deduplication (shared ingot/pulse between index and bespoke).
- **CLS / layout:**  
  - `the-story.html` ritual grid already wraps several images in **`aspect-[3/4]`** — stable boxes.  
  - `index.html` hero and object sections use **`min-h-[100svh]`** / **`h-[45vh]`** / **`md:h-[600px]`** on parents but **no `width`/`height` on `<img>`**, so intrinsic sizing cannot reserve space before decode.  
  - `the-story.html` handover image uses **`h-auto`** without aspect wrapper — more shift-prone.
- **A11Y-01 (image stability / alt):** Many nodes use **`alt=""`** with descriptive text only in **`data-alt`**. Screen readers and SEO do not read `data-alt`. Bespoke partially sets real **`alt`** on some cards; index/story largely do not.

### Recommended approach

1. **Self-host:** Add repo root directory **`media/`** (or `public/media/` — project is static flat HTML; **`media/`** at root keeps paths like `media/shm-ingot.jpg` valid when opening files locally and when deployed with `/` = repo root).
2. **Acquire assets:** One-time download of the 12 unique URLs with **`curl -fL`** (retry, fail on 4xx). If a URL returns 403, try browser-exported copy or approved replacement asset; document gap in `media/README.md`.
3. **Swap `src`:** Replace every catalogue/hero/story image `src` with relative paths under `media/`. Keep **fonts/CDN** (Tailwind, Google Fonts) out of scope unless a later phase moves them.
4. **CLS + A11Y follow-up (Plan 02):** After files exist locally, run **`file`** / **`sips -g pixelWidth`** (macOS) or **`identify`** (ImageMagick) to set **`width`** and **`height`** on each `<img>` matching natural dimensions (or scaled consistently). Set meaningful **`alt`** from `data-alt` where content-bearing; mark purely decorative only where WCAG allows. Add **`decoding="async"`**; use **`loading="lazy"`** only for images **below the fold** (not hero backgrounds).

### Dependency

- **Phase 6** (per ROADMAP): assumed complete for catalogue structure; this phase only changes asset URLs and attributes.

---

## Risks

| Risk | Mitigation |
|------|------------|
| Google URLs block automated download | Manual save; or temporary browser session; document in `media/README.md` |
| Large binaries in git | Prefer **WebP** re-encode if team agrees (smaller); otherwise JPEG as downloaded |
| Over-long `alt` from `data-alt` | Trim to one concise sentence per image; keep under ~120 chars where possible |

---

## Validation Architecture

**Dimensions for this static site:**

1. **No fragile hero/catalogue/story hotlinks:** `rg 'lh3\.googleusercontent\.com' *.html` returns **no matches** inside `src="..."` for content images (verify after Plan 01).
2. **Filesystem completeness:** `media/` contains **12** image files + `README.md` mapping slug → page role.
3. **Intrinsic dimensions:** Each content `<img>` in scope has **both** `width="..."` and `height="..."` after Plan 02 (grep-verifiable integers).
4. **Alt text:** No `alt=""` on non-decorative catalogue/story images after Plan 02 unless explicitly justified in plan notes (A11Y-01).
5. **Manual UAT:** Load `index.html`, `bespoke.html`, `the-story.html` locally; confirm images render, no broken icons, hero and grid stable on slow 3G throttle.

**Automated (execution):** `rg` / `grep` counts; optional `test -f` per expected `media/` path in a small shell checklist.

**No** unit test framework in repo; regression is **file checks + one browser pass**.

---

## Media slug map (12 files)

| Slug | Current use |
|------|-------------|
| `shm-index-hero` | `index.html` hero background |
| `shm-ingot` | Index + bespoke — The Ingot |
| `shm-pulse` | Index + bespoke — The Pulse |
| `shm-heart-cake` | Index — heart-shaped cake |
| `shm-delivery` | Index — white-glove |
| `shm-bespoke-hero` | `bespoke.html` artisan hands |
| `shm-heart-product` | Bespoke — The Heart |
| `shm-story-hero` | `the-story.html` origin hero |
| `shm-story-sourcing` | Story grid step 1 |
| `shm-story-infusion` | Story grid step 2 |
| `shm-story-presentation` | Story grid step 4 |
| `shm-story-handover` | Story handover column |

---

## References

- `.planning/ROADMAP.md` — Phase 15
- `.planning/REQUIREMENTS.md` — A11Y-01
- `CLAUDE.md` — third-party image risk
- `index.html`, `bespoke.html`, `the-story.html`
