import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Footer } from '@/components/sections/Footer/Footer';
import { CareersHero } from '@/components/sections/CareersHero/CareersHero';
import { WhoWeAre } from '@/components/sections/WhoWeAre/WhoWeAre';
import { HowWeWork } from '@/components/sections/HowWeWork/HowWeWork';
import { CareersCTA } from '@/components/sections/CareersCTA/CareersCTA';

export const metadata: Metadata = {
  title: `Careers | ${SITE_CONFIG.name}`,
  description: 'Join a team focused on solving real business challenges through data, AI, and strategic thinking.',
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <CareersHero />
        <WhoWeAre />
        <HowWeWork />
        <CareersCTA />
      </main>
      <Footer />
    </>
  );
}
