"use client"

import { withLocalePath } from "@/lib/paths"
import type { Locale } from "@/lib/locale"
import { usePathname, useRouter } from "next/navigation"
import { useMemo } from "react"

export function LanguageToggle({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname()
  const router = useRouter()

  const nextLocale = locale === "es" ? "en" : "es"
  const href = useMemo(() => withLocalePath(pathname ?? "/", nextLocale), [pathname, nextLocale])

  return (
    <button
      type="button"
      onClick={() => {
        document.cookie = `x-locale=${nextLocale}; path=/; max-age=31536000`
        router.push(href)
      }}
      className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background/50 px-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      aria-label={label}
    >
      <span className="mr-1">{locale.toUpperCase()}</span>
      <span className="text-muted-foreground">/</span>
      <span className="ml-1 text-muted-foreground">{nextLocale.toUpperCase()}</span>
    </button>
  )
}
