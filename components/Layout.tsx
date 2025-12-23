import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Hammer, MapPin } from 'lucide-react';
import { BUSINESS_NAME, PHONE_NUMBER, SERVICE_AREA } from '../constants';
import { Button } from './Button';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Paul' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-slate-50">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-lg md:text-xl py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-2 font-semibold">
              <MapPin className="w-5 h-5" /> {SERVICE_AREA}
            </span>
            <span className="flex items-center gap-2 text-amber-400 font-bold">
              <Phone className="w-5 h-5" /> {PHONE_NUMBER}
            </span>
          </div>
          <div className="hidden sm:block">
            Licensed & Insured
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-64">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
              <img 
                src="/assets/Logo/transparent.png" 
                alt="Fix It San Clemente" 
                className="h-48 md:h-72 w-auto object-contain"
              />
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xl font-semibold transition-colors duration-200 ${
                      isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button variant="secondary" onClick={() => window.location.hash = '#contact'}>
                Get a Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4">
                <Button fullWidth variant="secondary" onClick={() => { closeMenu(); window.location.hash = '#contact'; }}>
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Paul Ries Handyman</h3>
            <p className="text-sm text-slate-400 mb-4">
              Providing trusted home repair and improvement services to San Clemente and surrounding coastal communities.
            </p>
            <div className="flex space-x-4">
               {/* Social Icons would go here */}
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Service Areas</h3>
            <p className="text-sm text-slate-400 mb-3">Proudly serving South Orange County:</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-400">
              <li>San Clemente</li>
              <li>Dana Point</li>
              <li>San Juan Capistrano</li>
              <li>Laguna Niguel</li>
              <li>Mission Viejo</li>
              <li>Laguna Hills</li>
              <li>Aliso Viejo</li>
              <li>& nearby areas</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {PHONE_NUMBER}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> San Clemente, CA 92672</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Paul Ries Handyman Services. All rights reserved.</p>
          <p>Built with React & Tailwind</p>
        </div>
      </footer>
    </div>
  );
};
