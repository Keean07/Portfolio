# Portfolio

Personal portfolio of Keean Ferreira — a React + TypeScript + Vite site that keeps
the original HTML5 UP "Prologue" look and bundles the standalone project demos.

Live at **https://keean07.github.io/Portfolio/**

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173/Portfolio/
```

## Scripts

| Script            | What it does |
|-------------------|--------------|
| `npm run dev`     | Vite dev server |
| `npm run build`   | Type-check → `vite build` → write `dist/404.html` |
| `npm run preview` | Serve the production build locally |
| `npm run lint`    | ESLint |

## Layout

```
index.html            Vite entry
src/                  React homepage (Home -> Header / Intro / Portfolio / About / Contact / Footer)
public/
  *.html              Static per-project pages (drawingApp.html, p5Assignments.html, ...)
  assets/             Original "Prologue" theme CSS / JS / fonts
  images/             Portfolio imagery
  DrawingApp/         \
  P5JS/                > interactive project demos, served as-is
  DigitClassification/ |
  LocalCommunityWebsite/ /
scripts/postbuild.mjs  Copies index.html -> 404.html for SPA deep links
.github/workflows/deploy.yml  Build + deploy to GitHub Pages on push to main
```

Only `/` is a React route. The portfolio cards link straight to the static pages in
`public/`, which each link on to their demo.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds with `VITE_BASE=/Portfolio/` and publishes `dist/` to GitHub Pages.

**One-time setup:** repo *Settings → Pages → Source = "GitHub Actions"*.

Base path is `/Portfolio/`. For a root/custom-domain deployment, build with
`VITE_BASE=/ npm run build`.

## Credits

- Template: [HTML5 UP](https://html5up.net) "Prologue"
- Icons: Font Awesome · jQuery · [Scrollex](https://github.com/ajlkn/jquery.scrollex)
