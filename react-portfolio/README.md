# React Portfolio

A modern React + TypeScript portfolio website built with Vite. This application replaces the original static HTML portfolio with a fully interactive React webapp while maintaining identical visual design and functionality.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation & Running

1. **Navigate to the React app directory:**
   ```bash
   cd react-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The app will be available at: **http://localhost:5173/**

### Available Scripts

- `npm run dev` - Start development server (hot reload enabled)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🛠️ Technology Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing for navigation
- **ESLint** - Code linting and quality assurance

## 📁 Project Structure

```
react-portfolio/
├── src/
│   ├── components/     # React components (Header, Portfolio, About, etc.)
│   ├── pages/         # Page components (Home, ProjectPage)
│   └── App.tsx        # Main app with routing
├── public/            # Static assets (images, project HTML files)
├── dist/              # Production build output
└── index.html         # Main HTML template
```

## 🎯 Features

- **Responsive Design** - Works on all device sizes
- **Smooth Scrolling** - Navigate between sections seamlessly  
- **Dynamic Routing** - Individual pages for each portfolio project
- **Project Showcase** - Interactive portfolio with project details
- **Contact Integration** - Direct links to email and social profiles
- **Performance Optimized** - Fast loading and efficient asset handling

## 📍 Portfolio Project Navigation

The webapp includes full routing support for all portfolio projects:

### Available Routes:
- `/` - Main portfolio homepage
- `/LocalCommunityWebsite` - BraaiMasters gaming community site
- `/drawingApp` - Interactive P5.JS drawing application
- `/p5Assignments` - 8 interactive P5.JS programming demos
- `/DigitClassification` - TensorFlow machine learning notebook
- `/coinhop` - CoinHop game project page
- `/CyberSpider` - CyberSpider game project page

### Navigation Features:
- **Click any portfolio item** to navigate to its dedicated project page
- **Floating back button** on all project pages for easy navigation
- **Built-in navigation** in project HTML files links back to main portfolio
- **Loading and error states** with fallback navigation options
- **Client-side routing** ensures fast, seamless navigation without page reloads

All project pages maintain the original functionality while providing integrated navigation back to the main portfolio.

## 🔧 Development

The app uses Vite for development with Hot Module Replacement (HMR) for instant updates during development. TypeScript provides type safety and better development experience.

For production deployment, run `npm run build` to generate optimized static files in the `dist/` directory.
