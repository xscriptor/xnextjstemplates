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
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem("gamming-theme");
    const fromStorage = stored === "dark" || stored === "light" ? stored : null;
    const inferred: Theme = window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    return fromStorage ?? inferred;
  });

  const locale: Locale = useMemo(() => {
    return pathname?.startsWith("/en") ? "en" : "es";
  }, [pathname]);

  const routes = useMemo(() => {
    return [
      { es: "/", en: "/en" },
      { es: "/games", en: "/en/games" },
      { es: "/news", en: "/en/news" },
      { es: "/studio", en: "/en/studio" },
      { es: "/support", en: "/en/support" },
    ] as const;
  }, []);

  const nav = useMemo(() => {
    if (locale === "en") {
      return [
        { href: "/en/games", label: "Games" },
        { href: "/en/news", label: "Newswire" },
        { href: "/en/studio", label: "Studio" },
        { href: "/en/support", label: "Support" },
      ] as const;
    }
    return [
      { href: "/games", label: "Juegos" },
      { href: "/news", label: "Newswire" },
      { href: "/studio", label: "Estudio" },
      { href: "/support", label: "Soporte" },
    ] as const;
  }, [locale]);

  const languageToggleHref = useMemo(() => {
    if (!pathname) return "/";
    if (pathname.startsWith("/en")) {
      const match = routes.find((r) => r.en === pathname);
      return match?.es ?? (pathname === "/en" ? "/" : pathname.slice(3) || "/");
    }
    const match = routes.find((r) => r.es === pathname);
    return match?.en ?? `/en${pathname}`;
  }, [pathname, routes]);

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
    window.localStorage.setItem("gamming-theme", next);
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-background/55 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={locale === "en" ? "/en" : "/"} className="group flex items-center gap-3">
          <span className="inline-flex size-10 items-center justify-center rounded-2xl border bg-surface text-foreground shadow-[0_0_0_0_color-mix(in_oklab,var(--color-neon-2)_40%,transparent)] transition group-hover:shadow-[0_0_0_6px_color-mix(in_oklab,var(--color-neon-2)_22%,transparent)]">
            <BrandMark className="size-6" />
          </span>
          <div className="leading-tight">
            <div className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.12em]">
              XGame
            </div>
            <div className="text-xs text-foreground/70">
              {locale === "en" ? "Gaming site template" : "Plantilla web gaming"}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative rounded-full px-4 py-2 text-sm font-semibold text-foreground/75 transition hover:bg-muted hover:text-foreground",
                  isActive ? "bg-muted text-foreground" : "",
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
            className="inline-flex h-10 items-center justify-center rounded-full border bg-surface px-4 text-sm font-semibold text-foreground/80 transition hover:bg-muted"
            onClick={() => router.push(languageToggleHref)}
          >
            {languageToggleLabel}
          </button>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-full border bg-surface px-4 text-sm font-semibold text-foreground/80 transition hover:bg-muted"
            onClick={toggleTheme}
          >
            {themeToggleLabel}
          </button>
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
          <div className="fixed right-4 top-4 z-50 w-[min(92vw,420px)] overflow-hidden rounded-3xl border bg-background shadow-xl">
            <div className="ndg-bg p-5">
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
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border bg-surface px-4 py-3 text-sm font-semibold text-foreground/80 transition hover:bg-muted"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="inline-flex h-11 items-center justify-center rounded-2xl border bg-surface px-4 text-sm font-semibold text-foreground/80 transition hover:bg-muted"
                    onClick={() => {
                      setOpen(false);
                      router.push(languageToggleHref);
                    }}
                  >
                    {languageToggleLabel}
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-11 items-center justify-center rounded-2xl border bg-surface px-4 text-sm font-semibold text-foreground/80 transition hover:bg-muted"
                    onClick={toggleTheme}
                  >
                    {themeToggleLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

