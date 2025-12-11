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
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted-background to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
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
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Billing Image */}
              <div className="mb-6">
                <div className="relative group">
                  <img 
                    src="/billing.png" 
                    alt="Medical Billing Services" 
                    className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Billing Performance</h3>
                    <div className="text-green-600 text-sm font-medium">+22.5%</div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-medfox-orange/20 to-green-500/20 rounded-xl flex items-end justify-center">
                    <BarChart3 className="w-16 h-16 text-medfox-orange mb-4" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Collections</div>
                      <div className="font-semibold text-gray-900">$847K</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Clean Claims</div>
                      <div className="font-semibold text-gray-900">98.5%</div>
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
              Why Choose Our Medical Billing Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results that improve your bottom line
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-premium text-center p-6 group hover-lift card-glow-orange animate-fade-in-scale" style={{animationDelay: `${index * 150}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-medfox-orange/20 to-medfox-orange/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-bounce-gentle">
                    <benefit.icon className="w-8 h-8 text-medfox-orange group-hover:animate-wiggle" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300 animate-text-glow">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-medfox-blue transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{benefit.description}</p>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-medfox-blue rounded-full animate-sparkle opacity-0 group-hover:opacity-100"></div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Billing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to optimize your revenue cycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-premium p-6 group hover-lift card-glow-blue animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-medfox-blue/20 to-medfox-blue/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-pulse-glow">
                    <FileText className="w-6 h-6 text-medfox-blue group-hover:animate-heartbeat" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-medfox-blue transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-all duration-300 hover:translate-x-1" style={{transitionDelay: `${featureIndex * 50}ms`}}>
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 group-hover:scale-110 group-hover:animate-wiggle transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-medfox-orange rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.3s'}}></div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Seamless transition with minimal disruption to your practice
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-medfox-orange to-medfox-orange/80 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
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
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Advanced Billing Technology
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cutting-edge tools and automation for maximum efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-medfox-blue/5 to-medfox-orange/5 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-medfox-orange/20 to-medfox-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-medfox-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-medfox-blue transition-colors duration-300">HIPAA Compliant</h3>
              <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                Secure, encrypted systems that meet all HIPAA requirements for patient data protection.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-medfox-blue/5 to-medfox-orange/5 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-medfox-blue/20 to-medfox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-medfox-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-medfox-blue transition-colors duration-300">EHR Integration</h3>
              <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                Seamless integration with major EHR systems for streamlined workflow and data accuracy.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/5 to-green-500/5 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">Real-time Analytics</h3>
              <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                Live dashboards and reporting tools to monitor performance and identify opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Optimize Your Medical Billing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of healthcare providers who have improved their revenue cycle with MedFoxRCM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
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