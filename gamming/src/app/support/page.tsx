import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Soporte",
};

export default function SupportPage() {
  return (
    <div className="ndg-bg">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border bg-surface px-4 py-2 text-xs font-semibold tracking-[0.22em] text-foreground/70">
              SOPORTE
            </div>
            <h1 className="text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Ayuda rápida con UI de alto contraste
            </h1>
            <p className="text-pretty text-lg leading-8 text-foreground/70">
              Bloques para estado, FAQs, guías y un formulario demo de contacto.
            </p>
            <div className="rounded-[28px] border bg-surface p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                ESTADO
              </div>
              <div className="mt-2 text-lg font-semibold">Operativo</div>
              <div className="mt-2 text-sm leading-6 text-foreground/70">
                Matchmaking, perfiles y contenido descargable funcionando (demo).
              </div>
            </div>
          </div>

          <form className="rounded-[28px] border bg-surface p-6 shadow-sm">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="topic" className="text-sm font-semibold">
                  Tema
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="h-11 rounded-2xl border bg-background px-4 text-sm outline-none ring-[color:color-mix(in_oklab,var(--color-neon-2)_30%,transparent)] transition focus:ring-4"
                  defaultValue="account"
                >
                  <option value="account">Cuenta</option>
                  <option value="purchase">Compras</option>
                  <option value="performance">Rendimiento</option>
                  <option value="bug">Bug</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="h-11 rounded-2xl border bg-background px-4 text-sm outline-none ring-[color:color-mix(in_oklab,var(--color-neon-2)_30%,transparent)] transition focus:ring-4"
                  placeholder="tu@correo.com"
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-semibold">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="min-h-32 rounded-2xl border bg-background px-4 py-3 text-sm outline-none ring-[color:color-mix(in_oklab,var(--color-neon-2)_30%,transparent)] transition focus:ring-4"
                  placeholder="Describe el problema…"
                />
              </div>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Enviar (demo)
              </button>
              <div className="text-xs text-foreground/60">
                También puedes revisar{" "}
                <Link className="text-[color:var(--color-neon-2)] hover:opacity-90" href="/news">
                  parches
                </Link>{" "}
                o{" "}
                <Link
                  className="text-[color:var(--color-neon-2)] hover:opacity-90"
                  href="/games"
                >
                  fichas
                </Link>
                .
              </div>
            </div>
          </form>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-3">
            <div className="inline-flex items-center rounded-full border bg-surface px-4 py-2 text-xs font-semibold tracking-[0.22em] text-foreground/70">
              FAQ
            </div>
            <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
              Dudas frecuentes
            </h2>
            <p className="text-sm leading-6 text-foreground/70">
              Accordion interactivo listo para FAQs largas sin ruido visual.
            </p>
          </div>
          <FaqAccordion
            items={[
              {
                q: "¿Cómo recupero mi cuenta?",
                a: "Entra con tu email y usa el flujo de recuperación (demo). Conecta este bloque a tu backend.",
              },
              {
                q: "Tengo lag o stuttering, ¿qué hago?",
                a: "Revisa drivers, baja sombras y prueba modo ventana. Añade aquí tu guía real.",
              },
              {
                q: "¿Dónde veo notas del parche?",
                a: "En Newswire publicamos cambios, balances y hotfixes.",
              },
            ]}
          />
        </div>
      </Container>
    </div>
  );
}
