import { ThemeProvider } from "@/components/theme/ThemeProvider"
import { SiteHeader } from "@/components/site/SiteHeader"
import { SiteFooter } from "@/components/site/SiteFooter"
import { getMessages } from "@/lib/messages"
import { isLocale, type Locale } from "@/lib/locale"

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }]
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : "es"
  const m = getMessages(locale)

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <SiteHeader locale={locale} m={m} />
        <main>{children}</main>
        <SiteFooter m={m} />
      </div>
    </ThemeProvider>
  )
}
