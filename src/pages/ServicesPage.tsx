import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { ServiceCategoryCode } from '../types';
import { Search, ArrowRight, Check, Sparkles, Filter, ExternalLink } from 'lucide-react';

interface ServicesPageProps {
  navigate: (path: string) => void;
  initialCategory?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ navigate, initialCategory }) => {
  const { services } = useApp();
  const [selectedCat, setSelectedCat] = useState<string>(initialCategory || 'ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return services.filter((srv) => {
      if (!srv.is_published) return false;
      const matchesCat = selectedCat === 'ALL' || srv.category_code === selectedCat;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.short_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.category_name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [services, selectedCat, searchQuery]);

  return (
    <div className="min-h-screen bg-[#faf9f5] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#2563eb] uppercase tracking-wider">
            <span>Specialized Capabilities Catalog</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#0b132b]/60">84 Services Across 5 Practices</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0b132b]">
            Services & Technical Capabilities
          </h1>
          <p className="text-sm sm:text-base text-[#0b132b]/70 leading-relaxed">
            From generative video pipelines and automated AI agents to custom React portals and humanized editorial refinement. We build software that performs reliably in production.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="mb-10 space-y-4">
          
          {/* Practice Segmented Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-[#0b132b]/8 rounded-lg">
            <button
              onClick={() => setSelectedCat('ALL')}
              className={`px-3.5 py-1.5 rounded text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCat === 'ALL'
                  ? 'bg-[#0b132b] text-white shadow-xs'
                  : 'text-[#0b132b]/70 hover:text-[#0b132b] hover:bg-[#faf9f5]'
              }`}
            >
              All Practices (84)
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.code}
                onClick={() => setSelectedCat(cat.code)}
                className={`px-3.5 py-1.5 rounded text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCat === cat.code
                    ? 'bg-[#0b132b] text-white shadow-xs'
                    : 'text-[#0b132b]/70 hover:text-[#0b132b] hover:bg-[#faf9f5]'
                }`}
              >
                Practice {cat.code}: {cat.short_title} ({cat.count})
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#0b132b]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all 84 capabilities (e.g. video, automation, portal, agent, copywriting)..."
              className="w-full bg-white border border-[#0b132b]/10 rounded-lg pl-10 pr-4 py-2.5 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb]"
            />
          </div>

        </div>

        {/* Results Counter and Filter Info */}
        <div className="flex items-center justify-between text-xs text-[#0b132b]/60 mb-6 font-mono">
          <span>Showing {filteredServices.length} matching capabilities</span>
          {selectedCat !== 'ALL' && (
            <button
              onClick={() => setSelectedCat('ALL')}
              className="text-[#2563eb] hover:underline cursor-pointer"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Services Grid (Organized and distinct, never 84 repetitive empty cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.slug}`)}
              className="bg-white border border-[#0b132b]/8 hover:border-[#2563eb]/50 rounded-lg p-6 transition-all hover:shadow-md cursor-pointer group flex flex-col justify-between"
            >
              <div>
                
                {/* Unboxed Metadata (Zero-pill discipline) */}
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#2563eb] font-semibold">
                    Practice {service.category_code} · #{service.service_number}
                  </span>
                  <span className="text-[#0b132b]/40">{service.category_name}</span>
                </div>

                <h3 className="text-base font-bold text-[#0b132b] mb-2 group-hover:text-[#2563eb] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-[#0b132b]/70 leading-relaxed mb-4">
                  {service.short_description}
                </p>

                {/* Problem Addressed Snippet */}
                <div className="pt-3 border-t border-[#0b132b]/6 text-[11px] text-[#0b132b]/60 space-y-1 mb-4">
                  <p className="font-semibold text-[#0b132b]/80">Problem Addressed:</p>
                  <p className="line-clamp-2 italic">"{service.problem_statement}"</p>
                </div>

              </div>

              {/* Card Footer with Details link */}
              <div className="pt-3 border-t border-[#0b132b]/6 flex items-center justify-between text-xs font-semibold text-[#0b132b]">
                <span className="text-[#2563eb] group-hover:underline">
                  Full Service Specification
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2563eb] group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredServices.length === 0 && (
          <div className="p-12 text-center bg-white border border-[#0b132b]/8 rounded-lg space-y-3">
            <p className="text-sm font-bold text-[#0b132b]">No services match your search query.</p>
            <p className="text-xs text-[#0b132b]/60">Try searching for broader terms like "automation", "video", or "website".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCat('ALL'); }}
              className="px-4 py-2 bg-[#0b132b] text-white rounded text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
