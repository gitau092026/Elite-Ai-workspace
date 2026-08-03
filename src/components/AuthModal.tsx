import React, { useState } from 'react';
import { X, Bot, Check, ArrowRight, Github, Mail, ShieldCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'signin' | 'register';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, initialMode, onClose }) => {
  const [mode, setMode] = useState<'signin' | 'register'>(initialMode);
  const [userRole, setUserRole] = useState<'developer' | 'employer'>('developer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {success ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {mode === 'signin' ? 'Welcome Back!' : 'Account Created Successfully!'}
            </h3>
            <p className="text-slate-600 text-sm">
              You are now logged into <strong>Elite AI Workspace</strong> as a registered {userRole}.
            </p>
          </div>
        ) : (
          <>
            {/* Header branding */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center space-x-2 bg-[#FF7300] text-white px-3.5 py-1.5 rounded-xl text-sm font-bold shadow-md">
                <Bot className="w-4 h-4" />
                <span>Elite AI Workspace</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {mode === 'signin' ? 'Sign In to Elite AI Workspace' : 'Create Your Free Account'}
              </h2>
              <p className="text-xs text-slate-500">
                Connect with AI systems developers & hiring managers worldwide
              </p>
            </div>

            {/* Role selector for registration */}
            {mode === 'register' && (
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setUserRole('developer')}
                  className={`py-2 rounded-lg transition-all ${
                    userRole === 'developer'
                      ? 'bg-white text-slate-900 shadow-sm font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  AI Agent Developer
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole('employer')}
                  className={`py-2 rounded-lg transition-all ${
                    userRole === 'employer'
                      ? 'bg-white text-slate-900 shadow-sm font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Employer / Client
                </button>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-slate-800">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#FF7300]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#FF7300]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#FF7300]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF7300] hover:bg-[#E66800] text-white font-bold text-sm py-3 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-slate-200" />
              <span className="flex-shrink mx-3 text-slate-400 text-xs">Or continue with</span>
              <div className="flex-grow border-t border-slate-200" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setSuccess(true);
                  setTimeout(() => { setSuccess(false); onClose(); }, 1500);
                }}
                className="flex items-center justify-center space-x-2 border border-slate-200 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Mail className="w-4 h-4 text-red-500" />
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSuccess(true);
                  setTimeout(() => { setSuccess(false); onClose(); }, 1500);
                }}
                className="flex items-center justify-center space-x-2 border border-slate-200 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-900" />
                <span>GitHub</span>
              </button>
            </div>

            {/* Toggle Mode Footer */}
            <div className="text-center pt-2 text-xs text-slate-600">
              {mode === 'signin' ? (
                <p>
                  Don't have an account?{' '}
                  <button
                    onClick={() => setMode('register')}
                    className="text-[#FF7300] font-bold hover:underline"
                  >
                    Register here
                  </button>
                </p>
              ) : (
                <p>
                  Already registered?{' '}
                  <button
                    onClick={() => setMode('signin')}
                    className="text-[#FF7300] font-bold hover:underline"
                  >
                    Sign in here
                  </button>
                </p>
              )}
            </div>
          </>
        )}

      </div>
    </div>
  );
};
