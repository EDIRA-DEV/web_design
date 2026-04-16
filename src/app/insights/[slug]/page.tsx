import { Metadata } from 'next';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Footer } from '@/components/sections/Footer/Footer';
import { ArticleHero } from '@/components/sections/ArticleHero/ArticleHero';
import { ArticleContent } from '@/components/sections/ArticleContent/ArticleContent';
import { RelatedArticles } from '@/components/sections/RelatedArticles/RelatedArticles';

// This is a mock function that would eventually fetch from a CMS or local markdown files
const getArticleData = (slug: string) => {
  return {
    title: 'Building KPI Frameworks That Actually Drive Decisions',
    metadata: {
      author: 'EDIRA Team',
      date: 'April 2, 2025',
      readTime: '5 min read',
    },
    image: '/images/Building KPI Frameworks That Actually Drive Decisions.png',
    related: [
      {
        id: '1',
        title: 'Pricing Decisions Need Better Data',
        meta: 'Financial & Operational Analytics • 4 min read',
        image: '/images/Pricing Decisions Need Better Data.png',
        slug: 'pricing-decisions-need-better-data',
      },
      {
        id: '2',
        title: 'Where AI Creates Real Business Value',
        meta: 'AI & Automation • 6 min read',
        image: '/images/Where AI Creates Real Business Value.png',
        slug: 'where-ai-creates-real-business-value',
      },
      {
        id: '3',
        title: 'Data Ownership: The Missing Piece in Many Organizations',
        meta: 'Data Strategy & Governance • 3 min read',
        image: '/images/Data Ownership- The Missing Piece in Many Organizations.png',
        slug: 'data-ownership-the-missing-piece',
      },
    ]
  };
};

export const metadata: Metadata = {
  title: `Building KPI Frameworks That Actually Drive Decisions | ${SITE_CONFIG.name}`,
  description: 'How to build KPI frameworks that connect data to action and create alignment across your business.',
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // Normally we would use params.slug, here we just use mock data setup
  const data = getArticleData('mock-slug');

  return (
    <>
      <Navbar />
      <main>
        <ArticleHero 
          title={data.title}
          metadata={data.metadata}
          image={data.image}
        />
        
        <ArticleContent>
          <p>
            Key Performance Indicators (KPIs) are the lifeblood of decision-making in modern organizations.
            Yet, many businesses struggle to build KPI frameworks that truly drive decisions.
            The result? Teams report numbers, but leaders can't make real-time decisions based on them.
          </p>
          <p>
            In this article, we explore how to build KPI frameworks that connect data to action and create alignment across your business.
            A well-designed KPI framework can unlock the insights needed to optimize performance, drive growth, and foster a culture of data-driven decision-making.
          </p>

          <Image 
            src="/images/Discover.png" 
            alt="Dashboard Analysis" 
            width={800} 
            height={400} 
          />

          <h3>Why KPIs Fail to Drive Decisions</h3>
          <p>Not all KPIs are created equal. In fact, many organizations use KPIs that are too complex, too broad, or misaligned with strategic goals. This leads to data that's either ignored or, worse, misinterpreted.</p>
          
          <p>Common mistakes when building KPI frameworks:</p>
          <ul>
            <li><strong>Overloading on vanity metrics:</strong> These are metrics that look good on paper but don't really reflect the health of your business (e.g. total website visits, social media likes).</li>
            <li><strong>Lack of alignment with business goals:</strong> KPIs must be directly linked to the company's strategy and objectives. If they're not, they won't inform the decisions that matter.</li>
            <li><strong>Failure to measure the right timeframes:</strong> A KPI that measures long-term performance for short-term objectives can create confusion, making it harder for decision-makers to act on it.</li>
          </ul>

          <Image 
            src="/images/Deploy.png" 
            alt="KPI Charts" 
            width={800} 
            height={400} 
          />

          <h3>How to Build KPI Frameworks That Drive Decisions</h3>
          <p>Building effective KPI frameworks involves three key stages: Alignment, Measurement, and Action. By ensuring your KPIs are aligned with strategic goals, measuring the right things at the right time, and embedding them in decision-making processes, you can ensure they actually drive meaningful actions.</p>
          
          <h3>1. Align KPIs with Business Strategy</h3>
          <p>The first step in building a KPI framework that drives decisions is ensuring that your KPIs are aligned with your strategic goals. KPIs should reflect what matters most to your business, whether that's improving profitability, increasing customer retention, or enhancing operational efficiency.</p>

          <h3>2. Measure What Truly Matters</h3>
          <p>Once you've aligned your KPIs with business objectives, it's time to determine what to measure. It's crucial to focus on metrics that directly impact your goals:</p>
          <ul>
            <li><strong>Focus on outcomes, not just activity.</strong></li>
            <li><strong>Track leading indicators</strong>, which predict future outcomes, not just lagging indicators that report on past performance.</li>
          </ul>

          <h3>3. Embed KPIs in the Decision-Making Process</h3>
          <p>A KPI framework only has value when it's actively used in decision-making. Here's how to ensure that KPIs drive action:</p>
          <ul>
            <li><strong>Regular reviews and updates:</strong> KPIs should be reviewed regularly to assess performance. Set weekly or monthly check-ins where teams can discuss performance, identify trends, and make decisions based on the data.</li>
            <li><strong>Transparency and ownership:</strong> Make KPIs visible across the organization. When everyone has visibility into key performance metrics, it creates accountability and ensures that everyone is aligned on the goals.</li>
            <li><strong>Actionable insights:</strong> KPIs should be accompanied by actionable insights, not just data. Ensure that KPIs come with clear recommendations for how to adjust strategies or operations.</li>
          </ul>
        </ArticleContent>

        <RelatedArticles articles={data.related} />
      </main>
      <Footer />
    </>
  );
}
