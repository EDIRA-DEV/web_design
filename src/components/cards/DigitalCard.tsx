'use client';

/**
 * EDIRA — Digital Business Card (Executive Dark UI)
 * - Animated Electric Violet ambient background (Desktop cursor LERP + Mobile autonomous & touch-reactive aurora)
 * - Minimalist kinetic text animations (MaskRevealText, ScrambleText, BlurRevealText)
 * - Circular buttons (Top bar & Quick Contact) with /research Brand Primary hover states
 * - Clean social rows (LinkedIn, Instagram, Facebook, X) with integrated reticle grid effect
 */

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { QRCode } from 'antd';
import {
  ArrowLeftRight,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Globe,
  LoaderCircle,
  Mail,
  MessageSquare,
  Phone,
  QrCode,
  Share2,
} from 'lucide-react';
import type { CardProfile } from '@/lib/cardsData';
import { getProfileInitials } from '@/lib/cardsData';
import { downloadVCard } from '@/lib/vcard';
import { AmbientVioletGlow } from '@/components/editorial/AmbientVioletGlow';
import {
  BlurRevealText,
  MaskRevealText,
  ScrambleText,
} from '@/components/editorial/TextAnimations';
import { GlassDialog } from './GlassDialog';
import { ExchangeContactForm } from './ExchangeContactForm';
import { ProfileAvatar } from './ProfileAvatar';
import styles from './DigitalCard.module.css';

/* Brand SVG Icons */
function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

const stagger = (i: number) => ({ '--i': i }) as CSSProperties;

export interface DigitalCardProps {
  profile: CardProfile;
}

export function DigitalCard({ profile }: DigitalCardProps) {
  const initials = getProfileInitials(profile);

  /* Public card URL — dynamically resolved from current route on the client */
  const [cardUrl, setCardUrl] = useState<string>(`${profile.website}/card/${profile.slug}`);
  useEffect(() => {
    setCardUrl(`${window.location.origin}${window.location.pathname}`);
  }, []);
  const shareUrl = `${cardUrl}?ref=share`;
  const qrUrl = `${cardUrl}?ref=qr`;

  /* Subtle mobile reticle wave highlight on initial view */
  const [activeSocialIndex, setActiveSocialIndex] = useState<number | null>(null);
  useEffect(() => {
    const isTouchOrMobile =
      window.matchMedia('(max-width: 1023px)').matches ||
      window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (!isTouchOrMobile) return;

    const timers: number[] = [];
    [0, 1, 2, 3].forEach((idx) => {
      timers.push(
        window.setTimeout(() => {
          setActiveSocialIndex(idx);
        }, 700 + idx * 950)
      );
    });
    timers.push(
      window.setTimeout(() => {
        setActiveSocialIndex(null);
      }, 700 + 4 * 950)
    );

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  /* Toast feedback */
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);
  const showToast = useCallback((message: string) => {
    window.clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  /* Dialogs */
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [isExchangeOpen, setIsExchangeOpen] = useState(false);
  const [exchangeKey, setExchangeKey] = useState(0);

  const openExchange = () => {
    setExchangeKey((k) => k + 1);
    setIsExchangeOpen(true);
  };

  /* Clipboard */
  const [copied, setCopied] = useState(false);
  const copyLink = useCallback(
    async (url: string) => {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
        showToast('Link copied to clipboard');
      } catch {
        showToast('Could not copy link');
      }
    },
    [showToast]
  );

  /* Native share → clipboard fallback */
  const handleShare = async () => {
    const data: ShareData = {
      title: `${profile.name} — ${profile.role} | ${profile.company}`,
      text: `Digital business card for ${profile.name}, ${profile.role} at ${profile.company}`,
      url: shareUrl,
    };
    if (typeof navigator.share === 'function' && (!navigator.canShare || navigator.canShare(data))) {
      try {
        await navigator.share(data);
        return;
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
      }
    }
    await copyLink(shareUrl);
  };

  /* Save contact (.vcf) */
  const [isSaving, setIsSaving] = useState(false);
  const handleSave = async () => {
    if (isSaving) return;
    setIsSaving(true);
    try {
      await downloadVCard(profile);
      showToast(`${profile.firstName}'s contact ready to save`);
    } catch {
      showToast('Could not generate contact card');
    } finally {
      setIsSaving(false);
    }
  };

  const whatsappHref = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    `Hola ${profile.name}, me comunico desde tu tarjeta digital de EDIRA`
  )}`;
  const smsHref = `sms:${profile.phoneRaw}`;
  const websiteLabel = profile.website.replace(/^https?:\/\//, '').replace(/\/$/, '');

  const socialItems = [
    {
      label: 'LinkedIn',
      href: profile.socials.linkedin,
      icon: <LinkedInIcon />,
    },
    {
      label: 'Instagram',
      href: profile.socials.instagram,
      icon: <InstagramIcon />,
    },
    {
      label: 'Facebook',
      href: profile.socials.facebook,
      icon: <FacebookIcon />,
    },
    {
      label: 'X',
      href: profile.socials.x,
      icon: <XIcon />,
    },
  ];

  return (
    <div className={styles.page} onTouchStart={() => {}}>
      {/* Interactive Desktop Cursor Glow + Pronounced Mobile Animated Violet Aurora */}
      <AmbientVioletGlow />
      <div className={styles.ambient} aria-hidden="true">
        <span className={styles.glowTop} />
        <span className={styles.glowBottom} />
        <span className={styles.glowCenter} />
      </div>

      <div className={styles.shell}>
        {/* Desktop Horizontal Hero Backdrop (visible >= 768px) */}
        <div className={styles.desktopHeroPanel} aria-hidden="true" />

        {/* 1. Top Bar */}
        <header className={styles.topBar} style={stagger(0)}>
          <Link href="/" className={styles.logo} aria-label="EDIRA — Go to website">
            <Image src="/images/edira.svg" alt="EDIRA" width={92} height={24} priority />
          </Link>
          <div className={styles.topActions}>
            <button
              type="button"
              className={styles.topIconBtn}
              onClick={handleShare}
              aria-label="Share card"
            >
              <Share2 size={17} strokeWidth={1.85} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={styles.topIconBtn}
              onClick={() => setIsQrOpen(true)}
              aria-label="Show QR code"
              aria-haspopup="dialog"
            >
              <QrCode size={17} strokeWidth={1.85} aria-hidden="true" />
            </button>
          </div>
        </header>

        <main className={styles.main}>
          {/* 2. Portrait / Avatar Stage (Top-center on Mobile, Right showcase panel on Desktop) */}
          <div className={styles.avatarStage} style={stagger(1)}>
            <ProfileAvatar src={profile.avatar} name={profile.name} initials={initials} />
          </div>

          {/* 3. Executive Identity (Centered on Mobile, Left column on Desktop) */}
          <section className={styles.identityBlock} style={stagger(1)} aria-labelledby="card-name">
            <MaskRevealText
              id="card-name"
              as="h1"
              text={profile.name}
              className={styles.name}
              delay={80}
              stagger={55}
              triggerOnView={false}
            />

            <p className={styles.role}>
              <ScrambleText
                text={profile.role}
                duration={520}
                fps={30}
                triggerOnView={false}
              />
            </p>
          </section>

          {/* 4. Circular Quick-Contact Buttons Row (Under role on Mobile, Full-width bar below Hero Card on Desktop) */}
          <nav className={styles.quickActions} style={stagger(2)} aria-label="Quick direct contact">
            <a
              href={`tel:${profile.phoneRaw}`}
              className={styles.circleBtn}
              aria-label={`Call ${profile.name} (${profile.phoneDisplay})`}
              title={profile.phoneDisplay}
            >
              <Phone size={19} strokeWidth={1.85} aria-hidden="true" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className={styles.circleBtn}
              aria-label={`Email ${profile.email}`}
              title={profile.email}
            >
              <Mail size={19} strokeWidth={1.85} aria-hidden="true" />
            </a>

            <a
              href={smsHref}
              className={styles.circleBtn}
              aria-label={`Send SMS to ${profile.name}`}
              title="Send SMS"
            >
              <MessageSquare size={19} strokeWidth={1.85} aria-hidden="true" />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.circleBtn}
              aria-label={`Message ${profile.name} on WhatsApp`}
              title="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </nav>

          {/* 5. "About Me" Block (English — Floating card on Mobile, Left column inside Hero Card on Desktop) */}
          <section
            className={styles.aboutCard}
            style={stagger(2)}
            aria-labelledby="about-me-heading"
          >
            <div className={styles.aboutHeader}>
              <h2 id="about-me-heading" className={styles.aboutTitle}>
                <ScrambleText
                  text="About Me"
                  duration={450}
                  fps={30}
                  triggerOnView={false}
                />
              </h2>
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.websiteChip}
              >
                <Globe size={13} strokeWidth={1.85} aria-hidden="true" />
                <span>{websiteLabel}</span>
              </a>
            </div>
            <BlurRevealText
              as="p"
              text={profile.bio}
              className={styles.aboutText}
              delay={180}
              triggerOnView={false}
            />
          </section>

          {/* 6. Clean Social Networks Rows with Integrated Reticle Mesh */}
          <section className={styles.socialSection} style={stagger(3)} aria-label="Official social networks">
            <ul className={styles.socialList}>
              {socialItems.map((item, idx) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialReticleCard} ${
                      activeSocialIndex === idx ? styles.isActive : ''
                    }`}
                  >
                    {/* Conic Violet Shine Layer */}
                    <span className={styles.reticleShine} aria-hidden="true">
                      <span className={styles.reticleOrb} />
                    </span>

                    {/* Reticle Grid & Pulsing Tiles */}
                    <span className={styles.reticleMesh} aria-hidden="true">
                      <span className={styles.reticleTiles}>
                        <span className={`${styles.reticleTile} ${styles.rTile1}`} />
                        <span className={`${styles.reticleTile} ${styles.rTile2}`} />
                        <span className={`${styles.reticleTile} ${styles.rTile3}`} />
                        <span className={`${styles.reticleTile} ${styles.rTile4}`} />
                        <span className={`${styles.reticleTile} ${styles.rTile5}`} />
                        <span className={`${styles.reticleTile} ${styles.rTile6}`} />
                      </span>
                      <span className={`${styles.reticleLine} ${styles.rLine1}`} />
                      <span className={`${styles.reticleLine} ${styles.rLine2}`} />
                    </span>

                    {/* Clean Foreground Row (Icon + Label + Arrow only) */}
                    <span className={styles.socialCardContent}>
                      <span className={styles.socialIconBubble} aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className={styles.socialLabel}>{item.label}</span>
                      <ArrowUpRight
                        className={styles.socialArrow}
                        size={17}
                        strokeWidth={1.85}
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>

        {/* 7 & 8. Action Buttons (Save Contact + Exchange Contact) & Legal Footer */}
        <footer className={styles.bottomArea} style={stagger(4)}>
          <div className={styles.ctaGroup}>
            <button
              type="button"
              className={styles.saveContactBtn}
              onClick={handleSave}
              disabled={isSaving}
              aria-busy={isSaving}
            >
              {isSaving ? (
                <>
                  <LoaderCircle className={styles.spin} size={18} aria-hidden="true" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Download size={18} strokeWidth={2} aria-hidden="true" />
                  <span>Save Contact</span>
                </>
              )}
            </button>

            <button
              type="button"
              className={styles.exchangeContactBtn}
              onClick={openExchange}
              aria-haspopup="dialog"
            >
              <ArrowLeftRight size={18} strokeWidth={1.85} aria-hidden="true" />
              <span>Exchange Contact</span>
            </button>
          </div>

          <p className={styles.legalFooter}>
            <span>© 2026 EDIRA</span>
            <span aria-hidden="true">·</span>
            <Link href="/aviso-de-privacidad">Privacy Policy</Link>
          </p>
        </footer>
      </div>

      {/* Toast */}
      <div className={styles.toast} role="status" aria-live="polite" data-visible={toast !== null}>
        {toast && (
          <>
            <Check size={16} strokeWidth={2.25} aria-hidden="true" />
            {toast}
          </>
        )}
      </div>

      {/* QR dialog */}
      <GlassDialog
        open={isQrOpen}
        onClose={() => setIsQrOpen(false)}
        labelledBy="qr-title"
        describedBy="qr-desc"
        variant="center"
      >
        <div className={styles.qrContent}>
          <h2 id="qr-title" className={styles.qrTitle}>
            Scan to Connect
          </h2>
          <p id="qr-desc" className={styles.qrDesc}>
            Digital business card for {profile.name}
          </p>
          <div className={styles.qrTile}>
            {isQrOpen && (
              <QRCode
                value={qrUrl}
                size={216}
                type="svg"
                color="#0a0a0a"
                bgColor="#ffffff"
                errorLevel="M"
                bordered={false}
                style={{ padding: 0 }}
              />
            )}
          </div>
          <button type="button" className={styles.qrCopy} onClick={() => copyLink(cardUrl)}>
            <span className={styles.qrUrl}>{cardUrl.replace(/^https?:\/\//, '')}</span>
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            <span className="sr-only">Copy link</span>
          </button>
        </div>
      </GlassDialog>

      {/* Exchange contact bottom sheet */}
      <GlassDialog
        open={isExchangeOpen}
        onClose={() => setIsExchangeOpen(false)}
        labelledBy="xc-title"
        describedBy="xc-desc"
        variant="sheet"
      >
        <ExchangeContactForm
          key={exchangeKey}
          profile={profile}
          titleId="xc-title"
          descId="xc-desc"
          onDone={() => setIsExchangeOpen(false)}
        />
      </GlassDialog>
    </div>
  );
}
