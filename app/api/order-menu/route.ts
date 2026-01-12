import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, menuSpecifications } = body;

    // Validate input
    if (!name || !phone || !email || !menuSpecifications) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter
    // Using Gmail SMTP - you'll need to set up App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // App Password from Gmail
      },
    });

    // Email content
    const emailContent = {
      subject: `New Menu Order Request from ${name}`,
      html: `
        <h2>New Menu Order Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Menu Specifications:</strong></p>
        <p>${menuSpecifications.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Menu Order Request
        
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        
        Menu Specifications:
        ${menuSpecifications}
      `,
    };

    // Send email to both recipients separately to ensure delivery
    const recipients = ['abrajsa@gmail.com', 'info@emenu1.com'];
    
    await Promise.all(
      recipients.map((recipient) =>
        transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: recipient,
          ...emailContent,
        })
      )
    );

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
