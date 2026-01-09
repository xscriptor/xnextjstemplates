export type Lang = "es" | "en";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    books: string;
    writings: string;
    services: string;
    press: string;
    contact: string;
  };
  ui: {
    theme: string;
    language: string;
    dark: string;
    light: string;
    mono: string;
    downloadPressKit: string;
    email: string;
    location: string;
    newsletter: string;
    subscribe: string;
    name: string;
    message: string;
    send: string;
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  sections: {
    aboutTitle: string;
    aboutLead: string;
    aboutBody: string;
    booksTitle: string;
    writingsTitle: string;
    servicesTitle: string;
    pressTitle: string;
    contactTitle: string;
  };
  cards: {
    awards: string;
    focus: string;
    availability: string;
  };
  services: {
    speaking: string;
    workshops: string;
    editing: string;
    ghostwriting: string;
  };
  contact: {
    lead: string;
    note: string;
  };
};

const es: Dictionary = {
  meta: {
    title: "Portafolio de Escritora / Escritor",
    description: "Plantilla moderna y estática para presentar un autor."
  },
  nav: {
    about: "Sobre mí",
    books: "Libros",
    writings: "Extractos",
    services: "Servicios",
    press: "Prensa",
    contact: "Contacto"
  },
  ui: {
    theme: "Tema",
    language: "Idioma",
    dark: "Oscuro",
    light: "Claro",
    mono: "Grises",
    downloadPressKit: "Descargar press kit",
    email: "Email",
    location: "Ubicación",
    newsletter: "Boletín",
    subscribe: "Suscribirme",
    name: "Nombre",
    message: "Mensaje",
    send: "Enviar"
  },
  hero: {
    label: "Escritura contemporánea · narrativa · ensayo",
    title: "Una voz clara, un ritmo propio.",
    subtitle:
      "Portafolio editorial para presentar tu obra: libros, extractos, prensa y contacto, con tres modos de visualización.",
    ctaPrimary: "Ver libros",
    ctaSecondary: "Leer extracto"
  },
  sections: {
    aboutTitle: "Una biografía breve, con intención",
    aboutLead:
      "Un escritor no solo publica: deja huellas, obsesiones y una forma de mirar.",
    aboutBody:
      "Este espacio está pensado para mostrar tu perfil con elegancia y orden. Incluye una presentación con tono literario, una selección de libros y textos, servicios profesionales y un bloque para prensa o testimonios. Todo es editable y funciona en hosting estático.",
    booksTitle: "Libros y ediciones",
    writingsTitle: "Extractos seleccionados",
    servicesTitle: "Servicios",
    pressTitle: "Prensa y testimonios",
    contactTitle: "Escribamos"
  },
  cards: {
    awards: "Premios y becas",
    focus: "Temas",
    availability: "Disponibilidad"
  },
  services: {
    speaking: "Charlas y lecturas",
    workshops: "Talleres",
    editing: "Edición y corrección",
    ghostwriting: "Escritura por encargo"
  },
  contact: {
    lead:
      "Para propuestas editoriales, eventos, talleres o colaboraciones, envía un mensaje.",
    note:
      "Este formulario es front-end. Puedes conectar tu backend o usar un servicio de formularios estáticos."
  }
};

const en: Dictionary = {
  meta: {
    title: "Writer Portfolio",
    description: "A modern static template to present an author."
  },
  nav: {
    about: "About",
    books: "Books",
    writings: "Excerpts",
    services: "Services",
    press: "Press",
    contact: "Contact"
  },
  ui: {
    theme: "Theme",
    language: "Language",
    dark: "Dark",
    light: "Light",
    mono: "Grayscale",
    downloadPressKit: "Download press kit",
    email: "Email",
    location: "Location",
    newsletter: "Newsletter",
    subscribe: "Subscribe",
    name: "Name",
    message: "Message",
    send: "Send"
  },
  hero: {
    label: "Contemporary writing · fiction · essay",
    title: "A clear voice, an unmistakable rhythm.",
    subtitle:
      "A writer portfolio to present your work: books, excerpts, press and contact — with three viewing modes.",
    ctaPrimary: "View books",
    ctaSecondary: "Read excerpt"
  },
  sections: {
    aboutTitle: "A short biography, with intention",
    aboutLead:
      "A writer doesn’t only publish: they leave traces, obsessions, and a way of seeing.",
    aboutBody:
      "This template showcases your profile with clarity and restraint. It includes an editorial hero, a curated selection of books and texts, professional services, plus a press/testimonials block. Everything is editable and built for static hosting.",
    booksTitle: "Books and editions",
    writingsTitle: "Selected excerpts",
    servicesTitle: "Services",
    pressTitle: "Press and testimonials",
    contactTitle: "Let’s connect"
  },
  cards: {
    awards: "Awards & grants",
    focus: "Topics",
    availability: "Availability"
  },
  services: {
    speaking: "Talks & readings",
    workshops: "Workshops",
    editing: "Editing & proofreading",
    ghostwriting: "Ghostwriting"
  },
  contact: {
    lead:
      "For publishing proposals, events, workshops or collaborations, send a message.",
    note:
      "This form is frontend-only. Plug in a backend or use a static form provider."
  }
};

export function getDictionary(lang: string): Dictionary {
  if (lang === "en") return en;
  return es;
}

export function normalizeLang(lang: string): Lang {
  if (lang === "en") return "en";
  return "es";
}

