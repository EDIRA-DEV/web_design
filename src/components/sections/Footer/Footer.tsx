'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { useLang } from '@/lib/i18n';
import styles from './Footer.module.css';

export function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  const handleOpenCookies = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
    }
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            EDIRA
          </Link>

          <div className={styles.links}>
            <Link href="/aviso-de-privacidad" className={styles.link}>
              {lang === 'es' ? 'Aviso de Privacidad' : 'Privacy Notice'}
            </Link>
            <Link href="/politica-de-cookies" className={styles.link}>
              {lang === 'es' ? 'Política de Cookies' : 'Cookie Policy'}
            </Link>
            <Link href="/terminos-y-condiciones" className={styles.link}>
              {lang === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions'}
            </Link>
            <button 
              type="button"
              onClick={handleOpenCookies}
              className={styles.cookieBtn}
            >
              {lang === 'es' ? 'Preferencias de cookies' : 'Cookie Preferences'}
            </button>
          </div>

          <p className={styles.copy}>
            &copy; {year} EDIRA. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </Container>
    </footer>
  );
}
