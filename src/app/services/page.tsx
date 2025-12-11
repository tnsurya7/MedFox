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
    { icon: DollarSign, value: '50$ M+', label: 'Revenue Processed' },
    { icon: Users, value: '500+', label: 'Healthcare Clients' }
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted-background to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
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
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/5 via-transparent to-medfox-orange/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 animate-card-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/10 to-medfox-blue/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="w-16 h-16 icon-bg-orange rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-medfox-orange group-hover:animate-pulse" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-medfox-orange transition-colors duration-300">{stat.value}</div>
                    <div className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive revenue cycle management solutions tailored to your practice's needs.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="card-premium group relative overflow-hidden hover-lift card-glow-mixed animate-fade-in-scale" style={{animationDelay: `${index * 200}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-medfox-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-medfox-blue/10 to-transparent rounded-full blur-2xl animate-pulse-glow"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-medfox-orange rounded-full animate-sparkle opacity-0 group-hover:opacity-100"></div>
                <CardContent className="p-0 relative">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-12 h-12 ${index % 2 === 0 ? 'icon-bg-orange' : 'icon-bg-blue'} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-gentle`}>
                          <service.icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-medfox-orange' : 'text-medfox-blue'} group-hover:animate-wiggle`} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300 group-hover:animate-text-glow">{service.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-6 group-hover:text-gray-900 transition-colors duration-300">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-all duration-300 hover:translate-x-2" style={{transitionDelay: `${featureIndex * 50}ms`}}>
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 group-hover:scale-125 group-hover:animate-heartbeat transition-transform duration-300" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href={service.href} className="inline-flex items-center text-medfox-orange hover:text-medfox-blue transition-all duration-300 font-medium group-hover:translate-x-4 hover:scale-105">
                        Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-3 group-hover:animate-wiggle transition-all duration-300" />
                      </Link>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 flex flex-col justify-center relative group-hover:bg-gradient-to-br group-hover:from-medfox-orange/5 group-hover:to-medfox-blue/5 transition-all duration-500">
                      <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-lg animate-pulse-glow"></div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-medfox-blue rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.5s'}}></div>
                      <h4 className="font-semibold text-gray-900 mb-4 group-hover:text-medfox-blue transition-colors duration-300">Benefits:</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-all duration-300 hover:translate-x-1" style={{transitionDelay: `${benefitIndex * 75}ms`}}>
                            <div className={`w-2 h-2 ${index % 2 === 0 ? 'bg-medfox-orange' : 'bg-medfox-blue'} rounded-full mr-3 flex-shrink-0 group-hover:scale-200 group-hover:animate-heartbeat transition-transform duration-300`} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Optimize Your Revenue Cycle?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let our experts analyze your current processes and show you how to improve 
            your financial performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
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