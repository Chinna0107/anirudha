import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

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

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Safety FAQs', path: '/faq' },
    { name: 'Guides', path: '/blog' },
    { name: 'Get Free Estimate', path: '/contact' },
  ];

  return (
    <>
      <div className="bg-brand-primary text-slate-900 text-[10px] sm:text-[11px] md:text-xs font-sans py-2 px-4 sm:px-6 flex flex-wrap items-center justify-center sm:justify-between gap-x-4 gap-y-1 tracking-wide font-medium">
        <div className="flex items-center gap-1.5 md:gap-3 flex-wrap justify-center sm:justify-start">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-slate-600" /> ISO Certified Materials</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">📞 +91 95507 79976</span>
          <span className="hidden lg:inline">|</span>
          <a href="mailto:Aniruddayasafetynets@gmail.com" className="hidden lg:inline hover:text-slate-600 transition-colors">✉ Aniruddayasafetynets@gmail.com</a>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="https://www.instagram.com/aniruddaya_enterprises?igsh=MTM3dHhhbXVveHhxdg==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-600 transition-colors flex items-center gap-1.5"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Instagram</span>
          </a>
          <span>|</span>
          <a href="tel:9550779976" className="hover:text-slate-600 transition-colors">Call Support</a>
          <span>|</span>
          <span className="text-slate-600">★ 4.9 rated on Google</span>
        </div>
      </div>

      {/* Sticky Main Header */}
      <header
        className={`sticky top-0 z-30 w-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav py-3 shadow-md' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Aniruddaya Enterprises" className="w-10 h-10 rounded-xl object-cover shadow border border-slate-100" />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-brand-primary text-base md:text-lg leading-tight uppercase tracking-wider">
                Aniruddaya Enterprises
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold font-sans">
                Pigeon Nets & Invisible Grills
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-sm font-semibold tracking-wide hover:text-brand-accent transition-colors duration-200 ${
                  location.pathname === link.path 
                    ? 'text-brand-accent' 
                    : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Call Trigger CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:9550779976" 
              className="flex items-center gap-2 text-sm font-display font-bold text-slate-700 hover:text-brand-accent transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <Phone className="w-4 h-4" />
              </div>
              +91 95507 79976
            </a>
            <Link to="/contact">
              <Button size="sm">Get Free Inspection</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-slate-50 transition-colors text-brand-primary focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-brand-primary/40 backdrop-blur-xs lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 bottom-0 right-0 z-50 w-80 max-w-[85vw] bg-white border-l border-slate-100 shadow-2xl p-6 flex flex-col gap-6 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <img src="/logo.png" alt="Aniruddaya Enterprises" className="w-8 h-8 rounded-xl object-cover shadow border border-slate-100" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-brand-primary text-xs uppercase tracking-wider">
                Aniruddaya Enterprises
              </span>
            </div>
          </Link>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-500 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-display text-base font-bold py-2 border-b border-slate-50 hover:text-brand-accent transition-colors ${
                location.pathname === link.path 
                  ? 'text-brand-accent' 
                  : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-slate-100">
          <a
            href="tel:9550779976"
            className="flex items-center gap-3 font-display font-extrabold text-brand-primary py-2.5 px-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all text-sm justify-center"
          >
            <Phone className="w-4 h-4 text-brand-accent" />
            +91 95507 79976
          </a>
          <Link to="/contact" className="w-full" onClick={() => setIsOpen(false)}>
            <Button className="w-full" size="sm">Get Free Estimate</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
