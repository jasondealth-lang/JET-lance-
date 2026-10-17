import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  Check, 
  Layers, 
  Sparkles, 
  Code2, 
  Workflow, 
  PenTool, 
  ShieldCheck, 
  Video,
  Database,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const { sections, projects, services, settings, canAccessProject } = useApp();

  return (
    <div className="min-h-screen bg-[#faf9f5]">
      
      {/* Announcement Banner (from site settings) */}
      {settings.announcement_enabled && (
        <aside aria-label="Announcement" className="bg-[#0b132b] text-white py-2 px-4 text-center text-xs border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
            <span className="font-medium text-white/90">{settings.announcement_text}</span>
            <button
              onClick={() => navigate(settings.announcement_link || '/contact')}
              className="text-[#2563eb] hover:underline font-semibold ml-2 inline-flex items-center gap-1 cursor-pointer"
            >
              Consult With Our Team →
            </button>
          </div>
        </aside>
      )}

      {/* Dynamic Sections Rendered According to Site Sections Config */}
      {sections.map((section) => {
        if (!section.is_visible) return null;

        // 1. HERO SECTION
        if (section.section_type === 'hero') {
          return (
            <section
              key={section.id}
              className={`py-16 sm:py-24 border-b border-[#0b132b]/8 ${
                section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                  
                  {/* Left Column: Typography & Proposition */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Unboxed Metadata Kicker (Zero-Pill discipline) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#2563eb] uppercase tracking-wider">
                      <span>Creative Digital Technology Agency</span>
                      <span aria-hidden="true">·</span>
                      <span>Est. 2026</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0b132b] leading-[1.1] text-balance">
                      {section.config.headline}
                    </h1>

                    <p className="text-base sm:text-lg text-[#0b132b]/70 leading-relaxed max-w-2xl">
                      {section.config.subheadline}
                    </p>

                    {/* Primary and Secondary CTA Controls */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => navigate(section.config.primary_cta_link || '/contact')}
                        className="px-6 py-3.5 bg-[#0b132b] text-white hover:bg-[#1d4ed8] rounded text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-sm whitespace-nowrap shrink-0"
                      >
                        <span>{section.config.primary_cta_label || 'Start a Project'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => navigate(section.config.secondary_cta_link || '/portfolio')}
                        className="px-6 py-3.5 bg-white text-[#0b132b] border border-[#0b132b]/15 hover:border-[#0b132b]/40 rounded text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {section.config.secondary_cta_label || 'Explore Our Work'}
                      </button>
                    </div>

                    {/* Quiet Editorial Trust Signals */}
                    <div className="pt-6 border-t border-[#0b132b]/8 grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <p className="font-bold text-[#0b132b] text-base font-mono tabular-nums">84</p>
                        <p className="text-[#0b132b]/60">Capabilities in Catalog</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#0b132b] text-base font-mono tabular-nums">06</p>
                        <p className="text-[#0b132b]/60">Demonstration Concepts</p>
                      </div>
                      <div>
                        <p className="font-bold text-[#0b132b] text-base font-mono tabular-nums">&lt;24h</p>
                        <p className="text-[#0b132b]/60">Inquiry Response Time</p>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: High-Fidelity Studio Visual Asset */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-lg overflow-hidden border border-[#0b132b]/10 shadow-lg bg-slate-900 group">
                      <img
                        src={section.config.image_url || '/src/assets/images/hero_jet_lancer_studio_1792203368567.jpg'}
                        alt="JET lancer studio environment"
                        className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-500 group-hover:scale-102"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                        <span className="text-[11px] font-mono text-[#2563eb] uppercase tracking-wide">
                          Studio Architectural Baseline
                        </span>
                        <p className="text-sm font-semibold text-white/95 mt-1">
                          Where engineering rigor meets human creative direction.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        }

        // 2. SERVICES OVERVIEW SECTION
        if (section.section_type === 'services') {
          return (
            <section
              key={section.id}
              className={`py-20 border-b border-[#0b132b]/8 ${
                section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-mono text-[#2563eb] uppercase tracking-wider">
                      Specialized Disciplines
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b132b]">
                      {section.config.headline}
                    </h2>
                    <p className="text-sm sm:text-base text-[#0b132b]/70">
                      {section.config.subheadline}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate('/services')}
                    className="text-xs font-bold text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>View All 84 Capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 5 Core Practice Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <div
                      key={cat.code}
                      onClick={() => navigate(`/services?cat=${cat.code}`)}
                      className="bg-white border border-[#0b132b]/8 hover:border-[#2563eb]/40 p-6 rounded-lg transition-all hover:shadow-md cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono text-[#2563eb] font-semibold">
                            Practice 0{cat.code}
                          </span>
                          <span className="text-xs font-mono text-[#0b132b]/50 tabular-nums">
                            {cat.count} Services
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-[#0b132b] mb-2 group-hover:text-[#2563eb] transition-colors">
                          {cat.name}
                        </h3>

                        <p className="text-xs text-[#0b132b]/70 leading-relaxed mb-6">
                          {cat.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#0b132b]/6 flex items-center justify-between text-xs font-semibold text-[#0b132b]">
                        <span>Browse Practice Catalog</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#2563eb] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}

                  {/* Sixth Card: Custom Enterprise Workflow / Integration Card */}
                  <div
                    onClick={() => navigate('/contact')}
                    className="bg-[#0b132b] text-white p-6 rounded-lg flex flex-col justify-between cursor-pointer hover:bg-[#111c3d] transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-[#2563eb] font-semibold">
                          Custom Solution
                        </span>
                        <Sparkles className="w-4 h-4 text-[#2563eb]" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        Bespoke Enterprise Integration
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed mb-6">
                        Have custom business systems, legacy ERPs, or specialized AI models? We architect and build proprietary end-to-end solutions.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#2563eb]">
                      <span>Inquire About Custom Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>

              </div>
            </section>
          );
        }

        // 3. FEATURED WORK (Demonstration Concepts)
        if (section.section_type === 'featured_work') {
          return (
            <section
              key={section.id}
              className={`py-20 border-b border-[#0b132b]/8 ${
                section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-mono text-[#2563eb] uppercase tracking-wider">
                      Architectural Case Studies
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b132b]">
                      {section.config.headline}
                    </h2>
                    <p className="text-sm sm:text-base text-[#0b132b]/70">
                      {section.config.subheadline}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate('/portfolio')}
                    className="text-xs font-bold text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>View All 6 Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Demonstration Concept Notification Disclaimer */}
                <div className="mb-8 p-3.5 bg-white border border-[#0b132b]/8 rounded-lg flex items-center gap-3 text-xs text-[#0b132b]/70">
                  <ShieldCheck className="w-4 h-4 text-[#2563eb] shrink-0" />
                  <span>
                    <strong>Transparent Standard:</strong> The following projects are original demonstration concepts engineered to illustrate our design standards, code architecture, and human-in-the-loop workflows. We never invent fake client reviews or false deployment metrics.
                  </span>
                </div>

                {/* 3 Featured Projects Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {projects.slice(0, 3).map((project) => {
                    const access = canAccessProject(project);

                    return (
                      <div
                        key={project.id}
                        onClick={() => navigate(`/portfolio/${project.slug}`)}
                        className="bg-white border border-[#0b132b]/8 hover:border-[#2563eb]/40 rounded-lg overflow-hidden transition-all hover:shadow-lg cursor-pointer group flex flex-col"
                      >
                        {/* Cover Image */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                          <img
                            src={project.cover_image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                            referrerPolicy="no-referrer"
                          />
                          
                          {/* Access Mode Ribbon */}
                          <div className="absolute top-3 right-3">
                            {project.access_level === 'PUBLIC_PREVIEW' && (
                              <span className="bg-[#0b132b]/90 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded">
                                Public Preview
                              </span>
                            )}
                            {project.access_level === 'REGISTERED' && (
                              <span className="bg-[#2563eb]/90 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1">
                                <Lock className="w-2.5 h-2.5" />
                                <span>Registered</span>
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-mono text-[#2563eb] mb-2">
                              <span>{project.category}</span>
                              <span aria-hidden="true">·</span>
                              <span className="text-[#0b132b]/50">{project.year}</span>
                            </div>

                            <h3 className="text-lg font-bold text-[#0b132b] mb-2 group-hover:text-[#2563eb] transition-colors leading-snug">
                              {project.title}
                            </h3>

                            <p className="text-xs text-[#0b132b]/70 leading-relaxed line-clamp-3 mb-6">
                              {project.summary}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-[#0b132b]/6 flex items-center justify-between text-xs font-semibold text-[#0b132b]">
                            <span>
                              {access.allowed ? 'Explore Case Study' : 'Sign In to Unlock Full Study'}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#2563eb] group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            </section>
          );
        }

        // 4. OUR APPROACH
        if (section.section_type === 'approach') {
          return (
            <section
              key={section.id}
              className={`py-20 border-b border-[#0b132b]/8 ${
                section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="max-w-3xl mb-14 space-y-3">
                  <span className="text-xs font-mono text-[#2563eb] uppercase tracking-wider">
                    Engineering Principles
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b132b]">
                    {section.config.headline}
                  </h2>
                  <p className="text-base text-[#0b132b]/70 leading-relaxed">
                    {section.config.subheadline}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {(section.config.items || []).map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white border border-[#0b132b]/8 rounded-lg space-y-3"
                    >
                      <span className="font-mono text-xs font-bold text-[#2563eb]">
                        Step 0{idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-[#0b132b]">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#0b132b]/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </section>
          );
        }

        // 5. WHY JET LANCER
        if (section.section_type === 'why_us') {
          return (
            <section
              key={section.id}
              className={`py-20 border-b border-[#0b132b]/8 ${
                section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-xs font-mono text-[#2563eb] uppercase tracking-wider">
                      The JET lancer Creed
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b132b]">
                      {section.config.headline}
                    </h2>
                    <p className="text-base font-medium text-[#2563eb] leading-relaxed">
                      "{section.config.subheadline}"
                    </p>
                    <p className="text-sm text-[#0b132b]/70 leading-relaxed">
                      {section.config.body_text}
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => navigate('/about')}
                        className="text-xs font-bold text-[#0b132b] hover:text-[#2563eb] inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Learn About Our Studio Model</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {(section.config.items || []).map((pillar, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-white border border-[#0b132b]/8 rounded-lg space-y-2"
                      >
                        <h3 className="text-sm font-bold text-[#0b132b]">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-[#0b132b]/70 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </section>
          );
        }

        // 6. PROCESS
        if (section.section_type === 'process') {
          return (
            <section
              key={section.id}
              className={`py-20 border-b border-[#0b132b]/8 ${
                section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-mono text-[#2563eb] uppercase tracking-wider">
                      Engagement Model
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b132b]">
                      {section.config.headline}
                    </h2>
                    <p className="text-sm sm:text-base text-[#0b132b]/70">
                      {section.config.subheadline}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate('/process')}
                    className="text-xs font-bold text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Inspect Process Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {(section.config.items || []).map((phase, idx) => (
                    <div key={idx} className="p-6 bg-white border border-[#0b132b]/8 rounded-lg space-y-2">
                      <span className="font-mono text-xs text-[#2563eb]">Phase 0{idx + 1}</span>
                      <h3 className="text-sm font-bold text-[#0b132b]">{phase.title}</h3>
                      <p className="text-xs text-[#0b132b]/70 leading-relaxed">{phase.description}</p>
                    </div>
                  ))}
                </div>

              </div>
            </section>
          );
        }

        // 7. FAQ SECTION
        if (section.section_type === 'faq') {
          return (
            <section
              key={section.id}
              className={`py-20 border-b border-[#0b132b]/8 ${
                section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'
              }`}
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center space-y-2 mb-12">
                  <span className="text-xs font-mono text-[#2563eb] uppercase tracking-wider">
                    Clarifications
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-[#0b132b]">
                    {section.config.headline}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0b132b]/70">
                    {section.config.subheadline}
                  </p>
                </div>

                <div className="space-y-4">
                  {(section.config.items || []).map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white border border-[#0b132b]/8 rounded-lg space-y-2"
                    >
                      <h3 className="text-sm font-bold text-[#0b132b]">
                        {faq.title}
                      </h3>
                      <p className="text-xs text-[#0b132b]/70 leading-relaxed">
                        {faq.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={() => navigate('/faq')}
                    className="text-xs font-bold text-[#2563eb] hover:underline cursor-pointer"
                  >
                    Have more questions? Read our full FAQ directory →
                  </button>
                </div>

              </div>
            </section>
          );
        }

        // 8. CONTACT CTA SECTION
        if (section.section_type === 'contact_cta') {
          return (
            <section
              key={section.id}
              className="py-20 bg-[#0b132b] text-white"
            >
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <span className="text-xs font-mono text-[#2563eb] uppercase tracking-wider">
                  Direct Studio Engagement
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {section.config.headline}
                </h2>
                <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
                  {section.config.subheadline}
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => navigate(section.config.primary_cta_link || '/contact')}
                    className="px-6 py-3.5 bg-[#2563eb] hover:bg-blue-600 text-white rounded text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap shrink-0 shadow-sm"
                  >
                    {section.config.primary_cta_label || 'Start a Project'}
                  </button>
                  <button
                    onClick={() => navigate(section.config.secondary_cta_link || '/services')}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap shrink-0"
                  >
                    {section.config.secondary_cta_label || 'Browse Services Directory'}
                  </button>
                </div>
              </div>
            </section>
          );
        }

        return null;
      })}

    </div>
  );
};
