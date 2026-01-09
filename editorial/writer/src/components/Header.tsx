import Link from "next/link";

import type { Dictionary, Lang } from "@/app/[lang]/dictionaries";
import { Container } from "@/components/Container";
import { LangSwitcher } from "@/components/LangSwitcher";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const homeHref = `/${lang}/`;

  const nav = [
    { href: "#about", label: dict.nav.about },
    { href: "#books", label: dict.nav.books },
    { href: "#writings", label: dict.nav.writings },
    { href: "#services", label: dict.nav.services },
    { href: "#press", label: dict.nav.press },
    { href: "#contact", label: dict.nav.contact }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href={homeHref}
              className="rounded-lg px-2 py-1 text-sm font-semibold tracking-tight text-fg hover:text-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Logo className="text-fg" />
            </Link>
            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-lg px-2 py-1 text-xs font-semibold text-muted transition hover:text-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LangSwitcher current={lang} labels={{ language: dict.ui.language }} />
            </div>
            <ThemeToggle
              labels={{
                theme: dict.ui.theme,
                dark: dict.ui.dark,
                light: dict.ui.light,
                mono: dict.ui.mono
              }}
            />

            <details className="relative md:hidden">
              <summary className="list-none rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-fg shadow-soft transition hover:-translate-y-0.5 hover:border-accent2 hover:text-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {lang === "en" ? "Menu" : "Menú"}
              </summary>
              <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <div className="flex flex-col p-2">
                  {nav.map((n) => (
                    <Link
                      key={n.href}
                      href={n.href}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-muted hover:bg-bg hover:text-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {n.label}
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-border pt-2 sm:hidden">
                    <LangSwitcher current={lang} labels={{ language: dict.ui.language }} />
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}
