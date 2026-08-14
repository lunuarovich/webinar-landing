import { FolderIcon, HelpIcon, ShieldIcon } from '@/components/icons/Icons';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './AudienceSection.module.css';

const audience = [
  {
    title: 'Тим, хто прагне відновити чутливість',
    description:
      'Хоче розвинути дбайливу навичку поступово виходити зі стану «заморозки», повертаючи барви життя та енергію.',
    icon: ShieldIcon,
  },
  {
    title: 'Тим, хто хоче розуміти свої емоції',
    description:
      'Бажає дізнатися, якими бувають емоції, як вони проявляються, як впливають на думки, тіло, сприйняття та навіщо потрібні.',
    icon: HelpIcon,
  },
  {
    title: 'Психологам та психотерапевтам',
    description:
      'Прагнуть краще орієнтуватися в нюансах емоційної сфери, щоб допомагати своїм клієнтам влучно розпізнавати та дбайливо проживати їх.',
    icon: FolderIcon,
  },
];

export function AudienceSection() {
  return (
    <section className={styles.section} aria-labelledby="audience-title">
      <Container>
        <SectionHeader
          id="audience-title"
          title="Кому буде корисною лекція:"
          subtitle="Лекція розроблена як для особистого розвитку, так і для фахівців психологічної сфери"
        />

        <ul className={styles.grid}>
          {audience.map((item) => {
            const Icon = item.icon;

            return (
              <li className={styles.card} key={item.title}>
                <span className={styles.iconBox} aria-hidden="true">
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
