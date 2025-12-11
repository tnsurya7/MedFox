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
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted-background to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
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
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Hero Section Image */}
              <div className="mb-6">
                <div className="relative group">
                  <img 
                    src="/herosection.png" 
                    alt="RCM Consulting Services" 
                    className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-medfox-orange/10 via-transparent to-medfox-blue/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-blue/30 transition-all duration-500"></div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">RCM Performance</h3>
                    <div className="text-green-600 text-sm font-medium">Optimized</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">AR Days</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400 line-through">45</span>
                        <span className="text-sm font-semibold text-green-600">22</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Clean Claims</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400 line-through">85%</span>
                        <span className="text-sm font-semibold text-green-600">98%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Collections</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400 line-through">92%</span>
                        <span className="text-sm font-semibold text-green-600">97%</span>
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
      <section className="py-20 bg-muted-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
                  <div className="w-16 h-16 bg-gradient-to-br from-medfox-orange/20 to-medfox-orange/10 rounded-2xl flex items-center justify-center mx-auto">
                    <benefit.icon className="w-8 h-8 text-medfox-orange" />
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

      {/* Methodology Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to revenue cycle transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="card-premium p-6 text-center group hover-lift card-glow-orange animate-slide-up" style={{animationDelay: `${index * 150}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-medfox-orange/20 to-medfox-orange/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-bounce-gentle">
                    <step.icon className="w-8 h-8 text-medfox-orange group-hover:animate-heartbeat" />
                  </div>
                  <div className="text-sm font-bold text-medfox-orange uppercase tracking-wide group-hover:animate-text-glow">{step.phase}</div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-medfox-blue transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{step.description}</p>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-medfox-blue rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.3s'}}></div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white border-t border-gray-00">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end revenue cycle optimization solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-premium p-6 group hover-lift card-glow-blue animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-medfox-blue/20 to-medfox-blue/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-pulse-glow">
                    <TrendingUp className="w-6 h-6 text-medfox-blue group-hover:animate-wiggle" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-medfox-blue transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-all duration-300 hover:translate-x-1" style={{transitionDelay: `${featureIndex * 50}ms`}}>
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 group-hover:scale-110 group-hover:animate-heartbeat transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-medfox-orange rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.5s'}}></div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Improvement Section */}
      <section className="py-20 bg-white border-t border-gray-00">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Typical Performance Improvements
            </h2>

            {/* KPI Image */}
            <div className="w-full flex justify-center mb-8">
              <div className="relative group max-w-2xl w-full">
                <img 
                  src="/kpi.png" 
                  alt="Performance KPIs and Improvements" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
              </div>
            </div>

            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Real results from our revenue cycle optimization engagements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <Card key={index} className="card-premium group relative overflow-hidden animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/5 to-medfox-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">{kpi.name}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-red-600">Before:</span>
                      <span className="text-sm font-semibold text-red-700 bg-red-50 px-2 py-1 rounded-lg">{kpi.current}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-green-600">After:</span>
                      <span className="text-sm font-bold text-green-700 bg-green-50 px-2 py-1 rounded-lg">{kpi.target}</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <span className="text-sm font-bold text-medfox-blue bg-blue-50 px-3 py-1 rounded-full">{kpi.improvement}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Results</h3>
                  <p className="text-gray-600 mb-6">
                    Through our comprehensive RCM optimization program, we implemented 
                    process improvements, technology upgrades, and staff training that 
                    delivered significant performance improvements within 6 months.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      AR days: 19 days (63% improvement)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      Clean claim rate: 97% (24% improvement)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      Collection rate: 96% (8% improvement)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center p-6 bg-green-100 rounded-2xl">
                <div className="text-3xl font-bold text-gray-900 mb-2">$1.2M</div>
                <div className="text-gray-600">Additional annual revenue generated</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}