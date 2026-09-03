'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ShareModal.module.css';
import { useLang } from '@/lib/i18n';

/* ─────────────────────────────────────────────────────────────
   SOCIAL SHARE CONFIG
   ───────────────────────────────────────────────────────────── */
interface SocialLink {
  id: string;
  labelEn: string;
  labelEs: string;
  icon: React.ReactNode;
  getUrl: (url: string, title: string) => string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    labelEn: 'Share on LinkedIn',
    labelEs: 'Compartir en LinkedIn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    getUrl: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    id: 'twitter',
    labelEn: 'Share on X (Twitter)',
    labelEs: 'Compartir en X (Twitter)',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.733-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    getUrl: (url, title) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    id: 'facebook',
    labelEn: 'Share on Facebook',
    labelEs: 'Compartir en Facebook',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    getUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    id: 'whatsapp',
    labelEn: 'Share on WhatsApp',
    labelEs: 'Compartir en WhatsApp',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
    getUrl: (url, title) =>
      `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} — ${url}`)}`,
  },
];

/* ─────────────────────────────────────────────────────────────
   PROPS
   ───────────────────────────────────────────────────────────── */
export interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const { lang } = useLang();
  const isEs = lang === 'es';
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const backdropRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Grab URL + title once on open */
  useEffect(() => {
    if (isOpen) {
      setCurrentUrl(window.location.href);
      setPageTitle(document.title || 'EDIRA Research');
      setCopied(false);
    }
  }, [isOpen]);

  /* Escape key handler */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  /* Lock body scroll while modal is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* Click backdrop to close */
  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) onClose();
  }, [onClose]);

  /* Copy to clipboard */
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* fallback */
    }
  }, [currentUrl]);

  /* Open social share in popup */
  const handleSocial = useCallback((shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=460,noopener,noreferrer');
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={backdropRef}
          className={styles.backdrop}
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          aria-modal="true"
          role="dialog"
          aria-label={isEs ? 'Compartir este paper' : 'Share this paper'}
        >
          <motion.div
            ref={containerRef}
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28, mass: 0.8 }}
          >
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.headerIcon} aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
                <h2 className={styles.title}>{isEs ? 'Compartir este paper' : 'Share this paper'}</h2>
              </div>

              <button
                type="button"
                className={styles.closeBtn}
                onClick={onClose}
                aria-label={isEs ? 'Cerrar modal de compartir' : 'Close share modal'}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className={styles.divider} aria-hidden="true" />

            <p className={styles.sectionLabel}>{isEs ? 'Compartir en' : 'Share via'}</p>
            <div className={styles.socialRow} role="list">
              {SOCIAL_LINKS.map((s) => {
                const label = isEs ? s.labelEs : s.labelEn;
                return (
                  <button
                    key={s.id}
                    type="button"
                    className={styles.socialBtn}
                    onClick={() => handleSocial(s.getUrl(currentUrl, pageTitle))}
                    aria-label={label}
                    role="listitem"
                    title={label}
                  >
                    {s.icon}
                  </button>
                );
              })}
            </div>

            <p className={styles.sectionLabel} style={{ marginTop: 'var(--space-6)' }}>{isEs ? 'O copiar enlace' : 'Or copy link'}</p>
            <div className={styles.copyRow}>
              <input
                className={styles.urlInput}
                readOnly
                value={currentUrl}
                aria-label={isEs ? 'URL de la página' : 'Page URL'}
                onFocus={(e) => e.target.select()}
              />
              <button
                type="button"
                className={`${styles.copyBtn} ${copied ? styles.copyBtnSuccess : ''}`}
                onClick={handleCopy}
                aria-label={copied ? (isEs ? '¡Enlace copiado!' : 'Link copied!') : (isEs ? 'Copiar enlace' : 'Copy link')}
              >
                {copied ? (
                  <span className={styles.copiedContent}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {isEs ? 'COPIADO' : 'COPIED'}
                  </span>
                ) : (
                  isEs ? 'COPIAR' : 'COPY'
                )}
              </button>
            </div>

            {/* ── Footer watermark ── */}
            <p className={styles.footerNote}>
              {isEs
                ? 'EDIRA Research · White Paper de Inteligencia de Decisiones'
                : 'EDIRA Research · Decision Intelligence White Paper'}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
