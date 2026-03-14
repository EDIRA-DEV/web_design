'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Features.module.css';
import { Container } from '@/components/ui/Container/Container';

const FEATURES = [
  {
    title: 'Accelerate Decision-Making',
    description: 'Move from fragmented information to clear, actionable insights.',
  },
  {
    title: 'Increase Operational Efficiency',
    description: 'Eliminate bottlenecks and automate critical processes.',
  },
  {
    title: 'Scale with Confidence',
    description: 'Build technology solutions that evolve alongside your business.',
  },
  {
    title: 'Optimize Financial Visibility',
    description: 'Get real-time clarity on your financial performance and margins.',
  },
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled into the container
      const scrollableDistance = height - windowHeight;
      if (scrollableDistance <= 0) return;
      
      let progress = -top / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      const itemsCount = FEATURES.length;
      const index = Math.min(
        Math.floor(progress * itemsCount),
        itemsCount - 1
      );
      
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.stickyContent}>
        <Container className={styles.container}>
          <div className={styles.grid}>
            
            {/* Left Column - Content */}
            <div className={styles.contentCol}>
              <h2 className={styles.title}>
                Built for <br />
                Measurable <br />
                <span className={styles.italic}>Impact.</span>
              </h2>
              
              <div className={styles.list}>
                {FEATURES.map((feature, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div 
                      key={index} 
                      className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                    >
                      <h3 className={styles.itemTitle}>{feature.title}</h3>
                      <div className={styles.itemDescriptionWrapper}>
                        <div>
                          <p className={styles.itemDescription}>
                            {feature.description}
                          </p>
                          <div className={styles.learnMore}>
                            Learn more <span>›</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Media */}
            <div className={styles.mediaCol}>
              <div className={styles.videoWrapper}>
                <video 
                  src="/videos/accelerate-decision-making.webm" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className={styles.video}
                />
              </div>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
