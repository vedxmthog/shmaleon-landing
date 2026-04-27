---
phase: 17-legal-page-density
plan: 01
completed: 2026-04-27
---

# Phase 17 — Plan 01 summary

## Goal

Tighter mobile rhythm on draft legal/privacy/compliance pages (Phase 17 / TRUST-01 presentation).

## Files touched

- `legal.html`
- `privacy.html`
- `compliance.html`

## Changes

- `<main id="main-content">`: bottom padding `pb-12 sm:pb-16 md:pb-24 lg:pb-section-padding` (keeps large-screen `pb-section-padding`).
- Draft banner: `mb-6 sm:mb-8 md:mb-10`.
- H1: `mb-5 sm:mb-6 md:mb-8`.
- Body paragraphs: `mb-3 md:mb-4` (three per page).

## **Manual UAT**

At **375px** width (iPhone preset or responsive devtools): open `legal.html`, `privacy.html`, and `compliance.html` — bottom padding after the last paragraph should not feel like excessive empty runaway; draft banner and locale spans still visible; no horizontal scroll.

## Deviations

None.
