import type { PropsWithChildren } from 'react';
import { ArrowRightIcon } from '@/components/icons/Icons';
import styles from './Button.module.css';

type CtaLinkProps = PropsWithChildren<{
  href?: string;
  showArrow?: boolean;
}>;

export function CtaLink({ children, href = '#register', showArrow = false }: CtaLinkProps) {
  return (
    <a className={styles.button} href={href}>
      {children}
      {showArrow ? <ArrowRightIcon aria-hidden="true" /> : null}
    </a>
  );
}
