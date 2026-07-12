import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Hero } from '@/components/sections/Hero/Hero';
import { Features } from '@/components/sections/Features/Features';
import { TailoredSolutions } from '@/components/sections/TailoredSolutions/TailoredSolutions';
import { Process } from '@/components/sections/Process/Process';
import { Testimonials } from '@/components/sections/Testimonials/Testimonials';
import { CTA } from '@/components/sections/CTA/CTA';
import { Footer } from '@/components/sections/Footer/Footer';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EDIRA',
  url: 'https://edira.dev',
  logo: 'https://edira.dev/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/ediradev/',
    'https://x.com/edira_dev',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TailoredSolutions />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

