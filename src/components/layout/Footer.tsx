import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/logo.jpg" 
                alt="MedFoxRCM Logo" 
                className="w-40 h-40 rounded-xl object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Revolutionizing revenue cycle management with comprehensive medical billing, 
              certified coding, and RCM consulting services.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-medfox-orange" />
                <a href="tel:+15551234567" className="text-gray-700 hover:text-medfox-orange transition-colors duration-300">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-medfox-orange" />
                <a href="mailto:info@medfoxrcm.com" className="text-gray-700 hover:text-medfox-orange transition-colors duration-300">
                  info@medfoxrcm.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-medfox-orange" />
                <span className="text-gray-700">123 Healthcare Ave, Medical City, MC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/medical-billing" className="text-gray-600 hover:text-medfox-orange transition-colors">
                  Medical Billing
                </Link>
              </li>
              <li>
                <Link href="/services/coding-audit" className="text-gray-600 hover:text-medfox-orange transition-colors">
                  Coding & Audit
                </Link>
              </li>
              <li>
                <Link href="/services/rcm-consulting" className="text-gray-600 hover:text-medfox-orange transition-colors">
                  RCM Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industries#clinics" className="text-gray-600 hover:text-medfox-orange transition-colors">
                  Medical Clinics
                </Link>
              </li>
              <li>
                <Link href="/industries#hospitals" className="text-gray-600 hover:text-medfox-orange transition-colors">
                  Hospitals
                </Link>
              </li>
              <li>
                <Link href="/industries#labs" className="text-gray-600 hover:text-medfox-orange transition-colors">
                  Laboratories
                </Link>
              </li>
              <li>
                <Link href="/industries#specialty" className="text-gray-600 hover:text-medfox-orange transition-colors">
                  Specialty Practices
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-medfox-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-medfox-orange transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-medfox-orange transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="text-gray-600 hover:text-medfox-orange transition-colors">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 MedFoxRCM. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <span className="text-gray-600 text-sm">
              Developed by{' '}
              <a 
                href="https://suryakumar-portfolio-chi.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 text-bold hover:text-medfox-orange transition-colors duration-300 underline"
              >
                Surya Kumar M
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}