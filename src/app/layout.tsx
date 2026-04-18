import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/constants';
import { LangProvider } from '@/lib/i18n';
import { ContactModalProvider } from '@/providers/ContactModalContext';
import { GlobalContactModal } from '@/providers/GlobalContactModal';
import { App } from 'antd';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="EDIRA" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <LangProvider>
          <ContactModalProvider>
            <App>
              {children}
              <GlobalContactModal />
            </App>
          </ContactModalProvider>
        </LangProvider>
      </body>
    </html>
  );
}
