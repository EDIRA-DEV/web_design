'use client';

import React from 'react';
import styles from './EditorialHero.module.css';
import { MetricStrip } from './MetricStrip';
import { MaskRevealText, ScrambleText, VioletShimmer } from './TextAnimations';
import { useLang } from '@/lib/i18n';

export function EditorialHero() {
  const { lang } = useLang();
  const isEs = lang === 'es';

  return (
    <header className={styles.hero}>
      {/* ── Eyebrow with Decoder Scramble Animation ── */}
      <div className={styles.eyebrow} aria-label="Publication metadata">
        <span className={styles.eyebrowDot} aria-hidden="true" />
        <p className={styles.eyebrowText}>
          <ScrambleText
            key={lang}
            text={
              isEs
                ? 'EDIRA EXECUTIVE INSIGHT // WHITE PAPER — AEROSPACE MRO // AGOSTO 2026'
                : 'EDIRA EXECUTIVE INSIGHT // WHITE PAPER — AEROSPACE MRO // AUGUST 2026'
            }
            triggerOnView
          />
        </p>
      </div>

      {/* ── H1 with Mask Reveal & Violet Shimmer on Decision Intelligence ── */}
      <MaskRevealText key={lang} as="h1" className={styles.title} delay={100}>
        {isEs ? (
          <>
            Escalando el MRO de LEAP en Querétaro: Una{' '}
            <VioletShimmer className={styles.titleAccent}>Arquitectura de Inteligencia de Decisiones</VioletShimmer>{' '}
            para Capacidad, Throughput y Materialización de Valor
          </>
        ) : (
          <>
            Scaling LEAP MRO in Querétaro: A{' '}
            <VioletShimmer className={styles.titleAccent}>Decision Intelligence</VioletShimmer>{' '}
            Blueprint for Capacity, Throughput, and Value Realization
          </>
        )}
      </MaskRevealText>

      {/* ── Hero Research Video ── */}
      <figure className={styles.heroFigure} aria-label="Research video — LEAP MRO facility">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideo}
        >
          <source src="/videos/research1.mov" type="video/mp4" />
        </video>
        {/* Bottom fade — seamless transition into section background */}
        <div className={styles.heroVideoFade} aria-hidden="true" />
      </figure>

      {/* ── 4-Metric Strip (animated count-up) ── */}
      <MetricStrip />
    </header>
  );
}
