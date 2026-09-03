'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './PublicSignalsChart.module.css';

/* ─────────────────────────────────────────────────────────────
   Helpers
   ───────────────────────────────────────────────────────────── */

/** En-US comma formatting, works at any intermediate value */
function fmt(n: number): string {
  return Math.round(n).toLocaleString('en-US');
}

/** Clamp a value between 0 and 1 */
function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

import { useLang } from '@/lib/i18n';

/* ─────────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────────── */
interface ChartMetric {
  colTitleEn: string;
  colTitleEs: string;
  baseLabelEn: string;
  baseLabelEs: string;
  baseValue: number;
  targetLabelEn: string;
  targetLabelEs: string;
  targetValue: number;
  growthTagEn: string;
  growthTagEs: string;
}

const CHART_H = 180; // px — fixed canvas height

const METRICS: ChartMetric[] = [
  {
    colTitleEn: 'Annual LEAP\nShop Visits',
    colTitleEs: 'Shop Visits LEAP\nAnuales',
    baseLabelEn: 'Prior Est.',
    baseLabelEs: 'Estimado Previo',
    baseValue: 200,
    targetLabelEn: '2030 Target',
    targetLabelEs: 'Meta 2030',
    targetValue: 350,
    growthTagEn: '+75% Implied',
    growthTagEs: '+75% Implícito',
  },
  {
    colTitleEn: 'SAESA\nWorkforce',
    colTitleEs: 'Fuerza Laboral\nSAESA',
    baseLabelEn: 'Current',
    baseLabelEs: 'Actual',
    baseValue: 1450,
    targetLabelEn: '2030 Target',
    targetLabelEs: 'Meta 2030',
    targetValue: 2000,
    growthTagEn: '+38% Planned',
    growthTagEs: '+38% Planificado',
  },
  {
    colTitleEn: 'LEAP Fleet\nin Service',
    colTitleEs: 'Flota LEAP\nen Servicio',
    baseLabelEn: 'Current',
    baseLabelEs: 'Actual',
    baseValue: 10000,
    targetLabelEn: '2030 Est.',
    targetLabelEs: 'Est. 2030',
    targetValue: 20000,
    growthTagEn: '~2× Fleet',
    growthTagEs: '~2× Flota',
  },
];

const GRIDLINE_PCTS = [75, 50, 25];

/* ─────────────────────────────────────────────────────────────
   PublicSignalsChart
   ───────────────────────────────────────────────────────────── */
export function PublicSignalsChart() {
  const { lang } = useLang();
  const isEs = lang === 'es';
  const [scrollProgress, setScrollProgress] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef    = useRef<number | null>(null);

  /* ── Compute scroll progress ── */
  const computeProgress = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const rect      = el.getBoundingClientRect();
    const viewportH = window.innerHeight;

    const navbarEl  = document.querySelector('[class*="Navbar-module"]') as HTMLElement | null;
    const subNavEl  = document.querySelector('[class*="MobileEditorialSubNav-module"]') as HTMLElement | null;
    const navbarH   = navbarEl ? navbarEl.offsetHeight : 72;
    const subNavH   = (subNavEl && subNavEl.offsetHeight > 0) ? subNavEl.offsetHeight : 0;
    const headerOffset = navbarH + subNavH;

    const usableH    = viewportH - headerOffset;
    const traveled   = viewportH - rect.top;
    const completeAt = usableH * 0.55; 

    const raw = traveled / completeAt;
    setScrollProgress(clamp01(raw));
  }, []);

  /* ── Scroll listener (rAF-throttled, passive) ── */
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(computeProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    computeProgress(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [computeProgress]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.ambientGlow} aria-hidden="true" />

      <p className={styles.eyebrow}>
        {isEs
          ? 'LAS SEÑALES PÚBLICAS INDICAN UN RAMP-UP MULTI-RECURSO'
          : 'PUBLIC SIGNALS INDICATE MULTI-RESOURCE RAMP-UP'}
      </p>

      <div className={styles.chartGrid}>
        {METRICS.map((m, colIdx) => {
          const colStart = colIdx * 0.04;
          const colProg  = clamp01(
            colStart < 1 ? (scrollProgress - colStart) / (1 - colStart) : scrollProgress
          );

          const baseProg   = colProg;
          const targetProg = clamp01((colProg - 0.05) / 0.95);

          const maxBaseH  = Math.round((m.baseValue / m.targetValue) * CHART_H);
          const baseH     = Math.round(maxBaseH   * baseProg);
          const targetH   = Math.round(CHART_H    * targetProg);

          const baseCount   = m.baseValue   * baseProg;
          const targetCount = m.targetValue * targetProg;

          const baseAlpha   = clamp01((baseProg   - 0.08) / 0.12);
          const targetAlpha = clamp01((targetProg - 0.08) / 0.12);
          const tagAlpha    = clamp01((targetProg - 0.15) / 0.15);

          const colTitle = isEs ? m.colTitleEs : m.colTitleEn;
          const baseLabel = isEs ? m.baseLabelEs : m.baseLabelEn;
          const targetLabel = isEs ? m.targetLabelEs : m.targetLabelEn;
          const growthTag = isEs ? m.growthTagEs : m.growthTagEn;

          return (
            <div key={m.colTitleEn} className={styles.col}>

              {/* ── Chart canvas: gridlines + bars ── */}
              <div className={styles.canvasArea} style={{ height: `${CHART_H}px` }}>

                <div className={styles.gridlines} aria-hidden="true">
                  {GRIDLINE_PCTS.map((pct) => (
                    <div
                      key={pct}
                      className={styles.gridline}
                      style={{ bottom: `${(pct / 100) * CHART_H}px` }}
                    />
                  ))}
                </div>

                <div className={styles.barsRow}>

                  {/* ── LEFT: Base / Actual bar ── */}
                  <div className={styles.barSlot}>
                    <span
                      className={styles.barVal}
                      style={{
                        bottom: `${baseH + 6}px`,
                        opacity: baseAlpha,
                      }}
                    >
                      {fmt(baseCount)}
                    </span>

                    <div
                      className={`${styles.bar} ${styles.barBase}`}
                      style={{ height: `${baseH}px` }}
                      role="img"
                      aria-label={`${baseLabel}: ${fmt(baseCount)}`}
                    />
                  </div>

                  {/* ── RIGHT: Target / 2030 bar ── */}
                  <div className={styles.barSlot}>
                    <span
                      className={styles.barVal}
                      style={{
                        bottom: `${targetH + 6}px`,
                        opacity: targetAlpha,
                      }}
                    >
                      {fmt(targetCount)}
                    </span>

                    <div
                      className={`${styles.bar} ${styles.barTarget}`}
                      style={{ height: `${targetH}px` }}
                      role="img"
                      aria-label={`${targetLabel}: ${fmt(targetCount)}`}
                    />
                  </div>

                </div>
              </div>

              {/* X-axis labels */}
              <div className={styles.xAxisRow}>
                <span className={styles.xLabel}>{baseLabel}</span>
                <span className={styles.xLabel}>{targetLabel}</span>
              </div>

              {/* Column title */}
              <p className={styles.colTitle}>
                {colTitle.split('\n').map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>

              {/* Growth tag — fades in after target bar is partly grown */}
              <p
                className={styles.growthTag}
                style={{ opacity: tagAlpha }}
              >
                {growthTag}
              </p>

            </div>
          );
        })}
      </div>

      <p className={styles.footnote}>
        {isEs
          ? 'Fuente: Compilado del Panorama Estratégico 2024–2026 de Safran y declaraciones oficiales del Clúster Aeroespacial de Querétaro. Tasas de crecimiento derivadas de proyecciones y anuncios de capacidad de acceso público.'
          : 'Source: Compiled from Safran 2024–2026 Strategic Outlook and official disclosures from the Querétaro Aerospace Cluster. Growth rates derived from publicly available capacity announcements and projections.'}
      </p>
    </div>
  );
}
