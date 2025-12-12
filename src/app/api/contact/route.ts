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

// HTML Email Template for Admin Notification
const getAdminEmailTemplate = (name: string, email: string, phone: string, company: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - MedFoxRCM</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #0B5EA6 0%, #F26A21 100%); padding: 40px 30px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: bold; }
        .header p { color: #ffffff; margin: 10px 0 0 0; opacity: 0.9; }
        .content { padding: 40px 30px; }
        .contact-info { background-color: #f8fafc; border-radius: 12px; padding: 25px; margin: 20px 0; border-left: 4px solid #0B5EA6; }
        .info-row { margin: 15px 0; display: flex; align-items: center; }
        .info-label { font-weight: 600; color: #374151; min-width: 100px; }
        .info-value { color: #1f2937; }
        .message-section { background-color: #f0f9ff; border-radius: 12px; padding: 25px; margin: 25px 0; border-left: 4px solid #F26A21; }
        .message-title { font-weight: 600; color: #374151; margin-bottom: 15px; font-size: 16px; }
        .message-content { color: #1f2937; line-height: 1.6; white-space: pre-wrap; }
        .footer { background-color: #1f2937; padding: 30px; text-align: center; color: #9ca3af; }
        .footer a { color: #F26A21; text-decoration: none; }
        .badge { background-color: #0B5EA6; color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 500; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 New Contact Form Submission</h1>
            <p>MedFoxRCM Website Contact Form</p>
        </div>
        
        <div class="content">
            <div style="text-align: center; margin-bottom: 30px;">
                <span class="badge">New Lead Alert</span>
            </div>
            
            <div class="contact-info">
                <div class="info-row">
                    <span class="info-label">👤 Name:</span>
                    <span class="info-value">${name}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">📧 Email:</span>
                    <span class="info-value"><a href="mailto:${email}" style="color: #0B5EA6;">${email}</a></span>
                </div>
                <div class="info-row">
                    <span class="info-label">📱 Phone:</span>
                    <span class="info-value">${phone || 'Not provided'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">🏢 Company:</span>
                    <span class="info-value">${company || 'Not provided'}</span>
                </div>
            </div>
            
            <div class="message-section">
                <div class="message-title">💬 Message:</div>
                <div class="message-content">${message}</div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #fef3c7; border-radius: 12px; border-left: 4px solid #F26A21;">
                <p style="margin: 0; color: #92400e; font-weight: 500;">⚡ Quick Action Required</p>
                <p style="margin: 5px 0 0 0; color: #92400e;">Please respond to this inquiry within 24 hours for best results.</p>
            </div>
        </div>
        
        <div class="footer">
            <p>This email was sent from the MedFoxRCM website contact form.</p>
            <p><a href="mailto:${email}">Reply directly to ${name}</a> | <a href="https://medfoxrcm.com">Visit Website</a></p>
        </div>
    </div>
</body>
</html>
`

// HTML Email Template for User Confirmation
const getUserConfirmationTemplate = (name: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You - MedFoxRCM</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #0B5EA6 0%, #F26A21 100%); padding: 40px 30px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: bold; }
        .header p { color: #ffffff; margin: 10px 0 0 0; opacity: 0.9; }
        .content { padding: 40px 30px; }
        .message-recap { background-color: #f0f9ff; border-radius: 12px; padding: 25px; margin: 25px 0; border-left: 4px solid #0B5EA6; }
        .contact-info { background-color: #f8fafc; border-radius: 12px; padding: 25px; margin: 25px 0; }
        .footer { background-color: #1f2937; padding: 30px; text-align: center; color: #9ca3af; }
        .footer a { color: #F26A21; text-decoration: none; }
        .checkmark { font-size: 48px; color: #10b981; text-align: center; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✅ Message Received!</h1>
            <p>Thank you for contacting MedFoxRCM</p>
        </div>
        
        <div class="content">
            <div class="checkmark">✅</div>
            
            <h2 style="color: #1f2937; text-align: center; margin-bottom: 30px;">Hi ${name},</h2>
            
            <p style="color: #374151; line-height: 1.6; font-size: 16px;">
                Thank you for reaching out to <strong>MedFoxRCM</strong>! We have successfully received your message and our team will review it promptly.
            </p>
            
            <div class="message-recap">
                <h3 style="color: #0B5EA6; margin-top: 0;">📝 Your Message:</h3>
                <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div class="contact-info">
                <h3 style="color: #1f2937; margin-top: 0;">⏰ What happens next?</h3>
                <ul style="color: #374151; line-height: 1.8;">
                    <li>Our team will review your inquiry within 2-4 hours</li>
                    <li>You'll receive a detailed response within 24 hours</li>
                    <li>We'll provide personalized solutions for your needs</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #0B5EA6 0%, #F26A21 100%); border-radius: 12px;">
                <h3 style="color: white; margin: 0 0 10px 0;">🚀 Ready to optimize your revenue cycle?</h3>
                <p style="color: white; margin: 0; opacity: 0.9;">We're excited to help transform your medical billing operations!</p>
            </div>
            
            <div style="text-align: center; color: #6b7280;">
                <p><strong>Need immediate assistance?</strong></p>
                <p>📞 <a href="tel:+914435573476" style="color: #0B5EA6;">+91 4435573476</a></p>
                <p>📧 <a href="mailto:medfoxrcm@gmail.com" style="color: #0B5EA6;">contact@medfoxrcm.com</a></p>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>MedFoxRCM</strong> - Revolutionizing Healthcare Revenue Cycle Management</p>
            <p>MedFox Healthcare Office, 152/3, 6th Avenue, Anna Nagar East, Chennai - 600 102</p>
        </div>
    </div>
</body>
</html>
`

export async function POST(request: NextRequest) {
  try {
    console.log('📧 Contact form API called')
    
    const body = await request.json()
    console.log('📝 Form data received:', { ...body, message: body.message?.substring(0, 50) + '...' })
    
    const { name, email, phone, company, message } = contactSchema.parse(body)

    // Create Gmail SMTP transporter with more detailed configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'medfoxrcm@gmail.com',
        pass: 'lxes mzbe pdcg ouvz',
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    console.log('🔧 SMTP transporter created')

    // Verify SMTP connection
    try {
      await transporter.verify()
      console.log('✅ SMTP connection verified')
    } catch (verifyError) {
      console.error('❌ SMTP verification failed:', verifyError)
      throw new Error('Email service configuration error')
    }

    // Send notification email to admin
    console.log('📤 Sending admin notification email...')
    const adminEmailResult = await transporter.sendMail({
      from: '"MedFoxRCM Contact Form" <medfoxrcm@gmail.com>',
      to: 'medfoxrcm@gmail.com',
      subject: `🎉 New Contact Form Submission from ${name} - MedFoxRCM`,
      html: getAdminEmailTemplate(name, email, phone || '', company || '', message),
      replyTo: email,
    })
    console.log('✅ Admin email sent:', adminEmailResult.messageId)

    // Send confirmation email to user
    console.log('📤 Sending user confirmation email...')
    const userEmailResult = await transporter.sendMail({
      from: '"MedFoxRCM" <medfoxrcm@gmail.com>',
      to: email,
      subject: '✅ Thank you for contacting MedFoxRCM - We\'ll respond within 24 hours',
      html: getUserConfirmationTemplate(name, message),
    })
    console.log('✅ User confirmation email sent:', userEmailResult.messageId)

    return NextResponse.json({
      message: 'Contact form submitted successfully',
      success: true
    })
  } catch (error) {
    console.error('❌ Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}