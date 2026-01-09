import type { Locale } from "@/lib/locale"

export type Messages = {
  brand: string
  nav: {
    home: string
    nfts: string
    hold: string
    transfer: string
  }
  common: {
    theme: string
    language: string
    light: string
    dark: string
    openMenu: string
    closeMenu: string
    ctaPrimary: string
    ctaSecondary: string
  }
  home: {
    title: string
    subtitle: string
    pill: string
    statsTitle: string
    stats: {
      balance: string
      pnl: string
      positions: string
      risk: string
    }
    moversTitle: string
    sectionsTitle: string
    sectionsSubtitle: string
    cards: {
      nftsTitle: string
      nftsDesc: string
      holdTitle: string
      holdDesc: string
      transferTitle: string
      transferDesc: string
    }
  }
  nfts: {
    title: string
    subtitle: string
  }
  hold: {
    title: string
    subtitle: string
  }
  transfer: {
    title: string
    subtitle: string
  }
  footer: {
    disclaimer: string
  }
}

const es: Messages = {
  brand: "Xcrypto",
  nav: {
    home: "Inicio",
    nfts: "NFTs",
    hold: "Compra y Holdeo",
    transfer: "Transferencias"
  },
  common: {
    theme: "Tema",
    language: "Idioma",
    light: "Claro",
    dark: "Oscuro",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    ctaPrimary: "Empezar ahora",
    ctaSecondary: "Ver demo"
  },
  home: {
    title: "Tu panel para cripto: compra, holdea y mueve valor",
    subtitle:
      "Una experiencia moderna para inversores jóvenes: métricas claras, flujos simples y diseño premium para criptoactivos.",
    pill: "Front-end, rápido y responsivo",
    statsTitle: "Resumen rápido",
    stats: {
      balance: "Balance estimado",
      pnl: "P&L 24h",
      positions: "Posiciones",
      risk: "Riesgo"
    },
    moversTitle: "Movimientos del día",
    sectionsTitle: "Qué puedes hacer",
    sectionsSubtitle: "Tres apartados principales para operar con claridad.",
    cards: {
      nftsTitle: "NFTs",
      nftsDesc: "Explora colecciones, tendencias y floor prices (mock).",
      holdTitle: "Compra y Holdeo",
      holdDesc: "Simula compras, DCA y objetivos de hold con métricas.",
      transferTitle: "Transferencias",
      transferDesc: "Flujo moderno para enviar cripto con validación visual."
    }
  },
  nfts: {
    title: "NFTs: colecciones, floor y tendencia",
    subtitle: "Tarjetas visuales, filtros y un feed que se siente premium."
  },
  hold: {
    title: "Compra y Holdeo",
    subtitle: "Estrategias simples: DCA, objetivos y alertas visuales."
  },
  transfer: {
    title: "Transferencias",
    subtitle: "Envía cripto con un flujo claro y confirmaciones amigables."
  },
  footer: {
    disclaimer:
      "Esto es un front-end de demostración. No ejecuta operaciones reales ni conecta con blockchain."
  }
}

const en: Messages = {
  brand: "Xcrypto",
  nav: {
    home: "Home",
    nfts: "NFTs",
    hold: "Buy & Hold",
    transfer: "Transfers"
  },
  common: {
    theme: "Theme",
    language: "Language",
    light: "Light",
    dark: "Dark",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    ctaPrimary: "Get started",
    ctaSecondary: "View demo"
  },
  home: {
    title: "Your crypto hub: buy, hold, and move value",
    subtitle:
      "A modern experience for young investors: clean metrics, simple flows, and premium design for crypto assets.",
    pill: "Front-end, fast and responsive",
    statsTitle: "Quick snapshot",
    stats: {
      balance: "Estimated balance",
      pnl: "24h P&L",
      positions: "Positions",
      risk: "Risk"
    },
    moversTitle: "Today’s movers",
    sectionsTitle: "What you can do",
    sectionsSubtitle: "Three core sections to operate with clarity.",
    cards: {
      nftsTitle: "NFTs",
      nftsDesc: "Explore collections, trends, and floor prices (mock).",
      holdTitle: "Buy & Hold",
      holdDesc: "Simulate buys, DCA, and hold goals with metrics.",
      transferTitle: "Transfers",
      transferDesc: "Modern flow to send crypto with visual validation."
    }
  },
  nfts: {
    title: "NFTs: collections, floor and momentum",
    subtitle: "Visual cards, filters, and a feed that feels premium."
  },
  hold: {
    title: "Buy & Hold",
    subtitle: "Simple strategies: DCA, targets, and visual alerts."
  },
  transfer: {
    title: "Transfers",
    subtitle: "Send crypto with a clear flow and friendly confirmations."
  },
  footer: {
    disclaimer:
      "This is a front-end demo. It does not execute real operations or connect to blockchain."
  }
}

export function getMessages(locale: Locale): Messages {
  return locale === "en" ? en : es
}
