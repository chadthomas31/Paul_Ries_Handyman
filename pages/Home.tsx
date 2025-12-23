import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { ContactForm } from '../components/ContactForm';
import { SERVICES, TESTIMONIALS, PHONE_NUMBER } from '../constants';
import { CheckCircle, Phone, ArrowRight, Hammer, Paintbrush, Wrench, Zap, Ruler, Truck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const IconMap = {
  Hammer, Paintbrush, Wrench, Zap, Ruler, Truck
};

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section - Full viewport height */}
      <section className="relative bg-slate-900 overflow-hidden h-screen min-h-[720px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-[70%_65%]"
            src="/assets/images/Paul and Deck Build .png" 
            alt="Paul Ries and his dog on a deck in San Clemente"
          />
          {/* Gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="md:w-2/3 lg:w-1/2 py-20">
            <div className="inline-flex items-center rounded-full bg-blue-600/30 px-5 py-3 text-2xl md:text-3xl font-semibold text-blue-100 border border-blue-400/30 mb-10 backdrop-blur-sm">
              <span>Serving San Clemente & South OC</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-10 drop-shadow-md leading-tight">
              Home Repairs Done <span className="text-amber-400">Right</span>.
            </h1>
            <p className="mt-4 text-3xl text-slate-100 max-w-3xl mb-12 leading-relaxed drop-shadow-sm font-semibold">
              I’m Paul. I fix the things big contractors ignore. Reliable, friendly, and local to San Clemente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" className="text-2xl px-12 py-5 shadow-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                Get a Free Quote
              </Button>
              <Button variant="outline" className="text-2xl px-12 py-5 border-white text-white hover:bg-white hover:text-slate-900 bg-white/10 backdrop-blur-sm">
                View Services
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6 text-white text-2xl md:text-3xl font-bold shadow-black drop-shadow-md">
              <span className="flex items-center gap-3"><CheckCircle className="text-green-400 h-6 w-6" /> Licensed & Insured</span>
              <span className="flex items-center gap-3"><CheckCircle className="text-green-400 h-6 w-6" /> 100% Satisfaction</span>
              <span className="flex items-center gap-3"><CheckCircle className="text-green-400 h-6 w-6" /> Local Resident</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="How I Can Help You" 
            subtitle="From the 'honey-do' list to urgent repairs, I handle it all with professional care."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = IconMap[service.iconName];
              return (
                <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-slate-100 group">
                  <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              See Full Service List <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Local Trust/About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative mb-12 lg:mb-0">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
              <img 
                src="/assets/images/Paul Jobsite Carhartt shit.png" 
                alt="Paul working on a framing project" 
                className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Your Neighbor in San Clemente</h2>
              <p className="text-lg text-slate-600 mb-6">
                I've lived in San Clemente for over 15 years. I know how the salt air affects our homes, and I know the importance of showing up on time.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Unlike big contracting firms, I don't have overhead or salesmen. When you call, you speak to Paul. When the work starts, Paul is there.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm text-slate-600 font-medium">Years Experience</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-slate-600 font-medium">Happy Clients</div>
                </div>
              </div>

              <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                Work With Paul
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What Neighbors Are Saying" light />
          
          {/* Quote Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-6">"{t.text}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Happy Clients Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative aspect-4/3 rounded-xl overflow-hidden shadow-lg border-4 border-slate-800">
                <img src="/assets/images/Paul and Homeowners.png" alt="Paul with happy homeowners" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-medium text-center">San Clemente Homeowners</p>
                </div>
            </div>
             <div className="group relative aspect-4/3 rounded-xl overflow-hidden shadow-lg border-4 border-slate-800">
                <img src="/assets/images/Paul_with_happy_clients.png" alt="Best Handyman Ever Sign" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-medium text-center">5-Star Reviews</p>
                </div>
            </div>
             <div className="group relative aspect-4/3 rounded-xl overflow-hidden shadow-lg border-4 border-slate-800">
                <img src="/assets/images/Paul with homeowners.png" alt="Custom Birdhouse Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-medium text-center">Custom Projects</p>
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Ready to Fix Your List?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Don't let small repairs turn into big problems. Fill out the form, or give me a call. I usually respond within a few hours.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Call or Text</p>
                    <p className="text-xl font-bold text-slate-900">{PHONE_NUMBER}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 ml-16">Mon - Fri: 8am - 6pm<br/>Sat: By Appointment</p>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-md bg-slate-200">
                 {/* Map Placeholder */}
                 <div className="w-full h-full flex items-center justify-center bg-slate-300">
                    <span className="text-slate-500 flex items-center gap-2"><Truck className="h-5 w-5"/> Serving South Orange County</span>
                 </div>
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <Truck className="h-4 w-4" /> Servicing San Clemente & Vicinity
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};