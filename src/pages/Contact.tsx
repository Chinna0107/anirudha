import React from 'react';
import { QuoteForm } from '../components/ui/QuoteForm';
import { Phone, Clock, MapPin, ShieldAlert, Mail } from 'lucide-react';
// import { useSEO } from '../hooks/useSEO';
import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { TextReveal } from '../components/ui/TextReveal';
import { MagneticButton } from '../components/ui/MagneticButton';

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Contact: React.FC = () => {
  useSEO({
    title: 'Contact Us | Book Free Site Measurement & Demonstration',
    description: 'Get in touch with the home safety experts at Aniruddaya Enterprises. Book a 100% free physical measurement audit and material inspection at your property in Bangalore or Mysore.',
    keywords: 'Contact Aniruddaya Enterprises, Safety Nets Bangalore Contact, Safety Nets Mysore Contact, Book Netting Inspection'
  });
  return (
    <div className="flex flex-col w-full bg-slate-50/50">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(142,152,165,0.06),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto flex flex-col gap-3 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest text-brand-accent font-extrabold font-display">Schedule Free Inspection</span>
          <TextReveal
            text="Connect With Rigging Experts"
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight justify-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-slate-300 text-sm sm:text-base max-w-md mx-auto"
          >
            Book a free physical measurement audit, view high-quality material samples, and receive a customized quotation today.
          </motion.p>
        </div>
      </section>

      {/* Main Split Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact info details left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="lg:col-span-5 flex flex-col gap-8 justify-start"
        >
          <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: 'spring' } } }} className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold font-display">Immediate Support</span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-brand-primary">Our Operation Details</h2>
            <p className="text-slate-500 font-sans text-sm leading-relaxed">
              We operate localized high-rise technician networks across Bangalore and Mysore, enabling same-day physical inspections and sample demonstrations.
            </p>
          </motion.div>

          <div className="flex flex-col gap-5">
            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: 'spring' } } }} className="flex items-start gap-4 group">
              <MagneticButton className="shrink-0">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-slate-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
              </MagneticButton>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-display font-bold uppercase tracking-wider">Direct Hotline</span>
                <a href="tel:9550779976" className="text-base font-bold text-brand-primary hover:underline font-display">
                  +91 95507 79976
                </a>
                <span className="text-[10px] text-slate-500 font-sans">Free consulting and sample displays</span>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: 'spring' } } }} className="flex items-start gap-4 group">
              <MagneticButton className="shrink-0">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
              </MagneticButton>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-display font-bold uppercase tracking-wider">Email Inquiry</span>
                <a href="mailto:Aniruddayasafetynets@gmail.com" className="text-base font-bold text-brand-primary hover:underline font-display break-all">
                  Aniruddayasafetynets@gmail.com
                </a>
                <span className="text-[10px] text-slate-500 font-sans">Replies within 2 business hours</span>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: 'spring' } } }} className="flex items-start gap-4 group">
              <MagneticButton className="shrink-0">
                <a href="https://www.facebook.com/share/19F38wWFD6/" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-slate-900 transition-colors">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                </a>
              </MagneticButton>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-display font-bold uppercase tracking-wider">Follow Facebook</span>
                <a
                  href="https://www.facebook.com/share/19F38wWFD6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-brand-primary hover:underline font-sans"
                >
                  Facebook Page
                </a>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: 'spring' } } }} className="flex items-start gap-4 group">
              <MagneticButton className="shrink-0">
                <a href="https://www.instagram.com/aniruddayaenterprises?igsh=bHdjMjE0d2l6Z2t1" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-slate-900 transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                </a>
              </MagneticButton>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-display font-bold uppercase tracking-wider">Follow Instagram</span>
                <a
                  href="https://www.instagram.com/aniruddayaenterprises?igsh=bHdjMjE0d2l6Z2t1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-brand-primary hover:underline font-sans"
                >
                  @aniruddayaenterprises
                </a>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: 'spring' } } }} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-brand-primary shrink-0">
                <Clock className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-display font-bold uppercase tracking-wider">Business Hours</span>
                <span className="text-sm font-semibold text-brand-primary font-sans">
                  Booking: 24/7 Client Service
                </span>
                <span className="text-xs text-slate-500 font-sans">Rigging Work: Mon-Sun (9:00 AM - 8:00 PM)</span>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: 'spring' } } }} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-brand-primary shrink-0">
                <MapPin className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-display font-bold uppercase tracking-wider">Head Office Bengaluru</span>
                <span className="text-sm font-semibold text-brand-primary font-sans">
                  12, 1st Cross, HMT Layout
                </span>
                <span className="text-xs text-slate-500 font-sans">Vidyaranyapura, Bengaluru, Karnataka 560097</span>
              </div>
            </motion.div>
          </div>

          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring' } } }} className="bg-slate-100/50 border border-slate-200/50 rounded-3xl p-5 flex items-start gap-3 mt-4">
            <ShieldAlert className="w-5 h-5 text-brand-primary shrink-0 mt-0.5 animate-mover" />
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              <strong>Need emergency fitments?</strong> In case of urgent window fall safety issues or active pigeon cleanings, call our hotline directly to trigger same-day priority dispatch.
            </p>
          </motion.div>
        </motion.div>

        {/* Quote Form Estimator Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, type: 'spring', delay: 0.2 }}
          className="lg:col-span-7 w-full"
        >
          <QuoteForm />
        </motion.div>
      </section>
    </div>
  );
};
