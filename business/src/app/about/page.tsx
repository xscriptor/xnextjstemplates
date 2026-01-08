import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Empresa",
};

export default function AboutPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            Sobre Xtrust
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Una narrativa creíble para una marca financiera moderna
          </h1>
          <p className="text-pretty text-lg leading-8 text-foreground/75">
            Esta página está pensada para fintech, banca digital o cripto. Reemplaza el
            contenido con tu historia, equipo y métricas reales.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
            >
              Hablar con el equipo
            </Link>
            <Link
              href="/security"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
            >
              Ver seguridad
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            {
              title: "Misión",
              desc: "Hacer que el dinero y los activos digitales se gestionen con claridad, control y confianza.",
            },
            {
              title: "Visión",
              desc: "Convertir la experiencia financiera empresarial en algo simple, seguro y verificable.",
            },
            {
              title: "Valores",
              desc: "Seguridad, transparencia, resiliencia y enfoque en el usuario.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border bg-surface p-6 shadow-sm">
              <div className="text-sm font-semibold">{c.title}</div>
              <div className="mt-2 text-sm leading-6 text-foreground/70">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {[
          { k: "2019", v: "Fundación" },
          { k: "120+", v: "Clientes (demo)" },
          { k: "15", v: "Países (demo)" },
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
