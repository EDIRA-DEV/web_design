'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { useLang } from '@/lib/i18n';
import styles from './IndustriesList.module.css';

const INDUSTRIES_DATA = [
  {
    id: 'financial',
    titleKey: 'industries.financial.title',
    descKey: 'industries.financial.desc',
    imgSrc: '/images/Financial-Services.png',
  },
  {
    id: 'retail',
    titleKey: 'industries.retail.title',
    descKey: 'industries.retail.desc',
    imgSrc: '/images/Retail-Consumer Goods.png',
  },
  {
    id: 'manufacturing',
    titleKey: 'industries.manufacturing.title',
    descKey: 'industries.manufacturing.desc',
    imgSrc: '/images/Manufacturing.png',
  },
  {
    id: 'healthcare',
    titleKey: 'industries.healthcare.title',
    descKey: 'industries.healthcare.desc',
    imgSrc: '/images/Healthcare.png',
  },
  {
    id: 'energy',
    titleKey: 'industries.energy.title',
    descKey: 'industries.energy.desc',
    imgSrc: '/images/Energy-Utilities.png',
  },
  {
    id: 'professional',
    titleKey: 'industries.professional.title',
    descKey: 'industries.professional.desc',
    imgSrc: '/images/Professional Services Icon.png',
  },
];

export function IndustriesList() {
  const { t } = useLang();

  return (
    <section className={styles.section} id="industries-list">
      <Container>
        <div className={styles.list}>
          {INDUSTRIES_DATA.map((item, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div
                key={item.id}
                className={`${styles.item} ${isReverse ? styles.itemReverse : ''}`}
              >
                <div className={styles.imageBox}>
                  <Image
                    src={item.imgSrc}
                    alt={t(item.titleKey)}
                    width={300}
                    height={300}
                    quality={90}
                    className={styles.image}
                  />
                </div>
                <div className={styles.textContent}>
                  <h3 className={styles.title}>{t(item.titleKey)}</h3>
                  <p className={styles.description}>{t(item.descKey)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
