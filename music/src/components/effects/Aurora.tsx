'use client';

import { motion } from 'framer-motion';

export function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 w-full">
      <motion.div
        initial={{ x: -100, y: -50, opacity: 0.6 }}
        animate={{ x: 100, y: 50, opacity: 0.9 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%)',
          opacity: 0.4,
        }}
      />
      <motion.div
        initial={{ x: 100, y: -80, opacity: 0.5 }}
        animate={{ x: -80, y: 40, opacity: 0.8 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute top-[-10%] right-[-20%] w-[70vw] h-[70vw] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle at center, var(--color-secondary) 0%, transparent 70%)',
          opacity: 0.4,
        }}
      />
      <motion.div
        initial={{ x: -40, y: 80, opacity: 0.5 }}
        animate={{ x: 60, y: -60, opacity: 0.8 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle at center, var(--color-accent) 0%, transparent 70%)',
          opacity: 0.3,
        }}
      />
    </div>
  );
}
