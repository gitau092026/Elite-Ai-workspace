import React, { useState } from 'react';
import { AI_SERVICES, AIService } from '../data/solutionsData';
import {
  Headphones, Cpu, TrendingUp, ShoppingCart, Mic, Bot, Globe, Smartphone,
  CheckCircle2, ArrowRight, Sparkles, Zap, ChevronRight, Star
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ServicesSectionProps {
  onOpenBookCall: () => void;
}

const CATEGORY_TABS = ['All Services', 'AI Agents', 'Automation', 'Web & Dev'];

const SERVICE_CATEGORIES: Record<string, string> = {
  'support-agents': 'AI Agents',
  'workflow-automation': 'Automation',
  'sales-lead-gen': 'AI Agents',
  'ecommerce-agents': 'Automation',
  'voice-agents': 'AI Agents',
  'executive-assistants': 'AI Agents',
  'fullstack-web-dev': 'Web & Dev',
  'mobile-app-dev': 'Web & Dev',
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookCall }) => {
  const [activeTab, setActiveTab] = useState('All Services');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (iconName: string, size = 'w-6 h-6') => {
    const cls = `${size} text-[#FF7300]`;
    switch (iconName) {
      case 'Headphones': return <Headphones className={cls} />;
      case 'Cpu': return <Cpu className={cls} />;
      case 'TrendingUp': return <TrendingUp className={cls} />;
      case 'ShoppingCart': return <ShoppingCart className={cls} />;
      case 'Mic': return <Mic className={cls} />;
      case 'Globe': return <Globe className={cls} />;
      case 'Smartphone': return <Smartphone className={cls} />;
      default: return <Bot className={cls} />;
    }
  };

  const filtered = activeTab === 'All Services'
    ? AI_SERVICES
    : AI_SERVICES.filter(s => SERVICE_CATEGORIES[s.id] === activeTab);

  const featured = AI_SERVICES[0];
  const displayList = activeTab === 'All Services' ? filtered.slice(1) : filtered;

  return (
    <section id="services" className="relative py-14 sm:py-24 bg-[#111827] text-white overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-orange-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-700/8 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="svc-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-[#FF7300] uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>What We Build</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Services Built to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-orange-400">
                Drive Results
              </span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              From autonomous AI agents to full-stack web applications — we engineer end-to-end digital solutions that scale your revenue and cut operational overhead.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Category Tabs ── */}
        <ScrollReveal direction="up" threshold={0.1} delayMs={80}>
          <div className="mb-10 sm:mb-14 -mx-4 sm:mx-0">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 sm:px-0 sm:flex-wrap sm:justify-center pb-1 sm:pb-0">
              {CATEGORY_TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-4 sm:px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-[#FF7300] border-[#FF7300] text-white shadow-lg shadow-orange-900/30'
                      : 'bg-white/5 border-slate-700/60 text-slate-300 hover:border-orange-500/50 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Featured Hero Card (All Services only) ── */}
        {activeTab === 'All Services' && (
          <ScrollReveal direction="up" threshold={0.08} delayMs={100}>
            <div
              className="group relative mb-10 rounded-3xl border border-slate-700/80 bg-gradient-to-br from-[#1e2d47] via-[#1a2744] to-[#162038] p-8 md:p-10 overflow-hidden cursor-pointer hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-950/30"
              onClick={onOpenBookCall}
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-600/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
                {/* Left content */}
                <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/15 transition-colors">
                      {getIcon(featured.iconName, 'w-7 h-7')}
                    </div>
                    <span className="text-[11px] font-bold text-[#FF7300] uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                      ★ Featured Service
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700/60">
                      Ready in {featured.deploymentTime}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#FF7300] transition-colors leading-snug mb-2">
                      {featured.title}
                    </h3>
                    <p className="text-sm font-semibold text-orange-400/90 mb-3">{featured.tagline}</p>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">{featured.description}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featured.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right panel */}
                <div className="lg:w-64 flex-shrink-0 space-y-4">
                  <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/60 space-y-3">
                    <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold">Popular Use Cases</p>
                    {featured.popularUseCases.map((uc, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-200">
                        <ChevronRight className="w-3.5 h-3.5 text-[#FF7300] flex-shrink-0" />
                        {uc}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); onOpenBookCall(); }}
                    className="w-full bg-[#FF7300] hover:bg-[#E66800] text-white py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-900/30"
                  >
                    <span>Build This Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayList.map((service, index) => (
            <ScrollReveal key={service.id} direction="up" delayMs={index * 80} threshold={0.06}>
              <div
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col h-full bg-[#1a2744] border border-slate-700/70 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-950/20"
              >
                {/* Top accent bar */}
                <div className={`h-0.5 w-full transition-all duration-300 ${hoveredId === service.id ? 'bg-gradient-to-r from-[#FF7300] to-orange-400' : 'bg-slate-800'}`} />

                <div className="flex flex-col flex-1 p-6 space-y-5">
                  {/* Header row */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-700/80 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors border border-slate-600/60 group-hover:border-orange-500/20">
                      {getIcon(service.iconName)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-[#FF7300]" />
                      <span className="text-[11px] font-semibold text-slate-400">{service.deploymentTime}</span>
                    </div>
                  </div>

                  {/* Number + title */}
                  <div>
                    <span className="text-[11px] font-black text-orange-500/40 tracking-widest">
                      {String(index + (activeTab === 'All Services' ? 2 : 1)).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF7300] transition-colors leading-snug mt-0.5">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-400/80 mt-1">{service.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">{service.description}</p>

                  {/* Benefits */}
                  <div className="border-t border-slate-700/60 pt-4 space-y-2 flex-1">
                    {service.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="border-t border-slate-700/60 pt-4 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-400 truncate">{service.popularUseCases[0]}</span>
                    <button
                      onClick={onOpenBookCall}
                      className="flex-shrink-0 inline-flex items-center gap-1.5 bg-slate-700/80 hover:bg-[#FF7300] text-slate-200 hover:text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border border-slate-600/60 hover:border-transparent"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>



        {/* ── Bottom CTA Banner ── */}
        <ScrollReveal direction="up" threshold={0.1} delayMs={120}>
          <div className="mt-10 relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7300]/20 via-orange-900/12 to-[#111827]" />
            <div className="absolute inset-0 border border-orange-500/20 rounded-3xl pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-6 sm:p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-[#FF7300]" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white">Need a bespoke multi-service solution?</h4>
                  <p className="text-sm text-slate-400 mt-1 max-w-md">
                    Our architects will design a custom AI + web pipeline tailored to your exact business processes — completely free of charge.
                  </p>
                </div>
              </div>
              <div className="flex flex-col xs:flex-row sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
                <button
                  onClick={onOpenBookCall}
                  className="bg-[#FF7300] hover:bg-[#E66800] text-white px-7 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-900/30 flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Book Free Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookCall}
                  className="border border-slate-700 hover:border-orange-500/50 text-slate-300 hover:text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap"
                >
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
