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

/* ─────────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────────── */
interface ChartMetric {
  colTitle: string;
  baseLabel: string;
  baseValue: number;
  targetLabel: string;
  targetValue: number;
  growthTag: string;
}

const CHART_H = 180; // px — fixed canvas height

const METRICS: ChartMetric[] = [
  {
    colTitle: 'Annual LEAP\nShop Visits',
    baseLabel: 'Implied Prior',
    baseValue: 200,
    targetLabel: '2030 Target',
    targetValue: 350,
    growthTag: '+75% Implied',
  },
  {
    colTitle: 'SAESA\nWorkforce',
    baseLabel: 'Current',
    baseValue: 1450,
    targetLabel: '2030 Target',
    targetValue: 2000,
    growthTag: '+38% Planned',
  },
  {
    colTitle: 'LEAP Fleet\nin Service',
    baseLabel: 'Current',
    baseValue: 10000,
    targetLabel: '2030 Est.',
    targetValue: 20000,
    growthTag: '~2× Fleet',
  },
];

const GRIDLINE_PCTS = [75, 50, 25];

/* ─────────────────────────────────────────────────────────────
   PublicSignalsChart

   SCROLL-DRIVEN animation — every property is a pure function
   of the user's current scroll position:

   scrollProgress = 0  →  chart just enters the bottom of viewport
   scrollProgress = 1  →  chart just exits the top of viewport

   The user's scroll directly drives:
     • Bar heights (0px → maxPx)
     • Animated counter values (0 → finalValue)
     • Label / growth-tag opacity (0 → 1)

   Throttled with requestAnimationFrame to avoid jank.
   ───────────────────────────────────────────────────────────── */
export function PublicSignalsChart() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef    = useRef<number | null>(null);

  /* ── Compute scroll progress ── */
  const computeProgress = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const rect      = el.getBoundingClientRect();
    const viewportH = window.innerHeight;

    /*
     * progress = 0  →  chart enters from viewport bottom (rect.top = viewportH)
     * progress = 1  →  chart top reaches viewport top  (rect.top = 0)
     *                  i.e. the chart is about to START exiting the viewport.
     *
     * completeAt = viewportH — the exact scroll distance the chart travels
     * from "just entering" to "top aligned with viewport top".
     *
     * Timeline:
     *   traveled = 0          → rect.top = viewportH   (chart entering)
     *   traveled = viewportH  → rect.top = 0            (bars at max, chart still visible)
     *   traveled > viewportH  → progress stays at 1     (chart exiting, bars pinned at max)
     */
    const traveled   = viewportH - rect.top;
    const completeAt = viewportH; // bars reach max when chart top hits viewport top

    const p = clamp01(traveled / completeAt);
    // Debug: remove after confirming animation works
    if (typeof window !== 'undefined') {
      (window as Window & { __chartProg?: number }).__chartProg = p;
    }
    setScrollProgress(p);
  }, []);

  /* ── Scroll listener (rAF-throttled, passive) ── */
  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(computeProgress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    computeProgress(); // seed on mount

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [computeProgress]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.ambientGlow} aria-hidden="true" />

      <p className={styles.eyebrow}>
        PUBLIC SIGNALS POINT TO A MULTI-RESOURCE RAMP-UP
      </p>

      <div className={styles.chartGrid}>
        {METRICS.map((m, colIdx) => {
          /*
           * Column stagger: col 1 starts immediately, col 2 after 4%
           * of total scroll, col 3 after 8%.  All three finish at
           * progress = 1 so the data feels fully revealed simultaneously.
           */
          const colStart = colIdx * 0.04;
          const colProg  = clamp01(
            colStart < 1 ? (scrollProgress - colStart) / (1 - colStart) : scrollProgress
          );

          /*
           * Within-column stagger: left (base) bar leads right (target)
           * bar by ~5 scroll-percent, matching the requested 150ms visual delay.
           */
          const baseProg   = colProg;
          const targetProg = clamp01((colProg - 0.05) / 0.95);

          /* Bar heights in px */
          const maxBaseH  = Math.round((m.baseValue / m.targetValue) * CHART_H);
          const baseH     = Math.round(maxBaseH   * baseProg);
          const targetH   = Math.round(CHART_H    * targetProg);

          /* Animated counter values — pure function of scroll */
          const baseCount   = m.baseValue   * baseProg;
          const targetCount = m.targetValue * targetProg;

          /* Label opacity: fades in once bar is >8% grown */
          const baseAlpha   = clamp01((baseProg   - 0.08) / 0.12);
          const targetAlpha = clamp01((targetProg - 0.08) / 0.12);
          const tagAlpha    = clamp01((targetProg - 0.15) / 0.15);

          return (
            <div key={m.colTitle} className={styles.col}>

              {/* ── Chart canvas: gridlines + bars ── */}
              <div className={styles.canvas}>

                {/* Horizontal dashed gridlines */}
                <div className={styles.gridlines} aria-hidden="true">
                  {GRIDLINE_PCTS.map((pct) => (
                    <div
                      key={pct}
                      className={styles.gridline}
                      style={{ bottom: `${pct}%` }}
                    />
                  ))}
                </div>

                <div className={styles.barsRow}>

                  {/* ── LEFT: Base / Actual bar ── */}
                  <div className={styles.barSlot}>
                    {/*
                     * Value label tracks bar tip: bottom = barHeight + 6px.
                     * As bar grows, label rises with it.
                     * Opacity follows baseProg so it fades in with the bar.
                     */}
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
                      aria-label={`${m.baseLabel}: ${fmt(baseCount)}`}
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
                      aria-label={`${m.targetLabel}: ${fmt(targetCount)}`}
                    />
                  </div>

                </div>
              </div>

              {/* X-axis labels */}
              <div className={styles.xAxisRow}>
                <span className={styles.xLabel}>{m.baseLabel}</span>
                <span className={styles.xLabel}>{m.targetLabel}</span>
              </div>

              {/* Column title */}
              <p className={styles.colTitle}>
                {m.colTitle.split('\n').map((line, i, arr) => (
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
                {m.growthTag}
              </p>

            </div>
          );
        })}
      </div>

      <p className={styles.footnote}>
        Source: Compiled from Safran 2024–2026 Strategic Outlook and Querétaro Aerospace Cluster
        official statements. Growth rates derived from publicly available projections and capacity
        announcements.
      </p>
    </div>
  );
}
