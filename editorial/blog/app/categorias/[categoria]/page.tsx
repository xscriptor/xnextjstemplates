import { getSortedArticles } from '@/lib/articles';
import AsymmetricGrid from '@/components/AsymmetricGrid';

export default function CategoryPage({ params }: { params: { categoria: string } }) {
  const allArticles = getSortedArticles();
  const categoryArticles = allArticles.filter(
    article => article.category === params.categoria
  );

  const categoryTitles: Record<string, string> = {
    ciencia: 'Ciencia & Cosmos',
    literatura: 'Literatura & Arte'
  };

  const title = categoryTitles[params.categoria] || params.categoria;

  return (
    <div className="space-y-12">
      <header className="py-12 text-center space-y-4 border-b border-gray-100 dark:border-gray-800">
        <span className="text-sm font-bold tracking-widest uppercase text-gold-600 dark:text-purple-400">Categoría</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white capitalize">
          {title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          {params.categoria === 'ciencia' 
            ? 'Explorando los misterios del universo, desde las partículas subatómicas hasta las galaxias lejanas.' 
            : 'Sumergiéndose en las profundidades de la creatividad humana, las letras y la imaginación.'}
        </p>
      </header>

      {categoryArticles.length > 0 ? (
        <AsymmetricGrid articles={categoryArticles} />
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No hay artículos en esta categoría todavía.</p>
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { categoria: 'ciencia' },
    { categoria: 'literatura' },
  ];
}
