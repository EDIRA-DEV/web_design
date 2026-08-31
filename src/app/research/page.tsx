import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Footer } from '@/components/sections/Footer/Footer';
import { EditorialSidebar } from '@/components/editorial/EditorialSidebar';
import { MobileEditorialSubNav } from '@/components/editorial/MobileEditorialSubNav';
import { AmbientVioletGlow } from '@/components/editorial/AmbientVioletGlow';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { Section00ExecutiveSummary } from '@/components/editorial/Section00ExecutiveSummary';
import { Section01Evidence } from '@/components/editorial/Section01Evidence';
import { Section02ProblemStatement } from '@/components/editorial/Section02ProblemStatement';
import { Section03DataFoundation } from '@/components/editorial/Section03DataFoundation';
import { EditorialPlaceholders } from '@/components/editorial/EditorialPlaceholders';
import { EditorialNextButton } from '@/components/editorial/EditorialNextButton';
import { FloatingActionDock } from '@/components/editorial/FloatingActionDock';
import styles from './page.module.css';

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  title: 'Scaling LEAP MRO in Querétaro: A Decision Intelligence Blueprint | EDIRA Research',
  description:
    'How Decision Intelligence transforms MRO capacity, throughput, and value realization for a US$140M, 50,000 m² LEAP engine overhaul facility in Querétaro, Mexico.',
  openGraph: {
    title: 'Scaling LEAP MRO in Querétaro | EDIRA Research',
    description:
      'Decision Intelligence blueprint for 350 LEAP shop visits/year and 2,000-person workforce ramp-up.',
    url: 'https://edira.dev/research',
    siteName: 'EDIRA',
    images: [
      {
        url: 'https://edira.dev/images/insights/leap-turbine-hero.png',
        width: 1200,
        height: 630,
        alt: 'LEAP Turbine Core — Querétaro MRO Facility',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  keywords: [
    'Research',
    'MRO',
    'LEAP engine',
    'Querétaro aerospace',
    'Decision Intelligence',
    'aviation maintenance',
    'Safran',
    'EDIRA',
  ],
};

/* ─── Page ─── */
export default function ResearchPage() {
  return (
    <>
      {/* Global Navbar — sits above everything at z-index 1000 */}
      <Navbar />

      {/* Sticky Mobile Sub-Navbar: Chapter Selector + Download/Share actions (lg:hidden) */}
      <MobileEditorialSubNav />

      {/* Two-column editorial layout: fixed sidebar + scrolling article */}
      <div className={styles.pageWrapper}>
        {/* Background ambient lighting */}
        <AmbientVioletGlow />

        {/* Fixed sidebar — renders above lg only */}
        <EditorialSidebar />

        {/* Scrollable main content */}
        <main className={styles.mainContent} id="main-content">
          <article className={styles.article}>
            {/* 01 — Hero: eyebrow · H1 · turbine image · metrics bar */}
            <EditorialHero />

            {/* 02 — Executive Summary + highlighted quote */}
            <Section00ExecutiveSummary />

            {/* 03 — Evidence & Case for Change (asymmetric 5|7 grid) */}
            <Section01Evidence />

            {/* 04 — Problem Statement, Hypothesis & Decision Scope */}
            <Section02ProblemStatement />

            {/* 05 — Data Foundation & Medallion Architecture */}
            <Section03DataFoundation />

            {/* 06-09 — Anchor placeholders for sections 04-07 */}
            <EditorialPlaceholders />

            {/* Footer CTA → next section */}
            <EditorialNextButton href="#section-02" label="Next" />
          </article>
        </main>
      </div>

      {/* Floating Action Dock (Desktop >= md) */}
      <FloatingActionDock />

      {/* Site-wide footer */}
      <Footer />
    </>
  );
}
