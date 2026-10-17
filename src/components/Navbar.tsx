import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Menu, X, User, Shield, LogOut } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const { currentUser, isAdmin, isAuthenticated, logout } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Process', path: '/process' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f5]/90 backdrop-blur-md border-b border-[#0b132b]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (Single text element in display face, no subtext or pill attached) */}
        <button
          onClick={() => handleNavClick('/')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-[#0b132b] whitespace-nowrap shrink-0 group-hover:text-[#2563eb] transition-colors">
              JET<span className="font-light ml-0.5 text-[#2563eb]">lancer</span>
            </span>
          </div>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#0b132b]/70">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer hover:text-[#0b132b] ${
                  isActive ? 'text-[#0b132b] font-semibold underline underline-offset-8 decoration-[#2563eb] decoration-2' : ''
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Authentication Entry */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Admin Direct Quick Access if Admin */}
          {isAdmin && (
            <button
              onClick={() => handleNavClick('/admin')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath.startsWith('/admin')
                  ? 'bg-[#0b132b] text-white border-[#0b132b]'
                  : 'bg-white text-[#0b132b] border-[#0b132b]/15 hover:border-[#0b132b]/40'
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-[#2563eb]" />
              <span>Studio Admin</span>
            </button>
          )}

          {/* Account Menu Button */}
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#0b132b] bg-white border border-[#0b132b]/12 rounded hover:border-[#0b132b]/30 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                aria-label="User account menu"
              >
                <User className="w-3.5 h-3.5 text-[#2563eb]" />
                <span className="hidden sm:inline font-mono text-[11px] max-w-[120px] truncate">
                  {currentUser?.full_name || currentUser?.email}
                </span>
                <span className="text-[10px] text-slate-500 font-mono capitalize">
                  ({currentUser?.role})
                </span>
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-[#0b132b]/10 rounded shadow-lg py-1.5 z-50 text-xs">
                  <div className="px-3 py-2 border-b border-[#0b132b]/8">
                    <p className="font-semibold text-[#0b132b] truncate">{currentUser?.full_name}</p>
                    <p className="text-slate-500 font-mono text-[11px] truncate">{currentUser?.email}</p>
                    <p className="text-[10px] text-[#2563eb] font-mono mt-0.5 uppercase tracking-wide">
                      Role: {currentUser?.role}
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavClick('/account')}
                    className="w-full text-left px-3 py-2 hover:bg-[#faf9f5] text-[#0b132b] flex items-center gap-2 cursor-pointer"
                  >
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Client Account Portal</span>
                  </button>

                  {isAdmin && (
                    <>
                      <button
                        onClick={() => handleNavClick('/admin')}
                        className="w-full text-left px-3 py-2 hover:bg-[#faf9f5] text-[#0b132b] flex items-center gap-2 cursor-pointer"
                      >
                        <Shield className="w-3.5 h-3.5 text-[#2563eb]" />
                        <span>Admin Dashboard</span>
                      </button>
                      <button
                        onClick={() => handleNavClick('/admin/site-editor')}
                        className="w-full text-left px-3 py-2 hover:bg-[#faf9f5] text-[#0b132b] flex items-center gap-2 cursor-pointer font-medium text-[#2563eb]"
                      >
                        <span>Visual Website Builder</span>
                      </button>
                    </>
                  )}

                  <div className="border-t border-[#0b132b]/8 my-1"></div>

                  <button
                    onClick={() => {
                      logout();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-red-50 text-red-600 flex items-center gap-2 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => handleNavClick('/login')}
              className="text-xs font-semibold text-[#0b132b]/80 hover:text-[#0b132b] px-2.5 py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Sign In
            </button>
          )}

          {/* Primary Action Button (The single primary CTA of the top bar) */}
          <button
            onClick={() => handleNavClick('/contact')}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0b132b] hover:bg-[#1d4ed8] active:bg-[#1e40af] rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            Start a Project
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0b132b]/80 hover:text-[#0b132b] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf9f5] border-b border-[#0b132b]/10 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#0b132b]/80">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-left py-2 px-3 rounded hover:bg-black/5 transition-colors ${
                  currentPath === link.path ? 'bg-black/5 text-[#0b132b] font-semibold' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#0b132b]/8 flex flex-col gap-2">
            {isAdmin && (
              <button
                onClick={() => handleNavClick('/admin')}
                className="w-full text-center py-2 text-xs font-semibold rounded bg-[#0b132b] text-white"
              >
                Studio Admin Workspace
              </button>
            )}
            {!isAuthenticated ? (
              <div className="flex gap-2">
                <button
                  onClick={() => handleNavClick('/login')}
                  className="flex-1 py-2 text-xs font-semibold text-center border border-[#0b132b]/20 rounded"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleNavClick('/signup')}
                  className="flex-1 py-2 text-xs font-semibold text-center bg-[#2563eb] text-white rounded"
                >
                  Register
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleNavClick('/account')}
                className="w-full text-center py-2 text-xs font-semibold border border-[#0b132b]/15 rounded"
              >
                Client Account Portal
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
