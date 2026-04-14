'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './FeaturedInsights.module.css';

export function FeaturedInsights() {
  const { t } = useLang();

  return (
    <section className={styles.section} id="featured-insights">
      <Container>
        <h2 className={styles.sectionTitle}>{t('insights.featured.title')}</h2>

        <div className={styles.grid}>
          {/* Main Featured Item */}
          <Link href="#post-1" className={styles.mainCard}>
            <Image
              src="/images/The Hidden Cost of Manual Reporting.png"
              alt={t('insights.featured.item0.title')}
              fill
              className={styles.mainImage}
            />
            <div className={styles.mainOverlay}>
              <div className={styles.mainContent}>
                <h3 className={styles.mainTitle}>{t('insights.featured.item0.title')}</h3>
                <p className={styles.mainDesc}>{t('insights.featured.item0.desc')}</p>
              </div>
              <div className={styles.readMore}>
                {t('insights.featured.readMore')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>
          </Link>

          {/* Secondary Items */}
          <div className={styles.secondaryRow}>
            {/* Item 2 */}
            <Link href="#post-2" className={styles.subCard}>
              <div className={styles.subImageWrapper}>
                <Image
                  src="/images/Building KPI Frameworks That Actually Drive Decisions.png"
                  alt={t('insights.featured.item1.title')}
                  fill
                  className={styles.subImage}
                />
              </div>
              <div className={styles.subContent}>
                <h4 className={styles.subTitle}>{t('insights.featured.item1.title')}</h4>
                <p className={styles.subMeta}>{t('insights.featured.item1.meta')}</p>
              </div>
            </Link>

            {/* Item 3 */}
            <Link href="#post-3" className={styles.subCard}>
              <div className={styles.subImageWrapper}>
                <Image
                  src="/images/Forecasting Beyond the Spreadsheet.png"
                  alt={t('insights.featured.item2.title')}
                  fill
                  className={styles.subImage}
                />
              </div>
              <div className={styles.subContent}>
                <h4 className={styles.subTitle}>{t('insights.featured.item2.title')}</h4>
                <p className={styles.subMeta}>{t('insights.featured.item2.meta')}</p>
              </div>
            </Link>
          </div>

          {/* Tertiary Items */}
          <div className={styles.tertiaryRow}>
            {/* Item 4 */}
            <Link href="#post-4" className={styles.subCard}>
              <div className={styles.subImageWrapper}>
                <Image
                  src="/images/Pricing Decisions Need Better Data.png"
                  alt={t('insights.featured.item3.title')}
                  fill
                  className={styles.subImage}
                />
              </div>
              <div className={styles.subContent}>
                <h4 className={styles.subTitle}>{t('insights.featured.item3.title')}</h4>
                <p className={styles.subMeta}>{t('insights.featured.item3.meta')}</p>
              </div>
            </Link>

            {/* Item 5 */}
            <Link href="#post-5" className={styles.subCard}>
              <div className={styles.subImageWrapper}>
                <Image
                  src="/images/Where AI Creates Real Business Value.png"
                  alt={t('insights.featured.item4.title')}
                  fill
                  className={styles.subImage}
                />
              </div>
              <div className={styles.subContent}>
                <h4 className={styles.subTitle}>{t('insights.featured.item4.title')}</h4>
                <p className={styles.subMeta}>{t('insights.featured.item4.meta')}</p>
              </div>
            </Link>

            {/* Item 6 */}
            <Link href="#post-6" className={styles.subCard}>
              <div className={styles.subImageWrapper}>
                <Image
                  src="/images/Data Ownership- The Missing Piece in Many Organizations.png"
                  alt={t('insights.featured.item5.title')}
                  fill
                  className={styles.subImage}
                />
              </div>
              <div className={styles.subContent}>
                <h4 className={styles.subTitle}>{t('insights.featured.item5.title')}</h4>
                <p className={styles.subMeta}>{t('insights.featured.item5.meta')}</p>
              </div>
            </Link>
          </div>

          <div className={styles.browseAllWrapper}>
            <Link href="#all-insights" className={styles.browseAllLink}>
              {t('insights.featured.browseAll')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
