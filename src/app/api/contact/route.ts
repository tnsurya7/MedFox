import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = contactSchema.parse(body)

    // Create email transporter (configure based on your SMTP settings)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const emailContent = `
      New Contact Form Submission from MedFox Website
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Company: ${company || 'Not provided'}
      
      Message:
      ${message}
      
      ---
      Sent from MedFox Contact Form
    `

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Send to your own email
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      replyTo: email,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting MedFox',
      text: `
        Dear ${name},
        
        Thank you for reaching out to MedFox. We have received your message and will get back to you within 24 hours.
        
        Your message:
        ${message}
        
        Best regards,
        The MedFox Team
      `,
    })

    return NextResponse.json({
      message: 'Contact form submitted successfully',
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}