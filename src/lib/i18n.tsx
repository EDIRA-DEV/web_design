'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'en' | 'es';

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType | null>(null);

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.industries': 'Industries',
    'nav.caseStudies': 'Case Studies',
    'nav.resources': 'Resources',
    'nav.aboutUs': 'About Us',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact Us',

    // Hero
    'hero.prehead': 'Empowering business with the',
    'hero.title': 'Technology of Tomorrow',
    'hero.subtitle': 'From strategy to implementation, we design digital products, cloud architectures, and AI-powered solutions that are tailored to your context, measurable in their impact, and built to scale with your business.',
    'hero.cta.primary': 'Get started',
    'hero.cta.secondary': 'How we work',

    // Features
    'features.title1': 'Built for',
    'features.title2': 'Measurable',
    'features.title3': 'Impact.',
    'features.item0.title': 'Accelerate Decision-Making',
    'features.item0.desc': 'Move from fragmented information to clear, actionable insights.',
    'features.item1.title': 'Increase Operational Efficiency',
    'features.item1.desc': 'Eliminate bottlenecks and automate critical processes.',
    'features.item2.title': 'Scale with Confidence',
    'features.item2.desc': 'Build technology solutions that evolve alongside your business.',
    'features.item3.title': 'Optimize Financial Visibility',
    'features.item3.desc': 'Get real-time clarity on your financial performance and margins.',
    'features.learnMore': 'Learn more',

    // TailoredSolutions
    'tailored.title.italic': 'Tailored',
    'tailored.title.rest': 'Solutions',
    'tailored.subtitle': 'We craft personalized solutions that align with your unique business challenges, ensuring measurable impact and sustainable growth.',
    'tailored.item0.title': 'Cloud Data Architecture & Infrastructure',
    'tailored.item0.desc': 'Building modern data platforms for scalability and security.',
    'tailored.item1.title': 'Data Engineering & Automations',
    'tailored.item1.desc': 'Transform fragmented data into reliable, automated pipelines.',
    'tailored.item2.title': 'Analytics & Decision Intelligence',
    'tailored.item2.desc': 'Real-time dashboards, KPI frameworks, and automated insights.',
    'tailored.item3.title': 'Financial & Operational Analytics',
    'tailored.item3.desc': 'Real-time dashboards, KPI frameworks, and automated insights.',
    'tailored.item4.title': 'Applied AI & Predictive Insights',
    'tailored.item4.desc': 'Leverage AI to forecast demand, predict customer behavior, and optimize operations.',
    'tailored.item5.title': 'Data Governance & Strategy',
    'tailored.item5.desc': 'Establish secure, scalable data architectures and a clear strategy for long-term growth.',
    'tailored.item6.title': 'Executive Decision Intelligence Advisory',
    'tailored.item6.desc': 'Empower your leadership with data-driven insights and strategic frameworks.',
    'tailored.item7.title': 'Strategic Drive & Scalability',
    'tailored.item7.desc': 'Continuous optimization and expansion of data initiatives to maximize long-term value.',

    // Process
    'process.heading': 'Our Proven 8-Step Delivery Process.',
    'process.subheading': 'A structured approach to ensure measurable impact at every stage of your transformation journey.',
    'process.step0.title': 'Discover',
    'process.step0.desc': 'Align stakeholders and business objectives. We start by asking the right questions and identifying key players.',
    'process.step1.title': 'Define',
    'process.step1.desc': 'Establish clear goals, KPIs, and project scope for successful outcomes.',
    'process.step2.title': 'Diagnose',
    'process.step2.desc': 'Assess data quality and existing processes. We ensure that data and systems are reliable before building solutions.',
    'process.step3.title': 'Design',
    'process.step3.desc': 'Architect the solution and define the technical roadmap.',
    'process.step4.title': 'Develop',
    'process.step4.desc': 'Build and integrate the necessary data pipelines, models, and dashboards.',
    'process.step5.title': 'Deploy',
    'process.step5.desc': 'Launch the solution and enable teams with the right training and support.',
    'process.step6.title': 'Deliver',
    'process.step6.desc': 'Documentation, data governance, and knowledge transfer for long-term sustainability.',
    'process.step7.title': 'Drive',
    'process.step7.desc': 'Continuously monitor and optimize performance to expand impact within the organization.',

    // Testimonials (Contact form)
    'testimonials.title1': 'Ready to',
    'testimonials.title.italic': 'Transform',
    'testimonials.title2': 'Your Business?',
    'testimonials.subtitle': 'Get in touch with our team to start your journey toward data-driven success.',
    'testimonials.success': 'Thank you! We will be in touch soon.',
    'testimonials.field.firstName': 'First Name*',
    'testimonials.field.lastName': 'Last Name*',
    'testimonials.field.email': 'E-mail*',
    'testimonials.field.phone': 'Phone*',
    'testimonials.field.company': 'Company*',
    'testimonials.field.position': 'Position',
    'testimonials.field.location': 'Location*',
    'testimonials.field.city': 'City',
    'testimonials.field.message': 'How can we help?',
    'testimonials.submit': 'Get started',

    // CTA
    'cta.title': 'Ready to get started?',
    'cta.desc': 'Start today and transform your business.',
    'cta.primary': 'Start now',
    'cta.secondary': 'Contact sales',

    // Footer
    'footer.rights': 'All rights reserved.',

    // Services Hero
    'servicesHero.prehead': 'Built for Complexity.',
    'servicesHero.title': 'Designed for Impact.',
    'servicesHero.subtitle': 'We help organizations build stronger data foundations, activate AI with purpose, and turn fragmented systems into scalable decision-making capabilities.',
    'servicesHero.cta': 'Get started',

    // Deliverables
    'deliverables.title.main': 'What We',
    'deliverables.title.italic': 'Deliver',
    'deliverables.card0.title': 'Close the Gap',
    'deliverables.card0.desc': 'We bridge the gap between technology investment and real business value, ensuring every initiative delivers measurable impact.',
    'deliverables.card1.title': 'Built for your Needs',
    'deliverables.card1.desc': 'From data infrastructure to AI and executive advisory, we design solutions tailored to your specific challenges and priorities.',
    'deliverables.card2.title': 'Designed to Scale',
    'deliverables.card2.desc': 'Our solutions are practical, scalable, and built to evolve with your business—delivering long-term value, not just short-term fixes.',

    // CoreServices
    'coreServices.title.italic': 'Core',
    'coreServices.title.rest': 'Services Areas',
    'coreServices.item0.title': 'Cloud Data Architecture & Infrastructure',
    'coreServices.item0.desc': 'Design of modern data architectures that provide performance, security and scalability for advanced analytics and artificial intelligence.',
    'coreServices.item0.p0': 'Modern Data Foundations',
    'coreServices.item0.p1': 'Strategic Cloud Migration',
    'coreServices.item0.p2': 'High-Availability Infrastructure',
    'coreServices.item0.p3': 'Cloud Performance Optimization for analytics and AI workloads',
    'coreServices.item0.p4': 'Cloud Cost Optimization and operational efficiency',
    'coreServices.item1.title': 'Data Engineering & Automations',
    'coreServices.item1.desc': 'Transformation of fragmented data flows into reliable and automated pipelines.',
    'coreServices.item1.p0': 'Automated ETL / ELT Pipelines across systems',
    'coreServices.item1.p1': 'ERP, CRM and API ecosystem integration',
    'coreServices.item1.p2': 'Data ingestion and workflow orchestration',
    'coreServices.item1.p3': 'Automated data validation and quality monitoring',
    'coreServices.item1.p4': 'Scalable pipelines designed for performance',
    'coreServices.item2.title': 'Analytics & Decision Intelligence',
    'coreServices.item2.desc': 'Real-time dashboards, KPI frameworks, and automated insights.',
    'coreServices.item2.p0': 'Executive dashboards and real-time monitoring',
    'coreServices.item2.p1': 'KPI and performance frameworks aligned with strategy',
    'coreServices.item2.p2': 'Self-service analytics environments',
    'coreServices.item2.p3': 'Automated insights and intelligent reporting',
    'coreServices.item3.title': 'Financial & Operational Analytics',
    'coreServices.item3.desc': 'Optimizing profitability and operational performance.',
    'coreServices.item3.p0': 'Profitability and cost analysis across business units',
    'coreServices.item3.p1': 'Financial forecasting and scenario modeling',
    'coreServices.item3.p2': 'Operational performance monitoring',
    'coreServices.item3.p3': 'Data-driven pricing optimization',
    'coreServices.item4.title': 'Applied AI & Predictive Insights',
    'coreServices.item4.desc': 'Leverage AI to forecast demand, predict customer behavior, and optimize operations.',
    'coreServices.item4.p0': 'Demand forecasting and predictive analytics',
    'coreServices.item4.p1': 'Customer behavior and churn prediction',
    'coreServices.item4.p2': 'Predictive risk and operational intelligence',
    'coreServices.item4.p3': 'Natural Language Processing (NLP) automation',
    'coreServices.item5.title': 'Data Governance & Strategy',
    'coreServices.item5.desc': 'Establish secure, scalable data architectures and a clear strategy for long-term growth.',
    'coreServices.item5.p0': 'Enterprise governance and data ethics frameworks',
    'coreServices.item5.p1': 'Data strategy and long-term roadmaps',
    'coreServices.item5.p2': 'Compliance and risk management (ISO / NIST)',
    'coreServices.item5.p3': 'Data ownership models and quality standards',
    'coreServices.item6.title': 'Executive Decision Intelligence Advisory',
    'coreServices.item6.desc': 'Empower your leadership with data-driven insights and strategic frameworks.',
    'coreServices.item6.p0': 'C-Suite strategic support and insights',
    'coreServices.item6.p1': 'Strategic performance frameworks',
    'coreServices.item6.p2': 'Decision intelligence frameworks',
    'coreServices.item6.p3': 'AI transformation advisory',
    'coreServices.item7.title': 'Strategic Drive & Scalability',
    'coreServices.item7.desc': 'Continuous optimization and expansion of data initiatives to maximize long-term value.',
    'coreServices.item7.p0': 'Data roadmap and long-term strategic alignment',
    'coreServices.item7.p1': 'Scalable architecture for future-ready expansion',
    'coreServices.item7.p2': 'Continuous performance tuning and iterative optimization',

    // BeyondImplementation
    'beyond.title.italic': 'Beyond',
    'beyond.title.rest': 'Implementation',
    'beyond.desc': 'The value of a solution is not in deployment alone. It is in how well it integrates with your business, how quickly your teams adopt it, and how consistently it drives better decisions over time.',

    // Outcomes
    'outcomes.title1': 'How We Turn',
    'outcomes.title2': 'Services Into',
    'outcomes.title.italic': 'Outcomes',
    'outcomes.desc': 'Every engagement is delivered through a structured model designed to align strategy, execution, and measurable impact.',
  },
  es: {
    // Navbar
    'nav.services': 'Servicios',
    'nav.industries': 'Industrias',
    'nav.caseStudies': 'Casos de Éxito',
    'nav.resources': 'Recursos',
    'nav.aboutUs': 'Nosotros',
    'nav.careers': 'Carreras',
    'nav.contact': 'Contáctanos',

    // Hero
    'hero.prehead': 'Impulsando negocios con la',
    'hero.title': 'Tecnología del Mañana',
    'hero.subtitle': 'De la estrategia a la implementación, diseñamos productos digitales, arquitecturas en la nube y soluciones impulsadas por IA adaptadas a tu contexto, medibles en su impacto y preparadas para escalar con tu negocio.',
    'hero.cta.primary': 'Comenzar',
    'hero.cta.secondary': 'Cómo trabajamos',

    // Features
    'features.title1': 'Construido para',
    'features.title2': 'Impacto',
    'features.title3': 'Medible.',
    'features.item0.title': 'Acelera la Toma de Decisiones',
    'features.item0.desc': 'Pasa de información fragmentada a insights claros y accionables.',
    'features.item1.title': 'Aumenta la Eficiencia Operacional',
    'features.item1.desc': 'Elimina cuellos de botella y automatiza procesos críticos.',
    'features.item2.title': 'Escala con Confianza',
    'features.item2.desc': 'Construye soluciones tecnológicas que evolucionan junto con tu negocio.',
    'features.item3.title': 'Optimiza la Visibilidad Financiera',
    'features.item3.desc': 'Obtén claridad en tiempo real sobre tu desempeño financiero y márgenes.',
    'features.learnMore': 'Saber más',

    // TailoredSolutions
    'tailored.title.italic': 'Soluciones',
    'tailored.title.rest': 'a la Medida',
    'tailored.subtitle': 'Diseñamos soluciones personalizadas que se alinean con los desafíos únicos de tu negocio, garantizando un impacto medible y un crecimiento sostenible.',
    'tailored.item0.title': 'Arquitectura e Infraestructura de Datos en la Nube',
    'tailored.item0.desc': 'Construcción de plataformas de datos modernas para escalabilidad y seguridad.',
    'tailored.item1.title': 'Ingeniería de Datos & Automatizaciones',
    'tailored.item1.desc': 'Transforma datos fragmentados en pipelines confiables y automatizados.',
    'tailored.item2.title': 'Analítica & Inteligencia para Decisiones',
    'tailored.item2.desc': 'Dashboards en tiempo real, marcos de KPI e insights automatizados.',
    'tailored.item3.title': 'Analítica Financiera & Operacional',
    'tailored.item3.desc': 'Dashboards en tiempo real, marcos de KPI e insights automatizados.',
    'tailored.item4.title': 'IA Aplicada & Insights Predictivos',
    'tailored.item4.desc': 'Aprovecha la IA para prever demanda, predecir el comportamiento del cliente y optimizar operaciones.',
    'tailored.item5.title': 'Gobernanza de Datos & Estrategia',
    'tailored.item5.desc': 'Establece arquitecturas de datos seguras y escalables con una estrategia clara a largo plazo.',
    'tailored.item6.title': 'Asesoría Ejecutiva en Inteligencia de Decisiones',
    'tailored.item6.desc': 'Empodera a tu liderazgo con insights basados en datos y marcos estratégicos.',
    'tailored.item7.title': 'Impulso Estratégico & Escalabilidad',
    'tailored.item7.desc': 'Optimización continua y expansión de iniciativas de datos para maximizar el valor a largo plazo.',

    // Process
    'process.heading': 'Nuestro Proceso de Entrega Probado en 8 Pasos.',
    'process.subheading': 'Un enfoque estructurado para garantizar un impacto medible en cada etapa de tu camino de transformación.',
    'process.step0.title': 'Descubrir',
    'process.step0.desc': 'Alinear stakeholders y objetivos de negocio. Empezamos haciendo las preguntas correctas e identificando los actores clave.',
    'process.step1.title': 'Definir',
    'process.step1.desc': 'Establecer metas claras, KPIs y alcance del proyecto para lograr resultados exitosos.',
    'process.step2.title': 'Diagnosticar',
    'process.step2.desc': 'Evaluar la calidad de los datos y los procesos existentes. Garantizamos que los datos y sistemas sean confiables antes de construir soluciones.',
    'process.step3.title': 'Diseñar',
    'process.step3.desc': 'Arquitecturar la solución y definir la hoja de ruta técnica.',
    'process.step4.title': 'Desarrollar',
    'process.step4.desc': 'Construir e integrar los pipelines de datos, modelos y dashboards necesarios.',
    'process.step5.title': 'Desplegar',
    'process.step5.desc': 'Lanzar la solución y habilitar a los equipos con la capacitación y el soporte adecuados.',
    'process.step6.title': 'Entregar',
    'process.step6.desc': 'Documentación, gobernanza de datos y transferencia de conocimiento para la sostenibilidad a largo plazo.',
    'process.step7.title': 'Impulsar',
    'process.step7.desc': 'Monitorear y optimizar continuamente el rendimiento para expandir el impacto dentro de la organización.',

    // Testimonials (Contact form)
    'testimonials.title1': '¿Listo para',
    'testimonials.title.italic': 'Transformar',
    'testimonials.title2': 'Tu Negocio?',
    'testimonials.subtitle': 'Ponte en contacto con nuestro equipo para comenzar tu camino hacia el éxito basado en datos.',
    'testimonials.success': '¡Gracias! Nos pondremos en contacto pronto.',
    'testimonials.field.firstName': 'Nombre*',
    'testimonials.field.lastName': 'Apellido*',
    'testimonials.field.email': 'Correo electrónico*',
    'testimonials.field.phone': 'Teléfono*',
    'testimonials.field.company': 'Empresa*',
    'testimonials.field.position': 'Cargo',
    'testimonials.field.location': 'País*',
    'testimonials.field.city': 'Ciudad',
    'testimonials.field.message': '¿Cómo podemos ayudarte?',
    'testimonials.submit': 'Comenzar',

    // CTA
    'cta.title': '¿Listo para comenzar?',
    'cta.desc': 'Empieza hoy y transforma tu negocio.',
    'cta.primary': 'Empezar ahora',
    'cta.secondary': 'Contactar ventas',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',

    // Services Hero
    'servicesHero.prehead': 'Construido para la Complejidad.',
    'servicesHero.title': 'Diseñado para el Impacto.',
    'servicesHero.subtitle': 'Ayudamos a las organizaciones a construir bases de datos más sólidas, activar la IA con propósito y convertir sistemas fragmentados en capacidades de toma de decisiones escalables.',
    'servicesHero.cta': 'Comenzar',

    // Deliverables
    'deliverables.title.main': 'Lo que',
    'deliverables.title.italic': 'Entregamos',
    'deliverables.card0.title': 'Cerrar la Brecha',
    'deliverables.card0.desc': 'Conectamos la inversión tecnológica con el valor real del negocio, asegurando que cada iniciativa entregue un impacto medible.',
    'deliverables.card1.title': 'Hecho para tus Necesidades',
    'deliverables.card1.desc': 'Desde infraestructura de datos hasta IA y asesoría ejecutiva, diseñamos soluciones adaptadas a tus desafíos y prioridades específicas.',
    'deliverables.card2.title': 'Diseñado para Escalar',
    'deliverables.card2.desc': 'Nuestras soluciones son prácticas, escalables y construidas para evolucionar con tu negocio, entregando valor a largo plazo.',

    // CoreServices
    'coreServices.title.italic': 'Áreas',
    'coreServices.title.rest': 'Centrales de Servicios',
    'coreServices.item0.title': 'Arquitectura e Infraestructura de Datos en la Nube',
    'coreServices.item0.desc': 'Diseño de arquitecturas de datos modernas que brindan rendimiento, seguridad y escalabilidad para análisis avanzados e inteligencia artificial.',
    'coreServices.item0.p0': 'Fundamentos de Datos Modernos',
    'coreServices.item0.p1': 'Migración Estratégica a la Nube',
    'coreServices.item0.p2': 'Infraestructura de Alta Disponibilidad',
    'coreServices.item0.p3': 'Optimización del Rendimiento en la Nube para analítica e IA',
    'coreServices.item0.p4': 'Optimización de Costos en la Nube y eficiencia operacional',
    'coreServices.item1.title': 'Ingeniería de Datos & Automatizaciones',
    'coreServices.item1.desc': 'Transformación de flujos de datos fragmentados en pipelines confiables y automatizados.',
    'coreServices.item1.p0': 'Pipelines ETL / ELT Automatizados entre sistemas',
    'coreServices.item1.p1': 'Integración de ecosistemas ERP, CRM y API',
    'coreServices.item1.p2': 'Ingesta de datos y orquestación de flujos de trabajo',
    'coreServices.item1.p3': 'Validación automatizada de datos y monitoreo de calidad',
    'coreServices.item1.p4': 'Pipelines escalables diseñados para el rendimiento',
    'coreServices.item2.title': 'Analítica & Inteligencia para Decisiones',
    'coreServices.item2.desc': 'Dashboards en tiempo real, marcos de KPI e insights automatizados.',
    'coreServices.item2.p0': 'Dashboards ejecutivos y monitoreo en tiempo real',
    'coreServices.item2.p1': 'Marcos de KPI y rendimiento alineados con la estrategia',
    'coreServices.item2.p2': 'Entornos de analítica de autoservicio',
    'coreServices.item2.p3': 'Insights automatizados e informes inteligentes',
    'coreServices.item3.title': 'Analítica Financiera & Operacional',
    'coreServices.item3.desc': 'Optimización de la rentabilidad y el rendimiento operacional.',
    'coreServices.item3.p0': 'Análisis de rentabilidad y costos entre unidades de negocio',
    'coreServices.item3.p1': 'Pronóstico financiero y modelado de escenarios',
    'coreServices.item3.p2': 'Monitoreo del rendimiento operacional',
    'coreServices.item3.p3': 'Optimización de precios basada en datos',
    'coreServices.item4.title': 'IA Aplicada & Insights Predictivos',
    'coreServices.item4.desc': 'Aprovecha la IA para prever demanda, predecir el comportamiento del cliente y optimizar operaciones.',
    'coreServices.item4.p0': 'Pronóstico de demanda y analítica predictiva',
    'coreServices.item4.p1': 'Predicción del comportamiento y abandono del cliente',
    'coreServices.item4.p2': 'Inteligencia operacional y de riesgo predictiva',
    'coreServices.item4.p3': 'Automatización de Procesamiento de Lenguaje Natural (PLN)',
    'coreServices.item5.title': 'Gobernanza de Datos & Estrategia',
    'coreServices.item5.desc': 'Establece arquitecturas de datos seguras y escalables con una estrategia clara a largo plazo.',
    'coreServices.item5.p0': 'Gobernanza empresarial y marcos de ética de datos',
    'coreServices.item5.p1': 'Estrategia de datos y hojas de ruta a largo plazo',
    'coreServices.item5.p2': 'Gestión de cumplimiento y riesgos (ISO / NIST)',
    'coreServices.item5.p3': 'Modelos de propiedad de datos y estándares de calidad',
    'coreServices.item6.title': 'Asesoría Ejecutiva en Inteligencia de Decisiones',
    'coreServices.item6.desc': 'Empodera a tu liderazgo con insights basados en datos y marcos estratégicos.',
    'coreServices.item6.p0': 'Apoyo estratégico e insights para la Alta Dirección',
    'coreServices.item6.p1': 'Marcos de rendimiento estratégico',
    'coreServices.item6.p2': 'Marcos de inteligencia para decisiones',
    'coreServices.item6.p3': 'Asesoría en transformación con IA',
    'coreServices.item7.title': 'Impulso Estratégico & Escalabilidad',
    'coreServices.item7.desc': 'Optimización continua y expansión de iniciativas de datos para maximizar el valor a largo plazo.',
    'coreServices.item7.p0': 'Hoja de ruta de datos y alineación estratégica a largo plazo',
    'coreServices.item7.p1': 'Arquitectura escalable para expansión futura',
    'coreServices.item7.p2': 'Ajuste continuo del rendimiento y optimización iterativa',

    // BeyondImplementation
    'beyond.title.italic': 'Más allá de la',
    'beyond.title.rest': 'Implementación',
    'beyond.desc': 'El valor de una solución no está solo en el despliegue. Está en qué tan bien se integra con tu negocio, qué tan rápido la adoptan tus equipos y qué tan consistentemente impulsa mejores decisiones con el tiempo.',

    // Outcomes
    'outcomes.title1': 'Cómo Convertimos',
    'outcomes.title2': 'Servicios en',
    'outcomes.title.italic': 'Resultados',
    'outcomes.desc': 'Cada compromiso se entrega mediante un modelo estructurado diseñado para alinear estrategia, ejecución e impacto medible.',
  },
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const t = (key: string): string => {
    return translations[lang][key] ?? translations['en'][key] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within a LangProvider');
  return ctx;
}
