import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { 
  TrendingUp, 
  BarChart3, 
  Settings,
  Users,
  Target,
  Lightbulb,
  CheckCircle,
  Clock,
  DollarSign,
  Shield
} from 'lucide-react'

export default function RCMConsultingPage() {
  const services = [
    {
      title: 'Revenue Cycle Assessment',
      description: 'Comprehensive analysis of your current revenue cycle performance.',
      features: ['Process mapping', 'Performance benchmarking', 'Gap analysis', 'ROI projections']
    },
    {
      title: 'Process Optimization',
      description: 'Streamline workflows and eliminate inefficiencies in your revenue cycle.',
      features: ['Workflow redesign', 'Automation opportunities', 'Staff optimization', 'Technology integration']
    },
    {
      title: 'Technology Implementation',
      description: 'Strategic technology planning and implementation for RCM systems.',
      features: ['System selection', 'Implementation planning', 'Integration support', 'Change management']
    },
    {
      title: 'Performance Monitoring',
      description: 'Ongoing monitoring and optimization of revenue cycle KPIs.',
      features: ['KPI dashboards', 'Trend analysis', 'Benchmarking', 'Action plans']
    },
    {
      title: 'Staff Training & Development',
      description: 'Comprehensive training programs for your revenue cycle team.',
      features: ['Skills assessment', 'Training programs', 'Certification support', 'Ongoing education']
    },
    {
      title: 'Strategic Planning',
      description: 'Long-term strategic planning for revenue cycle excellence.',
      features: ['Strategic roadmaps', 'Goal setting', 'Resource planning', 'Success metrics']
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Revenue',
      description: 'Average revenue increase through optimization',
      metric: '20-35%'
    },
    {
      icon: Clock,
      title: 'Reduce Cycle Time',
      description: 'Faster claim processing and payment collection',
      metric: '45% faster'
    },
    {
      icon: DollarSign,
      title: 'Lower Costs',
      description: 'Operational cost reduction through efficiency',
      metric: '25% savings'
    },
    {
      icon: Shield,
      title: 'Improve Quality',
      description: 'Enhanced accuracy and compliance scores',
      metric: '99% accuracy'
    }
  ]

  const methodology = [
    {
      phase: 'Assess',
      title: 'Current State Analysis',
      description: 'Comprehensive evaluation of existing processes, technology, and performance.',
      icon: BarChart3
    },
    {
      phase: 'Design',
      title: 'Future State Planning',
      description: 'Design optimized workflows and identify technology and process improvements.',
      icon: Lightbulb
    },
    {
      phase: 'Implement',
      title: 'Solution Deployment',
      description: 'Execute the transformation plan with change management and training support.',
      icon: Settings
    },
    {
      phase: 'Optimize',
      title: 'Continuous Improvement',
      description: 'Monitor performance and continuously optimize for sustained results.',
      icon: Target
    }
  ]

  const kpis = [
    { name: 'Days in AR', current: '45 days', target: '22 days', improvement: '51% reduction' },
    { name: 'Clean Claim Rate', current: '85%', target: '98%', improvement: '15% increase' },
    { name: 'Collection Rate', current: '92%', target: '97%', improvement: '5% increase' },
    { name: 'Cost to Collect', current: '$8.50', target: '$4.25', improvement: '50% reduction' }
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted-background to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-navy leading-tight">
                RCM Consulting Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Strategic revenue cycle optimization to improve cash flow, reduce costs, 
                and streamline operations for sustainable financial performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Assessment</Link>
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
                    <h3 className="font-semibold text-primary-navy">RCM Performance</h3>
                    <div className="text-green-600 text-sm font-medium">Optimized</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">AR Days</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400 line-through">45</span>
                        <span className="text-sm font-semibold text-accent-green">22</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Clean Claims</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400 line-through">85%</span>
                        <span className="text-sm font-semibold text-accent-green">98%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Collections</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400 line-through">92%</span>
                        <span className="text-sm font-semibold text-accent-green">97%</span>
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
              Transform Your Revenue Cycle Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven consulting methodology that delivers measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto">
                    <benefit.icon className="w-8 h-8 text-primary-navy" />
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

      {/* Methodology Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Our Proven Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to revenue cycle transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary-gold/10 rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-primary-gold" />
                  </div>
                  <div className="text-sm font-bold text-primary-gold uppercase tracking-wide">{step.phase}</div>
                  <h3 className="text-xl font-semibold text-primary-navy">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Comprehensive Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end revenue cycle optimization solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary-navy/10 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-navy" />
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

      {/* KPI Improvement Section */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Typical Performance Improvements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from our revenue cycle optimization engagements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-4">{kpi.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Before:</span>
                      <span className="text-sm text-gray-400">{kpi.current}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">After:</span>
                      <span className="text-sm font-semibold text-primary-gold">{kpi.target}</span>
                    </div>
                    <div className="pt-2 border-t border-white/20">
                      <span className="text-sm font-medium text-accent-green">{kpi.improvement}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Success Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we transformed a multi-specialty practice's revenue cycle
            </p>
          </div>

          <Card className="p-8 lg:p-12">
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary-navy mb-4">The Challenge</h3>
                  <p className="text-gray-600 mb-6">
                    A 15-provider multi-specialty practice was struggling with high AR days, 
                    low clean claim rates, and increasing operational costs. Manual processes 
                    and outdated technology were creating bottlenecks throughout their revenue cycle.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      AR days: 52 days
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      Clean claim rate: 78%
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      Collection rate: 89%
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary-navy mb-4">The Results</h3>
                  <p className="text-gray-600 mb-6">
                    Through our comprehensive RCM optimization program, we implemented 
                    process improvements, technology upgrades, and staff training that 
                    delivered significant performance improvements within 6 months.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-3" />
                      AR days: 19 days (63% improvement)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-3" />
                      Clean claim rate: 97% (24% improvement)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-3" />
                      Collection rate: 96% (8% improvement)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center p-6 bg-accent-green/10 rounded-2xl">
                <div className="text-3xl font-bold text-primary-navy mb-2">$1.2M</div>
                <div className="text-gray-600">Additional annual revenue generated</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
            Ready to Transform Your Revenue Cycle?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a comprehensive assessment of your revenue cycle and discover optimization opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Assessment</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/pricing">View Consulting Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}