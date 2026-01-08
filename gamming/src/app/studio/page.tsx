import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Estudio",
};

export default function StudioPage() {
  return (
    <div className="ndg-bg">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border bg-surface px-4 py-2 text-xs font-semibold tracking-[0.22em] text-foreground/70">
              ESTUDIO
            </div>
            <h1 className="text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Diseño agresivo, interfaz rápida, animaciones sutiles
            </h1>
            <p className="text-pretty text-lg leading-8 text-foreground/70">
              Página para contar tu historia: cultura, pipeline, herramientas y visión creativa.
              Contenido demo.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/games"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Ver juegos
              </Link>
              <Link
                href="/support"
                className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
              >
                Contactar soporte
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "Dirección de arte",
                desc: "Neón, contraste y lectura rápida con jerarquía fuerte.",
              },
              {
                title: "Tecnología",
                desc: "Next.js + Tailwind para velocidad, iteración y consistencia visual.",
              },
              {
                title: "Experiencia",
                desc: "Microinteracciones, hover states y bloques reutilizables.",
              },
            ].map((c, idx) => (
              <div
                key={c.title}
                className={[
                  "rounded-3xl border bg-surface p-6 transition hover:bg-muted",
                  idx === 0
                    ? "hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-1)_16%,transparent)]"
                    : idx === 1
                      ? "hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-2)_16%,transparent)]"
                      : "hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-3)_16%,transparent)]",
                ].join(" ")}
              >
                <div className="text-base font-semibold">{c.title}</div>
                <div className="mt-2 text-sm leading-6 text-foreground/70">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[28px] border bg-surface p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { k: "2019", v: "Fundación" },
              { k: "12", v: "Títulos demo" },
              { k: "24/7", v: "Soporte (demo)" },
            ].map((m) => (
              <div key={m.v} className="rounded-3xl border bg-background/50 p-6 backdrop-blur">
                <div className="text-3xl font-semibold tracking-tight">{m.k}</div>
                <div className="mt-1 text-sm text-foreground/70">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

