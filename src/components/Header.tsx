import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, Calendar } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBookCall: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenBookCall }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'templates', label: 'Templates' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const handleNavClick = (pageId: string) => {
    setMobileMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
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
          {/* Orange pill — icon only on mobile, icon + text on desktop */}
          <div className="bg-[#FF7300] hover:bg-[#E66800] transition-colors px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl flex items-center space-x-2.5 shadow-lg shadow-orange-900/30">
            <div className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-white/20 rounded-lg flex-shrink-0">
              <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            </div>
            {/* Text inside pill — hidden on mobile */}
            <div className="hidden sm:flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white leading-none">
                Elite AI Workspace
              </span>
              <span className="text-[10px] font-semibold text-orange-200 tracking-wider uppercase leading-tight pt-0.5">
                AI Solutions
              </span>
            </div>
          </div>

          {/* Text outside pill — mobile only */}
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
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
                  isActive
                    ? 'bg-slate-800 text-[#FF7300] font-bold border border-orange-500/30 shadow-sm'
                    : 'hover:text-[#FF7300] hover:bg-slate-800/50 text-slate-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Book Call button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onOpenBookCall}
            className="bg-[#FF7300] hover:bg-[#E66800] text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-orange-900/30 flex items-center space-x-2 group cursor-pointer hover:scale-[1.02]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Call</span>
          </button>
        </div>

        {/* Mobile — hamburger only (Book Call is inside the drawer) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden text-slate-300 hover:text-white p-2 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>


      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131B2E] border-t border-slate-800 px-6 pt-4 pb-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3 font-medium text-slate-200 text-sm">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2 px-3 rounded-lg border-b border-slate-800/60 transition-colors ${
                    isActive ? 'text-[#FF7300] font-bold bg-slate-800/60' : 'hover:text-[#FF7300]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookCall();
              }}
              className="w-full bg-[#FF7300] hover:bg-[#E66800] text-white text-sm font-bold py-3 rounded-xl shadow-md flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
