import { Container } from '@/components/ui/Container/Container';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <Container>
        <div className={styles.header}>
          {/* TODO: Agregar título de sección */}
          <h2 className={styles.title}>Lo que dicen nuestros clientes</h2>
          <p className={styles.description}>
            Testimonios de quienes ya confían en nosotros.
          </p>
        </div>

        {/* TODO: Reemplazar con testimonios reales */}
        <div className={styles.grid}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.card}>
              <p className={styles.content}>
                &ldquo;Testimonio placeholder. Aquí irá la opinión de un
                cliente.&rdquo;
              </p>
              <div className={styles.author}>
                <div>
                  <p className={styles.authorName}>Nombre del cliente</p>
                  <p className={styles.authorRole}>Cargo / Empresa</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
