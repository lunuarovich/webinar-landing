import { Resend } from 'resend';
import type { WebinarLead } from './googleSheets';

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function sendRegistrationEmail(lead: WebinarLead): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const guideUrl = process.env.GUIDE_URL;

  if (!apiKey || !from) {
    return false;
  }

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(lead.name);
  const guideBlock = guideUrl
    ? `<p><a href="${escapeHtml(guideUrl)}">Завантажити гайд з базових емоцій</a></p>`
    : '';

  const { error } = await resend.emails.send({
    from,
    to: lead.email,
    subject: 'Ви зареєстровані на вебінар «Розпакування емоцій»',
    html: `
      <h1>Вітаємо, ${safeName}!</h1>
      <p>Ви успішно зареєструвалися на вебінар <strong>«Розпакування емоцій»</strong>.</p>
      <p>Дата: 10 вересня 2026<br />Час: 19:00 за Києвом</p>
      ${guideBlock}
      <p>До зустрічі на вебінарі!</p>
    `,
    text: [
      `Вітаємо, ${lead.name}!`,
      '',
      'Ви успішно зареєструвалися на вебінар «Розпакування емоцій».',
      'Дата: 10 вересня 2026',
      'Час: 19:00 за Києвом',
      guideUrl ? `Гайд: ${guideUrl}` : '',
      '',
      'До зустрічі на вебінарі!',
    ]
      .filter(Boolean)
      .join('\n'),
  });

  if (error) {
    throw new Error(error.message);
  }

  return true;
}
