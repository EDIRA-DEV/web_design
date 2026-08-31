'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './EditorialSidebar.module.css';

/* ─────────────────────────────────────────────────────────────
   SECTION REGISTRY
   Maps DOM section IDs to display metadata.
   IDs must match the `id` attributes on the <section> elements.
   ───────────────────────────────────────────────────────────── */
interface NavSection {
  id: string;
  number: string;
  title: string;
}

const SECTIONS: NavSection[] = [
  { id: 'section-01', number: '01', title: 'OFFICIAL EVIDENCE & STRATEGIC CASE' },
  { id: 'section-02', number: '02', title: 'PROBLEM STATEMENT & DECISION SCOPE' },
  { id: 'section-03', number: '03', title: 'DATA FOUNDATION & MEDALLION ARCHITECTURE' },
  { id: 'section-04', number: '04', title: 'GOVERNANCE & SEMANTIC MODELS' },
  { id: 'section-05', number: '05', title: 'POWER BI MRO CONTROL TOWER' },
  { id: 'section-06', number: '06', title: 'APPLIED AI & SCHEDULE OPTIMIZATION' },
  { id: 'section-07', number: '07', title: 'VALUE REALIZATION & FORMULAS' },
];

/* ─────────────────────────────────────────────────────────────
   SCROLL OFFSET — compensates for fixed 72px Navbar
   ───────────────────────────────────────────────────────────── */
const HEADER_OFFSET = 88; // 72px navbar + 16px breathing room

/* ─────────────────────────────────────────────────────────────
   useSectionProgress
   Computes 0–100 progress for a given section based on how far
   the viewport has scrolled through its height. Returns 0 for
   inactive sections and a live percentage for the active one.
   ───────────────────────────────────────────────────────────── */
function useSectionProgress(activeId: string): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.getElementById(activeId);
      if (!el) { setProgress(0); return; }

      const rect = el.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = el.offsetHeight;
      const scrolled = window.scrollY - sectionTop + HEADER_OFFSET;
      const pct = Math.min(100, Math.max(0, (scrolled / sectionHeight) * 100));
      setProgress(pct);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [activeId]);

  return progress;
}

/* ─────────────────────────────────────────────────────────────
   PROGRESS BAR — animated underline for the active nav item
   ───────────────────────────────────────────────────────────── */
function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className={styles.progressTrack} aria-hidden="true">
      <motion.div
        className={styles.progressFill}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20, mass: 0.5 }}
        style={{ transformOrigin: 'left center' }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export function EditorialSidebar() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);
  const progressForActive = useSectionProgress(activeId);
  const isClickScrolling = useRef(false);

  /* ── ScrollSpy via IntersectionObserver ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Skip observer updates while a click-scroll is in flight
        if (isClickScrolling.current) return;

        // Use the most recent intersecting entry with the largest intersection ratio
        let best: IntersectionObserverEntry | null = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        });

        if (best) {
          setActiveId((best as IntersectionObserverEntry).target.id);
        }
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── Smooth scroll on click with header offset compensation ── */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;

      // Mark as programmatic scroll to pause observer
      isClickScrolling.current = true;
      setActiveId(id);

      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });

      // Resume observer after the smooth scroll settles (~800ms)
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 900);
    },
    []
  );

  return (
    <aside className={styles.sidebar} aria-label="Report navigation">

      {/* ── Top label ── */}
      <p className={styles.reportLabel}>EDIRA RESEARCH</p>

      {/* ── Nav list ── */}
      <nav className={styles.nav} aria-label="Sections">
        {SECTIONS.map((section) => {
          const isActive = activeId === section.id;

          return (
            <div key={section.id} className={styles.navItem}>
              <a
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : styles.navLinkInactive}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {/* Number */}
                <span className={`${styles.navNumber} ${isActive ? styles.navNumberActive : ''}`}>
                  {section.number}
                </span>

                {/* Title */}
                <span className={styles.navTitle}>
                  {section.title}
                </span>
              </a>

              {/* Progress bar — only rendered for active item */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key={section.id + '-progress'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProgressBar progress={progressForActive} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Divider — hairline separator below each item */}
              <div className={styles.divider} aria-hidden="true" />
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
