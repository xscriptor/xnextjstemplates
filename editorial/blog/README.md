# Plantilla de Blog Literario & Científico "Xblog"

Una plantilla minimalista y elegante construida con Next.js, Tailwind CSS y TypeScript, diseñada para escritores y divulgadores que buscan fusionar la belleza estética con el contenido profundo.

## Características Principales

- **Diseño Asimétrico**: Grid estilo "masonry" que rompe la monotonía visual con tarjetas de diferentes tamaños.
- **Modo Oscuro/Claro**: Paleta de colores cuidadosamente seleccionada con gradientes dorado y púrpura que se adaptan a ambos temas.
- **Efectos Literarios**: Transiciones suaves, tipografía serif (Merriweather) para lectura inmersiva y efectos hover elegantes.
- **Contenido en Markdown**: Escribe tus artículos en archivos `.md` sencillos sin necesidad de base de datos.
- **SEO Optimizado**: Generación estática de páginas para máxima velocidad e indexación.

## Estructura del Proyecto

```
/editorial/blog
├── app/                 # Páginas y layouts de Next.js (App Router)
├── components/          # Componentes React reutilizables (ArticleCard, Navbar, etc.)
├── content/             # Archivos Markdown con tus artículos
│   ├── articulos/
│   │   ├── ciencia/     # Artículos de categoría científica
│   │   └── literatura/  # Artículos de categoría literaria
├── lib/                 # Utilidades para procesar Markdown
└── public/              # Imágenes y activos estáticos
```

## Cómo Agregar Nuevo Contenido

1.  Crea un archivo `.md` en `content/articulos/ciencia` o `content/articulos/literatura`.
2.  Añade el "frontmatter" al inicio del archivo:

```yaml
---
title: "Título de tu Artículo"
date: "2024-03-20"
category: "ciencia" # o "literatura"
tags: ["tag1", "tag2"]
excerpt: "Un breve resumen que aparecerá en la tarjeta..."
size: "medium" # Opciones: "small" (1x1), "medium" (2x1), "large" (1x2)
image: "/images/tu-imagen.jpg"
---
```

3.  Escribe tu contenido debajo usando formato Markdown estándar.

## Personalización

- **Colores**: Edita `tailwind.config.js` para modificar las paletas `gold` y `purple`.
- **Tipografía**: Modifica `app/layout.tsx` para cambiar las fuentes (actualmente Inter y Merriweather).
- **Configuración General**: Edita `app/globals.css` para variables CSS globales.

## Comandos

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm start`: Inicia el servidor de producción.
