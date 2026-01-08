'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';

export function Newsletter() {
  const { language, t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'submitting'>('idle');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 2000);
    }, 1200);
  }

  return (
    <section className="py-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl glass p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{t.home.newsletter}</h2>
            <p className="text-theme-text/70 mt-1">
              {language === 'en' ? 'Get fresh drops and updates.' : 'Recibe lanzamientos y noticias.'}
            </p>
          </div>
          <form onSubmit={submit} className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={language === 'en' ? 'Your email' : 'Tu correo'}
              className="flex-1 md:flex-none w-full md:w-64 px-4 py-2 rounded-full bg-theme-background/60 outline-none focus:ring-2 focus:ring-theme-primary text-theme-text"
            />
            <Button type="submit" variant="primary" size="md" className="rounded-full px-6">
              {status === 'submitting'
                ? language === 'en' ? 'Sending...' : 'Enviando...'
                : status === 'success'
                ? language === 'en' ? 'Subscribed!' : 'Suscrito!'
                : language === 'en' ? 'Subscribe' : 'Suscribirse'}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
