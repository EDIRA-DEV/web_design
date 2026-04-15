import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Footer } from '@/components/sections/Footer/Footer';
import { AboutUsHero } from '@/components/sections/AboutUsHero/AboutUsHero';
import { AboutUsStory } from '@/components/sections/AboutUsStory/AboutUsStory';
import { AboutUsCore } from '@/components/sections/AboutUsCore/AboutUsCore';
import { AboutUsApart } from '@/components/sections/AboutUsApart/AboutUsApart';
import { AboutUsTeam } from '@/components/sections/AboutUsTeam/AboutUsTeam';
import { AboutUsValues } from '@/components/sections/AboutUsValues/AboutUsValues';
import { AboutUsCTA } from '@/components/sections/AboutUsCTA/AboutUsCTA';

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutUsHero />
        <AboutUsStory />
        <AboutUsCore />
        <AboutUsApart />
        <AboutUsTeam />
        <AboutUsValues />
        <AboutUsCTA />
      </main>
      <Footer />
    </>
  );
}
