'use client';

import { motion } from 'framer-motion';

export const Equalizer = () => {
  return (
    <div className="flex items-end justify-center gap-2 h-64 w-full max-w-2xl mx-auto opacity-80">
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          className="w-3 md:w-4 bg-gradient-to-t from-theme-primary to-theme-secondary rounded-t-full"
          animate={{
            height: [
              `${Math.random() * 40 + 10}%`,
              `${Math.random() * 90 + 10}%`,
              `${Math.random() * 40 + 10}%`
            ],
          }}
          transition={{
            duration: 0.6 + Math.random() * 0.4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
