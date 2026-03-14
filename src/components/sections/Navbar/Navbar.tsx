import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <Container className={styles.container}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/images/edira.svg" 
              alt={SITE_CONFIG.name} 
              width={120} 
              height={28} 
              priority
            />
          </Link>

          <nav className={styles.nav} aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <button className={styles.iconButton} aria-label="Toggle theme">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>
            <button className={styles.iconButton} aria-label="Language selector">
              <span className={styles.languageSelect}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 8 6 6"></path>
                  <path d="m4 14 6-6 2-3"></path>
                  <path d="M2 5h12"></path>
                  <path d="M7 2h1"></path>
                  <path d="m22 22-5-10-5 10"></path>
                  <path d="M14 18h6"></path>
                </svg>
                EN
              </span>
            </button>
            <Button variant="primary" size="sm">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
