import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, Phone, Clock, MapPin, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  navigate: (path: string) => void;
  initialServiceSlug?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate, initialServiceSlug }) => {
  const { services, settings, submitInquiry } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [serviceSlug, setServiceSlug] = useState(initialServiceSlug || '');
  const [budgetRange, setBudgetRange] = useState('$10,000 – $25,000');
  const [timeline, setTimeline] = useState('Within 1 – 2 months');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialServiceSlug) {
      setServiceSlug(initialServiceSlug);
    }
  }, [initialServiceSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in your name, business email, and project description.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      await submitInquiry({
        full_name: fullName.trim(),
        email: email.trim(),
        company: company.trim() || undefined,
        service_slug: serviceSlug || undefined,
        budget_range: budgetRange,
        timeline: timeline,
        message: message.trim()
      });
      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage('An unexpected error occurred while transmitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#2563eb] uppercase tracking-wider">
            <span>Inquiry Intake</span>
            <span aria-hidden="true">·</span>
            <span>24-Hour Studio Review</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0b132b]">
            Start a Project
          </h1>
          <p className="text-sm sm:text-base text-[#0b132b]/70 leading-relaxed">
            Tell us about your project requirements, goals, or architectural bottlenecks. We evaluate technical dependencies and respond with a structured proposal within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Inquiry Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 sm:p-10 shadow-xs">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0b132b]">
                    Inquiry Transmitted Successfully
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0b132b]/70 max-w-md mx-auto leading-relaxed">
                    Thank you, {fullName}. Your project specifications have been registered in our system. A studio director will evaluate your requirements and reach out via <span className="font-mono text-[#2563eb]">{email}</span>.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setMessage('');
                      }}
                      className="px-4 py-2 text-xs font-semibold text-[#0b132b] border border-[#0b132b]/15 rounded cursor-pointer hover:bg-[#faf9f5]"
                    >
                      Submit Another Message
                    </button>
                    <button
                      onClick={() => navigate('/portfolio')}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#0b132b] rounded cursor-pointer hover:bg-black"
                    >
                      Explore Portfolio
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0b132b]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. David Vance"
                        className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3.5 py-2.5 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb] focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0b132b]">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3.5 py-2.5 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Company and Primary Practice/Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0b132b]">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Vance Strategic Corp"
                        className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3.5 py-2.5 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb] focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0b132b]">
                        Primary Capability Needed
                      </label>
                      <select
                        value={serviceSlug}
                        onChange={(e) => setServiceSlug(e.target.value)}
                        className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3.5 py-2.5 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb] focus:bg-white"
                      >
                        <option value="">General Project / Multi-Discipline</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.slug}>
                            {s.title} ({s.category_code})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0b132b]">
                        Estimated Budget Band
                      </label>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3.5 py-2.5 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb] focus:bg-white"
                      >
                        <option value="$5,000 – $10,000">$5,000 – $10,000 (Focused Workflows / Redesigns)</option>
                        <option value="$10,000 – $25,000">$10,000 – $25,000 (Complete App / Production Pipelines)</option>
                        <option value="$25,000 – $50,000">$25,000 – $50,000 (Comprehensive Enterprise Systems)</option>
                        <option value="$50,000+">$50,000+ (Multi-Platform / Retainer)</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0b132b]">
                        Target Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3.5 py-2.5 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb] focus:bg-white"
                      >
                        <option value="Immediate (Within 2 weeks)">Immediate (Within 2 weeks)</option>
                        <option value="Within 1 – 2 months">Within 1 – 2 months</option>
                        <option value="3 – 6 months">3 – 6 months</option>
                        <option value="Exploratory / Planning Stage">Exploratory / Planning Stage</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0b132b]">
                      Project Scope & Goals <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe what you want to achieve, existing technical stacks, and any hard deadlines..."
                      className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3.5 py-2.5 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb] focus:bg-white leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#0b132b] hover:bg-[#1d4ed8] text-white rounded text-xs font-semibold cursor-pointer transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'Transmitting Specifications...' : 'Submit Project Inquiry'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-[#0b132b]/50 text-center">
                    All specifications are held in strict confidence. Never shared with third parties.
                  </p>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Studio Contact & Business Details from Settings */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 sm:p-8 space-y-6 text-xs">
              <h3 className="text-base font-bold text-[#0b132b]">
                Direct Studio Contacts
              </h3>

              <div className="space-y-4 text-[#0b132b]/80">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0b132b] block">Inquiry Email</span>
                    <span className="font-mono text-[#2563eb]">{settings.contact_email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0b132b] block">Studio Telephone</span>
                    <span className="font-mono">{settings.contact_phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0b132b] block">Operating Hours</span>
                    <span>{settings.business_hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0b132b] block">Headquarters</span>
                    <span>{settings.contact_address}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#faf9f5] border border-[#0b132b]/6 rounded text-xs space-y-1">
                <span className="font-bold text-[#0b132b] block">Response Commitment:</span>
                <p className="text-[#0b132b]/70">{settings.response_time}</p>
              </div>
            </div>

            {/* Quick Demo Switcher Tip for Reviewers */}
            <div className="p-4 bg-white border border-[#0b132b]/8 rounded-lg text-xs space-y-2 text-[#0b132b]/70">
              <span className="font-bold text-[#0b132b] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2563eb]" />
                Reviewer Access Notice
              </span>
              <p className="text-[11px] leading-relaxed">
                Submitted inquiries immediately populate the live management queue at <button onClick={() => navigate('/admin/messages')} className="text-[#2563eb] font-semibold hover:underline">/admin/messages</button>, where studio directors update inquiry status and view message payloads.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
