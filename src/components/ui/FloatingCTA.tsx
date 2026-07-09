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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-fit max-w-[95%]">
      <div className="bg-slate-900/80 backdrop-blur-md rounded-full p-2 flex items-center justify-center gap-2 shadow-2xl border border-slate-700">
        {/* Call Now */}
        <a 
          href="tel:9550779976" 
          className="flex items-center justify-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform duration-200 bg-[#d4af37] shadow-lg shadow-[#d4af37]/40 px-3 sm:px-6 py-2.5 sm:py-3 rounded-full flex-1 sm:flex-none"
          title="Call Aniruddaya Enterprises"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="font-display font-bold text-[10px] sm:text-sm tracking-wide uppercase whitespace-nowrap text-white">Call</span>
        </a>

        {/* WhatsApp Chat */}
        <a 
          href="https://api.whatsapp.com/send?phone=+919550779976&text=Hello Aniruddaya Enterprises, I would like to get a quote and details for Safety Nets / Invisible Grills." 
          className="flex items-center justify-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform duration-200 bg-[#C0C0C0] shadow-lg shadow-[#C0C0C0]/40 px-3 sm:px-6 py-2.5 sm:py-3 rounded-full relative group flex-1 sm:flex-none"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Chat"
        >
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-[glowPulse_2s_infinite_ease-in-out]" />
          <span className="font-display font-bold text-[10px] sm:text-sm tracking-wide uppercase whitespace-nowrap text-white">WhatsApp</span>
        </a>

        {/* Instagram Inquiry */}
        <a 
          href="https://www.instagram.com/aniruddayaenterprises?igsh=bHdjMjE0d2l6Z2t1" 
          className="flex items-center justify-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform duration-200 bg-[#d4af37] shadow-lg shadow-[#d4af37]/40 px-3 sm:px-6 py-2.5 sm:py-3 rounded-full flex-1 sm:flex-none"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow Aniruddaya Enterprises on Instagram"
        >
          <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="font-display font-bold text-[10px] sm:text-sm tracking-wide uppercase whitespace-nowrap text-white">Insta</span>
        </a>
      </div>
    </div>
  );
};
