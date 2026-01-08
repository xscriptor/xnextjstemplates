import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "X Editorial",
    template: "%s · X Editorial",
  },
  description:
    "Plantilla web para editorial literaria: catálogo, autores, convocatorias y contacto.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${ebGaramond.variable} antialiased`}>
        <div className="min-h-dvh bg-background text-foreground">
          <SiteHeader />
          <main className="mx-auto w-full">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
