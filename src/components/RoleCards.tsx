import React from 'react';
import { Store, Building2, Users2, Plus } from 'lucide-react';

interface RoleCardsProps {
  onSelectRole: (roleTitle: string) => void;
}

export const RoleCards: React.FC<RoleCardsProps> = ({ onSelectRole }) => {
  const roles = [
    {
      id: 'developer',
      title: 'AI Agent Developer',
      description: 'Apply for positions as a AI Agent Developer and take control of your career',
      icon: Store
    },
    {
      id: 'employer',
      title: 'Employer',
      description: 'Hire key staff as an employer and build your dream team',
      icon: Building2
    },
    {
      id: 'community',
      title: 'Community',
      description: 'Collaborate as a community and achieve more together',
      icon: Users2
    }
  ];

  return (
    <section id="developer-network" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role) => {
            const IconComp = role.icon;
            return (
              <div
                key={role.id}
                onClick={() => onSelectRole(role.title)}
                className="group bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-orange-300 transition-all duration-300 cursor-pointer flex flex-col items-center text-center shadow-sm hover:shadow-xl"
              >
                {/* Orange Circular Icon with Plus Badge */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#FF7300] rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
                    <IconComp className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-7 h-7 bg-orange-400 border-2 border-white rounded-full flex items-center justify-center shadow-md">
                    <Plus className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#FF7300] transition-colors">
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-xs">
                  {role.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
