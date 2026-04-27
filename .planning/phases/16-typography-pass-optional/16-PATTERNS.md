# Phase 16 — PATTERN MAP

## RELEVANT FILES

| File | Role |
|------|------|
| `index.html` | Reference: `fontFamily` block (~lines 85–104), Google Fonts link (~line 14) |
| `bespoke.html` | Same pattern; Noto **700** already in historical link — preserve via unified href |
| `the-story.html` | Same pattern as index |
| `compliance.html`, `privacy.html` | Compact inline `fontFamily` JSON on one line |
| `legal.html` | Full `fontFamily` object like index |

## ANALOG EXCERPT (index.html)

```javascript
"fontFamily": {
  "label-caps": ["Inter"],
  "headline-xl": ["Noto Serif"],
  "headline-md": ["Noto Serif"],
  "body-lg": ["Inter"],
  "headline-lg": ["Noto Serif"],
  "body-md": ["Inter"]
},
```

**Target:** Replace `Inter` with `IBM Plex Sans` in `label-caps`, `body-lg`, `body-md` only.

## Google Fonts link analog

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&amp;family=Noto+Serif:wght@300;400;500&amp;display=swap" rel="stylesheet"/>
```

**Target:** IBM Plex Sans + Noto Serif (include wght 700 for Noto) per `16-UI-SPEC.md`.
