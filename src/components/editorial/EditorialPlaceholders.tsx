import React from 'react';
import styles from './EditorialPlaceholders.module.css';

interface PlaceholderSection {
  id: string;
  number: string;
  title: string;
}

const PLACEHOLDER_SECTIONS: PlaceholderSection[] = [
  { id: 'section-03', number: '03', title: 'Data Foundation & Medallion Architecture' },
  { id: 'section-04', number: '04', title: 'Governance & Semantic Models' },
  { id: 'section-05', number: '05', title: 'Power BI MRO Control Tower' },
  { id: 'section-06', number: '06', title: 'Applied AI & Schedule Optimization' },
  { id: 'section-07', number: '07', title: 'Value Realization & Availability Formulas' },
];

export function EditorialPlaceholders() {
  return (
    <>
      {PLACEHOLDER_SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={styles.placeholder}
          aria-labelledby={`${section.id}-title`}
        >
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber} aria-hidden="true">
              {section.number}
            </span>
            <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
              {section.title}
            </h2>
            <div className={styles.divider} aria-hidden="true" />
          </div>

          {/* Placeholder body */}
          <div className={styles.body} aria-label={`Section ${section.number} content coming soon`}>
            <div className={styles.inner}>
              <span className={styles.comingSoonLabel}>SECTION IN PROGRESS</span>
              <p className={styles.comingSoonDesc}>
                This section is currently being authored and will be published in the next
                iteration of this executive report.
              </p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
