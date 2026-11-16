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
  title: 'EDIRA | Consultoría Tecnológica, Ingeniería de Datos y Desarrollo de Software B2B',
  description:
    'Consultoría tecnológica B2B en México especializada en ingeniería y gobernanza de datos, arquitectura cloud, integración de sistemas ERP, Business Intelligence y desarrollo de software a medida en Querétaro, CDMX y Monterrey.',
  metadataBase: new URL('https://edira.dev'),
  alternates: {
    canonical: 'https://edira.dev',
  },
  verification: {
    google: 'Z0oGw_L8T9g5YyIZ_ddTUbEA09bn3-csYnGnSPIr7lI',
  },
  openGraph: {
    title: 'EDIRA | Consultoría Tecnológica, Ingeniería de Datos y Software B2B',
    description:
      'Ingeniería y gobernanza de datos, arquitectura cloud, integración ERP, Business Intelligence e IA aplicada para empresas e industria en México.',
    url: 'https://edira.dev',
    siteName: 'EDIRA',
    images: [
      {
        url: 'https://edira.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EDIRA Consultoría Tecnológica e Ingeniería de Datos B2B',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
};

const structuredDataGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'Organization'],
      '@id': 'https://edira.dev/#organization',
      name: 'EDIRA',
      url: 'https://edira.dev',
      logo: 'https://edira.dev/images/edira.svg',
      image: 'https://edira.dev/og-image.jpg',
      description:
        'Consultoría tecnológica B2B en México especializada en ingeniería y gobernanza de datos, arquitectura cloud, integración de sistemas ERP y Business Intelligence para empresas e industria.',
      areaServed: [
        { '@type': 'City', name: 'Santiago de Querétaro' },
        { '@type': 'AdministrativeArea', name: 'El Marqués' },
        { '@type': 'AdministrativeArea', name: 'Corregidora' },
        { '@type': 'City', name: 'Ciudad de México' },
        { '@type': 'City', name: 'Monterrey' },
        { '@type': 'City', name: 'San Pedro Garza García' },
        { '@type': 'City', name: 'Guadalajara' },
        { '@type': 'Country', name: 'Mexico' },
      ],
      knowsAbout: [
        'Ingeniería de Datos',
        'Gobernanza de Datos',
        'Business Intelligence',
        'Arquitectura Cloud',
        'Integración de sistemas ERP',
        'Transformación Digital B2B',
        'Analítica Industrial',
        'Desarrollo de Software Empresarial',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Consultoría Tecnológica e Ingeniería de Datos B2B',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Ingeniería y Gobernanza de Datos',
              description:
                'Diseño de pipelines ETL/ELT, arquitecturas Medallion, Data Warehouses, Data Lakes, calidad, linaje, seguridad y catálogos de datos.',
              url: 'https://edira.dev/services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Intelligence (BI) y Analítica Ejecutiva',
              description:
                'Tableros directivos en tiempo real, torres de control Power BI, KPIs operativos, analítica financiera y predictiva.',
              url: 'https://edira.dev/services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Arquitectura Cloud e Infraestructura',
              description:
                'Diseño, migración y optimización de arquitecturas de datos en la nube escalables, seguras y de alta disponibilidad.',
              url: 'https://edira.dev/services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Integración de Sistemas y ERPs',
              description:
                'Conexión mediante APIs y microservicios entre sistemas ERP, CRM, MES de planta y plataformas analíticas.',
              url: 'https://edira.dev/services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Transformación Digital, IA Aplicada y Desarrollo de Software a Medida',
              description:
                'Automatización de procesos operativos, modelos de IA empresarial, asesoría ejecutiva C-Suite y desarrollo de software B2B a medida.',
              url: 'https://edira.dev/services',
            },
          },
        ],
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: 'https://edira.dev/#contacto',
        availableLanguage: ['es', 'en'],
        areaServed: 'MX',
      },
      potentialAction: {
        '@type': 'CommunicateAction',
        name: 'Solicitar Diagnóstico Ejecutivo',
        target: 'https://edira.dev/#contacto',
      },
      sameAs: [
        'https://www.linkedin.com/company/ediradev/',
        'https://x.com/edira_dev',
        'https://www.instagram.com/ediradev/',
        'https://www.facebook.com/ediradev',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://edira.dev/#website',
      url: 'https://edira.dev',
      name: 'EDIRA',
      publisher: {
        '@id': 'https://edira.dev/#organization',
      },
      inLanguage: 'es-MX',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://edira.dev/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué servicios ofrece EDIRA como consultoría tecnológica y de datos B2B?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'EDIRA ofrece consultoría B2B en ingeniería y gobernanza de datos, arquitectura cloud, integración de sistemas ERP, Business Intelligence, analítica predictiva con IA y desarrollo de software a medida. Entregamos pipelines ETL/ELT automatizados, arquitecturas Medallion, catálogos de datos gobernados y tableros directivos en tiempo real para empresas industriales y corporativos en Querétaro, Ciudad de México, Monterrey y Guadalajara.',
          },
        },
        {
          '@type': 'Question',
          name: '¿En qué ciudades de México brinda atención y consultoría EDIRA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'EDIRA opera con atención presencial y remota en los principales corredores industriales y corporativos de México: Santiago de Querétaro, El Marqués y Corregidora en Querétaro; Ciudad de México (CDMX); Monterrey y San Pedro Garza García en Nuevo León; y Guadalajara en Jalisco. Ejecutamos sesiones de descubrimiento en planta u oficinas corporativas y despliegue técnico continuo a nivel nacional.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo ayuda la ingeniería y gobernanza de datos a empresas industriales y corporativos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eliminamos silos operativos y hojas de cálculo manuales mediante pipelines auditables, contratos de métricas semánticas y estándares de calidad alineados con marcos ISO y NIST. Esto permite a plantas de manufactura, operaciones aeroespaciales MRO y corporativos en Querétaro, CDMX y Monterrey contar con trazabilidad completa, una única fuente de verdad financiera y operativa, y decisiones directivas confiables.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Pueden integrar datos de nuestro ERP actual con tableros de Business Intelligence y arquitecturas cloud?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Diseñamos conectores mediante APIs, microservicios y pipelines ELT para extraer y consolidar información de sistemas ERP, CRM, MES de planta y bases de datos legadas hacia Data Warehouses o Data Lakes en la nube. Sobre esta capa gobernada implementamos torres de control ejecutivas en Power BI y plataformas analíticas con actualización automatizada, control de costos cloud y seguridad empresarial.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo funciona el diagnóstico ejecutivo inicial con EDIRA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El proceso inicia al solicitar una sesión en edira.dev/#contacto. Nuestro equipo evalúa la madurez de datos, cuellos de botella en reportería, integraciones ERP y arquitectura actual de su organización en Querétaro, CDMX, Monterrey o cualquier plaza de México. Como entregable, presentamos una hoja de ruta técnica con alcance, arquitectura objetivo, KPIs de impacto financiero y plan de implementación en 8 etapas.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const linkedInPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
        />
      </head>
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

        {/* Google Tag / GTM */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-MLBGBTHX"
          strategy="afterInteractive"
        />
        <Script
          id="gtm-gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />

        {/* Google Analytics 4 — loads after interactive, does not block render */}
        <GoogleAnalytics gaId="G-0XJMCV552V" />
      </body>
    </html>
  );
}
