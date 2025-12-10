import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { FadeInView } from '@/components/ui/FadeInView'
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
  Stethoscope,
  Sparkles
} from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted-background to-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-gold/10 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent-green/10 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-navy/10 rounded-full animate-bounce delay-3000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInView direction="left" className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-navy leading-tight">
                Revolutionize your Revenue Cycle with{' '}
                <span className="text-primary-gold relative">
                  MedFox
                  <div className="absolute -inset-1 bg-primary-gold/20 blur-lg animate-pulse"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                End-to-end medical billing, certified coding and RCM consulting to maximize 
                claim acceptance and accelerate collections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Get Started Today
                    <Sparkles className="w-4 h-4 ml-2 group-hover:animate-spin" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </FadeInView>
            
            <FadeInView direction="right" className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 via-transparent to-accent-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="space-y-4 relative">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-primary-navy">Revenue Dashboard</h3>
                    <div className="text-green-600 text-sm font-medium animate-pulse">+15.2%</div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-primary-gold/20 to-accent-green/20 rounded-xl flex items-end justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    <BarChart3 className="w-16 h-16 text-primary-gold mb-4 animate-pulse" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="group">
                      <div className="text-gray-500">Clean Claim Rate</div>
                      <div className="font-semibold text-primary-navy group-hover:text-primary-gold transition-colors duration-300">
                        <AnimatedCounter end={98.5} decimals={1} suffix="%" />
                      </div>
                    </div>
                    <div className="group">
                      <div className="text-gray-500">AR Days</div>
                      <div className="font-semibold text-primary-navy group-hover:text-accent-green transition-colors duration-300">
                        <AnimatedCounter end={22.3} decimals={1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/5 via-transparent to-accent-green/5"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FadeInView delay={0} className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative text-4xl md:text-5xl font-bold text-primary-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={98.5} decimals={1} suffix="%" />
                  <Sparkles className="inline-block w-6 h-6 ml-2 text-primary-gold animate-pulse" />
                </div>
                <div className="text-gray-600 mt-2 group-hover:text-primary-navy transition-colors duration-300">Clean Claim Rate</div>
              </div>
            </FadeInView>
            
            <FadeInView delay={200} className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-green/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative text-4xl md:text-5xl font-bold text-primary-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={22} />
                  <Clock className="inline-block w-6 h-6 ml-2 text-accent-green animate-pulse" />
                </div>
                <div className="text-gray-600 mt-2 group-hover:text-primary-navy transition-colors duration-300">Average AR Days</div>
              </div>
            </FadeInView>
            
            <FadeInView delay={400} className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-navy/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative text-4xl md:text-5xl font-bold text-primary-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={500} suffix="+" />
                  <Users className="inline-block w-6 h-6 ml-2 text-primary-navy animate-pulse" />
                </div>
                <div className="text-gray-600 mt-2 group-hover:text-primary-navy transition-colors duration-300">Healthcare Clients</div>
              </div>
            </FadeInView>
            
            <FadeInView delay={600} className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative text-4xl md:text-5xl font-bold text-primary-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  $<AnimatedCounter end={50} suffix="M+" />
                  <TrendingUp className="inline-block w-6 h-6 ml-2 text-green-600 animate-pulse" />
                </div>
                <div className="text-gray-600 mt-2 group-hover:text-primary-navy transition-colors duration-300">Revenue Processed</div>
              </div>
            </FadeInView>
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
            <FadeInView delay={0} direction="up">
              <Card className="p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-12 h-12 bg-primary-gold/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FileText className="w-6 h-6 text-primary-gold group-hover:text-primary-navy transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-navy group-hover:text-primary-gold transition-colors duration-300">Medical Billing</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Complete billing solutions from claim submission to payment posting. 
                    Maximize reimbursements with our expert billing team.
                  </p>
                  <Link href="/services/medical-billing" className="inline-flex items-center text-primary-gold hover:text-primary-navy transition-all duration-300 group-hover:translate-x-2">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                  </Link>
                </CardContent>
              </Card>
            </FadeInView>

            <FadeInView delay={200} direction="up">
              <Card className="p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-accent-green group-hover:text-primary-navy transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-navy group-hover:text-accent-green transition-colors duration-300">Coding & Audit</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Certified medical coding and comprehensive audits to ensure compliance 
                    and optimize revenue capture.
                  </p>
                  <Link href="/services/coding-audit" className="inline-flex items-center text-primary-gold hover:text-primary-navy transition-all duration-300 group-hover:translate-x-2">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                  </Link>
                </CardContent>
              </Card>
            </FadeInView>

            <FadeInView delay={400} direction="up">
              <Card className="p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-12 h-12 bg-primary-navy/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <TrendingUp className="w-6 h-6 text-primary-navy group-hover:text-primary-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-navy group-hover:text-primary-navy transition-colors duration-300">RCM Consulting</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Strategic revenue cycle optimization to improve cash flow, reduce 
                    denials, and streamline operations.
                  </p>
                  <Link href="/services/rcm-consulting" className="inline-flex items-center text-primary-gold hover:text-primary-navy transition-all duration-300 group-hover:translate-x-2">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                  </Link>
                </CardContent>
              </Card>
            </FadeInView>
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
              { name: 'Medical Clinics', icon: Stethoscope, color: 'primary-gold' },
              { name: 'Hospitals', icon: Shield, color: 'accent-green' },
              { name: 'Laboratories', icon: Users, color: 'primary-navy' },
              { name: 'Specialty Practices', icon: Clock, color: 'blue-600' }
            ].map((industry, index) => (
              <FadeInView key={index} delay={index * 100} direction="up">
                <Card className="p-6 text-center group cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="space-y-4 relative">
                    <div className="w-12 h-12 bg-primary-gold/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-float">
                      <industry.icon className={`w-6 h-6 text-${industry.color} group-hover:text-primary-navy transition-colors duration-300`} />
                    </div>
                    <h3 className="font-semibold text-primary-navy group-hover:text-primary-gold transition-colors duration-300">{industry.name}</h3>
                  </CardContent>
                </Card>
              </FadeInView>
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
              <FadeInView key={index} delay={index * 200} direction="up">
                <Card className="p-8 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-accent-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="space-y-4 relative">
                    <div className="flex text-primary-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300" 
                          style={{ transitionDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic group-hover:text-gray-700 transition-colors duration-300">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-primary-navy group-hover:text-primary-gold transition-colors duration-300">{testimonial.author}</div>
                      <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{testimonial.title}</div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInView>
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
