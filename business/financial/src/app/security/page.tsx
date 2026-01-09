import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Seguridad",
};

const controls = [
  {
    title: "Cifrado",
    desc: "TLS en tránsito y cifrado en reposo. Presenta una postura clara y auditable.",
  },
  {
    title: "Acceso",
    desc: "MFA, roles, mínimo privilegio y revisiones periódicas de permisos.",
  },
  {
    title: "Auditoría",
    desc: "Trazabilidad por usuario, registros de eventos y monitoreo para incidentes.",
  },
  {
    title: "Resiliencia",
    desc: "Backups, continuidad y recuperación para asegurar disponibilidad y datos.",
  },
] as const;

export default function SecurityPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
          Seguridad
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Diseñado para transmitir confianza y cumplimiento
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
          Esta página sirve como base de contenido para equipos de ventas, seguridad o
          compliance. Ajusta a tu realidad y enlaza documentación técnica si aplica.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {controls.map((c) => (
          <div key={c.title} className="rounded-3xl border bg-surface p-6 shadow-sm">
            <div className="text-base font-semibold">{c.title}</div>
            <div className="mt-2 text-sm leading-6 text-foreground/70">{c.desc}</div>
            <div className="mt-5 rounded-2xl bg-muted p-4 text-xs text-foreground/70">
              Reemplaza este bloque por datos reales, diagramas, SLAs o enlaces.
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
        >
          Hablar con seguridad
        </Link>
        <Link
          href="/legal/terms"
          className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
        >
          Términos
        </Link>
      </div>
    </Container>
  );
}

