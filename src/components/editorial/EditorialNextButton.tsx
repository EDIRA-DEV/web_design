'use client';

import React from 'react';
import styles from './EditorialNextButton.module.css';
import { useLang } from '@/lib/i18n';

interface EditorialNextButtonProps {
  href?: string;
  labelEn?: string;
  labelEs?: string;
  label?: string;
}

export function EditorialNextButton({
  href = '#section-02',
  labelEn = 'Next',
  labelEs = 'Siguiente',
  label,
}: EditorialNextButtonProps) {
  const { lang } = useLang();
  const isEs = lang === 'es';
  const displayLabel = label || (isEs ? labelEs : labelEn);

  return (
    <footer className={styles.footer}>
      <a
        href={href}
        className={styles.nextBtn}
        aria-label={isEs ? `Continuar a ${displayLabel}` : `Continue to ${displayLabel}`}
      >
        <span>{displayLabel}</span>
        <svg
          className={styles.arrow}
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
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </footer>
  );
}
