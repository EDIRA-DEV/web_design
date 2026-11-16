import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Hero } from '@/components/sections/Hero/Hero';
import { Features } from '@/components/sections/Features/Features';
import { TailoredSolutions } from '@/components/sections/TailoredSolutions/TailoredSolutions';
import { Process } from '@/components/sections/Process/Process';
import { FAQ } from '@/components/sections/FAQ/FAQ';
import { Testimonials } from '@/components/sections/Testimonials/Testimonials';
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
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

