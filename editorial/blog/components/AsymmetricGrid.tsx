'use client';

import { ArticleMetadata } from '@/lib/articles';
import ArticleCard from './ArticleCard';

interface AsymmetricGridProps {
  articles: ArticleMetadata[];
}

export default function AsymmetricGrid({ articles }: AsymmetricGridProps) {
  return (
    // Usamos columns-1, columns-2, columns-3 para efecto Masonry real
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {articles.map((article, index) => (
        <ArticleCard key={article.slug} article={article} index={index} />
      ))}
    </div>
  );
}
