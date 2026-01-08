'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Card } from '@/components/ui/Card';
import { Search } from 'lucide-react';

export default function PlaylistsPageEn() {
  const { t } = useLanguage();

  const allPlaylists = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `Playlist ${i + 1}`,
    subtitle: `${Math.floor(Math.random() * 50) + 10} Songs`,
  }));

  return (
    <div className="container px-4 py-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
      >
        <h1 className="text-4xl font-bold text-theme-primary">{t.playlists.title}</h1>
        
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-theme-text/40" size={20} />
          <input
            type="text"
            placeholder={t.playlists.search}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-theme-background border border-theme-text/10 focus:border-theme-primary focus:ring-1 focus:ring-theme-primary outline-none transition-colors"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allPlaylists.map((playlist, index) => (
          <motion.div
            key={playlist.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              title={playlist.title}
              subtitle={playlist.subtitle}
              image={`https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(playlist.title + " musical mood abstract")}&image_size=square`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
