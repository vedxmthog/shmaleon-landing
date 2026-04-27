# Phase 15 — PATTERN MAP

## PATTERN MAPPING COMPLETE

**Phase:** 15 — Media hardening

---

## Files to touch

| File | Role | Closest analog | Notes |
|------|------|----------------|-------|
| `index.html` | Catalogue + hero images | Existing sections preserve Tailwind layout; only `src` + optional `width`/`height`/`alt` | Hero: lines ~307–311; objects ~353+, ~405+, ~414+, delivery ~520 |
| `bespoke.html` | Configurator hero + product tiles | Same as index for shared product URLs | Hero ~155; tiles ~178, ~190, ~202 |
| `the-story.html` | Narrative imagery | `aspect-[3/4]` wrappers already present for grid | Hero ~251–252; grid ~291–330; handover ~362 |
| `media/*` (new) | Self-hosted binaries | None — new directory | Add `README.md` with slug ↔ source URL table |

---

## Code excerpts (reference)

**Index hero image (current external `src`):**

```307:311:index.html
<section class="relative w-full min-h-0 min-h-[100svh] md:min-h-[44rem] flex items-center justify-center overflow-hidden">
<!-- Background Image -->
<div class="absolute inset-0 z-0 bg-surface-container">
<img alt="" class="w-full h-full object-cover opacity-80" data-alt="Glowing black box in dark moody lighting" src="https://lh3.googleusercontent.com/aida/..."/>
```

**Story grid stable aspect wrapper (keep when swapping `src`):**

```291:292:the-story.html
<div class="relative overflow-hidden aspect-[3/4] mb-8 border border-surface-container-high group-hover:border-secondary/30 transition-colors duration-700">
<img alt="" class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" data-alt="Close up of manicured hands carefully selecting rare botanical ingredients or spices on a dark, textured slate surface, dramatic chiaroscuro lighting." src="https://lh3.googleusercontent.com/aida-public/..."/>
```

**Bespoke tile with partial good `alt` (pattern for Plan 02):**

```178:178:bespoke.html
<img alt="The Ingot" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" data-alt="Monolithic rectangular metallic block in dark moody lighting, sleek modern luxury object, high-end product photography" src="https://lh3.googleusercontent.com/aida/..."/>
```

---

## Data flow

1. **Plan 01:** Remote URL → `media/shm-*.<ext>` → HTML `src="media/shm-...."`
2. **Plan 02:** Local file dimensions → `width`/`height` attributes; `data-alt` → concise `alt`; lazy/async as specified in plan.
