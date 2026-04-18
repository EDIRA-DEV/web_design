'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { useLang } from '@/lib/i18n';
import styles from './Footer.module.css';

export function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            {SITE_CONFIG.name}
          </Link>

          { }

          <p className={styles.copy}>
            &copy; {year} {SITE_CONFIG.name}. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </Container>
    </footer>
  );
}
