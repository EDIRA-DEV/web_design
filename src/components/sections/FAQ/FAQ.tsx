'use client';

import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './FAQ.module.css';

const FAQ_KEYS = [
  { id: 'faq-servicios-b2b', qKey: 'faq.q0.question', aKey: 'faq.q0.answer' },
  { id: 'faq-cobertura-mexico', qKey: 'faq.q1.question', aKey: 'faq.q1.answer' },
  { id: 'faq-ingenieria-gobernanza-datos', qKey: 'faq.q2.question', aKey: 'faq.q2.answer' },
  { id: 'faq-integracion-erp-bi-cloud', qKey: 'faq.q3.question', aKey: 'faq.q3.answer' },
  { id: 'faq-diagnostico-ejecutivo', qKey: 'faq.q4.question', aKey: 'faq.q4.answer' },
] as const;

export function FAQ() {
  const { t } = useLang();

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-heading">
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>{t('faq.eyebrow')}</p>
            <h2 className={styles.title} id="faq-heading">
              {t('faq.title1')} <em className={styles.italic}>{t('faq.title.italic')}</em>
            </h2>
            <p className={styles.subtitle}>{t('faq.subtitle')}</p>
          </div>

          <div className={styles.accordionGroup}>
            {FAQ_KEYS.map((item, index) => (
              <details
                key={item.id}
                id={item.id}
                name="edira-faq"
                className={styles.item}
                open={index === 0}
              >
                <summary className={styles.summary}>{t(item.qKey)}</summary>
                <div className={styles.answerWrapper}>
                  <p className={styles.answer}>{t(item.aKey)}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

