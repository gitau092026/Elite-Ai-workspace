import React, { useState } from 'react';
import { FAQS, FaqItem } from '../data/solutionsData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FaqSectionProps {
  onOpenBookCall: () => void;
  onOpenWhatsApp?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-[#111827] text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-[#FF7300] uppercase tracking-wider bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Everything you need to know about building, integrating, and maintaining custom AI agents for your business.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <ScrollReveal key={idx} direction="up" delayMs={idx * 60} threshold={0.05}>
              <div
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1e2d47] border-[#FF7300]/60 shadow-xl'
                    : 'bg-[#1a2744]/80 border-slate-700 hover:border-slate-600'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-800 text-slate-300 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#FF7300] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-200 leading-relaxed border-t border-slate-700/80 pt-4 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
