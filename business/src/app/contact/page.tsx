import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            Contacto
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Conversemos sobre tu producto financiero
          </h1>
          <p className="text-pretty text-lg leading-8 text-foreground/75">
            Este formulario es solo frontend. Puedes conectarlo a tu backend, un CRM o un
            proveedor de formularios.
          </p>
          <div className="rounded-3xl border bg-surface p-6 text-sm text-foreground/75">
            <div className="font-semibold text-foreground">Rutas rápidas</div>
            <div className="mt-3 grid gap-2">
              <Link className="text-brand hover:opacity-90" href="/products">
                Ver productos
              </Link>
              <Link className="text-brand hover:opacity-90" href="/security">
                Revisar seguridad
              </Link>
              <Link className="text-brand hover:opacity-90" href="/pricing">
                Comparar precios
              </Link>
            </div>
          </div>
        </div>

        <form className="rounded-3xl border bg-surface p-6 shadow-sm">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                className="h-11 rounded-2xl border bg-background px-4 text-sm outline-none ring-brand/30 transition focus:ring-4"
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="h-11 rounded-2xl border bg-background px-4 text-sm outline-none ring-brand/30 transition focus:ring-4"
                placeholder="tu@empresa.com"
                autoComplete="email"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="company" className="text-sm font-medium">
                Empresa
              </label>
              <input
                id="company"
                name="company"
                className="h-11 rounded-2xl border bg-background px-4 text-sm outline-none ring-brand/30 transition focus:ring-4"
                placeholder="Nombre de la empresa"
                autoComplete="organization"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="min-h-32 rounded-2xl border bg-background px-4 py-3 text-sm outline-none ring-brand/30 transition focus:ring-4"
                placeholder="Cuéntanos qué estás construyendo…"
              />
            </div>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
            >
              Enviar (demo)
            </button>
            <div className="text-xs text-foreground/60">
              Al enviar aceptas nuestros{" "}
              <Link className="text-brand hover:opacity-90" href="/legal/terms">
                términos
              </Link>{" "}
              y{" "}
              <Link className="text-brand hover:opacity-90" href="/legal/privacy">
                privacidad
              </Link>
              .
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

