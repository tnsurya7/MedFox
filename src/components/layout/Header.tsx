'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.jpg" 
              alt="MedFoxRCM Logo" 
              className="w-32 h-32 rounded-xl object-contain hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 transition-colors ${pathname.startsWith('/services') ? 'text-medfox-orange font-semibold' : 'text-gray-900 hover:text-medfox-orange'}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-medfox-orange transition-colors" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-lg border border-gray-100 py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link href="/services/medical-billing" className="block px-4 py-3 text-sm text-gray-900 hover:bg-muted-background transition-colors">
                    <div className="font-medium">Medical Billing</div>
                    <div className="text-gray-600">Complete billing solutions</div>
                  </Link>
                  <Link href="/services/coding-audit" className="block px-4 py-3 text-sm text-gray-900 hover:bg-muted-background transition-colors">
                    <div className="font-medium">Coding & Audit</div>
                    <div className="text-gray-600">Certified medical coding</div>
                  </Link>
                  <Link href="/services/rcm-consulting" className="block px-4 py-3 text-sm text-gray-900 hover:bg-muted-background transition-colors">
                    <div className="font-medium">RCM Consulting</div>
                    <div className="text-gray-600">Revenue cycle optimization</div>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/industries" className={`transition-colors ${pathname === '/industries' ? 'text-medfox-orange font-semibold' : 'text-gray-900 hover:text-medfox-orange'}`}>
              Industries
            </Link>
            <Link href="/courses" className={`transition-colors ${pathname === '/courses' ? 'text-medfox-orange font-semibold' : 'text-gray-900 hover:text-medfox-orange'}`}>
              Courses
            </Link>
            <Link href="/about" className={`transition-colors ${pathname === '/about' ? 'text-medfox-orange font-semibold' : 'text-gray-900 hover:text-medfox-orange'}`}>
              About
            </Link>
            <Link href="/careers" className={`transition-colors ${pathname === '/careers' ? 'text-medfox-orange font-semibold' : 'text-gray-900 hover:text-medfox-orange'}`}>
              Careers
            </Link>
            <Link href="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-medfox-orange font-semibold' : 'text-gray-900 hover:text-medfox-orange'}`}>
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="blue" asChild>
              <Link href="/auth/login">Course Registration</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-800 hover:text-medfox-orange transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className={`font-medium ${pathname.startsWith('/services') ? 'text-medfox-orange font-semibold' : 'text-gray-900'}`}>Services</div>
                <Link href="/services/medical-billing" className="block pl-4 py-2 text-sm text-gray-600">
                  Medical Billing
                </Link>
                <Link href="/services/coding-audit" className="block pl-4 py-2 text-sm text-gray-600">
                  Coding & Audit
                </Link>
                <Link href="/services/rcm-consulting" className="block pl-4 py-2 text-sm text-gray-600">
                  RCM Consulting
                </Link>
              </div>
              <Link href="/industries" className={`block py-2 ${pathname === '/industries' ? 'text-medfox-orange font-semibold' : 'text-gray-900'}`}>
                Industries
              </Link>
              <Link href="/courses" className={`block py-2 ${pathname === '/courses' ? 'text-medfox-orange font-semibold' : 'text-gray-900'}`}>
                Courses
              </Link>
              <Link href="/about" className={`block py-2 ${pathname === '/about' ? 'text-medfox-orange font-semibold' : 'text-gray-900'}`}>
                About
              </Link>
              <Link href="/careers" className={`block py-2 ${pathname === '/careers' ? 'text-medfox-orange font-semibold' : 'text-gray-900'}`}>
                Careers
              </Link>
              <Link href="/contact" className={`block py-2 ${pathname === '/contact' ? 'text-medfox-orange font-semibold' : 'text-gray-900'}`}>
                Contact
              </Link>
              <div className="pt-4 space-y-2">
                <Button variant="blue" className="w-full" asChild>
                  <Link href="/auth/login">Course Registration</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}