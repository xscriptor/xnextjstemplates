import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/ui/Navigation';
import { LanguageProvider } from '@/hooks/useLanguage';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'XMusic',
  description: 'A modern music website template',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="_noise" />
        <div className="_top_flat" />
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen pt-24">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
