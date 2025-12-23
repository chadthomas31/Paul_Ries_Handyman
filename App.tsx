import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { ThankYou } from './pages/ThankYou';
import { DETAILED_SERVICES, PHONE_NUMBER } from './constants';
import { Paintbrush, Wrench, Hammer, Zap, Ruler, Truck, CheckCircle, Clock, DollarSign, ChevronDown, ChevronUp, Phone, ArrowRight } from 'lucide-react';
import { Button } from './components/Button';

const IconMap: Record<string, React.FC<{ className?: string }>> = {
  Paintbrush, Wrench, Hammer, Zap, Ruler, Truck
};

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 to-blue-800 py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-10 leading-tight">
              Complete Handyman Services
            </h1>
            <p className="text-3xl md:text-4xl text-blue-100 max-w-4xl mx-auto mb-12 font-semibold">
              From quick fixes to all-day projects, I handle the repairs and improvements that keep your home running smoothly.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white text-2xl md:text-3xl font-semibold">
              <span className="flex items-center gap-4 bg-white/10 px-6 py-4 rounded-full">
                <CheckCircle className="h-7 w-7 text-green-400" /> Licensed & Insured
              </span>
              <span className="flex items-center gap-4 bg-white/10 px-6 py-4 rounded-full">
                <Clock className="h-7 w-7 text-amber-400" /> Same-Week Availability
              </span>
              <span className="flex items-center gap-4 bg-white/10 px-6 py-4 rounded-full">
                <DollarSign className="h-7 w-7 text-green-400" /> Free Estimates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What I Can Do For You</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Click on any service below to see the full list of what's included
            </p>
          </div>

          <div className="space-y-6">
            {DETAILED_SERVICES.map((service) => {
              const Icon = IconMap[service.iconName] || Wrench;
              const isExpanded = expandedService === service.id;

              return (
                <div 
                  key={service.id} 
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  {/* Service Header - Clickable */}
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full p-6 flex items-start gap-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                          <p className="text-slate-600">{service.description}</p>
                        </div>
                        <div className="flex items-center gap-4 ml-4">
                          <div className="hidden sm:block text-right">
                            <div className="text-sm text-slate-500">Starting at</div>
                            <div className="font-bold text-blue-600">{service.priceRange}</div>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="h-6 w-6 text-slate-400" />
                          ) : (
                            <ChevronDown className="h-6 w-6 text-slate-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-slate-100">
                      <div className="pt-6 grid md:grid-cols-2 gap-8">
                        {/* Sub-services List */}
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            Services Included
                          </h4>
                          <ul className="space-y-2">
                            {service.subServices.map((subService, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-slate-600">
                                <span className="text-blue-600 mt-1">•</span>
                                {subService}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pricing & Time Info */}
                        <div className="space-y-6">
                          {service.image && (
                            <img 
                              src={service.image} 
                              alt={service.title}
                              className="w-full h-48 object-cover rounded-xl"
                            />
                          )}
                          
                          <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-slate-600 flex items-center gap-2">
                                <DollarSign className="h-5 w-5 text-green-600" />
                                Price Range
                              </span>
                              <span className="font-bold text-slate-900">{service.priceRange}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-600 flex items-center gap-2">
                                <Clock className="h-5 w-5 text-blue-600" />
                                Typical Time
                              </span>
                              <span className="font-bold text-slate-900">{service.timeEstimate}</span>
                            </div>
                            <div className="border-t border-slate-200 pt-4">
                              <p className="text-sm text-slate-500 italic">
                                * Final pricing depends on scope and materials needed. Free estimates provided.
                              </p>
                            </div>
                          </div>

                          <Button 
                            variant="secondary" 
                            fullWidth
                            onClick={() => window.location.hash = '#/contact'}
                          >
                            Get a Quote for {service.title}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Don't See Your Project?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These are just the most common services I provide. If you have something else in mind, just ask!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Honey-Do Lists</h3>
              <p className="text-slate-600">
                Got a list of small projects? I'll work through them efficiently in a single visit.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Custom Projects</h3>
              <p className="text-slate-600">
                Have a unique project? Let's discuss it. I love creative problem-solving.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Property Management</h3>
              <p className="text-slate-600">
                Managing rentals? I offer ongoing maintenance partnerships for property managers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Call or text me directly, or fill out the contact form for a free estimate. Most quotes within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/[^\d]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              <Phone className="h-5 w-5" />
              Call {PHONE_NUMBER}
            </a>
            <button 
              onClick={() => window.location.hash = '#/contact'}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const AboutPage = () => (
  <div className="py-20 max-w-7xl mx-auto px-4">
    {/* 3D Logo Hero */}
    <div className="text-center mb-16">
      <img 
        src="/assets/Logo/fix-it-logo-3d.png" 
        alt="Fix It San Clemente 3D Logo" 
        className="h-48 md:h-64 w-auto mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
      />
    </div>

    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
      <div className="relative mb-12 lg:mb-0">
        <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
        <img 
          src="/assets/images/paul-truck..png" 
          alt="Paul Ries with his work truck - Fix It San Clemente" 
          className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-6">Meet Paul Ries</h1>
        <p className="text-xl text-slate-600 mb-6">
          Your trusted local handyman serving San Clemente and South Orange County for over 15 years.
        </p>
        <p className="text-lg text-slate-600 mb-6">
          As a local resident, Paul understands the unique challenges that coastal living brings to home maintenance. From salt air corrosion to the effects of marine weather on homes, he's seen it all and knows how to fix it right.
        </p>
        <p className="text-lg text-slate-600 mb-8">
          When you call Paul, you're not getting a faceless corporation – you're getting a neighbor who takes pride in his work and stands behind every job. No job too small, no detail overlooked.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
            <div className="text-sm text-slate-600 font-medium">Years Experience</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
            <div className="text-sm text-slate-600 font-medium">Happy Clients</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="py-20 max-w-7xl mx-auto px-4">
     {/* Redirect logic or full page contact form would go here */}
     <Home /> 
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
