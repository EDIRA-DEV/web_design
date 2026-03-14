import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            {SITE_CONFIG.name}
          </Link>

          <nav className={styles.links} aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </nav>

          <p className={styles.copy}>
            &copy; {year} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
