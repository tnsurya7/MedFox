'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { FadeInView } from '@/components/ui/FadeInView'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Check if response is ok before trying to parse JSON
      if (!response.ok) {
        // Try to get error message from response
        let errorMessage = 'Failed to send message'
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } catch {
          // If JSON parsing fails, use status text
          errorMessage = `Server error: ${response.status} ${response.statusText}`
        }
        throw new Error(errorMessage)
      }

      // Parse JSON response
      let data
      try {
        data = await response.json()
      } catch (jsonError) {
        throw new Error('Invalid response from server. Please try again.')
      }

      // Success!
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch (err) {
      console.error('Contact form error:', err)
      
      // Handle different types of errors
      if (err instanceof TypeError && err.message.includes('fetch')) {
        setError('Network error. Please check your connection and try again.')
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }



  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-scale">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to optimize your revenue cycle? Contact our team of experts to learn 
            how we can transform your medical billing operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Image */}
            <div className="w-full flex justify-center mb-6">
              <div className="relative group max-w-sm w-full h-48 overflow-hidden">
                <img 
                  src="/contact.png" 
                  alt="Contact MedFoxRCM" 
                  className="w-full h-full object-cover object-center rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
              </div>
            </div>

            <FadeInView delay={0} direction="left">
              <Card className="group relative overflow-hidden card-premium">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-4 mt-2">
                    <div className="w-12 h-12 icon-bg-orange rounded-2xl flex items-center justify-center mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Phone className="w-6 h-6 text-medfox-orange group-hover:animate-pulse" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-medfox-orange transition-colors duration-300">Phone</h3>
                      <a href="tel:+914435573476" className="text-gray-700 mb-1 hover:text-medfox-orange transition-colors duration-300 cursor-pointer block font-medium">
                        +91 4435573476
                      </a>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Monday - Saturday: 10:00 AM - 6:30 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInView>

            <FadeInView delay={200} direction="left">
              <Card className="group relative overflow-hidden card-premium">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-4 mt-2">
                    <div className="w-12 h-12 icon-bg-green rounded-2xl flex items-center justify-center mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Mail className="w-6 h-6 text-green-600 group-hover:animate-pulse" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Email</h3>
                      <a href="mailto:medfoxrcm@gmail.com" className="text-gray-700 mb-1 hover:text-green-600 transition-colors duration-300 cursor-pointer block font-medium">
                        contact@medfoxrcm.com
                      </a>
                      <a href="mailto:satheesh@medfoxrcm.com" className="text-gray-700 mb-2 hover:text-green-600 transition-colors duration-300 cursor-pointer block font-medium">
                        satheesh@medfoxrcm.com
                      </a>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInView>

            <FadeInView delay={400} direction="left">
              <Card className="group relative overflow-hidden card-premium">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-4 mt-2">
                    <div className="w-12 h-12 icon-bg-blue rounded-2xl flex items-center justify-center mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-medfox-blue group-hover:animate-pulse" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-medfox-blue transition-colors duration-300">Office</h3>
                      <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                        MedFox Healthcare Office<br />
                        152/3, 6th Avenue, Anna Nagar East<br />
                        Chennai - 600 102
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInView>

            <FadeInView delay={600} direction="left">
              <Card className="group relative overflow-hidden card-premium">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-4 mt-2">
                    <div className="w-12 h-12 icon-bg-purple rounded-2xl flex items-center justify-center mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Clock className="w-6 h-6 text-purple-600 group-hover:animate-pulse" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Business Hours</h3>
                      <div className="text-gray-700 text-sm space-y-1 group-hover:text-gray-800 transition-colors duration-300">
                        <div>Monday - Saturday: 10:00 AM - 6:30 PM</div>
                        <div>Sunday: Closed</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInView>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeInView delay={200} direction="right">
              <Card className="group relative overflow-hidden card-premium">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-medfox-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">Send us a Message</CardTitle>
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
                      <span className="font-medium"> Message sent successfully! We'll respond within 24 hours.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Mukesh Kumar M"
                    />
                    <Input
                      label="Email Address *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="contact@medfoxrcm.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 4435573476"
                    />
                    <Input
                      label="Company/Practice Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your healthcare practice"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-900">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-medfox-orange focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your revenue cycle challenges and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    loading={loading}
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    Send Message
                  </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeInView>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <div className="card-premium bg-gradient-to-br from-medfox-blue/5 to-medfox-orange/5 border-2 border-medfox-blue/20 group relative overflow-hidden animate-card-hover">
            <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-medfox-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-12 relative">
              <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto group-hover:text-gray-900 transition-colors duration-300">
                Schedule a free consultation to see how we can improve your 
                revenue cycle performance and reduce administrative burden.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="group-hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  const formElement = document.querySelector('form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Focus on the first input field
                    const firstInput = formElement.querySelector('input[name="name"]') as HTMLInputElement;
                    if (firstInput) {
                      setTimeout(() => firstInput.focus(), 500);
                    }
                  }
                }}
              >
                Schedule Free Consultation
              </Button>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  )
}