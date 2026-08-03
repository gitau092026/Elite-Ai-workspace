import React from 'react';
import { Project } from '../data/marketplaceData';
import { MapPin, Clock, DollarSign, Filter, SearchX, PlusCircle, ArrowUpRight } from 'lucide-react';

interface ProjectListingsProps {
  projects: Project[];
  selectedCategory: string | null;
  searchQuery: string;
  onSelectProject: (project: Project) => void;
  onOpenPostProject: () => void;
  onClearFilters: () => void;
}

export const ProjectListings: React.FC<ProjectListingsProps> = ({
  projects,
  selectedCategory,
  searchQuery,
  onSelectProject,
  onOpenPostProject,
  onClearFilters
}) => {
  return (
    <section id="projects-section" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Active Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[#FF7300] font-semibold text-xs tracking-wider uppercase mb-1">
              <span>Featured Marketplace Listings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {selectedCategory ? `Projects in "${selectedCategory}"` : 'Explore Available AI Projects'}
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            {(selectedCategory || searchQuery) && (
              <button
                onClick={onClearFilters}
                className="text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1"
              >
                <SearchX className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
            <button
              onClick={onOpenPostProject}
              className="bg-[#FF7300] hover:bg-[#E66800] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-sm flex items-center space-x-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post New Project</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center my-8 max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 bg-orange-100 text-[#FF7300] rounded-full flex items-center justify-center mx-auto">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No projects found matching your search</h3>
            <p className="text-sm text-slate-600">
              Try adjusting your keyword filter or browse all available categories.
            </p>
            <button
              onClick={onClearFilters}
              className="inline-block bg-[#FF7300] text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => {
              const isFixed = project.type === 'Fixed price project';

              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group bg-white border border-slate-200/90 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-orange-300 flex flex-col justify-between cursor-pointer relative"
                >
                  <div className="space-y-4">
                    {/* Project Type Badge Tag */}
                    <div>
                      <span
                        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                          isFixed
                            ? 'bg-sky-100/90 text-sky-800 border border-sky-200'
                            : 'bg-emerald-100/90 text-emerald-800 border border-emerald-200'
                        }`}
                      >
                        {project.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#FF7300] transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Price */}
                    <div className="text-lg font-extrabold text-slate-900 pt-1">
                      {project.price}
                    </div>

                    {/* Duration & Location */}
                    <div className="space-y-1 text-xs text-slate-500 pt-1">
                      <div className="flex items-center space-x-1.5">
                        <span className="font-medium text-slate-700">Duration:</span>
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags Pill Footer */}
                  <div className="pt-6 mt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Corner Hover Arrow Indicator */}
                  <div className="absolute top-4 right-4 text-slate-300 group-hover:text-[#FF7300] transition-colors">
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
