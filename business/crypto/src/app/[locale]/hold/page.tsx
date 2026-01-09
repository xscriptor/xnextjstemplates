import { Container } from "@/components/ui/Container"
import { Card } from "@/components/ui/Card"
import { isLocale, type Locale } from "@/lib/locale"
import { getMessages } from "@/lib/messages"

export default async function HoldPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : "es"
  const m = getMessages(locale)

  const plans =
    locale === "es"
      ? [
          { name: "DCA Semanal", asset: "BTC", amount: "$50", cadence: "7d" },
          { name: "Objetivo 90 días", asset: "ETH", amount: "$25", cadence: "3d" },
          { name: "Hold Conservador", asset: "USDC", amount: "$200", cadence: "30d" }
        ]
      : [
          { name: "Weekly DCA", asset: "BTC", amount: "$50", cadence: "7d" },
          { name: "90-day target", asset: "ETH", amount: "$25", cadence: "3d" },
          { name: "Conservative hold", asset: "USDC", amount: "$200", cadence: "30d" }
        ]

  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{m.hold.title}</h1>
          <p className="max-w-2xl text-base text-muted-foreground">{m.hold.subtitle}</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <Card className="glass-card lg:col-span-7">
            <div className="text-sm font-semibold text-foreground">
              {locale === "es" ? "Simulador de compras" : "Buy simulator"}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { label: "BTC", price: "$43,210", ch: "+1.1%", up: true },
                { label: "ETH", price: "$2,340", ch: "-0.6%", up: false },
                { label: "SOL", price: "$98.12", ch: "+6.4%", up: true }
              ].map((a) => (
                <div
                  key={a.label}
                  className="rounded-lg border border-border bg-muted/40 p-3 backdrop-blur"
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {a.label}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-foreground">{a.price}</div>
                  <div
                    className={`mt-2 text-sm font-semibold ${
                      a.up ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                    }`}
                  >
                    {a.ch}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground backdrop-blur">
              {locale === "es"
                ? "Define un monto, frecuencia y objetivo. Esta UI es solo demostración."
                : "Set amount, frequency and target. This UI is demo-only."}
            </div>
          </Card>

          <Card className="glass-card lg:col-span-5">
            <div className="text-sm font-semibold text-foreground">
              {locale === "es" ? "Planes de holdeo" : "Hold plans"}
            </div>
            <div className="mt-4 grid gap-3">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between gap-4 rounded-lg border border-border bg-muted/40 px-3 py-3 backdrop-blur"
                >
                  <div>
                    <div className="text-sm font-semibold text-foreground">{p.name}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {p.asset} · {p.amount} · {p.cadence}
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 ring-1 ring-border" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
