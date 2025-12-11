import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { 
  CheckCircle, 
  Shield, 
  Award,
  FileSearch,
  BookOpen,
  TrendingUp,
  Users,
  AlertTriangle
} from 'lucide-react'

export default function CodingAuditPage() {
  const services = [
    {
      title: 'Medical Coding Services',
      description: 'Certified professional coders for accurate ICD-10, CPT, and HCPCS coding.',
      features: ['ICD-10-CM/PCS coding', 'CPT/HCPCS coding', 'DRG assignment', 'Modifier application']
    },
    {
      title: 'Coding Audits',
      description: 'Comprehensive coding audits to ensure accuracy and compliance.',
      features: ['Pre-bill audits', 'Post-bill audits', 'Focused reviews', 'Compliance assessments']
    },
    {
      title: 'Documentation Improvement',
      description: 'Clinical documentation improvement to support accurate coding.',
      features: ['CDI reviews', 'Query management', 'Provider education', 'Documentation templates']
    },
    {
      title: 'Compliance Monitoring',
      description: 'Ongoing compliance monitoring and risk assessment.',
      features: ['OIG compliance', 'RAC audit preparation', 'Risk assessments', 'Policy development']
    },
    {
      title: 'Coder Training',
      description: 'Professional development and training for your coding staff.',
      features: ['Certification prep', 'Continuing education', 'Specialty training', 'Best practices']
    },
    {
      title: 'Quality Assurance',
      description: 'Systematic quality assurance programs for coding accuracy.',
      features: ['QA protocols', 'Error tracking', 'Performance metrics', 'Improvement plans']
    }
  ]

  const certifications = [
    { name: 'CCS', description: 'Certified Coding Specialist' },
    { name: 'CPC', description: 'Certified Professional Coder' },
    { name: 'RHIA', description: 'Registered Health Information Administrator' },
    { name: 'RHIT', description: 'Registered Health Information Technician' },
    { name: 'CCA', description: 'Certified Coding Associate' },
    { name: 'COC', description: 'Certified Outpatient Coder' }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Reduce Compliance Risk',
      description: 'Minimize audit risk and regulatory penalties',
      metric: '95% reduction'
    },
    {
      icon: TrendingUp,
      title: 'Improve Accuracy',
      description: 'Increase coding accuracy and documentation quality',
      metric: '99.2% accuracy'
    },
    {
      icon: Award,
      title: 'Optimize Reimbursement',
      description: 'Maximize appropriate reimbursement through accurate coding',
      metric: '12% increase'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access to certified coding professionals',
      metric: '24/7 support'
    }
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted-background to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Medical Coding & Audit Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Certified medical coding and comprehensive audits to ensure compliance, 
                optimize reimbursement, and reduce regulatory risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Code and Audit Image */}
              <div className="mb-6">
                <div className="relative group">
                  <img 
                    src="/code and audit.png" 
                    alt="Medical Coding and Audit Services" 
                    className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-medfox-blue/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-green-500/30 transition-all duration-500"></div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Coding Accuracy</h3>
                    <div className="text-green-600 text-sm font-medium">99.2%</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">ICD-10 Accuracy</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '99%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">CPT Accuracy</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-medfox-orange h-2 rounded-full" style={{width: '98%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Compliance Score</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-medfox-blue h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Coding & Audit Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified expertise that ensures accuracy and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 icon-bg-green rounded-2xl flex items-center justify-center mx-auto">
                    <benefit.icon className="w-8 h-8 text-medfox-blue" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Coding & Audit Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete coding solutions for accuracy and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-premium p-6 group hover-lift card-glow-mixed animate-slide-up" style={{animationDelay: `${index * 120}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-medfox-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-12 h-12 icon-bg-green rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-pulse-glow">
                    <CheckCircle className="w-6 h-6 text-medfox-blue group-hover:animate-heartbeat" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-all duration-300 hover:translate-x-1" style={{transitionDelay: `${featureIndex * 60}ms`}}>
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 group-hover:scale-110 group-hover:animate-wiggle transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-medfox-orange rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.4s'}}></div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certified Coding Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team holds industry-leading certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card-premium p-6 text-center group hover-lift card-glow-orange animate-fade-in-scale" style={{animationDelay: `${index * 100}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <CardContent className="space-y-3 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-medfox-orange/20 to-medfox-orange/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-bounce-gentle">
                    <Award className="w-8 h-8 text-medfox-orange group-hover:animate-wiggle" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300 animate-text-glow">{cert.name}</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{cert.description}</p>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.2s'}}></div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Risk Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of regulatory requirements and audit risks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-medfox-orange/20 to-medfox-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-medfox-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">OIG Compliance</h3>
              <p className="text-gray-600">
                Ensure compliance with Office of Inspector General guidelines and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-medfox-blue/20 to-medfox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileSearch className="w-8 h-8 text-medfox-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">RAC Audit Prep</h3>
              <p className="text-gray-600">
                Prepare for Recovery Audit Contractor audits with proactive reviews and documentation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Assessment</h3>
              <p className="text-gray-600">
                Identify and mitigate coding and compliance risks before they become issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ensure Coding Accuracy & Compliance
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with certified coding professionals to optimize your revenue and reduce risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Audit</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}