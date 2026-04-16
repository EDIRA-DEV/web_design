'use client';


import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './HowWeWork.module.css';

export function HowWeWork() {
  const { t } = useLang();

  // Based on instructions, using placeholder icons assuming isometric ones aren't available exactly 
  // with those names. Or we use existing images that represent these phases.
  // Ownership -> Drive.png / Discover.png
  // Collaboration -> Develop.png / Deploy.png
  // Continuous Improvement -> Deliver.png / Design.png
  // I will use some of the nice ones. The prompt said "Ownership, Collaboration, Continuous Improvement".
  const features = [
    {
      id: 'card1',
      title: t('howWeWork.card1.title'),
      desc: t('howWeWork.card1.desc'),
      video: '/assets/careers/ownership.webm',
      gradientClass: styles.gradientOwnership,
    },
    {
      id: 'card2',
      title: t('howWeWork.card2.title'),
      desc: t('howWeWork.card2.desc'),
      video: '/assets/careers/collaboration.webm',
      gradientClass: styles.gradientCollaboration,
    },
    {
      id: 'card3',
      title: t('howWeWork.card3.title'),
      desc: t('howWeWork.card3.desc'),
      video: '/assets/careers/continous_improvement.webm',
      gradientClass: styles.gradientContinuous,
    },
  ];

  return (
    <section className={styles.section} id="how-we-work">
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.bold}>{t('howWeWork.title')}</span>{' '}
            <span className={styles.italic}>{t('howWeWork.title.italic')}</span>
          </h2>
          <p className={styles.subtitle}>{t('howWeWork.subtitle')}</p>
        </div>

        <div className={styles.cardsList}>
          {features.map((feature, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={feature.id} className={`${styles.card} ${isEven ? styles.cardReversed : ''}`}>
                <div className={`${styles.imageBox} ${feature.gradientClass}`}>
                  <video
                    src={feature.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDesc}>{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
