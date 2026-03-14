import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import styles from './Pricing.module.css';

export function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <Container>
        <div className={styles.header}>
          {/* TODO: Agregar título de sección */}
          <h2 className={styles.title}>Precios</h2>
          <p className={styles.description}>
            Elige el plan que mejor se adapte a tus necesidades.
          </p>
        </div>

        {/* TODO: Reemplazar con planes reales */}
        <div className={styles.grid}>
          {['Básico', 'Pro', 'Enterprise'].map((plan, i) => (
            <div
              key={plan}
              className={i === 1 ? styles.cardHighlighted : styles.card}
            >
              <h3 className={styles.planName}>{plan}</h3>
              <p className={styles.price}>$--</p>
              <p className={styles.planDescription}>
                Descripción del plan {plan}.
              </p>

              <ul className={styles.featureList}>
                {[1, 2, 3].map((f) => (
                  <li key={f} className={styles.featureItem}>
                    ✓ Característica {f}
                  </li>
                ))}
              </ul>

              <Button variant={i === 1 ? 'primary' : 'outline'}>
                Elegir plan
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
