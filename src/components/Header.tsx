import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Bot, Calendar, Home, Layers, LayoutTemplate, DollarSign, Info, HelpCircle } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBookCall: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenBookCall }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on outside tap
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileMenuOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home',      label: 'Home',      Icon: Home },
    { id: 'services',  label: 'Services',  Icon: Layers },
    { id: 'templates', label: 'Templates', Icon: LayoutTemplate },
    { id: 'pricing',   label: 'Pricing',   Icon: DollarSign },
    { id: 'about',     label: 'About',     Icon: Info },
    { id: 'faqs',      label: 'FAQs',      Icon: HelpCircle },
  ];

  const handleNavClick = (pageId: string) => {
    setMobileMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full border-b text-white transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D121F]/98 backdrop-blur-xl border-slate-700/80 shadow-2xl shadow-black/40'
          : 'bg-[#0D121F]/95 backdrop-blur-md border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between">

          {/* Brand Logo */}
          <div
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-[#FF7300] hover:bg-[#E66800] transition-colors px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl flex items-center space-x-2.5 shadow-lg shadow-orange-900/30">
              <div className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-white/20 rounded-lg flex-shrink-0">
                <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-none">
                  Elite AI Workspace
                </span>
                <span className="text-[10px] font-semibold text-orange-200 tracking-wider uppercase leading-tight pt-0.5">
                  AI Solutions
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:hidden">
              <span className="font-extrabold text-sm tracking-tight text-white leading-none">
                Elite AI Workspace
              </span>
              <span className="text-[9px] font-semibold text-orange-300 tracking-wider uppercase leading-tight pt-0.5">
                AI Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-2 text-sm font-medium text-slate-300">
            {navLinks.map(({ id, label }) => {
              const isActive = currentPage === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
                    isActive
                      ? 'bg-slate-800 text-[#FF7300] font-bold border border-orange-500/30 shadow-sm'
                      : 'hover:text-[#FF7300] hover:bg-slate-800/50 text-slate-300'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Book Call */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenBookCall}
              className="bg-[#FF7300] hover:bg-[#E66800] text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-orange-900/30 flex items-center space-x-2 cursor-pointer hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Call</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden text-slate-300 hover:text-white p-2.5 -mr-1 rounded-xl focus:outline-none active:bg-slate-800/60"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile — full-screen overlay + slide-in drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div
            ref={drawerRef}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] bg-[#131B2E] border-l border-slate-800 flex flex-col md:hidden animate-slideUp"
            style={{ animation: 'slideInRight 0.25s ease-out' }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
              <span className="font-extrabold text-white text-sm tracking-tight">Navigation</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
              {navLinks.map(({ id, label, Icon }) => {
                const isActive = currentPage === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold text-left transition-all ${
                      isActive
                        ? 'bg-orange-500/15 text-[#FF7300] border border-orange-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                    }`}
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#FF7300]' : 'text-slate-500'}`} />
                    {label}
                  </button>
                );
              })}
            </nav>

            {/* Book call button at bottom */}
            <div className="px-4 py-5 border-t border-slate-800 safe-bottom">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBookCall(); }}
                className="w-full bg-[#FF7300] hover:bg-[#E66800] text-white text-sm font-bold py-3.5 rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Strategy Call</span>
              </button>
            </div>
          </div>

          {/* Inline keyframe for slide-in from right */}
          <style>{`
            @keyframes slideInRight {
              from { transform: translateX(100%); opacity: 0; }
              to   { transform: translateX(0);    opacity: 1; }
            }
          `}</style>
        </>
      )}
    </>
  );
};
