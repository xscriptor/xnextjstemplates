import { getArticleData, getAllArticleSlugs } from '@/lib/articles';
import Link from 'next/link';
import { FiArrowLeft, FiClock, FiCalendar, FiTag } from 'react-icons/fi';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export async function generateStaticParams() {
  return getAllArticleSlugs();
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleData(params.slug);

  return (
    <article className="max-w-3xl mx-auto pt-10 pb-20">
      <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-purple-600 dark:hover:text-gold-400 transition-colors mb-8 group">
        <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Volver al inicio
      </Link>

      <header className="mb-12 space-y-6 text-center">
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full uppercase text-xs font-bold tracking-wider">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <FiClock /> {article.readingTime} min lectura
          </span>
          <span className="flex items-center gap-1">
            <FiCalendar /> {format(new Date(article.date), 'd MMMM, yyyy', { locale: es })}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
          {article.title}
        </h1>

        <div className="flex flex-wrap justify-center gap-2">
          {article.tags.map(tag => (
            <span key={tag} className="text-xs text-purple-600 dark:text-gold-400 bg-purple-50 dark:bg-gold-900/10 px-2 py-1 rounded border border-purple-100 dark:border-gold-900/20">
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <div 
        className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-purple-600 dark:prose-a:text-gold-400 hover:prose-a:text-purple-500 dark:hover:prose-a:text-gold-300 prose-img:rounded-xl mx-auto"
        dangerouslySetInnerHTML={{ __html: article.contentHtml || '' }}
      />
    </article>
  );
}
