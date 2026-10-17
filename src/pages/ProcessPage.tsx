import React from 'react';
import { ArrowRight, CheckCircle2, Workflow, ShieldCheck, Clock, FileCode2 } from 'lucide-react';

interface ProcessPageProps {
  navigate: (path: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ navigate }) => {
  const phases = [
    {
      phase: '01',
      title: 'Requirements & Technical Dependency Discovery',
      duration: 'Week 1',
      description: 'We conduct a systematic audit of your business goals, target audience, technical infrastructure, and existing software dependencies. We identify which capabilities will be built natively and which require third-party APIs or cloud credits.',
      deliverables: [
        'Detailed Scope & Architecture Specification',
        'Technical Dependency & Cost Matrix',
        'Milestone Roadmap & Fixed Proposal'
      ]
    },
    {
      phase: '02',
      title: 'Information Architecture & Design Systems',
      duration: 'Weeks 2 – 3',
      description: 'We establish bespoke typographic scales, responsive grid layouts, and color tokens tailored to your industry. We design high-fidelity components that eliminate generic AI tropes, ensuring clean contrast and ergonomic touch targets across all devices.',
      deliverables: [
        'Component Architecture Blueprint',
        'Interactive Figma Tokens & Layout Wireframes',
        'WCAG AA Contrast & Accessibility Verification'
      ]
    },
    {
      phase: '03',
      title: 'Iterative Full-Stack Engineering & Human-in-the-Loop Refinement',
      duration: 'Weeks 4 – 7',
      description: 'We build your application using strict TypeScript, React, and PostgreSQL databases with Row Level Security. Automated workflows are constructed with transparent human editorial checkpoints to maintain brand integrity.',
      deliverables: [
        'Clean, strongly-typed repository codebase',
        'Continuous staging preview deployments',
        'Automated test suites & database migrations'
      ]
    },
    {
      phase: '04',
      title: 'Verification, Performance Auditing & Production Launch',
      duration: 'Week 8',
      description: 'Every interface undergoes rigorous cross-browser testing, Core Web Vitals profiling, mobile touch verification, and security testing. We handle production DNS cutovers, SSL certification, and zero-downtime deployment.',
      deliverables: [
        'Core Web Vitals 90+ Lighthouse verification',
        'Production DNS cutover & SSL certification',
        'Database backup and recovery configurations'
      ]
    },
    {
      phase: '05',
      title: 'Post-Launch Stewardship & Maintenance',
      duration: 'Ongoing',
      description: 'Following deployment, we provide ongoing framework updates, dependency patches, error monitoring, and continuous visual builder maintenance so your internal team can manage content with confidence.',
      deliverables: [
        'Comprehensive admin & editorial documentation',
        'Scheduled dependency security updates',
        'Priority technical support SLA'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f5] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#2563eb] uppercase tracking-wider">
            <span>Engineering Discipline</span>
            <span aria-hidden="true">·</span>
            <span>Predictable Delivery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0b132b]">
            Our Engineering Process
          </h1>
          <p className="text-sm sm:text-base text-[#0b132b]/70 leading-relaxed max-w-2xl">
            A structured, transparent lifecycle engineered to eliminate ambiguity, deliver measurable business outcomes, and ensure long-term software maintainability.
          </p>
        </div>

        {/* Phase-by-Phase Timeline */}
        <div className="space-y-8">
          {phases.map((p) => (
            <div
              key={p.phase}
              className="bg-white border border-[#0b132b]/8 rounded-lg p-6 sm:p-8 space-y-4 transition-all hover:border-[#2563eb]/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0b132b]/8 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-base font-extrabold text-[#2563eb]">
                    Phase {p.phase}
                  </span>
                  <h2 className="text-lg font-bold text-[#0b132b]">
                    {p.title}
                  </h2>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#0b132b]/50">
                  <Clock className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span>{p.duration}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#0b132b]/80 leading-relaxed">
                {p.description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold text-[#0b132b] block mb-2 font-mono uppercase tracking-wide">
                  Verified Phase Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {p.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#faf9f5] border border-[#0b132b]/6 rounded flex items-start gap-2 text-xs text-[#0b132b]/80"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563eb] shrink-0 mt-0.5" />
                      <span className="leading-snug">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Guarantees */}
        <div className="p-8 bg-white border border-[#0b132b]/8 rounded-lg space-y-4">
          <h3 className="text-base font-bold text-[#0b132b]">Our Non-Negotiable Quality Guarantees</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#0b132b]/80">
            <div>
              <p className="font-bold text-[#0b132b] mb-1">100% Code Ownership</p>
              <p className="leading-relaxed">All repositories, database schemas, and media assets belong entirely to you with zero proprietary lock-in.</p>
            </div>
            <div>
              <p className="font-bold text-[#0b132b] mb-1">Sub-Second Performance</p>
              <p className="leading-relaxed">Zero heavy client bundles or uncompressed images. We build for blistering speed on real networks.</p>
            </div>
            <div>
              <p className="font-bold text-[#0b132b] mb-1">Transparent Pricing</p>
              <p className="leading-relaxed">Every milestone is fixed in advance. Any external cloud infrastructure or API costs are identified upfront.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0b132b] text-white p-8 rounded-lg text-center space-y-4">
          <h3 className="text-xl font-bold">Ready to start Phase 01?</h3>
          <p className="text-xs text-white/70 max-w-md mx-auto">
            Submit your requirements to initiate our technical discovery process.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 bg-[#2563eb] hover:bg-blue-600 text-white rounded text-xs font-semibold cursor-pointer transition-colors"
          >
            Schedule Discovery Consultation →
          </button>
        </div>

      </div>
    </div>
  );
};
