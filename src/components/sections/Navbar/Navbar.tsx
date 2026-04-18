'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import { SmartContactButton } from '@/components/ui/Button/SmartContactButton';
import { SITE_CONFIG } from '@/lib/constants';
import { useLang } from '@/lib/i18n';
import styles from './Navbar.module.css';

const NAV_KEYS = [
  { key: 'nav.services', href: '/services' },
  { key: 'nav.industries', href: '/industries' },
  { key: 'nav.insights', href: '/insights' },
  { key: 'nav.aboutUs', href: '/about-us' },
  { key: 'nav.careers', href: '/careers' },
];

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en');
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
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
            {NAV_KEYS.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {t(link.key)}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <button className={styles.iconButton} aria-label="Language selector" onClick={toggleLang}>
              <span className={styles.languageSelect}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 8 6 6"></path>
                  <path d="m4 14 6-6 2-3"></path>
                  <path d="M2 5h12"></path>
                  <path d="M7 2h1"></path>
                  <path d="m22 22-5-10-5 10"></path>
                  <path d="M14 18h6"></path>
                </svg>
                {lang === 'en' ? 'ES' : 'EN'}
              </span>
            </button>
            <SmartContactButton variant="primary" size="sm" className={styles.contactBtn}>
              {t('nav.contact')}
            </SmartContactButton>
            <button className={styles.hamburgerBtn} aria-label="Toggle menu" onClick={toggleMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="8" x2="20" y2="8"></line>
                <line x1="4" y1="16" x2="20" y2="16"></line>
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Container>
            <nav className={styles.mobileNav} aria-label="Mobile Navigation">
              {NAV_KEYS.map((link) => (
                <Link key={link.href} href={link.href} className={styles.mobileNavLink} onClick={toggleMenu}>
                  {t(link.key)}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
