"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";

type Locale = "es" | "en";
type Theme = "light" | "dark";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem("editorial-theme");
    const fromStorage = stored === "dark" || stored === "light" ? stored : null;
    const inferred: Theme = window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    return fromStorage ?? inferred;
  });

  const locale: Locale = useMemo(() => {
    return pathname?.startsWith("/en") ? "en" : "es";
  }, [pathname]);

  const navItems = useMemo(() => {
    if (locale === "en") {
      return [
        { href: "/en/catalog", label: "Catalog" },
        { href: "/en/authors", label: "Authors" },
        { href: "/en/submissions", label: "Submissions" },
        { href: "/en/about", label: "About" },
      ] as const;
    }
    return [
      { href: "/catalogo", label: "Catálogo" },
      { href: "/autores", label: "Autores" },
      { href: "/convocatorias", label: "Convocatorias" },
      { href: "/about", label: "Editorial" },
    ] as const;
  }, [locale]);

  const activeHref = useMemo(() => {
    if (!pathname) return "";
    const match = navItems.find((i) => pathname === i.href);
    return match?.href ?? "";
  }, [pathname, navItems]);

  const languageToggleHref = useMemo(() => {
    if (!pathname) return "/";
    const routes = [
      { es: "/", en: "/en" },
      { es: "/catalogo", en: "/en/catalog" },
      { es: "/autores", en: "/en/authors" },
      { es: "/convocatorias", en: "/en/submissions" },
      { es: "/about", en: "/en/about" },
      { es: "/contacto", en: "/en/contact" },
      { es: "/legal/terms", en: "/en/legal/terms" },
      { es: "/legal/privacy", en: "/en/legal/privacy" },
    ] as const;

    if (pathname.startsWith("/en")) {
      const match = routes.find((r) => r.en === pathname);
      return match?.es ?? (pathname === "/en" ? "/" : pathname.slice(3) || "/");
    }

    const match = routes.find((r) => r.es === pathname);
    return match?.en ?? `/en${pathname}`;
  }, [pathname]);

  const languageToggleLabel = locale === "en" ? "ESP" : "ENG";

  const themeToggleLabel = useMemo(() => {
    if (locale === "en") return theme === "dark" ? "Light" : "Dark";
    return theme === "dark" ? "Claro" : "Oscuro";
  }, [locale, theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "es";
  }, [locale]);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem("editorial-theme", next);
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-background/75 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={locale === "en" ? "/en" : "/"} className="flex items-center gap-3">
          <span className="inline-flex size-10 items-center justify-center rounded-2xl border bg-surface text-brand">
            <BrandMark className="size-6" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">X Editorial</div>
            <div className="text-xs text-foreground/70">
              {locale === "en" ? "Literary publishing house" : "Editorial literaria"}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = item.href === activeHref;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive ? "bg-muted text-foreground" : "text-foreground/75 hover:bg-muted",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-full border bg-surface px-4 text-sm font-medium text-foreground/80 transition hover:bg-muted"
            onClick={() => router.push(languageToggleHref)}
          >
            {languageToggleLabel}
          </button>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-full border bg-surface px-4 text-sm font-medium text-foreground/80 transition hover:bg-muted"
            onClick={toggleTheme}
          >
            {themeToggleLabel}
          </button>
          <Link
            href={locale === "en" ? "/en/contact" : "/contacto"}
            className="hidden h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-brand-foreground transition hover:opacity-95 sm:inline-flex"
          >
            {locale === "en" ? "Contact" : "Contacto"}
          </Link>
          <button
            type="button"
            aria-label={locale === "en" ? "Open menu" : "Abrir menú"}
            className="inline-flex size-10 items-center justify-center rounded-full border bg-surface text-foreground/80 transition hover:bg-muted md:hidden"
            onClick={() => setOpen(true)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-foreground/20" onClick={() => setOpen(false)} />
          <div className="fixed right-4 top-4 z-50 w-[min(92vw,420px)] rounded-3xl border bg-background p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">{locale === "en" ? "Menu" : "Menú"}</div>
              <button
                type="button"
                aria-label={locale === "en" ? "Close menu" : "Cerrar menú"}
                className="inline-flex size-10 items-center justify-center rounded-full border bg-surface transition hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border bg-surface px-4 py-3 text-sm font-medium text-foreground/80 transition hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-1 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border bg-surface px-4 text-sm font-medium text-foreground/80 transition hover:bg-muted"
                  onClick={() => {
                    setOpen(false);
                    router.push(languageToggleHref);
                  }}
                >
                  {languageToggleLabel}
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border bg-surface px-4 text-sm font-medium text-foreground/80 transition hover:bg-muted"
                  onClick={toggleTheme}
                >
                  {themeToggleLabel}
                </button>
              </div>
              <Link
                href={locale === "en" ? "/en/contact" : "/contacto"}
                className="mt-2 inline-flex h-11 items-center justify-center rounded-2xl bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
                onClick={() => setOpen(false)}
              >
                {locale === "en" ? "Contact" : "Contacto"}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
