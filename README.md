# Emotion Webinar Landing

Next.js + TypeScript версія лендінгу «Розпакування емоцій».

## Що вже зроблено

- структура на компонентах;
- CSS Modules;
- семантична HTML-розмітка;
- адаптивність;
- countdown до 10.09.2026 19:00 за Києвом;
- placeholder для фото Олени в `public/images`;
- форма реєстрації;
- `/api/register` для запису лідів у Google Sheets;
- опційна відправка листа через Resend;
- базовий honeypot від простих ботів;
- metadata для сторінки.

## Запуск

```bash
npm install
cp .env.example .env.local
npm run dev
```

Відкрий `http://localhost:3000`.

## Google Sheets

Створи таблицю з колонками:

```text
A: Ім'я
B: Email
C: Телефон
D: Дата реєстрації
```

Дай Service Account доступ `Editor` до таблиці та заповни `.env.local`:

```env
GOOGLE_CLIENT_EMAIL=...
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=...
GOOGLE_SHEET_NAME=Sheet1
```

`GOOGLE_SHEET_ID` — частина URL між `/d/` та `/edit`.

## Resend

Resend зроблено опційним. Якщо змінні не заповнені, заявка все одно збережеться у Google Sheets, але лист не буде відправлений.

```env
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL="Олена Науменко <webinar@your-domain.com>"
GUIDE_URL="https://your-domain.com/guide/emotions-guide.pdf"
```

## Фото Олени

Зараз використовується:

```text
public/images/olena-placeholder.svg
```

У `components/SpeakerSection/SpeakerSection.tsx` є константа:

```ts
const SPEAKER_IMAGE = '/images/olena-placeholder.svg';
```

Поклади потрібне фото в `public/images`, наприклад `olena.webp`, і зміни шлях на:

```ts
const SPEAKER_IMAGE = '/images/olena.webp';
```

## Перед production

Заміни тимчасові посилання Instagram/Facebook у `components/Footer/Footer.tsx` на реальні.
