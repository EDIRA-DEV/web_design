'use client';

import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './AboutUsTeam.module.css';

export function AboutUsTeam() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('aboutUsTeam.title')}</h2>
          <p className={styles.subtitle}>{t('aboutUsTeam.subtitle')}</p>
        </div>
      </Container>

      <div className={styles.videoWrapper}>
        <video autoPlay loop muted playsInline className={styles.video}>
          <source src="/videos/edira_team.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}
