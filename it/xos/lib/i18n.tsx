'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  home: {
    title: string;
    subtitle: string;
    cta: string;
  };
  nav: {
    home: string;
    download: string;
    developers: string;
    contact: string;
  };
  download: {
    title: string;
    message: string;
    manual: string;
    button: string;
  };
  developers: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      skills: string;
      github: string;
      submit: string;
    };
  };
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
}

const translations: Record<Language, Translations> = {
  en: {
    home: {
      title: "Xos,\nminimal,\npowerful,\nyours...",
      subtitle: "Minimal. Powerful. Yours.",
      cta: "Get Started",
    },
    nav: {
      home: "Home",
      download: "Download",
      developers: "Developers",
      contact: "Contact",
    },
    download: {
      title: "Downloading Xos",
      message: "Your download will start in a few seconds...",
      manual: "If it doesn't start automatically after 5 seconds,",
      button: "click here",
    },
    developers: {
      title: "Join the Revolution",
      description: "We are building the future of open source. Connect with us to contribute to the core kernel, UI shell, or package manager.",
      form: {
        name: "Full Name",
        email: "Email Address",
        skills: "Primary Skills (e.g., Rust, C, React)",
        github: "GitHub Profile",
        submit: "Apply to Join",
      },
    },
    contact: {
      title: "Get in Touch",
      description: "Have questions or enterprise inquiries? Reach out to the Xos team.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message",
      },
    },
  },
  es: {
    home: {
      title: "Xos,\nminimalista,\npotente,\npara ti...",
      subtitle: "Minimalista. Potente. Tuyo.",
      cta: "Comenzar",
    },
    nav: {
      home: "Inicio",
      download: "Descargar",
      developers: "Desarrolladores",
      contact: "Contacto",
    },
    download: {
      title: "Descargando Xos",
      message: "Su descarga empezará en algunos segundos...",
      manual: "Si pasados cinco segundos no empieza,",
      button: "de click aquí",
    },
    developers: {
      title: "Únete a la Revolución",
      description: "Estamos construyendo el futuro del código abierto. Conecta con nosotros para contribuir al kernel, shell UI o gestor de paquetes.",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        skills: "Habilidades Principales (ej. Rust, C, React)",
        github: "Perfil de GitHub",
        submit: "Solicitar Unirse",
      },
    },
    contact: {
      title: "Contáctanos",
      description: "¿Tienes preguntas o consultas empresariales? Escribe al equipo de Xos.",
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        submit: "Enviar Mensaje",
      },
    },
  },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <I18nContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
