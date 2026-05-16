import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { BUSINESS_INFO, SERVICE_AREAS } from '@/lib/constants'
import { createPhoneLink, createEmailLink } from '@/lib/utils'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{BUSINESS_INFO.name}</h3>
            <p className="text-slate-400 mb-4">
              {BUSINESS_INFO.tagline}
            </p>
            <div className="flex items-center space-x-2 text-trust-green-400 mb-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <p className="text-sm text-slate-400">
              {BUSINESS_INFO.yearsInBusiness}+ Years Experience
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Paul
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-start space-x-2 text-slate-400">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <span className="text-sm">
                Serving {BUSINESS_INFO.serviceRadius} radius from San Clemente
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href={createPhoneLink(BUSINESS_INFO.phone)}
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={createEmailLink(BUSINESS_INFO.email)}
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-slate-400">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <div>{BUSINESS_INFO.hours.weekday}</div>
                  <div>{BUSINESS_INFO.hours.saturday}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            <span className="block mt-1 text-slate-500 text-xs">
              Site by{" "}
              <a href="https://stackconsultingai.com" target="_blank" rel="noopener" className="hover:text-white underline-offset-2 hover:underline">Stack Consulting AI</a>
              {" · "}
              AI &amp; automation by{" "}
              <a href="https://strategicsync.com" target="_blank" rel="noopener" className="hover:text-white underline-offset-2 hover:underline">Strategic Sync</a>.
            </span>
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
