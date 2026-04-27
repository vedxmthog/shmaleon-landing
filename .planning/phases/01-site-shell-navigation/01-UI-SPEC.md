---
phase: 1
slug: site-shell-navigation
status: approved
shadcn_initialized: false
preset: none
created: 2026-04-27
---

# Phase 1 — UI Design Contract (SHMALEON static)

> Visual/interaction contract for **plain HTML + Tailwind CDN** (no React/shadcn). Matches existing repo pages: `index.html`, `bespoke.html`, `the-story.html`.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none (static HTML) |
| Preset | Tailwind CDN + inline `tailwind.config` per page |
| Component library | none |
| Icon library | Material Symbols Outlined (Google Fonts) |
| Font | Inter (labels/body), Noto Serif (headlines) — already loaded |

---

## Spacing Scale

Reuse existing Tailwind theme tokens (`px-gutter`, `py-section-padding`, `px-margin-edge`, `px-12`, `py-10` in nav). **Mobile-first rule:** reduce horizontal padding on `<md` (e.g. `px-4` or `px-6`) where `px-12` causes crowding.

| Token | Usage |
|-------|--------|
| Nav horizontal | `px-4` sm → `px-12` md+ after audit |
| Section gutters | keep `px-gutter` / `px-margin-edge` but verify no overflow-x |

---

## Typography

| Role | Source |
|------|--------|
| Label / caps | `font-label-caps` / `text-label-caps` |
| Headline xl/lg/md | `font-headline-*` |
| Body | `font-body-md` / `font-body-lg` |

Do not introduce new font families in Phase 1.

---

## Color

| Role | Value (existing) |
|------|------------------|
| Background | `#121414` (`background`) |
| On-surface text | `#e2e2e2` |
| Accent / secondary | `#e9c176` (gold) — nav active, CTAs, focus ring partner |

---

## Chrome & layout

1. **Top bar:** Left cluster (nav links desktop) · center **SHMALEON** wordmark · right cluster (locale control, burger `<md`).
2. **`<md`:** Hide horizontal nav row; **burger** toggles **panel** (full-width or slide-over) with same three pillar links + optional locale block.
3. **Wordmark:** Must not overlap interactive controls; if needed, shrink tracking or font size on narrow screens, or move logo to left on mobile per research.
4. **Locale:** Single **disclosure** (button + popover/list or native `<select>` styled). Not three permanent EN|RU|TH text buttons in mobile header.
5. **Footer:** Brand block · copyright · legal links · **new row** for Instagram / Telegram / WhatsApp (icon + text), URLs from one shared `SOCIAL_LINKS` constant in JS or HTML comment block.

---

## Bespoke contact block (FORM-01)

- **Channel** control: radio group or `<select>`: `telegram` | `instagram` | `whatsapp` | `email`.
- **Input** changes by channel:
  - Telegram / Instagram: text, pattern username (no `@` required in field; strip on validate).
  - WhatsApp: `tel` / E.164 validation, `inputmode="tel"`.
  - Email: `type="email"`.
- **Submit:** No server — **mailto:** or **`https://wa.me/`** compose with prefilled body; document in task. Show inline error text below field (`role="alert"` or `aria-describedby`).

---

## Copywriting (Phase 1 EN OK)

| Element | Copy direction |
|---------|----------------|
| Burger | `aria-label="Menu"` (EN; Phase 2 translates) |
| Locale button | Show current code `EN` / `RU` / `TH` |
| Form errors | Concrete: “Enter a valid email”, “Use country code for WhatsApp”, etc. |

---

## Registry Safety

| Registry | Blocks Used | Safety Gate |
|----------|-------------|-------------|
| shadcn | none | N/A |
| Tailwind CDN | script from cdn.tailwindcss.com | pin query params as today; no arbitrary plugin installs |

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS (contract above)
- [x] Dimension 2 Visuals: PASS (matches dark luxury SHMALEON)
- [x] Dimension 3 Color: PASS
- [x] Dimension 4 Typography: PASS
- [x] Dimension 5 Spacing: PASS (audit-driven)
- [x] Dimension 6 Registry Safety: PASS

**Approval:** approved 2026-04-27 (orchestrator — static HTML, no gsd-ui-researcher run)
