'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { CheckCircle } from 'lucide-react'

export default function CourseRegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    background: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    course: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const courses = [
    { value: 'bmct', label: 'BMCT - Basic Medical Coding Training' },
    { value: 'cpc', label: 'CPC - Certified Professional Coder' },
    { value: 'amct', label: 'AMCT - Advanced Medical Coding Training' },
    { value: 'cpma', label: 'CPMA - Certified Professional Medical Auditor' },
    { value: 'ipdrg', label: 'IPDRG - Inpatient DRG Coding' },
    { value: 'ccs', label: 'CCS - Certified Coding Specialist' },
    { value: 'em', label: 'E/M - Evaluation and Management Coding' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Client-side validation
    const requiredFields = [
      { field: 'name', label: 'Full Name' },
      { field: 'background', label: 'Academic/Professional Background' },
      { field: 'dob', label: 'Date of Birth' },
      { field: 'gender', label: 'Gender' },
      { field: 'phone', label: 'Phone Number' },
      { field: 'email', label: 'Email Address' },
      { field: 'address', label: 'Address' },
      { field: 'course', label: 'Course Selection' },
    ]

    const missingFields = requiredFields.filter(({ field }) => !formData[field as keyof typeof formData]?.trim())
    
    if (missingFields.length > 0) {
      setError(`Please fill in the following required fields: ${missingFields.map(f => f.label).join(', ')}`)
      setLoading(false)
      return
    }

    // Additional validation
    if (formData.email && !formData.email.includes('@')) {
      setError('Please enter a valid email address')
      setLoading(false)
      return
    }

    if (formData.phone && formData.phone.length < 10) {
      setError('Phone number must be at least 10 characters')
      setLoading(false)
      return
    }

    if (formData.background && formData.background.length < 10) {
      setError('Academic/Professional Background must be at least 10 characters')
      setLoading(false)
      return
    }

    if (formData.address && formData.address.length < 10) {
      setError('Address must be at least 10 characters')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/course-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        let errorMessage = 'Registration failed'
        try {
          const errorData = await response.json()
          if (errorData.details && Array.isArray(errorData.details)) {
            // Show specific validation errors
            const validationErrors = errorData.details.map((issue: any) => 
              `${issue.path.join('.')}: ${issue.message}`
            ).join(', ')
            errorMessage = `Please fix the following: ${validationErrors}`
          } else {
            errorMessage = errorData.error || errorMessage
          }
        } catch {
          errorMessage = `Server error: ${response.status} ${response.statusText}`
        }
        throw new Error(errorMessage)
      }

      // Success!
      setSuccess(true)
      setFormData({
        name: '',
        background: '',
        dob: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        course: '',
      })

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch (err) {
      console.error('Course registration error:', err)
      setError(err instanceof Error ? err.message : 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    // Clear error when user starts typing
    if (error) {
      setError('')
    }
    
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center mb-8">
            <img 
              src="/logo.jpg" 
              alt="MedFoxRCM Logo" 
              className="w-32 h-32 rounded-xl object-contain hover:scale-110 transition-transform duration-300"
            />
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-scale">
            Course Registration
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join our comprehensive medical coding training programs and get 100% placement assistance. 
            Fill out the form below to register for your preferred course.
          </p>
        </div>

        <Card className="group relative overflow-hidden card-premium">
          <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-medfox-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="relative">
            <CardTitle className="text-gray-900 group-hover:text-medfox-orange transition-colors duration-300 text-2xl">
              Registration Form
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Please provide your details to complete the course registration process.
            </p>
          </CardHeader>
          <CardContent className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-2xl text-sm flex items-center animate-fade-in-scale">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-medium">✅ Registration submitted successfully! We'll contact you within 24 hours.</span>
                </div>
              )}

              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                  
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-900">
                      Academic/Professional Background *
                    </label>
                    <textarea
                      name="background"
                      value={formData.background}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-medfox-orange focus:border-transparent transition-all duration-200"
                      placeholder="Describe your educational background and work experience..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Date of Birth *"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                  
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-900">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-medfox-orange focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number *"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 9876543210"
                  />
                  
                  <Input
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-900">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-medfox-orange focus:border-transparent transition-all duration-200"
                    placeholder="Enter your complete address..."
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Course Selection
                </h3>
                
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-900">
                    Select Course *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-medfox-orange focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.value} value={course.value}>
                        {course.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-gray-600 mt-2">
                    All courses include 100% placement assistance and comprehensive training materials.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  type="submit"
                  loading={loading}
                  size="lg"
                  className="flex-1"
                >
                  Submit Registration
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  className="flex-1"
                  onClick={() => router.push('/courses')}
                >
                  View Courses
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="card-premium bg-gradient-to-br from-medfox-blue/5 to-medfox-orange/5 border-2 border-medfox-blue/20 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-medfox-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">
                Need Help?
              </h3>
              <p className="text-gray-700 mb-6 group-hover:text-gray-900 transition-colors duration-300">
                Have questions about our courses or the registration process? 
                Contact our admissions team for personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">Contact Admissions</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+914435573476">Call +91 4435573476</a>
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  )
}