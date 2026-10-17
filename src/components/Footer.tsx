import React from 'react';
import { useApp } from '../context/AppContext';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const { settings } = useApp();

  return (
    <footer className="bg-white border-t border-[#0b132b]/8 text-[#0b132b] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#0b132b]/8">
          
          {/* Brand & Studio Philosophy Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => navigate('/')}
              className="text-left text-2xl font-extrabold tracking-tight text-[#0b132b] cursor-pointer hover:text-[#2563eb] transition-colors"
            >
              JET<span className="font-light ml-0.5 text-[#2563eb]">lancer</span>
            </button>
            <p className="text-xs font-medium text-[#2563eb] uppercase tracking-wider font-mono">
              {settings.tagline}
            </p>
            <p className="text-sm text-[#0b132b]/70 max-w-sm leading-relaxed">
              A creative digital technology studio engineering AI-powered workflows, bespoke websites, automation, and content refinement without making the final result feel artificial.
            </p>
            <div className="pt-2 text-xs text-[#0b132b]/60 space-y-1">
              <p className="font-mono">{settings.contact_email}</p>
              <p className="font-mono">{settings.contact_phone}</p>
              <p>{settings.contact_address}</p>
            </div>
          </div>

          {/* Navigation Column 1: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b132b] mb-4">
              Practices
            </h4>
            <ul className="space-y-2.5 text-xs text-[#0b132b]/70 font-medium">
              <li>
                <button onClick={() => navigate('/services?cat=A')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  AI & Automation
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services?cat=B')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  Websites & Engineering
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services?cat=C')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  Content & Copywriting
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services?cat=D')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  Video & Media Production
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services?cat=E')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  Digital Business Support
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services')} className="text-[#2563eb] hover:underline transition-colors cursor-pointer pt-1 inline-block">
                  All 84 Services Directory →
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Studio & Demonstration */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b132b] mb-4">
              Studio
            </h4>
            <ul className="space-y-2.5 text-xs text-[#0b132b]/70 font-medium">
              <li>
                <button onClick={() => navigate('/portfolio')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  Portfolio Gallery
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/process')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  Engineering Process
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  About JET lancer
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/faq')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left font-semibold text-[#0b132b]">
                  Start a Project
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Client & System */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b132b] mb-4">
              Access & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-[#0b132b]/70 font-medium">
              <li>
                <button onClick={() => navigate('/login')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  Client Portal Sign In
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/signup')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  Register Account
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/admin')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  Studio Administration
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/privacy')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/terms')} className="hover:text-[#2563eb] transition-colors cursor-pointer text-left">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#0b132b]/50">
          <p>
            © {new Date().getFullYear()} {settings.brand_name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span>Hours: {settings.business_hours}</span>
            <span aria-hidden="true">·</span>
            <span>{settings.response_time}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
