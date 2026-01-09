import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Container } from "@/components/ui/Container"

export function Hero({
  title,
  subtitle,
  pill,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  portfolioLabel
}: {
  title: string
  subtitle: string
  pill: string
  primaryHref: string
  primaryLabel: string
  secondaryHref: string
  secondaryLabel: string
  portfolioLabel: string
}) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-background to-background opacity-40 dark:from-indigo-900/40" />
      
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-600 backdrop-blur dark:text-indigo-300">
              <span className="mr-2 h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              {pill}
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient block pb-2">Crypto Future</span>
              {title}
            </h1>
            
            <p className="text-lg text-muted-foreground sm:text-xl max-w-lg text-balance">
              {subtitle}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href={primaryHref} variant="primary" className="h-12 px-8 text-base">
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="secondary" className="h-12 px-8 text-base">
                {secondaryLabel}
              </Button>
            </div>
          </div>

          <div className="relative lg:ml-auto w-full max-w-md">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-2xl dark:opacity-40" />
            <Card className="relative border-border/50 bg-background/60 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{portfolioLabel}</div>
                  <div className="mt-1 text-3xl font-bold text-foreground">$24,980.00</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  ↑
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { n: "Bitcoin", s: "BTC", v: "$43,210", c: "+1.2%", up: true },
                  { n: "Ethereum", s: "ETH", v: "$2,340", c: "-0.5%", up: false },
                  { n: "Solana", s: "SOL", v: "$98.50", c: "+5.4%", up: true },
                ].map((coin) => (
                  <div key={coin.s} className="flex items-center justify-between rounded-lg p-2 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-full ${coin.n === 'Bitcoin' ? 'bg-orange-500/20 text-orange-500' : coin.n === 'Ethereum' ? 'bg-blue-500/20 text-blue-500' : 'bg-purple-500/20 text-purple-500'} flex items-center justify-center font-bold text-xs`}>
                        {coin.s[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{coin.n}</div>
                        <div className="text-xs text-muted-foreground">{coin.s}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-foreground">{coin.v}</div>
                      <div className={`text-xs ${coin.up ? 'text-emerald-500' : 'text-rose-500'}`}>{coin.c}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}
