# Xcrypto - NFT Crypto & Fintech Template

A modern, static, and responsive front-end template built with Next.js 16, Tailwind CSS v4, and TypeScript. Designed for crypto, DeFi, and fintech projects aiming for a premium "Glassmorphism" aesthetic.

## Features

- **Next.js 16 (App Router)**: Configured for static export (`output: 'export'`).
- **Tailwind CSS v4**: Design system based on native CSS variables and modern utilities.
- **Dark/Light Mode**: Smooth theme switching with persistence and system detection.
- **Internationalization (i18n)**: Static routes `/es` and `/en` without server dependencies.
- **Premium UI**: Components with glassmorphism effects, gradients, and subtle animations.
- **100% Responsive**: Optimized for mobile, tablet, and desktop.

## Project Structure

```bash
src/
├── app/
│   ├── [locale]/    # Localized routes (Home, NFTs, Hold, Transfer)
│   ├── globals.css  # CSS variables and theme config
│   └── layout.tsx   # Root layout
├── components/
│   ├── site/        # Page components (Hero, Header, Footer)
│   ├── ui/          # Base components (Button, Card, Container)
│   ├── theme/       # Theme logic
│   └── i18n/        # Language logic
└── lib/
    ├── messages.ts  # Translations (ES/EN)
    └── locale.ts    # Locale configuration
```

## Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production (generates 'out' folder)
npm run build

# Linting and Typecheck
npm run lint
npm run typecheck
```

## Deployment

This project generates a static export in the `out` folder. You can deploy it to any static hosting service:

- **GitHub Pages**: Upload the content of `out`.
- **Vercel**: Automatically detects Next.js (or set Output Directory: `out`).
- **Netlify/S3**: Upload the `out` folder.

## Customization

- **Colors**: Edit CSS variables in `src/app/globals.css`.
- **Texts**: Modify `src/lib/messages.ts`.
- **Logo**: Change the component in `src/components/site/SiteHeader.tsx`.

---
Created by Xscriptor
