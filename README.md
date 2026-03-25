<div align="center">

# Ryan Scott — Portfolio

**Personal portfolio showcasing product strategy, digital technology leadership, and design-forward implementation**

[![License](https://img.shields.io/github/license/rysco78/ryan-scott-portfolio)](LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/rysco78/ryan-scott-portfolio/deploy.yml?branch=master&label=Deploy)](https://github.com/rysco78/ryan-scott-portfolio/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)]()
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)]()

</div>

## Features

- **Responsive Design** — Mobile-first responsive layout with smooth transitions and accessibility
- **Dark/Light Mode** — Custom theme provider with persistent localStorage preference
- **Scroll Animations** — Framer Motion-powered fade-ins and entrance animations
- **Static Export** — Built for GitHub Pages with zero server-side dependencies
- **Tailwind v4** — Modern CSS with custom properties for theming, no `tailwind.config.ts`

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | lucide-react |
| Fonts | DM Serif Display, Plus Jakarta Sans (Google Fonts) |
| Deployment | GitHub Pages + GitHub Actions |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) >= 18
- npm (included with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/rysco78/ryan-scott-portfolio.git
cd ryan-scott-portfolio/portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Static export to portfolio/out/
npm run lint     # ESLint check
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css           # Tailwind v4 theme + CSS custom properties
│   ├── layout.tsx            # Fonts, ThemeProvider, metadata
│   └── page.tsx              # Section assembly (Hero → About → Experience → Projects → Contact)
├── components/
│   ├── layout/               # Navbar, Footer, ThemeProvider, backgrounds
│   ├── sections/             # Section components (one per page section)
│   └── ui/                   # Reusable UI components (Badge, Tag, SectionFade)
├── lib/
│   ├── data.ts               # All site content as typed constants
│   └── utils/
├── types/
│   └── index.ts              # Experience, Project, Competency interfaces
└── public/
    └── ryan-scott.jpg        # Profile headshot
```

## Configuration

### Content

All text content (bio, experience, projects, skills) lives in [`lib/data.ts`](portfolio/lib/data.ts). Edit content there rather than in the components — they assemble the data structure.

### Theming

Dark mode is the default. The custom [`ThemeProvider`](portfolio/components/layout/ThemeProvider.tsx) toggles a `.light` class on `<html>`. There are **no `dark:` Tailwind classes** — all theming is done via CSS custom properties:

- `:root` defines dark mode colors
- `.light` class overrides them for light mode

Theme values are defined in [`app/globals.css`](portfolio/app/globals.css) alongside the Tailwind v4 `@theme inline {}` block.

## Deployment

The site is automatically deployed to GitHub Pages when you push to `master`. The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles:

1. Building the site with `npm run build`
2. Exporting static HTML
3. Deploying to GitHub Pages

**Live site:** https://rysco78.github.io
