'use client';

import { FormEvent, useEffect, useState } from 'react';
import { CheckIcon } from '@/components/icons/Icons';
import { Container } from '@/components/ui/Container';
import buttonStyles from '@/components/ui/Button.module.css';
import styles from './RegistrationSection.module.css';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export function RegistrationSection() {
  const [status, setStatus] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const isModalOpen = status === 'success';

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setStatus('idle');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      website: String(formData.get('website') ?? '').trim(),
    };

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        message?: string;
        emailSent?: boolean;
      };

      if (!response.ok) {
        throw new Error(result.message || 'Не вдалося зареєструватися.');
      }

      setEmailSent(Boolean(result.emailSent));
      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Не вдалося зареєструватися. Спробуйте ще раз.',
      );
    }
  }

  return (
    <section className={styles.section} id="register" aria-labelledby="registration-title">
      <Container>
        <div className={styles.box}>
          <h2 id="registration-title">Зареєструватися на вебінар</h2>
          <p>та отримати подарунок — безкоштовний гайд з базових емоцій</p>

          <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
            <div className={styles.group}>
              <label htmlFor="name">Ім&apos;я</label>
              <input
                className={styles.control}
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Введіть ваше ім'я"
                required
              />
            </div>

            <div className={styles.group}>
              <label htmlFor="email">E-mail</label>
              <input
                className={styles.control}
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className={styles.group}>
              <label htmlFor="phone">Телефон</label>
              <input
                className={styles.control}
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+380 XX XXX XX XX"
                required
              />
            </div>

            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="website">Ваш сайт</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button
              className={`${buttonStyles.button} ${buttonStyles.fullWidth} ${styles.submit}`}
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Реєструємо...' : 'Зареєструватися та забрати гайд'}
            </button>

            {status === 'error' ? (
              <p className={styles.error} role="alert">
                {errorMessage}
              </p>
            ) : null}

            <p className={styles.privacy}>🔒 Ваші дані надійно захищені. Ми не розсилаємо спам.</p>
          </form>
        </div>
      </Container>

      <SuccessModal
        isOpen={isModalOpen}
        emailSent={emailSent}
        onClose={() => setStatus('idle')}
      />
    </section>
  );
}

type SuccessModalProps = {
  isOpen: boolean;
  emailSent: boolean;
  onClose: () => void;
};

function SuccessModal({ isOpen, emailSent, onClose }: SuccessModalProps) {
  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.active : ''}`}
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
        aria-describedby="success-description"
      >
        <div className={styles.modalIcon} aria-hidden="true">
          <CheckIcon />
        </div>
        <h2 id="success-title">Вітаємо! Ви зареєстровані</h2>
        <p id="success-description">
          {emailSent
            ? 'Деталі вебінару та посилання на скачування безкоштовного гайду з базових емоцій надіслано на вашу електронну пошту.'
            : 'Реєстрацію успішно збережено. Після підключення email-розсилки деталі вебінару та гайд надходитимуть автоматично.'}
        </p>
        <button className={`${buttonStyles.button} ${buttonStyles.fullWidth}`} type="button" onClick={onClose}>
          Зрозуміло
        </button>
      </div>
    </div>
  );
}
