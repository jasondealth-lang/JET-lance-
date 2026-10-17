import React, { useState } from 'react';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';

interface FaqPageProps {
  navigate: (path: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ navigate }) => {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      category: 'Agency & Services',
      q: 'What is JET lancer and how is it different from traditional agencies?',
      a: 'JET lancer is a creative digital technology agency that blends modern AI workflows with human craftsmanship. Unlike traditional agencies that take months to produce initial mockups or low-code shops that generate cookie-cutter templates, we engineer bespoke TypeScript and PostgreSQL applications while using AI as a cognitive accelerator.'
    },
    {
      category: 'AI & Methodologies',
      q: 'What does "Technology should help produce better work without making the final result feel artificial" mean in practice?',
      a: 'It means we reject unedited AI output. When we use generative AI for code, video, or copywriting, every single line and sentence passes through human software engineers and editorial directors who eliminate robotic phrasing, optimize performance, and ensure brand integrity.'
    },
    {
      category: 'Portfolio & Demonstrations',
      q: 'Are the six projects in your portfolio real clients or concepts?',
      a: 'All six portfolio entries are original demonstration concepts created specifically to transparently illustrate our technical standards, design systems, and workflow methodologies. We never fabricate client reviews, awards, or fake testimonials.'
    },
    {
      category: 'Technical Stack',
      q: 'Which frontend and backend technologies do you build with?',
      a: 'We primarily build with React 19, TypeScript, Tailwind CSS, Supabase (PostgreSQL, Auth, Storage), and serverless Node.js runtimes. We select tools based on performance, accessibility, security, and developer ergonomics.'
    },
    {
      category: 'Pricing & Timelines',
      q: 'How are projects scoped and priced?',
      a: 'We operate on a fixed-price milestone model based on detailed discovery requirements. Our typical engagements range from $5,000 for focused workflow overhauls to $25,000–$50,000+ for complete custom platforms. Every milestone proposal includes a transparent timeline and list of verified deliverables.'
    },
    {
      category: 'Third-Party Integrations',
      q: 'Do you charge for third-party AI models and hosting?',
      a: 'No. We clearly distinguish between our development work and third-party APIs. Client subscriptions to OpenAI, Runway, Twilio, or Google Cloud Run are billed directly to your own merchant accounts with zero markups from JET lancer.'
    },
    {
      category: 'Code Ownership',
      q: 'Who owns the code and intellectual property once a project is finished?',
      a: 'You own 100% of the code, database schemas, and creative assets produced for your project upon milestone settlement. We provide full Git repositories and deployment guides.'
    }
  ];

  const filteredFaqs = faqItems.filter(
    item => 
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#faf9f5] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Block */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#2563eb] uppercase tracking-wider">
            <span>Knowledge Base</span>
            <span aria-hidden="true">·</span>
            <span>Direct Answers</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0b132b]">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#0b132b]/70 leading-relaxed max-w-2xl">
            Everything you need to know about our capabilities, engagement terms, AI principles, and technical architectures.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#0b132b]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search FAQs by topic, keyword, or technology..."
            className="w-full bg-white border border-[#0b132b]/10 rounded-lg pl-10 pr-4 py-3 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb]"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white border border-[#0b132b]/8 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#faf9f5]/50 transition-colors"
                >
                  <div>
                    <span className="font-mono text-[10px] text-[#2563eb] block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#0b132b]">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0b132b]/60 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#2563eb]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#0b132b]/6 text-xs sm:text-sm text-[#0b132b]/80 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="bg-[#0b132b] text-white p-8 rounded-lg text-center space-y-4">
          <h3 className="text-xl font-bold">Have a specific requirement not covered here?</h3>
          <p className="text-xs text-white/70 max-w-md mx-auto">
            Contact our engineering team directly to discuss your custom specifications.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 bg-[#2563eb] hover:bg-blue-600 text-white rounded text-xs font-semibold cursor-pointer transition-colors"
          >
            Start a Direct Inquiry →
          </button>
        </div>

      </div>
    </div>
  );
};
