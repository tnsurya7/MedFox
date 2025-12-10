'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-gold rounded-lg flex items-center justify-center">
              <span className="text-primary-navy font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-primary-navy">MedFox</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-primary-navy hover:text-primary-gold transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-lg border border-gray-100 py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link href="/services/medical-billing" className="block px-4 py-3 text-sm text-primary-navy hover:bg-muted-background">
                    <div className="font-medium">Medical Billing</div>
                    <div className="text-gray-500">Complete billing solutions</div>
                  </Link>
                  <Link href="/services/coding-audit" className="block px-4 py-3 text-sm text-primary-navy hover:bg-muted-background">
                    <div className="font-medium">Coding & Audit</div>
                    <div className="text-gray-500">Certified medical coding</div>
                  </Link>
                  <Link href="/services/rcm-consulting" className="block px-4 py-3 text-sm text-primary-navy hover:bg-muted-background">
                    <div className="font-medium">RCM Consulting</div>
                    <div className="text-gray-500">Revenue cycle optimization</div>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/industries" className="text-primary-navy hover:text-primary-gold transition-colors">
              Industries
            </Link>
            <Link href="/about" className="text-primary-navy hover:text-primary-gold transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-primary-navy hover:text-primary-gold transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-primary-navy hover:text-primary-gold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login" className="text-primary-navy hover:text-primary-gold transition-colors">
              Sign In
            </Link>
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
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
                <div className="font-medium text-primary-navy">Services</div>
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
              <Link href="/industries" className="block py-2 text-primary-navy">
                Industries
              </Link>
              <Link href="/about" className="block py-2 text-primary-navy">
                About
              </Link>
              <Link href="/pricing" className="block py-2 text-primary-navy">
                Pricing
              </Link>
              <Link href="/contact" className="block py-2 text-primary-navy">
                Contact
              </Link>
              <div className="pt-4 space-y-2">
                <Link href="/auth/login" className="block py-2 text-primary-navy">
                  Sign In
                </Link>
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