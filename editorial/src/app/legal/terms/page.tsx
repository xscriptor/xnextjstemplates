import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Términos",
};

export default function TermsPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
          Legal
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Términos y condiciones (demo)
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
          Texto demostrativo. Sustituye por tus términos reales y revisa con asesoría legal.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {[
          {
            title: "Uso del sitio",
            body: "Contenido informativo y promocional. El uso implica aceptar estas condiciones.",
          },
          {
            title: "Derechos",
            body: "Textos, marcas y materiales pertenecen a sus respectivos titulares.",
          },
          {
            title: "Enlaces",
            body: "Podemos enlazar a terceros. Ajusta según tu política real.",
          },
          {
            title: "Cambios",
            body: "Podemos actualizar estos términos. Indica fecha de vigencia en tu versión final.",
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

