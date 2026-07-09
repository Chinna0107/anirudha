import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PhoneCall, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { servicesData } from '../data/servicesData';
import { useSEO } from '../hooks/useSEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { InfiniteCarousel } from '../components/ui/InfiniteCarousel';
import { TestimonialSlider } from '../components/ui/TestimonialSlider';
import { MagneticButton } from '../components/ui/MagneticButton';
import { TextReveal } from '../components/ui/TextReveal';
import Tilt from 'react-parallax-tilt';
import CountUpPkg from 'react-countup';
import TypewriterPkg from 'typewriter-effect';

const CountUp = (CountUpPkg as any).default || CountUpPkg;
const Typewriter = (TypewriterPkg as any).default || TypewriterPkg;

type CategoryType = 'all' | 'bird-safety' | 'invisible-grill' | 'sports-industrial';

export const Home: React.FC = () => {
  useSEO({
    title: 'Pigeon Nets, Balcony Safety Nets & Invisible Grills',
    description: 'South India\'s most trusted home safety provider. Professional balcony safety nets, marine-grade stainless steel invisible grills, pigeon spikes, child play safeguards, and sports netting in Bangalore. Request a free site inspection.',
    keywords: 'Balcony Safety Nets, Invisible Grills, Pigeon Safety Nets, Kids Safety Nets, Bird Spikes, Cricket Practice Nets, Sports Nets Installation, Aniruddaya Enterprises'
  });
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchText, setSearchText] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Parallax scroll setup
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const slideshowImages = [
    {
      src: '/image 1.jpg',
      title: 'High-Rise Balcony Safety Nets',
      desc: 'Heavy-gauge double-knotted monofilament safety netting custom-tensioned for absolute balcony fall protection.'
    },
    {
      src: '/image 2.jpg',
      title: 'Rustproof Invisible Grills',
      desc: 'Marine-grade 316 stainless steel cable wires wrapped in anti-abrasive DuPont Teflon. 100% skyline views.'
    },
    {
      src: '/image 3.jpg',
      title: 'Certified Child & Pet Safety Barriers',
      desc: 'Tough, bite-resistant safety networks designed to protect active toddlers, babies, and household pets.'
    },
    {
      src: '/image 4.jpg',
      title: 'Practice & Sports Net Enclosures',
      desc: 'Knotted high-impact nylon netting custom-fabricated for rooftop fields, cricket pitches, and schools.'
    },
    {
      src: '/image 5.jpg',
      title: 'Humane Pigeon Exclusion Nets',
      desc: 'Durable polymer grids and polycarbonate bird spikes that prevent roosting and keep ducts clean.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const categoriesList: { value: CategoryType; label: string }[] = [
    { value: 'all', label: 'All Services' },
    { value: 'bird-safety', label: 'Bird & Child Safety Nets' },
    { value: 'invisible-grill', label: 'Invisible Grill Systems' },
    { value: 'sports-industrial', label: 'Sports & Industrial Rigging' }
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchText.toLowerCase()) || 
                          service.tagline.toLowerCase().includes(searchText.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const homeFaqs = [
    { question: 'What materials are used in Aniruddaya Enterprises?', answer: 'We use 100% Virgin High-Density Polyethylene (HDPE) and UV-stabilized copolymer nylon netting, combined with SS-304/316 grade stainless steel anchors, hooks, and tensioning cords. This ensures zero rust, high tensile breaking strength (up to 400+ kg for invisible grills), and long-lasting durability.' },
    { question: 'Do you offer a warranty on safety installations?', answer: 'Yes! We provide an official 5-Year Performance Warranty card covering color degradation, tensile strength decay, and hook structural stability under harsh outdoor sunlight and heavy rain.' },
    { question: 'How much time does it take to complete the installation?', answer: 'For standard residential balconies and window overlays, our certified high-rise technicians complete the full measurement and installation process in 1.5 to 3 hours.' },
    { question: 'Can these nets be customized for odd-shaped balconies?', answer: 'Absolutely. We custom cut, align, and tension the netting to accommodate any architectural curve, ventilation duct shaft, air conditioner unit framework, or open utility space.' }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. Hero Section (Ultra-Premium Architectural Theme) */}
      <section className="relative flex items-center justify-center min-h-screen pt-28 pb-16 md:py-20 px-6 overflow-hidden bg-brand-darker">
        
        {/* Animated Gradient / Mesh Overlay */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)] animate-[pulse_4s_ease-in-out_infinite] pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 relative z-20">
          
          {/* Content Box with Parallax - Order 2 on Mobile, 1 on Desktop */}
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="order-2 md:order-1 flex flex-col items-start text-left gap-6 md:gap-8 relative z-20 w-full md:w-1/2"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold font-sans tracking-wide text-brand-accent shadow-xl"
            >
              <Star className="w-4 h-4 fill-brand-accent text-brand-accent" />
              <span>South India's Most Trusted Safety Installer</span>
            </motion.div>

            {/* Premium SEO H1 Heading */}
            <div className="flex flex-col gap-4 max-w-2xl px-0 overflow-hidden">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight min-h-[3em] sm:min-h-[2.5em] md:min-h-[2em] drop-shadow-xl"
              >
                South India's Premier <br className="hidden sm:block" />
                <span className="text-brand-accent inline-block drop-shadow-lg">
                  <Typewriter
                    options={{
                      strings: ['Balcony Safety Nets', 'Invisible Grills', 'Pigeon Exclusions', 'Sports Nets'],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="font-sans text-slate-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed drop-shadow-md"
              >
                Architectural-grade child fall prevention netting, pigeon exclusions, and marine SS-316 invisible grills custom-tensioned for high-rise residences.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto mt-2 md:mt-4"
            >
              <MagneticButton>
                <a href="#services" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }} className="w-full sm:w-auto block">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold py-4 md:py-6 px-8 text-sm md:text-base group">
                    View Services
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link to="/contact" className="w-full sm:w-auto block">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-sm md:text-base py-4 md:py-6 px-8 shadow-xl">
                    <PhoneCall className="w-5 h-5 mr-2 text-brand-accent" />
                    Contact Us
                  </Button>
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="grid grid-cols-3 gap-4 md:gap-8 pt-6 border-t border-white/20 mt-4 md:mt-6 w-full text-left"
            >
              <div className="flex flex-col items-start">
                <span className="font-display font-extrabold text-2xl md:text-3xl text-white drop-shadow-lg">
                  <CountUp end={12000} duration={3} separator="," enableScrollSpy scrollSpyOnce />+
                </span>
                <span className="text-[10px] md:text-xs text-brand-accent uppercase tracking-widest font-bold mt-1 md:mt-2">Homes Protected</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-display font-extrabold text-2xl md:text-3xl text-white drop-shadow-lg">
                  <CountUp end={5} duration={3} enableScrollSpy scrollSpyOnce /> Years
                </span>
                <span className="text-[10px] md:text-xs text-brand-accent uppercase tracking-widest font-bold mt-1 md:mt-2">Full Warranty</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-display font-extrabold text-2xl md:text-3xl text-white drop-shadow-lg">Same-Day</span>
                <span className="text-[10px] md:text-xs text-brand-accent uppercase tracking-widest font-bold mt-1 md:mt-2">Fast Execution</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Slideshow Box (Ken Burns Effect) - Order 1 on Mobile, 2 on Desktop */}
          <div className="order-1 md:order-2 relative h-[45vh] sm:h-[55vh] md:h-[70vh] w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group flex-shrink-0">
            {slideshowImages.map((slide, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img 
                  src={slide.src} 
                  alt={slide.title} 
                  className="w-full h-full object-cover origin-center"
                  style={
                    idx === currentSlide 
                      ? { transform: 'scale(1.1) translate(1%, 1%)', transition: 'transform 8000ms ease-out' } 
                      : { transform: 'scale(1)', transition: 'transform 0s' }
                  }
                />
              </div>
            ))}

            {/* Manual Arrows Navigation */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-brand-primary text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-brand-primary text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Interactive Progress dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
              {slideshowImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide ? 'w-8 bg-brand-accent shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 'w-2 bg-white/40 hover:bg-white/80'}`}
                  aria-label={`Jump to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 1.5 Before and After Transformation Sliders */}
      <section className="py-20 px-6 bg-white overflow-hidden relative border-b border-slate-100">
        <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none transform -skew-y-3 z-0" />
        <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-extrabold font-display">Visible Results</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 leading-tight">
              See the Transformation
            </h2>
            <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
              Experience the difference with our high-quality pigeon exclusions and balcony safety nets. Swipe left and right to see the invisible yet highly secure transformations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden">
            {/* Pigeon Nets Slider */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring', damping: 20 }}
              className="flex flex-col gap-6"
            >
              <div className="text-center">
                <h3 className="font-display font-bold text-2xl text-brand-primary">Pigeon Safety Nets</h3>
                <p className="text-slate-500 text-sm mt-2">Keep balconies clean and free from bird roosting.</p>
              </div>
              <BeforeAfterSlider 
                beforeImage="/pigeon_base.png" 
                afterImage="/pigeon_nets_new.png"
                beforeLabel="Before (Open & Unprotected)"
                afterLabel="After (Pigeon Nets)"
              />
            </motion.div>

            {/* Balcony Safety Nets Slider */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring', damping: 20 }}
              className="flex flex-col gap-6"
            >
              <div className="text-center">
                <h3 className="font-display font-bold text-2xl text-brand-primary">Balcony Safety Nets</h3>
                <p className="text-slate-500 text-sm mt-2">Child and pet fall prevention with zero visibility loss.</p>
              </div>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1000} scale={1.02}>
                <BeforeAfterSlider 
                  beforeImage="/balcony_base.png" 
                  afterImage="/safety_nets.png"
                  beforeLabel="Before (Open Ledge)"
                  afterLabel="After (Safety Nets)"
                />
              </Tilt>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Service Pillars Segment with Scroll Reveal */}
      <section className="py-20 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="text-center max-w-2xl mx-auto flex flex-col gap-4"
          >
            <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold font-display">Specialized Offerings</span>
            <TextReveal 
              text="Premium Safety Pillars" 
              className="font-display font-black text-3xl sm:text-4xl text-brand-primary leading-tight" 
            />
            <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
              We fabricate and rig custom high-strength netting and premium stainless-steel grill wire systems engineered for modern residences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Bird Safety Nets */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} glareColor="#d4af37" glarePosition="all" className="h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-100/80 shadow-lg shadow-slate-100 flex flex-col items-start gap-5 transition-all duration-300 hover:shadow-xl h-full">
                  <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-xl text-brand-primary">🕸️</motion.div>
                  <h3 className="font-display font-bold text-xl text-brand-primary">Bird & Child Safety Nets</h3>
                  <p className="text-slate-500 font-sans text-sm leading-relaxed">
                    UV-stabilized virgin HDPE safety nets custom-measured for balcony fall prevention, pigeon protection, pet safeguards, and utility shafts by <strong>Aniruddaya Enterprises</strong>.
                  </p>
                  <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-sans mt-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Balcony Safety Netting</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Kids Play Yard Safeguards</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Anti-Bird Ledge Spikes</li>
                  </ul>
                  <Link to="/services/balcony-safety-nets" className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors font-display">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Tilt>
            </motion.div>

            {/* Pillar 2: Invisible Grills */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, type: 'spring' }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} glareColor="#d4af37" glarePosition="all" className="h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-100/80 shadow-lg shadow-slate-100 flex flex-col items-start gap-5 transition-all duration-300 hover:shadow-xl h-full">
                  <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-xl text-brand-primary">🛡️</motion.div>
                  <h3 className="font-display font-bold text-xl text-brand-primary">Invisible Grill Systems</h3>
                  <p className="text-slate-500 font-sans text-sm leading-relaxed">
                    Grade 316 Marine Stainless Steel wire cables running vertically or horizontally. High-tensile security with 100% skyline views.
                  </p>
                  <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-sans mt-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Balcony Invisible Grills</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> High-rise Window Grates</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Bite-resistant Pet Grills</li>
                  </ul>
                  <Link to="/services/vertical-invisible-grills" className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors font-display">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Tilt>
            </motion.div>

            {/* Pillar 3: Sports Nets */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} glareColor="#d4af37" glarePosition="all" className="h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-100/80 shadow-lg shadow-slate-100 flex flex-col items-start gap-5 transition-all duration-300 hover:shadow-xl h-full">
                  <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-xl text-brand-primary">⚽</motion.div>
                  <h3 className="font-display font-bold text-xl text-brand-primary">Sports & Industrial Rigging</h3>
                  <p className="text-slate-500 font-sans text-sm leading-relaxed">
                    Heavy-gauge knotted sports enclosures for cricket practice, soccer boundaries, rooftop fields, atriums, and duct industrial safety.
                  </p>
                  <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-sans mt-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Cricket Practice Box Cages</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Rooftop Ball Stop Netting</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> High-impact Debris Nets</li>
                  </ul>
                  <Link to="/services/cricket-practice-nets" className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors font-display">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Tilt>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2.5 Dynamic Services Category Explorer */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="text-center max-w-2xl mx-auto flex flex-col gap-4"
          >
            <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold font-display">Interactive Catalog</span>
            <TextReveal 
              text="Explore Our Full Safety Range" 
              className="font-display font-black text-3xl sm:text-4xl text-brand-primary leading-tight" 
            />
            <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
              Browse our complete selection of 16 high-strength safety nets, invisible window grills, and sports/industrial netting solutions. Filter by category or search instantly.
            </p>
          </motion.div>

          {/* Interactive Filtering Tabs & Search Bar */}
          <div className="flex flex-col xl:flex-row gap-6 justify-between items-center bg-slate-50 p-4 rounded-3xl border border-slate-100/80">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categoriesList.map((cat) => (
                <button 
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2.5 rounded-xl font-display font-bold text-xs tracking-wide transition-all ${activeCategory === cat.value ? 'bg-brand-primary text-slate-900 shadow-md' : 'text-slate-600 hover:bg-slate-200/50'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full xl:w-80 shrink-0">
              <input 
                type="text" 
                placeholder="Search safety nets..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-5 py-2.5 pl-11 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-sans text-sm text-slate-700 shadow-sm"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg pointer-events-none">🔍</span>
              {searchText && (
                <button 
                  onClick={() => setSearchText('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-600 text-sm font-semibold font-sans"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Dynamic Grid Results */}
          {filteredServices.length > 0 ? (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredServices.map((service) => (
                <motion.div 
                  key={service.slug}
                  variants={{
                    hidden: { opacity: 0, y: 60, rotateX: 20, scale: 0.9 },
                    visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 20 } }
                  }}
                  className="h-full perspective-1000"
                >
                  <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.15} glarePosition="all" transitionSpeed={1000} className="h-full">
                    <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-md shadow-slate-100 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                      {/* Service Card Image */}
                      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-100 px-2.5 py-1 rounded-xl text-[10px] font-display font-extrabold uppercase tracking-wider text-brand-primary shadow-sm max-w-[85%] truncate">
                          {service.categoryLabel}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex flex-col flex-1 gap-3.5">
                        <h3 className="font-display font-black text-lg text-brand-primary leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-slate-500 font-sans text-xs sm:text-sm leading-relaxed line-clamp-3">
                          {service.tagline}
                        </p>
                        <div className="mt-auto flex flex-col xs:flex-row gap-2 w-full pt-2">
                          <MagneticButton>
                            <Link 
                              to={`/services/${service.slug}`}
                              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-50 text-brand-primary hover:bg-brand-primary hover:text-white font-display font-bold text-xs rounded-xl transition-all border border-slate-100"
                            >
                              <span>Specifications</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </MagneticButton>
                          <MagneticButton>
                            <a 
                              href="tel:9550779976"
                              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-brand-primary text-slate-900 hover:bg-slate-800 font-display font-bold text-xs rounded-xl transition-all shadow-sm"
                            >
                              <PhoneCall className="w-3.5 h-3.5" />
                              <span>Call</span>
                            </a>
                          </MagneticButton>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 flex flex-col items-center gap-4 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <span className="text-4xl">🔎</span>
              <h3 className="font-display font-bold text-lg text-brand-primary">No Matching Services Found</h3>
              <p className="text-slate-500 font-sans text-sm leading-relaxed max-w-md">
                We couldn't find any safety nets or grills matching your search. Try adjusting your category filters or search keywords.
              </p>
              <button 
                onClick={() => { setActiveCategory('all'); setSearchText(''); }}
                className="mt-2 px-5 py-2 bg-brand-primary text-slate-900 rounded-xl font-display font-bold text-sm hover:bg-brand-primary/95 transition-all"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Infinite Logo Carousel */}
      <InfiniteCarousel />

      {/* Testimonials Auto Fade Slider */}
      <section className="py-24 px-6 bg-[#040814] relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.05),transparent_60%)] animate-[pulse_5s_ease-in-out_infinite]" />
        
        <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto flex flex-col gap-4"
          >
            <span className="text-xs uppercase tracking-widest text-brand-accent font-extrabold font-display">Client Feedback</span>
            <TextReveal 
              text="Trusted by Thousands" 
              className="font-display font-black text-3xl sm:text-4xl text-white leading-tight" 
            />
            <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
              Don't just take our word for it. Hear what families and facility managers across South India have to say about our safety installations.
            </p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>

      {/* 4. Trust Signals & Material Standards */}
      <section className="py-20 px-6 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="text-center max-w-2xl mx-auto flex flex-col gap-4"
          >
            <span className="text-xs uppercase tracking-widest text-brand-accent font-extrabold font-display">Uncompromising Quality</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
              Engineered Safety Standards
            </h2>
            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
              We never use cheap recycled plastics or standard mild steels. Our safety systems undergo rigorous physical stress audits.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center gap-3.5 p-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-brand-accent flex items-center justify-center text-xl transition-transform group-hover:scale-110 group-hover:bg-brand-accent/20">💎</div>
              <h4 className="font-display font-bold text-lg text-white">SS 316 Wire Core</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Invisible grills feature Marine Grade 316 Stainless Steel cores wrapped in anti-abrasive DuPont Teflon sleeve. Zero rust.
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center gap-3.5 p-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-brand-accent flex items-center justify-center text-xl transition-transform group-hover:scale-110 group-hover:bg-brand-accent/20">☀️</div>
              <h4 className="font-display font-bold text-lg text-white">100% UV Protection</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Our polymer nets are treated with raw UV-stabilizing masterbatches, preventing color yellowing or sun decay for 8+ years.
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center gap-3.5 p-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-brand-accent flex items-center justify-center text-xl transition-transform group-hover:scale-110 group-hover:bg-brand-accent/20">🧱</div>
              <h4 className="font-display font-bold text-lg text-white">Anodized Tracks</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Invisible grill anchor tracks are machined out of heavy structural-grade anodized aluminum alloys for absolute pull strength.
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center gap-3.5 p-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-brand-accent flex items-center justify-center text-xl transition-transform group-hover:scale-110 group-hover:bg-brand-accent/20">🎖️</div>
              <h4 className="font-display font-bold text-lg text-white">Licensed Riggers</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                All high-elevation safety rope fitments are executed by technicians certified in active safety harnesses and fall arresters.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 5. FAQs Segment */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="text-center flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold font-display">FAQ Center</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-primary leading-tight">
              Pre-Sale Customer Queries
            </h2>
            <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
              Find transparent answers regarding materials, scheduling, warranty, and structural rigging procedures.
            </p>
          </div>

          <Accordion items={homeFaqs} />

        </div>
      </section>

    </div>
  );
};
