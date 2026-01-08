'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Play } from 'lucide-react';

export function TopCharts() {
  const { t } = useLanguage();

  const charts = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: `Top ${i + 1}`,
    artist: ['Aurora', 'Nebula', 'Echo', 'Pulse', 'Bliss'][i % 5],
    duration: `${3 + (i % 2)}:${30 + (i % 20)}`,
  }));

  return (
    <section className="py-16">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-theme-primary"
        >
          {t.home.topCharts}
        </motion.h2>

        <div className="space-y-3">
          {charts.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex items-center justify-between p-4 rounded-xl glass"
            >
              <div className="flex items-center gap-4">
                <span className="text-theme-text/50 font-mono w-6">{index + 1}</span>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-theme-primary/30 to-theme-secondary/30 flex items-center justify-center group-hover:from-theme-primary/50 group-hover:to-theme-secondary/50 transition-colors">
                  <Play size={18} className="ml-1" />
                </div>
                <div>
                  <h3 className="font-medium">{track.title}</h3>
                  <p className="text-sm text-theme-text/70">{track.artist}</p>
                </div>
              </div>
              <span className="text-sm text-theme-text/60 hidden md:block">{track.duration}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
