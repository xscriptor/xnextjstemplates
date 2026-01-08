'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { TerminalVisualizer } from '@/components/effects/TerminalVisualizer';
import Image from 'next/image';

export default function PlayerPage() {
  const { t } = useLanguage();

  return (
    <div className="container px-4 py-8 min-h-[calc(100vh-80px)] flex flex-col md:flex-row gap-8 items-center justify-center max-w-6xl mx-auto">
      {/* Visualizer & Album Art */}
      <div className="w-full md:w-1/2 flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-theme-primary/20"
        >
           <Image
            src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=futuristic%20music%20album%20art%20abstract&image_size=square"
            alt="Now Playing"
            fill
            className="object-cover"
          />
        </motion.div>
        
        <div className="w-full">
          <TerminalVisualizer />
        </div>
      </div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/2 max-w-md bg-theme-background/50 backdrop-blur-xl p-8 rounded-3xl border border-theme-text/5"
      >
        <div className="text-center mb-8">
          <h2 className="text-sm text-theme-primary font-bold uppercase tracking-widest mb-2">{t.player.nowPlaying}</h2>
          <h1 className="text-3xl font-bold text-theme-text mb-1">Cosmic Voyage</h1>
          <p className="text-lg text-theme-text/60">Stellar Dreams</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 group">
          <div className="h-1.5 bg-theme-text/10 rounded-full overflow-hidden cursor-pointer">
            <div className="h-full w-1/3 bg-theme-primary group-hover:bg-theme-secondary transition-colors relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md" />
            </div>
          </div>
          <div className="flex justify-between text-xs text-theme-text/40 mt-2 font-mono">
            <span>1:23</span>
            <span>4:12</span>
          </div>
        </div>

        {/* Main Controls */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <button className="text-theme-text/60 hover:text-theme-primary transition-colors">
            <Shuffle size={20} />
          </button>
          <button className="text-theme-text hover:text-theme-primary transition-colors">
            <SkipBack size={32} />
          </button>
          <button className="w-16 h-16 rounded-full bg-gradient-to-tr from-theme-primary to-theme-secondary text-white flex items-center justify-center shadow-lg shadow-theme-primary/30 hover:scale-105 transition-transform">
            <Play size={32} className="ml-1" fill="currentColor" />
          </button>
          <button className="text-theme-text hover:text-theme-primary transition-colors">
            <SkipForward size={32} />
          </button>
          <button className="text-theme-text/60 hover:text-theme-primary transition-colors">
            <Repeat size={20} />
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-4">
          <Volume2 size={20} className="text-theme-text/60" />
          <div className="flex-1 h-1 bg-theme-text/10 rounded-full overflow-hidden cursor-pointer">
            <div className="h-full w-2/3 bg-theme-text/60 hover:bg-theme-primary transition-colors" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
