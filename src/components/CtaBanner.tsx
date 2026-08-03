import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface CtaBannerProps {
  onOpenBookCall: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBookCall }) => {
  return (
    <section className="py-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale" threshold={0.15}>
        <div className="bg-[#0D121F] rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            
            {/* Left Column Content */}
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#FF7300] uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Automate Your Business?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Transform Your Operations With Custom AI Agents
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Schedule a 1-on-1 strategy session with our AI architects. We will analyze your workflows, design a custom agent pipeline, and provide a clear deployment roadmap.
              </p>
            </div>

            {/* Right Column Button & Guarantee */}
            <div className="flex flex-col items-start lg:items-end space-y-2.5">
              <button
                onClick={onOpenBookCall}
                className="bg-[#FF7300] hover:bg-[#E66800] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-950/40 flex items-center space-x-2.5 group cursor-pointer hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Discovery Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center space-x-1.5 text-xs text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Confidential 30-minute consultation • Zero obligation</span>
              </div>
            </div>

          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
