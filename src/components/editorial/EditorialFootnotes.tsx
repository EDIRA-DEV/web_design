'use client';

import React, { useCallback, useEffect, useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, ExternalLink, Minus, Plus, Share2 } from 'lucide-react';
import { ShareModal } from './ShareModal';
import { useLanguage } from '@/context/LanguageContext';
import styles from './EditorialFootnotes.module.css';
import refStyles from './OfficialReferences.module.css';

/* ─────────────────────────────────────────────────────────────
   ENDNOTES DATA
   ───────────────────────────────────────────────────────────── */
interface ReferenceCard {
  id: string;
  refIndex: string;
  date: string;
  dateEs: string;
  titleEn: string;
  titleEs: string;
  subtitleEn: string;
  subtitleEs: string;
  url: string;
  categoryEn: string;
  categoryEs: string;
}

const ENDNOTES: ReferenceCard[] = [
  {
    id: 'endnote-1',
    refIndex: '[1]',
    date: 'Safran. (July 24, 2024)',
    dateEs: 'Safran. (24 de julio de 2024)',
    titleEn: 'Safran to strengthen its footprint in Querétaro (Mexico) with new engine maintenance and production capacities',
    titleEs: 'Safran to strengthen its footprint in Querétaro (Mexico) with new engine maintenance and production capacities',
    subtitleEn: 'Official Press Release',
    subtitleEs: 'Comunicado de prensa oficial',
    url: 'https://www.safran-group.com/pressroom/safran-strengthen-its-footprint-queretaro-mexico-new-engine-maintenance-and-production-capacities-2024-07-22',
    categoryEn: 'Facility Expansion',
    categoryEs: 'Expansión de Instalaciones',
  },
  {
    id: 'endnote-2',
    refIndex: '[2]',
    date: 'Safran. (July 1, 2026)',
    dateEs: 'Safran. (1 de julio de 2026)',
    titleEn: 'Safran opens new maintenance shop in Querétaro (Mexico), strengthening its MRO hub in the Americas',
    titleEs: 'Safran opens new maintenance shop in Querétaro (Mexico), strengthening its MRO hub in the Americas',
    subtitleEn: 'Official Press Release',
    subtitleEs: 'Comunicado de prensa oficial',
    url: 'https://www.safran-group.com/pressroom/safran-opens-new-maintenance-shop-queretaro-mexico-strengthening-its-mro-hub-americas-2026-06-30',
    categoryEn: 'Shop Commissioning',
    categoryEs: 'Inauguración de Taller',
  },
  {
    id: 'endnote-3',
    refIndex: '[3]',
    date: 'Safran. (July 2, 2026)',
    dateEs: 'Safran. (2 de julio de 2026)',
    titleEn: 'Safran strengthens its footprint in Mexico with two new plants in Querétaro and Chihuahua',
    titleEs: 'Safran strengthens its footprint in Mexico with two new plants in Querétaro and Chihuahua',
    subtitleEn: 'Official Press Release',
    subtitleEs: 'Comunicado de prensa oficial',
    url: 'https://www.safran-group.com/news/safran-strengthens-its-footprint-mexico-two-new-plants-queretaro-and-chihuahua-2026-07-02',
    categoryEn: 'Facility Expansion',
    categoryEs: 'Expansión de Instalaciones',
  },
  {
    id: 'endnote-4',
    refIndex: '[4]',
    date: 'Safran. (February 13, 2026)',
    dateEs: 'Safran. (13 de febrero de 2026)',
    titleEn: 'Safran reports excellent financial performance in 2025 and raises its 2028 ambitions',
    titleEs: 'Safran reports excellent financial performance in 2025 and raises its 2028 ambitions',
    subtitleEn: 'Financial Disclosure',
    subtitleEs: 'Divulgación financiera',
    url: 'https://www.safran-group.com/pressroom/safran-reports-excellent-financial-performance-2025-and-raises-its-2028-ambitions-2026-02-13',
    categoryEn: 'Financial Performance',
    categoryEs: 'Desempeño Financiero',
  },
  {
    id: 'endnote-5',
    refIndex: '[5]',
    date: 'Safran. (July 28, 2026)',
    dateEs: 'Safran. (28 de julio de 2026)',
    titleEn: 'Safran reports its first-half 2026 results',
    titleEs: 'Safran reports its first-half 2026 results',
    subtitleEn: 'Financial Disclosure',
    subtitleEs: 'Divulgación financiera',
    url: 'https://www.safran-group.com/pressroom/safran-reports-its-first-half-2026-results-2026-07-28',
    categoryEn: 'Financial Performance',
    categoryEs: 'Desempeño Financiero',
  },
  {
    id: 'endnote-6',
    refIndex: '[6]',
    date: 'Safran. (June 3, 2026)',
    dateEs: 'Safran. (3 de junio de 2026)',
    titleEn: 'Exane CEO Conference',
    titleEs: 'Exane CEO Conference',
    subtitleEn: 'Investor presentation',
    subtitleEs: 'Presentación para inversionistas',
    url: 'https://www.safran-group.com/download/media/451166',
    categoryEn: 'Investor Relations',
    categoryEs: 'Relación con Inversionistas',
  },
  {
    id: 'endnote-7',
    refIndex: '[7]',
    date: 'Safran. (n.d.)',
    dateEs: 'Safran. (s.f.)',
    titleEn: 'Mexico: The number one employer in the Mexican aerospace industry',
    titleEs: 'Mexico: The number one employer in the Mexican aerospace industry',
    subtitleEn: 'Retrieved August 15, 2026',
    subtitleEs: 'Consultado el 15 de agosto de 2026',
    url: 'https://www.safran-group.com/countries/mexico',
    categoryEn: 'Corporate Disclosures',
    categoryEs: 'Divulgación Corporativa',
  },
];

/* ─────────────────────────────────────────────────────────────
   BYLINE DATA
   ───────────────────────────────────────────────────────────── */
const BYLINE_ROWS = [
  {
    labelEn: 'Research & Architecture',
    labelEs: 'Investigación y Arquitectura',
    valueEn: 'Enterprise Data Practice & Systems Architecture',
    valueEs: 'Práctica de Datos Empresariales y Arquitectura de Sistemas',
  },
  {
    labelEn: 'Editorial & Strategy',
    labelEs: 'Editorial y Estrategia',
    valueEn: 'Executive Decision Intelligence Practice',
    valueEs: 'Práctica de Inteligencia para la Decisión Ejecutiva',
  },
  {
    labelEn: 'Creative Direction',
    labelEs: 'Dirección Creativa',
    valueEn: 'Digital Systems & Editorial Design',
    valueEs: 'Sistemas Digitales y Diseño Editorial',
  },
  {
    labelEn: 'Technical Deployment',
    labelEs: 'Despliegue Técnico',
    valueEn: 'Cloud Infrastructure & Platform Engineering',
    valueEs: 'Infraestructura Cloud e Ingeniería de Plataformas',
  },
];

/* ─────────────────────────────────────────────────────────────
   ACCORDION SECTION — single item
   ───────────────────────────────────────────────────────────── */
interface AccordionSectionProps {
  id: string;
  panelId: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function AccordionSection({
  id,
  panelId,
  title,
  isOpen,
  onToggle,
  children,
}: AccordionSectionProps) {
  return (
    <div className={styles.accordionItem}>
      <button
        id={id}
        type="button"
        className={styles.accordionTrigger}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className={styles.accordionTitle}>{title}</span>
        <span className={styles.accordionIcon} aria-hidden="true">
          {isOpen ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={id}
            key="panel"
            initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
            animate={{
              height: 'auto',
              opacity: 1,
              transitionEnd: { overflow: 'visible' },
            }}
            exit={{ height: 0, opacity: 0, overflow: 'hidden' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className={styles.accordionPanel}
          >
            <div className={styles.accordionPanelInner}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export function EditorialFootnotes() {
  const { isEs } = useLanguage();
  const uid = useId();

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    endnotes: false,
    disclosures: false,
    copyright: false,
  });

  const toggle = useCallback((key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  /* ── Listen for sidebar REF click → open endnotes ――――――――――― */
  useEffect(() => {
    const handleOpenEndnotes = () => {
      setOpenSections((prev) => ({ ...prev, endnotes: true }));
    };
    window.addEventListener('edira:open-endnotes', handleOpenEndnotes);
    return () => window.removeEventListener('edira:open-endnotes', handleOpenEndnotes);
  }, []);

  const [shareOpen, setShareOpen] = useState(false);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/docs/EDIRA_Whitepaper_H2_2026.pdf';
    link.download = 'EDIRA_Whitepaper_H2_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section
      id="endnotes"
      className={styles.wrapper}
      aria-label={isEs ? 'Notas finales y avisos legales' : 'Endnotes and legal notices'}
    >
      {/* ════ BYLINE BAR ════ */}
      <div className={styles.bylineBar}>
        <div className={styles.bylineLeft}>
          <span className={styles.bylineLabel} aria-hidden="true">BY</span>
          <dl className={styles.bylineGrid}>
            {BYLINE_ROWS.map((row) => (
              <div key={row.labelEn} className={styles.bylineEntry}>
                <dt className={styles.bylineEntryLabel}>
                  {isEs ? row.labelEs : row.labelEn}
                </dt>
                <dd className={styles.bylineEntryValue}>
                  {isEs ? row.valueEs : row.valueEn}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.utilityActions} role="group" aria-label={isEs ? 'Acciones' : 'Actions'}>
          <button
            type="button"
            className={styles.utilityBtn}
            onClick={() => setShareOpen(true)}
            aria-label={isEs ? 'Compartir paper' : 'Share this paper'}
            aria-haspopup="dialog"
          >
            <Share2 size={17} strokeWidth={1.75} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={styles.utilityBtn}
            onClick={handleDownload}
            aria-label={isEs ? 'Descargar paper (PDF)' : 'Download paper (PDF)'}
          >
            <Download size={17} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* ════ ACCORDION — ENDNOTES ════ */}
      <AccordionSection
        id={`${uid}-endnotes-trigger`}
        panelId={`${uid}-endnotes-panel`}
        title={isEs ? 'NOTAS FINALES' : 'ENDNOTES'}
        isOpen={openSections.endnotes}
        onToggle={() => toggle('endnotes')}
      >
        <ol className={refStyles.list}>
          {ENDNOTES.map((note) => {
            const category = isEs ? note.categoryEs : note.categoryEn;
            const date = isEs ? note.dateEs : note.date;
            const title = isEs ? note.titleEs : note.titleEn;
            const subtitle = isEs ? note.subtitleEs : note.subtitleEn;
            const viewSource = isEs ? 'Ver fuente' : 'View source';
            return (
              <li key={note.id} id={note.id} className={refStyles.card}>
                <div className={refStyles.refBadge} aria-hidden="true">
                  {note.refIndex}
                </div>
                <div className={refStyles.content}>
                  <div className={refStyles.metaRow}>
                    <span className={refStyles.authorDate}>{date}</span>
                    <span className={refStyles.categoryTag}>{category}</span>
                  </div>
                  <p className={refStyles.citationTitle}>{title}</p>
                  <p className={refStyles.citationDetails}>{subtitle}</p>
                  <a
                    href={note.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={refStyles.inlineLink}
                  >
                    {note.url}
                  </a>
                </div>
                <a
                  href={note.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={refStyles.actionBtn}
                  aria-label={`${viewSource}: ${title}`}
                >
                  <span>{viewSource}</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ol>
      </AccordionSection>

      {/* ════ ACCORDION — DISCLOSURES ════ */}
      <AccordionSection
        id={`${uid}-disclosures-trigger`}
        panelId={`${uid}-disclosures-panel`}
        title={isEs ? 'AVISOS Y DIVULGACIONES' : 'DISCLOSURES & NOTICES'}
        isOpen={openSections.disclosures}
        onToggle={() => toggle('disclosures')}
      >
        <div className={styles.proseBlock}>
          <h3 className={styles.proseHeading}>
            {isEs ? 'Aviso de Estudio de Caso y Referencia Operativa' : 'Case Study & Operational Reference Notice'}
          </h3>
          <p className={styles.proseParagraph}>
            {isEs
              ? 'Esta entrega examina la sincronización de flujos de trabajo, las restricciones de throughput y el modelado de capacidad dentro de sistemas avanzados de mantenimiento y propulsión, utilizando divulgaciones públicas, benchmarks empíricos y datos operativos regionales asociados al clúster aeroespacial de Querétaro, incluyendo las operaciones de Safran MRO. Todas las referencias a programas comerciales específicos, plataformas de motores (como la familia CFM LEAP) o huellas de manufactura son estrictamente analíticas y metodológicas. Esta publicación representa un modelado operativo independiente de EDIRA y no representa, implica respaldo de, ni divulga datos confidenciales propietarios pertenecientes a Safran S.A. o sus subsidiarias.'
              : 'This installment examines workflow synchronization, throughput constraints, and capacity modeling within advanced maintenance and propulsion systems, using public disclosures, empirical benchmarks, and regional operational data associated with the Querétaro aerospace cluster, including Safran MRO operations. All references to specific commercial programs, engine platforms (such as the CFM LEAP family), or manufacturing footprints are strictly analytical and methodological. This publication represents independent operational modeling by EDIRA and does not represent, imply endorsement by, or disclose proprietary confidential data belonging to Safran S.A. or its subsidiaries.'}
          </p>
          <h3 className={styles.proseHeading}>
            {isEs ? 'Acerca de Esta Publicación' : 'About This Publication'}
          </h3>
          <p className={styles.proseParagraph}>
            {isEs
              ? 'Esta publicación contiene marcos técnicos y estratégicos generales únicamente. Ni EDIRA, sus entidades operativas, ni sus afiliadas están, mediante esta publicación, prestando servicios formales de ingeniería, asesoría legal, regulatoria o financiera. Antes de emprender inversiones de capital, iniciativas de migración a la nube o reestructuraciones operativas, las organizaciones deben consultar a profesionales técnicos calificados. EDIRA no será responsable por ninguna pérdida operativa o desviación comercial sufrida por cualquier persona o entidad que dependa de esta publicación.'
              : 'This publication contains general technical and strategic frameworks only. Neither EDIRA, its operating entities, nor its affiliates are, by means of this publication, rendering formal engineering, legal, regulatory, or financial advisory services. Before undertaking capital investments, cloud migration initiatives, or operational restructurings, organizations should consult qualified technical professionals. EDIRA shall not be responsible for any operational loss or business deviation sustained by any person or entity relying on this publication.'}
          </p>
        </div>
      </AccordionSection>

      {/* ════ ACCORDION — COPYRIGHT ════ */}
      <AccordionSection
        id={`${uid}-copyright-trigger`}
        panelId={`${uid}-copyright-panel`}
        title="COPYRIGHT"
        isOpen={openSections.copyright}
        onToggle={() => toggle('copyright')}
      >
        <div className={styles.proseBlock}>
          <p className={styles.proseParagraph}>
            {isEs ? 'Copyright© 2026 EDIRA. Todos los derechos reservados.' : 'Copyright© 2026 EDIRA. All rights reserved.'}
          </p>
          <h3 className={styles.proseHeading}>
            {isEs ? 'Acerca de EDIRA Research' : 'About EDIRA Research'}
          </h3>
          <p className={styles.proseParagraph}>
            {isEs
              ? 'EDIRA Research es la práctica de investigación y publicación de EDIRA. Publicamos papers técnicos originales, marcos operativos y benchmarks estratégicos diseñados para ayudar a los líderes empresariales a eliminar la deuda de datos y transitar de información fragmentada a claridad ejecutiva accionable. Con base en implementaciones del mundo real en entornos operativos complejos, nuestro trabajo avanza el estándar arquitectónico para sistemas de datos en la nube escalables, gobernanza auditable y preparación para IA empresarial.'
              : 'EDIRA Research is the research and publication practice of EDIRA. We publish original technical papers, operational frameworks, and strategic benchmarks designed to help enterprise leaders eliminate data debt and transition from fragmented information to actionable executive clarity. Drawing upon real-world implementations across complex operating environments, our work advances the architectural standard for scalable cloud data systems, auditable governance, and enterprise AI readiness.'}
          </p>
          <h3 className={styles.proseHeading}>
            {isEs ? 'Acerca de Esta Publicación' : 'About This Publication'}
          </h3>
          <p className={styles.proseParagraph}>
            {isEs
              ? 'Esta publicación contiene marcos técnicos y estratégicos generales únicamente. Ni EDIRA, sus entidades operativas, ni sus afiliadas están, mediante esta publicación, prestando servicios formales de ingeniería, asesoría legal, regulatoria o financiera. Antes de emprender inversiones de capital, iniciativas de migración a la nube o reestructuraciones operativas, las organizaciones deben consultar a profesionales técnicos calificados. EDIRA no será responsable por ninguna pérdida operativa o desviación comercial sufrida por cualquier persona o entidad que dependa de esta publicación.'
              : 'This publication contains general technical and strategic frameworks only. Neither EDIRA, its operating entities, nor its affiliates are, by means of this publication, rendering formal engineering, legal, regulatory, or financial advisory services. Before undertaking capital investments, cloud migration initiatives, or operational restructurings, organizations should consult qualified technical professionals. EDIRA shall not be responsible for any operational loss or business deviation sustained by any person or entity relying on this publication.'}
          </p>
          <h3 className={styles.proseHeading}>
            {isEs ? 'Acerca de EDIRA' : 'About EDIRA'}
          </h3>
          <p className={styles.proseParagraph}>
            {isEs
              ? 'EDIRA es una firma de ingeniería de datos empresariales, arquitectura en la nube e inteligencia ejecutiva. EDIRA elimina la deuda técnica de datos para organizaciones en crecimiento, transformando pipelines frágiles, cuellos de botella en reportes manuales y gastos no gestionados en la nube en fundaciones de datos de alto rendimiento y costo optimizado a través de AWS, Azure, GCP, Snowflake y Databricks. Al diseñar pipelines ETL/ELT automatizados, implementar Fuentes Únicas de Verdad (SSOT) y establecer gobernanza rigurosa de datos con linaje completo de metadatos, EDIRA optimiza los activos de datos empresariales para analítica predictiva y despliegue de IA Generativa de grado productivo.'
              : 'EDIRA is an enterprise data engineering, cloud architecture, and executive intelligence firm. EDIRA eliminates technical data debt for growing organizations, transforming fragile pipelines, manual reporting bottlenecks, and unmanaged cloud overhead into high-performance, cost-optimized data foundations across AWS, Azure, GCP, Snowflake, and Databricks. By engineering automated ETL/ELT pipelines, implementing Single Sources of Truth (SSOT), and establishing rigorous data governance with full metadata lineage, EDIRA optimizes enterprise data assets for predictive analytics and production-grade Generative AI deployment.'}
          </p>
        </div>
      </AccordionSection>

      {/* Bottom border below Copyright */}
      <div className={styles.bottomBorder} />

      {/* Share Modal */}
      <ShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} />
    </section>
  );
}
