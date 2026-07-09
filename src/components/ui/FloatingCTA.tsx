import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

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

export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
      <div className="glass-card-dark rounded-full py-3.5 px-6 flex items-center justify-between shadow-2xl border border-slate-100 gap-4">
        {/* Call Now */}
        <a 
          href="tel:9550779976" 
          className="flex items-center gap-2 text-slate-100 hover:text-brand-primary transition-colors duration-200"
          title="Call Aniruddaya Enterprises"
        >
          <div className="w-8 h-8 rounded-full bg-[#d4af37]/25 text-[#d4af37] flex items-center justify-center shrink-0 border border-[#d4af37]/30">
            <Phone className="w-4 h-4" />
          </div>
          <span className="font-display font-bold text-xs tracking-wide uppercase hidden sm:inline whitespace-nowrap text-[#d4af37]">Call Now</span>
        </a>

        {/* Vertical Separator */}
        <div className="h-5 w-px bg-white/10"></div>

        {/* WhatsApp Chat */}
        <a 
          href="https://api.whatsapp.com/send?phone=+919550779976&text=Hello Aniruddaya Enterprises, I would like to get a quote and details for Safety Nets / Invisible Grills." 
          className="flex items-center gap-2 text-slate-100 hover:text-brand-secondary transition-colors duration-200 group relative"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Chat"
        >
          <div className="absolute inset-0 bg-[#C0C0C0]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-8 h-8 rounded-full bg-[#C0C0C0]/25 text-[#C0C0C0] flex items-center justify-center shrink-0 border border-[#C0C0C0]/30 animate-[glowPulse_2s_infinite_ease-in-out] relative z-10" style={{ boxShadow: '0 0 15px rgba(192, 192, 192, 0.4)' }}>
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="font-display font-bold text-xs tracking-wide uppercase whitespace-nowrap text-[#C0C0C0]">WhatsApp</span>
        </a>

        {/* Vertical Separator */}
        <div className="h-5 w-px bg-white/10"></div>

        {/* Instagram Inquiry */}
        <a 
          href="https://www.instagram.com/aniruddayaenterprises?igsh=bHdjMjE0d2l6Z2t1" 
          className="flex items-center gap-2 text-slate-100 hover:text-brand-primary transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow Aniruddaya Enterprises on Instagram"
        >
          <div className="w-8 h-8 rounded-full bg-[#d4af37]/25 text-[#d4af37] flex items-center justify-center shrink-0 border border-[#d4af37]/30">
            <InstagramIcon className="w-4.5 h-4.5" />
          </div>
          <span className="font-display font-bold text-xs tracking-wide uppercase hidden sm:inline whitespace-nowrap text-[#d4af37]">Instagram</span>
        </a>
      </div>
    </div>
  );
};
