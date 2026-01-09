# Xcrypto - Plantilla para criptomonedas, NFT DeFi y fintech

Una plantilla front-end moderna, estática y responsiva construida con Next.js 16, Tailwind CSS v4 y TypeScript. Diseñada para proyectos de criptomonedas, DeFi y fintech que buscan una estética premium "Glassmorphism".

## Características

- **Next.js 16 (App Router)**: Configurado para exportación estática (`output: 'export'`).
- **Tailwind CSS v4**: Sistema de diseño basado en variables CSS nativas y utilidades modernas.
- **Modo Oscuro/Claro**: Cambio de tema fluido con persistencia y detección de sistema.
- **Internacionalización (i18n)**: Rutas estáticas `/es` y `/en` sin dependencias de servidor.
- **UI Premium**: Componentes con efecto cristal (glassmorphism), gradientes y animaciones sutiles.
- **100% Responsivo**: Adaptado para móvil, tablet y escritorio.

## Estructura del Proyecto

```bash
src/
├── app/
│   ├── [locale]/    # Rutas localizadas (Home, NFTs, Hold, Transfer)
│   ├── globals.css  # Variables CSS y configuración de tema
│   └── layout.tsx   # Layout raíz
├── components/
│   ├── site/        # Componentes de página (Hero, Header, Footer)
│   ├── ui/          # Componentes base (Button, Card, Container)
│   ├── theme/       # Lógica de temas
│   └── i18n/        # Lógica de idiomas
└── lib/
    ├── messages.ts  # Traducciones (ES/EN)
    └── locale.ts    # Configuración de locales
```

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Construir para producción (genera carpeta 'out')
npm run build

# Linting y Typecheck
npm run lint
npm run typecheck
```

## Despliegue

Este proyecto genera una exportación estática en la carpeta `out`. Puedes desplegarla en cualquier hosting estático:

- **GitHub Pages**: Sube el contenido de `out`.
- **Vercel**: Detectará Next.js automáticamente (o configura Output Directory: `out`).
- **Netlify/S3**: Sube la carpeta `out`.

## Personalización

- **Colores**: Edita las variables CSS en `src/app/globals.css`.
- **Textos**: Modifica `src/lib/messages.ts`.
- **Logo**: Cambia el componente en `src/components/site/SiteHeader.tsx`.

---
Creado por Xscriptor
