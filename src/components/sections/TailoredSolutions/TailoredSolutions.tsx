'use client';

import { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './TailoredSolutions.module.css';

const SOLUTIONS_KEYS = [
  { titleKey: 'tailored.item0.title', descKey: 'tailored.item0.desc', videoSrc: '/videos/Cloud Data and Infrastructure .webm' },
  { titleKey: 'tailored.item1.title', descKey: 'tailored.item1.desc', videoSrc: '/videos/Data Engineering &  Automations.webm' },
  { titleKey: 'tailored.item2.title', descKey: 'tailored.item2.desc', videoSrc: '/videos/Analytics_DecisionInteligence.webm' },
  { titleKey: 'tailored.item3.title', descKey: 'tailored.item3.desc', videoSrc: '/videos/Financial and Operational Analytics.webm' },
  { titleKey: 'tailored.item4.title', descKey: 'tailored.item4.desc', videoSrc: '/videos/Applied AI and Predictive Insights.webm' },
  { titleKey: 'tailored.item5.title', descKey: 'tailored.item5.desc', videoSrc: '/videos/Data_governance.webm' },
  { titleKey: 'tailored.item6.title', descKey: 'tailored.item6.desc', videoSrc: '/videos/Exec_advice.webm' },
  { titleKey: 'tailored.item7.title', descKey: 'tailored.item7.desc', videoSrc: '/videos/Strategic Drive.webm' },
];

export function TailoredSolutions() {
  const { t } = useLang();
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        setCardsPerPage(2);
      } else if (window.innerWidth >= 1024) {
        setCardsPerPage(4);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(SOLUTIONS_KEYS.length / cardsPerPage);
  const safeCurrentPage = totalPages > 0 ? Math.min(currentPage, totalPages - 1) : 0;

  const handleScroll = () => {
    if (!isMobile || !gridRef.current) return;
    const container = gridRef.current;
    if (container.children.length === 0) return;
    const childWidth = (container.children[0] as HTMLElement).offsetWidth;
    const index = Math.round(container.scrollLeft / (childWidth + 16));
    if (index !== safeCurrentPage && index >= 0 && index < totalPages) {
       if(index < SOLUTIONS_KEYS.length) {
          setCurrentPage(index);
       }
    }
  };

  const handleNext = () => {
    if (isMobile && gridRef.current) {
      const container = gridRef.current;
      const childWidth = (container.children[0] as HTMLElement).offsetWidth + 16;
      container.scrollBy({ left: childWidth, behavior: 'smooth' });
      return;
    }
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prev) => (Math.min(prev, totalPages - 1) + 1) % totalPages);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isMobile && gridRef.current) {
      const container = gridRef.current;
      const childWidth = (container.children[0] as HTMLElement).offsetWidth + 16;
      container.scrollBy({ left: -childWidth, behavior: 'smooth' });
      return;
    }
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prev) => (Math.min(prev, totalPages - 1) - 1 + totalPages) % totalPages);
      setIsAnimating(false);
    }, 300);
  };

  const currentSolutions = isMobile 
    ? SOLUTIONS_KEYS 
    : SOLUTIONS_KEYS.slice(
        safeCurrentPage * cardsPerPage,
        (safeCurrentPage + 1) * cardsPerPage
      );

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.italic}>{t('tailored.title.italic')}</span> {t('tailored.title.rest')}
          </h2>
          <p className={styles.subtitle}>
            {t('tailored.subtitle')}
          </p>
        </div>

        <div className={styles.carouselContainer}>
          <div className={`${styles.gridFade} ${!isMobile && isAnimating ? styles.animating : ''}`}>
            <div className={styles.grid} ref={gridRef} onScroll={handleScroll}>
              {currentSolutions.map((solution) => (
                <article 
                  key={solution.titleKey}
                  className={styles.card}
                >
                  <div className={styles.mediaContainer}>
                    <video 
                      src={solution.videoSrc} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      aria-hidden="true"
                      className={styles.video}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.cardTitle}>{t(solution.titleKey)}</h3>
                    <p className={styles.cardDescription}>{t(solution.descKey)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {!isMobile && (
            <div className="sr-only" aria-hidden="false">
              {SOLUTIONS_KEYS.filter((sol) => !currentSolutions.includes(sol)).map((solution) => (
                <article key={`ssr-${solution.titleKey}`}>
                  <h3>{t(solution.titleKey)}</h3>
                  <p>{t(solution.descKey)}</p>
                </article>
              ))}
            </div>
          )}

          <div className={styles.pagination}>
            <button 
              className={styles.navButton} 
              onClick={handlePrev}
              aria-label="Previous solutions"
            >
              <svg viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button 
              className={styles.navButton} 
              onClick={handleNext}
              aria-label="Next solutions"
            >
              <svg viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
