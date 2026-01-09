import type { Messages } from "@/lib/messages"
import { Container } from "@/components/ui/Container"

export function SiteFooter({ m }: { m: Messages }) {
  return (
    <footer className="mt-16 border-t border-black/10 py-10 dark:border-white/10">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
          <div className="text-sm font-semibold text-black/80 dark:text-white/80">{m.brand}</div>
          <div className="text-sm text-black/60 dark:text-white/60 sm:text-right">{m.footer.disclaimer}</div>
        </div>
      </Container>
    </footer>
  )
}

