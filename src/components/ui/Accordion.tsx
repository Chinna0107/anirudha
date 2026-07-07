import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen: initialIsOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  return (
    <div className="border border-slate-100 bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 transition-all duration-300 hover:border-slate-300/60 hover:shadow-lg hover:shadow-slate-100/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-brand-primary text-base md:text-lg leading-snug">
          {question}
        </span>
        <div className={`p-1.5 rounded-lg bg-slate-50 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-primary text-slate-900' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};
