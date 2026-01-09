"use client"

import type { Locale } from "@/lib/locale"
import type { Messages } from "@/lib/messages"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import { LanguageToggle } from "@/components/i18n/LanguageToggle"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { Container } from "@/components/ui/Container"

type NavItem = { href: string; label: string; icon: React.ReactNode }

export function SiteHeader({ locale, m }: { locale: Locale; m: Messages }) {
  const pathname = usePathname() ?? `/${locale}`
  const [open, setOpen] = useState(false)

  const items: NavItem[] = useMemo(() => {
    return [
      { href: `/${locale}`, label: m.nav.home, icon: null },
      { href: `/${locale}/nfts`, label: m.nav.nfts, icon: null },
      { href: `/${locale}/hold`, label: m.nav.hold, icon: null },
      { href: `/${locale}/transfer`, label: m.nav.transfer, icon: null }
    ]
  }, [locale, m])

  const activeHref = useMemo(() => {
    const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`
    const parts = normalized.split("/").filter(Boolean)
    const rest = parts.length > 0 && (parts[0] === "es" || parts[0] === "en") ? `/${parts.slice(1).join("/")}` : "/"
    return rest === "/" ? `/${locale}` : `/${locale}${rest}`
  }, [pathname, locale])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">X</div>
            <div className="hidden font-bold md:block text-xl tracking-tight">{m.brand}</div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeHref === it.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {it.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle locale={locale} label={m.common.language} />
            <ThemeToggle labelLight={m.common.light} labelDark={m.common.dark} />
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(!open)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </Container>
      
      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <Container>
            <div className="grid gap-1 py-4">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                    activeHref === it.href ? "bg-muted text-primary" : "text-muted-foreground"
                  }`}
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
