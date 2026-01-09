import type { Locale } from "@/lib/locale"

export function withLocalePath(pathname: string, locale: Locale) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`
  const parts = normalized.split("/").filter(Boolean)
  const rest = parts.length > 0 && (parts[0] === "es" || parts[0] === "en") ? parts.slice(1) : parts
  return `/${locale}${rest.length ? `/${rest.join("/")}` : ""}`
}

