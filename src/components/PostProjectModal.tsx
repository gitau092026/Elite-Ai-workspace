import React, { useState } from 'react';
import { Project } from '../data/marketplaceData';
import { X, Plus, Sparkles, CheckCircle2 } from 'lucide-react';

interface PostProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (newProject: Project) => void;
}

export const PostProjectModal: React.FC<PostProjectModalProps> = ({
  isOpen,
  onClose,
  onAddProject
}) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState<'Fixed price project' | 'Hourly price project'>('Fixed price project');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('1 to 3 months');
  const [tagsInput, setTagsInput] = useState('');
  const [description, setDescription] = useState('');
  const [clientName, setClientName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tagArray = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const newProject: Project = {
      id: `proj-${Date.now()}`,
      type,
      title,
      price: price.startsWith('$') ? price : `$ ${price}`,
      duration,
      location: 'Remote',
      tags: tagArray.length > 0 ? tagArray : ['AI Agent', 'Automation'],
      description,
      clientName: clientName || 'Verified Employer',
      postedDate: 'Just now',
      proposalsCount: 0
    };

    onAddProject(newProject);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setTitle('');
      setPrice('');
      setTagsInput('');
      setDescription('');
      setClientName('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Project Published Live!</h3>
            <p className="text-slate-600 text-sm">
              Your AI Agent project is now visible on the Elite AI Workspace homepage. Top developers will start applying right away!
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-[#FF7300] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Post a New Opportunity</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Post AI Agent Project
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-slate-800">
              {/* Project Title */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Project Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI Agent for Voice Support & CRM Lead Intake"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#FF7300]"
                />
              </div>

              {/* Type and Price Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Pricing Model</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as any)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#FF7300] bg-white"
                  >
                    <option value="Fixed price project">Fixed price project</option>
                    <option value="Hourly price project">Hourly price project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Budget / Hourly Rate</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. $ 1,500.00 or $ 45.00/hr"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#FF7300]"
                  />
                </div>
              </div>

              {/* Client Name & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Client Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Nova AI Labs"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#FF7300]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Duration</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#FF7300] bg-white"
                  >
                    <option value="Less than 1 month">Less than 1 month</option>
                    <option value="1 to 3 months">1 to 3 months</option>
                    <option value="3 to 6 months">3 to 6 months</option>
                    <option value="More than 6 months">More than 6 months</option>
                  </select>
                </div>
              </div>

              {/* Skill Tags */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Required Tags (comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Python, LangChain, WhatsApp API, App Builders"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#FF7300]"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Detailed Description</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Explain the technical scope, AI tools, desired outcomes, and developer skills needed..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#FF7300]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#FF7300] hover:bg-[#E66800] text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all shadow-md flex items-center space-x-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Project</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
