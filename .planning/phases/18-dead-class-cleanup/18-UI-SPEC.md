---
phase: 18
slug: dead-class-cleanup
status: approved
shadcn_initialized: false
preset: none
created: 2026-04-27
---

# Phase 18 — UI contract (class & hook hygiene)

> **UI hint: partial** — no new visual design. Scope is **DOM/CSS/JS consistency**: remove unused selectors, dead attributes, redundant i18n hooks, and duplicate asset links so class names and scripts match real behavior.

---

## In scope

| Area | Rule |
|------|------|
| **`shm-chrome.css`** | Every defined class (`.shm-*`) must appear on at least one deliverable HTML page **or** be removed with rationale in SUMMARY |
| **Inline `<style>`** (per-page) | Rules must be used (e.g. `[data-lang]` visibility); no orphan selectors |
| **`i18n.js`** | No `querySelector` / attribute branches for **IDs or attributes that never appear** in repo `*.html` |
| **Tailwind** | No custom utility **string** in `class="..."` that suggests behavior (e.g. “slow fade”) **without** matching CSS or JS (roadmap example) |

---

## Out of scope

- Changing Tailwind token values, palette, or layout
- Renaming `lang-btn` / `lang-menu-btn` (used by JS and HTML)
- Altering `data-i18n` key space

---

## Verification mindset

After execute: **`rg`** shows no removed hook reintroduced; locale switching still updates mobile disclosure labels for **all** pages that use `data-shm-locale-label`.
