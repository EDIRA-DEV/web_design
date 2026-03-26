import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Footer } from '@/components/sections/Footer/Footer';
import { ServicesHero } from '@/components/sections/ServicesHero/ServicesHero';
import { Deliverables } from '@/components/sections/Deliverables/Deliverables';
import { CoreServices } from '@/components/sections/CoreServices/CoreServices';
import { BeyondImplementation } from '@/components/sections/BeyondImplementation/BeyondImplementation';
import { Outcomes } from '@/components/sections/Outcomes/Outcomes';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <Deliverables />
        <CoreServices />
        <BeyondImplementation />
        <Outcomes />
      </main>
      <Footer />
    </>
  );
}
