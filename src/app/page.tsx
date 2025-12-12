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
    <div className="space-y-0 relative">
      {/* Premium Global Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-gray-50/30 to-white"></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-tr from-medfox-blue/2 via-transparent to-medfox-orange/2 animate-pulse" style={{ animationDuration: '8s' }}></div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50/50 py-20 relative overflow-hidden">
        {/* Premium Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-medfox-orange/20 to-medfox-orange/5 rounded-full animate-float delay-1000 blur-sm"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-medfox-blue/20 to-medfox-blue/5 rounded-full animate-pulse-glow delay-2000 blur-sm"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-medfox-blue/15 to-transparent rounded-full animate-glow delay-3000 blur-sm"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full animate-float delay-4000 blur-sm"></div>
          <div className="absolute bottom-1/3 right-10 w-14 h-14 bg-gradient-to-br from-medfox-blue/10 to-transparent rounded-full animate-pulse delay-5000 blur-sm"></div>
          {/* Additional floating elements */}
          <div className="absolute top-10 right-1/4 w-6 h-6 bg-gradient-to-br from-green-400/15 to-transparent rounded-full animate-float delay-6000 blur-sm"></div>
          <div className="absolute bottom-10 left-1/3 w-10 h-10 bg-gradient-to-br from-purple-400/15 to-transparent rounded-full animate-pulse-glow delay-7000 blur-sm"></div>
          <div className="absolute top-1/3 left-20 w-4 h-4 bg-gradient-to-br from-medfox-orange/20 to-transparent rounded-full animate-glow delay-8000 blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInView direction="left" className="space-y-8">
              {/* RCM Image - Centered and Larger Horizontal */}
              <div className="w-full flex justify-center mb-1">
                <div className="relative group max-w-4xl w-full">
                  <img 
                    src="/rcm.png" 
                    alt="Revenue Cycle Management" 
                    className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Revolutionize your Revenue Cycle with{' '}
                <span className="text-premium relative animate-text-glow">
                  MedFoxRCM
                  <div className="absolute -inset-2 bg-gradient-to-r from-medfox-blue/20 via-medfox-orange/20 to-medfox-blue/20 blur-xl animate-pulse"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed animate-slide-up">
                End-to-end medical billing, certified coding and RCM consulting to maximize 
                claim acceptance and accelerate collections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group animate-bounce-gentle">
                  <Link href="/contact">
                    Get Started Today
                    <Sparkles className="w-4 h-4 ml-2 group-hover:animate-sparkle" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="group animate-magnetic-pull">
                  <Link href="/services">
                    Explore Services
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
              
              {/* Floating Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-8 animate-fade-in-scale">
                <div className="flex items-center space-x-2 text-sm text-gray-600 animate-heartbeat">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 animate-wiggle">
                  <CheckCircle className="w-4 h-4 text-medfox-blue" />
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 animate-pulse-glow">
                  <Star className="w-4 h-4 text-medfox-orange" />
                  <span>5-Star Rated</span>
                </div>
              </div>
            </FadeInView>
            
            <FadeInView direction="right" className="relative">
              {/* Testimonials Image */}
              <div className="w-full flex justify-center mb-6">
                <div className="relative group max-w-2xl w-full">
                  <img 
                    src="/testominals.png" 
                    alt="Client Testimonials" 
                    className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
                </div>
              </div>
              
              <div className="card-premium glass-effect p-8 relative overflow-hidden group animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/5 via-transparent to-medfox-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
                <div className="space-y-4 relative">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Revenue Dashboard</h3>
                    <div className="text-green-600 text-sm font-medium animate-pulse bg-green-50 px-3 py-1 rounded-full">+15.2%</div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-medfox-blue/20 to-medfox-orange/20 rounded-xl flex items-end justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    <BarChart3 className="w-16 h-16 text-medfox-orange mb-4 animate-pulse-glow" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="group">
                      <div className="text-gray-600">Clean Claim Rate</div>
                      <div className="font-semibold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">
                        <AnimatedCounter end={98.5} decimals={1} suffix="%" />
                      </div>
                    </div>
                    <div className="group">
                      <div className="text-gray-600">AR Days</div>
                      <div className="font-semibold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">
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
        {/* Premium Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/5 via-transparent to-medfox-orange/5"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-medfox-blue/15 to-medfox-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-medfox-orange/15 to-medfox-orange/5 rounded-full blur-3xl animate-glow delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-gradient-to-br from-medfox-orange/8 to-transparent rounded-full blur-2xl animate-float delay-2000"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-br from-medfox-blue/8 to-transparent rounded-full blur-2xl animate-pulse-glow delay-3000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FadeInView delay={0} className="text-center group">
              <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/10 to-medfox-blue/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={98.5} decimals={1} suffix="%" />
                  <Sparkles className="inline-block w-6 h-6 ml-2 text-medfox-orange animate-rotate-glow" />
                </div>
                <div className="text-gray-700 mt-2 group-hover:text-gray-900 transition-colors duration-300 font-medium">Clean Claim Rate</div>
              </div>
            </FadeInView>
            
            <FadeInView delay={200} className="text-center group">
              <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/10 to-medfox-orange/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={22} />
                  <Clock className="inline-block w-6 h-6 ml-2 text-medfox-blue animate-pulse-glow" />
                </div>
                <div className="text-gray-700 mt-2 group-hover:text-gray-900 transition-colors duration-300 font-medium">Average AR Days</div>
              </div>
            </FadeInView>
            
            <FadeInView delay={400} className="text-center group">
              <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/10 to-medfox-orange/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={500} suffix="+" />
                  <Users className="inline-block w-6 h-6 ml-2 text-medfox-blue animate-float" />
                </div>
                <div className="text-gray-700 mt-2 group-hover:text-gray-900 transition-colors duration-300 font-medium">Healthcare Clients</div>
              </div>
            </FadeInView>
            
            <FadeInView delay={600} className="text-center group">
              <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-medfox-orange/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={50} suffix="$ M+" />
                  <TrendingUp className="inline-block w-6 h-6 ml-2 text-green-600 animate-glow" />
                </div>
                <div className="text-gray-700 mt-2 group-hover:text-gray-900 transition-colors duration-300 font-medium">Revenue Processed</div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              Comprehensive RCM Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-scale">
              From billing to collections, we handle every aspect of your revenue cycle 
              with precision and expertise.
            </p>
          </div>

          {/* Services Image */}
          <div className="w-full flex justify-center mb-16">
            <div className="relative group max-w-4xl w-full">
              <img 
                src="/s.png" 
                alt="RCM Services Overview" 
                className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInView delay={0} direction="up">
              <div className="card-premium p-8 group relative overflow-hidden animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-xl animate-pulse"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-medfox-orange/20 to-medfox-orange/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-glow">
                    <FileText className="w-6 h-6 text-medfox-orange group-hover:text-medfox-blue transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">Medical Billing</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Complete billing solutions from claim submission to payment posting. 
                    Maximize reimbursements with our expert billing team.
                  </p>
                  <Link href="/services/medical-billing" className="inline-flex items-center text-medfox-orange hover:text-medfox-blue transition-all duration-300 group-hover:translate-x-2 font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                  </Link>
                </CardContent>
              </div>
            </FadeInView>

            <FadeInView delay={200} direction="up">
              <div className="card-premium p-8 group relative overflow-hidden animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-medfox-blue/10 to-transparent rounded-full blur-xl animate-pulse"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-medfox-blue/20 to-medfox-blue/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-glow">
                    <CheckCircle className="w-6 h-6 text-medfox-blue group-hover:text-medfox-orange transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">Coding & Audit</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Certified medical coding and comprehensive audits to ensure compliance 
                    and optimize revenue capture.
                  </p>
                  <Link href="/services/coding-audit" className="inline-flex items-center text-medfox-orange hover:text-medfox-blue transition-all duration-300 group-hover:translate-x-2 font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                  </Link>
                </CardContent>
              </div>
            </FadeInView>

            <FadeInView delay={400} direction="up">
              <div className="card-premium p-8 group relative overflow-hidden animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-medfox-blue/10 to-transparent rounded-full blur-xl animate-pulse"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-medfox-blue/20 to-medfox-blue/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-glow">
                    <TrendingUp className="w-6 h-6 text-medfox-blue group-hover:text-medfox-orange transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">RCM Consulting</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Strategic revenue cycle optimization to improve cash flow, reduce 
                    denials, and streamline operations.
                  </p>
                  <Link href="/services/rcm-consulting" className="inline-flex items-center text-medfox-orange hover:text-medfox-blue transition-all duration-300 group-hover:translate-x-2 font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                  </Link>
                </CardContent>
              </div>
            </FadeInView>
          </div>
          
          {/* Get Started CTA */}
          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="blue" size="lg" asChild>
                <Link href="/auth/login">Course Registration</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-700 animate-fade-in-scale">
              Specialized expertise across healthcare sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Medical Clinics', icon: Stethoscope, color: 'medfox-orange' },
              { name: 'Hospitals', icon: Shield, color: 'medfox-blue' },
              { name: 'Laboratories', icon: Users, color: 'medfox-orange' },
              { name: 'Specialty Practices', icon: Clock, color: 'medfox-blue' }
            ].map((industry, index) => (
              <FadeInView key={index} delay={index * 100} direction="up">
                <div className="card-premium p-6 text-center group cursor-pointer relative overflow-hidden animate-card-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-lg animate-pulse"></div>
                  <CardContent className="space-y-4 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-medfox-orange/20 to-medfox-orange/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-float">
                      <industry.icon className={`w-6 h-6 text-${industry.color} group-hover:text-medfox-blue transition-colors duration-300`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">{industry.name}</h3>
                  </CardContent>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              What Our Clients Say
            </h2>
          </div>

          {/* Client Testimonials Image */}
          <div className="w-full flex justify-center mb-16">
            <div className="relative group max-w-4xl w-full">
              <img 
                src="/pf.png" 
                alt="Client Testimonials and Reviews" 
                className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "MedFoxRCM transformed our billing process. Our clean claim rate improved from 85% to 98.5% in just 6 months.",
                author: "Dr. Sarah Johnson",
                title: "Sunrise Medical Clinic"
              },
              {
                quote: "The RCM consulting team helped us reduce our AR days by 40%. Outstanding service and results.",
                author: "Michael Chen",
                title: "Downtown Family Practice"
              },
              {
                quote: "Professional, reliable, and results-driven. MedFoxRCM is an essential partner for our practice.",
                author: "Dr. Emily Rodriguez",
                title: "Specialty Orthopedic Center"
              }
            ].map((testimonial, index) => (
              <FadeInView key={index} delay={index * 200} direction="up">
                <div className="card-premium p-8 group relative overflow-hidden animate-card-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/5 to-medfox-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-xl animate-pulse"></div>
                  <CardContent className="space-y-4 relative">
                    <div className="flex text-medfox-orange">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300 animate-glow" 
                          style={{ transitionDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic group-hover:text-gray-900 transition-colors duration-300 text-lg">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">{testimonial.author}</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{testimonial.title}</div>
                    </div>
                  </CardContent>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-slide-up">
            Ready to Optimize Your Revenue Cycle?
          </h2>

          {/* Revenue Cycle Image */}
          <div className="w-full flex justify-center mb-8">
            <div className="relative group max-w-2xl w-full">
              <img 
                src="/r.jpeg" 
                alt="Revenue Cycle Optimization" 
                className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
            </div>
          </div>

          <p className="text-xl text-gray-700 mb-8 animate-fade-in-scale">
            Join hundreds of healthcare providers who trust MedFoxRCM with their revenue cycle management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
