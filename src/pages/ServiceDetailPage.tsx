import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  AlertCircle, 
  Workflow, 
  Package, 
  ShieldCheck 
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, navigate }) => {
  const { getServiceBySlug, services } = useApp();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#faf9f5] flex items-center justify-center p-6">
        <div className="max-w-md text-center space-y-4 bg-white p-8 rounded-lg border border-[#0b132b]/8">
          <h2 className="text-xl font-bold text-[#0b132b]">Service Not Found</h2>
          <p className="text-xs text-[#0b132b]/60">The requested capability slug "{slug}" does not exist in our catalog.</p>
          <button
            onClick={() => navigate('/services')}
            className="px-4 py-2 bg-[#0b132b] text-white text-xs font-semibold rounded cursor-pointer"
          >
            ← Return to Services Directory
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f5] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b132b]/60 hover:text-[#0b132b] mb-8 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Services Catalog</span>
        </button>

        {/* Header Block */}
        <div className="bg-white border border-[#0b132b]/8 rounded-lg p-8 sm:p-10 mb-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#2563eb] uppercase tracking-wide">
            <span>Practice {service.category_code} · {service.category_name}</span>
            <span aria-hidden="true">·</span>
            <span>Service #{service.service_number}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0b132b] leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-[#0b132b]/80 leading-relaxed font-medium">
            {service.short_description}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => navigate(`/contact?service=${service.slug}`)}
              className="px-5 py-2.5 bg-[#0b132b] text-white hover:bg-[#1d4ed8] rounded text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              <span>Inquire About This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              className="px-5 py-2.5 bg-white text-[#0b132b] border border-[#0b132b]/15 hover:border-[#0b132b]/40 rounded text-xs font-semibold transition-colors cursor-pointer"
            >
              View Demonstration Projects
            </button>
          </div>
        </div>

        {/* 1. What the Service Provides & Problem Addressed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-3">
            <h3 className="text-sm font-bold text-[#0b132b] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#2563eb]" />
              <span>What We Provide</span>
            </h3>
            <p className="text-xs text-[#0b132b]/80 leading-relaxed">
              {service.full_description}
            </p>
          </div>

          <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-3">
            <h3 className="text-sm font-bold text-[#0b132b] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Problem Addressed</span>
            </h3>
            <p className="text-xs text-[#0b132b]/80 leading-relaxed">
              {service.problem_statement}
            </p>
          </div>

        </div>

        {/* 2. Potential Use Cases */}
        <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 sm:p-8 mb-8 space-y-4">
          <h3 className="text-base font-bold text-[#0b132b]">
            Target Use Cases & Client Scenarios
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.use_cases.map((uc, idx) => (
              <div key={idx} className="p-3 bg-[#faf9f5] border border-[#0b132b]/6 rounded flex items-start gap-2.5 text-xs text-[#0b132b]/80">
                <CheckCircle2 className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                <span>{uc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Typical Deliverables & Working Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Deliverables */}
          <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-3">
            <h3 className="text-sm font-bold text-[#0b132b] flex items-center gap-2">
              <Package className="w-4 h-4 text-[#2563eb]" />
              <span>Standard Deliverables</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#0b132b]/80">
              {service.deliverables.map((deliv, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-mono text-[#2563eb] font-semibold text-[11px] shrink-0">0{idx + 1}.</span>
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Process */}
          <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-3">
            <h3 className="text-sm font-bold text-[#0b132b] flex items-center gap-2">
              <Workflow className="w-4 h-4 text-[#2563eb]" />
              <span>Our Working Process</span>
            </h3>
            <ol className="space-y-2.5 text-xs text-[#0b132b]/80">
              {service.process_steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-mono text-[#0b132b] font-bold text-[11px] shrink-0">Phase {idx + 1}:</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>

        {/* 4. External Dependencies & Technical Clarification */}
        <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 sm:p-8 mb-8 space-y-3">
          <h3 className="text-sm font-bold text-[#0b132b] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Technical Dependencies & External Requirements</span>
          </h3>
          <p className="text-xs text-[#0b132b]/80 leading-relaxed">
            {service.external_dependencies || 'This service is delivered entirely with JET lancer’s proprietary codebase and standard web infrastructure.'}
          </p>
          <p className="text-[11px] text-[#0b132b]/60 italic border-t border-[#0b132b]/6 pt-2">
            Note: We clearly distinguish between services we develop directly and those requiring third-party API accounts or cloud credits. Any third-party costs are identified in advance with zero surprise markups.
          </p>
        </div>

        {/* Bottom CTA Block */}
        <div className="bg-[#0b132b] text-white p-8 rounded-lg text-center space-y-4">
          <h3 className="text-xl font-bold">
            Interested in {service.title}?
          </h3>
          <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
            Submit your project brief and receive a structured architectural proposal within 24 business hours.
          </p>
          <button
            onClick={() => navigate(`/contact?service=${service.slug}`)}
            className="px-6 py-3 bg-[#2563eb] hover:bg-blue-600 text-white rounded text-xs font-semibold cursor-pointer transition-colors shadow-sm"
          >
            Inquire About {service.title} →
          </button>
        </div>

      </div>
    </div>
  );
};
