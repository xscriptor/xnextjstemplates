import { Card } from "@/components/ui/Card"
import Link from "next/link"

export type SectionCardItem = {
  title: string
  description: string
  href: string
  accent: "indigo" | "emerald" | "fuchsia"
}

const accentClass: Record<SectionCardItem["accent"], string> = {
  indigo: "from-indigo-500/20 to-indigo-300/10",
  emerald: "from-emerald-400/20 to-emerald-200/10",
  fuchsia: "from-fuchsia-500/20 to-fuchsia-300/10"
}

export function SectionCards({ items }: { items: SectionCardItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((it) => (
        <Link key={it.href} href={it.href} className="group">
          <Card className="glass-card h-full transition-all group-hover:-translate-y-1 group-hover:shadow-lg dark:group-hover:shadow-none group-hover:border-primary/50">
            <div className={`mb-4 h-10 w-10 rounded-xl bg-gradient-to-br ${accentClass[it.accent]} ring-1 ring-border`} />
            <div className="text-lg font-semibold text-foreground">{it.title}</div>
            <div className="mt-2 text-sm text-muted-foreground">{it.description}</div>
            <div className="mt-4 text-sm font-semibold text-primary">→</div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
