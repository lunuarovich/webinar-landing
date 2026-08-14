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
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 170C100 170 170 120 170 70C170 42.3858 147.614 20 120 20C103.541 20 89.043 27.9622 80 40.2332C70.957 27.9622 56.4587 20 40 20C12.3858 20 -10 42.3858 -10 70C-10 120 100 170 100 170Z"
                    fill="url(#heartGradient)"
                    transform="translate(10, 10) scale(0.9)"
                  />
                  <circle cx="100" cy="85" r="18" fill="#ffffff" opacity="0.9" />
                  <path d="M100 78V92M93 85H107" stroke="#e05668" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="heartGradient" x1="0" y1="20" x2="200" y2="170" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ff7e5f" />
                      <stop offset="1" stopColor="#e05668" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className={styles.key}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 2l-2 2m-2 2l-2 2m2-2l2 2m-4 0l2 2M5 11a7 7 0 1 1 11.23-5.23L21 11v3h-3v2h-2v2h-3l-2-2" />
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
