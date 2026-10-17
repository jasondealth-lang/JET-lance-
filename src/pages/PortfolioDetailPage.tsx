import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowLeft, 
  ArrowRight, 
  Lock, 
  ShieldCheck, 
  CheckCircle2, 
  Package, 
  Layers, 
  Code2, 
  ExternalLink 
} from 'lucide-react';
import { 
  AgencyDesignShowcase,
  NorthstarLandingShowcase,
  VideoStoryboardShowcase,
  AutomationPipelineShowcase,
  SupportConsoleShowcase,
  ContentRefinementDiffShowcase
} from '../components/portfolio/ProjectShowcases';

interface PortfolioDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export const PortfolioDetailPage: React.FC<PortfolioDetailPageProps> = ({ slug, navigate }) => {
  const { getProjectBySlug, canAccessProject, isAuthenticated } = useApp();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#faf9f5] flex items-center justify-center p-6">
        <div className="max-w-md text-center space-y-4 bg-white p-8 rounded-lg border border-[#0b132b]/8">
          <h2 className="text-xl font-bold text-[#0b132b]">Project Not Found</h2>
          <p className="text-xs text-[#0b132b]/60">The case study "{slug}" does not exist in our portfolio directory.</p>
          <button
            onClick={() => navigate('/portfolio')}
            className="px-4 py-2 bg-[#0b132b] text-white text-xs font-semibold rounded cursor-pointer"
          >
            ← Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const access = canAccessProject(project);

  return (
    <div className="min-h-screen bg-[#faf9f5] py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b132b]/60 hover:text-[#0b132b] mb-8 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio Gallery</span>
        </button>

        {/* Header Block */}
        <div className="bg-white border border-[#0b132b]/8 rounded-lg p-8 sm:p-12 mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#2563eb]">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#0b132b]/50">{project.year}</span>
            </div>
            <div>
              {project.access_level === 'PUBLIC_PREVIEW' && (
                <span className="bg-[#0b132b]/10 text-[#0b132b] px-2.5 py-1 rounded">
                  Public Preview
                </span>
              )}
              {project.access_level === 'REGISTERED' && (
                <span className="bg-[#2563eb]/10 text-[#2563eb] px-2.5 py-1 rounded flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>Registered Access Required</span>
                </span>
              )}
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0b132b] leading-[1.15]">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#0b132b]/70 leading-relaxed max-w-3xl font-medium">
            {project.tagline}
          </p>

          {/* Demonstration Concept Label */}
          <div className="pt-4 border-t border-[#0b132b]/8 flex items-center gap-2 text-xs text-[#0b132b]/70">
            <ShieldCheck className="w-4 h-4 text-[#2563eb] shrink-0" />
            <span>
              <strong>Concept Classification:</strong> {project.client_type}
            </span>
          </div>
        </div>

        {/* Project Cover Media */}
        <div className="rounded-lg overflow-hidden border border-[#0b132b]/10 mb-10 shadow-sm aspect-[16/9] bg-black">
          <img
            src={project.cover_image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* ACCESS CONTROL CHECK */}
        {!access.allowed ? (
          <div className="bg-white border border-[#0b132b]/8 rounded-lg p-8 sm:p-12 text-center space-y-5 my-8">
            <div className="w-12 h-12 bg-[#2563eb]/10 text-[#2563eb] rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#0b132b]">
              Registered Client Access Required
            </h2>
            <p className="text-xs sm:text-sm text-[#0b132b]/70 max-w-lg mx-auto leading-relaxed">
              This in-depth architectural case study and interactive simulation are reserved for registered clients and studio partners. Create a free account or sign in to unlock full deliverables, codebase notes, and interactive consoles.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => navigate('/login')}
                className="px-5 py-2.5 bg-[#0b132b] text-white rounded text-xs font-semibold cursor-pointer hover:bg-black transition-colors"
              >
                Sign In to Account
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="px-5 py-2.5 bg-[#2563eb] text-white rounded text-xs font-semibold cursor-pointer hover:bg-blue-600 transition-colors"
              >
                Register Free Client Account
              </button>
            </div>
          </div>
        ) : (
          /* FULL UNLOCKED CASE STUDY CONTENT */
          <div className="space-y-10">
            
            {/* 1. Overview */}
            <div className="bg-white border border-[#0b132b]/8 rounded-lg p-8 space-y-4">
              <h2 className="text-lg font-bold text-[#0b132b] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#2563eb]" />
                <span>Executive Overview</span>
              </h2>
              <p className="text-sm text-[#0b132b]/80 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* 2. Challenge vs Solution Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 sm:p-8 space-y-3">
                <h3 className="text-sm font-bold text-red-950 uppercase tracking-wide">
                  The Industry Challenge
                </h3>
                <p className="text-xs text-[#0b132b]/80 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 sm:p-8 space-y-3">
                <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wide">
                  The JET lancer Engineering Solution
                </h3>
                <p className="text-xs text-[#0b132b]/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* 3. Dedicated Interactive Demonstration Component */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#2563eb] uppercase tracking-wider block">
                Interactive Concept Environment
              </span>
              {project.interactive_type === 'agency_showcase' && <AgencyDesignShowcase />}
              {project.interactive_type === 'landing_preview' && <NorthstarLandingShowcase />}
              {project.interactive_type === 'video_storyboard' && <VideoStoryboardShowcase />}
              {project.interactive_type === 'automation_flow' && <AutomationPipelineShowcase />}
              {project.interactive_type === 'support_console' && <SupportConsoleShowcase />}
              {project.interactive_type === 'editorial_diff' && <ContentRefinementDiffShowcase />}
            </div>

            {/* 4. Key Deliverables Manifest */}
            <div className="bg-white border border-[#0b132b]/8 rounded-lg p-8 space-y-6">
              <h3 className="text-base font-bold text-[#0b132b] flex items-center gap-2">
                <Package className="w-4 h-4 text-[#2563eb]" />
                <span>Verified Deliverables Manifest</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.key_deliverables.map((deliv, idx) => (
                  <div key={idx} className="p-4 bg-[#faf9f5] border border-[#0b132b]/6 rounded space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-[#0b132b]">{deliv.title}</h4>
                      {deliv.format && (
                        <span className="font-mono text-[10px] text-[#2563eb] bg-white px-2 py-0.5 rounded border border-[#0b132b]/8">
                          {deliv.format}
                        </span>
                      )}
                    </div>
                    <p className="text-[#0b132b]/70 leading-relaxed">
                      {deliv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Architecture & Technical Notes */}
            {project.architecture_notes && (
              <div className="bg-white border border-[#0b132b]/8 rounded-lg p-8 space-y-3">
                <h3 className="text-sm font-bold text-[#0b132b] flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#2563eb]" />
                  <span>Technical Architecture & Security Model</span>
                </h3>
                <p className="text-xs text-[#0b132b]/80 leading-relaxed font-mono">
                  {project.architecture_notes}
                </p>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="bg-[#0b132b] text-white p-8 rounded-lg text-center space-y-4">
              <h3 className="text-xl font-bold">
                Deploy Similar Architecture for Your Business
              </h3>
              <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
                Contact our engineering team to discuss custom scope, timelines, and technical requirements.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 bg-[#2563eb] hover:bg-blue-600 text-white rounded text-xs font-semibold cursor-pointer transition-colors shadow-sm"
              >
                Initiate Project Discovery →
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
