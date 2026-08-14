import { GiftIcon } from '@/components/icons/Icons';
import { Container } from '@/components/ui/Container';
import { CtaLink } from '@/components/ui/CtaLink';
import styles from './GiftSection.module.css';

type GiftSectionProps = {
  variant: 'guide' | 'bonus';
};

const giftContent = {
  guide: {
    badge: 'Подарунок для учасників',
    title: 'Безкоштовний гайд з базових емоцій',
    description:
      'Практичний документ, який допоможе краще розпізнавати, називати та розуміти власні емоції на щодень — доступний одразу після реєстрації для всіх учасників вебінару.',
    cta: 'Отримати подарунок',
    coverHeader: 'PDF-Гайд',
    coverTitle: 'Базові емоції та чутливість',
    coverSubtitle: 'Карта самопізнання & підказки',
    emojis: ['😡', '😊', '😳', '🤢', '😲', '😨'],
  },
  bonus: {
    badge: 'Бонус за реєстрацію',
    title: 'Подарунок для всіх учасників',
    description:
      'Безкоштовний гайд з базових емоцій, який допоможе краще розпізнавати та розуміти свої емоції в щоденному житті.',
    cta: 'Отримати подарунок',
    coverHeader: 'Безкоштовно',
    coverTitle: 'Гайд з базових емоцій',
    coverSubtitle: 'Практичний посібник',
    emojis: ['❤️', '💡', '🌱'],
  },
} as const;

export function GiftSection({ variant }: GiftSectionProps) {
  const content = giftContent[variant];
  const isBonus = variant === 'bonus';

  return (
    <section className={`${styles.section} ${isBonus ? styles.compactSection : ''}`} aria-label={content.title}>
      <Container>
        <div className={`${styles.card} ${isBonus ? styles.bonusCard : ''}`}>
          <div className={styles.content}>
            <span className={styles.badge}>
              <GiftIcon aria-hidden="true" />
              {content.badge}
            </span>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <CtaLink>{content.cta}</CtaLink>
          </div>

          <div className={styles.ebookWrapper} aria-hidden="true">
            <div className={`${styles.ebookCover} ${isBonus ? styles.bonusCover : ''}`}>
              <div>
                <div className={styles.ebookHeader}>{content.coverHeader}</div>
                <div className={styles.ebookTitle}>{content.coverTitle}</div>
                <div className={styles.ebookSubtitle}>{content.coverSubtitle}</div>
              </div>
              <div className={styles.ebookGraphic}>
                {content.emojis.map((emoji) => (
                  <span key={emoji}>{emoji}</span>
                ))}
              </div>
              <div className={styles.ebookAuthor}>Олена Науменко</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
