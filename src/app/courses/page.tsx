'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FadeInView } from '@/components/ui/FadeInView'
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock,
  MapPin,
  Monitor,
  GraduationCap,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react'

const courses = [
  {
    id: 'bmct',
    title: 'BMCT',
    subtitle: 'Classroom / Online Training',
    description: 'Medical coding is indispensable in healthcare, as it transforms procedures, diagnoses, and services into universal alphanumeric codes.',
    image: '/a.png',
    duration: '6 months',
    mode: ['Classroom', 'Online'],
    level: 'Beginner'
  },
  {
    id: 'cpc',
    title: 'CPC',
    subtitle: 'Classroom / Online Training',
    description: 'CPC courses are structured to equip individuals with the skills and knowledge required to accurately assign medical codes',
    image: '/b.png',
    duration: '4 months',
    mode: ['Classroom', 'Online'],
    level: 'Intermediate'
  },
  {
    id: 'amct',
    title: 'AMCT',
    subtitle: 'Classroom / Online Training',
    description: 'This course aims to provide a foundational understanding of medical coding principles while preparing participants for the CPC',
    image: '/c.png',
    duration: '3 months',
    mode: ['Classroom', 'Online'],
    level: 'Advanced'
  },
  {
    id: 'cpma',
    title: 'CPMA',
    subtitle: 'Classroom / Online Training',
    description: 'Certified Professional Medical Auditor. This certification is offered by the American Academy of Professional Coders (AAPC).',
    image: '/d.png',
    duration: '5 months',
    mode: ['Classroom', 'Online'],
    level: 'Professional'
  },
  {
    id: 'ipdrg',
    title: 'IPDRG',
    subtitle: 'Online Training',
    description: 'The IPDRG course is designed to provide healthcare professionals with a comprehensive understanding of the Inpatient Prospective Payment System (IPPS).',
    image: '/e.png',
    duration: '2 months',
    mode: ['Online'],
    level: 'Specialized'
  },
  {
    id: 'ccs',
    title: 'CCS',
    subtitle: 'Classroom / Online Training',
    description: 'The CCS (Certified Coding Specialist) course is designed to provide in-depth knowledge and practical skills required to pass the CCS certification exam.',
    image: '/f.png',
    duration: '6 months',
    mode: ['Classroom', 'Online'],
    level: 'Professional'
  },
  {
    id: 'em',
    title: 'E/M',
    subtitle: 'Online Training',
    description: 'The E&M course is designed to equip healthcare professionals with the skills necessary to accurately code and document evaluation and management services.',
    image: '/g.png',
    duration: '1 month',
    mode: ['Online'],
    level: 'Specialized'
  }
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Global Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-gray-50/30 to-white"></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-tr from-medfox-blue/2 via-transparent to-medfox-orange/2 animate-pulse" style={{ animationDuration: '8s' }}></div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50/50 py-20 relative overflow-hidden">
        {/* Premium Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-medfox-orange/20 to-medfox-orange/5 rounded-full animate-float delay-1000 blur-sm"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-medfox-blue/20 to-medfox-blue/5 rounded-full animate-pulse-glow delay-2000 blur-sm"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-medfox-blue/15 to-transparent rounded-full animate-glow delay-3000 blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              All Courses 🎉
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              MedFoxRCM provides training and 100% placement
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-medfox-blue/10 to-medfox-orange/10 rounded-full px-6 py-3 border border-medfox-blue/20 mb-12">
              <GraduationCap className="w-6 h-6 text-medfox-blue mr-2" />
              <span className="text-lg font-semibold text-gray-900">7 Courses Available</span>
            </div>

            {/* Top Image */}
            <div className="w-full flex justify-center">
              <div className="relative group max-w-4xl w-full">
                <img 
                  src="/top.jpg" 
                  alt="MedFoxRCM Training Programs" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-medfox-blue/10 via-transparent to-medfox-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-medfox-orange/30 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <FadeInView key={course.id} delay={index * 100} direction="up">
                <Card className="card-premium group relative overflow-hidden animate-card-hover h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/5 to-medfox-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-xl animate-pulse"></div>
                  
                  {/* Course Image */}
                  <div className="relative h-48 rounded-t-2xl overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={`${course.title} Course`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-medfox-blue">{course.level}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-medfox-orange/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <CardContent className="p-6 relative flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-medfox-orange transition-colors duration-300">
                        {course.title}
                      </h3>
                      <p className="text-sm text-medfox-blue font-medium mb-3">
                        {course.subtitle}
                      </p>
                      <p className="text-gray-700 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                        {course.description}
                      </p>
                    </div>

                    {/* Course Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-medfox-orange mr-2" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Monitor className="w-4 h-4 text-medfox-blue mr-2" />
                        <span>Mode: {course.mode.join(' / ')}</span>
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <Button 
                      asChild 
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                    >
                      <Link href="/auth/login">
                        Register Now
                        <TrendingUp className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MedFoxRCM Training?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive training programs designed for success in medical coding and healthcare revenue cycle management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: '100% Placement',
                description: 'Guaranteed job placement assistance for all successful graduates',
                color: 'medfox-orange'
              },
              {
                icon: Users,
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with years of experience',
                color: 'medfox-blue'
              },
              {
                icon: Monitor,
                title: 'Flexible Learning',
                description: 'Choose between classroom and online training options',
                color: 'green-600'
              },
              {
                icon: CheckCircle,
                title: 'Certification Ready',
                description: 'Comprehensive preparation for industry certifications',
                color: 'purple-600'
              }
            ].map((feature, index) => (
              <FadeInView key={index} delay={index * 100} direction="up">
                <div className="card-premium p-6 text-center group relative overflow-hidden animate-card-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-medfox-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-lg animate-pulse"></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color} group-hover:animate-pulse`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-medfox-orange transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-premium bg-gradient-to-br from-medfox-blue/5 to-medfox-orange/5 border-2 border-medfox-blue/20 group relative overflow-hidden animate-card-hover p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-medfox-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-medfox-orange transition-colors duration-300">
                Ready to Start Your Medical Coding Career?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto group-hover:text-gray-900 transition-colors duration-300">
                Join our comprehensive training programs and get 100% placement assistance. 
                Contact us today to learn more about our courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="group-hover:scale-105 transition-transform duration-300">
                  <Link href="/auth/login">
                    Register for Course
                    <Star className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="group-hover:scale-105 transition-transform duration-300">
                  <Link href="/contact">
                    Get Course Details
                    <BookOpen className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}