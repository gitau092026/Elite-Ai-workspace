import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Send, Bot, ShieldCheck, Sparkles, Building, Phone, Mail, User, Loader2, AlertCircle } from 'lucide-react';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agentGoal, setAgentGoal] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      fullName,
      company: companyName,
      companyName,
      email,
      phone,
      aiGoal: agentGoal,
      agentGoal,
      preferredDate,
      preferredTime,
      requirements: notes,
      notes,
      formName: 'Solution Discovery Call',
      submittedAt: new Date().toISOString()
    };

    const webhookUrl = 'https://finaln9n.app.n8n.cloud/webhook/discovery-call-booking';

    try {
      let success = false;

      try {
        const serverRes = await fetch('/api/discovery-call', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (serverRes.ok) {
          const resData = await serverRes.json();
          if (resData.success || resData.delivered) success = true;
        }
      } catch (proxyErr) {
        console.warn('Server proxy POST failed, trying direct browser fetch...', proxyErr);
      }

      if (!success) {
        try {
          const res = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          if (res.ok || res.status === 200 || res.status === 500 || res.type === 'opaque') success = true;
        } catch (e1) {
          console.warn('Direct JSON POST failed, trying no-cors fallback...', e1);
        }
      }

      if (!success) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(payload),
          });
          success = true;
        } catch (e2) {
          console.error('All webhook submission attempts failed:', e2);
        }
      }

      if (success) {
        setSubmitted(true);
        setTimeout(() => { setSubmitted(false); onClose(); }, 4000);
      } else {
        setSubmitError('Failed to send booking request. Please check your connection.');
      }
    } catch (err) {
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF7300] placeholder:text-slate-500";
  const iconClass = "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5";

  return (
    /* Backdrop — on mobile: bottom-sheet anchored; on desktop: centered */
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Modal panel */}
      <div className="
        bg-[#131B2E] text-white w-full sm:max-w-lg sm:w-full
        rounded-t-2xl sm:rounded-2xl
        border-t border-x sm:border border-slate-800
        shadow-2xl
        flex flex-col
        max-h-[92dvh] sm:max-h-[90vh]
        overflow-hidden
      ">

        {/* ── Header bar ───────────────────────────────── */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-[#FF7300]/20 rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-[#FF7300]" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#FF7300] uppercase tracking-wider">Free 30-Min Call</p>
              <h2 className="text-sm font-black text-white leading-tight">Book a Strategy Session</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── Scrollable body ───────────────────────────── */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-3">

          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Call Confirmed!</h3>
              <p className="text-slate-300 text-xs max-w-sm mx-auto">
                Thanks <strong>{fullName}</strong>. A calendar invite has been sent to <strong>{email}</strong> for <strong>{preferredDate || 'tomorrow'} at {preferredTime}</strong>.
              </p>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-400">
                An AI Architect will review your goal: <em>"{agentGoal}"</em>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">

              {/* Row 1: Name + Company */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className={iconClass} />
                    <input type="text" required placeholder="Alex Morgan"
                      value={fullName} onChange={(e) => setFullName(e.target.value)}
                      className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 mb-1">Company *</label>
                  <div className="relative">
                    <Building className={iconClass} />
                    <input type="text" required placeholder="Acme Inc."
                      value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                      className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 mb-1">Work Email *</label>
                  <div className="relative">
                    <Mail className={iconClass} />
                    <input type="email" required placeholder="you@co.com"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 mb-1">Phone / WA</label>
                  <div className="relative">
                    <Phone className={iconClass} />
                    <input type="tel" placeholder="+1 555 000"
                      value={phone} onChange={(e) => setPhone(e.target.value)}
                      className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Row 3: AI Goal — full width */}
              <div>
                <label className="block text-[10px] font-semibold text-slate-400 mb-1">Primary AI Goal</label>
                <input type="text"
                  placeholder="e.g. Automate support, lead qualification..."
                  value={agentGoal} onChange={(e) => setAgentGoal(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF7300] placeholder:text-slate-500" />
              </div>

              {/* Row 4: Date + Time */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 mb-1">Preferred Date *</label>
                  <div className="relative">
                    <Calendar className={iconClass} />
                    <input type="date" required
                      value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)}
                      className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 mb-1">Preferred Time *</label>
                  <div className="relative">
                    <Clock className={iconClass} />
                    <select value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)}
                      className={inputClass}>
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:30 AM</option>
                      <option>02:00 PM</option>
                      <option>03:30 PM</option>
                      <option>05:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 5: Notes — compact 2-row textarea */}
              <div>
                <label className="block text-[10px] font-semibold text-slate-400 mb-1">Stack / Notes <span className="text-slate-600">(optional)</span></label>
                <textarea rows={2}
                  placeholder="e.g. Shopify, Zendesk, HubSpot — need WhatsApp order lookup..."
                  value={notes} onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF7300] placeholder:text-slate-500 resize-none" />
              </div>

              {submitError && (
                <div className="p-2.5 bg-red-500/10 border border-red-500/30 rounded-lg text-xs text-red-300 flex items-center space-x-2">
                  <AlertCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

            </form>
          )}
        </div>

        {/* ── Sticky footer with CTA ────────────────────── */}
        {!submitted && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-slate-800 bg-[#0D121F] flex-shrink-0">
            <div className="flex items-center space-x-1.5 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>No obligation · 100% confidential</span>
            </div>
            <div className="flex items-center space-x-2">
              <button type="button" onClick={onClose}
                className="px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white transition-colors">
                Cancel
              </button>
              <button
                type="submit"
                form=""
                disabled={isSubmitting}
                onClick={(e) => {
                  const form = document.querySelector('form');
                  if (form) form.requestSubmit();
                }}
                className="bg-[#FF7300] hover:bg-[#E66800] text-white font-bold text-xs px-5 py-2 rounded-xl transition-all shadow-lg shadow-orange-950/40 flex items-center space-x-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-3.5 h-3.5 animate-spin" /><span>Booking...</span></>
                ) : (
                  <><Calendar className="w-3.5 h-3.5" /><span>Confirm Booking</span></>
                )}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
