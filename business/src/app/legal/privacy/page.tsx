import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacidad",
};

export default function PrivacyPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
          Legal
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Política de privacidad (demo)
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
          Este texto es demostrativo y no constituye asesoría legal. Sustituye por tu
          política real.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {[
          {
            title: "Datos que recolectamos",
            body: "Información de contacto, datos de uso y métricas operativas según el servicio.",
          },
          {
            title: "Finalidad",
            body: "Operar el servicio, mejorar seguridad, atender soporte y cumplir regulaciones aplicables.",
          },
          {
            title: "Retención",
            body: "Conservamos datos el tiempo necesario para operar y cumplir obligaciones legales.",
          },
          {
            title: "Seguridad",
            body: "Controles de acceso, cifrado y monitoreo continuo para proteger la información.",
          },
        ].map((s) => (
          <section key={s.title} className="rounded-3xl border bg-surface p-6">
            <h2 className="text-base font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm leading-6 text-foreground/70">{s.body}</p>
          </section>
        ))}
      </div>
    </Container>
  );
}

