import React from 'react';
import Image from 'next/image';
import styles from './EditorialHero.module.css';
import { MetricStrip } from './MetricStrip';

export function EditorialHero() {
  return (
    <header className={styles.hero}>
      {/* ── Eyebrow ── */}
      <div className={styles.eyebrow} aria-label="Publication metadata">
        <span className={styles.eyebrowDot} aria-hidden="true" />
        <p className={styles.eyebrowText}>
          EDIRA EXECUTIVE INSIGHT // WHITE PAPER — AEROSPACE MRO // AUGUST 2026
        </p>
      </div>

      {/* ── H1 ── */}
      <h1 className={styles.title}>
        Scaling LEAP MRO in Querétaro: A{' '}
        <em className={styles.titleAccent}>Decision Intelligence</em>{' '}
        Blueprint for Capacity, Throughput, and Value Realization
      </h1>

      {/* ── Hero Turbine Image ── */}
      <figure className={styles.heroFigure}>
        <Image
          src="/images/insights/leap-turbine-hero.png"
          alt="LEAP turbine core inside the Querétaro MRO facility — cinematic wide shot"
          width={1700}
          height={728}
          className={styles.heroImage}
          priority
        />
      </figure>

      {/* ── 4-Metric Strip (animated count-up) ── */}
      <MetricStrip />
    </header>
  );
}
