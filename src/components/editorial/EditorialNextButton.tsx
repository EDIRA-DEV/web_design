import React from 'react';
import styles from './EditorialNextButton.module.css';

interface EditorialNextButtonProps {
  href?: string;
  label?: string;
}

export function EditorialNextButton({
  href = '#section-02',
  label = 'Next',
}: EditorialNextButtonProps) {
  return (
    <footer className={styles.footer}>
      <a href={href} className={styles.nextBtn} aria-label={`Continue to ${label}`}>
        <span>{label}</span>
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
