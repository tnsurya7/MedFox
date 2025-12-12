'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { FadeInView } from '@/components/ui/FadeInView'
import { 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Award,
  Coffee,
  Briefcase,
  GraduationCap,
  Mail
} from 'lucide-react'

interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  salary: string
  description: string
  requirements: string[]
  benefits: string[]
}

const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Senior Medical Coder',
    department: 'Coding & Audit',
    location: 'Remote',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$55,000 - $70,000',
    description: 'Join our coding team to ensure accurate medical coding and compliance. You\'ll work with healthcare providers to optimize their coding processes and maximize reimbursements.',
    requirements: [
      'CPC or CCS certification required',
      '3+ years of medical coding experience',
      'Proficiency in ICD-10, CPT, and HCPCS coding',
      'Experience with EMR systems',
      'Strong attention to detail and analytical skills'
    ],
    benefits: [
      'Remote work flexibility',
      'Comprehensive health insurance',
      'Professional development opportunities',
      'Certification maintenance support'
    ]
  },
  {
    id: '2',
    title: 'Revenue Cycle Analyst',
    department: 'RCM Consulting',
    location: 'Medical City, MC',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$50,000 - $65,000',
    description: 'Analyze revenue cycle performance and identify opportunities for improvement. Work directly with healthcare clients to implement best practices and optimize their financial operations.',
    requirements: [
      'Bachelor\'s degree in Healthcare Administration or related field',
      '2+ years of revenue cycle experience',
      'Strong analytical and problem-solving skills',
      'Experience with healthcare billing software',
      'Excellent communication and presentation skills'
    ],
    benefits: [
      'Hybrid work options',
      'Performance-based bonuses',
      '401(k) with company match',
      'Professional conference attendance'
    ]
  },
  {
    id: '3',
    title: 'Medical Billing Specialist',
    department: 'Medical Billing',
    location: 'Remote',
    type: 'Full-time',
    experience: '1-3 years',
    salary: '$40,000 - $55,000',
    description: 'Process medical claims, handle denials and appeals, and ensure timely reimbursement for our healthcare clients. Great opportunity for career growth in medical billing.',
    requirements: [
      'High school diploma or equivalent',
      '1+ years of medical billing experience',
      'Knowledge of insurance processes and regulations',
      'Proficiency in billing software and EMR systems',
      'Strong organizational and time management skills'
    ],
    benefits: [
      'Full remote work',
      'Flexible scheduling',
      'Health and dental insurance',
      'Paid training and certification programs'
    ]
  },
  {
    id: '4',
    title: 'Business Development Manager',
    department: 'Sales & Marketing',
    location: 'Medical City, MC',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$70,000 - $90,000 + Commission',
    description: 'Drive business growth by identifying and developing relationships with healthcare providers. Lead sales initiatives and represent MedFoxRCM at industry events.',
    requirements: [
      'Bachelor\'s degree in Business or Healthcare',
      '5+ years of B2B sales experience',
      'Healthcare industry knowledge preferred',
      'Strong networking and relationship-building skills',
      'Proven track record of meeting sales targets'
    ],
    benefits: [
      'Uncapped commission structure',
      'Company car allowance',
      'Comprehensive benefits package',
      'Leadership development programs'
    ]
  }
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null)
  const [showApplication, setShowApplication] = useState(false)

  const handleApply = (job: JobPosition) => {
    setSelectedJob(job)
    setShowApplication(true)
  }

  if (showApplication && selectedJob) {
    return (
      <div className="min-h-screen bg-muted-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Apply for {selectedJob.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{selectedJob.department} • {selectedJob.location}</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setShowApplication(false)}
                >
                  Back to Jobs
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-blue-900">How to Apply</h3>
                  </div>
                  <p className="text-blue-800 mb-4">
                    To apply for this position, please send your resume and cover letter to:
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-blue-200">
                    <p className="font-medium text-blue-900">
                      <a href="mailto:medfoxrcm@gmail.com" className="hover:underline">
                        contact@medfoxrcm.com
                      </a>
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                      Subject: Application for {selectedJob.title}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Job Description</h3>
                  <p className="text-gray-700">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-medfox-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-medfox-blue to-medfox-blue/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build your career with MedFoxRCM and help transform healthcare revenue cycle management. 
              We're looking for passionate professionals to join our growing team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-medfox-orange" />
                <span>Remote-First Culture</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-medfox-orange" />
                <span>Growth Opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-medfox-orange" />
                <span>Comprehensive Benefits</span>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>

            {/* Code Image */}
            <div className="w-full flex justify-center mb-8">
              <div className="relative group max-w-2xl w-full">
                <img 
                  src="/code.jpeg" 
                  alt="Team Environment at MedFoxRCM" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
              </div>
            </div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive, grow, and make a meaningful impact in healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInView delay={0}>
              <div className="card-premium p-8 text-center group relative overflow-hidden animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-lg animate-pulse"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-16 h-16 icon-bg-orange rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Users className="w-8 h-8 text-medfox-orange group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-medfox-orange transition-colors duration-300">Remote-First</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Work from anywhere with flexible schedules and a strong remote culture that prioritizes work-life balance.
                  </p>
                </CardContent>
              </div>
            </FadeInView>

            <FadeInView delay={200}>
              <div className="card-premium p-8 text-center group relative overflow-hidden animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-lg animate-pulse"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-16 h-16 icon-bg-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <GraduationCap className="w-8 h-8 text-green-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Professional Growth</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Continuous learning opportunities, certification support, and clear career advancement paths.
                  </p>
                </CardContent>
              </div>
            </FadeInView>

            <FadeInView delay={400}>
              <div className="card-premium p-8 text-center group relative overflow-hidden animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-medfox-blue/10 to-transparent rounded-full blur-lg animate-pulse"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-16 h-16 icon-bg-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Award className="w-8 h-8 text-medfox-blue group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-medfox-blue transition-colors duration-300">Competitive Benefits</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Comprehensive health insurance, 401(k) matching, and performance-based bonuses.
                  </p>
                </CardContent>
              </div>
            </FadeInView>

            <FadeInView delay={600}>
              <div className="card-premium p-8 text-center group relative overflow-hidden animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-lg animate-pulse"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-16 h-16 icon-bg-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <TrendingUp className="w-8 h-8 text-purple-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Innovation Focus</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Work with cutting-edge technology and contribute to innovative solutions in healthcare.
                  </p>
                </CardContent>
              </div>
            </FadeInView>

            <FadeInView delay={800}>
              <div className="card-premium p-8 text-center group relative overflow-hidden animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-lg animate-pulse"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-16 h-16 icon-bg-orange rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Coffee className="w-8 h-8 text-medfox-orange group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-medfox-orange transition-colors duration-300">Great Culture</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Join a supportive team that values collaboration, diversity, and making a positive impact.
                  </p>
                </CardContent>
              </div>
            </FadeInView>

            <FadeInView delay={1000}>
              <div className="card-premium p-8 text-center group relative overflow-hidden animate-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-lg animate-pulse"></div>
                <CardContent className="space-y-4 relative">
                  <div className="w-16 h-16 icon-bg-red rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Heart className="w-8 h-8 text-red-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">Meaningful Work</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Help healthcare providers focus on patient care by optimizing their revenue cycle operations.
                  </p>
                </CardContent>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role to advance your career in healthcare technology.
            </p>
          </div>

          <div className="space-y-6">
            {jobPositions.map((job, index) => (
              <FadeInView key={job.id} delay={index * 100}>
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-medfox-orange transition-colors">
                            {job.title}
                          </h3>
                          <span className="px-3 py-1 bg-medfox-orange/10 text-medfox-orange rounded-full text-sm font-medium">
                            {job.department}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-medfox-orange" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-medfox-blue" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Briefcase className="w-4 h-4 text-green-600" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-purple-600" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 lg:mb-0">
                          {job.description}
                        </p>
                      </div>
                      
                      <div className="lg:ml-8 flex-shrink-0">
                        <Button 
                          onClick={() => handleApply(job)}
                          className="w-full lg:w-auto"
                        >
                          View Details & Apply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Services Image */}
            <FadeInView direction="left">
              <div className="relative group">
                <img 
                  src="/services.png" 
                  alt="MedFoxRCM Services" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
              </div>
            </FadeInView>
            
            {/* Content */}
            <FadeInView direction="right">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Don't See the Right Role?
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  We're always looking for talented individuals to join our team. 
                  Send us your resume and let us know how you'd like to contribute to MedFoxRCM.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <a href="mailto:medfoxrcm@gmail.com">
                    Send Your Resume
                  </a>
                </Button>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  )
}