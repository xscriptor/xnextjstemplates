'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-16">
      <div className="container px-4">
        <div className="rounded-2xl glass p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-theme-text/70">
            © {new Date().getFullYear()} XMusic · {t.footer.rights}
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/about" className="hover:text-theme-primary transition-colors">{t.nav.about}</Link>
            <Link href="/playlists" className="hover:text-theme-primary transition-colors">{t.nav.playlists}</Link>
            <Link href="/player" className="hover:text-theme-primary transition-colors">{t.nav.player}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
