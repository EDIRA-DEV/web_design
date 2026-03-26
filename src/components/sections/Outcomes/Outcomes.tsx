'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './Outcomes.module.css';

export function Outcomes() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        
        <div className={styles.topSection}>
          <h2 className={styles.title}>
            {t('outcomes.title1')}<br />
            {t('outcomes.title2')} <span className={styles.italic}>{t('outcomes.title.italic')}</span>
          </h2>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageFade}></div>
          <Image
            src="/images/services_footer.png"
            alt="Services into Outcomes"
            width={1000}
            height={600}
            className={styles.image}
            priority={false}
          />
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.description}>{t('outcomes.desc')}</p>
        </div>

      </Container>
    </section>
  );
}
