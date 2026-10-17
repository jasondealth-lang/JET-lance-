import React from 'react';
import { useApp } from '../context/AppContext';

export const PrivacyPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  const { settings } = useApp();

  return (
    <div className="min-h-screen bg-[#faf9f5] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-white border border-[#0b132b]/8 rounded-lg p-8 sm:p-12 text-xs sm:text-sm text-[#0b132b]/80 leading-relaxed shadow-xs">
        <div>
          <span className="font-mono text-xs text-[#2563eb] uppercase tracking-wide">Legal Specification</span>
          <h1 className="text-3xl font-extrabold text-[#0b132b] mt-1">Privacy Policy</h1>
          <p className="text-xs text-[#0b132b]/50 mt-1">Effective Date: October 2026 · {settings.brand_name}</p>
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#0b132b]">1. Information Collection</h2>
          <p>
            JET lancer collects information you directly provide when inquiring about agency services, creating a client account, or submitting specifications. This includes full name, business email address, company organization, project requirements, and budget ranges.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#0b132b]">2. Use of Information</h2>
          <p>
            Your information is used strictly to evaluate project feasibility, prepare architectural proposals, communicate milestone progress, and provide authenticated access to client case studies. We do not sell, rent, or trade your contact information.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#0b132b]">3. Data Security & Storage</h2>
          <p>
            We implement industry-standard encryption in transit (HTTPS/TLS) and Row Level Security at the database layer (PostgreSQL). Access to administrative tools is restricted to authorized studio directors.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#0b132b]">4. Contact</h2>
          <p>
            For privacy inquiries or data removal requests, contact our data protection officer at <span className="font-mono text-[#2563eb]">{settings.contact_email}</span>.
          </p>
        </section>

        <div className="pt-4 border-t border-[#0b132b]/8">
          <button
            onClick={() => navigate('/')}
            className="text-xs font-semibold text-[#2563eb] hover:underline cursor-pointer"
          >
            ← Return to JET lancer Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export const TermsPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  const { settings } = useApp();

  return (
    <div className="min-h-screen bg-[#faf9f5] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-white border border-[#0b132b]/8 rounded-lg p-8 sm:p-12 text-xs sm:text-sm text-[#0b132b]/80 leading-relaxed shadow-xs">
        <div>
          <span className="font-mono text-xs text-[#2563eb] uppercase tracking-wide">Legal Specification</span>
          <h1 className="text-3xl font-extrabold text-[#0b132b] mt-1">Terms of Service</h1>
          <p className="text-xs text-[#0b132b]/50 mt-1">Effective Date: October 2026 · {settings.brand_name}</p>
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#0b132b]">1. Agency Engagements</h2>
          <p>
            JET lancer provides digital engineering, website development, automation pipelines, and content refinement services. All client engagements are governed by separate, signed Statements of Work (SOW) specifying milestones, fixed pricing, and acceptance criteria.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#0b132b]">2. Demonstration Projects Notice</h2>
          <p>
            Portfolio projects presented on this website are original demonstration concepts developed to showcase technical standards and design systems. They do not constitute endorsements by fictional entities or guarantees of identical results.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#0b132b]">3. Intellectual Property</h2>
          <p>
            Unless explicitly agreed otherwise in a Statement of Work, custom software code, database schemas, and written deliverables engineered specifically for a paying client are transferred in full upon settlement of corresponding milestones.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#0b132b]">4. Governing Law</h2>
          <p>
            These terms are governed by applicable commercial laws. Inquiries regarding service terms should be directed to <span className="font-mono text-[#2563eb]">{settings.contact_email}</span>.
          </p>
        </section>

        <div className="pt-4 border-t border-[#0b132b]/8">
          <button
            onClick={() => navigate('/')}
            className="text-xs font-semibold text-[#2563eb] hover:underline cursor-pointer"
          >
            ← Return to JET lancer Homepage
          </button>
        </div>
      </div>
    </div>
  );
};
