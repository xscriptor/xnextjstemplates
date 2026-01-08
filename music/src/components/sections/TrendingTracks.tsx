'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Play, Heart } from 'lucide-react';

export function TrendingTracks() {
  const { t } = useLanguage();

  const tracks = [
    { id: 1, title: 'Neon Lights', artist: 'Synthwave Boy', duration: '3:45' },
    { id: 2, title: 'Midnight City', artist: 'The Dreamers', duration: '4:12' },
    { id: 3, title: 'Electric Soul', artist: 'Future Funk', duration: '3:20' },
    { id: 4, title: 'Deep Ocean', artist: 'Ambient Sounds', duration: '5:00' },
    { id: 5, title: 'Retro Drive', artist: '80s Nostalgia', duration: '3:55' },
  ];

  return (
    <section className="py-20 bg-theme-background/50">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-theme-secondary"
        >
          {t.home.trendingTracks}
        </motion.h2>

        <div className="space-y-4">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center justify-between p-4 rounded-xl bg-theme-background border border-theme-text/5 hover:bg-theme-text/5 hover:border-theme-primary/30 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="text-theme-text/40 font-mono w-6">{index + 1}</span>
                <div className="w-12 h-12 rounded-lg bg-theme-secondary/20 flex items-center justify-center group-hover:bg-theme-primary group-hover:text-white transition-colors">
                  <Play size={20} className="ml-1" />
                </div>
                <div>
                  <h3 className="font-medium text-theme-text group-hover:text-theme-primary transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-sm text-theme-text/60">{track.artist}</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <span className="text-sm text-theme-text/60 hidden md:block">{track.duration}</span>
                <button className="text-theme-text/40 hover:text-theme-primary transition-colors">
                  <Heart size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
