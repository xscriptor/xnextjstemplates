# Music Website Template

A modern, animated, and themeable music website template built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **12+ Color Themes**: Switch between multiple themes including Madrid, Miami, Tokio, and more.
- **Bilingual Support**: Toggle between English (ENG) and Spanish (ESP).
- **Animated UI**: Smooth transitions, music visualizers, and scroll animations using Framer Motion.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Music Player Interface**: A beautiful mock player with equalizer and playlist management.
- **Playlist Grid**: Filterable and searchable playlist library.
- **Artist Timeline**: Interactive history timeline on the About page.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
src/
├── app/              # App Router pages and layout
├── components/       # Reusable components
│   ├── ui/           # Basic UI elements (Button, Card, Navigation)
│   ├── sections/     # Page sections (Hero, FeaturedPlaylists)
│   └── effects/      # Visual effects (Equalizer)
├── hooks/            # Custom hooks (useTheme, useLanguage)
├── utils/            # Utilities and configurations (themes, translations)
└── lib/              # Helper functions
```

## Customization

- **Themes**: Edit `src/app/globals.css` and `src/utils/themes.ts` to add or modify themes.
- **Translations**: Edit `src/utils/translations.ts` to update text content.
- **Content**: Update component files in `src/components/sections` to change displayed data.
