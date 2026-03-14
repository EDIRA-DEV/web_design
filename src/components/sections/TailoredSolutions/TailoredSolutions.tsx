'use client';

import { Container } from '@/components/ui/Container/Container';
import styles from './TailoredSolutions.module.css';

const SOLUTIONS = [
  {
    title: 'Cloud Data Architecture & Infrastructure',
    description: 'Building modern data platforms for scalability and security.',
    videoSrc: '/videos/scale-with-confidence.webm',
  },
  {
    title: 'Data Engineering & Automations',
    description: 'Transform fragmented data into reliable, automated pipelines.',
    videoSrc: '/videos/increase-operational-efficiency.webm',
  },
  {
    title: 'Analytics & Decision Intelligence:',
    description: 'Real-time dashboards, KPI frameworks, and automated insights.',
    videoSrc: '/videos/optimize-financial-visibility.webm',
  },
];

export function TailoredSolutions() {

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.italic}>Tailored</span> Solutions
          </h2>
          <p className={styles.subtitle}>
            We craft personalized solutions that align with 
            your unique business challenges, ensuring 
            measurable impact and sustainable growth.
          </p>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.grid}>
            {SOLUTIONS.map((solution, index) => {
              return (
                <div 
                  key={index}
                  className={styles.card}
                >
                  <div className={styles.mediaContainer}>
                    <video 
                      src={solution.videoSrc} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className={styles.video}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.cardTitle}>{solution.title}</h3>
                    <p className={styles.cardDescription}>{solution.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
