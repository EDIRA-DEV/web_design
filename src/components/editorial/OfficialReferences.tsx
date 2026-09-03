'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { MaskRevealText, BlurRevealText } from './TextAnimations';
import styles from './OfficialReferences.module.css';

interface ReferenceSource {
  id: string;
  refIndex: string;
  author: string;
  year: string;
  title: string;
  sourceNote?: string;
  url: string;
  categoryEn: string;
  categoryEs: string;
}

const REFERENCES_DATA: ReferenceSource[] = [
  {
    id: 'ref-1',
    refIndex: '[1]',
    author: 'Safran',
    year: 'n.d.',
    title: 'Mexico: The number one employer in the Mexican aerospace industry',
    sourceNote: 'Retrieved August 15, 2026',
    url: 'https://www.safran-group.com/countries/mexico',
    categoryEn: 'Corporate Disclosures',
    categoryEs: 'Divulgación Corporativa',
  },
  {
    id: 'ref-2',
    refIndex: '[2]',
    author: 'Safran',
    year: '2024, July 24',
    title: 'Safran to strengthen its footprint in Querétaro (Mexico) with new engine maintenance and production capacities',
    sourceNote: 'Official Press Release',
    url: 'https://www.safran-group.com/pressroom/safran-strengthen-its-footprint-queretaro-mexico-new-engine-maintenance-and-production-capacities-2024-07-22',
    categoryEn: 'Facility Expansion',
    categoryEs: 'Expansión de Instalaciones',
  },
  {
    id: 'ref-3',
    refIndex: '[3]',
    author: 'Safran',
    year: '2026a, June 3',
    title: 'Exane CEO Conference',
    sourceNote: 'Investor presentation',
    url: 'https://www.safran-group.com/download/media/451166',
    categoryEn: 'Investor Relations',
    categoryEs: 'Relación con Inversionistas',
  },
  {
    id: 'ref-4',
    refIndex: '[4]',
    author: 'Safran',
    year: '2026b, July 1',
    title: 'Safran opens new maintenance shop in Querétaro (Mexico), strengthening its MRO hub in the Americas',
    sourceNote: 'Official Press Release',
    url: 'https://www.safran-group.com/pressroom/safran-opens-new-maintenance-shop-queretaro-mexico-strengthening-its-mro-hub-americas-2026-06-30',
    categoryEn: 'Shop Commissioning',
    categoryEs: 'Inauguración de Taller',
  },
  {
    id: 'ref-5',
    refIndex: '[5]',
    author: 'Safran',
    year: '2026c, February 13',
    title: 'Safran reports excellent financial performance in 2025 and raises its 2028 ambitions',
    sourceNote: 'Financial Disclosure',
    url: 'https://www.safran-group.com/pressroom/safran-reports-excellent-financial-performance-2025-and-raises-its-2028-ambitions-2026-02-13',
    categoryEn: 'Financial Performance',
    categoryEs: 'Desempeño Financiero',
  },
  {
    id: 'ref-6',
    refIndex: '[6]',
    author: 'Safran',
    year: '2026d, July 28',
    title: 'Safran reports its first-half 2026 results',
    sourceNote: 'H1 2026 Earnings Report',
    url: 'https://www.safran-group.com/pressroom/safran-reports-its-first-half-2026-results-2026-07-28',
    categoryEn: 'Earnings Release',
    categoryEs: 'Reporte de Resultados',
  },
  {
    id: 'ref-7',
    refIndex: '[7]',
    author: 'Safran',
    year: '2026e, July 2',
    title: 'Safran strengthens its footprint in Mexico with two new plants in Querétaro and Chihuahua',
    sourceNote: 'Industrial News',
    url: 'https://www.safran-group.com/news/safran-strengthens-its-footprint-mexico-two-new-plants-queretaro-and-chihuahua-2026-07-02',
    categoryEn: 'Industrial Footprint',
    categoryEs: 'Huella Industrial',
  },
];

export const OfficialReferences: React.FC = () => {
  const { lang, isEs } = useLanguage();

  const title = isEs ? 'Referencias Oficiales' : 'Official References';
  const lead = isEs
    ? 'Fuentes corporativas oficiales, reportes regulatorios, presentaciones a inversionistas y comunicados industriales primarios utilizados para fundamentar los modelos operativos y económicos de este white paper.'
    : 'Primary corporate releases, regulatory filings, investor presentations, and industrial disclosures utilized to ground the operational and economic models in this white paper.';
  const viewSourceText = isEs ? 'Ver fuente' : 'View source';

  return (
    <section 
      className={styles.section} 
      id="official-references" 
      aria-labelledby="official-references-title"
    >
      {/* ── Section Header ── */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber} aria-hidden="true">REF</span>
        <MaskRevealText
          key={`ref-title-${lang}`}
          as="h2"
          id="official-references-title"
          className={styles.sectionTitle}
          text={title}
          delay={60}
        />
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ── Lead Prose ── */}
      <BlurRevealText key={`ref-lead-${lang}`} as="p" className={styles.leadProse} delay={80}>
        {lead}
      </BlurRevealText>

      {/* ── References List ── */}
      <ol className={styles.list}>
        {REFERENCES_DATA.map((item) => (
          <li key={item.id} className={styles.card}>
            <div className={styles.refBadge} aria-hidden="true">
              {item.refIndex}
            </div>

            <div className={styles.content}>
              <div className={styles.metaRow}>
                <span className={styles.authorDate}>
                  {item.author}. ({item.year})
                </span>
                <span className={styles.categoryTag}>
                  {isEs ? item.categoryEs : item.categoryEn}
                </span>
              </div>

              <h3 className={styles.citationTitle}>
                {item.title}
              </h3>

              {item.sourceNote && (
                <p className={styles.citationDetails}>
                  {item.sourceNote}
                </p>
              )}

              <div className={styles.urlRow}>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.link}
                  aria-label={`${item.title} (${viewSourceText})`}
                >
                  <span>{item.url}</span>
                </a>
              </div>
            </div>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtn}
              aria-label={`${viewSourceText}: ${item.title}`}
            >
              <span>{viewSourceText}</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};
