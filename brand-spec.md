# You Color — Brand specification

The visual system is a contemporary editorial print studio: paper-white fields, dense ink typography, sharp technical rules, physical sheet shadows, and tightly controlled production-color marks.

```css
:root {
  --bg: oklch(0.97330 0.00696 88.64);
  --surface: oklch(1 0 89.88);
  --fg: oklch(0.17764 0 89.88);
  --muted: oklch(0.51730 0 89.88);
  --border: oklch(0.87650 0.01006 87.48);
  --accent: oklch(0.62721 0.22442 24.38);
  --font-display: "Bahnschrift", "Aptos Display", sans-serif;
  --font-body: "Aptos", "Segoe UI", Arial, sans-serif;
  --font-mono: "Cascadia Mono", Consolas, monospace;
}
```

Observed rules:

- Neutral paper, white and black occupy most of every viewport; process colors behave like ink marks, not decoration.
- Display copy is oversized, tightly tracked and left aligned; supporting copy remains calm and readable.
- Sections alternate between open editorial spreads, production-spec grids and full-bleed image bands.
- Geometry is sharp: 0–4px radii, hairline dividers, crop marks, registration crosses and measured offsets.
- Physical depth comes from stacked sheets, rotated print matter, restrained grain and realistic directional shadows.
