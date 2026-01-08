## Xtrust · Template de negocio (banca / cripto)

English version: [README.en.md](./README.en.md)

Template frontend completo en Next.js (App Router) pensado para una empresa bancaria o de criptoactivos, con diseño sobrio, responsive y una paleta de colores orientada a confianza.

### Stack

- Next.js + TypeScript
- Tailwind CSS (v4 vía `@import "tailwindcss";`)
- CSS variables para tokens de marca y modo oscuro (toggle manual)

### Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### Cómo ejecutar

```bash
cd business
npm run dev
```

Abre `http://localhost:3000`.

### Páginas incluidas

- `/` landing completa (home)
- `/products` productos
- `/security` seguridad
- `/pricing` precios
- `/about` empresa
- `/contact` contacto (formulario demo, sin backend)
- `/legal/privacy` y `/legal/terms` legales (demo)
- `/en/*` variante completa en inglés (mismas rutas bajo `/en`)

### Componentes

- `src/components/SiteHeader.tsx` navegación responsive (incluye menú móvil)
- `src/components/SiteFooter.tsx` footer con enlaces y disclaimer
- `src/components/BrandMark.tsx` marca (SVG) reutilizable
- `src/components/Container.tsx` contenedor de layout

### Paleta (tokens de marca)

La paleta está centralizada en [src/app/globals.css](./src/app/globals.css) mediante variables CSS:

- `--background`, `--foreground`, `--surface`, `--muted`, `--border`
- `--brand`, `--brand-foreground`
- `--accent`, `--accent-foreground`

Si cambias `--brand` y `--accent` tendrás un “re-skin” consistente en toda la UI.

### Personalización rápida

- Nombre y meta: [src/app/layout.tsx](./src/app/layout.tsx)
- Logo/ícono: [src/components/BrandMark.tsx](./src/components/BrandMark.tsx)
- Navegación + toggles: [src/components/SiteHeader.tsx](./src/components/SiteHeader.tsx)
- Footer: [src/components/SiteFooter.tsx](./src/components/SiteFooter.tsx)
- Contenido de landing (ES): [src/app/page.tsx](./src/app/page.tsx)
- Contenido de landing (EN): [src/app/en/page.tsx](./src/app/en/page.tsx)

### Notas

- El contenido es demostrativo (copy, métricas, testimonios).
- No se incluye backend ni integraciones reales.
