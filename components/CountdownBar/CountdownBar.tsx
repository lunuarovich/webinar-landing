'use client';

import { useEffect, useState } from 'react';
import { ClockIcon } from '@/components/icons/Icons';
import { Container } from '@/components/ui/Container';
import styles from './CountdownBar.module.css';

const WEBINAR_START = '2026-09-10T19:00:00+03:00';
const TARGET_TIME = new Date(WEBINAR_START).getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isStarted: boolean;
};

function getTimeLeft(targetTime: number): TimeLeft {
  const difference = Math.max(targetTime - Date.now(), 0);

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference % 86_400_000) / 3_600_000),
    minutes: Math.floor((difference % 3_600_000) / 60_000),
    seconds: Math.floor((difference % 60_000) / 1_000),
    isStarted: difference === 0,
  };
}

export function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const updateTimeLeft = () => {
      setTimeLeft(getTimeLeft(TARGET_TIME));
    };

    updateTimeLeft();

    const intervalId = window.setInterval(updateTimeLeft, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <aside className={styles.bar} aria-label="Відлік до початку вебінару">
      <Container>
        <div className={styles.wrapper}>
          <p className={styles.title}>
            <ClockIcon width="18" height="18" aria-hidden="true" />
            До початку вебінару залишилось:{' '}
            <strong>10 вересня, 19:00</strong>
          </p>

          {timeLeft?.isStarted ? (
            <p className={styles.started}>Вебінар розпочався!</p>
          ) : (
            <div
              className={styles.clock}
              aria-label="Залишок часу до вебінару"
            >
              <TimeBox value={timeLeft?.days ?? 0} label="дні" />
              <TimeBox value={timeLeft?.hours ?? 0} label="години" />
              <TimeBox value={timeLeft?.minutes ?? 0} label="хвилини" />
              <TimeBox value={timeLeft?.seconds ?? 0} label="секунди" />
            </div>
          )}
        </div>
      </Container>
    </aside>
  );
}

type TimeBoxProps = {
  value: number;
  label: string;
};

function TimeBox({ value, label }: TimeBoxProps) {
  return (
    <span className={styles.box}>
      <span className={styles.number}>
        {String(value).padStart(2, '0')}
      </span>

      <span className={styles.label}>{label}</span>
    </span>
  );
}
