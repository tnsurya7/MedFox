import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { 
  FileText, 
  CheckCircle, 
  TrendingUp, 
  ArrowRight,
  Shield,
  Clock,
  DollarSign,
  Users
} from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: 'Medical Billing',
      description: 'Complete end-to-end billing solutions from claim submission to payment posting.',
      icon: FileText,
      features: [
        'Claim submission and tracking',
        'Payment posting and reconciliation',
        'Denial management and appeals',
        'Patient billing and collections',
        'Insurance verification',
        'Prior authorization management'
      ],
      benefits: [
        'Increase clean claim rate to 98%+',
        'Reduce AR days by 40%',
        'Improve cash flow',
        'Reduce billing costs by 30%'
      ],
      href: '/services/medical-billing'
    },
    {
      title: 'Coding & Audit',
      description: 'Certified medical coding and comprehensive audits to ensure compliance and optimize revenue.',
      icon: CheckCircle,
      features: [
        'ICD-10, CPT, and HCPCS coding',
        'Coding audits and reviews',
        'Compliance monitoring',
        'Coder training and education',
        'Documentation improvement',
        'Risk assessment'
      ],
      benefits: [
        'Ensure coding accuracy',
        'Reduce compliance risks',
        'Optimize reimbursement',
        'Improve documentation quality'
      ],
      href: '/services/coding-audit'
    },
    {
      title: 'RCM Consulting',
      description: 'Strategic revenue cycle optimization to improve cash flow and streamline operations.',
      icon: TrendingUp,
      features: [
        'Revenue cycle assessment',
        'Process optimization',
        'Technology implementation',
        'Staff training and development',
        'Performance monitoring',
        'Strategic planning'
      ],
      benefits: [
        'Optimize revenue cycle performance',
        'Reduce operational costs',
        'Improve efficiency',
        'Enhance patient satisfaction'
      ],
      href: '/services/rcm-consulting'
    }
  ]

  const stats = [
    { icon: Shield, value: '98.5%', label: 'Clean Claim Rate' },
    { icon: Clock, value: '22', label: 'Average AR Days' },
    { icon: DollarSign, value: '$50M+', label: 'Revenue Processed' },
    { icon: Users, value: '500+', label: 'Healthcare Clients' }
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted-background to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-navy mb-6">
            Comprehensive RCM Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From medical billing to revenue cycle consulting, we provide end-to-end solutions 
            to maximize your practice's financial performance.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-gold" />
                </div>
                <div className="text-3xl font-bold text-primary-navy mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive revenue cycle management solutions tailored to your practice's needs.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-primary-gold/10 rounded-2xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary-gold" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary-navy">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-primary-navy mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="w-4 h-4 text-accent-green mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href={service.href} className="inline-flex items-center text-primary-gold hover:text-primary-navy transition-colors font-medium">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>

                    <div className="bg-muted-background p-8 flex flex-col justify-center">
                      <h4 className="font-semibold text-primary-navy mb-4">Benefits:</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-primary-gold rounded-full mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Revenue Cycle?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts analyze your current processes and show you how to improve 
            your financial performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}