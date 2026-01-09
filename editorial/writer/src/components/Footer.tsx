import Link from "next/link";

import type { Dictionary, Lang } from "@/app/[lang]/dictionaries";
import { Container } from "@/components/Container";

export function Footer({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <footer className="border-t border-border bg-bg py-10">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold tracking-tight">
              {lang === "en" ? "Writer Portfolio" : "Portafolio de escritor/a"}
            </p>
            <p className="mt-3 max-w-md text-sm text-muted">
              {lang === "en"
                ? "Static-ready template with three themes and native translations."
                : "Plantilla lista para estático, con tres temas y traducciones nativas."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:col-span-7 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
                {lang === "en" ? "Sections" : "Secciones"}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="text-muted hover:text-accent2" href="#about">
                    {dict.nav.about}
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-accent2" href="#books">
                    {dict.nav.books}
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-accent2" href="#writings">
                    {dict.nav.writings}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
                {lang === "en" ? "Work" : "Trabajo"}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="text-muted hover:text-accent2" href="#services">
                    {dict.nav.services}
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-accent2" href="#press">
                    {dict.nav.press}
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-accent2" href={`/${lang}/press-kit/`}>
                    Press kit
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
                {lang === "en" ? "Contact" : "Contacto"}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a className="text-muted hover:text-accent2" href="mailto:hello@writer.com">
                    hello@writer.com
                  </a>
                </li>
                <li>
                  <Link className="text-muted hover:text-accent2" href="#contact">
                    {dict.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {lang === "en" ? "Author Name" : "Nombre de Autor/a"}
          </p>
          <p>{lang === "en" ? "Built with Next.js + Tailwind." : "Hecho con Next.js + Tailwind."}</p>
        </div>
      </Container>
    </footer>
  );
}

