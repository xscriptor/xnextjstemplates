import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'content/articulos');

export interface ArticleMetadata {
  slug: string;
  title: string;
  date: string;
  category: 'ciencia' | 'literatura';
  tags: string[];
  excerpt: string;
  readingTime: number;
  image?: string;
  size?: 'small' | 'medium' | 'large';
  contentHtml?: string;
}

export function getSortedArticles(): ArticleMetadata[] {
  // Get categories (subdirectories)
  const categories = fs.readdirSync(articlesDirectory);
  
  let allArticles: ArticleMetadata[] = [];

  categories.forEach(category => {
    const categoryPath = path.join(articlesDirectory, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const fileNames = fs.readdirSync(categoryPath);
      
      const categoryArticles = fileNames.map(fileName => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(categoryPath, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        
        // Estimate reading time (approx 200 words per minute)
        const wordCount = matterResult.content.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);

        // Combine the data with the id
        return {
          slug,
          category: category as 'ciencia' | 'literatura',
          readingTime,
          ...matterResult.data,
        } as ArticleMetadata;
      });

      allArticles = [...allArticles, ...categoryArticles];
    }
  });

  // Sort articles by date
  return allArticles.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllArticleSlugs() {
  const articles = getSortedArticles();
  return articles.map(article => {
    return {
      params: {
        slug: article.slug,
      },
    };
  });
}

export async function getArticleData(slug: string): Promise<ArticleMetadata> {
  const categories = ['ciencia', 'literatura'];
  let fullPath = '';
  let category = '';

  // Find the file in one of the categories
  for (const cat of categories) {
    const p = path.join(articlesDirectory, cat, `${slug}.md`);
    if (fs.existsSync(p)) {
      fullPath = p;
      category = cat;
      break;
    }
  }

  if (!fullPath) {
    throw new Error(`Article not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const wordCount = matterResult.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return {
    slug,
    contentHtml,
    category: category as 'ciencia' | 'literatura',
    readingTime,
    ...matterResult.data,
  } as ArticleMetadata;
}
