import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { 
  FileText, 
  CheckCircle, 
  TrendingUp, 
  Clock,
  DollarSign,
  Shield,
  Users,
  BarChart3,
  ArrowRight
} from 'lucide-react'

export default function MedicalBillingPage() {
  const services = [
    {
      title: 'Claim Submission & Tracking',
      description: 'Electronic claim submission with real-time tracking and status updates.',
      features: ['EDI 837 electronic claims', 'Real-time claim tracking', 'Automated follow-up', 'Rejection management']
    },
    {
      title: 'Payment Posting & Reconciliation',
      description: 'Automated payment posting and detailed reconciliation processes.',
      features: ['ERA processing', 'Manual payment posting', 'Bank reconciliation', 'Variance analysis']
    },
    {
      title: 'Denial Management & Appeals',
      description: 'Comprehensive denial management with systematic appeal processes.',
      features: ['Denial analysis', 'Appeal letter generation', 'Peer-to-peer reviews', 'Trend reporting']
    },
    {
      title: 'Patient Billing & Collections',
      description: 'Professional patient billing with compassionate collection practices.',
      features: ['Patient statements', 'Payment plans', 'Collection calls', 'Bad debt management']
    },
    {
      title: 'Insurance Verification',
      description: 'Comprehensive insurance verification and eligibility checking.',
      features: ['Real-time eligibility', 'Benefit verification', 'Prior authorization', 'Coverage analysis']
    },
    {
      title: 'Reporting & Analytics',
      description: 'Detailed reporting and analytics to optimize your revenue cycle.',
      features: ['KPI dashboards', 'Custom reports', 'Trend analysis', 'Benchmarking']
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Revenue',
      description: 'Average 15-25% increase in collections',
      metric: '15-25%'
    },
    {
      icon: Clock,
      title: 'Reduce AR Days',
      description: 'Decrease accounts receivable aging',
      metric: '40% reduction'
    },
    {
      icon: CheckCircle,
      title: 'Improve Clean Claims',
      description: 'Higher first-pass claim acceptance',
      metric: '98.5% rate'
    },
    {
      icon: DollarSign,
      title: 'Lower Costs',
      description: 'Reduce billing operational expenses',
      metric: '30% savings'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Assessment & Setup',
      description: 'Comprehensive analysis of your current billing processes and system configuration.'
    },
    {
      step: '2',
      title: 'Data Migration',
      description: 'Secure transfer of patient data, claims history, and payer information.'
    },
    {
      step: '3',
      title: 'Staff Training',
      description: 'Training your team on new processes and our billing platform.'
    },
    {
      step: '4',
      title: 'Go-Live Support',
      description: 'Dedicated support during transition with real-time monitoring.'
    },
    {
      step: '5',
      title: 'Ongoing Optimization',
      description: 'Continuous monitoring and optimization of billing performance.'
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
                Medical Billing Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Complete end-to-end medical billing solutions that maximize reimbursements, 
                reduce denials, and accelerate cash flow for healthcare providers.
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
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-primary-navy">Billing Performance</h3>
                    <div className="text-green-600 text-sm font-medium">+22.5%</div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-primary-gold/20 to-accent-green/20 rounded-xl flex items-end justify-center">
                    <BarChart3 className="w-16 h-16 text-primary-gold mb-4" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Collections</div>
                      <div className="font-semibold text-primary-navy">$847K</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Clean Claims</div>
                      <div className="font-semibold text-primary-navy">98.5%</div>
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
              Why Choose Our Medical Billing Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results that improve your bottom line
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary-gold/10 rounded-2xl flex items-center justify-center mx-auto">
                    <benefit.icon className="w-8 h-8 text-primary-gold" />
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
              Comprehensive Billing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to optimize your revenue cycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary-gold/10 rounded-2xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary-gold" />
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

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamless transition with minimal disruption to your practice
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-primary-navy font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-navy mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="w-px h-16 bg-gray-200 ml-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Billing Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge tools and automation for maximum efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">HIPAA Compliant</h3>
              <p className="text-gray-300">
                Secure, encrypted systems that meet all HIPAA requirements for patient data protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">EHR Integration</h3>
              <p className="text-gray-300">
                Seamless integration with major EHR systems for streamlined workflow and data accuracy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-primary-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Analytics</h3>
              <p className="text-gray-300">
                Live dashboards and reporting tools to monitor performance and identify opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
            Ready to Optimize Your Medical Billing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of healthcare providers who have improved their revenue cycle with MedFox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
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