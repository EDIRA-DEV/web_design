'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './ArticleHero.module.css';

interface ArticleHeroProps {
  title: string;
  metadata: {
    author: string;
    date: string;
    readTime: string;
  };
  image: string;
}

export function ArticleHero({ title, metadata, image }: ArticleHeroProps) {
  const { t } = useLang();

  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <p className={styles.breadcrumb}>{t('article.breadcrumb')}</p>
          <h1 className={styles.title}>{title}</h1>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={title}
            width={1200}
            height={600}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.metaRow}>
          <div className={styles.authorGroup}>
            <div className={styles.avatar}></div>
            <span className={styles.authorName}>{metadata.author}</span>
          </div>
          <div className={styles.timeGroup}>
            <span>{metadata.date}</span>
            <span className={styles.dot}>•</span>
            <span>{metadata.readTime}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
