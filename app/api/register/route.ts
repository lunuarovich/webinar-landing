import { NextResponse } from 'next/server';
import { addLeadToGoogleSheets, type WebinarLead } from '@/lib/googleSheets';
import { sendRegistrationEmail } from '@/lib/resend';

type RegistrationPayload = Partial<WebinarLead> & {
  website?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizePayload(payload: RegistrationPayload): WebinarLead {
  return {
    name: String(payload.name ?? '').trim(),
    email: String(payload.email ?? '').trim().toLowerCase(),
    phone: String(payload.phone ?? '').trim(),
  };
}

function validateLead(lead: WebinarLead) {
  if (lead.name.length < 2 || lead.name.length > 80) {
    return 'Вкажіть коректне ім’я.';
  }

  if (!EMAIL_PATTERN.test(lead.email) || lead.email.length > 160) {
    return 'Вкажіть коректний e-mail.';
  }

  if (lead.phone.length < 7 || lead.phone.length > 30) {
    return 'Вкажіть коректний номер телефону.';
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as RegistrationPayload;

    // Honeypot: bots often fill hidden fields. Return success without storing spam.
    if (payload.website) {
      return NextResponse.json({ success: true, emailSent: false }, { status: 200 });
    }

    const lead = normalizePayload(payload);
    const validationError = validateLead(lead);

    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
    }

    await addLeadToGoogleSheets(lead);

    let emailSent = false;
    try {
      emailSent = await sendRegistrationEmail(lead);
    } catch (emailError) {
      // The lead is already saved. Email failure should not lose the registration.
      console.error('Registration email error:', emailError);
    }

    return NextResponse.json(
      {
        success: true,
        emailSent,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Registration error:', error);

    const isConfigurationError =
      error instanceof Error && error.message.includes('environment variables');

    return NextResponse.json(
      {
        message: isConfigurationError
          ? 'Форма ще не підключена до Google Sheets. Перевірте змінні середовища.'
          : 'Не вдалося зареєструватися. Спробуйте ще раз.',
      },
      { status: isConfigurationError ? 503 : 500 },
    );
  }
}
