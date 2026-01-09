# Portafolio de Escritora/Escritor (Next.js + Tailwind)

Plantilla completa de front-end para presentar a un escritor/a: biografía, libros, extractos, servicios, prensa y contacto. Incluye 3 temas (oscuro, claro y escala de grises) y traducciones sin librerías, pensada para ser servida como sitio estático.

English docs: ver [README.en.md](./README.en.md)

## Requisitos

- Node.js (recomendado: LTS)
- npm

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run lint` — lint (Next/ESLint)
- `npm run typecheck` — TypeScript (sin emitir archivos)
- `npm run build` — build + export estático

## Desarrollo

```bash
npm install
npm run dev
```

Abrir en el navegador la URL que muestre la terminal (por ejemplo `http://localhost:3000`).

## Export estático (para hosting)

Este proyecto está configurado para exportar HTML estático.

```bash
npm run build
```

El resultado se genera en `out/` (hosting típico: subir el contenido de esa carpeta).

## Idiomas (sin librerías)

Se implementan rutas estáticas por idioma:

- `/es/` — Español
- `/en/` — English

El selector de idioma en la home (`/`) redirige a cada versión. Las traducciones se manejan de forma nativa con un diccionario local.

Archivos relevantes:

- Diccionario de textos: [dictionaries.ts](./src/app/[lang]/dictionaries.ts)
- Contenido de ejemplo (libros/extractos/testimonios): [content.ts](./src/app/[lang]/content.ts)
- Home por idioma: [page.tsx](./src/app/[lang]/page.tsx)

Para agregar un nuevo idioma, el enfoque más directo es:

1. Extender el tipo `Lang` y el `getDictionary`.
2. Actualizar `generateStaticParams()` en `src/app/[lang]/layout.tsx` con el nuevo `lang`.
3. Duplicar/ajustar contenido en `getContent(lang)`.

## Temas (3 modos)

Temas disponibles:

- `dark` — fondo negro con acentos dorados, blancos y azul celeste
- `light` — fondo claro con acentos dorados, azul más oscuro y bordes/typography con negro
- `mono` — fondo negro y escala de grises legible

El selector de tema:

- Persiste en `localStorage` (clave: `theme`)
- Ajusta `data-theme` en `<html>`

Variables CSS del tema: [globals.css](./src/app/globals.css)

## Animaciones

Incluye transiciones suaves de entrada:

- A nivel de página: wrapper con key por ruta
- A nivel de secciones: “stagger” por hijos

Archivos:

- Transición global: [PageTransition.tsx](./src/components/PageTransition.tsx)
- Animaciones CSS: [globals.css](./src/app/globals.css)

## Estructura de rutas

- `/` — selector de idioma con gradiente dorado animado
- `/:lang/` — portafolio completo
- `/:lang/press-kit/` — press kit (imprimible / guardar como PDF desde el navegador)

## Componentes clave

- Header/nav + tema/idioma: [Header.tsx](./src/components/Header.tsx)
- Logo SVG (sensitivo a tema): [Logo.tsx](./src/components/Logo.tsx)
- Footer: [Footer.tsx](./src/components/Footer.tsx)
- Secciones: [Section.tsx](./src/components/Section.tsx)

## Personalización rápida

- Nombre/branding: ajustar en [Header.tsx](./src/components/Header.tsx) y en las metas por idioma.
- Libros/extractos/testimonios: editar [content.ts](./src/app/[lang]/content.ts)
- Textos UI: editar [dictionaries.ts](./src/app/[lang]/dictionaries.ts)
- Paleta: ajustar variables `--accent`, `--accent2`, `--bg`, `--fg`, etc. en [globals.css](./src/app/globals.css)

## Contacto (front-end)

El formulario de contacto es front-end: al enviar abre un `mailto:` con asunto/cuerpo prearmado.

Archivo: [ContactForm.tsx](./src/components/ContactForm.tsx)

## Accesibilidad

- Respeta `prefers-reduced-motion` para animaciones.
- Foco visible y contrastes razonables por tema (vía variables).
