'use client';

import BlackHoleBackground from '@/components/BlackHoleBackground';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-xos-white dark:bg-black transition-colors duration-500">
      <BlackHoleBackground />
      
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/20 dark:from-black/80 dark:via-transparent dark:to-black/20 z-10 pointer-events-none transition-colors duration-500" />

      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-black dark:text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight whitespace-pre-line transition-colors duration-500">
            {t.home.title}
          </h1>
          
          <p className="font-serif text-2xl md:text-3xl text-xos-white/90 italic font-light tracking-wide hidden">
            {t.home.subtitle}
          </p>

          <div className="pt-12">
            <Link 
              href="/download"
              className="inline-flex items-center gap-2 px-10 py-5 bg-xos-cyan/10 hover:bg-xos-cyan/20 border border-xos-cyan/50 text-xos-cyan dark:text-xos-cyan rounded-full transition-all duration-300 backdrop-blur-sm group hover:scale-105"
            >
              <span className="font-medium text-lg">{t.home.cta}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
