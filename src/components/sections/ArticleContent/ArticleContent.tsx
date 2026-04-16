import React from 'react';
import { Container } from '@/components/ui/Container/Container';
import styles from './ArticleContent.module.css';

interface ArticleContentProps {
  children: React.ReactNode;
}

export function ArticleContent({ children }: ArticleContentProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          {children}
        </div>
      </Container>
    </section>
  );
}
