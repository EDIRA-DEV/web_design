'use client';

import React from 'react';
import styles from './Section00ExecutiveSummary.module.css';
import { useLang } from '@/lib/i18n';

export function Section00ExecutiveSummary() {
  const { lang } = useLang();
  const isEs = lang === 'es';

  return (
    <section id="section-00" className={styles.section} aria-labelledby="section-00-title">
      {/* ── Section Header ── */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber} aria-hidden="true">00</span>
        <h2 id="section-00-title" className={styles.sectionTitle}>
          {isEs ? 'Resumen Ejecutivo' : 'Executive Summary'}
        </h2>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ── Lead Paragraph ── */}
      <p className={styles.lead}>
        {isEs
          ? 'La rápida expansión del clúster aeroespacial de Querétaro exige un cambio de paradigma en las operaciones de Mantenimiento, Reparación y Overhaul (MRO). A medida que las cadenas de suministro globales se contraen y las shop visits de motores LEAP se incrementan, los modelos tradicionales de escalamiento resultan insuficientes para sostener el Throughput sin comprometer calidad ni costos.'
          : 'The rapid expansion of the Querétaro aerospace cluster demands a paradigm shift in Maintenance, Repair, and Overhaul (MRO) operations. As global supply chains tighten and LEAP engine shop visits surge, traditional scaling models are insufficient to maintain throughput without compromising quality or cost.'}
      </p>

      {/* ── Highlighted Quote / Callout ── */}
      <blockquote className={styles.quoteBlock}>
        {/* Violet left-edge accent */}
        <div className={styles.quoteAccent} aria-hidden="true" />
        <p className={styles.quoteText}>
          {isEs ? (
            <>&ldquo;La integración de Inteligencia de Decisiones no es una mejora operativa más; es la arquitectura fundamental requerida para materializar el valor total de la propuesta de US$140M de la instalación en Querétaro.&rdquo;</>
          ) : (
            <>&ldquo;The integration of Decision Intelligence is not merely an operational upgrade; it is the fundamental architecture required to realize the full US$140M value proposition of the Querétaro facility.&rdquo;</>
          )}
        </p>
      </blockquote>
    </section>
  );
}
