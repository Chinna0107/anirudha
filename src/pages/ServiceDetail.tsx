import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import { CheckCircle2, PhoneCall, HelpCircle, FileText, ChevronRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { TextReveal } from '../components/ui/TextReveal';
import { MagneticButton } from '../components/ui/MagneticButton';
import Tilt from 'react-parallax-tilt';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  useSEO({
    title: service ? `Premium ${service.title} Installation` : 'Safety Services',
    description: service ? `${service.tagline} Explore material standards, anti-UV capabilities, and structural high-rise fastening specifications of our custom netting.` : 'Explore professional safety netting and invisible grill solutions from Aniruddaya Enterprises.',
    keywords: service ? `${service.categoryLabel}, ${service.title}, Balcony Netting, Safety Net Installer` : 'Balcony Netting, Invisible Grills'
  });

  if (!service) {
    return (
      <div className="max-w-xl mx-auto py-24 px-6 text-center flex flex-col items-center">
        <span className="text-4xl mb-4">⚠️</span>
        <h2 className="font-display font-extrabold text-2xl text-brand-primary mb-2">Service Not Found</h2>
        <p className="text-sm text-slate-500 font-sans mb-6">
          The requested safety netting or invisible grill installation service doesn't exist or is currently undergoing sitemap updates.
        </p>
        <Link to="/">
          <Button variant="primary">Back to Home</Button>
        </Link>
      </div>
    );
  }

  const triggerWhatsAppWithService = () => {
    const textMessage = `Hello Aniruddaya Enterprises, I am visiting your website and would like to get more information, view samples, or schedule a free site inspection for:\n` +
      `- Service: ${service.title}\n\n` +
      `Please contact me to arrange details. Thank you!`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+919550779976&text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-slate-50/40">
      
      {/* Breadcrumb Bar */}
      <div className="bg-slate-100/60 border-b border-slate-200/50 py-3.5 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 text-xs text-slate-500 font-sans font-medium">
          <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-slate-500">{service.categoryLabel}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-brand-primary font-semibold">{service.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(142,152,165,0.06),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto flex flex-col items-start gap-4 relative z-10">
          <span className="bg-slate-100 border border-white/10 px-3.5 py-1 rounded-full text-[10px] font-display font-extrabold text-brand-accent uppercase tracking-widest">
            {service.categoryLabel}
          </span>
          <TextReveal 
            text={`Premium ${service.title} Installation`} 
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-slate-600 text-base leading-relaxed max-w-2xl"
          >
            {service.tagline}
          </motion.p>
        </div>
      </section>

      {/* Main Split Grid */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Detail Content Column Left */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Service Image Banner */}
          {service.image && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.2} glarePosition="all" transitionSpeed={1500} scale={1.01}>
                <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-100/80">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform hover:scale-[1.05] transition-transform duration-[2000ms] ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                </div>
              </Tilt>
            </motion.div>
          )}

          {/* Detailed Paragraph Copy */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display font-black text-2xl md:text-3xl text-brand-primary">Architectural Safety & Performance</h2>
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Features Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {service.features.map((feat, idx) => (
              <motion.div 
                key={idx}
                variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: 'spring' } } }}
                className="bg-white rounded-2xl p-5 border border-slate-100/80 shadow-sm flex items-center gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">🛡️</div>
                <span className="font-display font-bold text-sm text-brand-primary leading-tight">{feat}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Structural Specifications */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
              <FileText className="w-5 h-5 text-brand-primary" />
              <h3 className="font-display font-bold text-lg text-brand-primary">Technical Material Specifications</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider font-display">Material Standard</span>
                <span className="font-semibold text-slate-700 font-sans">{service.materialSpec}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider font-display">Inspection & Measurement</span>
                <span className="font-semibold text-brand-primary font-sans">100% Free Site Visit & Demonstration</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider font-display">Fastening System</span>
                <span className="font-semibold text-slate-700 font-sans">Heavy-Duty Stainless Steel Anchoring Screws</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider font-display">Warranty Threshold</span>
                <span className="font-semibold text-slate-700 font-sans">5 Years Performance Warranty Card Included</span>
              </div>
            </div>
          </div>

          {/* Service FAQ Accordion */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-brand-primary" />
                <h3 className="font-display font-bold text-lg text-brand-primary">Specific Questions on {service.title}</h3>
              </div>
              <Accordion items={service.faqs} />
            </div>
          )}

        </div>

        {/* Floating Sidebar Right */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28 self-start">
          
          {/* Quick Call Out CTA Box */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-white/10 shadow-xl flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-accent font-display">Fast Dispatch</span>
              <h3 className="font-display font-bold text-xl text-white">Free Site Measurement Inspection</h3>
            </div>
            
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Book a free site audit. Our structural engineer will visit, demonstrate premium material samples, measure exact area dimensions, and provide a binding budget estimate quote.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <MagneticButton>
                <Button variant="whatsapp" onClick={triggerWhatsAppWithService} className="w-full block">
                  Book Inspection
                </Button>
              </MagneticButton>
              
              <MagneticButton>
                <a href="tel:9550779976" className="w-full block">
                  <Button variant="outline" className="w-full border-slate-200 text-white hover:bg-slate-100">
                    <PhoneCall className="w-4 h-4 mr-2 text-brand-accent" />
                    +91 95507 79976
                  </Button>
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* High Trust Panel */}
          <div className="bg-white rounded-3xl p-6 border border-white/10 shadow-sm flex flex-col gap-4">
            <h4 className="font-display font-bold text-sm text-brand-primary uppercase tracking-wider">Installation Guarantee</h4>
            <div className="flex flex-col gap-3 text-xs text-slate-300 font-sans">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Custom mesh cuts to cover AC vents and copper pipelines.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Installed with high safety harnesses by certified high-rise riggers.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Complimentary first-year tensioning adjustment.</span>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};
