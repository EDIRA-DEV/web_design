import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/lib/i18n';
import { ContactModalProvider } from '@/providers/ContactModalContext';
import { GlobalContactModal } from '@/providers/GlobalContactModal';
import { CookieBanner } from '@/components/ui/CookieBanner';
import MetaPixel from '@/components/MetaPixel';
import { App } from 'antd';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'EDIRA | Consultoría Tecnológica y Desarrollo de Software',
  description: 'Ingeniería de software a medida, arquitectura digital e infraestructura para empresas.',
  metadataBase: new URL('https://edira.dev'),
  verification: {
    google: 'Z0oGw_L8T9g5YyIZ_ddTUbEA09bn3-csYnGnSPIr7lI',
  },
  openGraph: {
    title: 'EDIRA | Consultoría Tecnológica',
    description: 'Ingeniería de software a medida corporativa.',
    url: 'https://edira.dev',
    siteName: 'EDIRA',
    images: [
      {
        url: 'https://edira.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EDIRA Share Image',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const linkedInPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  return (
    <html lang="es" className={inter.variable}>
      <body>
        <LangProvider>
          <ContactModalProvider>
            <App>
              {children}
              <GlobalContactModal />
              <CookieBanner />
            </App>
          </ContactModalProvider>
        </LangProvider>

        {/* Canonical Meta Pixel */}
        <MetaPixel />

        {linkedInPartnerId && (
          <>
            <Script
              id="linkedin-insight"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  _linkedin_partner_id = "${linkedInPartnerId}";
                  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                  (function(l) {
                  if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                  window.lintrk.q=[]}
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript";b.async = true;
                  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                  s.parentNode.insertBefore(b, s);})(window.lintrk);
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                alt=""
                src={`https://px.ads.linkedin.com/collect/?pid=${linkedInPartnerId}&fmt=gif`}
              />
            </noscript>
          </>
        )}

        {/* Google Analytics 4 — loads after interactive, does not block render */}
        <GoogleAnalytics gaId="G-0XJMCV552V" />
      </body>
    </html>
  );
}
