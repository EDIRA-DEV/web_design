'use client';

import React, { useEffect, useState } from 'react';
import styles from './EditorialSidebar.module.css';

interface NavItem {
  id: string;
  number: string;
  line1: string;
  line2?: string;
  line3?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'section-01', number: '01', line1: 'Official Evidence', line2: '& Strategic Case' },
  { id: 'section-02', number: '02', line1: 'Problem Statement', line2: '& Decision Scope' },
  { id: 'section-03', number: '03', line1: 'Data Foundation &', line2: 'Medallion', line3: 'Architecture' },
  { id: 'section-04', number: '04', line1: 'Governance &', line2: 'Semantic Models' },
  { id: 'section-05', number: '05', line1: 'Power BI MRO', line2: 'Control Tower' },
  { id: 'section-06', number: '06', line1: 'Applied AI &', line2: 'Schedule', line3: 'Optimization' },
  { id: 'section-07', number: '07', line1: 'Value Realization', line2: '& Availability', line3: 'Formulas' },
];

export function EditorialSidebar() {
  const [activeSection, setActiveSection] = useState<string>('section-01');

  useEffect(() => {
    const sectionIds = ['section-00', 'section-01', 'section-02', 'section-03',
                        'section-04', 'section-05', 'section-06', 'section-07'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            // Only set nav active if it's section-01+
            if (id !== 'section-00') setActiveSection(id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <p className={styles.topLabel}>Executive Summary</p>
        <nav className={styles.nav} aria-label="Report sections">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : styles.navLinkInactive}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className={`${styles.navNumber} ${isActive ? styles.navNumberActive : ''}`}>
                  {item.number}
                </span>
                <span className={styles.navText}>
                  {item.line1}
                  {item.line2 && <><br />{item.line2}</>}
                  {item.line3 && <><br />{item.line3}</>}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className={styles.bottom}>
        <button onClick={handleDownloadPDF} className={styles.pdfBtn} type="button" aria-label="Download PDF">
          <span className={styles.pdfBtnLabel}>Download PDF</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
