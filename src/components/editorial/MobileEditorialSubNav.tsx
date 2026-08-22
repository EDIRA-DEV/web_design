'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './MobileEditorialSubNav.module.css';

interface Chapter {
  id: string;
  number: string;
  shortTitle: string;
  fullTitle: string;
}

const CHAPTERS: Chapter[] = [
  { id: 'section-00', number: '00', shortTitle: 'EXECUTIVE SUMMARY', fullTitle: 'Executive Summary' },
  { id: 'section-01', number: '01', shortTitle: 'EVIDENCE & CASE...', fullTitle: 'Official Evidence & Strategic Case' },
  { id: 'section-02', number: '02', shortTitle: 'PROBLEM STATEMENT...', fullTitle: 'Problem Statement & Decision Scope' },
  { id: 'section-03', number: '03', shortTitle: 'DATA FOUNDATION...', fullTitle: 'Data Foundation & Medallion Architecture' },
  { id: 'section-04', number: '04', shortTitle: 'GOVERNANCE & SEMANTIC...', fullTitle: 'Governance & Semantic Models' },
  { id: 'section-05', number: '05', shortTitle: 'POWER BI CONTROL...', fullTitle: 'Power BI MRO Control Tower' },
  { id: 'section-06', number: '06', shortTitle: 'APPLIED AI & SCHEDULE...', fullTitle: 'Applied AI & Schedule Optimization' },
  { id: 'section-07', number: '07', shortTitle: 'VALUE REALIZATION...', fullTitle: 'Value Realization & Availability Formulas' },
];

export function MobileEditorialSubNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('section-01');
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 4. Scroll Synchronization with IntersectionObserver
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

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Find active chapter details
  const activeChapter = CHAPTERS.find((ch) => ch.id === activeId) || CHAPTERS[1];

  const handleSelectChapter = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 130; // Navbar + SubNav height compensation
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleDownload = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareData = {
      title: document.title || 'Scaling LEAP MRO in Querétaro: A Decision Intelligence Blueprint | EDIRA',
      url: window.location.href,
    };

    if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard if user dismissed or native share aborted
      }
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch (err) {
        console.error('Clipboard copy error:', err);
      }
    }
  };

  return (
    <>
      <nav className={styles.subNav} aria-label="Mobile editorial navigation">
        {/* ── Left: Chapter Selector Trigger ── */}
        <div className={styles.dropdownWrapper} ref={dropdownRef}>
          <button
            type="button"
            className={styles.triggerBtn}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-label={`Current chapter: ${activeChapter.number} ${activeChapter.shortTitle}. Click to change chapter`}
          >
            <span className={styles.chapterNumber}>{activeChapter.number}</span>
            <span className={styles.chapterTitle}>{activeChapter.shortTitle}</span>
            <svg
              className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
              width="14"
              height="14"
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

          {/* ── Floating Dropdown Menu ── */}
          {isOpen && (
            <div className={styles.dropdown} role="listbox">
              <ul className={styles.dropdownList}>
                {CHAPTERS.map((ch) => {
                  const isActive = ch.id === activeId;
                  return (
                    <li key={ch.id}>
                      <button
                        type="button"
                        onClick={() => handleSelectChapter(ch.id)}
                        className={`${styles.dropdownItem} ${isActive ? styles.dropdownItemActive : ''}`}
                        role="option"
                        aria-selected={isActive}
                      >
                        <span className={styles.itemNumber}>{ch.number}</span>
                        <span className={styles.itemTitle}>{ch.fullTitle}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {/* ── Right: Action Buttons (Download & Share) ── */}
        <div className={styles.actions}>
          {/* Download Button (window.print) */}
          <button
            type="button"
            className={styles.actionBtn}
            onClick={handleDownload}
            aria-label="Download PDF"
            title="Download PDF"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2 2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>

          {/* Share Button (navigator.share / clipboard copy) */}
          <button
            type="button"
            className={styles.actionBtn}
            onClick={handleShare}
            aria-label="Share article"
            title="Share article"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>

          {/* Copied Toast Feedback */}
          {copied && (
            <div className={styles.copiedToast} role="status">
              Link copied!
            </div>
          )}
        </div>
      </nav>

      {/* Dimmed backdrop when dropdown is open */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
