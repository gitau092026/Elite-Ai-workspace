import React from 'react';
import { Calendar, ArrowRight, Bot } from 'lucide-react';

interface HeroProps {
  onOpenBookCall: () => void;
  onOpenWhatsApp?: () => void;
  onNavigate?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookCall, onNavigate }) => {
  return (
    <section id="home" className="bg-[#111827] text-white pt-10 sm:pt-16 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-500/15 via-orange-600/8 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/8 rounded-full pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <h1 className="text-[1.75rem] leading-[1.2] sm:text-5xl lg:text-6xl font-black tracking-tight text-white sm:leading-[1.15]">
            We Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] via-orange-400 to-amber-300">
              AI Agents, Web Apps &amp; Mobile Products
            </span>{' '}
            That Grow Your Business
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Elite AI Workspace is a full-service digital agency. We automate your operations with custom AI agents, build fast and scalable web applications, and launch cross-platform mobile apps — all under one roof, delivered in days, not months.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenBookCall}
              className="bg-[#FF7300] hover:bg-[#E66800] active:scale-[0.98] text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-xl shadow-orange-950/40 flex items-center justify-center space-x-2.5 group cursor-pointer"
            >
              <Calendar className="w-5 h-5 flex-shrink-0" />
              <span>Book a Free Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>

            <button
              type="button"
              onClick={() => {
                if (onNavigate) {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }
              }}
              className="bg-slate-800/90 hover:bg-slate-700 active:scale-[0.98] border border-slate-700 text-slate-200 font-semibold text-base px-7 py-4 rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Bot className="w-5 h-5 text-[#FF7300] flex-shrink-0" />
              <span>Explore Custom Services</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
