import React from 'react';
import { AgentTemplate } from '../data/solutionsData';
import {
  ArrowLeft, ArrowRight, Zap, CheckCircle2,
  MessageSquare, Calendar
} from 'lucide-react';

interface TemplateDetailPageProps {
  template: AgentTemplate;
  onBack: () => void;
  onOpenBookCall: () => void;
}

const BADGE_COLORS: Record<string, string> = {
  'Most Popular':   'bg-orange-500 text-white',
  'High Conversion':'bg-blue-500 text-white',
  'Low Latency':    'bg-purple-500 text-white',
  'Automated Ops':  'bg-teal-500 text-white',
  'Revenue Driver': 'bg-emerald-500 text-white',
  'SOC2 Compliant': 'bg-indigo-500 text-white',
  'Ship Fast':      'bg-cyan-500 text-white',
  'Cross-Platform': 'bg-pink-500 text-white',
};

export const TemplateDetailPage: React.FC<TemplateDetailPageProps> = ({
  template,
  onBack,
  onOpenBookCall,
}) => {
  return (
    <div className="min-h-screen bg-[#111827] text-white">

      {/* ── Hero Banner ── */}
      <div className="relative h-52 sm:h-72 md:h-96 overflow-hidden">
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent" />

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 active:scale-[0.97] text-white text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-slate-700/80 backdrop-blur-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden xs:inline">Back to Templates</span>
          <span className="xs:hidden">Back</span>
        </button>

        {/* Hero labels */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 space-y-2 sm:space-y-3 max-w-[calc(100%-8rem)] sm:max-w-none">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-slate-900/90 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
              {template.category}
            </span>
            {template.badge && (
              <span className={`text-xs font-black px-3 py-1 rounded-md shadow-md ${BADGE_COLORS[template.badge] || 'bg-slate-700 text-white'}`}>
                {template.badge}
              </span>
            )}
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-white leading-tight max-w-2xl drop-shadow-lg">
            {template.title}
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-orange-400/90">{template.tagline}</p>
        </div>

        {/* ROI metric */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-orange-500/20">
          <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7300]" />
          <span className="text-sm sm:text-base font-black text-white">{template.roiMetric}</span>
        </div>
      </div>

      {/* ── Page Body ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 sm:space-y-14">

        {/* Top 2-col layout — sidebar comes AFTER content on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* Left — description + features */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">

            {/* Overview */}
            <div>
              <h2 className="text-xl font-black text-white mb-3">Overview</h2>
              <p className="text-slate-300 text-base leading-relaxed">{template.description}</p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-xl font-black text-white mb-4">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {template.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[#1a2744] border border-slate-700/70 rounded-xl px-4 py-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-slate-200 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Demo Preview */}
            <div>
              <h2 className="text-xl font-black text-white mb-4">Live Execution Preview</h2>
              <div className="bg-[#0d1525] rounded-2xl border border-slate-700/60 overflow-hidden">
                {/* Terminal header bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-700/60 bg-slate-800/50">
                  <span className="flex items-center gap-2 text-sm text-orange-400 font-bold">
                    <Zap className="w-4 h-4" />
                    Agent Execution Preview
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  </div>
                </div>

                {/* Chat bubbles */}
                <div className="p-6 space-y-5 font-mono text-sm">
                  {/* User */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] space-y-1">
                      <p className="text-[11px] text-slate-500 text-right uppercase tracking-wide">User Input</p>
                      <div className="bg-slate-700/70 text-slate-100 px-4 py-3 rounded-2xl rounded-tr-sm border border-slate-600/60 leading-relaxed">
                        {template.demoInput}
                      </div>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex items-center gap-2 pl-1">
                    <div className="w-7 h-7 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3.5 h-3.5 text-[#FF7300]" />
                    </div>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>

                  {/* Agent */}
                  <div className="flex justify-start">
                    <div className="max-w-[80%] space-y-1">
                      <p className="text-[11px] text-emerald-400 uppercase tracking-wide">AI Agent Response</p>
                      <div className="bg-emerald-950/40 text-emerald-200 px-4 py-3 rounded-2xl rounded-tl-sm border border-emerald-500/20 leading-relaxed">
                        {template.demoOutput}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right — sidebar (above content on mobile, beside on desktop) */}
          <div className="space-y-5 sm:space-y-6 order-1 lg:order-2">

            {/* CTA card */}
            <div className="bg-gradient-to-br from-[#1e2d47] to-[#162038] border border-orange-500/20 rounded-2xl p-5 sm:p-6 space-y-4 lg:sticky lg:top-24">
              <div className="flex items-center gap-2 text-[#FF7300]">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-bold">Deploy This Template</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our engineers will customise and deploy this template for your business — typically within days.
              </p>
              <button
                onClick={onOpenBookCall}
                className="w-full bg-[#FF7300] hover:bg-[#E66800] text-white py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-900/30 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenBookCall}
                className="w-full border border-slate-700 hover:border-orange-500/50 text-slate-300 hover:text-white py-2.5 rounded-xl text-sm font-semibold transition-all"
              >
                Request a Live Demo
              </button>
            </div>

            {/* Integrations */}
            <div className="bg-[#1a2744] border border-slate-700/70 rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-bold text-white">Integrations</h3>
              <div className="flex flex-wrap gap-2">
                {template.integrations.map((ing, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* ROI highlight */}
            <div className="bg-[#1a2744] border border-slate-700/70 rounded-2xl p-5 text-center space-y-1">
              <p className="text-[11px] text-slate-400 uppercase tracking-widest">Expected Impact</p>
              <p className="text-3xl font-black text-[#FF7300]">{template.roiMetric}</p>
              <p className="text-xs text-slate-400">reported by clients using this template</p>
            </div>

          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF7300]/18 via-orange-900/10 to-[#111827]" />
          <div className="absolute inset-0 border border-orange-500/20 rounded-3xl pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-[#FF7300]" />
              </div>
              <div>
                <h4 className="text-lg font-black text-white">Ready to make this yours?</h4>
                <p className="text-sm text-slate-400 mt-0.5">We customise every template to your brand, data, and integrations.</p>
              </div>
            </div>
            <div className="flex flex-col xs:flex-row sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <button
                onClick={onOpenBookCall}
                className="bg-[#FF7300] hover:bg-[#E66800] active:scale-[0.98] text-white px-7 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-900/30 flex items-center justify-center gap-2"
              >
                <span>Book Free Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onBack}
                className="border border-slate-700 hover:border-orange-500/50 text-slate-300 hover:text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all text-center"
              >
                View All Templates
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
