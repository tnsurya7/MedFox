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
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted-background to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-navy leading-tight">
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
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-primary-navy">Coding Accuracy</h3>
                    <div className="text-green-600 text-sm font-medium">99.2%</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">ICD-10 Accuracy</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-accent-green h-2 rounded-full" style={{width: '99%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">CPT Accuracy</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-gold h-2 rounded-full" style={{width: '98%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Compliance Score</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-navy h-2 rounded-full" style={{width: '100%'}}></div>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
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
                  <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto">
                    <benefit.icon className="w-8 h-8 text-accent-green" />
                  </div>
                  <div className="text-3xl font-bold text-primary-navy">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold text-primary-navy">{benefit.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Comprehensive Coding & Audit Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete coding solutions for accuracy and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-navy">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-accent-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Certified Coding Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team holds industry-leading certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="space-y-3">
                  <div className="w-16 h-16 bg-primary-gold/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-primary-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance & Risk Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of regulatory requirements and audit risks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">OIG Compliance</h3>
              <p className="text-gray-300">
                Ensure compliance with Office of Inspector General guidelines and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileSearch className="w-8 h-8 text-primary-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">RAC Audit Prep</h3>
              <p className="text-gray-300">
                Prepare for Recovery Audit Contractor audits with proactive reviews and documentation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-primary-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Assessment</h3>
              <p className="text-gray-300">
                Identify and mitigate coding and compliance risks before they become issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
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
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}