import type { Metadata } from "next";
import type { ReactNode } from "react";

import { getDictionary, normalizeLang, type Lang } from "@/app/[lang]/dictionaries";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const dynamicParams = false;

export function generateStaticParams(): Array<{ lang: Lang }> {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const lang = normalizeLang(resolved.lang);
  const dict = getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description
  };
}

export default async function LangLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang = normalizeLang(resolved.lang);
  const dict = getDictionary(lang);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Header lang={lang} dict={dict} />
      <main className="pt-16">{children}</main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
