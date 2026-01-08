'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export function ArtistSpotlight() {
  const { t } = useLanguage();

  const artists = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    name: `Artist ${i + 1}`,
    tag: ['Synthwave', 'Pop', 'Indie', 'Lo-Fi', 'Jazz', 'Electro'][i % 6],
    image: `https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent('portrait neon ' + (i + 1))}&image_size=square`,
  }));

  return (
    <section className="py-16">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-theme-secondary"
        >
          {t.home.artistSpotlight}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((a, index) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl glass p-4"
            >
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <img src={a.image} alt={a.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-theme-primary/30 rounded-xl" />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-lg font-bold">{a.name}</h3>
                  <p className="text-sm text-theme-text/70">{a.tag}</p>
                </div>
                <button className="px-3 py-1.5 text-xs rounded-full glass">
                  Follow
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
