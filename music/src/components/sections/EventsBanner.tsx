'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export function EventsBanner() {
  const { t, language } = useLanguage();

  const events = [
    { id: 1, city: 'Madrid', date: 'Feb 20', venue: 'Arena Norte' },
    { id: 2, city: 'Paris', date: 'Mar 12', venue: 'Le Zenith' },
    { id: 3, city: 'Tokyo', date: 'Apr 05', venue: 'Shibuya Hall' },
  ];

  return (
    <section className="py-16">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-theme-primary"
        >
          {t.home.events}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev, index) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl glass p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{ev.city}</h3>
                <span className="text-sm text-theme-text/70">{ev.date}</span>
              </div>
              <p className="text-sm text-theme-text/80 mt-2">{ev.venue}</p>
              <button className="mt-4 px-4 py-2 text-sm rounded-full glass">
                {language === 'en' ? 'Tickets' : 'Boletos'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
