# Writer Portfolio (Next.js + Tailwind)

Complete front-end template for a writer: bio, books, excerpts, services, press/testimonials and contact. Includes 3 themes (dark, light and grayscale) and a no-library translation approach, designed to be served as a static site.

Documentación en español: see [README.md](./README.md)

## Requirements

- Node.js (recommended: LTS)
- npm

## Scripts

- `npm run dev` — start dev server
- `npm run lint` — lint (Next/ESLint)
- `npm run typecheck` — TypeScript (no emit)
- `npm run build` — build + static export

## Development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (for example `http://localhost:3000`).

## Static export (for hosting)

This project is configured to export static HTML.

```bash
npm run build
```

Output is generated into `out/` (typical hosting: upload the contents of that folder).

## Languages (no libraries)

Static language routes:

- `/es/` — Español
- `/en/` — English

The home page (`/`) is a language gate linking to each version. Text is handled natively through a local dictionary.

Relevant files:

- UI dictionary: [dictionaries.ts](./src/app/[lang]/dictionaries.ts)
- Sample content (books/excerpts/testimonials): [content.ts](./src/app/[lang]/content.ts)
- Language home: [page.tsx](./src/app/[lang]/page.tsx)

To add a new language, the most straightforward approach is:

1. Extend `Lang` and `getDictionary`.
2. Update `generateStaticParams()` in `src/app/[lang]/layout.tsx` to include the new `lang`.
3. Duplicate/adjust content inside `getContent(lang)`.

## Themes (3 modes)

Available themes:

- `dark` — black background with gold/white and light-cyan accents
- `light` — light background with gold accents, deeper blue and darker borders/typography
- `mono` — black background with readable grayscale UI

Theme selector:

- Persists in `localStorage` (key: `theme`)
- Updates `data-theme` on `<html>`

Theme CSS variables: [globals.css](./src/app/globals.css)

## Animations

Soft entrance animations:

- Page-level: keyed wrapper per route
- Section-level: child stagger

Files:

- Global transition: [PageTransition.tsx](./src/components/PageTransition.tsx)
- CSS animations: [globals.css](./src/app/globals.css)

## Routes

- `/` — language gate with animated gold gradient
- `/:lang/` — full portfolio
- `/:lang/press-kit/` — press kit (print / save as PDF via browser)

## Key components

- Header/nav + theme/language: [Header.tsx](./src/components/Header.tsx)
- Theme-aware SVG logo: [Logo.tsx](./src/components/Logo.tsx)
- Footer: [Footer.tsx](./src/components/Footer.tsx)
- Sections: [Section.tsx](./src/components/Section.tsx)

## Quick customization

- Branding: adjust in [Header.tsx](./src/components/Header.tsx) and per-language metadata.
- Books/excerpts/testimonials: edit [content.ts](./src/app/[lang]/content.ts)
- UI copy: edit [dictionaries.ts](./src/app/[lang]/dictionaries.ts)
- Palette: tweak `--accent`, `--accent2`, `--bg`, `--fg`, etc. in [globals.css](./src/app/globals.css)

## Contact (front-end)

The contact form is front-end only: submitting opens a `mailto:` link with a prefilled subject/body.

File: [ContactForm.tsx](./src/components/ContactForm.tsx)

## Accessibility

- Respects `prefers-reduced-motion` for animations.
- Visible focus styles and theme-based contrast through CSS variables.
