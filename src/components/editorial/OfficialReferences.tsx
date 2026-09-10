'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { MaskRevealText, BlurRevealText } from './TextAnimations';
import styles from './OfficialReferences.module.css';

interface ReferenceSource {
  id: string;
  refIndex: string;
  title: string;
  textEn: string;
  textEs: string;
  url: string;
  categoryEn: string;
  categoryEs: string;
}

const REFERENCES_DATA: ReferenceSource[] = [
  {
    id: 'ref-1',
    refIndex: '[1]',
    title: 'Safran to strengthen its footprint in Querétaro (Mexico) with new engine maintenance and production capacities',
    textEn: 'Safran, “Safran to strengthen its footprint in Querétaro (Mexico) with new engine maintenance and production capacities,” July 24, 2024, ',
    textEs: 'Safran, “Safran to strengthen its footprint in Querétaro (Mexico) with new engine maintenance and production capacities”, 24 de julio de 2024, ',
    url: 'https://www.safran-group.com/pressroom/safran-strengthen-its-footprint-queretaro-mexico-new-engine-maintenance-and-production-capacities-2024-07-22',
    categoryEn: 'Facility Expansion',
    categoryEs: 'Expansión de Instalaciones',
  },
  {
    id: 'ref-2',
    refIndex: '[2]',
    title: 'Safran opens new maintenance shop in Querétaro (Mexico), strengthening its MRO hub in the Americas',
    textEn: 'Safran, “Safran opens new maintenance shop in Querétaro (Mexico), strengthening its MRO hub in the Americas,” July 1, 2026, ',
    textEs: 'Safran, “Safran opens new maintenance shop in Querétaro (Mexico), strengthening its MRO hub in the Americas”, 1 de julio de 2026, ',
    url: 'https://www.safran-group.com/pressroom/safran-opens-new-maintenance-shop-queretaro-mexico-strengthening-its-mro-hub-americas-2026-06-30',
    categoryEn: 'Shop Commissioning',
    categoryEs: 'Inauguración de Taller',
  },
  {
    id: 'ref-3',
    refIndex: '[3]',
    title: 'Safran strengthens its footprint in Mexico with two new plants in Querétaro and Chihuahua',
    textEn: 'Safran, “Safran strengthens its footprint in Mexico with two new plants in Querétaro and Chihuahua,” July 2, 2026, ',
    textEs: 'Safran, “Safran strengthens its footprint in Mexico with two new plants in Querétaro and Chihuahua”, 2 de julio de 2026, ',
    url: 'https://www.safran-group.com/news/safran-strengthens-its-footprint-mexico-two-new-plants-queretaro-and-chihuahua-2026-07-02',
    categoryEn: 'Industrial Footprint',
    categoryEs: 'Huella Industrial',
  },
  {
    id: 'ref-4',
    refIndex: '[4]',
    title: 'Safran reports excellent financial performance in 2025 and raises its 2028 ambitions',
    textEn: 'Safran, “Safran reports excellent financial performance in 2025 and raises its 2028 ambitions,” February 13, 2026, ',
    textEs: 'Safran, “Safran reports excellent financial performance in 2025 and raises its 2028 ambitions”, 13 de febrero de 2026, ',
    url: 'https://www.safran-group.com/pressroom/safran-reports-excellent-financial-performance-2025-and-raises-its-2028-ambitions-2026-02-13',
    categoryEn: 'Financial Performance',
    categoryEs: 'Desempeño Financiero',
  },
  {
    id: 'ref-5',
    refIndex: '[5]',
    title: 'Safran reports its first-half 2026 results',
    textEn: 'Safran, “Safran reports its first-half 2026 results,” July 28, 2026, ',
    textEs: 'Safran, “Safran reports its first-half 2026 results”, 28 de julio de 2026, ',
    url: 'https://www.safran-group.com/pressroom/safran-reports-its-first-half-2026-results-2026-07-28',
    categoryEn: 'Earnings Release',
    categoryEs: 'Reporte de Resultados',
  },
  {
    id: 'ref-6',
    refIndex: '[6]',
    title: 'Exane CEO Conference',
    textEn: 'Safran, “Exane CEO Conference” [Investor presentation], June 3, 2026, ',
    textEs: 'Safran, “Exane CEO Conference” [Presentación para inversionistas], 3 de junio de 2026, ',
    url: 'https://www.safran-group.com/download/media/451166',
    categoryEn: 'Investor Relations',
    categoryEs: 'Relación con Inversionistas',
  },
  {
    id: 'ref-7',
    refIndex: '[7]',
    title: 'Mexico: The number one employer in the Mexican aerospace industry',
    textEn: 'Safran, “Mexico: The number one employer in the Mexican aerospace industry,” accessed August 15, 2026, ',
    textEs: 'Safran, “Mexico: The number one employer in the Mexican aerospace industry”, consultado el 15 de agosto de 2026, ',
    url: 'https://www.safran-group.com/countries/mexico',
    categoryEn: 'Corporate Disclosures',
    categoryEs: 'Divulgación Corporativa',
  },
];

export const OfficialReferences: React.FC = () => {
  const { lang, isEs } = useLanguage();

  const title = isEs ? 'Notas finales' : 'Endnotes';
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
        {REFERENCES_DATA.map((item) => {
          const textBeforeUrl = isEs ? item.textEs : item.textEn;
          const category = isEs ? item.categoryEs : item.categoryEn;

          return (
            <li key={item.id} id={item.id} className={styles.card}>
              <div className={styles.refBadge} aria-hidden="true">
                {item.refIndex}
              </div>

              <div className={styles.content}>
                <div className={styles.metaRow}>
                  <span className={styles.categoryTag}>
                    {category}
                  </span>
                </div>

                <p className={styles.citationText}>
                  <span className={styles.citationProse}>{textBeforeUrl}</span>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.inlineLink}
                    aria-label={`${item.title} (${viewSourceText})`}
                  >
                    {item.url}
                  </a>
                </p>
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
          );
        })}
      </ol>
    </section>
  );
};
