# React Portfolio

A React + TypeScript + Vite rebuild of the portfolio site, keeping the original
HTML5 UP "Prologue" look and the standalone project demos.

## Quick start

```bash
cd react-portfolio
npm install
npm run dev        # http://localhost:5173/Portfolio/
```

## Scripts

| Script            | What it does |
|-------------------|--------------|
| `npm run dev`     | Sync demos, then start the Vite dev server |
| `npm run build`   | Sync demos → type-check → `vite build` → write `dist/404.html` |
| `npm run preview` | Serve the production build locally |
| `npm run lint`    | ESLint |
| `npm run prep-demos` | Copy the root-level demo folders into `public/` (run automatically by `dev`/`build`) |

## How it's put together

- **`src/`** – the React homepage (`Home` → `Header / Intro / Portfolio / About / Contact / Footer`).
  The original theme CSS is loaded via `<link>` in `index.html`; the original jQuery
  scripts are injected by `Home.tsx` after mount.
- **`public/*.html`** – the per-project pages (`drawingApp.html`, `p5Assignments.html`, …).
  These are plain static pages; the portfolio cards link straight to them, so there is
  **no client-side routing for projects** — only `/` is a React route.
- **Project demos** (`DrawingApp/`, `P5JS/`, `DigitClassification/`, `LocalCommunityWebsite/`)
  live at the **repo root** and are the single source of truth. `scripts/prep-demos.mjs`
  copies them into `public/` (git-ignored there) so Vite bundles them into `dist/`.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml),
which builds this app with `VITE_BASE=/Portfolio/` and publishes `dist/` to GitHub Pages.

**One-time setup:** in the repo's *Settings → Pages*, set **Source = "GitHub Actions"**.

The base path is `/Portfolio/` (project site at `keean07.github.io/Portfolio/`).
For a root/custom-domain deployment, build with `VITE_BASE=/ npm run build`.
