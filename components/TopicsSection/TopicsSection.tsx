import {
  AlertIcon,
  CircleClockIcon,
  HeartIcon,
  LockIcon,
  StarIcon,
  UsersIcon,
  ZapIcon,
} from '@/components/icons/Icons';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './TopicsSection.module.css';

const topics = [
  {
    title: 'Базові емоції та їхню роль',
    description:
      'Гнів, страх, відраза, радість, сором, подив — навіщо вони нам потрібні та яку функцію виконують.',
    icon: HeartIcon,
  },
  {
    title: 'Міфи про емоції',
    description:
      'Переконання та деструктивні установки, з якими ми живемо i які блокують природне проживання почуттів.',
    icon: AlertIcon,
  },
  {
    title: 'Вплив емоцій на тіло',
    description:
      'Механізм виникнення психосоматичних симптомів та хронічної напруги через відмову від проживання емоцій.',
    icon: ZapIcon,
  },
  {
    title: 'Вплив емоцій на стосунки',
    description:
      'Як пригнічені відчуття формують близькість, співзалежні моделі поведінки та руйнують особисті кордони.',
    icon: UsersIcon,
  },
  {
    title: 'Чому ми «заморожуємось»',
    description:
      'Відмова від проживання емоцій як адаптивна копінг-стратегія психіки для виживання у важкі моменти.',
    icon: LockIcon,
  },
  {
    title: 'Як розпочати «розморожування»',
    description:
      'Покрокові практичні рекомендації та безпечні техніки для дбайливого відновлення власної чутливості.',
    icon: CircleClockIcon,
  },
];

export function TopicsSection() {
  return (
    <section className={styles.section} aria-labelledby="topics-title">
      <Container>
        <SectionHeader
          id="topics-title"
          title="На вебінарі поговоримо про:"
          subtitle="Концентрована практична програма для роботи зі своїм емоційним станом"
        />

        <ul className={styles.grid}>
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <li className={styles.card} key={topic.title}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon />
                </span>
                <div className={styles.content}>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className={styles.highlight}>
          <StarIcon aria-hidden="true" />
          <span>60 хвилин корисної інформації від практичного психолога</span>
        </p>
      </Container>
    </section>
  );
}
