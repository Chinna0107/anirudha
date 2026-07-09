import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Desai',
    role: 'Apartment Resident, Bangalore',
    content: 'Aniruddaya Enterprises did a fantastic job installing pigeon nets in our 12th-floor balcony. The material is very high quality and completely invisible from a distance. The team was professional and finished the work in just 2 hours!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Homeowner, Hyderabad',
    content: 'We got the invisible grills installed for our kids\' safety. It gives us peace of mind without blocking the beautiful city view. Highly recommend their marine-grade stainless steel options. Excellent service.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Karthik Reddy',
    role: 'Sports Club Manager',
    content: 'The heavy-duty sports netting for our rooftop cricket practice pitch is incredibly durable. It has sustained heavy impacts without any signs of wear. Truly the best safety netting installers in South India.',
    rating: 5,
  }
];

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto relative h-[350px] sm:h-[300px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute inset-0 flex flex-col items-center text-center p-8 glass-card-dark rounded-3xl border border-brand-primary/20 shadow-2xl"
        >
          <Quote className="w-10 h-10 text-brand-accent/50 mb-4" />
          <div className="flex gap-1 mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
            ))}
          </div>
          <p className="text-white text-base md:text-lg font-sans leading-relaxed italic mb-6 line-clamp-4">
            "{testimonials[currentIndex].content}"
          </p>
          <div className="mt-auto flex flex-col items-center">
            <h4 className="font-display font-bold text-white text-lg">{testimonials[currentIndex].name}</h4>
            <span className="text-xs text-brand-primary uppercase tracking-widest font-sans mt-1">
              {testimonials[currentIndex].role}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-brand-primary shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
