'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useI18n } from '@/lib/i18n';
import { Moon, Sun, Globe, Terminal, Home, Download, Code2, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Xos Prompt Icon Component
const XosIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 17l6-6-6-6" />
    <path d="M12 19h8" />
    <text x="14" y="10" fontSize="8" fontFamily="sans-serif" fontWeight="bold" fill="currentColor" stroke="none">Xos</text>
  </svg>
);

function DockItem({ 
  children, 
  href, 
  onClick, 
  active, 
  mouseX 
}: { 
  children: React.ReactNode; 
  href?: string; 
  onClick?: () => void; 
  active?: boolean;
  mouseX: any;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={clsx(
        "flex items-center justify-center rounded-2xl transition-colors duration-300",
        active 
          ? "bg-xos-pink/20 text-xos-pink border border-xos-pink/50 shadow-[0_0_15px_rgba(188,19,254,0.3)]" 
          : "bg-black/40 text-xos-gray hover:text-xos-cyan hover:bg-black/60 border border-white/5 hover:border-xos-cyan/30 dark:bg-black/40 dark:text-xos-gray dark:hover:text-xos-cyan dark:hover:bg-black/60 dark:border-white/5 bg-white/50 text-gray-700 hover:text-xos-cyan hover:bg-white/80 border-black/5"
      )}
    >
      <div className="transform scale-110">
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="relative group">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="relative group">
      {content}
    </button>
  );
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div 
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-3 px-4 py-3 mx-auto pointer-events-auto rounded-3xl bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl ring-1 ring-black/5 dark:ring-white/5"
      >
        <DockItem 
          href="/" 
          active={pathname === '/'} 
          mouseX={mouseX}
        >
          <XosIcon className="w-6 h-6" />
        </DockItem>

        <div className="w-px h-8 bg-black/10 dark:bg-white/10 self-center mx-1" />

        <DockItem 
          href="/" 
          active={pathname === '/' && false} // Prevent double active for home icon
          mouseX={mouseX}
        >
          <Home className="w-6 h-6" />
        </DockItem>

        <DockItem 
          href="/download" 
          active={pathname === '/download'} 
          mouseX={mouseX}
        >
          <Download className="w-6 h-6" />
        </DockItem>

        <DockItem 
          href="/developers" 
          active={pathname === '/developers'} 
          mouseX={mouseX}
        >
          <Code2 className="w-6 h-6" />
        </DockItem>

        <DockItem 
          href="/contact" 
          active={pathname === '/contact'} 
          mouseX={mouseX}
        >
          <Mail className="w-6 h-6" />
        </DockItem>

        <div className="w-px h-8 bg-black/10 dark:bg-white/10 self-center mx-1" />

        <DockItem 
          onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          mouseX={mouseX}
        >
          <div className="flex flex-col items-center justify-center">
            <Globe className="w-5 h-5 mb-0.5" />
            <span className="text-[8px] font-bold">{language.toUpperCase()}</span>
          </div>
        </DockItem>

        <DockItem 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          mouseX={mouseX}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-xos-yellow" />
          ) : (
            <Moon className="w-5 h-5 text-xos-yellow" />
          )}
        </DockItem>

      </motion.div>
    </div>
  );
}
