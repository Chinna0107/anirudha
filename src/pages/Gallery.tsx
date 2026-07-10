import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  "WhatsApp Image 2026-07-09 at 22.37.38.jpeg",
  "WhatsApp Image 2026-07-09 at 22.37.39 (1).jpeg",
  "WhatsApp Image 2026-07-09 at 22.37.39.jpeg",
  "WhatsApp Image 2026-07-09 at 22.37.40 (1).jpeg",
  "WhatsApp Image 2026-07-09 at 22.37.40.jpeg",
  "WhatsApp Image 2026-07-09 at 22.37.42.jpeg",
  "WhatsApp Image 2026-07-09 at 22.38.01 (1).jpeg",
  "WhatsApp Image 2026-07-09 at 22.38.01.jpeg",
  "WhatsApp Image 2026-07-09 at 22.38.02.jpeg",
  "WhatsApp Image 2026-07-09 at 22.38.03 (1).jpeg",
  "WhatsApp Image 2026-07-09 at 22.38.03 (2).jpeg",
  "WhatsApp Image 2026-07-09 at 22.38.03.jpeg",
  "WhatsApp Image 2026-07-09 at 22.38.19.jpeg",
  "WhatsApp Image 2026-07-09 at 22.38.21.jpeg",
  "WhatsApp Image 2026-07-09 at 22.38.49.jpeg",
  "WhatsApp Image 2026-07-09 at 22.38.53.jpeg",
  "WhatsApp Image 2026-07-09 at 22.39.43.jpeg",
  "WhatsApp Image 2026-07-09 at 22.41.36 (1).jpeg",
  "WhatsApp Image 2026-07-09 at 22.41.36.jpeg",
  "WhatsApp Image 2026-07-09 at 22.41.37 (1).jpeg",
  "WhatsApp Image 2026-07-09 at 22.41.37.jpeg"
];

export const Gallery: React.FC = () => {
  return (
    <>
      <div className="bg-brand-light py-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto pt-10">
          <div className="text-center mb-16">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-brand-primary mb-6">
              Our Work Gallery
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed">
              Explore our past installations to see the quality and precision of our safety netting and invisible grill solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white aspect-square group cursor-pointer"
              >
                <img 
                  src={`/gallery/${img}`} 
                  alt={`Installation ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
