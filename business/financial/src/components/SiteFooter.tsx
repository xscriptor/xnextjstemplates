"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";

export function SiteFooter() {
  const pathname = usePathname();

  const locale = useMemo(() => (pathname?.startsWith("/en") ? "en" : "es"), [pathname]);

  const footerLinks = useMemo(() => {
    if (locale === "en") {
      return [
        {
          title: "Product",
          items: [
            { href: "/en/products", label: "Products" },
            { href: "/en/security", label: "Security" },
            { href: "/en/pricing", label: "Pricing" },
          ],
        },
        {
          title: "Company",
          items: [
            { href: "/en/about", label: "About" },
            { href: "/en/contact", label: "Contact" },
          ],
        },
        {
          title: "Legal",
          items: [
            { href: "/en/legal/privacy", label: "Privacy" },
            { href: "/en/legal/terms", label: "Terms" },
          ],
        },
      ] as const;
    }
    return [
      {
        title: "Producto",
        items: [
          { href: "/products", label: "Productos" },
          { href: "/security", label: "Seguridad" },
          { href: "/pricing", label: "Precios" },
        ],
      },
      {
        title: "Empresa",
        items: [
          { href: "/about", label: "Nosotros" },
          { href: "/contact", label: "Contacto" },
        ],
      },
      {
        title: "Legal",
        items: [
          { href: "/legal/privacy", label: "Privacidad" },
          { href: "/legal/terms", label: "Términos" },
        ],
      },
    ] as const;
  }, [locale]);

  return (
    <footer className="border-t">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <BrandMark className="size-6" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">Xtrust</div>
                <div className="text-xs text-foreground/65">
                  {locale === "en"
                    ? "Next.js template for banking & crypto"
                    : "Plantilla Next.js para banca y cripto"}
                </div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-6 text-foreground/70">
              {locale === "en"
                ? "Use this base to build a sober, trustworthy and responsive site. All content is demo."
                : "Usa esta base para construir un sitio sobrio, confiable y responsive. Todo el contenido es demostrativo."}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-foreground/60">
              <span className="rounded-full border bg-surface px-3 py-1">Next.js</span>
              <span className="rounded-full border bg-surface px-3 py-1">TypeScript</span>
              <span className="rounded-full border bg-surface px-3 py-1">Tailwind</span>
              <span className="rounded-full border bg-surface px-3 py-1">App Router</span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-3">
                <div className="text-sm font-semibold">{group.title}</div>
                <div className="grid gap-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-foreground/70 transition hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t pt-6 text-xs text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Xtrust.{" "}
            {locale === "en" ? "All rights reserved." : "Todos los derechos reservados."}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-muted px-3 py-1">
              {locale === "en" ? "Demo content" : "Contenido demo"}
            </span>
            <span className="rounded-full bg-muted px-3 py-1">
              {locale === "en" ? "No backend" : "Sin backend"}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
