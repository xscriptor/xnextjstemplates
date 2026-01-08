'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CardProps {
  title: string;
  subtitle?: string;
  image?: string;
  onClick?: () => void;
  className?: string;
}

export function Card({ title, subtitle, image, onClick, className }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-theme-background border border-theme-text/10 shadow-lg cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="aspect-square relative overflow-hidden bg-theme-secondary/20">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-theme-primary/20 to-theme-secondary/20 group-hover:from-theme-primary/30 group-hover:to-theme-secondary/30 transition-colors">
            <div className="w-12 h-12 rounded-full border-2 border-theme-primary/50 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-theme-primary border-b-[8px] border-b-transparent ml-1" />
            </div>
          </div>
        )}
        
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-theme-primary text-white flex items-center justify-center shadow-xl transform scale-50 group-hover:scale-100 transition-transform">
            <svg className="w-8 h-8 fill-current translate-x-1" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-theme-text truncate">{title}</h3>
        {subtitle && (
          <p className="text-sm text-theme-text/60 truncate mt-1">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}
