'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShareModal } from './ShareModal';
import styles from './MobileEditorialSubNav.module.css';

import { useLang } from '@/lib/i18n';

/* ── Per-chapter reading progress (mirrors desktop sidebar logic) ── */
function useSectionProgress(activeId: string): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.getElementById(activeId);
      if (!el) { setProgress(0); return; }

      const navbarEl  = document.querySelector('[class*="Navbar-module"]') as HTMLElement | null;
      const subNavEl  = document.querySelector('[class*="MobileEditorialSubNav-module"]') as HTMLElement | null;
      const navbarH   = navbarEl  ? navbarEl.offsetHeight  : 72;
      const subNavH   = subNavEl  ? subNavEl.offsetHeight  : 48;
      const offset    = navbarH + subNavH;

      const rect          = el.getBoundingClientRect();
      const sectionTop    = window.scrollY + rect.top;
      const sectionHeight = el.offsetHeight;
      const scrolled      = window.scrollY - sectionTop + offset;
      const pct = Math.min(100, Math.max(0, (scrolled / sectionHeight) * 100));
      setProgress(pct);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [activeId]);

  return progress;
}

interface Chapter {
  id: string;
  number: string;
  shortTitleEn: string;
  shortTitleEs: string;
  fullTitleEn: string;
  fullTitleEs: string;
}

const CHAPTERS: Chapter[] = [
  {
    id: 'section-00',
    number: '00',
    shortTitleEn: 'EXECUTIVE SUMMARY',
    shortTitleEs: 'RESUMEN EJECUTIVO',
    fullTitleEn: 'Executive Summary',
    fullTitleEs: 'Resumen Ejecutivo',
  },
  {
    id: 'section-01',
    number: '01',
    shortTitleEn: 'OFFICIAL EVIDENCE',
    shortTitleEs: 'EVIDENCIA Y CASO',
    fullTitleEn: 'Official Evidence & Strategic Case',
    fullTitleEs: 'Evidencia Oficial y Caso Estratégico',
  },
  {
    id: 'section-02',
    number: '02',
    shortTitleEn: 'PROBLEM STATEMENT',
    shortTitleEs: 'PLANTEAMIENTO',
    fullTitleEn: 'Problem Statement & Decision Scope',
    fullTitleEs: 'Planteamiento del Problema y Alcance de Decisión',
  },
  {
    id: 'section-03',
    number: '03',
    shortTitleEn: 'DATA FOUNDATION',
    shortTitleEs: 'DATOS Y MEDALLION',
    fullTitleEn: 'Data Foundation & Medallion Architecture',
    fullTitleEs: 'Fundación de Datos y Medallion Architecture',
  },
  {
    id: 'section-04',
    number: '04',
    shortTitleEn: 'SEMANTIC METRICS',
    shortTitleEs: 'GOBERNANZA Y SEMÁNTICA',
    fullTitleEn: 'Governance & Semantic Models',
    fullTitleEs: 'Gobernanza y Semantic Models',
  },
  {
    id: 'section-05',
    number: '05',
    shortTitleEn: 'CONTROL TOWER',
    shortTitleEs: 'TORRE DE CONTROL',
    fullTitleEn: 'Power BI MRO Control Tower',
    fullTitleEs: 'Torre de Control MRO en Power BI',
  },
  {
    id: 'section-06',
    number: '06',
    shortTitleEn: 'APPLIED AI',
    shortTitleEs: 'IA APLICADA',
    fullTitleEn: 'Applied AI & Schedule Optimization',
    fullTitleEs: 'IA Aplicada y Optimización de Calendario',
  },
  {
    id: 'section-07',
    number: '07',
    shortTitleEn: 'VALUE REALIZATION',
    shortTitleEs: 'MATERIALIZACIÓN',
    fullTitleEn: 'Value Realization & ROI Model',
    fullTitleEs: 'Materialización de Valor y Fórmulas',
  },
  {
    id: 'section-08',
    number: '08',
    shortTitleEn: 'DELIVERY MODEL',
    shortTitleEs: 'MODELO 8D',
    fullTitleEn: 'EDIRA Delivery Model: 8D Framework',
    fullTitleEs: 'Modelo de Entrega EDIRA: Marco 8D',
  },
  {
    id: 'official-references',
    number: 'REF',
    shortTitleEn: 'REFERENCES',
    shortTitleEs: 'REFERENCIAS',
    fullTitleEn: 'Official References & Sources',
    fullTitleEs: 'Referencias Oficiales y Fuentes',
  },
];

export function MobileEditorialSubNav() {
  const { lang } = useLang();
  const isEs = lang === 'es';
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('section-01');
  const [copied, setCopied] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(activeId);

  // Scroll sync: update active chapter as user scrolls
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    CHAPTERS.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close on outside click/touch or Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    // Use capture phase so it fires before other handlers
    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('touchstart', handleClickOutside, true);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Close dropdown on scroll (UX: menu goes away when user starts scrolling)
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true, once: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const activeChapter = CHAPTERS.find((ch) => ch.id === activeId) || CHAPTERS[1];
  const activeShortTitle = isEs ? activeChapter.shortTitleEs : activeChapter.shortTitleEn;
  const activeFullTitle = isEs ? activeChapter.fullTitleEs : activeChapter.fullTitleEn;

  const handleSelectChapter = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    // Calculate combined header height dynamically
    const navbarEl = document.querySelector('[class*="Navbar-module"]') as HTMLElement | null;
    const subNavEl = navRef.current;
    const navbarH = navbarEl ? navbarEl.offsetHeight : 72;
    const subNavH = subNavEl ? subNavEl.offsetHeight : 48;
    const offset = navbarH + subNavH + 16; // 16px breathing room

    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleDownload = () => window.print();

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // fallthrough to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Clipboard error:', err);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={styles.subNav}
        aria-label={isEs ? 'Navegación editorial móvil' : 'Mobile editorial navigation'}
        style={{ position: 'sticky' }}
      >
        {/* ── Chapter Selector Trigger ── */}
        <button
          type="button"
          className={styles.triggerBtn}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={
            isEs
              ? `Capítulo ${activeChapter.number}: ${activeFullTitle}. Toca para navegar`
              : `Chapter ${activeChapter.number}: ${activeFullTitle}. Tap to navigate`
          }
        >
          <span className={styles.chapterNumber}>{activeChapter.number}</span>
          <span className={styles.chapterTitle}>{activeShortTitle}</span>
          <svg
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* ── Reading Progress Bar ── */}
        <div className={styles.progressTrack} aria-hidden="true">
          <motion.div
            className={styles.progressFill}
            animate={{ scaleX: progress / 100 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, mass: 0.5 }}
            style={{ transformOrigin: 'left center' }}
          />
        </div>

        {/* ── Full-Width Chapter Dropdown Panel ── */}
        {isOpen && (
          <div
            className={styles.dropdown}
            role="listbox"
            aria-label={isEs ? 'Lista de capítulos' : 'Chapter list'}
          >
            <ul className={styles.dropdownList}>
              {CHAPTERS.map((ch) => {
                const isActive = ch.id === activeId;
                const fullTitle = isEs ? ch.fullTitleEs : ch.fullTitleEn;
                return (
                  <li key={ch.id} role="none">
                    <button
                      type="button"
                      onClick={() => handleSelectChapter(ch.id)}
                      className={`${styles.dropdownItem} ${isActive ? styles.dropdownItemActive : ''}`}
                      role="option"
                      aria-selected={isActive}
                    >
                      <span className={styles.itemNumber}>{ch.number}</span>
                      <span className={styles.itemTitle}>{fullTitle}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* ── Action Buttons ── */}
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.downloadBtn}
            onClick={handleDownload}
            aria-label={isEs ? 'Descargar PDF' : 'Download PDF'}
          >
            <svg
              className={styles.downloadIcon}
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className={styles.downloadText}>{isEs ? 'Descargar' : 'Download'}</span>
          </button>

          <button
            type="button"
            className={styles.actionBtn}
            onClick={() => setIsShareOpen(true)}
            aria-label={isEs ? 'Compartir artículo' : 'Share article'}
            aria-haspopup="dialog"
          >
            {/* Share icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Dimmed backdrop behind dropdown */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* "Link copied" toast */}
      {copied && (
        <div className={styles.copiedToast} role="status" aria-live="polite">
          {isEs ? 'Enlace copiado' : 'Link copied'}
        </div>
      )}

      {/* Share modal — shared with desktop sidebar */}
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </>
  );
}
