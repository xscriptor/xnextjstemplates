'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/categorias/ciencia', label: 'Ciencia' },
    { href: '/categorias/literatura', label: 'Literatura' },
    { href: '/acerca-de', label: 'Acerca de' },
  ];

  return (
    <motion.header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-4' 
          : 'bg-transparent py-6'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-600 to-purple-600 dark:from-gold-400 dark:to-purple-400">
          Xblog
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={clsx(
                'text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-gold-400 relative group',
                pathname === link.href ? 'text-purple-600 dark:text-gold-400' : 'text-gray-600 dark:text-gray-300'
              )}
            >
              {link.label}
              <span className={clsx(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-purple-500 transition-all duration-300 group-hover:w-full",
                pathname === link.href ? "w-full" : ""
              )} />
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button - Simplified for now */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
