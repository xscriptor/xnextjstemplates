import { Hero } from "@/components/site/Hero"
import { SectionCards } from "@/components/site/SectionCards"
import { Container } from "@/components/ui/Container"
import { isLocale, type Locale } from "@/lib/locale"
import { getMessages } from "@/lib/messages"
import { Card } from "@/components/ui/Card"

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : "es"
  const m = getMessages(locale)

  return (
    <div>
      <Hero
        title={m.home.title}
        subtitle={m.home.subtitle}
        pill={m.home.pill}
        primaryHref={`/${locale}/hold`}
        primaryLabel={m.common.ctaPrimary}
        secondaryHref={`/${locale}/nfts`}
        secondaryLabel={m.common.ctaSecondary}
        portfolioLabel={locale === "es" ? "Portafolio" : "Portfolio"}
      />

      <section className="py-10">
        <Container>
          <div className="grid gap-4 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="mb-2 text-sm font-semibold text-muted-foreground">{m.home.sectionsSubtitle}</div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {m.home.sectionsTitle}
              </h2>
              <div className="mt-6">
                <SectionCards
                  items={[
                    {
                      title: m.home.cards.nftsTitle,
                      description: m.home.cards.nftsDesc,
                      href: `/${locale}/nfts`,
                      accent: "fuchsia"
                    },
                    {
                      title: m.home.cards.holdTitle,
                      description: m.home.cards.holdDesc,
                      href: `/${locale}/hold`,
                      accent: "indigo"
                    },
                    {
                      title: m.home.cards.transferTitle,
                      description: m.home.cards.transferDesc,
                      href: `/${locale}/transfer`,
                      accent: "emerald"
                    }
                  ]}
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-4">
                <Card className="glass-card">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-foreground">{m.home.statsTitle}</div>
                    <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {locale === "es" ? "En vivo" : "Live"}
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border bg-muted/40 p-3 backdrop-blur">
                      <div className="text-xs font-semibold text-muted-foreground">{m.home.stats.balance}</div>
                      <div className="mt-2 text-lg font-semibold text-foreground">$24,980</div>
                    </div>
                    <div className="rounded-lg border border-border bg-muted/40 p-3 backdrop-blur">
                      <div className="text-xs font-semibold text-muted-foreground">{m.home.stats.pnl}</div>
                      <div className="mt-2 text-lg font-semibold text-emerald-600 dark:text-emerald-400">+3.2%</div>
                    </div>
                    <div className="rounded-lg border border-border bg-muted/40 p-3 backdrop-blur">
                      <div className="text-xs font-semibold text-muted-foreground">{m.home.stats.positions}</div>
                      <div className="mt-2 text-lg font-semibold text-foreground">8</div>
                    </div>
                    <div className="rounded-lg border border-border bg-muted/40 p-3 backdrop-blur">
                      <div className="text-xs font-semibold text-muted-foreground">{m.home.stats.risk}</div>
                      <div className="mt-2 text-lg font-semibold text-amber-600 dark:text-amber-400">
                        {locale === "es" ? "Medio" : "Medium"}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="glass-card">
                  <div className="text-sm font-semibold text-foreground">{m.home.moversTitle}</div>
                  <div className="mt-4 grid gap-2">
                    {[
                      { symbol: "SOL", price: "$98.12", ch: "+6.4%", up: true },
                      { symbol: "ARB", price: "$1.18", ch: "+3.1%", up: true },
                      { symbol: "AVAX", price: "$35.40", ch: "-1.8%", up: false }
                    ].map((row) => (
                      <div
                        key={row.symbol}
                        className="flex items-center justify-between rounded-lg border border-border bg-muted/40 px-3 py-3 backdrop-blur transition hover:bg-muted/60"
                      >
                        <div className="flex items-center gap-3">
                          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 ring-1 ring-border">
                            <span className="text-xs font-bold text-foreground">{row.symbol}</span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-foreground">{row.symbol}</div>
                            <div className="text-xs text-muted-foreground">{row.price}</div>
                          </div>
                        </div>
                        <div
                          className={`text-sm font-semibold ${
                            row.up ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                          }`}
                        >
                          {row.ch}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
