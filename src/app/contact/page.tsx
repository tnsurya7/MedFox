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

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
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

  if (success) {
    return (
      <div className="min-h-screen bg-muted-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center p-8">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-primary-navy">Thank You!</h1>
              <p className="text-xl text-gray-600">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <Button onClick={() => setSuccess(false)}>
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to optimize your revenue cycle? Contact our team of experts to learn 
            how MedFox can transform your medical billing operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <FadeInView delay={0} direction="left">
              <Card className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-4 mt-2">
                    <div className="w-12 h-12 bg-primary-gold/10 rounded-2xl flex items-center justify-center mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Phone className="w-6 h-6 text-primary-gold group-hover:animate-pulse" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-primary-navy mb-3 group-hover:text-primary-gold transition-colors duration-300">Phone</h3>
                      <a href="tel:+15551234567" className="text-gray-600 mb-1 hover:text-primary-gold transition-colors duration-300 cursor-pointer block font-medium">
                        (555) 123-4567
                      </a>
                      <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">Mon-Fri 8AM-6PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInView>

            <FadeInView delay={200} direction="left">
              <Card className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-4 mt-2">
                    <div className="w-12 h-12 bg-accent-green/10 rounded-2xl flex items-center justify-center mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Mail className="w-6 h-6 text-accent-green group-hover:animate-pulse" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-primary-navy mb-3 group-hover:text-accent-green transition-colors duration-300">Email</h3>
                      <a href="mailto:info@medfox.com" className="text-gray-600 mb-1 hover:text-accent-green transition-colors duration-300 cursor-pointer block font-medium">
                        info@medfox.com
                      </a>
                      <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInView>

            <FadeInView delay={400} direction="left">
              <Card className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-4 mt-2">
                    <div className="w-12 h-12 bg-primary-navy/10 rounded-2xl flex items-center justify-center mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-primary-navy group-hover:animate-pulse" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-primary-navy mb-3 group-hover:text-primary-navy transition-colors duration-300">Office</h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        123 Healthcare Ave<br />
                        Medical City, MC 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInView>

            <FadeInView delay={600} direction="left">
              <Card className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-4 mt-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Clock className="w-6 h-6 text-blue-600 group-hover:animate-pulse" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-primary-navy mb-3 group-hover:text-blue-600 transition-colors duration-300">Business Hours</h3>
                      <div className="text-gray-600 text-sm space-y-1 group-hover:text-gray-700 transition-colors duration-300">
                        <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                        <div>Saturday: 9:00 AM - 2:00 PM</div>
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
              <Card className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-accent-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <CardTitle className="group-hover:text-primary-gold transition-colors duration-300">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
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
                    <label className="block text-sm font-medium text-primary-navy">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-all duration-200"
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
        <div className="mt-20 text-center">
          <Card className="bg-primary-navy text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation to see how MedFox can improve your 
                revenue cycle performance and reduce administrative burden.
              </p>
              <Button variant="secondary" size="lg">
                Schedule Free Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}