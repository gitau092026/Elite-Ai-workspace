import React from 'react';
import { PRICING_PLANS } from '../data/solutionsData';
import { CheckCircle2, Calendar, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface PricingSectionProps {
  onOpenBookCall: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBookCall }) => {
  return (
    <section id="pricing" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-[#FF7300] uppercase tracking-wider bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Investment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Flexible AI Agent Solution Pricing
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              One-time setup with full code ownership or managed retainer options. No hidden per-token surcharges or unexpected surprises.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <ScrollReveal key={plan.id} direction="scale" delayMs={index * 120} threshold={0.08}>
              <div
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 h-full ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-[#1A233A] to-[#121929] border-2 border-[#FF7300] shadow-2xl shadow-orange-950/30 scale-105 z-10'
                    : 'bg-[#131B2E] border border-slate-800'
                }`}
              >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF7300] text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 min-h-[36px]">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="border-y border-slate-800 py-4">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">{plan.price}</span>
                  </div>
                  <span className="text-xs text-orange-400 font-semibold">{plan.billingPeriod}</span>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    What's included:
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-slate-800">
                <button
                  onClick={onOpenBookCall}
                  className={`w-full font-bold text-sm py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 ${
                    plan.highlighted
                      ? 'bg-[#FF7300] hover:bg-[#E66800] text-white shadow-orange-900/40'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                </button>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Enterprise Guarantee Footer */}
        <ScrollReveal direction="up" delayMs={100} threshold={0.1}>
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>100% Satisfaction Guarantee: We test and optimize prompt accuracy until your target metric is met.</span>
          </div>
          <button
            onClick={onOpenBookCall}
            className="text-orange-400 hover:text-orange-300 font-bold whitespace-nowrap flex items-center space-x-1"
          >
            <span>Have custom security requirements? Talk to us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
