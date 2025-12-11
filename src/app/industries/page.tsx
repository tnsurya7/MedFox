import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { 
  Stethoscope, 
  Building2, 
  TestTube, 
  Heart,
  Eye,
  Bone,
  Brain,
  Baby,
  CheckCircle,
  TrendingUp,
  Users,
  Shield
} from 'lucide-react'

export default function IndustriesPage() {
  const industries = [
    {
      id: 'clinics',
      title: 'Medical Clinics',
      icon: Stethoscope,
      description: 'Comprehensive billing solutions for primary care, family medicine, and multi-specialty clinics.',
      challenges: [
        'High patient volume with diverse insurance plans',
        'Complex coding requirements across specialties',
        'Managing multiple providers and locations',
        'Prior authorization delays'
      ],
      solutions: [
        'Automated eligibility verification',
        'Multi-specialty coding expertise',
        'Centralized billing management',
        'Prior authorization tracking'
      ],
      results: {
        cleanClaimRate: '98.2%',
        arDays: '23',
        revenueIncrease: '15%'
      }
    },
    {
      id: 'hospitals',
      title: 'Hospitals & Health Systems',
      icon: Building2,
      description: 'Enterprise-level revenue cycle management for hospitals and integrated health systems.',
      challenges: [
        'Complex inpatient and outpatient billing',
        'DRG coding and case mix optimization',
        'Charity care and financial assistance',
        'Regulatory compliance requirements'
      ],
      solutions: [
        'Advanced DRG optimization',
        'Integrated inpatient/outpatient billing',
        'Charity care workflow management',
        'Compliance monitoring and reporting'
      ],
      results: {
        cleanClaimRate: '97.8%',
        arDays: '28',
        revenueIncrease: '12%'
      }
    },
    {
      id: 'labs',
      title: 'Laboratories',
      icon: TestTube,
      description: 'Specialized billing services for clinical laboratories and diagnostic centers.',
      challenges: [
        'Complex lab billing codes and modifiers',
        'Medicare LCD and NCD compliance',
        'High-volume, low-dollar claims',
        'Pathology and molecular diagnostics'
      ],
      solutions: [
        'Lab-specific coding expertise',
        'LCD/NCD compliance checking',
        'High-volume processing automation',
        'Molecular diagnostics billing'
      ],
      results: {
        cleanClaimRate: '99.1%',
        arDays: '18',
        revenueIncrease: '22%'
      }
    },
    {
      id: 'specialty',
      title: 'Specialty Practices',
      icon: Heart,
      description: 'Tailored solutions for specialized medical practices with unique billing requirements.',
      specialties: [
        { name: 'Cardiology', icon: Heart },
        { name: 'Ophthalmology', icon: Eye },
        { name: 'Orthopedics', icon: Bone },
        { name: 'Neurology', icon: Brain },
        { name: 'Pediatrics', icon: Baby }
      ],
      challenges: [
        'Specialty-specific coding complexity',
        'High-value procedures and equipment',
        'Specialized insurance requirements',
        'Procedure-specific documentation'
      ],
      solutions: [
        'Specialty-trained coding staff',
        'High-dollar claim management',
        'Specialty payer expertise',
        'Documentation improvement programs'
      ],
      results: {
        cleanClaimRate: '98.7%',
        arDays: '21',
        revenueIncrease: '18%'
      }
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Revenue',
      description: 'Average 15-25% increase in collections through improved processes and reduced denials.'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Stay compliant with industry regulations and payer requirements across all specialties.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated teams with deep expertise in your specific industry and specialty.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of success across diverse healthcare organizations and specialties.'
    }
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Specialized revenue cycle management solutions tailored to the unique needs 
            of different healthcare sectors and medical specialties.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuss Your Industry</Link>
          </Button>
        </div>
      </section>

      {/* Medical Services Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            <img 
              src="/medical services.png" 
              alt="Medical Services Industries" 
              className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-blue/30 transition-all duration-500"></div>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {industries.map((industry, index) => (
              <div key={index} className="card-premium p-6 text-center group cursor-pointer relative overflow-hidden animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-medfox-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-lg animate-pulse"></div>
                <CardContent className="space-y-4 relative">
                  <div className={`w-16 h-16 ${index % 2 === 0 ? 'icon-bg-orange' : 'icon-bg-blue'} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <industry.icon className={`w-8 h-8 ${index % 2 === 0 ? 'text-medfox-orange' : 'text-medfox-blue'} group-hover:animate-pulse`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">{industry.title}</h3>
                  <p className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">{industry.description}</p>
                  <a href={`#${industry.id}`} className="inline-flex items-center text-medfox-orange hover:text-medfox-blue transition-all duration-300 text-sm font-medium group-hover:translate-x-1">
                    Learn More →
                  </a>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      {industries.map((industry, index) => (
        <section key={index} id={industry.id} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="w-20 h-20 icon-bg-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <industry.icon className="w-10 h-10 text-medfox-orange" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {industry.title}
              </h2>

              {/* Add q.png image only for Medical Clinics (first industry) */}
              {index === 0 && (
                <div className="w-full flex justify-center mb-8">
                  <div className="relative group max-w-2xl w-full">
                    <img 
                      src="/q.png" 
                      alt="Medical Clinics Solutions" 
                      className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
                  </div>
                </div>
              )}

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {industry.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Challenges */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Challenges</h3>
                  <ul className="space-y-3">
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Solutions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solutions</h3>
                  <ul className="space-y-3">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Results */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Typical Results</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-medfox-orange">{industry.results.cleanClaimRate}</div>
                      <div className="text-sm text-gray-600">Clean Claim Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-medfox-blue">{industry.results.arDays}</div>
                      <div className="text-sm text-gray-600">Average AR Days</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{industry.results.revenueIncrease}</div>
                      <div className="text-sm text-gray-600">Revenue Increase</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Specialties for Specialty Practices */}
            {industry.id === 'specialty' && industry.specialties && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  Specialties We Support
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {industry.specialties.map((specialty, specialtyIndex) => (
                    <Card key={specialtyIndex} className="p-4 text-center">
                      <CardContent className="space-y-3">
                        <div className="w-12 h-12 icon-bg-blue rounded-2xl flex items-center justify-center mx-auto">
                          <specialty.icon className="w-6 h-6 text-medfox-blue" />
                        </div>
                        <h4 className="font-medium text-gray-900 text-sm">{specialty.name}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center">
              <Button asChild>
                <Link href="/contact">Get Industry-Specific Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      ))}

      {/* Benefits Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Healthcare Providers Choose MedFoxRCM
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Industry expertise that delivers measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-medfox-blue/5 to-medfox-orange/5 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-medfox-orange/20 to-medfox-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-medfox-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-medfox-blue transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from healthcare providers across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-premium p-6 group relative overflow-hidden hover-lift card-glow-orange animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="space-y-4 relative">
                <div className="w-12 h-12 icon-bg-orange rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-gentle">
                  <Stethoscope className="w-6 h-6 text-medfox-orange group-hover:animate-heartbeat" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300 group-hover:animate-text-glow">Multi-Specialty Clinic</h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  "We helped increase our clean claim rate from 82% to 98.5% and reduce 
                  our AR days from 45 to 22. The ROI was immediate."
                </p>
                <div className="text-sm text-medfox-orange font-medium group-hover:text-medfox-blue transition-colors duration-300">
                  — Dr. Sarah Johnson, Sunrise Medical Clinic
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-medfox-blue rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.2s'}}></div>
              </CardContent>
            </div>

            <div className="card-premium p-6 group relative overflow-hidden hover-lift card-glow-mixed animate-slide-up" style={{animationDelay: '200ms'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="space-y-4 relative">
                <div className="w-12 h-12 icon-bg-green rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-gentle">
                  <TestTube className="w-6 h-6 text-green-600 group-hover:animate-wiggle" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300 group-hover:animate-text-glow">Regional Laboratory</h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  "The lab billing expertise is unmatched. They understand the 
                  complexities of molecular diagnostics and LCD compliance."
                </p>
                <div className="text-sm text-green-600 font-medium group-hover:text-medfox-blue transition-colors duration-300">
                  — Michael Chen, Lab Director
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-medfox-orange rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.4s'}}></div>
              </CardContent>
            </div>

            <div className="card-premium p-6 group relative overflow-hidden hover-lift card-glow-mixed animate-slide-up" style={{animationDelay: '400ms'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="space-y-4 relative">
                <div className="w-12 h-12 icon-bg-red rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-gentle">
                  <Heart className="w-6 h-6 text-red-600 group-hover:animate-heartbeat" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 group-hover:animate-text-glow">Cardiology Practice</h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  "Complex cardiac procedures require specialized billing knowledge. The 
                  cardiology expertise has significantly improved our reimbursements."
                </p>
                <div className="text-sm text-red-600 font-medium group-hover:text-medfox-orange transition-colors duration-300">
                  — Dr. Emily Rodriguez, Cardiology Associates
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.6s'}}></div>
              </CardContent>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Optimize Your Industry-Specific Revenue Cycle?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a customized solution designed for your healthcare sector's unique challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Industry Consultation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}