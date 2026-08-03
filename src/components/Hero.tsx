import React from 'react';
import { Calendar, Sparkles, ArrowRight, Bot } from 'lucide-react';

interface HeroProps {
  onOpenBookCall: () => void;
  onOpenWhatsApp?: () => void;
  onNavigate?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookCall, onNavigate }) => {
  return (
    <section id="home" className="bg-[#0D121F] text-white pt-12 pb-20 relative overflow-hidden">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-500/10 via-orange-600/5 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700/80 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-inner text-xs font-semibold text-orange-300">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7300]" />
            <span>Custom AI & Autonomous Agent Solutions</span>
            <span className="w-1.5 h-1.5 bg-[#FF7300] rounded-full animate-ping" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Tailored <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] via-orange-400 to-amber-300">AI Agents & Automated Solutions</span> Built For Your Business Needs
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            We architect, build, and maintain enterprise-grade autonomous AI agents that streamline 24/7 customer support, qualify lead funnels, automate complex workflows, and integrate seamlessly with your existing software stack.
          </p>

          {/* CTA Buttons Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBookCall}
              className="w-full sm:w-auto bg-[#FF7300] hover:bg-[#E66800] text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-xl shadow-orange-950/40 flex items-center justify-center space-x-2.5 group cursor-pointer hover:scale-[1.02]"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Free Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => {
                if (onNavigate) {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }
              }}
              className="w-full sm:w-auto bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-base px-7 py-4 rounded-xl transition-all flex items-center justify-center space-x-2 text-center cursor-pointer"
            >
              <Bot className="w-5 h-5 text-[#FF7300]" />
              <span>Explore Custom Services</span>
            </button>
          </div>


        </div>

      </div>
    </section>
  );
};
