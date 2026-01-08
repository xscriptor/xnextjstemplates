'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';
import { Aurora } from '@/components/effects/Aurora';
import Link from 'next/link';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      <Aurora />
      
      <div className="container px-4 z-10 flex flex-col items-center text-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-primary to-theme-secondary max-w-4xl"
        >
          {t.home.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-theme-text/80 max-w-2xl"
        >
          {t.home.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/playlists">
            <Button size="lg" className="rounded-full px-8 text-xl">
              {t.home.explore}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
