/**
 * EDIRA — Digital Business Cards Data & Corporate Configuration
 * Phase 1: Centralized data architecture and extracted project constants.
 */

export interface CardSocials {
  linkedin: string;
  x: string;
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface CardProfile {
  slug: string;
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  role: string;
  bio: string;
  company: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsapp: string;
  email: string;
  avatar: string;
  website: string;
  socials: CardSocials;
  /** Top-level convenience aliases for social links */
  linkedin: string;
  instagram: string;
  x: string;
  facebook: string;
}

/**
 * Corporate constants extracted from:
 * - src/components/sections/Footer/Footer.tsx (Social URLs)
 * - src/components/ui/UniversalContactForm/UniversalContactForm.tsx (Formspree ID: mgorobll)
 * - src/app/layout.tsx & src/app/globals.css (Brand metadata & theme tokens)
 */
export const EDIRA_CORPORATE_DATA = {
  company: 'EDIRA',
  website: 'https://edira.dev',
  defaultBio:
    'Technology, cloud data architecture, and applied AI solutions built for measurable impact across aerospace and B2B enterprises.',
  formspreeId: 'mgorobll',
  formspreeEndpoint: 'https://formspree.io/f/mgorobll',
  socials: {
    linkedin: 'https://www.linkedin.com/company/ediradev/',
    x: 'https://x.com/edira_dev',
    twitter: 'https://x.com/edira_dev',
    facebook: 'https://www.facebook.com/ediradev',
    instagram: 'https://www.instagram.com/ediradev/',
  },
  theme: {
    colorPrimary: '#8b5cf6',
    colorPrimaryHover: '#7c3aed',
    colorElectricViolet: '#a855f7',
    colorSecondary: '#0ea5e9',
    colorBg: '#000000',
    colorBgAlt: '#0a0a0a',
    colorBgElevated: '#171717',
    colorText: '#ffffff',
    colorTextSecondary: '#cbd5e1',
    colorTextMuted: '#94a3b8',
    colorBorder: '#262626',
    avatarGradient: 'linear-gradient(135deg, #a72ef4 0%, #1f43c2 100%)',
  },
} as const;

interface RawCardSeed {
  slug: string;
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  role: string;
  bio?: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsapp: string;
  email: string;
  avatar: string;
}

const INITIAL_CARDS_SEED: RawCardSeed[] = [
  {
    slug: 'eduardo-silva',
    name: 'Eduardo Silva',
    firstName: 'Eduardo',
    lastName: 'Silva',
    initials: 'ES',
    role: 'CEO',
    phoneDisplay: '+52 (442) 107 1357',
    phoneRaw: '+524421071357',
    whatsapp: '524421071357',
    email: 'esilva@edira.dev',
    avatar: '/images/cards/eduardo-silva-placeholder.jpg',
  },
  {
    slug: 'diego-gonzalez',
    name: 'Diego González',
    firstName: 'Diego',
    lastName: 'González',
    initials: 'DG',
    role: 'CFO',
    phoneDisplay: '+52 (442) 200 6551',
    phoneRaw: '+524422006551',
    whatsapp: '524422006551',
    email: 'dgonzalez@edira.dev',
    avatar: '/images/cards/diego-gonzalez-placeholder.jpg',
  },
  {
    slug: 'maria-teresa-silva',
    name: 'Maria Teresa Silva',
    firstName: 'Maria Teresa',
    lastName: 'Silva',
    initials: 'MS',
    role: 'HR Manager',
    phoneDisplay: '+52 (442) 423 4792',
    phoneRaw: '+524424234792',
    whatsapp: '524424234792',
    email: 'rrhh@edira.dev',
    avatar: '/images/cards/maria-teresa-silva-placeholder.jpg',
  },
];

/**
 * Enriches each individual profile with EDIRA's shared corporate metadata.
 */
export const CARDS_DATA: CardProfile[] = INITIAL_CARDS_SEED.map((seed) => ({
  ...seed,
  bio: seed.bio || EDIRA_CORPORATE_DATA.defaultBio,
  company: EDIRA_CORPORATE_DATA.company,
  website: EDIRA_CORPORATE_DATA.website,
  socials: { ...EDIRA_CORPORATE_DATA.socials },
  linkedin: EDIRA_CORPORATE_DATA.socials.linkedin,
  instagram: EDIRA_CORPORATE_DATA.socials.instagram,
  x: EDIRA_CORPORATE_DATA.socials.x,
  facebook: EDIRA_CORPORATE_DATA.socials.facebook,
}));

export const CARDS_BY_SLUG: Record<string, CardProfile> = Object.fromEntries(
  CARDS_DATA.map((card) => [card.slug, card])
);

/**
 * Retrieve a card profile by its URL slug.
 */
export function getCardBySlug(slug: string): CardProfile | undefined {
  const normalized = slug.trim().toLowerCase();
  return CARDS_BY_SLUG[normalized];
}

/**
 * Retrieve all registered card slugs (used by Next.js generateStaticParams).
 */
export function getAllCardSlugs(): string[] {
  return CARDS_DATA.map((card) => card.slug);
}

/**
 * Helper to compute 2-letter initials from any profile or full name.
 */
export function getProfileInitials(profile: Pick<CardProfile, 'name'> & { initials?: string }): string {
  if (profile.initials) return profile.initials;
  const parts = profile.name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'ED';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

