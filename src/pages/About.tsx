import React from 'react';
import { ShieldCheck, Award, ThumbsUp, Users2, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { TextReveal } from '../components/ui/TextReveal';
import { MagneticButton } from '../components/ui/MagneticButton';
import Tilt from 'react-parallax-tilt';

export const About: React.FC = () => {
  useSEO({
    title: 'Aniruddaya Enterprises | Balcony Safety Nets Experts',
    description: 'Learn about Aniruddaya Enterprises, South India\'s leading professional installer of high-rise balcony safety nets, child-safety balcony barriers, anti-pigeon netting, and rustproof invisible grills.',
    keywords: 'Aniruddaya Enterprises Balcony Safety Nets, About Aniruddaya Enterprises, Professional Netting Installers, ISO Certified Safety Netting, Balcony Net Experts'
  });
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4 relative z-10">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold font-display">Our Corporate Profile</span>
          <TextReveal 
            text="Professional Safety Net Solutions" 
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight justify-center" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Providing high-tensile balcony safeguards and modern invisible grills designed for premium urban residences.
          </motion.p>
        </div>
      </section>

      {/* 2. Core Vision & Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Grid Left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} className="h-full">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between min-h-[12rem] h-full transition-all hover:shadow-lg">
                <Award className="w-8 h-8 text-amber-500" />
                <div>
                  <span className="block font-display font-extrabold text-brand-primary text-lg">ISO 9001:2015</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500">Material Standard</span>
                </div>
              </div>
            </Tilt>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} className="h-full">
              <div className="bg-brand-primary rounded-2xl p-6 text-white flex flex-col justify-between min-h-[12rem] sm:mt-6 h-full transition-all shadow-xl shadow-brand-primary/20">
                <ShieldCheck className="w-8 h-8 text-amber-500" />
                <div>
                  <span className="block font-display font-extrabold text-slate-800 text-lg">5 Years Warranty</span>
                  <span className="text-[10px] uppercase font-bold text-slate-300">Performance Card</span>
                </div>
              </div>
            </Tilt>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} className="h-full">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between min-h-[12rem] sm:-mt-6 h-full transition-all hover:shadow-lg">
                <ThumbsUp className="w-8 h-8 text-amber-500" />
                <div>
                  <span className="block font-display font-extrabold text-brand-primary text-lg">4.9 / 5 Rated</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500">Google Customer Score</span>
                </div>
              </div>
            </Tilt>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} className="h-full">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between min-h-[12rem] h-full transition-all hover:shadow-lg">
                <Users2 className="w-8 h-8 text-amber-500" />
                <div>
                  <span className="block font-display font-extrabold text-brand-primary text-lg">12,000+ Fits</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500">Apartments Secured</span>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Story Content Right */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold font-display">Who We Are</span>
            <h2 className="font-display font-black text-3xl text-brand-primary leading-tight">
              Aniruddaya Enterprises — Setting Standards in Home Protection
            </h2>
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              Founded as professional safety net dealers, Aniruddaya Enterprises has evolved into South India's premier installer of high-performance architectural safeguards. Our primary mission is to protect urban families, toddlers, and pets from high-rise balcony hazards while solving bird hygiene challenges permanently.
            </p>
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              We stand apart from local, uncertified contractors. Every rig, border cable, fastener, and monofilament mesh we supply undergoes rigorous stress-rupture audits. By integrating 316 Marine Grade Stainless Steel and UV-stabilized virgin polymer HDPE meshes, we deliver security that remains virtually invisible, preserving your skyline viewpoints.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-600 font-sans leading-relaxed">
                  <strong>Zero Sagging Guarantee:</strong> Every net is professionally tensioned using heavy steel anchor lines.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-600 font-sans leading-relaxed">
                  <strong>Safety-Certified Riggers:</strong> Technicians undergo active training for high-elevation rigging.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Materials Integrity Standards */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto flex flex-col gap-3"
          >
            <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold font-display">Material Integrity</span>
            <TextReveal 
              text="Our Engineering Standards" 
              className="font-display font-black text-3xl text-brand-primary" 
            />
            <p className="text-slate-500 font-sans text-sm leading-relaxed mt-2">
              We leverage premium structural materials designed to withstand South India's extreme hot sun and coastal moisture.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring' } } }} className="h-full">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} className="h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col gap-4 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="text-3xl">🕸️</div>
                  <h3 className="font-display font-bold text-lg text-brand-primary">100% Virgin HDPE Netting</h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Our polymer nets are crafted out of pure virgin High-Density Polyethylene, avoiding weak recycled fillers. This guarantees extreme tensile breaking resistance and prevents rotting.
                  </p>
                </div>
              </Tilt>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring' } } }} className="h-full">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} className="h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col gap-4 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="text-3xl">🛡️</div>
                  <h3 className="font-display font-bold text-lg text-brand-primary">DuPont Teflon SS 316 Wires</h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Invisible grills feature heavy 316 Grade Stainless Steel cores wrapped in anti-UV DuPont Teflon sleeves. Tested to withstand up to 400+ kg loads without snapping or rusting.
                  </p>
                </div>
              </Tilt>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring' } } }} className="h-full">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} className="h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col gap-4 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="text-3xl">🔧</div>
                  <h3 className="font-display font-bold text-lg text-brand-primary">Heavy-Gauge Anchor Rails</h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    We anchor our invisible grills into 6063-T6 architectural grade aluminum mounting tracks, secured into masonry walls via carbon steel/SS expanders to eliminate structural play.
                  </p>
                </div>
              </Tilt>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 mt-4 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-extrabold text-2xl text-white">Need a material sample inspection?</h3>
              <p className="text-slate-300 font-sans text-sm max-w-md">
                Our engineers carry official sample boxes featuring HDPE cords, SS 316 cables, and aluminum tracks for you to test during your free inspection.
              </p>
            </div>
            <MagneticButton>
              <Link to="/contact" className="block">
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  Request Free Site Visit
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
