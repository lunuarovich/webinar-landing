import { Container } from '@/components/ui/Container';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <p>Олена Науменко — Практичний психолог</p>
          <nav className={styles.links} aria-label="Соціальні мережі">
            <a href="https://www.instagram.com/psykholohonline?igsh=MTc1cGM1MnV1eHlrNA==&igsi=MTc1cGM1MnV1eHlrNA==" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <span aria-hidden="true">|</span>
            <a href="https://www.facebook.com/share/1BZCdcF9Ft/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </nav>
          <p>© 2026 Всі права захищені</p>
        </div>
      </Container>
    </footer>
  );
}
