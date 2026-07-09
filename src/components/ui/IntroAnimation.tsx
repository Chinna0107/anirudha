import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const IntroAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    // Hide animation after 2.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#040814]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        {/* We use logo.png which is available in the public directory */}
        <img src="/logo.png" alt="Aniruddaya Enterprises" className="h-24 md:h-36 object-contain" />
        
        {/* Animated highlight sweep for a premium effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
          initial={{ x: '-150%' }}
          animate={{ x: '150%' }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-6 text-brand-accent font-display font-bold tracking-[0.3em] uppercase text-xs md:text-sm drop-shadow-lg"
      >
        Safety You Can Trust
      </motion.p>
    </motion.div>
  );
};
