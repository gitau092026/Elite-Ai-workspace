import React from 'react';
import { Shield, Zap, Lock, Code2, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AboutSectionProps {
  onOpenBookCall: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBookCall }) => {
  const pillars = [
    {
      icon: <Zap className="w-6 h-6 text-[#FF7300]" />,
      title: '7-Day Rapid Deployment',
      description: 'We move fast. From requirement mapping to go-live testing, our specialized AI engineers deploy fully functional custom agents in days, not months.'
    },
    {
      icon: <Lock className="w-6 h-6 text-[#FF7300]" />,
      title: 'Data Security & Zero Leakage',
      description: 'Your business data remains 100% private. We implement SOC2-compliant vector stores and never allow public LLMs to train on your proprietary IP.'
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#FF7300]" />,
      title: 'Full IP & Code Ownership',
      description: 'Unlike closed SaaS lock-ins, you receive complete source code, custom prompt repositories, and API integration rights for your organization.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#FF7300]" />,
      title: 'Continuous Monitoring & Tuning',
      description: 'Our team monitors real-time agent conversations, refines confidence guardrails, and optimizes vector indexing for continuous 99%+ accuracy.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" threshold={0.1}>
            <div className="space-y-6">
            <div className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-[#FF7300] uppercase tracking-wider bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">
              <Award className="w-3.5 h-3.5" />
              <span>About Our AI Engineering Team</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              We Build Custom AI Agent Systems That Drive Real Revenue & Efficiency
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At <strong>Elite AI Workspace</strong>, we specialize in bridging the gap between cutting-edge LLM technology and tangible business outcomes. Whether you need a 24/7 customer support agent on WhatsApp, an outbound sales qualification engine, or complex document processing tools, we engineer bespoke AI systems built around your exact business goals.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Over 120+ Custom Agents Deployed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Average 82% Cost Reduction</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Multi-Model Architecture (Gemini, Claude, GPT)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Dedicated Post-Launch Support</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBookCall}
                className="bg-[#FF7300] hover:bg-[#E66800] text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-950/40 flex items-center space-x-2"
              >
                <span>Book AI Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" threshold={0.1}>
          {/* Right Image/Stat Grid */}
          <div className="bg-[#131B2E] border border-slate-800 rounded-3xl p-8 relative overflow-hidden space-y-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 text-center space-y-1">
                <div className="text-3xl font-black text-[#FF7300]">80%+</div>
                <div className="text-xs text-slate-400">Support Deflection Rate</div>
              </div>

              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 text-center space-y-1">
                <div className="text-3xl font-black text-emerald-400">&lt;0.5s</div>
                <div className="text-xs text-slate-400">Response Latency</div>
              </div>

              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 text-center space-y-1">
                <div className="text-3xl font-black text-blue-400">2,000+</div>
                <div className="text-xs text-slate-400">Software Integrations</div>
              </div>

              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 text-center space-y-1">
                <div className="text-3xl font-black text-purple-400">99.9%</div>
                <div className="text-xs text-slate-400">System Uptime SLA</div>
              </div>
            </div>

            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 text-xs text-slate-300 leading-relaxed italic">
              "Working with Elite AI Workspace transformed our customer support ops. Their team built a custom WhatsApp agent in 5 days that now handles 700+ daily inquiries with zero errors."
              <div className="mt-2 font-bold not-italic text-white text-right">— Marcus Chen, COO at FinTech Flow</div>
            </div>
          </div>
          </ScrollReveal>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={idx} direction="up" delayMs={idx * 80} threshold={0.1}>
              <div className="bg-[#131B2E] p-6 rounded-2xl border border-slate-800/80 space-y-3 h-full">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800">
                  {pillar.icon}
                </div>
                <h4 className="text-base font-bold text-white">{pillar.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
