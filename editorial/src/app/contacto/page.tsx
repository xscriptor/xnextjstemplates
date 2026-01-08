import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            Contacto
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Prensa, librerías, autores y lectores
          </h1>
          <p className="text-pretty text-lg leading-8 text-foreground/75">
            Este formulario es solo frontend. Puedes conectarlo a tu backend, un correo o un
            CRM.
          </p>
          <div className="rounded-3xl border bg-surface p-6 text-sm text-foreground/75">
            <div className="font-semibold text-foreground">Rutas rápidas</div>
            <div className="mt-3 grid gap-2">
              <Link className="text-brand hover:opacity-90" href="/catalogo">
                Catálogo
              </Link>
              <Link className="text-brand hover:opacity-90" href="/convocatorias">
                Convocatorias
              </Link>
              <Link className="text-brand hover:opacity-90" href="/about">
                Sobre la editorial
              </Link>
            </div>
          </div>
        </div>

        <form className="rounded-3xl border bg-surface p-6 shadow-sm">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-semibold">
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
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="h-11 rounded-2xl border bg-background px-4 text-sm outline-none ring-brand/30 transition focus:ring-4"
                placeholder="tu@correo.com"
                autoComplete="email"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="topic" className="text-sm font-semibold">
                Motivo
              </label>
              <select
                id="topic"
                name="topic"
                className="h-11 rounded-2xl border bg-background px-4 text-sm outline-none ring-brand/30 transition focus:ring-4"
                defaultValue="prensa"
              >
                <option value="prensa">Prensa / reseña</option>
                <option value="librerias">Librerías / distribución</option>
                <option value="autores">Autores / agentes</option>
                <option value="lectores">Lectores</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-semibold">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="min-h-32 rounded-2xl border bg-background px-4 py-3 text-sm outline-none ring-brand/30 transition focus:ring-4"
                placeholder="Cuéntanos qué necesitas…"
              />
            </div>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
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

