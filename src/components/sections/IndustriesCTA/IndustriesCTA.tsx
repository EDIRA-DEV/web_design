'use client';

import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './IndustriesCTA.module.css';

export function IndustriesCTA() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h2 className={styles.title}>{t('industries.cta.title')}</h2>
        
        <div className={styles.videoWrapper}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.video}
          >
            <source src="/videos/Ready to drive Transformation in your Industry_.webm" type="video/webm" />
          </video>
        </div>
      </Container>
    </section>
  );
}
