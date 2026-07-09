import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: '100% HDPE UV Stabilized', icon: '☀️' },
  { name: 'ISO 9001:2015 Certified', icon: '🏆' },
  { name: 'Garware Technical Fibers', icon: '🕸️' },
  { name: 'Marine Grade 316 SS', icon: '💎' },
  { name: '5-Year Warranty', icon: '🛡️' },
  { name: '0% Rust Guarantee', icon: '💧' },
];

export const InfiniteCarousel: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 py-6 overflow-hidden flex flex-col gap-4 border-y border-white/10">
      <div className="text-center">
        <span className="text-[10px] font-display font-extrabold uppercase tracking-widest text-slate-500">
          Trusted Materials & Certifications
        </span>
      </div>
      <div className="relative flex w-full">
        <motion.div
          className="flex whitespace-nowrap gap-8 md:gap-16 items-center px-4 md:px-8"
          animate={{ x: [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {/* Double the logos to create the infinite loop effect */}
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0">
              <span className="text-2xl">{logo.icon}</span>
              <span className="font-display font-bold text-white text-sm md:text-base tracking-wide">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
