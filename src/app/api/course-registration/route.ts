import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const courseRegistrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  background: z.string().min(10, 'Background must be at least 10 characters'),
  dob: z.string().min(1, 'Date of birth is required'),
  gender: z.string().min(1, 'Gender is required'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  course: z.string().min(1, 'Course selection is required'),
})

const courseNames = {
  'bmct': 'BMCT - Basic Medical Coding Training',
  'cpc': 'CPC - Certified Professional Coder',
  'amct': 'AMCT - Advanced Medical Coding Training',
  'cpma': 'CPMA - Certified Professional Medical Auditor',
  'ipdrg': 'IPDRG - Inpatient DRG Coding',
  'ccs': 'CCS - Certified Coding Specialist',
  'em': 'E/M - Evaluation and Management Coding',
}

// HTML Email Template for Admin Notification
const getAdminEmailTemplate = (name: string, email: string, phone: string, background: string, dob: string, gender: string, address: string, course: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Course Registration - MedFoxRCM</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #0B5EA6 0%, #F26A21 100%); padding: 40px 30px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: bold; }
        .header p { color: #ffffff; margin: 10px 0 0 0; opacity: 0.9; }
        .content { padding: 40px 30px; }
        .student-info { background-color: #f8fafc; border-radius: 12px; padding: 25px; margin: 20px 0; border-left: 4px solid #0B5EA6; }
        .info-row { margin: 15px 0; display: flex; align-items: flex-start; }
        .info-label { font-weight: 600; color: #374151; min-width: 140px; }
        .info-value { color: #1f2937; flex: 1; }
        .course-highlight { background-color: #f0f9ff; border-radius: 12px; padding: 25px; margin: 25px 0; border-left: 4px solid #F26A21; }
        .course-title { font-weight: 600; color: #374151; margin-bottom: 15px; font-size: 16px; }
        .course-name { color: #0B5EA6; font-size: 18px; font-weight: bold; }
        .footer { background-color: #1f2937; padding: 30px; text-align: center; color: #9ca3af; }
        .footer a { color: #F26A21; text-decoration: none; }
        .badge { background-color: #0B5EA6; color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 500; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎓 New Course Registration</h1>
            <p>MedFoxRCM Training Program</p>
        </div>
        
        <div class="content">
            <div style="text-align: center; margin-bottom: 30px;">
                <span class="badge">New Student Registration</span>
            </div>

            <div class="student-info">
                <h3 style="color: #374151; margin-top: 0; margin-bottom: 20px;">Student Information</h3>
                <div class="info-row">
                    <span class="info-label">Full Name:</span>
                    <span class="info-value">${name}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-value">${email}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Phone:</span>
                    <span class="info-value">${phone}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Date of Birth:</span>
                    <span class="info-value">${dob}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Gender:</span>
                    <span class="info-value">${gender}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Address:</span>
                    <span class="info-value">${address}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Background:</span>
                    <span class="info-value">${background}</span>
                </div>
            </div>

            <div class="course-highlight">
                <div class="course-title">Selected Course:</div>
                <div class="course-name">${courseNames[course as keyof typeof courseNames] || course}</div>
            </div>
            
            <div style="text-align: center; margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #0B5EA6 0%, #F26A21 100%); border-radius: 12px;">
                <h3 style="color: white; margin: 0 0 10px 0;">🚀 Next Steps</h3>
                <p style="color: white; margin: 0; opacity: 0.9;">Contact the student within 24 hours to discuss course details and enrollment process.</p>
            </div>
            
            <div style="text-align: center; color: #6b7280;">
                <p><strong>Need to contact the student?</strong></p>
                <p>📞 <a href="tel:${phone}" style="color: #0B5EA6;">${phone}</a></p>
                <p>📧 <a href="mailto:${email}" style="color: #0B5EA6;">${email}</a></p>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>MedFoxRCM Training Programs</strong> - Building Healthcare Coding Professionals</p>
            <p>MedFox Healthcare Office, 152/3, 6th Avenue, Anna Nagar East, Chennai - 600 102</p>
        </div>
    </div>
</body>
</html>
`

// HTML Email Template for Student Confirmation
const getStudentConfirmationTemplate = (name: string, course: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Course Registration Confirmation - MedFoxRCM</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #0B5EA6 0%, #F26A21 100%); padding: 40px 30px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: bold; }
        .header p { color: #ffffff; margin: 10px 0 0 0; opacity: 0.9; }
        .content { padding: 40px 30px; }
        .welcome-section { background-color: #f0f9ff; border-radius: 12px; padding: 25px; margin: 25px 0; border-left: 4px solid #0B5EA6; }
        .course-info { background-color: #f8fafc; border-radius: 12px; padding: 25px; margin: 25px 0; }
        .footer { background-color: #1f2937; padding: 30px; text-align: center; color: #9ca3af; }
        .footer a { color: #F26A21; text-decoration: none; }
        .highlight { color: #0B5EA6; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Registration Confirmed!</h1>
            <p>Welcome to MedFoxRCM Training Programs</p>
        </div>
        
        <div class="content">
            <div class="welcome-section">
                <h2 style="color: #374151; margin-top: 0;">Dear ${name},</h2>
                <p style="color: #1f2937; line-height: 1.6;">
                    Thank you for registering with MedFoxRCM! We're excited to have you join our comprehensive medical coding training program.
                </p>
            </div>

            <div class="course-info">
                <h3 style="color: #374151; margin-top: 0;">Your Selected Course:</h3>
                <p style="color: #0B5EA6; font-size: 18px; font-weight: bold; margin: 10px 0;">
                    ${courseNames[course as keyof typeof courseNames] || course}
                </p>
                <p style="color: #1f2937; line-height: 1.6;">
                    This course includes comprehensive training materials, hands-on practice, and <span class="highlight">100% placement assistance</span> upon successful completion.
                </p>
            </div>

            <div style="background-color: #f0f9ff; border-radius: 12px; padding: 25px; margin: 25px 0;">
                <h3 style="color: #374151; margin-top: 0;">What Happens Next?</h3>
                <ul style="color: #1f2937; line-height: 1.8; padding-left: 20px;">
                    <li>Our admissions team will contact you within <strong>24 hours</strong></li>
                    <li>We'll discuss course details, schedule, and payment options</li>
                    <li>You'll receive your course materials and access credentials</li>
                    <li>Begin your journey to becoming a certified medical coding professional!</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #0B5EA6 0%, #F26A21 100%); border-radius: 12px;">
                <h3 style="color: white; margin: 0 0 10px 0;">🚀 Ready to start your career transformation?</h3>
                <p style="color: white; margin: 0; opacity: 0.9;">Join thousands of successful graduates who are now working in top healthcare organizations!</p>
            </div>
            
            <div style="text-align: center; color: #6b7280;">
                <p><strong>Questions? We're here to help!</strong></p>
                <p>📞 <a href="tel:+914435573476" style="color: #0B5EA6;">+91 4435573476</a></p>
                <p>📧 <a href="mailto:medfoxrcm@gmail.com" style="color: #0B5EA6;">medfoxrcm@gmail.com</a></p>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>MedFoxRCM Training Programs</strong> - Building Healthcare Coding Professionals</p>
            <p>MedFox Healthcare Office, 152/3, 6th Avenue, Anna Nagar East, Chennai - 600 102</p>
            <p>Visit our website: <a href="https://medfoxrcm.com">medfoxrcm.com</a></p>
        </div>
    </div>
</body>
</html>
`

export async function POST(request: NextRequest) {
  try {
    console.log('🎓 Course registration API called')
    
    const body = await request.json()
    console.log('📝 Registration data received:', { ...body, background: body.background?.substring(0, 50) + '...' })
    
    const { name, background, dob, gender, phone, email, address, course } = courseRegistrationSchema.parse(body)

    // Create Gmail SMTP transporter
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
      from: '"MedFoxRCM Course Registration" <medfoxrcm@gmail.com>',
      to: 'medfoxrcm@gmail.com',
      subject: `🎓 New Course Registration: ${name} - ${courseNames[course as keyof typeof courseNames] || course}`,
      html: getAdminEmailTemplate(name, email, phone, background, dob, gender, address, course),
      replyTo: email,
    })
    console.log('✅ Admin email sent:', adminEmailResult.messageId)

    // Send confirmation email to student
    console.log('📤 Sending student confirmation email...')
    const studentEmailResult = await transporter.sendMail({
      from: '"MedFoxRCM Training Programs" <medfoxrcm@gmail.com>',
      to: email,
      subject: '🎉 Course Registration Confirmed - MedFoxRCM Training Programs',
      html: getStudentConfirmationTemplate(name, course),
    })
    console.log('✅ Student confirmation email sent:', studentEmailResult.messageId)

    return NextResponse.json({
      message: 'Course registration submitted successfully',
      success: true
    })
  } catch (error) {
    console.error('❌ Course registration error:', error)
    
    if (error instanceof z.ZodError) {
      // Get the first validation error message
      const firstError = error.issues[0]
      const fieldName = firstError.path.join('.')
      const message = firstError.message
      
      return NextResponse.json(
        { 
          error: `${fieldName}: ${message}`,
          details: error.issues 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to submit registration. Please try again later.' },
      { status: 500 }
    )
  }
}