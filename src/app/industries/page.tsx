import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Footer } from '@/components/sections/Footer/Footer';
import { IndustriesHero } from '@/components/sections/IndustriesHero/IndustriesHero';
import { IndustriesList } from '@/components/sections/IndustriesList/IndustriesList';
import { IndustriesCTA } from '@/components/sections/IndustriesCTA/IndustriesCTA';

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <IndustriesHero />
        <IndustriesList />
        <IndustriesCTA />
      </main>
      <Footer />
    </>
  );
}
