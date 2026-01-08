'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { ContactForm } from '@/components/ui/ContactForm';

export default function AboutPageEn() {
  const { t } = useLanguage();

  const milestones = [
    { year: '2020', title: 'The Beginning', description: 'Formed the band in a garage in Seattle.' },
    { year: '2021', title: 'First EP', description: 'Released "Neon Dreams" which hit 1M streams.' },
    { year: '2022', title: 'World Tour', description: 'Performed in 15 countries across 3 continents.' },
    { year: '2023', title: 'Award Winning', description: 'Won "Best New Artist" at the Global Music Awards.' },
    { year: '2024', title: 'New Era', description: 'Working on the most ambitious album yet.' },
  ];

  return (
    <div className="container px-4 py-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-theme-primary mb-3">{t.about.title}</h1>
        <p className="text-lg text-theme-text/60 max-w-2xl mx-auto">
          A journey through sound, emotion, and rhythm.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative mb-20">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-theme-text/10 -translate-x-1/2" />

        <div className="space-y-8">
          {milestones.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-6 items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 w-full pl-12 md:pl-0">
                <div className={`p-5 rounded-2xl bg-theme-background border border-theme-text/5 shadow-lg ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-2xl font-bold text-theme-secondary block mb-1">{item.year}</span>
                  <h3 className="text-lg font-bold text-theme-text mb-1">{item.title}</h3>
                  <p className="text-sm text-theme-text/60">{item.description}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-theme-primary border-2 border-theme-background shadow-lg z-10" />

              {/* Empty Space for alignment */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
