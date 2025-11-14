import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend client (inside function to avoid build-time errors)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email via Resend
    // Note: The "from" email must be a verified domain in Resend
    // For testing, you can use "onboarding@resend.dev"
    // For production, verify your domain in Resend dashboard
    try {
      const { data, error } = await resend.emails.send({
        from: 'contact@stpauluccpekin.org', // Change to verified domain email for production
        to: 'stpauluccpekin@yahoo.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: email, // Allow replying directly to the submitter
      });

      if (error) {
        console.error('Resend API error:', error);
        return NextResponse.json(
          { error: 'Failed to send email. Please try again later.' },
          { status: 500 }
        );
      }
    } catch (emailError) {
      console.error('Resend email error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

