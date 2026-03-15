# Ryan Scott — Portfolio

Personal portfolio site for Ryan R. Scott, VP of Product Strategy & Digital Technology. Built with Next.js, TypeScript, and Tailwind CSS v4, deployed to GitHub Pages via GitHub Actions.

**Live site:** [rysco78.github.io](https://rysco78.github.io)

## Stack

- **Next.js** (App Router, static export)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** — config in `app/globals.css`, no `tailwind.config.ts`
- **Framer Motion** — scroll animations and hero entrance
- **lucide-react** — icons

## Getting Started

```bash
cd portfolio
npm install
npm run dev        # localhost:3000
npm run build      # static export → portfolio/out/
npm run lint
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Tailwind v4 theme + CSS custom properties
│   ├── layout.tsx       # fonts, ThemeProvider, metadata
│   └── page.tsx         # section assembly: Hero → About → Experience → Projects → Contact
├── components/
│   ├── layout/          # Navbar, Footer, ThemeProvider, background components
│   ├── sections/        # one file per page section
│   └── ui/              # Badge, Tag, SectionFade
├── lib/
│   └── data.ts          # all site content as typed constants — edit here
└── types/
    └── index.ts         # Experience, Project, Competency interfaces
```

## Content

All text content (bio, experience, projects, skills) lives in `lib/data.ts`. Edit there rather than in the components.

## Theming

Dark mode is the default. The custom `ThemeProvider` toggles a `.light` class on `<html>`. There are no `dark:` Tailwind classes — theming is done entirely via CSS custom properties defined in `globals.css`.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages automatically.
