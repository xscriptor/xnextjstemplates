'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Palette } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import { themes } from '@/utils/themes';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getLink = (path: string) => {
    // English version (prefix /en)
    if (language === 'en') {
      // Map base paths to English routes if needed (currently they match structure but just prefixed)
      // Since English routes are at /en/player, /en/playlists, etc.
      // We assume input path is the "concept" (e.g. /player)
      return `/en${path === '/' ? '' : path}`;
    }
    
    // Spanish version (custom routes: /reproductor, /listas, /nosotros)
    switch (path) {
      case '/player': return '/reproductor';
      case '/playlists': return '/listas';
      case '/about': return '/nosotros';
      default: return path;
    }
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
      <div className={`container mx-auto max-w-6xl h-14 glass nav-glass ${scrolled ? 'scrolled' : ''} rounded-full grid grid-cols-3 items-center px-6`}>
        
        {/* Mobile Menu Button */}
        <div className="justify-self-start md:hidden">
          <button className="text-theme-text" onClick={toggleMenu}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Center Cluster: Logo + Links */}
        {/* Left cluster */}
        <div className="hidden md:flex items-center justify-self-start gap-2">
          <Link href={getLink('/')} className="text-sm font-medium text-theme-text/80 hover:text-theme-primary transition-colors px-3 py-1.5 rounded-full">
            {t.nav.home}
          </Link>
          <Link href={getLink('/player')} className="text-sm font-medium text-theme-text/80 hover:text-theme-primary transition-colors px-3 py-1.5 rounded-full">
            {t.nav.player}
          </Link>
        </div>

        {/* Center logo */}
        <div className="flex items-center justify-center">
          <Link href={getLink('/')} className="text-xl md:text-2xl font-bold text-theme-primary tracking-tighter hover:scale-105 transition-transform">
            X<span className="text-theme-secondary">Music</span>
          </Link>
        </div>

        {/* Right cluster */}
        <div className="hidden md:flex items-center justify-self-end gap-2">
          <Link href={getLink('/playlists')} className="text-sm font-medium text-theme-text/80 hover:text-theme-primary transition-colors px-3 py-1.5 rounded-full">
            {t.nav.playlists}
          </Link>
          <Link href={getLink('/about')} className="text-sm font-medium text-theme-text/80 hover:text-theme-primary transition-colors px-3 py-1.5 rounded-full">
            {t.nav.about}
          </Link>
          <div className="flex items-center gap-3 ml-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-1.5 text-[10px] font-bold text-theme-text/80 hover:text-theme-primary transition-colors glass px-2 py-1.5 rounded-full"
            >
              <Globe size={12} />
              <span className="uppercase tracking-wider">{language === 'en' ? 'ESP' : 'ENG'}</span>
            </button>
            <div className="relative">
              <button
                onClick={() => setShowThemes(!showThemes)}
                className="flex items-center text-theme-text/80 hover:text-theme-primary transition-colors p-1.5 glass rounded-full"
              >
                <Palette size={16} />
              </button>
              <AnimatePresence>
                {showThemes && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-48 p-2 glass rounded-2xl max-h-80 overflow-y-auto z-50"
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {themes.map((t) => (
                        <button
                          key={t}
                          onClick={() => {
                            setTheme(t);
                            setShowThemes(false);
                          }}
                          className={cn(
                            "px-2 py-1.5 text-xs rounded-lg text-left capitalize transition-colors truncate",
                            theme === t
                              ? "bg-theme-primary text-white"
                              : "hover:bg-theme-text/5 text-theme-text"
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 mx-auto max-w-[calc(100%-2rem)] glass rounded-2xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {[
                { href: '/', label: t.nav.home },
                { href: '/player', label: t.nav.player },
                { href: '/playlists', label: t.nav.playlists },
                { href: '/about', label: t.nav.about },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={getLink(link.href)}
                  onClick={toggleMenu}
                  className="text-theme-text py-3 px-4 hover:bg-theme-text/5 rounded-xl transition-colors text-center font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
