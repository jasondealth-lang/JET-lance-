import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Sparkles, Check, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const { settings } = useApp();

  return (
    <div className="min-h-screen bg-[#faf9f5] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#2563eb] uppercase tracking-wider">
            <span>Studio Identity & Philosophy</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0b132b]">
            About JET lancer
          </h1>
          <p className="text-base sm:text-lg text-[#2563eb] font-semibold font-mono">
            "{settings.tagline}"
          </p>
        </div>

        {/* Founding Philosophy */}
        <div className="bg-white border border-[#0b132b]/8 rounded-lg p-8 sm:p-10 space-y-4 text-xs sm:text-sm text-[#0b132b]/80 leading-relaxed">
          <h2 className="text-xl font-bold text-[#0b132b]">
            Our Core Principle
          </h2>
          <p className="text-base text-[#0b132b] font-medium leading-relaxed">
            Technology should help produce better work without making the final result feel artificial.
          </p>
          <p>
            JET lancer was founded as an antidote to the wave of generic, disposable AI wrappers flooding the digital industry. We believe that artificial intelligence is an extraordinary cognitive lever for research, pattern detection, and initial synthesis—but it requires seasoned human taste, software craftsmanship, and editorial judgment to produce work worthy of serious enterprises.
          </p>
          <p>
            We do not sell pre-packaged, superficial hype. Whether engineering a bespoke React application, automating high-frequency video pipelines, or restructuring corporate knowledge bases, we build resilient software grounded in standard web specifications.
          </p>
        </div>

        {/* Pillars of Craft */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-2 text-xs text-[#0b132b]/80">
            <h3 className="text-sm font-bold text-[#0b132b]">Human-Centered Thinking</h3>
            <p className="leading-relaxed">
              Every interface, form, and article we build is crafted for human readers and users. We prioritize legibility, ergonomic touch targets, and honest communication over deceptive design tricks.
            </p>
          </div>
          <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-2 text-xs text-[#0b132b]/80">
            <h3 className="text-sm font-bold text-[#0b132b]">Technical Competence</h3>
            <p className="leading-relaxed">
              We write strongly-typed TypeScript, enforce database-level Row Level Security, optimize Core Web Vitals to sub-second metrics, and build modular component architectures designed to scale.
            </p>
          </div>
          <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-2 text-xs text-[#0b132b]/80">
            <h3 className="text-sm font-bold text-[#0b132b]">Practical Innovation</h3>
            <p className="leading-relaxed">
              We apply AI where it produces genuine commercial leverage—such as transcription, data parsing, and rapid storyboarding—while keeping critical human review gates in place for quality control.
            </p>
          </div>
          <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-2 text-xs text-[#0b132b]/80">
            <h3 className="text-sm font-bold text-[#0b132b]">Transparent Integrity</h3>
            <p className="leading-relaxed">
              We never fabricate client testimonials, awards, or fake social proof. We clearly differentiate between our proprietary code and external third-party API dependencies.
            </p>
          </div>
        </div>

        {/* Studio Technical Baseline */}
        <div className="bg-white border border-[#0b132b]/8 rounded-lg p-8 space-y-4 text-xs text-[#0b132b]/80">
          <h3 className="text-base font-bold text-[#0b132b]">Technology & Infrastructure Standards</h3>
          <p className="leading-relaxed">
            Our agency standardizes on modern, future-proof stacks that minimize vendor lock-in and deliver maximum execution speed:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-[11px]">
            <div className="p-3 bg-[#faf9f5] border border-[#0b132b]/6 rounded">
              <span className="text-[#2563eb] block font-bold">Frontend</span>
              <span>React 19 / Vite</span>
            </div>
            <div className="p-3 bg-[#faf9f5] border border-[#0b132b]/6 rounded">
              <span className="text-[#2563eb] block font-bold">Language</span>
              <span>TypeScript Strict</span>
            </div>
            <div className="p-3 bg-[#faf9f5] border border-[#0b132b]/6 rounded">
              <span className="text-[#2563eb] block font-bold">Database & Auth</span>
              <span>PostgreSQL / Supabase</span>
            </div>
            <div className="p-3 bg-[#faf9f5] border border-[#0b132b]/6 rounded">
              <span className="text-[#2563eb] block font-bold">Styling</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Studio Contact / Location Info from Settings */}
        <div className="p-6 bg-white border border-[#0b132b]/8 rounded-lg text-xs space-y-2">
          <h3 className="text-sm font-bold text-[#0b132b]">Studio Business Inquiries</h3>
          <p className="text-[#0b132b]/70">
            Email: <span className="font-mono text-[#2563eb]">{settings.contact_email}</span> · Phone: <span className="font-mono">{settings.contact_phone}</span>
          </p>
          <p className="text-[#0b132b]/70">
            Operating Hours: <span className="font-mono">{settings.business_hours}</span>
          </p>
          <p className="text-[#0b132b]/70">
            Headquarters: {settings.contact_address}
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#0b132b] text-white p-8 rounded-lg text-center space-y-4">
          <h3 className="text-xl font-bold">Let's discuss your project</h3>
          <p className="text-xs text-white/70 max-w-md mx-auto">
            Schedule a conversation with our engineering directors to explore your requirements.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 bg-[#2563eb] hover:bg-blue-600 text-white rounded text-xs font-semibold cursor-pointer transition-colors"
          >
            Start a Project Inquiry →
          </button>
        </div>

      </div>
    </div>
  );
};
