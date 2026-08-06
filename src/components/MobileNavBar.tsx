import React from 'react';
import { Home, Layers, LayoutTemplate, DollarSign, HelpCircle } from 'lucide-react';

interface MobileNavBarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NAV_ITEMS = [
  { id: 'home',      label: 'Home',      Icon: Home },
  { id: 'services',  label: 'Services',  Icon: Layers },
  { id: 'templates', label: 'Templates', Icon: LayoutTemplate },
  { id: 'pricing',   label: 'Pricing',   Icon: DollarSign },
  { id: 'faqs',      label: 'FAQs',      Icon: HelpCircle },
];

export const MobileNavBar: React.FC<MobileNavBarProps> = ({ currentPage, onNavigate }) => {
  const handleTap = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0D121F]/98 backdrop-blur-xl border-t border-slate-800 safe-bottom"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-stretch h-14">
        {NAV_ITEMS.map(({ id, label, Icon }) => {
          const isActive = currentPage === id;
          return (
            <button
              key={id}
              onClick={() => handleTap(id)}
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                isActive ? 'text-[#FF7300]' : 'text-slate-500 active:text-slate-300'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-[#FF7300]' : ''}`} />
              <span className={`text-[9px] font-semibold tracking-wide ${isActive ? 'text-[#FF7300]' : 'text-slate-500'}`}>
                {label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#FF7300] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
