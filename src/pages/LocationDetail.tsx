import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, MapPin, CheckCircle, ChevronRight, PhoneCall, Mail } from 'lucide-react';
import { bangaloreAreas, formatLocationSlug } from '../data/locationsData';
import { servicesData } from '../data/servicesData';

export const LocationDetail: React.FC = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();

  const currentLocation = locationSlug 
    ? (bangaloreAreas.find(area => formatLocationSlug(area) === locationSlug) 
       || locationSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '))
    : '';

  if (!currentLocation) return <div className="min-h-screen bg-brand-light flex items-center justify-center">Loading...</div>;

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/balcony.jpeg" alt="Safety Nets Installation" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-primary/80" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-brand-accent/80 mb-6 font-medium tracking-wider">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/areas" className="hover:text-brand-accent transition-colors">Areas</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{currentLocation}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Safety Nets in {currentLocation}, Bangalore <br/>
            <span className="text-brand-accent text-3xl md:text-5xl">Complete Safety Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed mb-8 font-sans">
            For the family-centric {currentLocation}, we offer versatile safety netting. Protect your family from heights and keep your property better protected from birds with our experienced installation services.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+918074838518" className="bg-brand-accent text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2">
              <PhoneCall className="w-5 h-5" />
              Call +91 80748 38518
            </a>
            <a href="#services" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors inline-flex items-center gap-2">
              View local services
            </a>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">All-Weather-Performance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Nets that remain strong through intense heat waves and heavy monsoons.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Hygiene-First</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Total pigeon exclusion to prevent allergens and bird mess in utility areas.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Safe-Mesh-Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Small mesh sizes to protect toddlers and pets effectively from balcony risks.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Local-Presence</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Fast turnaround for independent houses and apartment projects in {currentLocation}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Overview Content */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-display font-bold text-slate-800 mb-6">
                Professional Safety Netting in {currentLocation} | Experienced Bird Exclusion
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Serving the growing residential corridor of {currentLocation}, we provide elite safety netting. Our invisible nets offer the suitable shield for your balconies, ensuring family safety and a better protected from birds environment.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: `${currentLocation} 10-Year Weather-Proof Shield`, desc: `Engineered for the developing landscape of ${currentLocation}, our UV-stabilized HDPE nets are built to survive the city’s varying weather. We provide humane exclusion, ensuring your balcony remains a safe and clean space for your children and pets.` },
                  { title: 'High-Impact Engineering for Gated Communities', desc: `In the new villa projects of ${currentLocation}, aesthetics and safety are priorities. We use industrial-grade SS hooks and high-tension netting to prevent sagging. Our gap-free installation stops pigeons from nesting in every corner of your property.` },
                  { title: `Local Expertise: KR Puram to ${currentLocation}`, desc: `We understand bird behavior in the East Bangalore belt. Our Invisible Shield technology provides strong safety without compromising your property's exterior look, making it ideal for modern gated communities and apartment complexes.` },
                  { title: 'Heat-Resistant UV Shielding', desc: `Our nets are infused with UV-stabilizers to prevent sun damage. Even after years of exposure, our netting remains rigid and break-proof, offering a permanent solution to the pigeon menace without any loss of strength.` },
                  { title: 'Express Setup and prompt Inspection', desc: `Bird-related health risks are on the rise. Our ${currentLocation} team offers free site inspections and prompt installation. We provide transparent, cost-conscious pricing with zero hidden costs, restoring hygiene to your home in just one day.` },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-secondary/20 flex items-center justify-center font-bold text-brand-primary shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/s1.jpeg" alt={`${currentLocation} Balcony Safety Nets`} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Verified team covering the area</p>
                      <p className="text-xs text-slate-500">{currentLocation}, Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid tailored for location */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-800 mb-4">
              Which safety net suits your home in {currentLocation}?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Pick by opening type: balcony, window, terrace, parking area, or duct. The fitting should follow the actual space, not a generic list of services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service, idx) => (
              <div key={idx} className="bg-brand-light rounded-2xl p-6 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-primary">
                    {currentLocation}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 mb-6 line-clamp-2">{service.tagline}</p>
                <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-accent transition-colors">
                  View details <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Estimate */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">What affects the cost in {currentLocation}?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Cost depends on opening size, net type, fixing surface, height, and access. Send a couple of photos and we can share a practical estimate for your home in {currentLocation}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918074838518" className="bg-brand-accent text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5" />
              Get an estimate
            </a>
            <a href="mailto:official@eversafesafetynets.com" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Prefer email?
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-20 bg-brand-light border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Locality pages close to {currentLocation}</h2>
          <p className="text-slate-600 mb-8">If your building is just outside {currentLocation}, one of these nearby areas may be a closer match.</p>
          
          <div className="flex flex-wrap gap-3">
            {bangaloreAreas.slice(0, 15).filter(area => area !== currentLocation).map((area, idx) => (
              <Link key={idx} to={`/areas/${formatLocationSlug(area)}`} className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:border-brand-primary hover:text-brand-primary transition-colors">
                {area}
              </Link>
            ))}
            <Link to="/areas" className="bg-brand-secondary/20 border border-brand-secondary px-4 py-2 rounded-lg text-sm font-bold text-brand-primary hover:bg-brand-secondary/30 transition-colors">
              All Bangalore areas
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
