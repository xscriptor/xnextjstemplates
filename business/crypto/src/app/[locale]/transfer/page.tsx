import { Container } from "@/components/ui/Container"
import { Card } from "@/components/ui/Card"
import { isLocale, type Locale } from "@/lib/locale"
import { getMessages } from "@/lib/messages"

export default async function TransferPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : "es"
  const m = getMessages(locale)

  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{m.transfer.title}</h1>
          <p className="max-w-2xl text-base text-muted-foreground">{m.transfer.subtitle}</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <Card className="glass-card lg:col-span-7">
            <div className="text-sm font-semibold text-foreground">
              {locale === "es" ? "Enviar cripto (mock)" : "Send crypto (mock)"}
            </div>
            <div className="mt-4 grid gap-3">
              {[
                { label: locale === "es" ? "Activo" : "Asset", value: "USDC" },
                { label: locale === "es" ? "Monto" : "Amount", value: "250.00" },
                { label: locale === "es" ? "Destino" : "Recipient", value: "0x9A3f…21C0" }
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 rounded-lg border border-border bg-muted/40 px-3 py-3 backdrop-blur"
                >
                  <div className="text-sm font-semibold text-muted-foreground">{row.label}</div>
                  <div className="text-sm font-semibold text-foreground">{row.value}</div>
                </div>
              ))}

              <div className="rounded-lg bg-gradient-to-r from-emerald-400 via-indigo-500 to-fuchsia-500 p-[1px]">
                <div className="rounded-lg bg-white/90 px-4 py-3 text-sm font-semibold text-black backdrop-blur dark:bg-black/40 dark:text-white">
                  {locale === "es"
                    ? "Confirmación: revisión de red, comisiones y dirección."
                    : "Confirmation: review network, fees, and recipient address."}
                </div>
              </div>
            </div>
          </Card>

          <Card className="glass-card lg:col-span-5">
            <div className="text-sm font-semibold text-foreground">
              {locale === "es" ? "Seguridad" : "Security"}
            </div>
            <div className="mt-4 grid gap-3">
              {[
                locale === "es" ? "Chequeo visual de dirección" : "Visual address check",
                locale === "es" ? "Red recomendada según activo" : "Network suggestion by asset",
                locale === "es" ? "Resumen antes de confirmar" : "Pre-confirm summary"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-muted/40 px-3 py-3 text-sm font-semibold text-foreground backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
