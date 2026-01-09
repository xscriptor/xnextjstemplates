## Xtrust · Business template (banking / crypto)

Versión en español: [README.md](./README.md)

Complete frontend template in Next.js (App Router) for a banking or crypto company, with a sober, trust-oriented palette and fully responsive layout.

### Stack

- Next.js + TypeScript
- Tailwind CSS (v4 via `@import "tailwindcss";`)
- CSS variables for brand tokens + manual dark mode toggle

### Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### Run locally

```bash
cd business
npm run dev
```

Open `http://localhost:3000`.

### Included pages

- `/` home (Spanish)
- `/products`
- `/security`
- `/pricing`
- `/about`
- `/contact` (demo form, no backend)
- `/legal/privacy` and `/legal/terms` (demo)
- `/en/*` full English variant (same routes under `/en`)

### Components

- `src/components/SiteHeader.tsx` responsive navbar (includes mobile menu)
- `src/components/SiteFooter.tsx` footer with links + disclaimers
- `src/components/BrandMark.tsx` brand mark (SVG)
- `src/components/Container.tsx` layout container

### Palette (brand tokens)

Brand tokens are centralized in [src/app/globals.css](./src/app/globals.css):

- `--background`, `--foreground`, `--surface`, `--muted`, `--border`
- `--brand`, `--brand-foreground`
- `--accent`, `--accent-foreground`

Changing `--brand` and `--accent` re-skins the whole UI consistently.

### Quick customization

- App metadata: [src/app/layout.tsx](./src/app/layout.tsx)
- Logo/mark: [src/components/BrandMark.tsx](./src/components/BrandMark.tsx)
- Navbar + toggles: [src/components/SiteHeader.tsx](./src/components/SiteHeader.tsx)
- Footer: [src/components/SiteFooter.tsx](./src/components/SiteFooter.tsx)
- Landing content (ES): [src/app/page.tsx](./src/app/page.tsx)
- Landing content (EN): [src/app/en/page.tsx](./src/app/en/page.tsx)

### Navbar toggles

- Language: `ENG`/`ESP` switches between `/` and `/en` preserving the current path.
- Theme: `Light`/`Dark` sets `data-theme` and persists in `localStorage`.

### Notes

- All content is demo (copy, metrics, testimonials).
- Backend and real integrations are not included.

