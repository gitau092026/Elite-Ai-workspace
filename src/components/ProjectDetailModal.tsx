import React, { useState } from 'react';
import { Project } from '../data/marketplaceData';
import { X, MapPin, Clock, CheckCircle2, Send, Building, Tag, ShieldCheck } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [proposalSent, setProposalSent] = useState(false);
  const [bidAmount, setBidAmount] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  if (!project) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProposalSent(true);
    setTimeout(() => {
      setProposalSent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {proposalSent ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Proposal Submitted!</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Your proposal and rate card have been sent directly to <strong>{project.clientName}</strong>. They will review your agent portfolio shortly.
            </p>
          </div>
        ) : (
          <>
            {/* Header badges */}
            <div className="space-y-3 pr-8">
              <div className="flex items-center space-x-2">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    project.type === 'Fixed price project'
                      ? 'bg-sky-100 text-sky-800 border border-sky-200'
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  }`}
                >
                  {project.type}
                </span>
                <span className="text-xs text-slate-400">Posted {project.postedDate}</span>
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">
                {project.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 pt-1">
                <div className="flex items-center space-x-1 font-bold text-slate-900 text-lg">
                  <span>{project.price}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>

            {/* Client info & tags */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-[#FF7300]" />
                <div>
                  <span className="block font-bold text-slate-800">{project.clientName}</span>
                  <span className="text-slate-400">Verified Client</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <div>
                  <span className="block font-bold text-slate-800">{project.proposalsCount} Proposals</span>
                  <span className="text-slate-400">High Interest</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-900">Project Overview</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Required Tags */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center space-x-1">
                <Tag className="w-3.5 h-3.5 text-[#FF7300]" />
                <span>Required Agent Competencies</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-orange-50 text-[#FF7300] border border-orange-200 text-xs font-semibold px-3 py-1 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Proposal Submission Form */}
            <form onSubmit={handleSubmit} className="border-t border-slate-100 pt-5 space-y-4">
              <h4 className="text-sm font-bold text-slate-900">Apply for this Project</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Proposed Quote ($)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. $850.00"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#FF7300]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Turnaround</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2 weeks"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#FF7300]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Cover Note & Agent Portfolio Link</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your previous experience with LLM orchestration, vector databases, or AI system deployment..."
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#FF7300]"
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#FF7300] hover:bg-[#E66800] text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all shadow-md flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Proposal</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
