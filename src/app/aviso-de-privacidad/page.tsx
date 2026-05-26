'use client';

import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Footer } from '@/components/sections/Footer/Footer';
import { useLang } from '@/lib/i18n';
import styles from './prose.module.css';

export default function PrivacyNoticePage() {
  const { lang } = useLang();

  return (
    <>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.container}>
          {lang === 'es' ? (
            <>
              <div className={styles.header}>
                <h1 className={styles.title}>Aviso de Privacidad Integral</h1>
                <div className={styles.metaInfo}>
                  <span className={styles.metaLabel}>Responsable: Eduardo Rodrigo Silva Orozco (EDIRA)</span>
                  <span className={styles.metaLabel}>Vigencia: 12 de mayo de 2026</span>
                  <span className={styles.metaLabel}>Versión: 1.0</span>
                </div>
              </div>

              <div className={styles.content}>
                <p>
                  El presente Aviso de Privacidad es emitido por <strong>Eduardo Rodrigo Silva Orozco</strong>, persona física con actividad empresarial que opera bajo la denominación comercial <strong>&ldquo;EDIRA&rdquo;</strong>, con domicilio para recibir notificaciones en la ciudad de Santiago de Querétaro, estado de Querétaro, México (en adelante, &ldquo;el Responsable&rdquo; o &ldquo;EDIRA&rdquo;).
                </p>
                <p>
                  Para efectos de comunicación relativa al tratamiento de datos personales, el Responsable pone a disposición del titular los siguientes medios de contacto:
                </p>
                <ul>
                  <li><strong>Sitio web:</strong> <a href="https://www.edira.dev" target="_blank" rel="noopener noreferrer">https://www.edira.dev</a></li>
                  <li><strong>Correo electrónico oficial:</strong> <a href="mailto:info@edira.dev">info@edira.dev</a></li>
                  <li><strong>Teléfono:</strong> +52 1 442 866 2242</li>
                </ul>
                <p>
                  EDIRA es una consultora tecnológica especializada en analítica de datos, inteligencia artificial y arquitectura digital. Los servicios que presta incluyen, de manera enunciativa mas no limitativa: arquitectura de datos en la nube, ingeniería de datos (procesos ETL/ELT e integraciones), analítica avanzada (dashboards y KPIs), inteligencia artificial predictiva, gobernanza de datos y asesoría ejecutiva en inteligencia de decisión (&ldquo;Decision Intelligence&rdquo;). La prestación de dichos servicios requiere necesariamente el tratamiento de datos personales, por lo que el presente documento regula integralmente dicho tratamiento.
                </p>

                <h2>SEGUNDO. DATOS PERSONALES RECABADOS</h2>
                <p>
                  El Responsable recaba, almacena y, en su caso, trata las siguientes categorías de datos personales, de conformidad con el principio de mínima necesidad y proporcionalidad establecido en los artículos 6 y 12 de la LFPDPPP:
                </p>
                <h3>A) DATOS DE IDENTIFICACIÓN PERSONAL</h3>
                <ul>
                  <li>Nombre completo del titular o representante legal</li>
                  <li>Cargo o posición dentro de la organización</li>
                  <li>Empresa u organización a la que pertenece</li>
                </ul>
                <h3>B) DATOS DE CONTACTO</h3>
                <ul>
                  <li>Dirección de correo electrónico corporativo o personal</li>
                  <li>Número telefónico (fijo o móvil)</li>
                  <li>Ciudad, estado y país de residencia o domicilio empresarial</li>
                </ul>

                <div className={styles.warningBox}>
                  <strong>ADVERTENCIA AL TITULAR:</strong> El Responsable prohíbe expresamente al titular el envío de datos sensibles —ya sea mediante formularios web, correo electrónico o cualquier otro medio de comunicación— sin haber obtenido previamente una autorización expresa y por escrito por parte de EDIRA. El envío no autorizado de datos sensibles será responsabilidad exclusiva del titular remitente, quedando EDIRA liberada de cualquier obligación o responsabilidad derivada de dicha conducta. Sin perjuicio de las obligaciones legales que correspondan al Responsable conforme a la legislación aplicable.
                </div>

                <h2>TERCERO. FINALIDADES DEL TRATAMIENTO</h2>
                <p>
                  El tratamiento de los datos personales recabados por EDIRA se realiza únicamente para las finalidades que se describen a continuación, las cuales se clasifican en: (A) finalidades primarias o necesarias para el cumplimiento de la relación contractual o precontractual, y (B) finalidades secundarias de naturaleza comercial o de mejora de servicios, para las cuales el titular puede negar su consentimiento conforme a la Cláusula Cuarta del presente Aviso.
                </p>

                <h3>A) FINALIDADES PRIMARIAS (NECESARIAS)</h3>
                <p>
                  Las siguientes finalidades son indispensables para la prestación de los servicios de EDIRA y para el cumplimiento de las obligaciones legales y contractuales del Responsable. La negativa de consentimiento respecto de estas finalidades implica la imposibilidad de establecer o continuar la relación de servicios:
                </p>
                <ul>
                  <li>Atender, registrar y dar seguimiento a las solicitudes de información recibidas a través de formularios web, correo electrónico y comunicación directa.</li>
                  <li>Cumplir con las obligaciones legales y regulatorias aplicables al Responsable en materia fiscal, mercantil, civil y de protección de datos.</li>
                  <li>Resolver disputas, reclamaciones o controversias derivadas de la relación comercial.</li>
                  <li>Mantener comunicación operativa con el titular durante la vigencia del contrato de servicios.</li>
                </ul>

                <h3>B) FINALIDADES SECUNDARIAS (COMERCIALES Y DE MEJORA)</h3>
                <p>
                  Las siguientes finalidades no son indispensables para la relación de servicios, pero permiten a EDIRA mejorar su oferta, personalizar la comunicación y desarrollar nuevas soluciones. El titular puede negar su consentimiento para estas finalidades mediante el mecanismo establecido en la Cláusula Cuarta sin que ello afecte la prestación de los servicios contratados:
                </p>
                <ul>
                  <li>Enviar información sobre nuevos servicios, actualizaciones de metodologías, casos de éxito y materiales especializados en analítica de datos e inteligencia artificial.</li>
                  <li>Realizar estudios internos de mercado, satisfacción del cliente y posicionamiento comercial de EDIRA.</li>
                  <li>Desarrollar perfiles generales (no individualizados) sobre sectores industriales y necesidades tecnológicas, con fines de mejora del portafolio de servicios.</li>
                  <li>Contactar al titular para ofrecerle servicios complementarios, actualizaciones o renovaciones de proyectos previamente ejecutados.</li>
                  <li>Utilizar testimonios o referencias del titular (con su consentimiento expreso previo) en materiales comerciales o de comunicación institucional de EDIRA.</li>
                </ul>

                <h2>CUARTO. MECANISMO PARA NEGAR CONSENTIMIENTO A FINALIDADES SECUNDARIAS</h2>
                <p>
                  En cumplimiento del artículo 8 de la LFPDPPP, el titular tiene derecho a negar su consentimiento para el tratamiento de sus datos personales con fines secundarios o accesorios, sin que dicha negativa afecte la relación de servicios que mantenga con EDIRA.
                </p>
                <p>Para ejercer este derecho, el titular deberá:</p>
                <ul>
                  <li>Enviar un correo electrónico a la dirección <a href="mailto:info@edira.dev">info@edira.dev</a> con el asunto: <strong>&ldquo;NEGATIVA FINALIDADES SECUNDARIAS – (NOMBRE COMPLETO)&rdquo;</strong>.</li>
                  <li>Indicar en el cuerpo del mensaje: nombre completo, empresa a la que pertenece y descripción específica de las finalidades secundarias respecto de las cuales niega su consentimiento.</li>
                  <li>Incluir copia de identificación oficial vigente como medio de verificación de identidad.</li>
                </ul>
                <p>
                  El Responsable procesará la solicitud en un plazo máximo de quince (15) días hábiles contados a partir de la recepción del correo electrónico, confirmando al titular la actualización de sus preferencias de tratamiento.
                </p>

                <h2>QUINTO. USO DE COOKIES Y TECNOLOGÍAS DE RASTREO</h2>
                <p>
                  El sitio web de EDIRA (<a href="https://www.edira.dev">www.edira.dev</a>) puede hacer uso de cookies, web beacons y tecnologías de rastreo similares con la finalidad de mejorar la experiencia de navegación y analizar el tráfico del sitio. A continuación se describe la tipología de dichas tecnologías:
                </p>
                <h3>A) COOKIES ESENCIALES O TÉCNICAS</h3>
                <p>
                  Son aquellas indispensables para el correcto funcionamiento del sitio web. Permiten la navegación y el acceso a las secciones del portal. No pueden ser desactivadas sin afectar el funcionamiento del sitio. No requieren consentimiento previo del usuario, pues su instalación responde a fines estrictamente técnicos.
                </p>
                <h3>B) COOKIES ANALÍTICAS</h3>
                <p>
                  Permiten cuantificar el número de visitantes, analizar el comportamiento de navegación y evaluar la efectividad del contenido publicado. Los datos recopilados son de carácter agregado y no permiten la identificación directa del usuario. EDIRA puede utilizar herramientas de terceros o plataformas equivalentes para este propósito. El uso de estas cookies requiere el consentimiento del usuario.
                </p>
                <h3>C) COOKIES DE MARKETING O PERSONALIZACIÓN</h3>
                <p>
                  Permiten mostrar contenido relevante y ofertas personalizadas en función del perfil de navegación del usuario.
                </p>
                <p>
                  El usuario puede gestionar y desactivar el uso de cookies desde la configuración de su navegador web. Sin embargo, la desactivación de cookies esenciales puede impedir el correcto funcionamiento del sitio. Para mayor información sobre la gestión de cookies en los principales navegadores, el titular puede consultar la configuración de privacidad de su herramienta de navegación.
                </p>

                <h2>SEXTO. TRANSFERENCIA DE DATOS PERSONALES</h2>
                <p>
                  El Responsable podrá transferir datos personales a terceros únicamente en los supuestos y bajo las condiciones que se describen a continuación, de conformidad con los artículos 36 al 43 de la LFPDPPP y los artículos 67 al 75 de su Reglamento:
                </p>
                <h3>A) TRANSFERENCIAS A PROVEEDORES TECNOLÓGICOS Y ENCARGADOS DE TRATAMIENTO</h3>
                <p>
                  Para la prestación de sus servicios, EDIRA hace uso de plataformas y proveedores tecnológicos que actúan como encargados del tratamiento en los términos del artículo 3, fracción IV de la LFPDPPP. Dichos proveedores pueden incluir, de manera enunciativa mas no limitativa:
                </p>
                <ul>
                  <li>Servicios de computación en la nube: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform, u otros proveedores equivalentes, sujetos a sus propias políticas de privacidad y certificaciones de seguridad internacionales.</li>
                  <li>Herramientas de productividad y colaboración: Microsoft 365 (incluyendo Outlook y OneDrive), Teams u otras plataformas de trabajo colaborativo.</li>
                  <li>Plataformas de formularios y captación de leads: Microsoft Forms u herramientas equivalentes utilizadas para la recepción de solicitudes de información.</li>
                  <li>Herramientas de analítica e inteligencia de negocios: software de visualización de datos, plataformas de BI (Business Intelligence) y soluciones de inteligencia artificial, seleccionadas conforme a los requerimientos de cada proyecto.</li>
                  <li>Interfaces de programación de aplicaciones (APIs): conexiones con sistemas de terceros requeridas para la ejecución de integraciones de datos contratadas por el cliente.</li>
                </ul>
                <p>
                  Todos los proveedores tecnológicos que actúan como encargados del tratamiento están sujetos a obligaciones contractuales de confidencialidad y protección de datos, conforme a lo establecido en el artículo 50 del Reglamento de la LFPDPPP.
                </p>

                <h3>B) TRANSFERENCIAS PERMITIDAS SIN CONSENTIMIENTO DEL TITULAR</h3>
                <p>
                  De conformidad con el artículo 37 de la LFPDPPP, no se requerirá el consentimiento del titular para las transferencias que se realicen en los siguientes supuestos:
                </p>
                <ul>
                  <li>Cuando la transferencia esté prevista en una ley o tratado en el que México sea parte.</li>
                  <li>Cuando la transferencia sea efectuada a sociedades controladoras, subsidiarias o afiliadas bajo el control común del Responsable, o a una sociedad matriz o a cualquier sociedad del mismo grupo del Responsable que opere bajo los mismos procesos y políticas internas.</li>
                  <li>Cuando la transferencia sea necesaria por virtud de un contrato celebrado o por celebrarse en interés del titular, entre el Responsable y un tercero.</li>
                  <li>Cuando la transferencia sea necesaria o legalmente exigida para la salvaguarda de un interés público o para la procuración o administración de justicia.</li>
                  <li>Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial.</li>
                  <li>Cuando la transferencia sea precisa para el mantenimiento o cumplimiento de una relación jurídica entre el Responsable y el titular.</li>
                </ul>

                <h3>C) PROHIBICIÓN DE VENTA DE DATOS</h3>
                <p>
                  EDIRA declara expresamente que <strong>NO</strong> vende, cede a título oneroso ni comercializa los datos personales de sus titulares a terceros ajenos a la relación de servicios. Cualquier transferencia de datos se realizará únicamente con la finalidad de cumplir los objetivos establecidos en el presente Aviso de Privacidad.
                </p>

                <h2>SÉPTIMO. ALMACENAMIENTO, SEGURIDAD Y MEDIDAS DE PROTECCIÓN</h2>
                <p>
                  EDIRA implementa medidas de seguridad administrativas, técnicas y físicas para proteger los datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado, conforme a lo establecido en el artículo 19 de la LFPDPPP y los artículos 57 al 63 de su Reglamento.
                </p>
                <h3>A) MEDIDAS ADMINISTRATIVAS</h3>
                <ul>
                  <li>Aplicación del principio de mínimo privilegio: únicamente el personal o colaboradores estrictamente necesarios tienen acceso a los datos personales de los titulares, en la medida indispensable para el desempeño de sus funciones.</li>
                  <li>Capacitación y concientización en protección de datos para el personal de EDIRA.</li>
                  <li>Establecimiento de políticas internas de manejo, tratamiento y eliminación de datos personales.</li>
                  <li>Suscripción de acuerdos de confidencialidad con colaboradores, contratistas y proveedores que tengan acceso a datos personales.</li>
                </ul>
                <h3>B) MEDIDAS TÉCNICAS</h3>
                <ul>
                  <li>Uso de plataformas con cifrado en tránsito (TLS/SSL) y en reposo para el almacenamiento de información.</li>
                  <li>Acceso a sistemas protegidos mediante autenticación multifactor (MFA) cuando la plataforma lo permita.</li>
                  <li>Configuración de permisos y roles de acceso en las herramientas de almacenamiento en la nube (OneDrive, AWS, Azure u otras).</li>
                  <li>Respaldo periódico de la información almacenada.</li>
                </ul>
                <h3>C) CONSIDERACIONES SOBRE EL ALMACENAMIENTO ACTUAL</h3>
                <p>
                  EDIRA reconoce que su modelo operativo actual contempla el almacenamiento de datos personales principalmente en: (i) correo electrónico corporativo (Microsoft Outlook / plataforma equivalente), y (ii) archivos digitales en la plataforma OneDrive de Microsoft 365. El Responsable se compromete a:
                </p>
                <ul>
                  <li>Mantener dichas plataformas bajo los estándares de seguridad que el proveedor de servicios ofrece, incluyendo cifrado y control de accesos.</li>
                  <li>Migrar progresivamente hacia soluciones de almacenamiento estructurado con mayores controles de acceso, conforme el crecimiento del negocio lo requiera.</li>
                  <li>No almacenar información sensible o confidencial en formatos no protegidos o de acceso público.</li>
                </ul>
                <p>
                  El Responsable advierte a los titulares que el correo electrónico, como medio de comunicación, conlleva riesgos inherentes de seguridad. EDIRA implementa las mejores prácticas disponibles en su plataforma, pero no puede garantizar la seguridad absoluta de las comunicaciones en tránsito externo. Se recomienda al titular abstenerse de enviar por correo electrónico información altamente confidencial sin cifrado adicional.
                </p>

                <h2>OCTAVO. DERECHOS ARCO (ACCESO, RECTIFICACIÓN, CANCELACIÓN Y OPOSICIÓN)</h2>
                <p>
                  De conformidad con los artículos 22 al 35 de la LFPDPPP y los artículos 76 al 108 de su Reglamento, el titular de los datos personales tiene reconocidos los siguientes derechos:
                </p>
                <h3>A) DESCRIPCIÓN DE LOS DERECHOS ARCO</h3>
                <ul>
                  <li><strong>ACCESO:</strong> Derecho a conocer qué datos personales posee el Responsable, para qué finalidades los utiliza y a quiénes ha sido transferida dicha información.</li>
                  <li><strong>RECTIFICACIÓN:</strong> Derecho a solicitar la corrección o actualización de datos personales que resulten inexactos, incompletos o desactualizados.</li>
                  <li><strong>CANCELACIÓN:</strong> Derecho a solicitar la supresión de los datos personales del sistema de tratamiento del Responsable, una vez que hayan dejado de ser necesarios para la finalidad que motivó su recabación, o cuando el titular revoque su consentimiento.</li>
                  <li><strong>OPOSICIÓN:</strong> Derecho a oponerse al tratamiento de los datos personales para finalidades específicas, cuando exista causa legítima para ello, o cuando el tratamiento se realice para finalidades secundarias.</li>
                </ul>
                <h3>B) PROCEDIMIENTO PARA EL EJERCICIO DE DERECHOS ARCO</h3>
                <p>Para ejercer cualquiera de los derechos antes descritos, el titular deberá dirigir una solicitud al Responsable a través del siguiente medio de contacto:</p>
                <ul>
                  <li><strong>Correo electrónico:</strong> <a href="mailto:info@edira.dev">info@edira.dev</a></li>
                  <li><strong>Asunto del correo:</strong> <code>&ldquo;SOLICITUD DERECHOS ARCO – (DERECHO SOLICITADO) – (NOMBRE COMPLETO)&rdquo;</code></li>
                </ul>
                <p>La solicitud deberá contener, como mínimo, los siguientes elementos:</p>
                <ul>
                  <li>Nombre completo del titular y, en su caso, nombre del representante legal con acreditación de su personalidad jurídica.</li>
                  <li>Descripción clara y precisa del derecho ARCO que se desea ejercer.</li>
                  <li>Indicación de los datos personales respecto de los cuales se solicita el ejercicio del derecho, o del tratamiento que se desea limitar u oponerse.</li>
                  <li>Copia de identificación oficial vigente del titular (INE/IFE, pasaporte, cédula profesional o equivalente).</li>
                  <li>Cualquier documento que facilite la localización de los datos personales objeto de la solicitud.</li>
                  <li>Domicilio o correo electrónico para recibir la respuesta del Responsable.</li>
                </ul>
                <h3>C) PLAZOS LEGALES</h3>
                <p>El Responsable dará respuesta a la solicitud en los siguientes plazos, conforme a lo establecido en el artículo 32 de la LFPDPPP:</p>
                <ul>
                  <li><strong>Plazo para responder sobre la procedencia de la solicitud:</strong> veinte (20) días hábiles contados a partir de la fecha de recepción.</li>
                  <li><strong>Plazo para hacer efectiva la determinación adoptada:</strong> quince (15) días hábiles adicionales a partir de la comunicación de la respuesta.</li>
                  <li>En caso de solicitud de Acceso, el Responsable pondrá a disposición del titular los datos personales en formato comprensible, dentro del plazo indicado.</li>
                </ul>
                <p>
                  El titular que considere que su solicitud ha sido atendida de forma incorrecta o que sus derechos no han sido debidamente tutelados, podrá interponer queja o denuncia ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI), a través del sitio web <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer">www.inai.org.mx</a>, conforme al procedimiento establecido en los artículos 94 al 107 de la LFPDPPP.
                </p>

                <h2>NOVENO. REVOCACIÓN DEL CONSENTIMIENTO</h2>
                <p>
                  El titular podrá revocar en cualquier momento el consentimiento que haya otorgado para el tratamiento de sus datos personales, sin que se le atribuyan efectos retroactivos, conforme al artículo 8, párrafo cuarto de la LFPDPPP. La revocación del consentimiento deberá presentarse mediante escrito libre o correo electrónico dirigido a <a href="mailto:info@edira.dev">info@edira.dev</a> indicando:
                </p>
                <ul>
                  <li>Nombre completo del titular.</li>
                  <li>Descripción del consentimiento que desea revocar y de los datos personales a los que se refiere dicha revocación.</li>
                  <li>Copia de identificación oficial vigente.</li>
                </ul>
                <p>
                  El Responsable analizará la solicitud y comunicará al titular la procedencia o improcedencia de la revocación en un plazo de veinte (20) días hábiles. En aquellos casos en que el tratamiento de datos sea indispensable para el cumplimiento de una relación contractual vigente, la revocación podrá dar lugar a la terminación del contrato, sin responsabilidad para el Responsable.
                </p>
                <p>
                  La revocación del consentimiento no tiene efectos retroactivos respecto de los tratamientos ya realizados antes de que la solicitud haya sido procedente. El Responsable podrá conservar los datos personales que sean necesarios para el cumplimiento de obligaciones legales o contractuales pendientes, incluso después de recibida la revocación.
                </p>

                <h2>DÉCIMO. LIMITACIÓN DEL USO O DIVULGACIÓN DE DATOS PERSONALES</h2>
                <p>
                  El titular podrá solicitar al Responsable la limitación del uso o divulgación de sus datos personales cuando: (i) haya formulado una solicitud de cancelación que aún no haya sido resuelta, o (ii) exista controversia respecto del tratamiento que deba resolverse previamente. La solicitud deberá realizarse por escrito mediante correo electrónico a <a href="mailto:info@edira.dev">info@edira.dev</a> con el asunto: <strong>&ldquo;LIMITACIÓN DE USO Y DIVULGACIÓN&rdquo;</strong>.
                </p>
                <p>
                  El Responsable resolverá la solicitud en un plazo de veinte (20) días hábiles. Durante el periodo de resolución, el Responsable limitará el uso de los datos a aquellas finalidades estrictamente necesarias para cumplir con obligaciones legales o contractuales vigentes.
                </p>
                <p>
                  El Responsable cuenta con un mecanismo de registro de los titulares que han solicitado la limitación de uso o divulgación de sus datos, a fin de garantizar el respeto de dicha limitación en sus sistemas de tratamiento.
                </p>

                <h2>DÉCIMO PRIMERO. CONSERVACIÓN Y ELIMINACIÓN DE DATOS PERSONALES</h2>
                <p>
                  Los datos personales recabados por EDIRA serán conservados únicamente durante el tiempo necesario para cumplir con las finalidades que motivaron su recabación y, en todo caso, mientras subsistan obligaciones legales, fiscales, contractuales o de cualquier naturaleza que exijan su resguardo. Los criterios de conservación son los siguientes:
                </p>
                <ul>
                  <li><strong>Datos de contacto y prospección comercial (sin contrato formalizado):</strong> hasta doce (12) meses a partir del último contacto, salvo que el titular solicite su cancelación anticipada.</li>
                  <li><strong>Datos con relevancia fiscal:</strong> hasta el plazo máximo establecido por el Código Fiscal de la Federación para la conservación de documentación contable y fiscal (actualmente cinco años, con posibilidad de ampliación en casos específicos).</li>
                  <li><strong>Datos de navegación y cookies analíticas:</strong> conforme a las políticas del proveedor de la herramienta de analítica utilizada, sin exceder de veinticuatro (24) meses.</li>
                </ul>
                <p>
                  Una vez transcurridos los plazos de conservación aplicables y satisfechas las obligaciones correspondientes, el Responsable procederá a la eliminación segura e irreversible de los datos personales, utilizando métodos que impidan su recuperación.
                </p>

                <h2>DÉCIMO SEGUNDO. CAMBIOS AL AVISO DE PRIVACIDAD</h2>
                <p>
                  EDIRA se reserva el derecho de actualizar, modificar o ampliar el presente Aviso de Privacidad en cualquier momento, con el propósito de reflejar cambios en sus prácticas de tratamiento de datos, en la legislación aplicable o en los servicios ofrecidos. Dichos cambios serán efectivos a partir de su publicación en el sitio web <a href="https://www.edira.dev">www.edira.dev</a>.
                </p>
                <p>El mecanismo de notificación de cambios al presente Aviso será el siguiente:</p>
                <ul>
                  <li>Publicación de la versión actualizada en el sitio web <a href="https://www.edira.dev">www.edira.dev</a>, con indicación de la fecha de entrada en vigor de la nueva versión.</li>
                  <li>Cuando los cambios sean sustanciales -en particular, cuando impliquen el tratamiento de datos para finalidades distintas a las originalmente comunicadas o la transferencia a terceros no previstos en el aviso original-, el Responsable notificará al titular a través del correo electrónico registrado en sus bases de datos.</li>
                </ul>
                <p>
                  La continuación del uso de los servicios de EDIRA o la ausencia de oposición expresa dentro de los quince (15) días hábiles siguientes a la notificación podrá entenderse como aceptación de los términos actualizados, en la medida permitida por la legislación aplicable, en los términos del artículo 14 de la LFPDPPP.
                </p>

                <h2>DÉCIMO TERCERO. RESPONSABILIDAD DEL TITULAR POR DATOS PROPORCIONADOS</h2>
                <p>
                  El titular es el único responsable de la veracidad, exactitud, vigencia y legalidad de la información que proporcione a EDIRA a través de cualquier medio, incluyendo formularios web, correo electrónico y comunicación directa. A efecto de delimitar responsabilidades, el titular reconoce y acepta lo siguiente:
                </p>
                <ul>
                  <li><strong>Datos de terceros:</strong> El titular no deberá proporcionar datos personales de terceros sin contar con autorización legal para ello. En caso de que el titular comparta datos personales de colaboradores, empleados u otras personas en el marco de un proyecto de consultoría, declara contar con el consentimiento correspondiente o con una base legal válida conforme a la LFPDPPP. El Responsable no asume responsabilidad alguna por el tratamiento de datos de terceros proporcionados sin autorización.</li>
                  <li><strong>Campos abiertos en formularios:</strong> Los formularios de contacto y diagnóstico de EDIRA pueden contener campos de texto libre. El titular se obliga bajo su responsabilidad a no incluir en dichos campos datos sensibles, información confidencial de terceros, secretos comerciales de empresas ajenas, ni información cuya divulgación implique incumplimiento de obligaciones legales o contractuales del propio titular. EDIRA no será responsable por el contenido que el titular decida incluir en campos no estructurados.</li>
                  <li><strong>Exactitud de la información:</strong> El titular se obliga a notificar al Responsable cualquier cambio relevante en sus datos personales (especialmente datos de contacto), a fin de mantener la información actualizada. La falta de notificación oportuna de cambios en los datos no será imputable al Responsable.</li>
                  <li><strong>Uso indebido del canal de comunicación:</strong> El titular se abstendrá de utilizar los canales de contacto de EDIRA (correo electrónico, formularios) para el envío de spam, códigos maliciosos o cualquier contenido ilícito. EDIRA se reserva el derecho de tomar las medidas legales y técnicas pertinentes ante cualquier uso indebido.</li>
                </ul>

                <h2>DÉCIMO CUARTO. USO DE SERVICIOS DE TERCEROS Y LIMITACIÓN DE RESPONSABILIDAD</h2>
                <p>
                  EDIRA utiliza servicios, plataformas y herramientas de terceros para la operación de su negocio y la prestación de sus servicios de consultoría. A efecto de delimitar responsabilidades, el titular reconoce y acepta lo siguiente:
                </p>
                <h3>A) PROVEEDORES DE TECNOLOGÍA EN LA NUBE</h3>
                <p>
                  El almacenamiento y procesamiento de datos en plataformas de nube (AWS, Azure, Google Cloud u otras) se rige por los términos, condiciones y políticas de privacidad de cada proveedor, los cuales son externos a EDIRA. El Responsable seleccionará proveedores que ofrezcan garantías razonables de seguridad y que cuenten con certificaciones reconocidas internacionalmente (ISO 27001, SOC 2 u equivalentes), pero no puede garantizar la conducta de dichos terceros más allá de las obligaciones contractuales pactadas con ellos.
                </p>
                <h3>B) SITIOS WEB DE TERCEROS</h3>
                <p>
                  El sitio web de EDIRA puede contener enlaces o referencias a sitios web de terceros. Dichos sitios tienen sus propias políticas de privacidad y el Responsable no asume responsabilidad alguna por el tratamiento de datos que dichos terceros realicen. Se recomienda al titular revisar las políticas de privacidad de cada sitio que visite.
                </p>
                <h3>C) FUERZA MAYOR Y CASO FORTUITO</h3>
                <p>
                  El Responsable no será responsable por brechas de seguridad, pérdida o alteración de datos personales que sean consecuencia de eventos de fuerza mayor o caso fortuito, incluyendo pero no limitándose a: ataques cibernéticos masivos de terceros, fallas en la infraestructura de proveedores de telecomunicaciones o eventos catastróficos que afecten los sistemas de los proveedores de nube utilizados. En tales supuestos, el Responsable notificará al titular de forma oportuna conforme al artículo 20 de la LFPDPPP.
                </p>

                <h2>DÉCIMO QUINTO. JURISDICCIÓN Y LEGISLACIÓN APLICABLE</h2>
                <p>
                  El presente Aviso de Privacidad se rige en su interpretación y aplicación por las disposiciones de la legislación mexicana vigente, en particular:
                </p>
                <ul>
                  <li>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).</li>
                  <li>Reglamento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</li>
                  <li>Lineamientos del Aviso de Privacidad, emitidos por la autoridad competente en materia de transparencia y protección de datos personales en México.</li>
                  <li>Recomendaciones en materia de seguridad de datos personales, emitidas por la autoridad competente en materia de protección de datos personales en México.</li>
                  <li>Código Civil Federal y Código de Comercio, en lo que resulten aplicables.</li>
                  <li>Demás normatividad federal aplicable en materia de protección de datos, privacidad, telecomunicaciones y comercio electrónico.</li>
                </ul>
                <p>
                  Para cualquier controversia derivada del presente Aviso de Privacidad o del tratamiento de datos personales realizado por EDIRA, las partes se someterán a la jurisdicción de la autoridad administrativa competente y, en lo judicial, a los Tribunales Federales competentes con sede en la ciudad de Santiago de Querétaro, Querétaro, México, renunciando expresamente a cualquier otro fuero que pudiera corresponderles en razón de sus domicilios presentes o futuros.
                </p>

                <div className={styles.divider} />

                <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                  <strong>Eduardo Rodrigo Silva Orozco</strong><br />
                  Responsable del Tratamiento de Datos Personales<br />
                  EDIRA — Consultoría Tecnológica en Analítica e Inteligencia Artificial<br />
                  Santiago de Querétaro, Querétaro, México | www.edira.dev | info@edira.dev
                </p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.header}>
                <h1 className={styles.title}>Integral Privacy Notice</h1>
                <div className={styles.metaInfo}>
                  <span className={styles.metaLabel}>Responsible Party: Eduardo Rodrigo Silva Orozco (EDIRA)</span>
                  <span className={styles.metaLabel}>Effective Date: May 12, 2026</span>
                  <span className={styles.metaLabel}>Version: 1.0</span>
                </div>
              </div>

              <div className={styles.content}>
                <p>
                  This Privacy Notice is issued by <strong>Eduardo Rodrigo Silva Orozco</strong>, an individual with business activities operating under the trade name <strong>&ldquo;EDIRA&rdquo;</strong>, with a registered address for notifications in the city of Santiago de Querétaro, State of Querétaro, Mexico (hereinafter referred to as &ldquo;the Responsible Party&rdquo; or &ldquo;EDIRA&rdquo;).
                </p>
                <p>
                  For communication purposes regarding the processing of personal data, the Responsible Party provides the following channels of contact:
                </p>
                <ul>
                  <li><strong>Website:</strong> <a href="https://www.edira.dev" target="_blank" rel="noopener noreferrer">https://www.edira.dev</a></li>
                  <li><strong>Official Email:</strong> <a href="mailto:info@edira.dev">info@edira.dev</a></li>
                  <li><strong>Phone:</strong> +52 1 442 866 2242</li>
                </ul>
                <p>
                  EDIRA is a specialized technology consulting firm focusing on data analytics, artificial intelligence, and digital architecture. The services rendered include, but are not limited to: cloud data architecture, data engineering (ETL/ELT processes and integrations), advanced analytics (dashboards and KPIs), predictive AI, data governance, and C-Suite executive decision intelligence advisory (&ldquo;Decision Intelligence&rdquo;). Providing these services strictly requires the processing of personal data, and thus this document comprehensively regulates such processing.
                </p>

                <h2>SECOND. PERSONAL DATA COLLECTED</h2>
                <p>
                  The Responsible Party collects, stores, and, when applicable, processes the following categories of personal data, adhering to the principles of necessity and proportionality outlined in Articles 6 and 12 of the LFPDPPP:
                </p>
                <h3>A) PERSONAL IDENTIFICATION DATA</h3>
                <ul>
                  <li>Full name of the data subject or legal representative</li>
                  <li>Job title or position within the organization</li>
                  <li>Name of the company or organization to which they belong</li>
                </ul>
                <h3>B) CONTACT DATA</h3>
                <ul>
                  <li>Corporate or personal email address</li>
                  <li>Telephone number (landline or mobile)</li>
                  <li>City, state, and country of residence or corporate address</li>
                </ul>

                <div className={styles.warningBox}>
                  <strong>WARNING TO THE DATA SUBJECT:</strong> The Responsible Party strictly prohibits the data subject from sending sensitive personal data—whether through web forms, email, or any other communication channel—without prior written authorization from EDIRA. The unauthorized submission of sensitive data shall be the sole responsibility of the sender, and EDIRA shall be released from any liability or obligations resulting from such actions, without prejudice to the legal requirements applicable to the Responsible Party under current laws.
                </div>

                <h2>THIRD. PURPOSES OF PROCESSING</h2>
                <p>
                  The processing of personal data collected by EDIRA is carried out solely for the purposes described below, which are classified as: (A) primary or necessary purposes to fulfill the contractual or pre-contractual relationship, and (B) secondary purposes of a commercial nature or for service improvement, for which the data subject may withhold consent pursuant to the Fourth Clause of this Notice.
                </p>

                <h3>A) PRIMARY PURPOSES (NECESSARY)</h3>
                <p>
                  The following purposes are indispensable to provide EDIRA\'s services and to comply with the Responsible Party\'s legal and contractual obligations. Withholding consent for these purposes will make it impossible to establish or continue the service relationship:
                </p>
                <ul>
                  <li>Attend, register, and follow up on requests for information received through web forms, email, and direct communication.</li>
                  <li>Comply with the legal and regulatory obligations applicable to the Responsible Party under tax, commercial, civil, and data protection laws.</li>
                  <li>Resolve disputes, claims, or controversies arising from the commercial relationship.</li>
                  <li>Maintain operational communication with the data subject during the term of the service agreement.</li>
                </ul>

                <h3>B) SECONDARY PURPOSES (COMMERCIAL AND IMPROVEMENT)</h3>
                <p>
                  The following purposes are not indispensable for the service relationship, but they allow EDIRA to improve its services, personalize communication, and develop new solutions. The data subject may withhold consent for these purposes using the mechanism established in the Fourth Clause without affecting the rendering of the contracted services:
                </p>
                <ul>
                  <li>Send information about new services, methodology updates, case studies, and specialized materials on data analytics and artificial intelligence.</li>
                  <li>Conduct internal market research, customer satisfaction surveys, and commercial positioning studies for EDIRA.</li>
                  <li>Develop general (non-individualized) profiles on industrial sectors and technology needs to improve the service portfolio.</li>
                  <li>Contact the data subject to offer complementary services, updates, or renewals of previously executed projects.</li>
                  <li>Use testimonies or references of the data subject (with prior express consent) in EDIRA\'s commercial materials or institutional communications.</li>
                </ul>

                <h2>FOURTH. MECHANISM TO WITHHOLD CONSENT FOR SECONDARY PURPOSES</h2>
                <p>
                  In compliance with Article 8 of the LFPDPPP, the data subject has the right to withhold consent for the processing of their personal data for secondary or accessory purposes, without such refusal affecting the service relationship with EDIRA.
                </p>
                <p>To exercise this right, the data subject must:</p>
                <ul>
                  <li>Send an email to <a href="mailto:info@edira.dev">info@edira.dev</a> with the subject line: <strong>&ldquo;SECONDARY PURPOSES OBJECTION – (FULL NAME)&rdquo;</strong>.</li>
                  <li>Indicate in the body of the message: full name, company name, and a specific description of the secondary purposes for which consent is withheld.</li>
                  <li>Attach a copy of a valid official identification to verify their identity.</li>
                </ul>
                <p>
                  The Responsible Party will process the request within a maximum of fifteen (15) business days from the receipt of the email, confirming the update of processing preferences to the data subject.
                </p>

                <h2>FIFTH. USE OF COOKIES AND TRACKING TECHNOLOGIES</h2>
                <p>
                  EDIRA\'s website (<a href="https://www.edira.dev">www.edira.dev</a>) may use cookies, web beacons, and similar tracking technologies to improve the browsing experience and analyze site traffic. The typology of these technologies is described below:
                </p>
                <h3>A) ESSENTIAL OR TECHNICAL COOKIES</h3>
                <p>
                  These are indispensable for the correct functioning of the website. They enable basic navigation and access to portal sections. They cannot be deactivated without affecting site functionality. They do not require the prior consent of the user, as their installation is strictly for technical purposes.
                </p>
                <h3>B) ANALYTICAL COOKIES</h3>
                <p>
                  These allow us to quantify the number of visitors, analyze browsing behavior, and evaluate the effectiveness of the published content. The collected data is aggregated and does not allow direct user identification. EDIRA may use third-party tools or equivalent platforms for this purpose. The use of these cookies requires the user\'s consent.
                </p>
                <h3>C) MARKETING OR PERSONALIZATION COOKIES</h3>
                <p>
                  These allow the display of relevant content and personalized offers based on the user\'s browsing profile.
                </p>
                <p>
                  The user can manage and disable cookies through their web browser settings. However, disabling essential cookies may prevent the website from functioning correctly. For more information on managing cookies in major browsers, the data subject may consult their browser\'s privacy settings.
                </p>

                <h2>SIXTH. TRANSFER OF PERSONAL DATA</h2>
                <p>
                  The Responsible Party may transfer personal data to third parties solely under the assumptions and conditions described below, pursuant to Articles 36 to 43 of the LFPDPPP and Articles 67 to 75 of its Regulations:
                </p>
                <h3>A) TRANSFERS TO TECHNOLOGY PROVIDERS AND DATA PROCESSORS</h3>
                <p>
                  To render its services, EDIRA uses technological platforms and providers that act as data processors under Article 3, Section IV of the LFPDPPP. These providers may include, but are not limited to:
                </p>
                <ul>
                  <li>Cloud computing services: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform, or equivalent providers, subject to their own privacy policies and international security certifications.</li>
                  <li>Productivity and collaboration tools: Microsoft 365 (including Outlook and OneDrive), Teams, or other collaborative platforms.</li>
                  <li>Form and lead generation platforms: Microsoft Forms or equivalent tools used to receive information requests.</li>
                  <li>Analytics and business intelligence tools: data visualization software, BI (Business Intelligence) platforms, and artificial intelligence solutions, selected according to project requirements.</li>
                  <li>Application Programming Interfaces (APIs): connections with third-party systems required to execute data integrations contracted by the client.</li>
                </ul>
                <p>
                  All technology providers acting as data processors are bound by contractual confidentiality and data protection obligations, pursuant to Article 50 of the Regulations of the LFPDPPP.
                </p>

                <h3>B) TRANSFERS PERMITTED WITHOUT THE DATA SUBJECT\'S CONSENT</h3>
                <p>
                  Pursuant to Article 37 of the LFPDPPP, the data subject\'s consent is not required for transfers carried out under the following circumstances:
                </p>
                <ul>
                  <li>When the transfer is provided for in a law or treaty to which Mexico is a party.</li>
                  <li>When the transfer is made to parent companies, subsidiaries, or affiliates under the common control of the Responsible Party, or to a parent company or any group company operating under the same internal processes and policies.</li>
                  <li>When the transfer is necessary by virtue of an agreement entered into or to be entered into in the interest of the data subject, between the Responsible Party and a third party.</li>
                  <li>When the transfer is necessary or legally required to safeguard a public interest or for the administration of justice.</li>
                  <li>When the transfer is precise for the recognition, exercise, or defense of a right in a judicial process.</li>
                  <li>When the transfer is precise to maintain or fulfill a legal relationship between the Responsible Party and the data subject.</li>
                </ul>

                <h3>C) PROHIBITION ON THE SALE OF DATA</h3>
                <p>
                  EDIRA expressly declares that it <strong>DOES NOT</strong> sell, lease, or commercialize the personal data of its data subjects to any third party. Any transfer of data will be carried out solely to fulfill the objectives established in this Privacy Notice.
                </p>

                <h2>SEVENTH. STORAGE, SECURITY, AND PROTECTION MEASURES</h2>
                <p>
                  EDIRA implements administrative, technical, and physical security measures to protect personal data against damage, loss, alteration, destruction, unauthorized use, access, or processing, pursuant to Article 19 of the LFPDPPP and Articles 57 to 63 of its Regulations.
                </p>
                <h3>A) ADMINISTRATIVE MEASURES</h3>
                <ul>
                  <li>Application of the principle of least privilege: only strictly necessary personnel or collaborators have access to the personal data of data subjects, to the extent indispensable to perform their duties.</li>
                  <li>Data protection training and awareness for EDIRA staff.</li>
                  <li>Establishment of internal policies for the handling, processing, and deletion of personal data.</li>
                  <li>Signing confidentiality agreements with employees, contractors, and providers who have access to personal data.</li>
                </ul>
                <h3>B) TECHNICAL MEASURES</h3>
                <ul>
                  <li>Use of platforms with encryption in transit (TLS/SSL) and at rest for information storage.</li>
                  <li>Access to systems protected by multi-factor authentication (MFA) when supported by the platform.</li>
                  <li>Configuration of permissions and access roles in cloud storage tools (OneDrive, AWS, Azure, or others).</li>
                  <li>Regular backups of the stored information.</li>
                </ul>
                <h3>C) CONSIDERATIONS REGARDING CURRENT STORAGE</h3>
                <p>
                  EDIRA acknowledges that its current operational model involves storing personal data mainly in: (i) corporate email (Microsoft Outlook or equivalent platform), and (ii) digital files on Microsoft 365\'s OneDrive platform. The Responsible Party commits to:
                </p>
                <ul>
                  <li>Maintain these platforms under the security standards offered by the service provider, including encryption and access controls.</li>
                  <li>Progressively migrate toward structured storage solutions with greater access controls as the business grows.</li>
                  <li>Not store sensitive or confidential information in unprotected or publicly accessible formats.</li>
                </ul>
                <p>
                  The Responsible Party warns data subjects that email, as a communication channel, carries inherent security risks. EDIRA implements best practices on its platform but cannot guarantee absolute security for external transit communications. The data subject is advised to refrain from sending highly confidential information via email without additional encryption.
                </p>

                <h2>EIGHTH. ARCO RIGHTS (ACCESS, RECTIFICATION, CANCELLATION, AND OBJECTION)</h2>
                <p>
                  Pursuant to Articles 22 to 35 of the LFPDPPP and Articles 76 to 108 of its Regulations, the data subject is entitled to the following rights:
                </p>
                <h3>A) DESCRIPTION OF ARCO RIGHTS</h3>
                <ul>
                  <li><strong>ACCESS:</strong> The right to know what personal data the Responsible Party holds, the purposes for which it is processed, and the third parties to whom it has been transferred.</li>
                  <li><strong>RECTIFICATION:</strong> The right to request the correction or update of inaccurate, incomplete, or outdated personal data.</li>
                  <li><strong>CANCELLATION:</strong> The right to request the deletion of personal data from the Responsible Party\'s systems once it is no longer necessary for the purposes for which it was collected, or when the data subject revokes their consent.</li>
                  <li><strong>OBJECTION:</strong> The right to object to the processing of personal data for specific purposes under legitimate grounds, or when processed for secondary purposes.</li>
                </ul>
                <h3>B) PROCEDURE TO EXERCISE ARCO RIGHTS</h3>
                <p>To exercise any of the rights described above, the data subject must send a request to the Responsible Party through the following channel:</p>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:info@edira.dev">info@edira.dev</a></li>
                  <li><strong>Subject Line:</strong> <code>&ldquo;ARCO RIGHTS REQUEST – (RIGHT REQUESTED) – (FULL NAME)&rdquo;</code></li>
                </ul>
                <p>The request must contain, at a minimum, the following elements:</p>
                <ul>
                  <li>Full name of the data subject and, if applicable, the legal representative\'s name with proof of power of attorney.</li>
                  <li>Clear and precise description of the ARCO right to be exercised.</li>
                  <li>Indication of the personal data in question, or the processing to be limited or objected to.</li>
                  <li>A copy of a valid official identification of the data subject (INE/IFE, passport, professional license, or equivalent).</li>
                  <li>Any document that facilitates locating the personal data subject to the request.</li>
                  <li>Address or email address to receive the response from the Responsible Party.</li>
                </ul>
                <h3>C) LEGAL TIMEFRAMES</h3>
                <p>The Responsible Party will respond to requests within the following timeframes under Article 32 of the LFPDPPP:</p>
                <ul>
                  <li><strong>Timeframe to resolve request admissibility:</strong> twenty (20) business days from the date of receipt.</li>
                  <li><strong>Timeframe to implement resolution:</strong> fifteen (15) additional business days from the communication of the response.</li>
                  <li>In the case of Access requests, the Responsible Party will make the personal data available in an understandable format within the indicated timeframe.</li>
                </ul>
                <p>
                  A data subject who considers their request has been handled incorrectly or that their rights have not been properly safeguarded may file a complaint with the National Institute for Transparency, Access to Information and Personal Data Protection (INAI) through its website <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer">www.inai.org.mx</a>, pursuant to the procedure set forth in Articles 94 to 107 of the LFPDPPP.
                </p>

                <h2>NINTH. REVOCATION OF CONSENT</h2>
                <p>
                  The data subject may revoke their consent for personal data processing at any time, without retroactive effects, pursuant to Article 8, fourth paragraph of the LFPDPPP. The revocation of consent must be submitted via written letter or email to <a href="mailto:info@edira.dev">info@edira.dev</a> indicating:
                </p>
                <ul>
                  <li>Full name of the data subject.</li>
                  <li>Description of the consent to be revoked and the personal data in question.</li>
                  <li>A copy of a valid official identification.</li>
                </ul>
                <p>
                  The Responsible Party will analyze the request and notify its decision within twenty (20) business days. In cases where data processing is indispensable to fulfill an active contractual relationship, revocation may lead to the termination of the contract without liability for the Responsible Party.
                </p>
                <p>
                  Consent revocation does not have retroactive effects on processing carried out prior to the date the request is determined to be valid. The Responsible Party may retain personal data necessary to comply with pending legal or contractual obligations even after consent is revoked.
                </p>

                <h2>TENTH. LIMITING THE USE OR DISCLOSURE OF PERSONAL DATA</h2>
                <p>
                  The data subject may request the restriction of the use or disclosure of their personal data when: (i) a cancellation request has been filed but not yet resolved, or (ii) a controversy regarding processing must be settled beforehand. The request must be made in writing via email to <a href="mailto:info@edira.dev">info@edira.dev</a> with the subject line: <strong>&ldquo;RESTRICTION OF USE AND DISCLOSURE&rdquo;</strong>.
                </p>
                <p>
                  The Responsible Party will resolve the request within twenty (20) business days. During the resolution period, the Responsible Party will restrict the use of data to purposes strictly necessary to comply with active legal or contractual obligations.
                </p>
                <p>
                  The Responsible Party maintains a registry of data subjects who have requested the restriction of use or disclosure of their data to ensure compliance within its processing systems.
                </p>

                <h2>ELEVENTH. RETENTION AND DELETION OF PERSONAL DATA</h2>
                <p>
                  Personal data collected by EDIRA will be retained only for the time necessary to fulfill the purposes for which it was collected and, in any case, as long as legal, tax, contractual, or other obligations requiring its storage persist. The retention criteria are as follows:
                </p>
                <ul>
                  <li><strong>Contact and commercial prospecting data (without a formalized agreement):</strong> up to twelve (12) months from the last contact, unless the data subject requests prior cancellation.</li>
                  <li><strong>Data with tax relevance:</strong> up to the maximum term established by the Federal Fiscal Code for storing accounting and tax records (currently five years, with possible extensions in specific cases).</li>
                  <li><strong>Browsing data and analytical cookies:</strong> pursuant to the policies of the provider of the analytics tool used, not exceeding twenty-four (24) months.</li>
                </ul>
                <p>
                  Once the applicable retention periods expire and all related obligations are satisfied, the Responsible Party will proceed with the secure and irreversible deletion of the personal data, using methods that prevent its recovery.
                </p>

                <h2>TWELFTH. CHANGES TO THE PRIVACY NOTICE</h2>
                <p>
                  EDIRA reserves the right to update, modify, or extend this Privacy Notice at any time to reflect changes in its processing practices, applicable legislation, or services offered. These changes will be effective upon publication on the website <a href="https://www.edira.dev">www.edira.dev</a>.
                </p>
                <p>The mechanism for notifying changes to this Notice will be as follows:</p>
                <ul>
                  <li>Publication of the updated version on the website <a href="https://www.edira.dev">www.edira.dev</a>, indicating the effective date of the new version.</li>
                  <li>When changes are substantial—especially if they involve processing data for purposes other than those originally disclosed or transferring it to third parties not listed in the original notice—the Responsible Party will notify the data subject via the email address on file.</li>
                </ul>
                <p>
                  Continued use of EDIRA\'s services or the absence of an express objection within fifteen (15) business days following the notification shall be understood as acceptance of the updated terms, to the extent permitted by applicable laws, pursuant to Article 14 of the LFPDPPP.
                </p>

                <h2>THIRTEENTH. DATA SUBJECT\'S LIABILITY FOR THE DATA PROVIDED</h2>
                <p>
                  The data subject is solely responsible for the truthfulness, accuracy, validity, and legality of the information provided to EDIRA through any means, including web forms, email, and direct communication. To define liabilities, the data subject acknowledges and accepts the following:
                </p>
                <ul>
                  <li><strong>Third-party data:</strong> The data subject must not provide personal data of third parties without proper legal authorization. If the data subject shares personal data of collaborators, employees, or others within a consulting project, they declare having the corresponding consent or a valid legal basis under the LFPDPPP. The Responsible Party assumes no liability for processing third-party data provided without authorization.</li>
                  <li><strong>Open text fields in forms:</strong> EDIRA\'s contact and diagnostic forms may contain open text fields. The data subject undertakes, under their own responsibility, not to include sensitive personal data, third-party confidential information, trade secrets, or information whose disclosure implies breaching the data subject\'s own legal or contractual obligations. EDIRA shall not be responsible for content the data subject chooses to include in unstructured fields.</li>
                  <li><strong>Accuracy of information:</strong> The data subject is obligated to notify the Responsible Party of any relevant changes to their personal data (especially contact details) to keep the information updated. The failure to notify changes in a timely manner shall not be attributable to the Responsible Party.</li>
                  <li><strong>Improper use of communication channels:</strong> The data subject shall refrain from using EDIRA\'s contact channels (email, forms) to send spam, malicious code, or any illicit content. EDIRA reserves the right to take appropriate legal and technical measures in the event of any improper use.</li>
                </ul>

                <h2>FOURTEENTH. USE OF THIRD-PARTY SERVICES AND LIMITATION OF LIABILITY</h2>
                <p>
                  EDIRA uses third-party services, platforms, and tools for its business operations and consulting services. To define liabilities, the data subject acknowledges and accepts the following:
                </p>
                <h3>A) CLOUD TECHNOLOGY PROVIDERS</h3>
                <p>
                  The storage and processing of data in cloud platforms (AWS, Azure, Google Cloud, or others) are governed by the terms, conditions, and privacy policies of each provider, which are external to EDIRA. The Responsible Party will select providers that offer reasonable security guarantees and possess internationally recognized certifications (ISO 27001, SOC 2, or equivalent), but cannot guarantee third-party conduct beyond the contractual terms agreed upon.
                </p>
                <h3>B) THIRD-PARTY WEBSITES</h3>
                <p>
                  EDIRA\'s website may contain links or references to third-party websites. These sites have their own privacy policies, and the Responsible Party assumes no liability for the data processing they carry out. The data subject is advised to review the privacy policies of any site they visit.
                </p>
                <h3>C) FORCE MAJEURE AND ACCIDENTAL EVENTS</h3>
                <p>
                  The Responsible Party shall not be liable for security breaches, loss, or alteration of personal data resulting from force majeure or accidental events, including but not limited to: massive cyberattacks, telecommunication provider failures, or catastrophic events affecting cloud providers. In such cases, the Responsible Party will notify the data subject in a timely manner under Article 20 of the LFPDPPP.
                </p>

                <h2>FIFTEENTH. JURISDICTION AND APPLICABLE LAW</h2>
                <p>
                  This Privacy Notice is governed in its interpretation and application by the provisions of Mexican legislation, in particular:
                </p>
                <ul>
                  <li>The Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP).</li>
                  <li>The Regulations of the Federal Law on the Protection of Personal Data Held by Private Parties.</li>
                  <li>The Privacy Notice Guidelines issued by the competent authority in Mexico.</li>
                  <li>Personal data security recommendations issued by the competent authority in Mexico.</li>
                  <li>The Federal Civil Code and the Commercial Code, where applicable.</li>
                  <li>Other federal regulations applicable to data protection, privacy, telecommunications, and e-commerce.</li>
                </ul>
                <p>
                  For any controversy arising from this Privacy Notice or the processing of personal data by EDIRA, the parties submit to the jurisdiction of the competent administrative authority and, judicially, to the competent Federal Courts in the city of Santiago de Querétaro, Querétaro, Mexico, expressly waiving any other jurisdiction that may correspond to them by reason of their present or future domiciles.
                </p>

                <div className={styles.divider} />

                <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                  <strong>Eduardo Rodrigo Silva Orozco</strong><br />
                  Responsible for Personal Data Processing<br />
                  EDIRA — Technology Consulting in Analytics and Artificial Intelligence<br />
                  Santiago de Querétaro, Querétaro, Mexico | www.edira.dev | info@edira.dev
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
