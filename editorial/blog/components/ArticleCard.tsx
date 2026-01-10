'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArticleMetadata } from '@/lib/articles';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import clsx from 'clsx';

interface ArticleCardProps {
  article: ArticleMetadata;
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  // Eliminamos las clases de size grid (col-span, etc) y usamos break-inside-avoid
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 flex flex-col"
    >
      <Link href={`/articulos/${article.slug}`} className="block w-full h-full">
        {/* Imagen si existe - clave para estilo Pinterest */}
        {article.image && (
          <div className="relative w-full overflow-hidden">
             {/* Aspect ratio variable o natural de la imagen */}
            <div className="relative w-full h-auto min-h-[200px]">
               <Image 
                 src={article.image} 
                 alt={article.title}
                 width={600}
                 height={400}
                 className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                 style={{ height: 'auto' }} // Permitir altura natural
               />
            </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Animated Border Gradient on Hover */}
        <div className="absolute inset-0 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-gold-400 via-purple-400 to-gold-400 bg-[length:200%_auto] animate-gradient rounded-2xl pointer-events-none" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />

        <div className="relative p-6 flex flex-col z-10">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={clsx(
                "text-xs font-bold tracking-wider uppercase px-2 py-1 rounded-full",
                article.category === 'ciencia' 
                  ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                  : "bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300"
              )}>
                {article.category}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <FiClock /> {article.readingTime} min
              </span>
            </div>

            <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gold-600 group-hover:to-purple-600 dark:group-hover:from-gold-400 dark:group-hover:to-purple-400 transition-all duration-300">
              {article.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-gold-400 transition-colors">
            Leer artículo <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
