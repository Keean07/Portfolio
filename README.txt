Welcome to my Portfolio. This is where I showcase my favorite pieces of work from my time at the University of London.

This portfolio has been modernized from basic HTML/CSS/JavaScript to a React application while preserving the original design and functionality.

## 🚀 How to Run the Webapp

**The React portfolio is located in the `react-portfolio/` directory.**

### Quick Start:
```bash
cd react-portfolio
npm install
npm run dev
```

The webapp will be available at: **http://localhost:5173/Portfolio/**

For detailed instructions and development information, see the [React Portfolio README](react-portfolio/README.md).

The live site is built and deployed to GitHub Pages automatically on every push to
`main` via `.github/workflows/deploy.yml`.

## Technology Stack

- **React 19** with TypeScript
- **Vite** for build tooling and development
- **HTML5 UP** "Prologue" template for styling

## Development

The portfolio uses a component-based React architecture:
- `Header`: Navigation and profile information
- `Intro`: Welcome section with call-to-action buttons
- `Portfolio`: Project showcase with grid layout
- `About`: Personal background and education
- `Contact`: Contact information and links
- `Footer`: Copyright and design credits

Each project has its own static page in `react-portfolio/public/` (e.g. `drawingApp.html`);
the portfolio grid links straight to these. The interactive demos themselves
(`DrawingApp/`, `P5JS/`, `DigitClassification/`, `LocalCommunityWebsite/`) live at the
repo root and are copied into the build by `react-portfolio/scripts/prep-demos.mjs`.

## Original Credits:
	Icons:
		Font Awesome (fontawesome.io)

	Other
		jQuery (jquery.com)
		Scrollex (github.com/ajlkn/jquery.scrollex)
		Responsive Tools (github.com/ajlkn/responsive-tools)
