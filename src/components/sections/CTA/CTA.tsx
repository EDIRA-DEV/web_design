import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import styles from './CTA.module.css';

export function CTA() {
  return (
    <section className={styles.cta} id="cta">
      <Container>
        {/* TODO: Agregar título y descripción */}
        <h2 className={styles.title}>¿Listo para comenzar?</h2>
        <p className={styles.description}>
          Empieza hoy y transforma tu negocio.
        </p>

        <div className={styles.actions}>
          <Button variant="primary" size="lg">
            Empezar ahora
          </Button>
          <Button variant="secondary" size="lg">
            Contactar ventas
          </Button>
        </div>
      </Container>
    </section>
  );
}
