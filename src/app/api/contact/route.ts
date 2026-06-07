import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "info@stiftungkoelneropferhilfe.de";
const FROM_EMAIL = "kontakt@stiftung-koelner-opferhilfe.de";

function sanitize(str: unknown): string {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, 2000);
}

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const name = sanitize(data.name);
  const email = sanitize(data.email);
  const phone = sanitize(data.phone);
  const subject = sanitize(data.subject);
  const message = sanitize(data.message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder ausfüllen." },
      { status: 422 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Bitte eine gültige E-Mail-Adresse angeben." },
      { status: 422 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured");
    return NextResponse.json(
      { error: "E-Mail-Dienst nicht konfiguriert. Bitte rufen Sie uns an: 0221 466667" },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const htmlBody = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #0d7377; border-bottom: 2px solid #0d7377; padding-bottom: 10px;">
        Neue Kontaktanfrage – Stiftung Kölner Opferhilfe
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr><td style="padding: 8px 0; color: #666; width: 120px; vertical-align: top;"><strong>Name:</strong></td><td style="padding: 8px 0;">${name}</td></tr>
        <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>E-Mail:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        ${phone ? `<tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Telefon:</strong></td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
        <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Betreff:</strong></td><td style="padding: 8px 0;">${subject}</td></tr>
      </table>
      <h3 style="color: #333;">Nachricht:</h3>
      <div style="background: #f8f8f8; padding: 16px; border-radius: 8px; white-space: pre-wrap; line-height: 1.6;">
${message}
      </div>
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
      <p style="color: #999; font-size: 12px;">Diese E-Mail wurde über das Kontaktformular auf stiftung-koelner-opferhilfe.de gesendet.</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `Kontaktanfrage: ${subject} – von ${name}`,
    html: htmlBody,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden. Bitte rufen Sie uns an." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
