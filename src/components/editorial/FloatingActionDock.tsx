'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShareModal } from './ShareModal';
import styles from './FloatingActionDock.module.css';

import { useLang } from '@/lib/i18n';

export function FloatingActionDock() {
  const { lang } = useLang();
  const isEs = lang === 'es';
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/docs/EDIRA_Whitepaper_H2_2026.pdf';
    link.download = 'EDIRA_Whitepaper_H2_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.div
        className={styles.dockWrapper}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24, delay: 0.2 }}
        aria-label={isEs ? 'Acciones del documento' : 'Document actions'}
        role="region"
      >
        {/* ── Bubble 1: Download full paper ── */}
        <button
          type="button"
          className={styles.bubbleBtn}
          onClick={handleDownload}
          aria-label={isEs ? 'Descargar paper completo' : 'Download full paper'}
        >
          <svg
            className={styles.bubbleIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span className={styles.bubbleText}>
            {isEs ? (
              <>
                <span>Descargar</span>
                <span>paper</span>
              </>
            ) : (
              <>
                <span>Download</span>
                <span>full paper</span>
              </>
            )}
          </span>
        </button>

        {/* ── Bubble 2: Share paper ── */}
        <button
          type="button"
          className={styles.bubbleBtn}
          onClick={() => setIsShareOpen(true)}
          aria-label={isEs ? 'Compartir paper' : 'Share paper'}
          aria-haspopup="dialog"
          aria-expanded={isShareOpen}
        >
          <svg
            className={styles.bubbleIcon}
            width="24"
            height="24"
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
          <span className={styles.bubbleText}>
            {isEs ? (
              <>
                <span>Compartir</span>
                <span>paper</span>
              </>
            ) : (
              <>
                <span>Share</span>
                <span>paper</span>
              </>
            )}
          </span>
        </button>
      </motion.div>

      {/* Share Modal Dialog */}
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </>
  );
}
