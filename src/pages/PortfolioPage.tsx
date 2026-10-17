import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PortfolioProject, AccessLevel } from '../types';
import { 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Eye, 
  UserCheck, 
  Sparkles 
} from 'lucide-react';

interface PortfolioPageProps {
  navigate: (path: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ navigate }) => {
  const { projects, canAccessProject, isAuthenticated } = useApp();
  const [accessFilter, setAccessFilter] = useState<'ALL' | AccessLevel>('ALL');

  const filteredProjects = projects.filter((p) => {
    if (!p.is_published) return false;
    if (accessFilter === 'ALL') return true;
    return p.access_level === accessFilter;
  });

  return (
    <div className="min-h-screen bg-[#faf9f5] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#2563eb] uppercase tracking-wider">
            <span>Demonstration Portfolio</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#0b132b]/60">Original Concepts</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0b132b]">
            Architectural Demonstrations
          </h1>
          <p className="text-sm sm:text-base text-[#0b132b]/70 leading-relaxed">
            Six original case studies demonstrating design standards, interactive software architecture, and humanized content workflows across digital agencies, landing pages, generative video, automation, and customer support.
          </p>
        </div>

        {/* Clear Demonstration Concept Notice */}
        <div className="mb-10 p-4 bg-white border border-[#0b132b]/8 rounded-lg flex items-start gap-3 text-xs text-[#0b132b]/80 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-[#0b132b]">Important Notice on Demonstration Concepts</p>
            <p className="text-[#0b132b]/70 leading-relaxed">
              These six projects are original demonstration concepts developed specifically to transparently illustrate our design systems, coding patterns, and workflow architectures. JET lancer never fabricates client testimonials, awards, or false deployment statistics.
            </p>
          </div>
        </div>

        {/* Access Level Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-white border border-[#0b132b]/8 rounded-lg max-w-fit">
          <button
            onClick={() => setAccessFilter('ALL')}
            className={`px-3 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors ${
              accessFilter === 'ALL' ? 'bg-[#0b132b] text-white' : 'text-[#0b132b]/70 hover:text-[#0b132b]'
            }`}
          >
            All Projects (6)
          </button>
          <button
            onClick={() => setAccessFilter('PUBLIC_PREVIEW')}
            className={`px-3 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors ${
              accessFilter === 'PUBLIC_PREVIEW' ? 'bg-[#0b132b] text-white' : 'text-[#0b132b]/70 hover:text-[#0b132b]'
            }`}
          >
            Public Previews
          </button>
          <button
            onClick={() => setAccessFilter('REGISTERED')}
            className={`px-3 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors ${
              accessFilter === 'REGISTERED' ? 'bg-[#0b132b] text-white' : 'text-[#0b132b]/70 hover:text-[#0b132b]'
            }`}
          >
            Registered Client Access
          </button>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const access = canAccessProject(project);

            return (
              <div
                key={project.id}
                onClick={() => navigate(`/portfolio/${project.slug}`)}
                className="bg-white border border-[#0b132b]/8 hover:border-[#2563eb]/50 rounded-lg overflow-hidden transition-all hover:shadow-lg cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Project Cover Media */}
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    <img
                      src={project.cover_image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />

                    {/* Access Tier Tag */}
                    <div className="absolute top-3 right-3">
                      {project.access_level === 'PUBLIC_PREVIEW' && (
                        <span className="bg-[#0b132b]/90 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded">
                          Public Preview
                        </span>
                      )}
                      {project.access_level === 'REGISTERED' && (
                        <span className="bg-[#2563eb]/90 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" />
                          <span>Registered Access</span>
                        </span>
                      )}
                      {project.access_level === 'PRIVATE' && (
                        <span className="bg-red-800/90 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded">
                          Private Owner Only
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#2563eb] mb-2">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#0b132b]/50">{project.year}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0b132b] mb-2 group-hover:text-[#2563eb] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#0b132b]/70 leading-relaxed line-clamp-3 mb-4">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-[11px] font-mono text-[#0b132b]/60">
                          #{tag}{idx < project.tags.length - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#0b132b]/6 flex items-center justify-between text-xs font-semibold text-[#0b132b]">
                    <span>
                      {access.allowed ? 'Open Case Study' : 'Sign In to Unlock'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2563eb] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
