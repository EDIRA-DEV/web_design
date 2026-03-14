import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Hero } from '@/components/sections/Hero/Hero';
import { Features } from '@/components/sections/Features/Features';
import { TailoredSolutions } from '@/components/sections/TailoredSolutions/TailoredSolutions';
import { Pricing } from '@/components/sections/Pricing/Pricing';
import { Testimonials } from '@/components/sections/Testimonials/Testimonials';
import { CTA } from '@/components/sections/CTA/CTA';
import { Footer } from '@/components/sections/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TailoredSolutions />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
