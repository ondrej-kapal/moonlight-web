import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the multipart/form-data sent by your form
    const formData = await request.formData();
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');

    // TODO: validate (basic example)
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    // TODO: do something server-side:
    // - send an email (Resend/SMTP)
    // - write to a DB
    // - send to Slack/CRM, etc.
    // await sendEmail({ name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
