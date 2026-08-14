import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import styles from './SpeakerSection.module.css';

const SPEAKER_IMAGE = '/images/olena-naumenko.jpg';

const credentials = [
  'Здобула ступінь магістра психології в Київському національному університеті імені Тараса Шевченка.',
  'Завершила II рівень професійної підготовки гештальт-терапевтів та гештальт-консультантів у Київському Гештальт Університеті.',
  'Пройшла спеціалізацію «Робота з психосоматикою в гештальт-підході».',
];

export function SpeakerSection() {
  return (
    <section className={styles.section} aria-labelledby="speaker-title">
      <Container>
        <article className={styles.card}>
          <div className={styles.photoWrapper}>
            <Image
              className={styles.image}
              src={SPEAKER_IMAGE}
              alt="Місце для фото Олени Науменко"
              width={320}
              height={400}
              priority={false}
            />
            <span className={styles.photoBadge}>Практичний психолог</span>
          </div>

          <div className={styles.info}>
            <Badge>Ведуча онлайн-лекції</Badge>
            <h2 className={styles.name} id="speaker-title">
              Олена Науменко
            </h2>
            <p className={styles.role}>
              Практичний психолог, гештальт-терапевт у процесі сертифікації
            </p>

            <ul className={styles.credentials}>
              {credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>

            <blockquote className={styles.quote}>
              “У своїй практиці допомагаю клієнтам усвідомлювати, висловлювати та проживати
              емоції. Це дає змогу краще зрозуміти власні бажання, навчитися довіряти собі й
              бути собою — жити «як хочу», а не «як треба”.”
            </blockquote>
          </div>
        </article>
      </Container>
    </section>
  );
}
