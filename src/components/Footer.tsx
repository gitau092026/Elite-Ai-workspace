import React from 'react';
import { Bot, Phone, Mail, MessageCircle, Calendar } from 'lucide-react';

interface FooterProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  onOpenBookCall: () => void;
  onOpenWhatsApp?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookCall, onOpenWhatsApp }) => {
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Agent Templates', id: 'templates' },
    { label: 'Pricing Plans', id: 'pricing' },
    { label: 'About Us', id: 'about' },
    { label: 'FAQs', id: 'faqs' }
  ];

  const handleLinkClick = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <footer id="contact" className="bg-[#0D121F] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="bg-[#FF7300] px-3.5 py-2 rounded-xl flex items-center space-x-2">
                <Bot className="w-5 h-5 text-white" />
                <span className="font-bold text-xl text-white tracking-tight">
                  Elite AI Workspace
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Custom AI & autonomous agent solutions built for enterprise and SMB growth. We streamline support, sales, and back-office operations with zero human friction.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBookCall}
                className="bg-[#FF7300] hover:bg-[#E66800] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Strategy Call</span>
              </button>
            </div>
          </div>

          {/* Navigation Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-tight uppercase">
              Quick Navigation
            </h4>

            <div className="flex flex-col space-y-2 text-xs text-slate-400 font-medium">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-left hover:text-[#FF7300] transition-colors py-0.5 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-tight uppercase">
              Get In Touch
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#FF7300] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">+254 (0) 711 108 313</div>
                  <div className="text-slate-400 text-[11px]">(Mon to Sun 9AM - 11PM)</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#FF7300] flex-shrink-0" />
                <a href="mailto:info@eliteaiworkspace.com" className="hover:text-white transition-colors">
                  info@eliteaiworkspace.com
                </a>
              </div>

              {/* WhatsApp */}
              {onOpenWhatsApp && (
                <div
                  onClick={onOpenWhatsApp}
                  className="flex items-start space-x-3 cursor-pointer group"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white group-hover:text-[#25D366] transition-colors">
                      +254 (0) 711 108 313
                    </div>
                    <div className="text-slate-400 text-[11px]">Instant WhatsApp Support</div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          
          {/* Legal Links */}
          <div className="flex items-center space-x-6 font-medium">
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#security" className="hover:text-white transition-colors">Security & SOC2</a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-slate-400">
            Copyright © 2025 Elite AI Workspace. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
};
