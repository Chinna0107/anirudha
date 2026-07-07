import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../data/blogsData';
import { Button } from '../components/ui/Button';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogsData.find((p) => p.slug === slug);

  useSEO({
    title: post ? post.title : 'Safety Guide',
    description: post ? post.excerpt : 'Expert insights and architectural guides from Aniruddaya Enterprises.',
    keywords: post ? post.tags.join(', ') : 'Home Safety Guides'
  });

  if (!post) {
    return (
      <div className="max-w-xl mx-auto py-24 px-6 text-center flex flex-col items-center">
        <span className="text-4xl mb-4">⚠️</span>
        <h2 className="font-display font-extrabold text-2xl text-brand-primary mb-2">Guide Not Found</h2>
        <p className="text-sm text-slate-500 font-sans mb-6">
          The requested safety article does not exist or has been relocated to another sitemap node.
        </p>
        <Link to="/blog">
          <Button variant="primary">Back to Guides</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-8">
      {/* Back Link */}
      <Link 
        to="/blog" 
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-primary transition-colors font-display uppercase tracking-wider"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Safety Guides
      </Link>

      {/* Main Header */}
      <header className="flex flex-col gap-4 border-b border-slate-100 pb-6">
        <div className="flex items-center gap-2">
          <span className="bg-amber-50 text-amber-600 px-3 py-0.5 rounded-full text-[10px] font-display font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-slate-500 text-[10px] font-sans font-semibold">
            {post.readTime}
          </span>
        </div>

        <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs text-slate-500 font-sans mt-2">
          <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
          <span>|</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
        </div>
      </header>

      {/* Rendered Paragraph Content */}
      <article className="font-sans text-slate-600 leading-relaxed text-sm sm:text-base flex flex-col gap-6">
        {post.content.split('\n\n').map((block, idx) => {
          if (block.startsWith('### ')) {
            return (
              <h3 key={idx} className="font-display font-bold text-xl md:text-2xl text-brand-primary mt-6 mb-1">
                {block.replace('### ', '')}
              </h3>
            );
          }
          if (block.startsWith('* **')) {
            const listItems = block.split('\n');
            return (
              <ul key={idx} className="list-disc pl-5 flex flex-col gap-2.5 my-2">
                {listItems.map((item, lIdx) => (
                  <li key={lIdx} dangerouslySetInnerHTML={{ __html: item.replace('* ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          );
        })}
      </article>

      {/* Post Footer Call to Action Box */}
      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm mt-12">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-sm border border-slate-100">🔒</div>
          <div className="flex flex-col gap-1">
            <h4 className="font-display font-bold text-lg text-brand-primary">Secure Your High-Rise Balcony Today</h4>
            <p className="text-xs text-slate-500 font-sans max-w-sm">
              Schedule your free measurement audit and see physical samples of our SS 316 invisible grills and double-knotted safety netting.
            </p>
          </div>
        </div>
        <Link to="/contact">
          <Button variant="primary" className="whitespace-nowrap">
            Schedule Free Inspection
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
