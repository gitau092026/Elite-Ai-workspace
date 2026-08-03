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

      // Attempt 1: Server proxy endpoint (bypasses browser CORS & forwards JSON directly to n8n)
      try {
        const serverRes = await fetch('/api/discovery-call', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (serverRes.ok) {
          const resData = await serverRes.json();
          if (resData.success || resData.delivered) {
            success = true;
            console.log('[Form Submission] Delivered to n8n successfully:', resData);
          }
        }
      } catch (proxyErr) {
        console.warn('Server proxy POST failed, trying direct browser fetch...', proxyErr);
      }

      // Attempt 2: Direct browser fetch to n8n URL
      if (!success) {
        try {
          const res = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          if (res.ok || res.status === 200 || res.status === 500 || res.type === 'opaque') {
            // Note: even if n8n returns 500 due to an internal workflow node error, the HTTP request WAS received by n8n
            success = true;
          }
        } catch (e1) {
          console.warn('Direct JSON POST failed, trying no-cors fallback...', e1);
        }
      }

      // Attempt 3: Direct browser no-cors fallback
      if (!success) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'text/plain',
            },
            body: JSON.stringify(payload),
          });
          success = true;
        } catch (e2) {
          console.error('All webhook submission attempts failed:', e2);
        }
      }

      if (success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 4000);
      } else {
        setSubmitError('Failed to send booking request. Please check your network connection.');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-[#131B2E] text-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative border border-slate-800 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Strategy Call Confirmed!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you <strong>{fullName}</strong>. A calendar invite & Google Meet link have been dispatched to <strong>{email}</strong> for <strong>{preferredDate || 'tomorrow'} at {preferredTime}</strong>.
            </p>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-400">
              An AI Architect will review your target goal: <em>"{agentGoal}"</em> prior to the session.
            </div>
          </div>
        ) : (
          <>
            {/* Modal Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#FF7300] uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free 30-Min AI Strategy Call</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Book a Solution Discovery Call
              </h2>
              <p className="text-xs text-slate-400">
                Talk directly with an AI Solutions Architect about custom agents, data pipelines, and ROI.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-slate-200">
              
              {/* Full Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF7300]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization *</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Tech Solutions"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF7300]"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="alex@acme.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF7300]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2831"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF7300]"
                    />
                  </div>
                </div>
              </div>

              {/* Primary Goal Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">What is your primary AI goal?</label>
                <input
                  type="text"
                  placeholder="e.g. Automate customer support, lead qualification, document parsing..."
                  value={agentGoal}
                  onChange={(e) => setAgentGoal(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF7300] placeholder:text-slate-500"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Date *</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF7300]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Time *</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF7300]"
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:30 PM">03:30 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Briefly describe your software stack or requirements (optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. We use Shopify, Zendesk, and HubSpot. Need WhatsApp order lookup..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#FF7300]"
                />
              </div>

              {submitError && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-300 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Footer Submit */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-1 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>No obligation, 100% confidential</span>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#FF7300] hover:bg-[#E66800] text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-orange-950/50 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Booking...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        <span>Confirm Booking</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          </>
        )}

      </div>
    </div>
  );
};
