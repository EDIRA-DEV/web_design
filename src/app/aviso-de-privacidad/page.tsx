import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Footer } from '@/components/sections/Footer/Footer';
import styles from './prose.module.css';

export const metadata = {
  title: 'Aviso de Privacidad | EDIRA',
  description: 'Aviso de Privacidad Integral de EDIRA - Eduardo Rodrigo Silva Orozco',
};

export default function PrivacyNoticePage() {
  return (
    <>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.container}>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
