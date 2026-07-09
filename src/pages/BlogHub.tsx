import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogsData';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { TextReveal } from '../components/ui/TextReveal';
import { MagneticButton } from '../components/ui/MagneticButton';

export const BlogHub: React.FC = () => {
  useSEO({
    title: 'Home Safety Guides & Netting Installation Blog',
    description: 'Explore safety checklists, invisible grill tips, expert pigeon netting exclusions, AC duct safety, and DIY building guides from the engineers at Aniruddaya Enterprises.',
    keywords: 'Home Safety Blog, Balcony Netting Tips, Invisible Grill Guides, Pigeon Prevention Articles'
  });
  return (
    <div className="flex flex-col w-full bg-slate-50/50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto flex flex-col gap-3 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold font-display">Safety Guides & Articles</span>
          <TextReveal 
            text="Home Safety & Exclusions Blog" 
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight justify-center" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-slate-300 text-sm sm:text-base max-w-md mx-auto"
          >
            Read expert insights on high-rise balcony children protection, professional bird exclusion nets, and structural guidelines.
          </motion.p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {blogsData.map((post) => (
              <motion.article 
                key={post.slug}
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring' } } }}
                className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-[10px] font-display font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-slate-500 text-[10px] font-sans font-semibold">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-primary leading-tight hover:text-brand-accent transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-50 pt-4 mt-2 gap-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> By {post.author.split(' (')[0]}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  </div>
                  
                  <MagneticButton>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:text-brand-accent transition-colors font-display bg-slate-50 px-3 py-2 rounded-xl"
                    >
                      Read Guide
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </MagneticButton>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center flex flex-col items-center max-w-xl mx-auto">
            <BookOpen className="w-10 h-10 text-slate-600 mb-3" />
            <h4 className="font-display font-bold text-lg text-brand-primary mb-1">More Guides Coming Soon!</h4>
            <p className="text-xs text-slate-500 font-sans leading-relaxed max-w-sm">
              We continually compile engineering specs, baby-proofing methodologies, and structural control guides to keep your family informed and safe.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
