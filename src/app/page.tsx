import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Hero } from '@/components/sections/Hero/Hero';
import { Features } from '@/components/sections/Features/Features';
import { TailoredSolutions } from '@/components/sections/TailoredSolutions/TailoredSolutions';
import { Process } from '@/components/sections/Process/Process';
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
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
