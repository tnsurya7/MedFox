import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { FadeInView } from '@/components/ui/FadeInView'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'We prioritize patient outcomes and satisfaction in every billing decision we make.'
    },
    {
      icon: Shield,
      title: 'Integrity & Compliance',
      description: 'Unwavering commitment to HIPAA compliance and ethical billing practices.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Always evolving our processes to deliver better results for our clients.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We work as an extension of your team, not just a vendor.'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson, MD',
      role: 'Chief Executive Officer',
      bio: 'Former practicing physician with 15+ years in healthcare administration and revenue cycle management.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen, CPA',
      role: 'Chief Financial Officer',
      bio: 'Healthcare finance expert with deep expertise in medical billing and practice management.',
      image: '/team/michael.jpg'
    },
    {
      name: 'Emily Rodriguez, RHIA',
      role: 'Director of Coding',
      bio: 'Certified Health Information Administrator with 12+ years in medical coding and auditing.',
      image: '/team/emily.jpg'
    },
    {
      name: 'David Park, MBA',
      role: 'VP of Operations',
      bio: 'Operations leader focused on process optimization and technology implementation.',
      image: '/team/david.jpg'
    }
  ]

  const stats = [
    { number: '500+', label: 'Healthcare Clients' },
    { number: '50$ M+', label: 'Revenue Processed' },
    { number: '98.5%', label: 'Clean Claim Rate' },
    { number: '15+', label: 'Years Experience' }
  ]

  return (
    <div className="space-y-0.4">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Us
            </h1>

            {/* About Us Image */}
            <div className="w-full flex justify-center mb-8">
              <div className="relative group max-w-2xl w-full">
                <img 
                  src="/about.png" 
                  alt="About MedFoxRCM" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
              </div>
            </div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              MedFoxRCM is a technology-driven healthcare revenue cycle management partner committed to transforming the way medical practices operate and grow. We combine advanced automation, deep industry expertise, and best-in-class billing workflows to ensure higher reimbursements, faster collections, and a seamless financial experience for providers and patients. Our mission is simple: empower healthcare organizations with clarity, efficiency, and financial stability. With every claim, every client, and every interaction, MedFoxRCM delivers accuracy, transparency, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeInView delay={0} direction="left">
              <div className="card-premium p-8 group relative overflow-hidden animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-xl animate-pulse"></div>
                <CardContent className="space-y-6 relative">
                  <div className="w-16 h-16 icon-bg-orange rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Target className="w-8 h-8 text-medfox-orange group-hover:animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">Our Mission</h2>
                  <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    To empower healthcare providers with comprehensive revenue cycle management 
                    solutions that maximize financial performance while allowing them to focus 
                    on what matters most - patient care.
                  </p>
                </CardContent>
              </div>
            </FadeInView>

            <FadeInView delay={200} direction="right">
              <Card className="p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="space-y-6 relative">
                  <div className="w-16 h-16 icon-bg-green rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Award className="w-8 h-8 text-green-600 group-hover:animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Our Vision</h2>
                  <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    To be the leading provider of innovative revenue cycle management solutions, 
                    setting the standard for excellence in medical billing and healthcare 
                    financial operations.
                  </p>
                </CardContent>
              </Card>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Impact</h2>
            <p className="text-xl text-gray-700">
              Trusted by healthcare providers nationwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeInView key={index} delay={index * 100} direction="up">
                <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-medfox-blue/5 to-medfox-orange/5 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-medfox-orange mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={parseInt(stat.number.replace(/[^0-9.]/g, ''))} suffix={stat.number.replace(/[0-9.]/g, '')} />
                  </div>
                  <div className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors duration-300">{stat.label}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInView key={index} delay={index * 150} direction="up">
                <div className="card-premium p-6 text-center group relative overflow-hidden animate-card-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/5 to-medfox-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-medfox-blue/10 to-transparent rounded-full blur-lg animate-pulse"></div>
                  <CardContent className="space-y-4 relative">
                    <div className={`w-16 h-16 ${index % 2 === 0 ? 'icon-bg-blue' : 'icon-bg-orange'} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <value.icon className={`w-8 h-8 ${index % 2 === 0 ? 'text-medfox-blue' : 'text-medfox-orange'} group-hover:animate-pulse`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-medfox-blue transition-colors duration-300">{value.title}</h3>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{value.description}</p>
                  </CardContent>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts driving innovation in healthcare revenue cycle management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-premium overflow-hidden group relative hover-lift card-glow-mixed animate-fade-in-scale" style={{animationDelay: `${index * 150}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-medfox-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-48 bg-gradient-to-br from-medfox-orange/20 to-medfox-blue/20 flex items-center justify-center relative group-hover:bg-gradient-to-br group-hover:from-medfox-orange/30 group-hover:to-medfox-blue/30 transition-all duration-500">
                  <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-lg animate-pulse-glow"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-24 h-24 bg-medfox-orange rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-gentle shadow-lg group-hover:shadow-2xl">
                    <span className="text-2xl font-bold text-white group-hover:animate-wiggle">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-medfox-orange transition-colors duration-300 group-hover:animate-text-glow">{member.name}</h3>
                  <p className="text-medfox-orange font-medium mb-3 group-hover:text-medfox-blue transition-colors duration-300">{member.role}</p>
                  <p className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">{member.bio}</p>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-medfox-blue rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.6s'}}></div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-medfox-orange/5 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-medfox-blue/5 to-transparent rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the difference with our proven expertise and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-medfox-orange transition-colors duration-300">Proven Expertise</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">15+ years of experience in healthcare revenue cycle management with a track record of success.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-8 h-8 bg-gradient-to-br from-medfox-blue to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-medfox-blue transition-colors duration-300">Advanced Technology</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Cutting-edge billing software and automation tools to maximize efficiency and accuracy.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-8 h-8 bg-gradient-to-br from-medfox-orange to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-medfox-orange transition-colors duration-300">Dedicated Support</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Personal account managers and 24/7 support to ensure your questions are answered quickly.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Transparent Reporting</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Real-time dashboards and detailed reports to keep you informed about your revenue cycle performance.</p>
                </div>
              </div>
            </div>

            <div className="card-premium p-8 group relative overflow-hidden animate-card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-medfox-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="text-center relative">
                <div className="w-16 h-16 icon-bg-orange rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Clock className="w-8 h-8 text-medfox-orange group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-medfox-orange transition-colors duration-300">Ready to Get Started?</h3>
                <p className="text-gray-700 mb-6 group-hover:text-gray-900 transition-colors duration-300">
                  Join hundreds of healthcare providers who trust us with their revenue cycle management.
                </p>
                <Button size="lg" asChild className="group-hover:scale-105 transition-transform duration-300">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}