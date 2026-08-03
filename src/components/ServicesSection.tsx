import React, { useState } from 'react';
import { AI_SERVICES, AIService } from '../data/solutionsData';
import { Headphones, Cpu, TrendingUp, ShoppingCart, Mic, Bot, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ServicesSectionProps {
  onOpenBookCall: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookCall }) => {
  const [selectedService, setSelectedService] = useState<AIService | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#FF7300]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#FF7300]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#FF7300]" />;
      case 'ShoppingCart': return <ShoppingCart className="w-6 h-6 text-[#FF7300]" />;
      case 'Mic': return <Mic className="w-6 h-6 text-[#FF7300]" />;
      default: return <Bot className="w-6 h-6 text-[#FF7300]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-[#FF7300] uppercase tracking-wider bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored AI Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Custom AI Agent Solutions For Your Business
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              We don't sell generic chatbots. We engineer custom autonomous AI agents designed to solve specific operational bottlenecks and scale your revenue.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Grid Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} direction="up" delayMs={index * 100} threshold={0.08}>
              <div
                className="bg-[#131B2E] border border-slate-800 rounded-2xl p-7 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-950/20 flex flex-col justify-between group h-full"
              >
              <div className="space-y-4">
                {/* Header Icon + Turnaround */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-[#FF7300]/10 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700/60">
                    Ready in {service.deploymentTime}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF7300] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-orange-400/90">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Benefits List */}
                <div className="pt-2 space-y-1.5 border-t border-slate-800/80">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <div className="text-[11px] text-slate-400 font-medium">
                  {service.popularUseCases[0]}
                </div>
                <button
                  onClick={() => {
                    setSelectedService(service);
                    onOpenBookCall();
                  }}
                  className="bg-slate-800 hover:bg-[#FF7300] text-slate-200 hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-1"
                >
                  <span>Build Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner */}
        <ScrollReveal direction="up" delayMs={100} threshold={0.1}>
        <div className="mt-16 bg-gradient-to-r from-orange-950/40 via-slate-900 to-slate-900 p-8 rounded-3xl border border-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">Need a unique multi-agent architecture?</h4>
            <p className="text-xs text-slate-400">Our AI architects will map out your data pipeline and prototype an agent solution for free.</p>
          </div>
          <button
            onClick={onOpenBookCall}
            className="bg-[#FF7300] hover:bg-[#E66800] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-900/30 flex items-center space-x-2 whitespace-nowrap"
          >
            <span>Request Custom Agent Build</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
