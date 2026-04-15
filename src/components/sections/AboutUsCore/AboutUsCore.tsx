'use client';

import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './AboutUsCore.module.css';

const CARDS = [
  {
    labelKey: 'aboutUsCore.mission.label',
    descKey: 'aboutUsCore.mission.desc',
    webmSrc: '/images/about-us/Mission.webm',
  },
  {
    labelKey: 'aboutUsCore.vision.label',
    descKey: 'aboutUsCore.vision.desc',
    webmSrc: '/images/about-us/Vision.webm',
  },
];

export function AboutUsCore() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{t('aboutUsCore.title')}</h2>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <div key={card.labelKey} className={styles.card}>
              <div className={styles.mediaWrapper}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.video}
                >
                  <source src={card.webmSrc} type="video/webm" />
                </video>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardLabel}>{t(card.labelKey)}</h3>
                <p className={styles.cardDesc}>{t(card.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
