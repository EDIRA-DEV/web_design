'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './EditorialSidebar.module.css';

import { useLang } from '@/lib/i18n';

/* ─────────────────────────────────────────────────────────────
   SECTION REGISTRY
   Maps DOM section IDs to display metadata.
   IDs must match the `id` attributes on the <section> elements.
   ───────────────────────────────────────────────────────────── */
interface NavSection {
  id: string;
  number: string;
  titleEn: string;
  titleEs: string;
}

const SECTIONS: NavSection[] = [
  { id: 'section-00', number: '00', titleEn: 'EXECUTIVE SUMMARY', titleEs: 'RESUMEN EJECUTIVO' },
  { id: 'section-01', number: '01', titleEn: 'OFFICIAL EVIDENCE & STRATEGIC CASE', titleEs: 'EVIDENCIA OFICIAL Y CASO ESTRATÉGICO' },
  { id: 'section-02', number: '02', titleEn: 'PROBLEM STATEMENT & DECISION SCOPE', titleEs: 'PLANTEAMIENTO DEL PROBLEMA Y ALCANCE DE DECISIÓN' },
  { id: 'section-03', number: '03', titleEn: 'DATA FOUNDATION & MEDALLION ARCHITECTURE', titleEs: 'FUNDACIÓN DE DATOS Y MEDALLION ARCHITECTURE' },
  { id: 'section-04', number: '04', titleEn: 'GOVERNANCE & SEMANTIC MODELS', titleEs: 'GOBERNANZA Y SEMANTIC MODELS' },
  { id: 'section-05', number: '05', titleEn: 'POWER BI MRO CONTROL TOWER', titleEs: 'TORRE DE CONTROL MRO EN POWER BI' },
  { id: 'section-06', number: '06', titleEn: 'APPLIED AI & SCHEDULE OPTIMIZATION', titleEs: 'IA APLICADA Y OPTIMIZACIÓN DE CALENDARIO' },
  { id: 'section-07', number: '07', titleEn: 'VALUE REALIZATION & FORMULAS', titleEs: 'MATERIALIZACIÓN DE VALOR Y FÓRMULAS' },
  { id: 'section-08', number: '08', titleEn: 'EDIRA DELIVERY MODEL (8D)', titleEs: 'MODELO DE ENTREGA EDIRA (8D)' },
  { id: 'official-references', number: 'REF', titleEn: 'OFFICIAL REFERENCES', titleEs: 'REFERENCIAS OFICIALES' },
];

/* ─────────────────────────────────────────────────────────────
   SCROLL OFFSET — compensates for fixed 72px Navbar
   ───────────────────────────────────────────────────────────── */
const HEADER_OFFSET = 88; // 72px navbar + 16px breathing room

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export function EditorialSidebar() {
  const { lang } = useLang();
  const isEs = lang === 'es';
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);
  const [progress, setProgress] = useState<number>(0);
  const isClickScrolling = useRef(false);

  /* ── Synchronized ScrollSpy & Progress Tracker ── */
  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (isClickScrolling.current) return;

      const readingLine = HEADER_OFFSET + 32;
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      // If at bottom of page, anchor to final section at 100%
      if (scrollY + windowH >= docH - 50) {
        setActiveId(SECTIONS[SECTIONS.length - 1].id);
        setProgress(100);
        return;
      }

      // Check if user is in Hero section above section-00
      const firstEl = document.getElementById(SECTIONS[0].id);
      if (firstEl) {
        const firstRect = firstEl.getBoundingClientRect();
        if (firstRect.top > readingLine) {
          setActiveId(SECTIONS[0].id);
          setProgress(0);
          return;
        }
      }

      // Find the active section currently spanning the reading line
      for (let i = 0; i < SECTIONS.length; i++) {
        const sec = SECTIONS[i];
        const el = document.getElementById(sec.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const isCurrent =
          (rect.top <= readingLine && rect.bottom > readingLine) ||
          (i === SECTIONS.length - 1 && rect.top <= readingLine);

        if (isCurrent) {
          setActiveId(sec.id);
          const sectionHeight = Math.max(el.offsetHeight, 1);
          const scrolledInSection = readingLine - rect.top;
          const pct = Math.min(100, Math.max(0, (scrolledInSection / sectionHeight) * 100));
          setProgress(pct);
          break;
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
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
      setProgress(0);

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
    <aside className={styles.sidebar} aria-label={isEs ? 'Navegación del reporte' : 'Report navigation'}>

      {/* ── Top label ── */}
      <p className={styles.reportLabel}>EDIRA RESEARCH</p>

      {/* ── Nav list ── */}
      <nav className={styles.nav} aria-label={isEs ? 'Secciones' : 'Sections'}>
        {SECTIONS.map((section) => {
          const isActive = activeId === section.id;
          const sectionTitle = isEs ? section.titleEs : section.titleEn;

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
                  {sectionTitle}
                </span>
              </a>

              {/* Progress bar — animated violet bar when active, hairline divider when inactive */}
              {isActive ? (
                <div className={styles.progressTrack} aria-hidden="true">
                  <motion.div
                    className={styles.progressFill}
                    style={{ transformOrigin: 'left center' }}
                    animate={{ scaleX: progress / 100 }}
                    transition={{ ease: 'easeOut', duration: 0.08 }}
                  />
                </div>
              ) : (
                <div className={styles.divider} aria-hidden="true" />
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
