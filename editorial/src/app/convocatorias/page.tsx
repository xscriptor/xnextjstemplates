import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Convocatorias",
};

export default function ConvocatoriasPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
          Convocatorias
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Envío de manuscritos y bases (demo)
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
          Página preparada para comunicar requisitos, plazos y política editorial. Este
          contenido es demostrativo.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {[
          {
            title: "Narrativa · Umbral",
            desc: "Novela o libro de relatos. 40–120 mil palabras. Tema libre.",
            date: "Cierra: 30 Sep 2026",
          },
          {
            title: "Poesía · Bronce",
            desc: "Poemario inédito. Extensión abierta. Envío en PDF.",
            date: "Cierra: 15 Oct 2026",
          },
          {
            title: "Ensayo · Archivo",
            desc: "Ensayo literario o cultural. Incluye propuesta de índice.",
            date: "Cierra: 20 Nov 2026",
          },
          {
            title: "Traducción",
            desc: "Proyectos con derechos claros. Adjunta muestra y contexto.",
            date: "Por invitación",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-3xl border bg-surface p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="text-base font-semibold">{c.title}</div>
              <div className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground/75">
                {c.date}
              </div>
            </div>
            <div className="mt-2 text-sm leading-6 text-foreground/70">{c.desc}</div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
              >
                Enviar consulta
              </Link>
              <Link
                href="/legal/terms"
                className="inline-flex h-10 items-center justify-center rounded-full border bg-background px-5 text-sm font-semibold transition hover:bg-muted"
              >
                Política (demo)
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

