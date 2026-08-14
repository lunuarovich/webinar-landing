import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Вебінар: Розпакування емоцій | Олена Науменко',
  description:
    'Безкоштовна онлайн-лекція про емоції, їхній вплив на тіло, стосунки та якість життя.',
  openGraph: {
    title: 'Розпакування емоцій | Олена Науменко',
    description:
      'Безкоштовна онлайн-лекція про емоції, їхній вплив на тіло, стосунки та якість життя.',
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
