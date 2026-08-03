import React from 'react';
import { AgentTemplate } from '../data/solutionsData';
import { X, ArrowRight, Zap } from 'lucide-react';

interface TemplateDetailModalProps {
  template: AgentTemplate | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const TemplateDetailModal: React.FC<TemplateDetailModalProps> = ({
  template,
  onClose,
  onBookCall
}) => {
  if (!template) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-[#131B2E] text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative border border-slate-800 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="space-y-3 pr-8">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-[#FF7300] bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 uppercase tracking-wider">
              {template.category}
            </span>
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              {template.roiMetric}
            </span>
          </div>

          <h2 className="text-2xl font-black text-white leading-tight">
            {template.title}
          </h2>

          <p className="text-xs text-slate-300 font-medium">
            {template.tagline}
          </p>
        </div>

        {/* Overview */}
        <p className="text-slate-300 text-sm leading-relaxed">
          {template.description}
        </p>

        {/* Live Interactive Prompt Demo Box */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
            <span className="flex items-center space-x-1.5 text-orange-400 font-bold">
              <Zap className="w-3.5 h-3.5" />
              <span>Agent Execution Preview</span>
            </span>
            <span className="text-[10px] text-slate-500">LLM RAG Engine</span>
          </div>

          <div className="space-y-2">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">User Prompt:</span>
              <p className="text-slate-200 bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                {template.demoInput}
              </p>
            </div>
            <div>
              <span className="text-emerald-400 block text-[10px] uppercase">Autonomous Agent Response:</span>
              <p className="text-emerald-300 bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-500/20">
                {template.demoOutput}
              </p>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="bg-[#FF7300] hover:bg-[#E66800] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center space-x-2"
          >
            <span>Book a Live Video Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

