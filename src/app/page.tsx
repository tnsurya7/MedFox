import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  BarChart3,
  FileText,
  Stethoscope
} from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted-background to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-navy leading-tight">
                Revolutionize your Revenue Cycle with{' '}
                <span className="text-primary-gold">MedFox</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                End-to-end medical billing, certified coding and RCM consulting to maximize 
                claim acceptance and accelerate collections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-primary-navy">Revenue Dashboard</h3>
                    <div className="text-green-600 text-sm font-medium">+15.2%</div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-primary-gold/20 to-accent-green/20 rounded-xl flex items-end justify-center">
                    <BarChart3 className="w-16 h-16 text-primary-gold mb-4" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Clean Claim Rate</div>
                      <div className="font-semibold text-primary-navy">98.5%</div>
                    </div>
                    <div>
                      <div className="text-gray-500">AR Days</div>
                      <div className="font-semibold text-primary-navy">22.3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-gold">98.5%</div>
              <div className="text-gray-600 mt-2">Clean Claim Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-gold">22</div>
              <div className="text-gray-600 mt-2">Average AR Days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-gold">500+</div>
              <div className="text-gray-600 mt-2">Healthcare Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-gold">$50M+</div>
              <div className="text-gray-600 mt-2">Revenue Processed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Comprehensive RCM Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From billing to collections, we handle every aspect of your revenue cycle 
              with precision and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary-gold/10 rounded-2xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-gold" />
                </div>
                <h3 className="text-xl font-semibold text-primary-navy">Medical Billing</h3>
                <p className="text-gray-600">
                  Complete billing solutions from claim submission to payment posting. 
                  Maximize reimbursements with our expert billing team.
                </p>
                <Link href="/services/medical-billing" className="inline-flex items-center text-primary-gold hover:text-primary-navy transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-accent-green/10 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="text-xl font-semibold text-primary-navy">Coding & Audit</h3>
                <p className="text-gray-600">
                  Certified medical coding and comprehensive audits to ensure compliance 
                  and optimize revenue capture.
                </p>
                <Link href="/services/coding-audit" className="inline-flex items-center text-primary-gold hover:text-primary-navy transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary-navy/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-navy" />
                </div>
                <h3 className="text-xl font-semibold text-primary-navy">RCM Consulting</h3>
                <p className="text-gray-600">
                  Strategic revenue cycle optimization to improve cash flow, reduce 
                  denials, and streamline operations.
                </p>
                <Link href="/services/rcm-consulting" className="inline-flex items-center text-primary-gold hover:text-primary-navy transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized expertise across healthcare sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Medical Clinics', icon: Stethoscope },
              { name: 'Hospitals', icon: Shield },
              { name: 'Laboratories', icon: Users },
              { name: 'Specialty Practices', icon: Clock }
            ].map((industry, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary-gold/10 rounded-2xl flex items-center justify-center mx-auto">
                    <industry.icon className="w-6 h-6 text-primary-gold" />
                  </div>
                  <h3 className="font-semibold text-primary-navy">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "MedFox transformed our billing process. Our clean claim rate improved from 85% to 98.5% in just 6 months.",
                author: "Dr. Sarah Johnson",
                title: "Sunrise Medical Clinic"
              },
              {
                quote: "The RCM consulting team helped us reduce our AR days by 40%. Outstanding service and results.",
                author: "Michael Chen",
                title: "Downtown Family Practice"
              },
              {
                quote: "Professional, reliable, and results-driven. MedFox is an essential partner for our practice.",
                author: "Dr. Emily Rodriguez",
                title: "Specialty Orthopedic Center"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8">
                <CardContent className="space-y-4">
                  <div className="flex text-primary-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-primary-navy">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
            Ready to Optimize Your Revenue Cycle?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of healthcare providers who trust MedFox with their revenue cycle management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
