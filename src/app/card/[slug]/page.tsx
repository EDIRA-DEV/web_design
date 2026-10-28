import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { getAllCardSlugs, getCardBySlug } from '@/lib/cardsData';
import { DigitalCard } from '@/components/cards/DigitalCard';

interface CardPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCardSlugs().map((slug) => ({ slug }));
}

/** Edge-to-edge on notched phones (safe-area insets) + dark browser chrome */
export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
  viewportFit: 'cover',
};

export async function generateMetadata({
  params,
}: CardPageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getCardBySlug(slug);

  if (!profile) {
    return {
      title: 'Tarjeta no encontrada | EDIRA',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${profile.name} — ${profile.role} | ${profile.company}`,
    description: `Tarjeta de presentación digital de ${profile.name} (${profile.role}) en ${profile.company}.`,
    openGraph: {
      title: `${profile.name} — ${profile.role} | ${profile.company}`,
      description: `Conecta con ${profile.name}, ${profile.role} en ${profile.company}.`,
      url: `${profile.website}/card/${profile.slug}`,
      siteName: profile.company,
      type: 'profile',
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DigitalCardPage({ params }: CardPageProps) {
  const { slug } = await params;
  const profile = getCardBySlug(slug);

  if (!profile) {
    notFound();
  }

  return <DigitalCard profile={profile} />;
}

