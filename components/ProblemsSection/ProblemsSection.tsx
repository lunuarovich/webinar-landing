import { QuoteIcon } from '@/components/icons/Icons';
import { Container } from '@/components/ui/Container';
import { CtaLink } from '@/components/ui/CtaLink';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './ProblemsSection.module.css';

const quotes = [
  {
    text: '«Світ втратив яскраві кольори. Зникли драйв, спонтанність і творча енергія. Ви вже давно не відчували радості, пристрасті чи глибокої ніжності.»',
    emoji: '🎨',
    label: 'Апатія та втрата фарб',
    tag: 'Емоційне вигорання',
    avatarClass: styles.avatarArt,
  },
  {
    text: '«Вам важко зрозуміти, чого ви насправді хочете, і ви дозволяєте іншим порушувати власні межі.»',
    emoji: '🛡️',
    label: 'Порушення кордонів',
    tag: 'Втрата власних бажань',
    avatarClass: styles.avatarBoundaries,
  },
  {
    text: '«Ви відчуваєте постійну напругу в тілі: наприклад, затиснуту щелепу, шию та плечі, важкість у грудях чи клубок у горлі.»',
    emoji: '⚡',
    label: 'Тілесні затиски',
    tag: 'Психосоматичні прояви',
    avatarClass: styles.avatarBody,
  },
];

export function ProblemsSection() {
  return (
    <section className={styles.section} aria-labelledby="problems-title">
      <Container>
        <SectionHeader
          id="problems-title"
          title="Як зрозуміти, що ви не проживаєте чи заморожуєте емоції?"
          subtitle="Коли ми забороняємо собі відчувати — емоція не зникає. Вона залишається в тілі та психіці, впливаючи на їхню роботу."
        />

        <div className={styles.grid}>
          {quotes.map((quote) => (
            <article className={styles.card} key={quote.label}>
              <div>
                <QuoteIcon className={styles.quoteIcon} aria-hidden="true" />
                <blockquote className={styles.quoteText}>{quote.text}</blockquote>
              </div>
              <div className={styles.visual}>
                <span className={`${styles.avatar} ${quote.avatarClass}`} aria-hidden="true">
                  {quote.emoji}
                </span>
                <div>
                  <h3 className={styles.label}>{quote.label}</h3>
                  <p className={styles.tag}>{quote.tag}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.recognize}>Впізнали себе?</p>
          <h3>Що робити далі?</h3>
          <p>Дізнайтеся, як повернути свою чутливість та знову відчути повноту життя.</p>
          <CtaLink>Зареєструватися безкоштовно</CtaLink>
        </div>
      </Container>
    </section>
  );
}
