import React from 'react';
import { AgentTemplate } from '../data/solutionsData';
import { X, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface TemplateDetailModalProps {
  template: AgentTemplate | null;
  onClose: () => void;
  onBookCall: () => void;
}

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

export const TemplateDetailModal: React.FC<TemplateDetailModalProps> = ({
  template,
  onClose,
  onBookCall
}) => {
  if (!template) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-[#1a2744] text-white rounded-3xl max-w-2xl w-full overflow-hidden relative border border-slate-700/80 shadow-2xl my-8">

        {/* Hero image header */}
        <div className="h-48 relative overflow-hidden">
          <img
            src={template.image}
            alt={template.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2744] via-[#1a2744]/50 to-transparent" />

          {/* Category + Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-slate-900/90 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
              {template.category}
            </span>
            {template.badge && (
              <span className={`text-[10px] font-black px-2.5 py-1 rounded-md shadow-md ${BADGE_COLORS[template.badge] || 'bg-slate-700 text-white'}`}>
                {template.badge}
              </span>
            )}
          </div>

          {/* ROI pill */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Zap className="w-3.5 h-3.5 text-[#FF7300]" />
            <span className="text-sm font-black text-white">{template.roiMetric}</span>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-2 rounded-full bg-slate-900/70 hover:bg-slate-800 transition-colors backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* Title + tagline */}
          <div>
            <h2 className="text-2xl font-black text-white leading-tight">{template.title}</h2>
            <p className="text-sm text-orange-400/90 font-semibold mt-1">{template.tagline}</p>
            <p className="text-sm text-slate-300 leading-relaxed mt-3">{template.description}</p>
          </div>

          {/* Features grid */}
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key Features</p>
            <div className="grid grid-cols-2 gap-2">
              {template.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/60 rounded-xl px-3 py-2 border border-slate-700/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live demo preview */}
          <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700/60 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Zap className="w-3.5 h-3.5" />
                Agent Execution Preview
              </span>
              <span className="text-[10px] text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">Live Simulation</span>
            </div>

            <div className="space-y-3">
              {/* User bubble */}
              <div className="flex justify-end">
                <div className="max-w-[85%]">
                  <span className="text-slate-500 block text-[10px] uppercase text-right mb-1">User</span>
                  <div className="bg-slate-700/80 text-slate-200 p-2.5 rounded-2xl rounded-tr-sm border border-slate-600/60">
                    {template.demoInput}
                  </div>
                </div>
              </div>
              {/* Agent bubble */}
              <div className="flex justify-start">
                <div className="max-w-[85%]">
                  <span className="text-emerald-400 block text-[10px] uppercase mb-1">AI Agent</span>
                  <div className="bg-emerald-950/40 text-emerald-300 p-2.5 rounded-2xl rounded-tl-sm border border-emerald-500/20">
                    {template.demoOutput}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrations */}
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Integrations</p>
            <div className="flex flex-wrap gap-2">
              {template.integrations.map((ing, i) => (
                <span key={i} className="bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold px-3 py-1 rounded-lg">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="flex items-center justify-between gap-3 border-t border-slate-700/60 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm text-slate-400 hover:text-white border border-slate-700 hover:border-slate-600 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => { onClose(); onBookCall(); }}
              className="bg-[#FF7300] hover:bg-[#E66800] text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-orange-900/30 flex items-center gap-2"
            >
              <span>Deploy This Template</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
