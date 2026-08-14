import { Container } from '@/components/ui/Container';
import { CtaLink } from '@/components/ui/CtaLink';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './BenefitsSection.module.css';

const benefits = [
  {
    title: '60 хвилин користі',
    description: 'Концентрована та корисна інформація від практичного психолога без "води".',
  },
  {
    title: 'Огляд базових емоцій',
    description:
      'Дізнаєтеся про їхні ключові функції та безпосередній вплив на тіло й якість життя.',
  },
  {
    title: 'Чіткі інструменти',
    description:
      'Зрозумієте, як дбайливо відновити власну чутливість і повернути емоційний баланс.',
  },
  {
    title: 'Відповіді на запитання',
    description:
      'Зможете поставити власні питання спікеру щодо розвитку емоційного інтелекту.',
  },
];

export function BenefitsSection() {
  return (
    <section className={styles.section} aria-labelledby="benefits-title">
      <Container>
        <SectionHeader
          id="benefits-title"
          title="Дозвольте собі відчувати, щоб покращити якість життя"
          subtitle="Що саме чекає на вас під час закритого вебінару"
        />

        <ol className={styles.grid}>
          {benefits.map((benefit, index) => (
            <li className={styles.card} key={benefit.title}>
              <span className={styles.number} aria-hidden="true">
                {index + 1}
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.cta}>
          <CtaLink>Зареєструватися на вебінар</CtaLink>
        </div>
      </Container>
    </section>
  );
}
