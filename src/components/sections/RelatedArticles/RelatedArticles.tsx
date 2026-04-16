'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import styles from './RelatedArticles.module.css';

interface RelatedArticle {
  id: string;
  title: string;
  meta: string;
  image: string;
  slug: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Related articles</h2>
          <Link href="/insights" className={styles.browseAll}>
            Browse all <span className={styles.arrow}>→</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {articles.map((article) => (
            <Link key={article.id} href={`/insights/${article.slug}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardMeta}>{article.meta}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
