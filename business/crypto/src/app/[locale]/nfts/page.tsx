import { Container } from "@/components/ui/Container"
import { Card } from "@/components/ui/Card"
import { isLocale, type Locale } from "@/lib/locale"
import { getMessages } from "@/lib/messages"

export default async function NftsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : "es"
  const m = getMessages(locale)

  const collections = [
    { name: "Neon Apes", floor: "0.85 ETH", vol: "+12%" },
    { name: "Pixel Vault", floor: "0.42 ETH", vol: "+5%" },
    { name: "Meta Skulls", floor: "1.20 ETH", vol: "-2%" }
  ]

  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{m.nfts.title}</h1>
          <p className="max-w-2xl text-base text-muted-foreground">{m.nfts.subtitle}</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <Card className="glass-card lg:col-span-4 h-fit">
            <div className="text-sm font-semibold text-foreground">
              {locale === "es" ? "Filtros" : "Filters"}
            </div>
            <div className="mt-4 grid gap-3">
              {(locale === "es"
                ? ["Tendencia", "Nuevos mints", "Mejor floor", "Riesgo bajo"]
                : ["Trending", "New mints", "Top floor", "Low risk"]
              ).map((tag) => (
                <div
                  key={tag}
                  className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm font-medium text-foreground backdrop-blur transition hover:bg-muted/60"
                >
                  {tag}
                </div>
              ))}
            </div>
          </Card>

          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {collections.map((c) => (
                <Card key={c.name} className="glass-card">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold text-foreground">{c.name}</div>
                      <div className="mt-2 text-sm text-muted-foreground">Floor: {c.floor}</div>
                      <div className="mt-1 text-sm text-muted-foreground">Volume: {c.vol}</div>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 ring-1 ring-border flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-50" />
                    </div>
                  </div>
                  <div className="mt-5 rounded-lg border border-border bg-muted/30 p-3 text-xs text-muted-foreground backdrop-blur">
                    {locale === "es" ? "Vista previa del feed (mock) con enfoque visual." : "Preview feed (mock) with a visual-first layout."}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
