'use client';

import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './Deliverables.module.css';

const ICONS = [
  (
    <svg key={0} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19a3.5 3.5 0 0 0 0-7h-.5a7.5 7.5 0 0 0-14 0h-.5a3.5 3.5 0 0 0 0 7" />
      <path d="M8 19v3" /><path d="M16 19v3" />
      <circle cx="8" cy="22" r="1" /><circle cx="16" cy="22" r="1" />
      <path d="M12 19v1" /><circle cx="12" cy="20" r="1" />
    </svg>
  ),
  (
    <svg key={1} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3" />
      <path d="M16.5 20c0-2.5-2-4.5-4.5-4.5S7.5 17.5 7.5 20" />
      <circle cx="5" cy="5" r="1" /><circle cx="19" cy="5" r="1" />
      <circle cx="5" cy="19" r="1" /><circle cx="19" cy="19" r="1" />
      <path d="m11 7-4-1" /><path d="m13 7 4-1" />
      <path d="m11 11-4 6" /><path d="m13 11 4 6" />
    </svg>
  ),
  (
    <svg key={2} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="15" width="4" height="6" rx="1" /><rect x="9" y="10" width="4" height="11" rx="1" />
      <rect x="15" y="4" width="4" height="17" rx="1" />
      <path d="M3 3v18h18" /><path d="m3 14 6-6 6 4 6-8" /><path d="M17 4h4v4" />
    </svg>
  ),
];

export function Deliverables() {
  const { t } = useLang();

  const cards = [
    { titleKey: 'deliverables.card0.title', descKey: 'deliverables.card0.desc' },
    { titleKey: 'deliverables.card1.title', descKey: 'deliverables.card1.desc' },
    { titleKey: 'deliverables.card2.title', descKey: 'deliverables.card2.desc' },
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t('deliverables.title.main')} <span className={styles.italic}>{t('deliverables.title.italic')}</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{ICONS[i]}</div>
              <h3 className={styles.cardTitle}>{t(card.titleKey)}</h3>
              <p className={styles.cardDescription}>{t(card.descKey)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
