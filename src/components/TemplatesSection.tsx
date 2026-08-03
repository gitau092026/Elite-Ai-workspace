import React, { useState } from 'react';
import { AGENT_TEMPLATES, AgentTemplate } from '../data/solutionsData';
import { TemplateDetailModal } from './TemplateDetailModal';
import { Bot, Sparkles, Zap, Check, ArrowRight } from 'lucide-react';

interface TemplatesSectionProps {
  onOpenBookCall: () => void;
}

export const TemplatesSection: React.FC<TemplatesSectionProps> = ({ onOpenBookCall }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<AgentTemplate | null>(null);
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Customer Support', 'Sales & Marketing', 'Voice Telephony', 'Operations', 'E-Commerce', 'Executive & HR'];

  const filteredTemplates = activeTab === 'All'
    ? AGENT_TEMPLATES
    : AGENT_TEMPLATES.filter((t) => t.category === activeTab);

  return (
    <section id="templates" className="py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-orange-400 uppercase tracking-wider bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">
            <Bot className="w-3.5 h-3.5 text-[#FF7300]" />
            <span>Pre-Built Agent Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ready-To-Deploy AI Agent Templates
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Browse our field-tested autonomous agent frameworks. Each template is fully customizable to your specific business workflows, brand voice, and internal databases.
          </p>
        </div>

        {/* Category Pills Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === cat
                  ? 'bg-[#FF7300] text-white shadow-lg shadow-orange-950/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Agent Templates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              onClick={() => setSelectedTemplate(template)}
              className="bg-[#131B2E] border border-slate-800/80 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-950/20 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Header Image Box with Badge */}
                <div className="h-44 bg-slate-900 relative overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-orange-400 border border-orange-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                    {template.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-emerald-500/90 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md shadow-md">
                    {template.roiMetric}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF7300] transition-colors leading-snug">
                    {template.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {template.description}
                  </p>

                  {/* Integrations Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {template.integrations.map((ing, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-900 text-slate-300 border border-slate-800 text-[10px] font-semibold px-2 py-0.5 rounded-md"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <TemplateDetailModal
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
          onBookCall={onOpenBookCall}
        />

      </div>
    </section>
  );
};
