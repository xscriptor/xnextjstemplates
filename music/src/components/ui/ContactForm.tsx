'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { useLanguage } from '@/hooks/useLanguage';

export function ContactForm() {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const labels = {
    en: {
      title: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message Sent!',
      desc: 'We would love to hear from you. Fill out the form below.'
    },
    es: {
      title: 'Contáctanos',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje Enviado!',
      desc: 'Nos encantaría saber de ti. Rellena el formulario de abajo.'
    }
  };

  const text = labels[language as keyof typeof labels] || labels.en;

  return (
    <section className="py-12 px-4">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-theme-background/50 backdrop-blur-lg rounded-2xl p-8 border border-theme-text/10 shadow-xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-theme-primary mb-2">{text.title}</h2>
            <p className="text-theme-text/70">{text.desc}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-theme-text/80 mb-2">
                {text.name}
              </label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-theme-background border border-theme-text/10 focus:border-theme-primary focus:ring-1 focus:ring-theme-primary outline-none transition-colors text-theme-text"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-theme-text/80 mb-2">
                {text.email}
              </label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-theme-background border border-theme-text/10 focus:border-theme-primary focus:ring-1 focus:ring-theme-primary outline-none transition-colors text-theme-text"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-theme-text/80 mb-2">
                {text.message}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-theme-background border border-theme-text/10 focus:border-theme-primary focus:ring-1 focus:ring-theme-primary outline-none transition-colors text-theme-text resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full"
              size="lg"
            >
              {status === 'submitting' ? text.sending : status === 'success' ? text.success : text.send}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
