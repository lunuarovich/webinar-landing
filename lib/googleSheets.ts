import { google } from 'googleapis';

export type WebinarLead = {
  name: string;
  email: string;
  phone: string;
};

function getGoogleSheetsConfig() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1';

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error('Google Sheets environment variables are not configured.');
  }

  return { clientEmail, privateKey, spreadsheetId, sheetName };
}

export async function addLeadToGoogleSheets(lead: WebinarLead) {
  const { clientEmail, privateKey, spreadsheetId, sheetName } = getGoogleSheetsConfig();

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:D`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[lead.name, lead.email, lead.phone, new Date().toISOString()]],
    },
  });
}
