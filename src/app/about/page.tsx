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
    { number: '$50M+', label: 'Revenue Processed' },
    { number: '98.5%', label: 'Clean Claim Rate' },
    { number: '15+', label: 'Years Experience' }
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted-background to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-navy mb-6">
              About MedFox
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're dedicated to revolutionizing healthcare revenue cycle management through 
              innovative technology, expert knowledge, and unwavering commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeInView delay={0} direction="left">
              <Card className="p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="space-y-6 relative">
                  <div className="w-16 h-16 bg-primary-gold/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Target className="w-8 h-8 text-primary-gold group-hover:animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-navy group-hover:text-primary-gold transition-colors duration-300">Our Mission</h2>
                  <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    To empower healthcare providers with comprehensive revenue cycle management 
                    solutions that maximize financial performance while allowing them to focus 
                    on what matters most - patient care.
                  </p>
                </CardContent>
              </Card>
            </FadeInView>

            <FadeInView delay={200} direction="right">
              <Card className="p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="space-y-6 relative">
                  <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Award className="w-8 h-8 text-accent-green group-hover:animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-navy group-hover:text-accent-green transition-colors duration-300">Our Vision</h2>
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
      <section className="py-16 bg-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300">
              Trusted by healthcare providers nationwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeInView key={index} delay={index * 100} direction="up">
                <div className="text-center group">
                  <div className="text-4xl font-bold text-primary-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={parseInt(stat.number.replace(/[^0-9.]/g, ''))} suffix={stat.number.replace(/[0-9.]/g, '')} />
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInView key={index} delay={index * 150} direction="up">
                <Card className="p-6 text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="space-y-4 relative">
                    <div className="w-16 h-16 bg-primary-gold/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <value.icon className="w-8 h-8 text-primary-gold group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-navy group-hover:text-primary-gold transition-colors duration-300">{value.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
                  </CardContent>
                </Card>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts driving innovation in healthcare revenue cycle management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-gold/20 to-accent-green/20 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary-gold rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-navy">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-navy mb-1">{member.name}</h3>
                  <p className="text-primary-gold font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Why Choose MedFox?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-navy mb-2">Proven Expertise</h3>
                  <p className="text-gray-600">15+ years of experience in healthcare revenue cycle management with a track record of success.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-navy mb-2">Advanced Technology</h3>
                  <p className="text-gray-600">Cutting-edge billing software and automation tools to maximize efficiency and accuracy.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-navy mb-2">Dedicated Support</h3>
                  <p className="text-gray-600">Personal account managers and 24/7 support to ensure your questions are answered quickly.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-navy mb-2">Transparent Reporting</h3>
                  <p className="text-gray-600">Real-time dashboards and detailed reports to keep you informed about your revenue cycle performance.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-gold/10 to-accent-green/10 rounded-2xl p-8">
              <div className="text-center">
                <Clock className="w-16 h-16 text-primary-gold mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary-navy mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Join hundreds of healthcare providers who trust MedFox with their revenue cycle management.
                </p>
                <Button size="lg" asChild>
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