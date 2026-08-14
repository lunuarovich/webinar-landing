import { Container } from '@/components/ui/Container';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <p>Олена Науменко — Практичний психолог</p>
          <nav className={styles.links} aria-label="Соціальні мережі">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <span aria-hidden="true">|</span>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </nav>
          <p>© 2026 Всі права захищені</p>
        </div>
      </Container>
    </footer>
  );
}
