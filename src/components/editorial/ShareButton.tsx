'use client';

import React, { useState } from 'react';
import { ShareModal } from './ShareModal';
import styles from './ShareButton.module.css';

interface ShareButtonProps {
  /** Optional additional class name for the trigger button */
  className?: string;
  /** Compact mode: icon-only (no label). Default: false */
  iconOnly?: boolean;
}

export function ShareButton({ className, iconOnly = false }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`${styles.shareBtn} ${className ?? ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Share this paper"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        id="share-trigger"
      >
        {/* Share icon */}
        <svg
          width="14"
          height="14"
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

        {!iconOnly && <span className={styles.label}>Share</span>}
      </button>

      <ShareModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
