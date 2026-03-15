# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `portfolio/` directory:

```bash
npm run dev          # dev server on localhost:3000
npm run dev -- -p 3011  # dev server on a custom port
npm run build        # static export to portfolio/out/
npm run lint         # ESLint
```

There are no tests. `npm run build` is the primary correctness check — it runs TypeScript compilation and Next.js static export together.

## Deployment

Pushing to `master` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds and deploys to GitHub Pages automatically. The site is statically exported (`output: 'export'` in `next.config.ts`), so no server-side features (API routes, SSR, `next/image` optimization) are available.

## Architecture

The project is a single-page portfolio (`app/page.tsx`) that assembles section components in order: Hero → About → Experience → Projects → Contact. All site content lives in `lib/data.ts` as typed constants — **edit content there, not in the components**.

### Tailwind v4

This project uses Tailwind CSS v4. There is **no `tailwind.config.ts`**. All theme configuration lives in `app/globals.css` inside an `@theme inline {}` block. The import is `@import "tailwindcss"`, not the v3 `@tailwind` directives.

### Dark/Light Mode

Dark mode is the default. The custom `ThemeProvider` (`components/layout/ThemeProvider.tsx`) toggles a `.light` class on `<html>` — there are **no `dark:` utility classes** anywhere. Color theming is done entirely via CSS custom properties:

- `:root` defines dark mode values
- `.light` overrides them for light mode

The background (`components/layout/ParallaxGradientBackground.tsx`) follows the same pattern with `.grad-dark` / `.grad-light` CSS classes.

### Key conventions

- `@/*` path alias maps to `portfolio/` root
- Icons: `lucide-react` only
- Animations: `framer-motion` — scroll fade-ins use `SectionFade` (`components/ui/SectionFade.tsx`)
- `suppressHydrationWarning` is set on `<html>` to suppress the theme class flash
