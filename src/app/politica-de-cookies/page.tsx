'use client';

import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Footer } from '@/components/sections/Footer/Footer';
import { useLang } from '@/lib/i18n';
import styles from '../aviso-de-privacidad/prose.module.css';

export default function CookiePolicyPage() {
  const { lang } = useLang();

  return (
    <>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.container}>
          {lang === 'es' ? (
            <>
              <div className={styles.header}>
                <h1 className={styles.title}>Política de Cookies</h1>
                <div className={styles.metaInfo}>
                  <span className={styles.metaLabel}>Responsable: Eduardo Rodrigo Silva Orozco (EDIRA)</span>
                  <span className={styles.metaLabel}>Vigencia: 12 de mayo de 2026</span>
                  <span className={styles.metaLabel}>Versión: 1.0</span>
                </div>
              </div>

              <div className={styles.content}>
                <h2>I. INTRODUCCIÓN</h2>
                <p>
                  La presente Política de Cookies regula el uso de cookies, web beacons y tecnologías análogas en el sitio web de EDIRA, disponible en <a href="https://www.edira.dev" target="_blank" rel="noopener noreferrer">https://www.edira.dev</a> (el &ldquo;Sitio&rdquo;). Para efectos de esta Política, las cookies son archivos de datos que se almacenan en el dispositivo de la persona usuaria al navegar en un sitio de internet y que permiten intercambiar información de estado entre el navegador y el Sitio, incluyendo identificadores de sesión, autenticación, preferencias técnicas y otros datos asociados a la navegación. Cuando estas tecnologías permiten obtener datos personales o volver identificable a una persona, su uso queda sujeto a la normativa mexicana aplicable en materia de protección de datos personales y al deber de información reforzada respecto de los datos recabados, sus finalidades y la forma de deshabilitarlos.
                </p>
                <p>
                  EDIRA opera un sitio corporativo orientado a la presentación de servicios de datos, inteligencia artificial y transformación digital, con un formulario de contacto como principal punto de interacción. Conforme a la información disponible y proporcionada para esta redacción, el Sitio no cuenta actualmente con registro de usuarios ni con pasarela de pagos en línea; el formulario de contacto recaba nombre, correo electrónico, teléfono, empresa, cargo, ubicación y mensaje, y se apoya en herramientas de terceros para formularios y almacenamiento. En consecuencia, el ecosistema de cookies del Sitio debe limitarse a finalidades compatibles con la navegación, la seguridad, la integridad del formulario, la medición del desempeño digital y, en su caso, acciones de mercadotecnia o atribución publicitaria sujetas a consentimiento.
                </p>
                <p>
                  Esta Política complementa el Aviso de Privacidad Integral de EDIRA. Su finalidad es permitir que la persona usuaria tome decisiones informadas, libres y específicas sobre el uso de tecnologías de rastreo, de conformidad con los principios de información, finalidad, consentimiento, proporcionalidad y seguridad previstos en la legislación mexicana, así como con estándares internacionales de privacidad que exigen consentimiento válido para cookies opcionales, granularidad por finalidades, ausencia de casillas preactivadas y posibilidad de retiro del consentimiento con la misma facilidad con la que se otorgó.
                </p>

                <h2>II. IDENTIDAD DEL RESPONSABLE DEL SITIO WEB</h2>
                <p>
                  El responsable del tratamiento de datos personales y del uso de cookies en el sitio web <a href="https://www.edira.dev">https://www.edira.dev</a> es Eduardo Rodrigo Silva Orozco, conocido por su nombre comercial como EDIRA, operación de servicios tecnológicos especializada en soluciones de datos e inteligencia artificial.
                </p>
                <p>
                  Para cualquier cuestión relacionada con esta política o con la protección de sus datos personales, puede contactar al responsable en el correo electrónico <a href="mailto:info@edira.dev">info@edira.dev</a> o en el teléfono 4428662242.
                </p>

                <h2>III. ¿QUÉ SON LAS COOKIES?</h2>
                <p>
                  Las cookies son archivos de texto de pequeño tamaño que un sitio web guarda en su dispositivo al navegar por él. Estos archivos permiten que el Sitio reconozca su dispositivo en visitas posteriores, recuerde ciertas preferencias y facilite la navegación entre sus distintas secciones.
                </p>
                <p>
                  Las cookies no contienen programas maliciosos ni permiten acceder a información almacenada en su dispositivo sin su consentimiento. Sin embargo, algunas cookies, en particular aquellas que permiten identificar o perfilar el comportamiento de una persona usuaria, pueden constituir datos personales conforme a la legislación mexicana.
                </p>

                <h2>IV. TECNOLOGÍAS DE RASTREO UTILIZADAS EN EL SITIO</h2>
                <p>
                  Además de cookies, el Sitio puede emplear tecnologías de seguimiento similares que permiten su funcionamiento técnico y la obtención de información estadística sobre la interacción de las personas usuarias.
                </p>
                <p>Estas tecnologías se utilizan principalmente para:</p>
                <ul>
                  <li>Facilitar la navegación dentro del Sitio.</li>
                  <li>Recordar configuraciones básicas o preferencias de visualización.</li>
                  <li>Obtener información agregada sobre el uso del Sitio, como páginas visitadas o tiempo de permanencia.</li>
                </ul>
                <p>
                  Dado que el Sitio de EDIRA tiene un carácter informativo y de contacto sin registro de usuarios ni funcionalidades transaccionales, el uso de estas tecnologías se limita a lo estrictamente necesario para su operación y mejora continua.
                </p>
                <p>
                  En caso de que se incorporen herramientas adicionales con finalidades analíticas más avanzadas, de personalización o de mercadotecnia, se recabará su consentimiento mediante los mecanismos habilitados en el propio Sitio.
                </p>

                <h2>V. TIPOS DE COOKIES UTILIZADAS</h2>
                
                <h3>a) Cookies técnicas / necesarias</h3>
                <p>
                  EDIRA utiliza cookies técnicas o estrictamente indispensables para hacer posible la navegación básica, sostener la seguridad del Sitio, administrar el estado del banner de consentimiento, preservar la integridad técnica del formulario de contacto y evitar usos indebidos o automatizados que comprometan la operación del Sitio. Estas cookies pueden almacenar, entre otros elementos, identificadores de sesión, tokens de seguridad, estado de consentimiento, preferencias técnicas básicas, información de balanceo de carga y parámetros temporales del formulario. Dado que su finalidad es permitir la prestación técnica del servicio solicitado por la persona usuaria, estas cookies pueden operar sin una aceptación separada, siempre que se limiten a lo estrictamente necesario, se informen de forma visible y ofrezcan mecanismos de deshabilitación cuando técnicamente proceda.
                </p>
                <p>
                  Son para la prestación del servicio solicitado, seguridad del Sitio y cumplimiento del deber de información. Estas cookies no deben emplearse para fines de perfilado, publicidad o análisis extendido de comportamiento.
                </p>

                <h3>b) Cookies analíticas</h3>
                <p>
                  EDIRA podrá utilizar cookies analíticas para medir el funcionamiento del Sitio, conocer de manera agregada cómo interactúan las personas usuarias con sus páginas, detectar errores, evaluar contenidos, medir fuentes de tráfico y mejorar la experiencia digital. Estas cookies pueden recabar, entre otros datos, dirección IP o una versión truncada de la misma según la configuración técnica aplicable, tipo de navegador, sistema operativo, fecha y hora de acceso, páginas visitadas, tiempo de navegación, eventos de interacción, fuente de referencia y métricas de desempeño. Debido a que este tipo de cookies no es estrictamente necesario para el funcionamiento básico del Sitio, su uso deberá activarse únicamente cuando la persona usuaria otorgue un consentimiento previo, libre, informado, específico y revocable.
                </p>
                <p>
                  Si la persona usuaria rechaza esta categoría, EDIRA no deberá cargar etiquetas analíticas no esenciales ni asociar la navegación a identificadores analíticos persistentes.
                </p>

                <h3>c) Cookies de marketing y publicidad</h3>
                <p>
                  EDIRA podrá utilizar cookies de marketing o publicidad para medir la eficacia de campañas, atribuir conversiones, construir audiencias, limitar frecuencias de impacto, personalizar mensajes comerciales y realizar seguimiento publicitario entre sitios cuando así lo permita la configuración del navegador y la herramienta respectiva. Estas cookies pueden recabar identificadores publicitarios, identificadores de campaña, páginas visitadas, eventos de interacción, URL de referencia, información del dispositivo, navegador, dirección IP y señales de conversión asociadas a la navegación. Su uso puede implicar la intervención de terceros especializados en publicidad digital o medición publicitaria. Por su naturaleza, estas cookies sólo deberán activarse mediante consentimiento previo, granular, libre y revocable; la negativa de la persona usuaria no deberá impedir el acceso al contenido general del Sitio ni condicionar el uso del formulario de contacto que no dependa técnicamente de dichas cookies.
                </p>
                <div className={styles.warningBox}>
                  <strong>NOTA IMPORTANTE:</strong> La mera continuación de la navegación, el desplazamiento de la página o el cierre del aviso no constituyen, por sí solos, una aceptación válida de cookies opcionales.
                </div>

                <h2>VI. INFORMACIÓN QUE PUEDEN RECOPILAR LAS COOKIES</h2>
                <p>
                  Las cookies y tecnologías de seguimiento utilizadas en el Sitio pueden recopilar información técnica y de navegación de manera automatizada, tales como:
                </p>
                <ul>
                  <li>Dirección IP y ubicación aproximada (país o ciudad).</li>
                  <li>Tipo de navegador, sistema operativo y dispositivo utilizado.</li>
                  <li>Fecha y hora de acceso al Sitio.</li>
                  <li>Páginas visitadas y rutas de navegación dentro del Sitio.</li>
                  <li>Interacción con elementos específicos, como formularios de contacto o enlaces.</li>
                  <li>Preferencias básicas de navegación o configuración.</li>
                </ul>
                <p>
                  Esta información se utiliza de manera agregada para fines técnicos y estadísticos, tales como mejorar el funcionamiento del Sitio, optimizar la experiencia de navegación y evaluar el desempeño de los contenidos y canales de contacto.
                </p>
                <p>
                  En ningún caso estas tecnologías se utilizan, por sí mismas, para identificar directamente a las personas usuarias. No obstante, cuando la información recopilada pueda vincularse directa o indirectamente con una persona física, será considerada dato personal y se tratará conforme a lo dispuesto en el Aviso de Privacidad de EDIRA.
                </p>

                <h2>VII. CONSENTIMIENTO Y PREFERENCIAS DEL USUARIO</h2>
                <p>
                  Al primer acceso al Sitio, EDIRA desplegará un banner o módulo de consentimiento visible, claro y comprensible. Dicho mecanismo permitirá aceptar, rechazar o configurar las cookies opcionales por categoría, distinguiendo con claridad entre cookies necesarias y cookies analíticas o de marketing. Las cookies necesarias están activas desde el inicio; en cambio, las cookies analíticas y de marketing permanecerán desactivadas hasta que la persona usuaria emita una acción afirmativa clara. El diseño del banner no induce de forma engañosa a la aceptación, no utiliza casillas pre-marcadas y no condiciona el acceso general al Sitio a la aceptación de cookies opcionales.
                </p>
                <p>
                  EDIRA ofrece un mecanismo permanente y fácilmente accesible para modificar la elección realizada mediante el enlace <strong>&ldquo;Preferencias de cookies&rdquo;</strong> en el pie del Sitio. La revocación del consentimiento es tan sencilla como su otorgamiento y no genera costos, cargas desproporcionadas ni degradaciones del servicio del Sitio.
                </p>

                <h2>VIII. COOKIES DE TERCEROS</h2>
                <p>
                  El Sitio puede incorporar servicios provistos por terceros para funcionalidades como alojamiento de formularios, infraestructura tecnológica, almacenamiento, medición analítica, atribución de campañas, seguridad, contenidos embebidos o funcionalidades complementarias. Como consecuencia, ciertos terceros pueden instalar cookies propias o ejecutar tecnologías equivalentes cuando la persona usuaria interactúa con el Sitio o con componentes integrados en él. En función del servicio concreto, estos terceros pueden actuar como encargados que tratan datos por cuenta de EDIRA o como terceros con políticas propias y finalidades autónomas respecto de determinadas operaciones.
                </p>
                <p>
                  Cuando un tercero actúe como encargado, deberá tratar los datos únicamente conforme a las instrucciones de EDIRA, abstenerse de utilizarlos para fines distintos, mantener medidas de seguridad adecuadas y no subcontratar tratamientos sin autorización cuando ello sea jurídicamente exigible. La persona usuaria reconoce que, al interactuar con herramientas o plataformas de terceros, puede quedar sujeta también a sus propias políticas de privacidad y cookies, por lo que EDIRA recomienda consultarlas antes de aceptar categorías opcionales.
                </p>

                <h2>IX. GESTIÓN Y DESACTIVACIÓN DE COOKIES</h2>
                <p>
                  Además del centro de preferencias del Sitio, la persona usuaria puede bloquear, permitir, restringir o eliminar cookies directamente desde la configuración de su navegador. La desactivación total de cookies puede afectar el funcionamiento correcto de ciertas secciones, incluida la persistencia de preferencias, el envío del formulario de contacto o la estabilidad técnica de algunos componentes del Sitio.
                </p>
                <ul>
                  <li><strong>Chrome:</strong> Permite gestionar cookies desde Configuración &gt; Privacidad y seguridad &gt; Cookies de terceros o mediante la función de borrado de datos de navegación.</li>
                  <li><strong>Microsoft Edge:</strong> Permite administrar cookies desde Configuración &gt; Privacidad, búsqueda y servicios, incluyendo la posibilidad de bloquear cookies e impedir cookies de terceros.</li>
                  <li><strong>Firefox:</strong> Permite configurar la Protección mejorada contra rastreo y bloquear cookies de terceros o todas las cookies de seguimiento desde Privacidad y seguridad.</li>
                  <li><strong>Safari:</strong> Permite gestionar cookies mediante sus configuraciones de privacidad, incluyendo opciones para impedir el rastreo entre sitios y bloquear cookies.</li>
                </ul>

                <h2>X. FINALIDADES DEL USO DE COOKIES</h2>
                <p>EDIRA utiliza cookies y tecnologías de seguimiento para las siguientes finalidades:</p>
                <ul>
                  <li>Garantizar el correcto funcionamiento del Sitio, permitiendo la navegación adecuada entre sus secciones, la carga eficiente de contenidos y el uso del formulario de contacto.</li>
                  <li>Recordar configuraciones básicas de la persona usuaria, con el fin de facilitar una experiencia de navegación consistente dentro del Sitio.</li>
                  <li>Generar información estadística sobre el uso del Sitio, incluyendo número de visitantes, páginas consultadas e interacción con contenidos, con el propósito de mejorar su funcionamiento.</li>
                  <li>Evaluar el desempeño del Sitio como herramienta de contacto y prospección comercial, permitiendo a EDIRA identificar áreas de mejora.</li>
                  <li>Permitir, en su caso, la integración con servicios tecnológicos de terceros necesarios para la operación del Sitio, los cuales pueden utilizar cookies conforme a sus propias políticas.</li>
                </ul>
                <p>
                  EDIRA no utiliza cookies para recabar datos personales sensibles ni para realizar perfiles individualizados con fines comerciales sin el consentimiento de la persona usuaria.
                </p>

                <h2>XI. ACTUALIZACIONES DE LA POLÍTICA</h2>
                <p>
                  EDIRA podrá modificar, actualizar o sustituir la presente Política de Cookies cuando existan cambios en la legislación aplicable, en los criterios regulatorios, en la arquitectura tecnológica del Sitio o en las categorías de cookies implementadas. Toda modificación deberá publicarse en el Sitio con la fecha de última actualización correspondiente.
                </p>

                <h2>XII. RELACIÓN CON EL AVISO DE PRIVACIDAD</h2>
                <p>
                  Cuando las cookies y otras tecnologías de seguimiento utilizadas en el Sitio recolecten información que pueda identificar directa o indirectamente a una persona, dicha información será considerada dato personal y se tratará conforme a las finalidades, mecanismos y principios establecidos en el Aviso de Privacidad de EDIRA.
                </p>

                <h2>XIII. DATOS DE CONTACTO</h2>
                <p>
                  Para cualquier duda, comentario, solicitud relacionada con esta Política, ejercicio de derechos ARCO, revocación del consentimiento respecto de cookies opcionales o limitación de uso, la persona usuaria puede comunicarse con EDIRA a través del correo electrónico <a href="mailto:info@edira.dev">info@edira.dev</a>.
                </p>

                <div className={styles.divider} />
                <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                  Última actualización: 12 de mayo de 2026.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.header}>
                <h1 className={styles.title}>Cookie Policy</h1>
                <div className={styles.metaInfo}>
                  <span className={styles.metaLabel}>Responsible Party: Eduardo Rodrigo Silva Orozco (EDIRA)</span>
                  <span className={styles.metaLabel}>Effective Date: May 12, 2026</span>
                  <span className={styles.metaLabel}>Version: 1.0</span>
                </div>
              </div>

              <div className={styles.content}>
                <h2>I. INTRODUCTION</h2>
                <p>
                  This Cookie Policy regulates the use of cookies, web beacons, and similar technologies on the EDIRA website, available at <a href="https://www.edira.dev" target="_blank" rel="noopener noreferrer">https://www.edira.dev</a> (the &ldquo;Site&rdquo;). For the purposes of this Policy, cookies are data files stored on the user\'s device when browsing a website. They allow the exchange of status information between the browser and the Site, including session identifiers, authentication, technical preferences, and other navigation data. When these technologies enable the collection of personal data or make a person identifiable, their use is subject to the applicable Mexican personal data protection regulations and the reinforced duty to inform the user about the data collected, its purposes, and how to disable them.
                </p>
                <p>
                  EDIRA operates a corporate website oriented toward presenting data services, artificial intelligence, and digital transformation, with a contact form as the main point of interaction. According to the information available and provided for this drafting, the Site does not currently have user registration or online payment gateways; the contact form collects full name, email, phone, company, position, location, and message, and relies on third-party tools for forms and storage. Consequently, the Site\'s cookie ecosystem must be limited to purposes compatible with navigation, security, contact form integrity, digital performance measurement, and, if applicable, marketing or advertising attribution actions subject to consent.
                </p>
                <p>
                  This Policy complements the Integral Privacy Notice of EDIRA. Its purpose is to allow the user to make informed, free, and specific decisions regarding the use of tracking technologies, in accordance with the principles of information, purpose, consent, proportionality, and security provided by Mexican law, as well as international privacy standards that require valid consent for optional cookies, granularity by purpose, the absence of pre-checked boxes, and the possibility of withdrawing consent as easily as it was granted.
                </p>

                <h2>II. IDENTITY OF THE WEBSITE RESPONSIBLE PARTY</h2>
                <p>
                  The party responsible for personal data processing and cookie usage on the website <a href="https://www.edira.dev">https://www.edira.dev</a> is Eduardo Rodrigo Silva Orozco, commercially known as EDIRA, a technology services operation specializing in data and artificial intelligence solutions.
                </p>
                <p>
                  For any query regarding this policy or the protection of your personal data, you may contact the responsible party at <a href="mailto:info@edira.dev">info@edira.dev</a> or by phone at 4428662242.
                </p>

                <h2>III. WHAT ARE COOKIES?</h2>
                <p>
                  Cookies are small text files that a website saves on your device when you browse it. These files allow the Site to recognize your device on subsequent visits, remember certain preferences, and facilitate navigation between its different sections.
                </p>
                <p>
                  Cookies do not contain malicious programs nor do they allow access to information stored on your device without your consent. However, some cookies, particularly those that identify or profile user behavior, may constitute personal data under Mexican law.
                </p>

                <h2>IV. TRACKING TECHNOLOGIES USED ON THE SITE</h2>
                <p>
                  In addition to cookies, the Site may employ similar tracking technologies that enable its technical operation and the collection of statistical information regarding user interaction.
                </p>
                <p>These technologies are mainly used to:</p>
                <ul>
                  <li>Facilitate navigation within the Site.</li>
                  <li>Remember basic settings or display preferences.</li>
                  <li>Obtain aggregate information about Site usage, such as visited pages or time spent.</li>
                </ul>
                <p>
                  Since EDIRA\'s Site is informative and for contact purposes only, without user registration or transactional capabilities, the use of these technologies is limited to what is strictly necessary for its operation and continuous improvement.
                </p>
                <p>
                  In the event that additional tools are incorporated for more advanced analytical, personalization, or marketing purposes, your consent will be collected through mechanisms enabled on the Site itself.
                </p>

                <h2>V. TYPES OF COOKIES USED</h2>
                
                <h3>a) Technical / Necessary Cookies</h3>
                <p>
                  EDIRA uses technical or strictly indispensable cookies to enable basic navigation, support Site security, manage the consent banner status, preserve the technical integrity of the contact form, and prevent improper or automated uses that compromise Site operations. These cookies may store, among other elements, session identifiers, security tokens, consent status, basic technical preferences, load balancing information, and temporary form parameters. Since their purpose is to technically deliver the service requested by the user, these cookies may operate without separate acceptance, provided they are limited to what is strictly necessary, are visibly informed, and offer deactivation mechanisms when technically feasible.
                </p>
                <p>
                  They are for providing the requested service, Site security, and compliance with the duty to inform. These cookies must not be used for profiling, advertising, or extended behavior analysis.
                </p>

                <h3>b) Analytical Cookies</h3>
                <p>
                  EDIRA may use analytical cookies to measure Site operations, learn in an aggregate manner how users interact with its pages, detect errors, evaluate content, measure traffic sources, and improve the digital experience. These cookies may collect, among other data, IP addresses or truncated versions thereof depending on the technical configuration, browser type, operating system, date and time of access, pages visited, browsing time, interaction events, referral sources, and performance metrics. Because this type of cookie is not strictly necessary for basic Site operations, its use must be activated only when the user grants prior, free, informed, specific, and revocable consent.
                </p>
                <p>
                  If the user rejects this category, EDIRA must not load non-essential analytical tags or associate navigation with persistent analytical identifiers.
                </p>

                <h3>c) Marketing and Advertising Cookies</h3>
                <p>
                  EDIRA may use marketing or advertising cookies to measure campaign effectiveness, attribute conversions, build audiences, limit ad delivery frequency, personalize commercial messages, and track advertising across sites when permitted by browser settings and the respective tool. These cookies may collect advertising identifiers, campaign identifiers, pages visited, interaction events, referral URLs, device information, browser, IP address, and conversion signals associated with navigation. Their use may involve the intervention of third parties specializing in digital advertising or advertising measurement. By their nature, these cookies must only be activated with prior, granular, free, and revocable consent; the user\'s refusal shall not prevent access to general Site content or condition the use of the contact form.
                </p>
                <div className={styles.warningBox}>
                  <strong>IMPORTANT NOTE:</strong> Simply continuing to browse, scrolling the page, or closing the notice does not, by itself, constitute valid consent for optional cookies.
                </div>

                <h2>VI. INFORMATION THAT COOKIES MAY COLLECT</h2>
                <p>
                  Cookies and tracking technologies used on the Site may collect technical and navigation information automatically, such as:
                </p>
                <ul>
                  <li>IP address and approximate location (country or city).</li>
                  <li>Browser type, operating system, and device used.</li>
                  <li>Date and time of access to the Site.</li>
                  <li>Pages visited and navigation paths within the Site.</li>
                  <li>Interaction with specific elements, such as contact forms or links.</li>
                  <li>Basic browsing preferences or configuration.</li>
                </ul>
                <p>
                  This information is used in an aggregate manner for technical and statistical purposes, such as improving Site operations, optimizing the browsing experience, and evaluating content and contact channel performance.
                </p>
                <p>
                  In no case are these technologies used, by themselves, to directly identify users. However, when the collected information can be linked directly or indirectly to an individual, it will be considered personal data and treated in accordance with EDIRA\'s Privacy Notice.
                </p>

                <h2>VII. USER CONSENT AND PREFERENCES</h2>
                <p>
                  Upon first accessing the Site, EDIRA will display a visible, clear, and understandable consent banner or module. This mechanism will allow the user to accept, reject, or configure optional cookies by category, clearly distinguishing between necessary cookies and analytical or marketing cookies. Necessary cookies are active from the start; in contrast, analytical and marketing cookies will remain deactivated until the user issues a clear affirmative action. The banner design does not misleadingly induce acceptance, does not use pre-marked boxes, and does not condition general Site access to the acceptance of optional cookies.
                </p>
                <p>
                  EDIRA offers a permanent and easily accessible mechanism to modify the choice made through the <strong>&ldquo;Cookie Preferences&rdquo;</strong> link in the Footer. Consent withdrawal is as simple as granting it and does not generate costs, disproportionate burdens, or service degradation on the Site.
                </p>

                <h2>VIII. THIRD-PARTY COOKIES</h2>
                <p>
                  The Site may incorporate services provided by third parties for functionalities such as form hosting, technology infrastructure, storage, analytical measurement, campaign attribution, security, embedded content, or complementary features. As a consequence, certain third parties may install their own cookies or execute equivalent technologies when the user interacts with the Site or integrated components. Depending on the specific service, these third parties may act as processors treating data on behalf of EDIRA or as third parties with their own policies and autonomous purposes for certain operations.
                </p>
                <p>
                  When a third party acts as a processor, they must treat data solely according to EDIRA\'s instructions, refrain from using it for other purposes, maintain adequate security measures, and not subcontract processing without authorization. The user acknowledges that, by interacting with third-party tools or platforms, they may also be subject to their privacy and cookie policies, and EDIRA recommends reviewing them before accepting optional categories.
                </p>

                <h2>IX. COOKIE MANAGEMENT AND DEACTIVATION</h2>
                <p>
                  In addition to the Site\'s preference center, the user can block, allow, restrict, or delete cookies directly from their web browser settings. Total cookie deactivation may affect the correct operation of certain sections, including preference persistence, contact form submission, or the technical stability of some Site components.
                </p>
                <ul>
                  <li><strong>Chrome:</strong> Allows managing cookies via Settings &gt; Privacy and security &gt; Third-party cookies or through the clear browsing data feature.</li>
                  <li><strong>Microsoft Edge:</strong> Allows managing cookies via Settings &gt; Privacy, search, and services, including options to block cookies and block third-party cookies.</li>
                  <li><strong>Firefox:</strong> Allows configuring Enhanced Tracking Protection and blocking third-party cookies or all tracking cookies from Privacy & Security.</li>
                  <li><strong>Safari:</strong> Allows managing cookies via privacy settings, including options to prevent cross-site tracking and block cookies.</li>
                </ul>

                <h2>X. PURPOSES OF COOKIE USE</h2>
                <p>EDIRA uses cookies and tracking technologies for the following purposes:</p>
                <ul>
                  <li>Ensure correct Site operations, enabling proper navigation between sections, efficient content loading, and contact form usage.</li>
                  <li>Remember basic user settings to facilitate a consistent browsing experience within the Site.</li>
                  <li>Generate statistical information on Site usage, including number of visitors, pages consulted, and interaction with content, to improve operations.</li>
                  <li>Evaluate Site performance as a contact and commercial prospecting tool, allowing EDIRA to identify areas for improvement.</li>
                  <li>Allow, where applicable, integration with third-party technological services necessary for Site operations, which may use cookies according to their own policies.</li>
                </ul>
                <p>
                  EDIRA does not use cookies to collect sensitive personal data or to perform individualized profiling for commercial purposes without the user\'s consent.
                </p>

                <h2>XI. POLICY UPDATES</h2>
                <p>
                  EDIRA may modify, update, or replace this Cookie Policy when there are changes in applicable legislation, regulatory criteria, Site technology architecture, or implemented cookie categories. Any modification must be published on the Site with the corresponding last update date.
                </p>

                <h2>XII. RELATION WITH THE PRIVACY NOTICE</h2>
                <p>
                  When cookies and other tracking technologies used on the Site collect information that can directly or indirectly identify a person, such information will be considered personal data and treated in accordance with the purposes, mechanisms, and principles established in EDIRA\'s Privacy Notice.
                </p>

                <h2>XIII. CONTACT DETAILS</h2>
                <p>
                  For any query, comment, or request related to this Policy, exercise of ARCO rights, withdrawal of consent for optional cookies, or use restriction, the user may communicate with EDIRA via email at <a href="mailto:info@edira.dev">info@edira.dev</a>.
                </p>

                <div className={styles.divider} />
                <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                  Last updated: May 12, 2026.
                </p>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
