import React, { useState } from 'react';
import { AGENT_TEMPLATES, AgentTemplate } from '../data/solutionsData';
import {
  Bot, Sparkles, Zap, CheckCircle2, ArrowRight,
  MessageSquare, Globe, Smartphone, Layers
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TemplatesSectionProps {
  onOpenBookCall: () => void;
  onOpenTemplate: (template: AgentTemplate) => void;
}

const CATEGORY_TABS = [
  { label: 'All', icon: <Layers className="w-3.5 h-3.5" /> },
  { label: 'Customer Support', icon: <MessageSquare className="w-3.5 h-3.5" /> },
  { label: 'Sales & Marketing', icon: <Zap className="w-3.5 h-3.5" /> },
  { label: 'Voice Telephony', icon: <Bot className="w-3.5 h-3.5" /> },
  { label: 'Operations', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { label: 'E-Commerce', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { label: 'Executive & HR', icon: <Bot className="w-3.5 h-3.5" /> },
  { label: 'Web Development', icon: <Globe className="w-3.5 h-3.5" /> },
  { label: 'Mobile Development', icon: <Smartphone className="w-3.5 h-3.5" /> },
];

const BADGE_COLORS: Record<string, string> = {
  'Most Popular': 'bg-orange-500 text-white',
  'High Conversion': 'bg-blue-500 text-white',
  'Low Latency': 'bg-purple-500 text-white',
  'Automated Ops': 'bg-teal-500 text-white',
  'Revenue Driver': 'bg-emerald-500 text-white',
  'SOC2 Compliant': 'bg-indigo-500 text-white',
  'Ship Fast': 'bg-cyan-500 text-white',
  'Cross-Platform': 'bg-pink-500 text-white',
};

export const TemplatesSection: React.FC<TemplatesSectionProps> = ({ onOpenBookCall, onOpenTemplate }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredTemplates = activeTab === 'All'
    ? AGENT_TEMPLATES
    : AGENT_TEMPLATES.filter((t) => t.category === activeTab);

  return (
    <section id="templates" className="relative py-14 sm:py-24 bg-[#111827] text-white overflow-hidden border-t border-slate-700/50">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-indigo-700/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ── Section Header ── */}
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-[#FF7300] uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
              <Bot className="w-3.5 h-3.5" />
              <span>Ready-to-Deploy Templates</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Pre-Built{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-orange-400">
                Agent & App Templates
              </span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Field-tested frameworks for AI agents, web platforms, and mobile apps. Each template is fully customisable to your brand, data, and workflows — deployed in days.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Category Tabs ── */}
        <ScrollReveal direction="up" threshold={0.1} delayMs={60}>
          <div className="-mx-4 sm:mx-0">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide px-4 sm:px-0 sm:flex-wrap sm:justify-center pb-1 sm:pb-0">
              {CATEGORY_TABS.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(cat.label)}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                    activeTab === cat.label
                      ? 'bg-[#FF7300] border-[#FF7300] text-white shadow-lg shadow-orange-900/30'
                      : 'bg-white/5 border-slate-700/60 text-slate-300 hover:border-orange-500/40 hover:text-white'
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Template Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredTemplates.map((template, index) => (
            <ScrollReveal key={template.id} direction="up" delayMs={index * 70} threshold={0.06}>
              <div
                onMouseEnter={() => setHoveredId(template.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onOpenTemplate(template)}
                className="group relative flex flex-col bg-[#1a2744] border border-slate-700/70 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-950/20 cursor-pointer h-full"
              >
                {/* Top accent */}
                <div className={`h-0.5 w-full transition-all duration-300 ${hoveredId === template.id ? 'bg-gradient-to-r from-[#FF7300] to-orange-400' : 'bg-slate-700/60'}`} />

                {/* Hero image */}
                <div className="h-40 relative overflow-hidden bg-slate-800 flex-shrink-0">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2744] via-[#1a2744]/30 to-transparent" />

                  {/* Category pill */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                    {template.category}
                  </div>

                  {/* Badge */}
                  {template.badge && (
                    <div className={`absolute top-3 right-3 text-[10px] font-black px-2.5 py-1 rounded-md shadow-md ${BADGE_COLORS[template.badge] || 'bg-slate-700 text-white'}`}>
                      {template.badge}
                    </div>
                  )}

                  {/* ROI metric */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <Zap className="w-3 h-3 text-[#FF7300]" />
                    <span className="text-[11px] font-bold text-white">{template.roiMetric}</span>
                  </div>

                  {/* Index number */}
                  <div className="absolute bottom-3 right-3 text-[11px] font-black text-white/30">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#FF7300] transition-colors leading-snug">
                      {template.title}
                    </h3>
                    <p className="text-xs text-orange-400/80 font-semibold mt-0.5">{template.tagline}</p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">{template.description}</p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {template.features.map((feat, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[10px] font-semibold bg-slate-700/60 text-slate-300 px-2 py-0.5 rounded-md border border-slate-600/50">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 flex-shrink-0" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Live demo preview — slides in on hover */}
                  <div className={`overflow-hidden transition-all duration-300 ${hoveredId === template.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700/60 font-mono text-[10px] space-y-2">
                      <div className="flex items-center gap-1.5 text-orange-400 font-bold border-b border-slate-700/60 pb-1.5">
                        <Zap className="w-3 h-3" />
                        <span>Live Preview</span>
                      </div>
                      <div>
                        <span className="text-slate-500 uppercase text-[9px]">Input:</span>
                        <p className="text-slate-300 mt-0.5 leading-relaxed">{template.demoInput}</p>
                      </div>
                      <div>
                        <span className="text-emerald-400 uppercase text-[9px]">Output:</span>
                        <p className="text-emerald-300 mt-0.5 leading-relaxed line-clamp-2">{template.demoOutput}</p>
                      </div>
                    </div>
                  </div>

                  {/* Integration tags + CTA */}
                  <div className="mt-auto pt-3 border-t border-slate-700/60 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {template.integrations.slice(0, 3).map((ing, i) => (
                        <span key={i} className="bg-slate-800/80 text-slate-400 border border-slate-700/60 text-[10px] font-medium px-1.5 py-0.5 rounded">
                          {ing}
                        </span>
                      ))}
                      {template.integrations.length > 3 && (
                        <span className="text-[10px] text-slate-500 self-center">+{template.integrations.length - 3}</span>
                      )}
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); onOpenTemplate(template); }}
                      className="flex-shrink-0 inline-flex items-center gap-1 text-[11px] font-bold text-[#FF7300] hover:text-white hover:bg-[#FF7300] px-2.5 py-1.5 rounded-lg border border-orange-500/40 hover:border-transparent transition-all"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <ScrollReveal direction="up" threshold={0.1} delayMs={80}>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7300]/18 via-orange-900/10 to-[#111827]" />
            <div className="absolute inset-0 border border-orange-500/20 rounded-3xl pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-6 sm:p-8 md:p-10">
              <div>
                <h4 className="text-xl font-black text-white">Don't see exactly what you need?</h4>
                <p className="text-sm text-slate-400 mt-1 max-w-lg">
                  Every template is a starting point. Our engineers will customise any solution — AI agent, web app, or mobile product — around your specific business requirements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <button
                  onClick={onOpenBookCall}
                  className="bg-[#FF7300] hover:bg-[#E66800] text-white px-7 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-900/30 flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Request Custom Build</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookCall}
                  className="border border-slate-700 hover:border-orange-500/50 text-slate-300 hover:text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap"
                >
                  Book a Free Call
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Detail Modal removed — navigation handled by App.tsx ── */}

      </div>
    </section>
  );
};
