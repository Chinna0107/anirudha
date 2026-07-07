import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { useSEO } from '../hooks/useSEO';

export const Services: React.FC = () => {
  useSEO({
    title: 'Our Safety Netting & Invisible Grill Services',
    description: 'Browse our complete suite of architectural safety installations: double-knotted pigeon nets, heavy-duty child safety guards, bird spikes, cricket practice boxes, and customized invisible grills.',
    keywords: 'Balcony Safety Nets, Invisible Grills Catalog, Safety Nets Showcase, Bird Spikes Services'
  });
  const [activeTab, setActiveTab] = useState<'all' | 'bird-safety' | 'invisible-grill' | 'sports-industrial'>('all');

  const servicesItems = servicesData.map((service, index) => ({
    id: index + 1,
    title: service.title,
    category: service.category,
    categoryLabel: service.categoryLabel,
    img: service.image,
    desc: service.tagline,
    slug: service.slug
  }));

  const filteredItems = activeTab === 'all' 
    ? servicesItems 
    : servicesItems.filter(item => item.category === activeTab);

  return (
    <div className="flex flex-col w-full bg-slate-50/50">
      {/* 1. Header */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto flex flex-col gap-3 relative z-10">
          <span className="text-xs uppercase tracking-widest text-brand-accent font-extrabold font-display">Our Professional Services Portfolio</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Our Services Showcase
          </h1>
          <p className="font-sans text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Explore our professional selection of premium residential safety netting and invisible grill installations.
          </p>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          {/* Tab Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 ${activeTab === 'all' ? 'bg-brand-primary text-slate-900 shadow' : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-100/50'}`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('bird-safety')}
              className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 ${activeTab === 'bird-safety' ? 'bg-brand-primary text-slate-900 shadow' : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-100/50'}`}
            >
              Safety & Pigeon Nets
            </button>
            <button
              onClick={() => setActiveTab('invisible-grill')}
              className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 ${activeTab === 'invisible-grill' ? 'bg-brand-primary text-slate-900 shadow' : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-100/50'}`}
            >
              Invisible Grills
            </button>
            <button
              onClick={() => setActiveTab('sports-industrial')}
              className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 ${activeTab === 'sports-industrial' ? 'bg-brand-primary text-slate-900 shadow' : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-100/50'}`}
            >
              Sports & Industrial Nets
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-display font-bold text-brand-primary shadow uppercase tracking-wider max-w-[85%] truncate">
                    {item.categoryLabel}
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="font-display font-bold text-lg text-brand-primary leading-tight">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed line-clamp-2">{item.desc}</p>
                  
                  <div className="mt-auto flex flex-col xs:flex-row gap-2 pt-2">
                    <Link 
                      to={`/services/${item.slug}`} 
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-50 text-brand-primary hover:bg-brand-primary hover:text-white font-display font-bold text-xs rounded-xl transition-all border border-slate-100"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a 
                      href="tel:9550779976"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-brand-primary text-slate-900 hover:bg-slate-800 font-display font-bold text-xs rounded-xl transition-all shadow-sm"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
