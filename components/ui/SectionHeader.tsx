import styles from './SectionHeader.module.css';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  id: string;
};

export function SectionHeader({ title, subtitle, id }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </header>
  );
}
