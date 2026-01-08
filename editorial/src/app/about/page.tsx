import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Editorial",
};

export default function AboutPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            Sobre Aurea
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Un sello literario construido con cuidado editorial
          </h1>
          <p className="text-pretty text-lg leading-8 text-foreground/75">
            Esta plantilla está pensada para presentar una editorial con seriedad: misión,
            catálogo, autores y procesos. Reemplaza el contenido con tu historia real.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/catalogo"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
            >
              Ver catálogo
            </Link>
            <Link
              href="/contacto"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            {
              title: "Misión",
              desc: "Publicar obras con rigor y acompañar a autores con un proceso editorial transparente.",
            },
            {
              title: "Líneas",
              desc: "Narrativa, poesía y ensayo con una curaduría exigente (contenido demo).",
            },
            {
              title: "Valores",
              desc: "Cuidado del texto, diseño sobrio, respeto al lector y permanencia en catálogo.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border bg-surface p-6 shadow-sm">
              <div className="text-sm font-semibold">{c.title}</div>
              <div className="mt-2 text-sm leading-6 text-foreground/70">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {[
          { k: "2016", v: "Fundación" },
          { k: "80+", v: "Títulos (demo)" },
          { k: "18", v: "Premios (demo)" },
        ].map((s) => (
          <div key={s.v} className="rounded-3xl border bg-surface p-6">
            <div className="text-3xl font-semibold tracking-tight">{s.k}</div>
            <div className="mt-1 text-sm text-foreground/70">{s.v}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}

