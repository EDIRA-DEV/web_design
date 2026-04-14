import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Footer } from '@/components/sections/Footer/Footer';
import { InsightsHero } from '@/components/sections/InsightsHero/InsightsHero';
import { FeaturedInsights } from '@/components/sections/FeaturedInsights/FeaturedInsights';
import { InsightsCTA } from '@/components/sections/InsightsCTA/InsightsCTA';

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <InsightsHero />
        <FeaturedInsights />
        <InsightsCTA />
      </main>
      <Footer />
    </>
  );
}
