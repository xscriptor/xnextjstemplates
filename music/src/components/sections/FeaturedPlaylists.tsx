'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Card } from '@/components/ui/Card';

export function FeaturedPlaylists() {
  const { t } = useLanguage();

  const playlists = [
    { id: 1, title: 'Summer Vibes', subtitle: 'Best of 2024' },
    { id: 2, title: 'Chill Lo-Fi', subtitle: 'Relax & Study' },
    { id: 3, title: 'Workout Energy', subtitle: 'Power up your gym session' },
    { id: 4, title: 'Jazz Classics', subtitle: 'Smooth tunes' },
  ];

  return (
    <section className="py-20 bg-theme-background">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-theme-primary"
        >
          {t.home.featuredPlaylists}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {playlists.map((playlist, index) => (
            <motion.div
              key={playlist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                title={playlist.title}
                subtitle={playlist.subtitle}
                image={`https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(playlist.title + " abstract album art music")}&image_size=square`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
