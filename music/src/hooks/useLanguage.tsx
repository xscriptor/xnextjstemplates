'use client';

import { usePathname } from 'next/navigation';
import { translations } from '@/utils/translations';

export function useLanguage() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith('/en');
  const language = isEnglish ? 'en' : 'es';
  const t = translations[language];

  // Dummy setter for compatibility with existing components
  const setLanguage = (lang: 'en' | 'es') => {
    if (lang === 'en' && !isEnglish) {
      // Switching ES -> EN
      // Map Spanish routes to English equivalents
      let newPath = '/en';
      if (pathname === '/reproductor') newPath = '/en/player';
      else if (pathname === '/listas') newPath = '/en/playlists';
      else if (pathname === '/nosotros') newPath = '/en/about';
      else if (pathname !== '/') newPath = '/en' + pathname;
      
      window.location.href = newPath;
    } else if (lang === 'es' && isEnglish) {
      // Switching EN -> ES
      // Map English routes to Spanish equivalents
      const cleanPath = pathname.replace('/en', '') || '/';
      let newPath = cleanPath;
      
      if (cleanPath === '/player') newPath = '/reproductor';
      else if (cleanPath === '/playlists') newPath = '/listas';
      else if (cleanPath === '/about') newPath = '/nosotros';
      
      window.location.href = newPath;
    }
  };

  return { language, setLanguage, t, mounted: true };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
