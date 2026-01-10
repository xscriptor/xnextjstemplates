import { getSortedArticles } from '@/lib/articles';
import AsymmetricGrid from '@/components/AsymmetricGrid';
import { motion } from 'framer-motion';

export default function Home() {
  const articles = getSortedArticles();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 flex flex-col items-center text-center space-y-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-100/50 via-transparent to-transparent dark:from-purple-900/20 dark:via-transparent dark:to-transparent opacity-70 blur-3xl" />
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-gray-900 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-600 via-purple-600 to-gold-600 dark:from-gold-300 dark:via-purple-400 dark:to-gold-300 animate-gradient bg-[length:200%_auto]">
            Ciencia & Letras
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
          Un espacio donde la precisión científica se encuentra con la belleza literaria. 
          Explora el universo a través de ecuaciones y metáforas.
        </p>
      </section>

      {/* Grid Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <span className="w-8 h-[1px] bg-gold-500 dark:bg-purple-500 block"></span>
            Publicaciones Recientes
          </h2>
        </div>
        
        <AsymmetricGrid articles={articles} />
      </section>
    </div>
  );
}
