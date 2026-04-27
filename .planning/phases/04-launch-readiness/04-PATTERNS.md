# Phase 4 — Pattern map

**Phase:** 04 — Launch readiness  
**Output:** Analogs for deploy copy and `<head>` metadata.

## Files to touch

| File | Role | Closest analog |
|------|------|----------------|
| `README.md` | Contributor + quick run | Existing “Run locally” / “Deploy (brief)” sections |
| `.planning/deploy.md` | Operator REL-01 | New — extend README patterns |
| `*.html` `<head>` | title, meta, link canonical, OG | `the-collection.html` already has `<link rel="canonical" href="index.html"/>` — upgrade to absolute-with-placeholder pattern |
| `.planning/phases/04-launch-readiness/04-SEO-CHECKLIST.md` | Go-live grep list | New |

## Excerpt: redirect canonical (relative today)

```6:7:the-collection.html
<title>SHMALEON — Redirect</title>
<link rel="canonical" href="index.html"/>
```

Phase 4 replaces relative canonical with `href="__CANONICAL_ORIGIN__/index.html"` (exact string in PLAN) and documents replacement.

## Excerpt: minimal head (pillar)

```3:6:index.html
<html class="dark lang-en" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>SHMALEON - The Collection</title>
```

Insert **after** charset/viewport and **before** first script: description, canonical, OG block per PLAN.

---

## PATTERN MAPPING COMPLETE
