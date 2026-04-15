'use client';

import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './AboutUsStory.module.css';

export function AboutUsStory() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>{t('aboutUsStory.title')}</h2>
          <p
            className={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: t('aboutUsStory.p1') }}
          />
          <p
            className={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: t('aboutUsStory.p2') }}
          />
        </div>
      </Container>

      <div className={styles.videoWrapper}>
        <video autoPlay loop muted playsInline className={styles.video}>
          <source src="/videos/about_us_edira_v2.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}
