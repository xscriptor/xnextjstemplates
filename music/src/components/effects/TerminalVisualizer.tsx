'use client';

import { motion } from 'framer-motion';

export const TerminalVisualizer = () => {
  return (
    <div className="w-full h-48 flex items-end justify-center gap-[2px] px-4 overflow-hidden">
      {[...Array(64)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 rounded-t-full bg-theme-text/80"
          animate={{
            height: [
              `${Math.random() * 20 + 5}%`,
              `${Math.random() * 80 + 20}%`,
              `${Math.random() * 40 + 10}%`
            ],
            backgroundColor: [
              'var(--color-text)',
              'var(--color-primary)',
              'var(--color-secondary)'
            ]
          }}
          transition={{
            duration: 0.6 + Math.random() * 0.4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.02
          }}
          style={{
            opacity: 0.8
          }}
        />
      ))}
    </div>
  );
};
