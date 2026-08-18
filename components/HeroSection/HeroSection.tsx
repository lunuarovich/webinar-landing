import { CalendarIcon, ClockIcon } from '@/components/icons/Icons';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { CtaLink } from '@/components/ui/CtaLink';
import styles from './HeroSection.module.css';

const emotions = [
  { emoji: '😡', label: 'Гнів', className: styles.anger },
  { emoji: '😊', label: 'Радість', className: styles.joy },
  { emoji: '😳', label: 'Сором', className: styles.shame },
  { emoji: '🤢', label: 'Відраза', className: styles.disgust },
  { emoji: '😲', label: 'Подив', className: styles.surprise },
  { emoji: '😨', label: 'Страх', className: styles.fear },
];

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <Badge>Безкоштовна онлайн-лекція</Badge>
            <h1 className={styles.title} id="hero-title">
              Розпакування емоцій
            </h1>
            <p className={styles.subtitle}>
              Дізнайтесь, як відмова від проживання та заморожування емоцій впливають на
              ваше тіло, стосунки та якість життя.
            </p>

            <dl className={styles.meta}>
              <div className={styles.metaItem}>
                <dt className={styles.visuallyHidden}>Дата</dt>
                <dd>
                  <CalendarIcon aria-hidden="true" />
                  <span>10 вересня</span>
                </dd>
              </div>
              <div className={styles.metaItem}>
                <dt className={styles.visuallyHidden}>Час</dt>
                <dd>
                  <ClockIcon aria-hidden="true" />
                  <span>19:00 за Києвом</span>
                </dd>
              </div>
            </dl>

            <CtaLink showArrow>Зареєструватися</CtaLink>
          </div>

          <div className={styles.visualWrapper} aria-hidden="true">
            <div className={styles.visualCard}>
              <div className={styles.glow} />

              <div className={styles.heart}>
                <svg
                  className={styles.heartIcon}
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={styles.heartShape}
                    d="M93.5 149.5C90.8 146.9 54.3 113.2 44.1 102.3 26.5 83.4 26 54.7 43.2 39.4 58.3 26 81.2 29.7 93.5 47.7 105.8 29.7 128.7 26 143.8 39.4 161 54.7 160.5 83.4 142.9 102.3 132.7 113.2 96.2 146.9 93.5 149.5Z"
                    fill="#f33361"
                  />

                  <g className={styles.keyShape}>
                    <circle cx="132" cy="112" r="19" fill="#fff8f1" stroke="#f39c12" strokeWidth="8" />
                    <path d="M146 126 170 150" stroke="#f39c12" strokeWidth="8" strokeLinecap="round" />
                    <path d="M161 149 175 163" stroke="#f39c12" strokeWidth="8" strokeLinecap="round" />
                    <path d="M170 150 177 143" stroke="#f39c12" strokeWidth="8" strokeLinecap="round" />
                  </g>
                </svg>
              </div>

              {emotions.map((emotion) => (
                <div className={`${styles.emotion} ${emotion.className}`} key={emotion.label}>
                  <span className={styles.emoji}>{emotion.emoji}</span>
                  <span>{emotion.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
