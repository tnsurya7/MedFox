import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { 
  Check, 
  Star, 
  ArrowRight,
  Users,
  Building,
  Zap,
  Shield
} from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small practices and clinics',
      price: '$299',
      period: 'per month',
      icon: Users,
      popular: false,
      features: [
        'Up to 500 claims per month',
        'Basic reporting and analytics',
        'Email support',
        'Standard claim submission',
        'Payment posting',
        'Denial management',
        'Patient billing',
        'HIPAA compliant platform'
      ],
      limitations: [
        'Limited to 2 providers',
        'Basic integrations only',
        'Standard support hours'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing practices',
      price: '$599',
      period: 'per month',
      icon: Building,
      popular: true,
      features: [
        'Up to 2,000 claims per month',
        'Advanced reporting and analytics',
        'Priority email and phone support',
        'Electronic claim submission',
        'Automated payment posting',
        'Advanced denial management',
        'Patient portal integration',
        'Prior authorization tracking',
        'Coding audit services',
        'Custom reporting',
        'API access'
      ],
      limitations: [
        'Limited to 10 providers'
      ]
    },
    {
      name: 'Enterprise',
      description: 'For large practices and health systems',
      price: 'Custom',
      period: 'pricing',
      icon: Zap,
      popular: false,
      features: [
        'Unlimited claims processing',
        'Real-time analytics dashboard',
        'Dedicated account manager',
        'White-label solutions',
        'Custom integrations',
        'Advanced workflow automation',
        'Multi-location support',
        'Custom reporting and BI',
        'RCM consulting services',
        'Staff training programs',
        '24/7 priority support',
        'SLA guarantees'
      ],
      limitations: []
    }
  ]

  const addOns = [
    {
      name: 'Coding Services',
      description: 'Professional medical coding by certified coders',
      price: '$2.50 per claim'
    },
    {
      name: 'Credentialing Services',
      description: 'Provider enrollment and credentialing management',
      price: '$150 per provider'
    },
    {
      name: 'Practice Management',
      description: 'Complete practice management software integration',
      price: '$99 per month'
    },
    {
      name: 'Patient Portal',
      description: 'Branded patient portal for online payments and communication',
      price: '$49 per month'
    }
  ]

  const faqs = [
    {
      question: 'What is included in the setup fee?',
      answer: 'Setup includes data migration, system configuration, staff training, and go-live support. Most clients are fully operational within 2-3 weeks.'
    },
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom pricing and solutions for health systems, large practices, and organizations with unique requirements.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide email, phone, and chat support during business hours for all plans. Enterprise clients receive 24/7 priority support with dedicated account management.'
    },
    {
      question: 'Is there a contract commitment?',
      answer: 'We offer both month-to-month and annual contracts. Annual contracts receive a 10% discount and additional benefits.'
    }
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted-background to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-navy mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your practice. All plans include our core billing services 
            with no hidden fees or long-term contracts required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Demo</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#calculator">Calculate Savings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-primary-gold shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-gold text-primary-navy text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                  <div className="w-16 h-16 bg-primary-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-primary-gold" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary-navy">{plan.name}</CardTitle>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-primary-navy">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-gray-600 ml-2">{plan.period}</span>}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-accent-green mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm font-medium text-gray-500 mb-2">Limitations:</p>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="text-sm text-gray-500">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    asChild
                  >
                    <Link href="/contact">
                      {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Add-On Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your revenue cycle with our additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="p-6">
                <CardContent className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-navy mb-2">{addon.name}</h3>
                    <p className="text-gray-600">{addon.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary-gold">{addon.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary-navy mb-4">
                Calculate Your Potential Savings
              </CardTitle>
              <p className="text-gray-600">
                See how much you could save by switching to MedFox
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted-background p-6 rounded-2xl">
                  <h3 className="font-semibold text-primary-navy mb-4">Current Situation</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>In-house billing costs:</span>
                      <span className="font-medium">$8,000/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Clean claim rate:</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average AR days:</span>
                      <span className="font-medium">45 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly revenue loss:</span>
                      <span className="font-medium text-red-600">$12,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-accent-green/10 p-6 rounded-2xl">
                  <h3 className="font-semibold text-primary-navy mb-4">With MedFox</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>MedFox service cost:</span>
                      <span className="font-medium">$599/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Clean claim rate:</span>
                      <span className="font-medium">98.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average AR days:</span>
                      <span className="font-medium">22 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly savings:</span>
                      <span className="font-medium text-green-600">$19,401</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center p-6 bg-primary-gold/10 rounded-2xl">
                <div className="text-3xl font-bold text-primary-navy mb-2">$232,812</div>
                <div className="text-gray-600">Potential annual savings</div>
              </div>

              <div className="text-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your Custom Analysis</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary-navy mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of healthcare providers who have improved their revenue cycle with MedFox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Demo</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/auth/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}