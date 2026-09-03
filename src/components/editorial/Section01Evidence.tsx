'use client';

import React from 'react';
import styles from './Section01Evidence.module.css';
import { PublicSignalsChart } from './PublicSignalsChart';
import { MaskRevealText, ScrambleText, BlurRevealText } from './TextAnimations';
import { useLang } from '@/lib/i18n';

interface RefItem {
  ref: string;
  textEn: string;
  textEs: string;
}

const REFERENCES: RefItem[] = [
  {
    ref: '[2]',
    textEn: 'Consolidated MRO footprint expansion to 50k sqm.',
    textEs: 'Expansión consolidada de la huella MRO a 50 mil m².',
  },
  {
    ref: '[4]',
    textEn: 'Workforce certification pipeline for LEAP-1A/1B variants.',
    textEs: 'Pipeline de certificación de fuerza laboral para variantes LEAP-1A/1B.',
  },
  {
    ref: '[5]',
    textEn: 'Test-cell throughput optimization via digital twin integration.',
    textEs: 'Optimización del Throughput en test-cell mediante integración de gemelo digital.',
  },
];

export function Section01Evidence() {
  const { lang } = useLang();
  const isEs = lang === 'es';

  return (
    <section id="section-01" className={styles.section} aria-labelledby="section-01-title">
      {/* ── Section Header ── */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber} aria-hidden="true">01</span>
        <MaskRevealText
          key={lang}
          as="h2"
          id="section-01-title"
          className={styles.sectionTitle}
          text={isEs ? 'Evidencia & Caso para el Cambio' : 'Evidence & Case for Change'}
          delay={80}
        />
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ── Asymmetric Grid: 5 | 7 ── */}
      <div className={styles.grid}>

        {/* ── LEFT COLUMN (5 cols) — Giant Quote + Thesis ── */}
        <div className={styles.leftCol}>
          <div className={styles.stickyWrap}>
            {/* Giant opening quotation mark */}
            <span className={styles.openQuote} aria-hidden="true">&ldquo;</span>

            {/* Strategic thesis with Blur Reveal Animation */}
            <BlurRevealText key={lang} as="p" className={styles.thesisText} delay={150}>
              {isEs
                ? 'El reto consiste en sincronizar demanda, capacidad nominal y efectiva, WIP, acceso a test-cell, competencias certificadas, refacciones, calidad y costo por servicio—antes de que el recurso restringido se convierta en un incumplimiento.'
                : 'The challenge is to synchronize demand, effective capacity, WIP, test-cell access, certified skills, parts, quality, and cost-to-serve—before the constrained resource becomes a missed commitment.'}
            </BlurRevealText>

            {/* Attribution */}
            <div className={styles.attribution}>
              <div className={styles.attributionBar} aria-hidden="true" />
              <p className={styles.attributionLabel}>
                {isEs ? (
                  <>TESIS ESTRATÉGICA<br />EDIRA</>
                ) : (
                  <>EDIRA STRATEGIC<br />THESIS</>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN (7 cols) — Essay + Metrics Card + Refs ── */}
        <div className={styles.rightCol}>

          {/* Essay eyebrow with Scramble decoder + display headline */}
          <div className={styles.essayHeader}>
            <p className={styles.essayEyebrow}>
              <ScrambleText
                key={lang}
                text={isEs ? '01 // EVIDENCIA OFICIAL' : '01 // OFFICIAL EVIDENCE'}
                triggerOnView
              />
            </p>
            <h3 className={styles.essayTitle}>
              {isEs ? 'La Escala de la Escalada' : 'The Scale of Escalation'}
            </h3>
          </div>

          {/* Drop-cap essay body */}
          <div className={styles.essayBody}>
            <p className={styles.dropCap}>
              {isEs
                ? 'El sostenimiento de operaciones en las redes modernas de mantenimiento, reparación y Overhaul (MRO) aeroespacial ha superado las capacidades de la planificación en hojas de cálculo heredadas y el despacho reactivo. A medida que las flotas globales crecen y los sistemas de propulsión de nueva generación introducen una complejidad técnica sin precedentes, la fricción operativa al interior de los entornos de planta se multiplica de forma exponencial.'
                : 'Sustaining operations in modern aerospace maintenance, repair, and overhaul (MRO) networks has moved beyond the capabilities of legacy spreadsheet planning and reactive dispatching. As global fleet sizes expand and next-generation propulsion systems introduce unprecedented technical complexity, the operational friction within shop floor environments multiplies exponentially.'}
            </p>
            <p className={styles.para}>
              {isEs
                ? 'Nuestro análisis en proveedores MRO de primer nivel revela una divergencia sistémica entre la capacidad planificada y el Throughput efectivo. Esta brecha no obedece a falta de esfuerzo, sino a un déficit en la toma de decisiones sincronizada. Cuando el retraso de una sola refacción puede desencadenar la entrega fallida de un motor, la visibilidad de toda la cadena de valor se vuelve innegociable.'
                : 'Our analysis across tier-one MRO providers reveals a systemic divergence between planned capacity and effective throughput. This gap is not driven by a lack of effort, but by a deficit in synchronized decision-making. When a single part delay can cascade into a missed engine delivery, visibility across the entire value stream becomes non-negotiable.'}
            </p>
          </div>

          {/* ── Public Signals Bar Chart ── */}
          <PublicSignalsChart />

          {/* ── Reference List ── */}
          <div className={styles.refList}>
            <p className={styles.refListTitle}>
              {isEs ? 'Indicadores Oficiales y Derivaciones' : 'Official Indicators and Derivations'}
            </p>
            <ul className={styles.refItems}>
              {REFERENCES.map((r) => (
                <li key={r.ref} className={styles.refItem}>
                  <span className={styles.refNumber}>{r.ref}</span>
                  <span className={styles.refText}>{isEs ? r.textEs : r.textEn}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
