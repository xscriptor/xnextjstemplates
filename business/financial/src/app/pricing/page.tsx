import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Precios",
};

const plans = [
  {
    name: "Starter",
    price: "$49",
    desc: "MVP con narrativa sólida y secciones base.",
    items: ["Home completa", "Productos", "SEO básico"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$149",
    desc: "Para ventas activas y marketing constante.",
    items: ["Security", "Pricing", "Contacto y legal"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Ajustado a marca, compliance y escalamiento.",
    items: ["Tokens de marca", "Estructura modular", "Soporte de implementación"],
    featured: false,
  },
] as const;

export default function PricingPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
          Precios
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Planes simples, sin sorpresas
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
          Ajusta copy, números y beneficios a tu oferta. Los estilos están pensados para
          servicios financieros y empresas.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={[
              "rounded-3xl border bg-surface p-6 shadow-sm",
              p.featured ? "ring-2 ring-brand/40" : "",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">{p.name}</div>
              {p.featured ? (
                <div className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-foreground">
                  Recomendado
                </div>
              ) : null}
            </div>
            <div className="mt-3 text-4xl font-semibold tracking-tight">
              {p.price}
              {p.price.startsWith("$") ? (
                <span className="text-base font-medium text-foreground/70">/mes</span>
              ) : null}
            </div>
            <div className="mt-2 text-sm text-foreground/70">{p.desc}</div>
            <div className="mt-6 space-y-3 text-sm text-foreground/75">
              {p.items.map((x) => (
                <div key={x} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-flex size-2 rounded-full bg-accent" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className={[
                "mt-8 inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-medium transition",
                p.featured
                  ? "bg-brand text-brand-foreground hover:opacity-95"
                  : "border bg-background hover:bg-muted",
              ].join(" ")}
            >
              Elegir plan
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border bg-surface p-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-2">
            <div className="text-xl font-semibold tracking-tight">¿Necesitas algo a medida?</div>
            <div className="text-sm text-foreground/75">
              Personaliza identidad visual, navegación y contenido de compliance.
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
            >
              Contactar ventas
            </Link>
            <Link
              href="/security"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-background px-6 text-sm font-medium transition hover:bg-muted"
            >
              Seguridad
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
