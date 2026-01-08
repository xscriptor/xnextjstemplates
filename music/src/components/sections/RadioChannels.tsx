'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Equalizer } from '@/components/effects/Equalizer';

export function RadioChannels() {
  const { t } = useLanguage();

  const channels = ['Dance FM', 'Lo-Fi Radio', 'Jazz Lounge', 'Synthwave 24/7', 'Indie Mix', 'Pop Hits'];

  return (
    <section className="py-16">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-theme-secondary"
        >
          {t.home.radioChannels}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {channels.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl glass p-6 flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm text-theme-text/70">Live</p>
              </div>
              <div className="w-32">
                <Equalizer />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
