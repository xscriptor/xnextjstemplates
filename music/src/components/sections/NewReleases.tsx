'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Card } from '@/components/ui/Card';

export function NewReleases() {
  const { t } = useLanguage();

  const releases = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: `New Track ${i + 1}`,
    subtitle: `${2026} • Single`,
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
          {t.home.newReleases}
        </motion.h2>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
            {releases.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="min-w-[220px] snap-start"
              >
                <Card
                  title={item.title}
                  subtitle={item.subtitle}
                  image={`https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(item.title + " neon music aesthetic")}&image_size=square`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
