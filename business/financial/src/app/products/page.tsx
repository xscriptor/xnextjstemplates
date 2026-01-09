import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Productos",
};

const products = [
  {
    title: "Cuenta digital",
    desc: "Gestión de saldos, transferencias y conciliación con controles empresariales.",
    points: ["Roles y permisos", "Reportes y exportación", "Límites y aprobaciones"],
  },
  {
    title: "Pagos",
    desc: "Flujos claros para cobro y envío: tarjetas, transferencias y pagos recurrentes.",
    points: ["Checkout adaptable", "Webhooks (integrable)", "Métricas de conversión"],
  },
  {
    title: "Cripto y custodia",
    desc: "Presentación segura para activos digitales: custodia, wallets y control de riesgo.",
    points: ["Políticas por activo", "Controles de retiro", "Auditoría por evento"],
  },
] as const;

export default function ProductsPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            Productos
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Secciones listas para banca, pagos y cripto
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
            Usa estas tarjetas como resumen de producto y profundiza con páginas o secciones
            adicionales.
          </p>
        </div>
        <Link
          href="/pricing"
          className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
        >
          Ver precios
        </Link>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.title} className="rounded-3xl border bg-surface p-6 shadow-sm">
            <div className="text-base font-semibold">{p.title}</div>
            <div className="mt-2 text-sm leading-6 text-foreground/70">{p.desc}</div>
            <div className="mt-5 space-y-3 text-sm text-foreground/75">
              {p.points.map((x) => (
                <div key={x} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-flex size-2 rounded-full bg-brand" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand)_14%,var(--color-surface)),color-mix(in_oklab,var(--color-accent)_12%,var(--color-surface)))] p-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-2">
            <div className="text-xl font-semibold tracking-tight">
              Convierte la visita en una conversación
            </div>
            <div className="text-sm text-foreground/75">
              CTA pensado para ventas B2B, onboarding o alianzas.
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
            >
              Solicitar demo
            </Link>
            <Link
              href="/security"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
            >
              Seguridad
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

