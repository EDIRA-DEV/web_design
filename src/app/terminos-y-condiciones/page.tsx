'use client';

import { Navbar } from '@/components/sections/Navbar/Navbar';
import { Footer } from '@/components/sections/Footer/Footer';
import { useLang } from '@/lib/i18n';
import styles from '../aviso-de-privacidad/prose.module.css';

export default function TermsAndConditionsPage() {
  const { lang } = useLang();

  return (
    <>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.container}>
          {lang === 'es' ? (
            <>
              <div className={styles.header}>
                <h1 className={styles.title}>Términos y Condiciones de Uso</h1>
                <div className={styles.metaInfo}>
                  <span className={styles.metaLabel}>Responsable: Eduardo Rodrigo Silva Orozco (EDIRA)</span>
                  <span className={styles.metaLabel}>Vigencia: 12 de mayo de 2026</span>
                  <span className={styles.metaLabel}>Versión: 1.0</span>
                </div>
              </div>

              <div className={styles.content}>
                <p>
                  ¡Gracias por utilizar el sitio web de EDIRA!
                </p>
                <p>
                  EDIRA se dedica a la consultoría tecnológica especializada en arquitectura de datos, ingeniería de datos, analítica, inteligencia artificial y gobernanza de datos (en adelante, &ldquo;EDIRA&rdquo;, &ldquo;nosotros&rdquo; o &ldquo;nuestro&rdquo;).
                </p>
                <p>
                  Los presentes Términos y Condiciones de Uso (en adelante, los &ldquo;Términos&rdquo;) regulan el acceso y utilización del sitio web <a href="https://www.edira.dev/">https://www.edira.dev/</a>, así como cualquier interacción inicial que el Usuario realice a través de los medios de contacto disponibles en el mismo (en adelante, el &ldquo;Sitio&rdquo;).
                </p>
                <p>
                  El Sitio tiene un carácter exclusivamente informativo y de contacto, por lo que:
                </p>
                <ul>
                  <li>No constituye una plataforma transaccional.</li>
                  <li>No permite la contratación directa de servicios.</li>
                  <li>No implica la generación automática de una relación contractual.</li>
                </ul>
                <p>
                  En caso de que el Usuario decida establecer contacto con EDIRA, cualquier servicio será objeto de un proceso independiente de diagnóstico, propuesta y formalización contractual.
                </p>

                <h2>CONDICIONES GENERALES</h2>
                <p>
                  Se solicita al Usuario leer detenidamente los presentes Términos, los cuales regulan el acceso, navegación e interacción a través del Sitio.
                </p>
                <p>
                  El acceso, consulta o utilización del Sitio implica que el Usuario reconoce haber leído, comprendido y aceptado en su totalidad el contenido de estos Términos. En caso de no estar de acuerdo, el Usuario deberá abstenerse de utilizar el Sitio.
                </p>
                <p>Para efectos de claridad jurídica y adecuada interpretación, el Usuario reconoce que:</p>
                <ul>
                  <li>El Sitio no contempla procesos de registro de cuentas, ni mecanismos de autenticación de usuario.</li>
                  <li>El Sitio no permite la realización de transacciones, pagos o contratación directa de servicios.</li>
                  <li>En consecuencia, cualquier referencia a &ldquo;cliente&rdquo;, &ldquo;contratación&rdquo; o &ldquo;transacción&rdquo; deberá entenderse exclusivamente en un contexto potencial o posterior a la interacción inicial, y nunca como resultado automático del uso del Sitio.</li>
                </ul>
                <p>
                  Los presentes Términos se emiten en cumplimiento de la legislación mexicana aplicable en materia de comercio electrónico, protección al consumidor y uso de medios digitales, con la finalidad de establecer de manera clara las condiciones de uso del Sitio, delimitar responsabilidades y garantizar transparencia en la interacción con el Usuario.
                </p>

                <h2>DEFINICIONES</h2>
                <p>Para efectos de los presentes Términos, los siguientes conceptos tendrán el significado que a continuación se les asigna:</p>
                <ul>
                  <li><strong>&ldquo;Sitio&rdquo;:</strong> El portal web identificado como <a href="https://www.edira.dev/">https://www.edira.dev/</a>, incluyendo todos sus contenidos, secciones, formularios y funcionalidades disponibles.</li>
                  <li><strong>&ldquo;EDIRA&rdquo;:</strong> Consultoría tecnológica titular del Sitio, responsable de su operación, contenidos e interacción inicial con el usuario.</li>
                  <li><strong>&ldquo;Usuario&rdquo;:</strong> Cualquier persona física o moral que acceda, navegue o utilice el Sitio, independientemente de que establezca o no contacto con EDIRA.</li>
                  <li><strong>&ldquo;Servicios&rdquo;:</strong> Las soluciones profesionales de consultoría tecnológica ofrecidas por EDIRA en materia de datos, analítica e inteligencia artificial, cuya contratación se realiza exclusivamente mediante procesos externos al Sitio.</li>
                  <li><strong>&ldquo;Interacción inicial&rdquo;:</strong> Cualquier comunicación realizada por el Usuario a través de formularios, correo electrónico, teléfono u otros medios de contacto disponibles en el Sitio.</li>
                  <li><strong>&ldquo;Información del Sitio&rdquo;:</strong> Todo contenido informativo, técnico, comercial o descriptivo publicado en el Sitio, incluyendo textos, gráficos, documentos, materiales explicativos y referencias a servicios.</li>
                  <li><strong>&ldquo;Contenido Protegido&rdquo;:</strong> Todo contenido del Sitio susceptible de protección en materia de propiedad intelectual o industrial, incluyendo textos, diseños, código, metodologías y materiales.</li>
                </ul>

                <h2>CLÁUSULA PRIMERA. OBJETO DEL SITIO WEB</h2>
                <p>
                  El sitio web de EDIRA tiene por objeto exclusivo la difusión informativa sobre las capacidades, áreas de especialización y propuesta de valor de la empresa, así como la habilitación de un canal formal de contacto y prospección comercial dirigido a empresas interesadas en sus servicios.
                </p>
                <p>
                  El Sitio no constituye, bajo ninguna circunstancia, una plataforma transaccional, un portal de contratación en línea, un sistema de registro de usuario, ni una interfaz para la prestación directa de servicios. Su función se limita a facilitar el primer contacto entre EDIRA y potenciales clientes, dentro del marco del siguiente flujo operativo: recepción del formulario de contacto, comunicación inicial, diagnóstico de necesidades, elaboración de propuesta comercial y formalización contractual mediante instrumentos jurídicos independientes al presente Sitio.
                </p>
                <p>
                  El contenido publicado en el Sitio es de carácter meramente informativo y referencial. No deberá interpretarse como oferta vinculante, promesa de celebración de contrato, declaración de garantía de resultados, ni como asesoría técnica, legal, financiera o estratégica de ninguna índole.
                </p>

                <h2>CLÁUSULA SEGUNDA. CONDICIONES DE USO DEL SITIO</h2>
                <p>
                  El uso del Sitio deberá realizarse de conformidad con la legislación mexicana aplicable, la moral, el orden público, las buenas costumbres y los presentes Términos. Queda expresamente prohibido:
                </p>
                <ul>
                  <li>Acceder al Sitio o a sus sistemas subyacentes mediante técnicas automatizadas, robots, scrapers o cualquier mecanismo no autorizado por EDIRA.</li>
                  <li>Realizar ingeniería inversa, descompilar o intentar obtener el código fuente de cualquier componente técnico del Sitio.</li>
                  <li>Introducir, transmitir o distribuir virus informáticos, malware, código malicioso o cualquier elemento que pueda dañar, interrumpir o deteriorar el funcionamiento del Sitio o de los sistemas de EDIRA.</li>
                  <li>Suplantar la identidad de EDIRA, de sus representantes, colaboradores o de cualquier otra persona física o moral.</li>
                  <li>Utilizar el Sitio con fines distintos a los expresamente previstos en la Cláusula Primera.</li>
                  <li>Reproducir, copiar, distribuir, modificar o explotar comercialmente, total o parcialmente, cualquier contenido del Sitio sin autorización previa y por escrito de EDIRA.</li>
                  <li>Realizar cualquier acción que pueda afectar la disponibilidad, integridad, confidencialidad o seguridad del Sitio o de la información que en él se aloja.</li>
                </ul>
                <p>
                  EDIRA se reserva el derecho de bloquear el acceso al Sitio, de manera temporal o definitiva, a cualquier usuario que contravenga las disposiciones anteriores, sin que ello genere derecho a indemnización o compensación alguna.
                </p>

                <h2>CLÁUSULA TERCERA. USO DEL FORMULARIO DE CONTACTO</h2>
                <p>
                  El Sitio dispone de un formulario de contacto cuya finalidad es exclusivamente facilitar la comunicación inicial entre el usuario y EDIRA con el propósito de explorar una posible relación comercial. El usuario reconoce y acepta que:
                </p>
                <ul>
                  <li>El envío del formulario de contacto no genera, por sí solo, ninguna relación contractual, obligación de prestación de servicios, compromiso comercial ni vínculo jurídico de ninguna naturaleza entre el usuario y EDIRA.</li>
                  <li>La recepción y respuesta por parte de EDIRA a un formulario de contacto constituye únicamente un acto de comunicación preliminar y no implica aceptación de ninguna oferta, propuesta o condición planteada por el usuario.</li>
                  <li>EDIRA se reserva el derecho de no responder a solicitudes de contacto que no cumplan con su perfil de cliente objetivo, que sean incompletas, que contengan información falsa, o que EDIRA considere, a su sola discreción, que no corresponden a una oportunidad comercial viable.</li>
                  <li>Toda propuesta comercial, oferta de servicios o contratación deberá ser formalizada mediante los instrumentos jurídicos correspondientes, suscritos por las partes, con independencia y en adición a los presentes Términos.</li>
                </ul>

                <h2>CLÁUSULA CUARTA. VERACIDAD DE LA INFORMACIÓN PROPORCIONADA</h2>
                <p>
                  El usuario que haga uso del formulario de contacto o de cualquier otro canal habilitado en el Sitio garantiza que la información que proporciona es verídica, actualizada, completa y no induce a error. El usuario asume plena responsabilidad por las consecuencias que pudiera derivar de la aportación de información falsa, incompleta o engañosa, y se obliga a mantener indemne a EDIRA frente a cualquier reclamación, daño o perjuicio que de ello derive.
                </p>
                <p>
                  EDIRA podrá, sin necesidad de notificación previa, desestimar cualquier solicitud de contacto o prospección en la que detecte inconsistencias, errores manifiestos o indicios de falsedad en la información proporcionada.
                </p>

                <h2>CLÁUSULA QUINTA. PROPIEDAD INTELECTUAL</h2>
                <p>
                  El Sitio y la totalidad de sus contenidos, incluyendo de manera enunciativa mas no limitativa: la denominación comercial, marca, logotipo, nombre de dominio, diseño gráfico, interfaz de usuario, textos, imágenes, íconos, código fuente, arquitectura de información, metodologías descritas, casos de uso y cualquier otro elemento distintivo o creativo, son propiedad exclusiva de EDIRA o de terceros que han otorgado a EDIRA las licencias correspondientes, y se encuentran protegidos por las disposiciones aplicables en materia de propiedad intelectual e industrial conforme a la legislación mexicana vigente.
                </p>
                <p>
                  Se prohíbe expresamente cualquier uso, reproducción, distribución, transformación, comunicación pública, explotación comercial o cualquier otra forma de disposición del Contenido Protegido, sin haber obtenido previamente autorización expresa y por escrito de EDIRA. El acceso al Sitio no confiere al usuario derecho, título ni licencia alguna sobre el Contenido Protegido.
                </p>
                <p>
                  El uso no autorizado del Contenido Protegido podrá dar lugar a las acciones civiles, mercantiles y penales que correspondan conforme a la legislación aplicable.
                </p>

                <h2>CLÁUSULA SEXTA. RESTRICCIONES Y USOS PROHIBIDOS</h2>
                <p>Sin perjuicio de lo señalado en la Cláusula Segunda, el usuario se obliga expresamente a abstenerse de:</p>
                <ul>
                  <li>Utilizar el Sitio, su contenido o la marca de EDIRA con fines contrarios a la ley, a la moral o al orden público.</li>
                  <li>Reproducir o adaptar los contenidos del Sitio para elaborar documentos, materiales o herramientas que sean presentados ante terceros como propios, como si emanaran de EDIRA, o que induzcan a confusión respecto del origen o autoría de dicha información.</li>
                  <li>Citar, referenciar o distribuir información extraída del Sitio fuera del contexto en que fue publicada, de forma que distorsione el significado original o pueda causar daño a la imagen, reputación o actividad comercial de EDIRA.</li>
                  <li>Utilizar el nombre, denominación, logotipo o cualquier elemento distintivo de EDIRA en redes sociales, plataformas digitales, comunicaciones comerciales o cualquier otro medio, sin autorización previa por escrito.</li>
                  <li>Efectuar comunicaciones o declaraciones públicas que atribuyan a EDIRA posiciones, afirmaciones, compromisos o resultados que no hayan sido expresamente validados por escrito por un representante autorizado de la empresa.</li>
                  <li>Interferir en la experiencia de otros usuarios o en el funcionamiento ordinario del Sitio mediante cualquier conducta abusiva, perturbadora o maliciosa.</li>
                </ul>

                <h2>CLÁUSULA SÉPTIMA. EXCLUSIÓN DE GARANTÍAS</h2>
                <p>EDIRA no otorga garantía alguna, expresa ni implícita, respecto de:</p>
                <ul>
                  <li>La exactitud, integridad, vigencia o idoneidad del contenido publicado en el Sitio para fines distintos de los previstos en la Cláusula Segunda.</li>
                  <li>La disponibilidad continua, ininterrumpida o libre de errores del Sitio. El acceso puede verse afectado por mantenimiento técnico, fallas de conectividad, actualizaciones o causas de fuerza mayor o caso fortuito.</li>
                  <li>La ausencia de errores tipográficos, inexactitudes o desactualizaciones en el contenido, los cuales pueden presentarse de forma involuntaria.</li>
                  <li>La adecuación de los servicios de EDIRA a las necesidades específicas del usuario, en tanto que la determinación de viabilidad y alcance corresponde a un proceso de diagnóstico formal posterior al contacto inicial.</li>
                  <li>La compatibilidad del Sitio con todos los navegadores, dispositivos o sistemas operativos utilizados por el usuario.</li>
                </ul>
                <p>
                  En la medida máxima permitida por la legislación mexicana aplicable, EDIRA rechaza expresamente toda responsabilidad por daños o perjuicios derivados de la confianza depositada en el contenido del Sitio para la toma de decisiones técnicas, estratégicas, financieras, operativas o de cualquier otra naturaleza.
                </p>

                <h2>CLÁUSULA OCTAVA. LIMITACIÓN DE RESPONSABILIDAD</h2>
                <p>En la medida máxima permitida por el derecho aplicable, EDIRA no será responsable por:</p>
                <ul>
                  <li>Daños directos, indirectos, incidentales, especiales, consecuentes o punitivos que pudieran derivar del acceso, uso o imposibilidad de uso del Sitio.</li>
                  <li>Pérdida de datos, lucro cesante, pérdida de oportunidades comerciales, interrupción de actividades o cualquier otro perjuicio económico o patrimonial que el usuario alegue como consecuencia del uso o no disponibilidad del Sitio.</li>
                  <li>Decisiones adoptadas por el usuario con base en el contenido del Sitio, con independencia de la interpretación que dicho usuario haya efectuado.</li>
                  <li>Actos u omisiones de terceros que puedan afectar la seguridad, integridad o disponibilidad del Sitio.</li>
                  <li>Retrasos, omisiones o errores en la comunicación derivados de fallas en redes de telecomunicaciones, servicios de correo electrónico o plataformas de terceros.</li>
                  <li>El contenido, las políticas de privacidad o las prácticas de sitios web de terceros a los que el usuario pueda acceder a través de enlaces contenidos en el Sitio.</li>
                </ul>
                <p>
                  La responsabilidad total de EDIRA frente al usuario, en cualquier circunstancia y por cualquier causa relacionada con el uso del Sitio, no superará, en ningún caso, la cantidad equivalente a cero pesos mexicanos (MXN $0.00), dado que el Sitio es un canal informativo de acceso gratuito y no media contraprestación económica alguna asociada a su uso.
                </p>

                <h2>CLÁUSULA NOVENA. USO DE TECNOLOGÍAS DE INTELIGENCIA ARTIFICIAL Y DATOS</h2>
                <p>
                  En virtud de la naturaleza de la actividad de EDIRA, los contenidos del Sitio pueden hacer referencia a metodologías, herramientas, modelos o enfoques relacionados con la inteligencia artificial, el aprendizaje automático, la analítica avanzada y la ingeniería de datos. El usuario reconoce y acepta que:
                </p>
                <ul>
                  <li>Las tecnologías de inteligencia artificial producen resultados de naturaleza probabilística y estadística, y no determinista. Ninguna descripción, referencia o ejemplo contenido en el Sitio deberá interpretarse como garantía de resultados específicos, certeros o repetibles.</li>
                  <li>El desempeño real de cualquier solución tecnológica depende de factores contextuales, técnicos, organizacionales y de datos que son propios de cada cliente y que no pueden ser anticipados de manera general desde el Sitio.</li>
                  <li>La información técnica publicada en el Sitio tiene carácter referencial y divulgativo. No constituye recomendación técnica, dictamen profesional ni asesoramiento vinculante de ninguna naturaleza.</li>
                  <li>EDIRA no será responsable por interpretaciones erróneas del contenido técnico del Sitio, ni por decisiones adoptadas con base en dicho contenido sin haber formalizado previamente un contrato de servicios con la empresa.</li>
                  <li>El uso de marcas comerciales de herramientas, plataformas o tecnologías de terceros en el contenido del Sitio es meramente referencial y no implica relación comercial, patrocinio ni respaldo entre dichos terceros y EDIRA, salvo que se indique expresamente lo contrario.</li>
                </ul>

                <h2>CLÁUSULA DÉCIMA. RELACIÓN CON TERCEROS</h2>
                <p>
                  Para la prestación de sus servicios y para el funcionamiento del Sitio, EDIRA puede hacer uso de herramientas, plataformas, proveedores de infraestructura tecnológica y otros servicios de terceros. El usuario reconoce y acepta que:
                </p>
                <ul>
                  <li>EDIRA no controla, no avala y no es responsable de los contenidos, las políticas de privacidad, la disponibilidad ni las prácticas comerciales de los Terceros.</li>
                  <li>La disponibilidad y el funcionamiento del Sitio pueden verse afectados por las condiciones de los servicios de Terceros, situación ante la cual EDIRA no incurrirá en responsabilidad alguna.</li>
                  <li>Cualquier relación que el usuario establezca con Terceros como consecuencia de la información contenida en el Sitio es de exclusiva responsabilidad del usuario.</li>
                  <li>EDIRA no asume garantía alguna respecto del funcionamiento, la continuidad o la adecuación de los servicios de Terceros utilizados en conexión con el Sitio.</li>
                </ul>

                <h2>CLÁUSULA DÉCIMA PRIMERA. PROTECCIÓN REPUTACIONAL Y DE MARCA</h2>
                <p>
                  EDIRA ejerce protección activa sobre su nombre comercial, reputación corporativa, imagen institucional y activos de propiedad intelectual. En consecuencia:
                </p>
                <ul>
                  <li>Queda expresamente prohibido el uso del nombre &ldquo;EDIRA&rdquo;, de su logotipo, de su denominación comercial o de cualquier elemento distintivo asociado a la empresa, en cualquier contexto, plataforma o medio, sin autorización previa y por escrito de un representante legalmente facultado de la empresa.</li>
                  <li>El usuario se compromete a no realizar declaraciones, publicaciones, reseñas, comentarios o difusiones de cualquier naturaleza que atribuyan a EDIRA afirmaciones, compromisos, resultados o posturas que no hayan sido expresamente validadas por escrito por EDIRA.</li>
                  <li>La reproducción, adaptación o uso del contenido del Sitio fuera de su contexto original, de manera que pueda distorsionar la propuesta de valor, los alcances o las capacidades de EDIRA, constituirá un uso indebido susceptible de generar acciones legales.</li>
                  <li>El usuario reconoce que las declaraciones falsas, engañosas o difamatorias en relación con EDIRA, sus servicios, metodologías o equipo, podrán dar lugar al ejercicio de las acciones civiles, mercantiles y penales que correspondan conforme a la legislación mexicana aplicable.</li>
                  <li>Queda prohibido imitar, replicar o presentar ante terceros contenido del Sitio como si fuera de autoría o titularidad propia del usuario, o como si representara una posición oficial de EDIRA distinta a la expresamente publicada.</li>
                </ul>

                <h2>CLÁUSULA DÉCIMA SEGUNDA. ENLACES A SITIOS EXTERNOS</h2>
                <p>
                  El Sitio puede contener hipervínculos o referencias a sitios web de terceros con fines meramente informativos o de referencia. EDIRA no controla dichos sitios, no es responsable de su contenido, políticas de privacidad, seguridad ni disponibilidad, y su inclusión en el Sitio no implica respaldo, recomendación, patrocinio ni relación comercial alguna con los titulares de dichos sitios.
                </p>
                <p>
                  El acceso a sitios externos a través de enlaces contenidos en el Sitio se realiza bajo la exclusiva responsabilidad del usuario. EDIRA recomienda al usuario revisar los términos y condiciones y las políticas de privacidad de cualquier sitio externo que visite.
                </p>

                <h2>CLÁUSULA DÉCIMA TERCERA. CONFIDENCIALIDAD EN LA INTERACCIÓN INICIAL</h2>
                <p>
                  Toda información de carácter técnico, estratégico, operativo, comercial o de negocio que el Usuario comunique a EDIRA a través del formulario de contacto o de cualquiera de los medios de comunicación habilitados en el Sitio, con anterioridad a la suscripción de cualquier instrumento contractual formal, será tratada por EDIRA con la debida diligencia, discreción y bajo principios de buena fe, en atención a la naturaleza precontractual de la relación.
                </p>
                <p>
                  EDIRA procurará implementar medidas razonables de resguardo y manejo de la información proporcionada por el Usuario, de conformidad con prácticas profesionales generalmente aceptadas en el sector.
                </p>
                <p>
                  No obstante lo anterior, el Usuario reconoce que, en ausencia de un acuerdo de confidencialidad formalmente suscrito por escrito entre las partes, la información compartida durante la etapa de contacto inicial no constituirá, por sí misma, una obligación contractual formal de confidencialidad o de no divulgación por parte de EDIRA.
                </p>
                <p>
                  La formalización de obligaciones específicas de confidencialidad, alcances de uso de la información, así como restricciones de divulgación, quedará sujeta a la celebración de los instrumentos jurídicos correspondientes, incluyendo, en su caso, acuerdos de confidencialidad (NDA) o contratos de prestación de servicios.
                </p>
                <p>
                  EDIRA se compromete, en cualquier caso, a no divulgar públicamente información específica del Usuario obtenida durante el proceso de contacto inicial, salvo cuando exista requerimiento expreso de autoridad competente, mandato judicial o disposición legal aplicable.
                </p>

                <h2>CLÁUSULA DÉCIMA CUARTA. PROTECCIÓN DE DATOS PERSONALES</h2>
                <p>
                  El tratamiento de los datos personales que el usuario proporcione a través del Sitio se rige por el Aviso de Privacidad de EDIRA, disponible en el propio Sitio, el cual se encuentra elaborado en cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento. Los presentes Términos no sustituyen ni modifican el Aviso de Privacidad de EDIRA.
                </p>
                <p>
                  El usuario reconoce haber tenido acceso al Aviso de Privacidad y acepta que el uso del Sitio y del formulario de contacto implica el consentimiento para el tratamiento de sus datos personales en los términos y para las finalidades descritas en dicho Aviso.
                </p>
                <p>
                  Para el ejercicio de los derechos ARCO (Acceso, Rectificación, Cancelación y Oposición), el usuario deberá dirigirse a EDIRA a través del correo electrónico <a href="mailto:info@edira.dev">info@edira.dev</a>, conforme al procedimiento establecido en el Aviso de Privacidad.
                </p>

                <h2>CLÁUSULA DÉCIMA QUINTA. MODIFICACIONES A LOS TÉRMINOS</h2>
                <p>
                  EDIRA se reserva el derecho de modificar, actualizar o sustituir los presentes Términos en cualquier momento y sin necesidad de notificación previa individual al usuario. Las modificaciones entrarán en vigor a partir de su publicación en el Sitio, indicando la fecha de la última actualización en el encabezado del documento.
                </p>
                <p>
                  El usuario es responsable de revisar periódicamente los presentes Términos para mantenerse informado de sus disposiciones vigentes. El acceso y uso continuado del Sitio con posterioridad a la publicación de cualquier modificación constituirá aceptación plena y sin reservas de los Términos modificados.
                </p>

                <h2>CLÁUSULA DÉCIMA SEXTA. RESOLUCIÓN DE CONTROVERSIAS</h2>
                <p>
                  Cualquier controversia, conflicto o reclamación que surja en relación con el acceso, uso o interpretación del Sitio o de los presentes Términos será gestionada conforme al siguiente procedimiento escalonado:
                </p>
                <h3>16.1 PRINCIPIO DE BUENA FE</h3>
                <p>
                  Las partes se comprometen a actuar en todo momento conforme al principio de buena fe, procurando la resolución amistosa de cualquier diferencia antes de iniciar cualquier procedimiento formal.
                </p>
                <h3>16.2 NEGOCIACIÓN DIRECTA</h3>
                <p>
                  En primer término, el usuario deberá notificar a EDIRA por escrito, a través del correo electrónico <a href="mailto:info@edira.dev">info@edira.dev</a>, la naturaleza y el alcance de la controversia. Las partes dispondrán de un plazo de quince (15) días naturales contados a partir de la recepción de dicha notificación para intentar resolver el diferendo mediante negociación directa.
                </p>
                <h3>16.3 MEDIACIÓN</h3>
                <p>
                  En caso de que la negociación directa no conduzca a una resolución satisfactoria dentro del plazo indicado, las partes podrán someterse voluntariamente a un procedimiento de mediación ante una institución o mediador acreditado, preferentemente en el Estado de Querétaro, cuya selección será acordada de común acuerdo.
                </p>
                <h3>16.4 INSTANCIAS JUDICIALES</h3>
                <p>
                  Agotadas las etapas anteriores sin resultado satisfactorio, el usuario podrá ejercer las acciones que en derecho correspondan ante las autoridades judiciales o administrativas competentes.
                </p>
                <h3>16.5 RENUNCIA A ACCIONES COLECTIVAS</h3>
                <p>
                  En la medida máxima permitida por la legislación mexicana aplicable, el Usuario manifiesta su intención de no participar, iniciar, promover o adhérase a demandas colectivas, acciones de grupo o procedimientos de naturaleza similar en contra de EDIRA, derivados del acceso, uso o interpretación del Sitio o de los presentes Términos. Las partes reconociendo que la presente disposición tiene como finalidad privilegiar la resolución individualizada de cualquier controversia.
                </p>

                <h2>CLÁUSULA DÉCIMA SÉPTIMA. JURISDICCIÓN Y LEGISLACIÓN APLICABLE</h2>
                <p>
                  Los presentes Términos se rigen e interpretan de conformidad con la legislación mexicana aplicable, incluyendo, en lo conducente, el Código Civil del Estado de Querétaro, el Código de Comercio, la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás disposiciones del orden jurídico nacional vigente.
                </p>
                <p>
                  Para la interpretación y resolución judicial de cualquier controversia derivada del presente documento, las partes se someten expresamente a la jurisdicción y competencia de los tribunales competentes ubicados en la ciudad de Santiago de Querétaro, Estado de Querétaro, México, renunciando expresamente a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro, o por cualquier otra causa.
                </p>

                <h2>CLÁUSULA DÉCIMA OCTAVA. MEDIOS DE CONTACTO OFICIALES</h2>
                <p>
                  Para cualquier consulta, aclaración, notificación o solicitud relacionada con el Sitio o con los presentes Términos, el usuario deberá dirigirse a EDIRA exclusivamente a través de los siguientes medios de contacto oficiales:
                </p>
                <ul>
                  <li><strong>Sitio web:</strong> <a href="https://www.edira.dev/">https://www.edira.dev/</a></li>
                  <li><strong>Correo electrónico:</strong> <a href="mailto:info@edira.dev">info@edira.dev</a></li>
                  <li><strong>Teléfono:</strong> +52 1 442 866 2242</li>
                </ul>

                <div className={styles.divider} />
                <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                  © 2026 EDIRA. Todos los derechos reservados.<br />
                  Santiago de Querétaro, Querétaro, México | www.edira.dev | info@edira.dev
                </p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.header}>
                <h1 className={styles.title}>Terms and Conditions of Use</h1>
                <div className={styles.metaInfo}>
                  <span className={styles.metaLabel}>Responsible Party: Eduardo Rodrigo Silva Orozco (EDIRA)</span>
                  <span className={styles.metaLabel}>Effective Date: May 12, 2026</span>
                  <span className={styles.metaLabel}>Version: 1.0</span>
                </div>
              </div>

              <div className={styles.content}>
                <p>
                  Thank you for using EDIRA\'s website!
                </p>
                <p>
                  EDIRA is dedicated to specialized technology consulting in data architecture, data engineering, analytics, artificial intelligence, and data governance (hereinafter referred to as &ldquo;EDIRA&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;).
                </p>
                <p>
                  These Terms and Conditions of Use (hereinafter referred to as the &ldquo;Terms&rdquo;) regulate the access and use of the website <a href="https://www.edira.dev/">https://www.edira.dev/</a>, as well as any initial interaction that the User carries out through the contact means available on it (hereinafter, the &ldquo;Site&rdquo;).
                </p>
                <p>
                  The Site is exclusively informative and for contact purposes, and therefore:
                </p>
                <ul>
                  <li>It does not constitute a transactional platform.</li>
                  <li>It does not allow direct service contracting.</li>
                  <li>It does not imply the automatic generation of a contractual relationship.</li>
                </ul>
                <p>
                  In the event that the User decides to establish contact with EDIRA, any service will be subject to an independent process of diagnosis, proposal, and contractual formalization.
                </p>

                <h2>GENERAL CONDITIONS</h2>
                <p>
                  The User is requested to read these Terms carefully, as they regulate access, navigation, and interaction through the Site.
                </p>
                <p>
                  Accessing, consulting, or using the Site implies that the User acknowledges having read, understood, and accepted in its entirety the content of these Terms. In case of disagreement, the User must refrain from using the Site.
                </p>
                <p>For legal clarity and proper interpretation, the User acknowledges that:</p>
                <ul>
                  <li>The Site does not contemplate account registration processes or user authentication mechanisms.</li>
                  <li>The Site does not allow transactions, payments, or direct contracting of services.</li>
                  <li>Consequently, any reference to &ldquo;client&rdquo;, &ldquo;contracting&rdquo;, or &ldquo;transaction&rdquo; must be understood exclusively in a potential or subsequent context to the initial interaction, and never as an automatic result of using the Site.</li>
                </ul>
                <p>
                  These Terms are issued in compliance with Mexican legislation applicable to e-commerce, consumer protection, and the use of digital media, with the purpose of establishing clear conditions of Site use, delimiting responsibilities, and ensuring transparency in user interaction.
                </p>

                <h2>DEFINITIONS</h2>
                <p>For the purposes of these Terms, the following concepts will have the meaning assigned to them below:</p>
                <ul>
                  <li><strong>&ldquo;Site&rdquo;:</strong> The web portal identified as <a href="https://www.edira.dev/">https://www.edira.dev/</a>, including all its contents, sections, forms, and available functionalities.</li>
                  <li><strong>&ldquo;EDIRA&rdquo;:</strong> The technology consulting firm owning the Site, responsible for its operation, content, and initial user interaction.</li>
                  <li><strong>&ldquo;User&rdquo;:</strong> Any physical or moral person who accesses, navigates, or uses the Site, regardless of whether they establish contact with EDIRA.</li>
                  <li><strong>&ldquo;Services&rdquo;:</strong> The professional technology consulting solutions offered by EDIRA in data, analytics, and artificial intelligence, whose contracting is performed exclusively through processes external to the Site.</li>
                  <li><strong>&ldquo;Initial interaction&rdquo;:</strong> Any communication carried out by the User through forms, email, telephone, or other contact means available on the Site.</li>
                  <li><strong>&ldquo;Site Information&rdquo;:</strong> All informative, technical, commercial, or descriptive content published on the Site, including text, graphics, documents, explanatory materials, and service references.</li>
                  <li><strong>&ldquo;Protected Content&rdquo;:</strong> Any content on the Site susceptible to protection under intellectual or industrial property laws, including texts, designs, code, methodologies, and materials.</li>
                </ul>

                <h2>FIRST CLAUSE. PURPOSE OF THE WEBSITE</h2>
                <p>
                  EDIRA\'s website has the exclusive purpose of dissemination of informative content about the capacities, areas of specialization, and value proposal of the company, as well as enabling a formal channel of contact and commercial prospecting directed to companies interested in its services.
                </p>
                <p>
                  The Site does not constitute, under any circumstances, a transactional platform, an online contracting portal, a user registration system, or an interface for the direct rendering of services. Its function is limited to facilitating the first contact between EDIRA and potential clients, within the framework of the following operational flow: receipt of the contact form, initial communication, diagnosis of needs, commercial proposal preparation, and contractual formalization through legal instruments independent of this Site.
                </p>
                <p>
                  The content published on the Site is purely informative and referential. It must not be interpreted as a binding offer, a promise of agreement, a warranty of results, or technical, legal, financial, or strategic advice of any kind.
                </p>

                <h2>SECOND CLAUSE. TERMS OF WEBSITE USE</h2>
                <p>
                  Use of the Site must be carried out in accordance with applicable Mexican legislation, morals, public order, good customs, and these Terms. The following is expressly prohibited:
                </p>
                <ul>
                  <li>Accessing the Site or its underlying systems using automated techniques, robots, scrapers, or any mechanism not authorized by EDIRA.</li>
                  <li>Performing reverse engineering, decompiling, or attempting to obtain the source code of any technical component of the Site.</li>
                  <li>Introducing, transmitting, or distributing computer viruses, malware, malicious code, or any element that could damage, interrupt, or deteriorate the operation of the Site or EDIRA\'s systems.</li>
                  <li>Impersonating EDIRA, its representatives, collaborators, or any other physical or moral person.</li>
                  <li>Using the Site for purposes other than those expressly provided for in the First Clause.</li>
                  <li>Reproducing, copying, distributing, modifying, or commercially exploiting, in whole or in part, any content on the Site without EDIRA\'s prior written authorization.</li>
                  <li>Performing any action that may affect the availability, integrity, confidentiality, or security of the Site or the information housed within it.</li>
                </ul>
                <p>
                  EDIRA reserves the right to block access to the Site, temporarily or permanently, to any user who contravenes the above provisions, without generating any right to compensation or indemnity.
                </p>

                <h2>THIRD CLAUSE. USE OF THE CONTACT FORM</h2>
                <p>
                  The Site has a contact form whose purpose is exclusively to facilitate initial communication between the user and EDIRA to explore a potential business relationship. The user acknowledges and accepts that:
                </p>
                <ul>
                  <li>The submission of the contact form does not generate, by itself, any contractual relationship, service obligation, commercial commitment, or legal bond between the user and EDIRA.</li>
                  <li>The receipt and response by EDIRA to a contact form constitutes preliminary communication only and does not imply acceptance of any offer, proposal, or condition raised by the user.</li>
                  <li>EDIRA reserves the right not to respond to contact requests that do not fit its target client profile, that are incomplete, contain false information, or that EDIRA considers, in its sole discretion, not to correspond to a viable business opportunity.</li>
                  <li>Any commercial proposal, service offering, or contracting must be formalized through corresponding legal instruments signed by the parties, independently of and in addition to these Terms.</li>
                </ul>

                <h2>FOURTH CLAUSE. ACCURACY OF THE PROVIDED INFORMATION</h2>
                <p>
                  The user who uses the contact form or any other channel enabled on the Site guarantees that the information provided is true, current, complete, and not misleading. The user assumes full responsibility for any consequences arising from false, incomplete, or misleading information and undertakes to hold EDIRA harmless from any claim, damage, or harm resulting therefrom.
                </p>
                <p>
                  EDIRA may, without prior notice, dismiss any contact or prospecting request in which it detects inconsistencies, manifest errors, or signs of falsehood in the information provided.
                </p>

                <h2>FIFTH CLAUSE. INTELLECTUAL PROPERTY</h2>
                <p>
                  The Site and all its contents, including but not limited to: trade name, brand, logo, domain name, graphic design, user interface, texts, images, icons, source code, information architecture, described methodologies, use cases, and any other distinctive or creative element, are the exclusive property of EDIRA or third parties who have granted EDIRA the corresponding licenses, and are protected by applicable intellectual and industrial property laws under current Mexican legislation.
                </p>
                <p>
                  Any use, reproduction, distribution, transformation, public communication, commercial exploitation, or any other form of disposal of the Protected Content is expressly prohibited without EDIRA\'s prior written authorization. Access to the Site does not confer upon the user any right, title, or license over the Protected Content.
                </p>
                <p>
                  The unauthorized use of Protected Content may lead to corresponding civil, commercial, and criminal actions under applicable law.
                </p>

                <h2>SIXTH CLAUSE. RESTRICTIONS AND PROHIBITED USES</h2>
                <p>Without prejudice to the provisions of the Second Clause, the user expressly undertakes to refrain from:</p>
                <ul>
                  <li>Using the Site, its content, or EDIRA\'s brand for purposes contrary to law, morals, or public order.</li>
                  <li>Reproducing or adapting Site content to prepare documents, materials, or tools presented to third parties as their own, as if they emanated from EDIRA, or inducing confusion regarding the origin or authorship of such information.</li>
                  <li>Citing, referencing, or distributing information extracted from the Site outside the context in which it was published, in a way that distorts the original meaning or could cause damage to the image, reputation, or commercial activity of EDIRA.</li>
                  <li>Using the name, brand, logo, or any distinctive element of EDIRA in social networks, digital platforms, commercial communications, or any other media, without prior written authorization.</li>
                  <li>Making public statements or declarations attributing to EDIRA positions, claims, commitments, or results that have not been expressly validated in writing by an authorized representative of the company.</li>
                  <li>Interfering with the experience of other users or the ordinary operation of the Site through any abusive, disruptive, or malicious conduct.</li>
                </ul>

                <h2>SEVENTH CLAUSE. DISCLAIMER OF WARRANTIES</h2>
                <p>EDIRA does not grant any warranty, express or implied, regarding:</p>
                <ul>
                  <li>The accuracy, completeness, currency, or suitability of the content published on the Site for purposes other than those provided for in the Second Clause.</li>
                  <li>The continuous, uninterrupted, or error-free availability of the Site. Access may be affected by technical maintenance, connectivity failures, updates, or force majeure events.</li>
                  <li>The absence of typographical errors, inaccuracies, or outdated content, which may occur unintentionally.</li>
                  <li>The suitability of EDIRA\'s services for the user\'s specific needs, as the determination of feasibility and scope corresponds to a formal diagnostic process subsequent to initial contact.</li>
                  <li>The compatibility of the Site with all browsers, devices, or operating systems used by the user.</li>
                </ul>
                <p>
                  To the maximum extent permitted by applicable Mexican law, EDIRA expressly disclaims all liability for damages resulting from reliance placed on Site content for technical, strategic, financial, operational, or other decision-making.
                </p>

                <h2>EIGHTH CLAUSE. LIMITATION OF LIABILITY</h2>
                <p>To the maximum extent permitted by applicable law, EDIRA will not be liable for:</p>
                <ul>
                  <li>Direct, indirect, incidental, special, consequential, or punitive damages that may arise from access to, use of, or inability to use the Site.</li>
                  <li>Loss of data, lost profits, lost commercial opportunities, business interruption, or any other economic or equity damage the user claims as a consequence of using or the unavailability of the Site.</li>
                  <li>Decisions made by the user based on Site content, regardless of the user\'s interpretation.</li>
                  <li>Third-party acts or omissions that may affect the security, integrity, or availability of the Site.</li>
                  <li>Delays, omissions, or errors in communication arising from telecommunication network failures, email services, or third-party platforms.</li>
                  <li>The content, privacy policies, or practices of third-party websites accessed through links contained on the Site.</li>
                </ul>
                <p>
                  EDIRA\'s total liability to the user, under any circumstance and for any cause related to the use of the Site, will not exceed, in any case, the amount equivalent to zero Mexican Pesos (MXN $0.00), given that the Site is a free-access informative channel and no economic consideration is associated with its use.
                </p>

                <h2>NINTH CLAUSE. USE OF ARTIFICIAL INTELLIGENCE AND DATA TECHNOLOGIES</h2>
                <p>
                  By virtue of EDIRA\'s business activity, Site content may refer to methodologies, tools, models, or approaches related to artificial intelligence, machine learning, advanced analytics, and data engineering. The user acknowledges and accepts that:
                </p>
                <ul>
                  <li>Artificial intelligence technologies produce results of a probabilistic and statistical nature rather than a deterministic one. No description, reference, or example contained on the Site should be interpreted as a warranty of specific, certain, or repeatable results.</li>
                  <li>The actual performance of any technology solution depends on contextual, technical, organizational, and data factors unique to each client that cannot be anticipated generally from the Site.</li>
                  <li>Technical information published on the Site is for referential and educational purposes only. It does not constitute technical recommendations, professional opinions, or binding advice of any kind.</li>
                  <li>EDIRA will not be liable for erroneous interpretations of the technical content of the Site, or for decisions adopted based on such content without having previously formalized a service agreement with the company.</li>
                  <li>The use of third-party trademarks of tools, platforms, or technologies in Site content is purely referential and does not imply commercial relations, sponsorship, or endorsement, unless expressly stated otherwise.</li>
                </ul>

                <h2>TENTH CLAUSE. RELATIONSHIP WITH THIRD PARTIES</h2>
                <p>
                  For the rendering of its services and the operation of the Site, EDIRA may use tools, platforms, technological infrastructure providers, and other third-party services. The user acknowledges and accepts that:
                </p>
                <ul>
                  <li>EDIRA does not control, endorse, or assume responsibility for the content, privacy policies, availability, or commercial practices of Third Parties.</li>
                  <li>The availability and operation of the Site may be affected by the conditions of Third-Party services, a situation for which EDIRA will incur no liability whatsoever.</li>
                  <li>Any relationship the user establishes with Third Parties as a consequence of information contained on the Site is the sole responsibility of the user.</li>
                  <li>EDIRA assumes no warranty regarding the operation, continuity, or suitability of Third-Party services used in connection with the Site.</li>
                </ul>

                <h2>ELEVENTH CLAUSE. BRAND AND REPUTATIONAL PROTECTION</h2>
                <p>
                  EDIRA exercises active protection over its trade name, corporate reputation, institutional image, and intellectual property assets. Consequently:
                </p>
                <ul>
                  <li>The use of the name &ldquo;EDIRA&rdquo;, its logo, its trade name, or any distinctive element associated with the company in any context, platform, or media is expressly prohibited without EDIRA\'s prior written authorization.</li>
                  <li>The user agrees not to make statements, publications, reviews, comments, or diffusions of any kind attributing to EDIRA claims, commitments, results, or positions not expressly validated in writing by EDIRA.</li>
                  <li>The reproduction, adaptation, or use of Site content outside its original context, in a way that may distort EDIRA\'s value proposition, scopes, or capacities, will constitute an improper use susceptible to generating legal action.</li>
                  <li>The user acknowledges that false, misleading, or defamatory statements in relation to EDIRA, its services, methodologies, or team may lead to corresponding civil, commercial, and criminal actions under applicable Mexican legislation.</li>
                  <li>It is prohibited to imitate, replicate, or present Site content to third parties as if it were the user\'s own authorship or ownership, or as if it represented an official position of EDIRA other than the one expressly published.</li>
                </ul>

                <h2>TWELFTH CLAUSE. LINKS TO EXTERNAL SITES</h2>
                <p>
                  The Site may contain hyperlinks or references to third-party websites for informational or reference purposes only. EDIRA does not control these sites, is not responsible for their content, privacy policies, security, or availability, and their inclusion on the Site does not imply endorsement, recommendation, sponsorship, or any commercial relationship with the owners of such sites.
                </p>
                <p>
                  Accessing external sites through links contained on the Site is performed under the sole responsibility of the user. EDIRA recommends the user review the terms and conditions and privacy policies of any external site they visit.
                </p>

                <h2>THIRTEENTH CLAUSE. CONFIDENTIALITY IN INITIAL INTERACTION</h2>
                <p>
                  All information of a technical, strategic, operational, commercial, or business nature that the User communicates to EDIRA through the contact form or any of the communication channels enabled on the Site, prior to signing any formal agreement, will be treated by EDIRA with due diligence, discretion, and under good faith principles, given the pre-contractual nature of the relationship.
                </p>
                <p>
                  EDIRA will endeavor to implement reasonable measures to safeguard and handle the information provided by the User, in accordance with generally accepted professional practices in the sector.
                </p>
                <p>
                  However, the User acknowledges that, in the absence of a formal non-disclosure agreement (NDA) signed in writing between the parties, the information shared during the initial contact phase will not constitute, by itself, a formal contractual obligation of confidentiality or non-disclosure by EDIRA.
                </p>
                <p>
                  The formalization of specific confidentiality obligations, scopes of information use, as well as disclosure restrictions, will be subject to the signing of corresponding legal instruments, including, if applicable, NDAs or service agreements.
                </p>
                <p>
                  EDIRA undertakes, in any case, not to publicly disclose specific User information obtained during the initial contact process, except when required by competent authority, judicial mandate, or applicable law.
                </p>

                <h2>FOURTEENTH CLAUSE. PROTECTION OF PERSONAL DATA</h2>
                <p>
                  The processing of personal data provided by the user through the Site is governed by EDIRA\'s Privacy Notice, available on the Site itself, which is prepared in compliance with the Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP) and its Regulations. These Terms do not substitute or modify EDIRA\'s Privacy Notice.
                </p>
                <p>
                  The user acknowledges having had access to the Privacy Notice and accepts that the use of the Site and the contact form implies consent to the processing of their personal data under the terms and for the purposes described in said Notice.
                </p>
                <p>
                  To exercise ARCO rights (Access, Rectification, Cancellation, and Objection), the user must address EDIRA via email at <a href="mailto:info@edira.dev">info@edira.dev</a>, pursuant to the procedure established in the Privacy Notice.
                </p>

                <h2>FIFTEENTH CLAUSE. AMENDMENTS TO THE TERMS</h2>
                <p>
                  EDIRA reserves the right to modify, update, or replace these Terms at any time and without prior individual notice to the user. Amendments will take effect upon their publication on the Site, indicating the last update date in the document header.
                </p>
                <p>
                  The user is responsible for regularly reviewing these Terms to stay informed of current provisions. Continued access to and use of the Site following the publication of any modification will constitute full and unreserved acceptance of the modified Terms.
                </p>

                <h2>SIXTEENTH CLAUSE. RESOLUTION OF DISPUTES</h2>
                <p>
                  Any controversy, conflict, or claim arising in connection with access to, use of, or interpretation of the Site or these Terms will be managed according to the following phased procedure:
                </p>
                <h3>16.1 PRINCIPLE OF GOOD FAITH</h3>
                <p>
                  The parties agree to act at all times in accordance with the principle of good faith, seeking an amicable resolution of any difference before starting any formal proceeding.
                </p>
                <h3>16.2 DIRECT NEGOTIATION</h3>
                <p>
                  First, the user must notify EDIRA in writing via email at <a href="mailto:info@edira.dev">info@edira.dev</a> regarding the nature and scope of the dispute. The parties will have fifteen (15) calendar days from receipt of said notification to attempt to resolve the difference through direct negotiation.
                </p>
                <h3>16.3 MEDIATION</h3>
                <p>
                  If direct negotiation does not lead to a satisfactory resolution within the indicated period, the parties may voluntarily submit to a mediation process before an accredited mediation institution or mediator, preferably in the State of Querétaro, whose selection will be agreed upon by mutual consent.
                </p>
                <h3>16.4 JUDICIAL INSTANCES</h3>
                <p>
                  Once the previous stages are exhausted without a satisfactory result, the user may exercise appropriate legal actions before competent judicial or administrative authorities.
                </p>
                <h3>16.5 CLASS ACTION WAIVER</h3>
                <p>
                  To the maximum extent permitted by applicable Mexican law, the User expresses their intention not to participate in, initiate, promote, or join class actions, group actions, or similar proceedings against EDIRA arising from access, use, or interpretation of the Site or these Terms. The parties acknowledge that this provision is intended to privilege the individualized resolution of any controversy.
                </p>

                <h2>SEVENTEENTH CLAUSE. JURISDICTION AND APPLICABLE LAW</h2>
                <p>
                  These Terms are governed by and construed in accordance with applicable Mexican legislation, including, where applicable, the Civil Code of the State of Querétaro, the Commercial Code, the Federal Law on the Protection of Personal Data Held by Private Parties, and other current national legal provisions.
                </p>
                <p>
                  For the interpretation and judicial resolution of any controversy arising from this document, the parties submit expressly to the jurisdiction and competence of the competent courts located in the city of Santiago de Querétaro, State of Querétaro, Mexico, waiving any other jurisdiction that may correspond to them by reason of their present or future domiciles or any other cause.
                </p>

                <h2>EIGHTH CLAUSE. OFFICIAL CHANNELS OF CONTACT</h2>
                <p>
                  For any query, clarification, notification, or request related to the Site or these Terms, the user must address EDIRA exclusively through the following official channels:
                </p>
                <ul>
                  <li><strong>Website:</strong> <a href="https://www.edira.dev/">https://www.edira.dev/</a></li>
                  <li><strong>Email:</strong> <a href="mailto:info@edira.dev">info@edira.dev</a></li>
                  <li><strong>Phone:</strong> +52 1 442 866 2242</li>
                </ul>

                <div className={styles.divider} />
                <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                  © 2026 EDIRA. All rights reserved.<br />
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
