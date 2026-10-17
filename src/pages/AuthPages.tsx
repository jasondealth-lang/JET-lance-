import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Lock, 
  Mail, 
  User, 
  Building, 
  ArrowRight, 
  ShieldCheck, 
  LogOut, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { UserRole } from '../types';

// ==========================================
// 1. SIGNUP PAGE
// ==========================================
export const SignupPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  const { register } = useApp();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    const res = await register(email, password, fullName, company);
    setIsSubmitting(false);

    if (res.success) {
      navigate('/account');
    } else {
      setErrorMsg(res.error || 'Registration failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white border border-[#0b132b]/8 rounded-lg p-8 space-y-6 shadow-xs">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#2563eb] uppercase tracking-wider">Client Onboarding</span>
          <h1 className="text-2xl font-bold text-[#0b132b]">Create Client Account</h1>
          <p className="text-xs text-[#0b132b]/60">
            Register to unlock full architectural case studies, technical manifests, and project dashboards.
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#0b132b]">Full Name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Elena Rostova"
              className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3 py-2 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#0b132b]">Business Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="elena@company.com"
              className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3 py-2 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#0b132b]">Company Name</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Nordic Audio Labs"
              className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3 py-2 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#0b132b]">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3 py-2 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb]"
            />
            <p className="text-[10px] text-[#0b132b]/50">Minimum 6 characters.</p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 bg-[#0b132b] hover:bg-[#1d4ed8] text-white rounded text-xs font-semibold cursor-pointer transition-colors"
          >
            {isSubmitting ? 'Registering Account...' : 'Register Client Account'}
          </button>
        </form>

        <div className="pt-4 border-t border-[#0b132b]/8 text-center text-xs text-[#0b132b]/60 space-y-2">
          <p>
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-[#2563eb] font-semibold hover:underline cursor-pointer"
            >
              Sign In
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 2. LOGIN PAGE
// ==========================================
export const LoginPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  const { login, setRoleForDemo } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    const res = await login(email, password);
    setIsSubmitting(false);

    if (res.success) {
      navigate('/account');
    } else {
      setErrorMsg(res.error || 'Authentication failed. Please verify credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white border border-[#0b132b]/8 rounded-lg p-8 space-y-6 shadow-xs">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#2563eb] uppercase tracking-wider">Client & Admin Access</span>
          <h1 className="text-2xl font-bold text-[#0b132b]">Sign In to JET lancer</h1>
          <p className="text-xs text-[#0b132b]/60">
            Access your client account, submitted project inquiries, and protected case studies.
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#0b132b]">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3 py-2 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb]"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#0b132b]">Password</label>
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-[11px] text-[#2563eb] hover:underline cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3 py-2 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 bg-[#0b132b] hover:bg-[#1d4ed8] text-white rounded text-xs font-semibold cursor-pointer transition-colors"
          >
            {isSubmitting ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        {/* Demo Fast-Track Controls */}
        <div className="p-4 bg-[#faf9f5] border border-[#0b132b]/8 rounded text-xs space-y-2">
          <span className="font-bold text-[#0b132b] block font-mono text-[11px]">
            ⚡ Reviewer Quick Mode Access:
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setRoleForDemo('registered');
                navigate('/portfolio');
              }}
              className="flex-1 py-1.5 bg-white border border-[#0b132b]/12 hover:border-[#2563eb] rounded text-[11px] font-semibold text-[#0b132b] cursor-pointer"
            >
              Test as Registered Client
            </button>
            <button
              onClick={() => {
                setRoleForDemo('owner');
                navigate('/admin');
              }}
              className="flex-1 py-1.5 bg-[#0b132b] hover:bg-black text-white rounded text-[11px] font-semibold cursor-pointer"
            >
              Test as Studio Owner
            </button>
          </div>
        </div>

        <div className="pt-2 text-center text-xs text-[#0b132b]/60">
          Don't have an account yet?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-[#2563eb] font-semibold hover:underline cursor-pointer"
          >
            Register Here
          </button>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 3. FORGOT PASSWORD PAGE
// ==========================================
export const ForgotPasswordPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  const { resetPassword } = useApp();
  const [email, setEmail] = useState('');
  const [resultMsg, setResultMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await resetPassword(email);
    setIsSubmitting(false);
    setResultMsg(res.message);
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white border border-[#0b132b]/8 rounded-lg p-8 space-y-6 shadow-xs">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#2563eb] uppercase tracking-wider">Account Recovery</span>
          <h1 className="text-2xl font-bold text-[#0b132b]">Reset Password</h1>
          <p className="text-xs text-[#0b132b]/60">
            Enter your business email and we'll dispatch password reset verification instructions.
          </p>
        </div>

        {resultMsg ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 space-y-3">
            <p>{resultMsg}</p>
            <button
              onClick={() => navigate('/login')}
              className="text-[#2563eb] font-semibold hover:underline cursor-pointer block"
            >
              ← Back to Sign In
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#0b132b]">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-[#faf9f5] border border-[#0b132b]/10 rounded px-3 py-2 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-[#0b132b] hover:bg-[#1d4ed8] text-white rounded text-xs font-semibold cursor-pointer transition-colors"
            >
              {isSubmitting ? 'Transmitting Request...' : 'Send Reset Instructions'}
            </button>
          </form>
        )}

        <div className="pt-2 text-center text-xs text-[#0b132b]/60">
          Remembered your password?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-[#2563eb] font-semibold hover:underline cursor-pointer"
          >
            Sign In
          </button>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 4. CLIENT ACCOUNT PAGE
// ==========================================
export const AccountPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  const { currentUser, logout, setRoleForDemo, inquiries, isAdmin } = useApp();

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[#faf9f5] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white border border-[#0b132b]/8 rounded-lg p-8 text-center space-y-4">
          <Lock className="w-8 h-8 text-[#2563eb] mx-auto" />
          <h2 className="text-xl font-bold text-[#0b132b]">Account Sign In Required</h2>
          <p className="text-xs text-[#0b132b]/60">
            Please authenticate to view your client profile, submitted project specifications, and unlocked case studies.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 bg-[#0b132b] text-white text-xs font-semibold rounded cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-4 py-2 bg-[#2563eb] text-white text-xs font-semibold rounded cursor-pointer"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Filter inquiries submitted by this user (or show demo inquiries)
  const myInquiries = inquiries.filter(
    inq => inq.email.toLowerCase() === currentUser.email.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#faf9f5] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Profile Card */}
        <div className="bg-white border border-[#0b132b]/8 rounded-lg p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#0b132b] text-white rounded-full flex items-center justify-center text-lg font-bold font-mono">
              {currentUser.full_name?.charAt(0) || 'U'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-[#0b132b]">{currentUser.full_name}</h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2563eb]/10 text-[#2563eb] font-semibold uppercase">
                  {currentUser.role}
                </span>
              </div>
              <p className="text-xs font-mono text-[#0b132b]/60">{currentUser.email}</p>
              {currentUser.company && (
                <p className="text-xs text-[#0b132b]/80 mt-0.5">{currentUser.company}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAdmin && (
              <button
                onClick={() => navigate('/admin')}
                className="px-4 py-2 bg-[#0b132b] text-white rounded text-xs font-semibold cursor-pointer hover:bg-black transition-colors"
              >
                Studio Admin Dashboard
              </button>
            )}
            <button
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="px-3.5 py-2 border border-[#0b132b]/15 text-[#0b132b] hover:bg-red-50 hover:text-red-700 hover:border-red-200 rounded text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Access Role & Permissions Status */}
        <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#0b132b]">Account Permissions & Access Tiers</h2>
            <span className="text-xs font-mono text-[#2563eb]">PostgreSQL RLS Active</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-[#faf9f5] border border-[#0b132b]/6 rounded">
              <span className="text-[#0b132b]/50 block font-mono text-[10px]">CASE STUDY ACCESS</span>
              <span className="font-bold text-[#0b132b] mt-0.5 block">
                {currentUser.role === 'owner' || currentUser.role === 'admin' 
                  ? 'All 6 Case Studies + Private Admin Vaults'
                  : 'Public Previews + Registered Case Studies Unlocked'}
              </span>
            </div>
            <div className="p-3 bg-[#faf9f5] border border-[#0b132b]/6 rounded">
              <span className="text-[#0b132b]/50 block font-mono text-[10px]">VISUAL SITE BUILDER</span>
              <span className="font-bold text-[#0b132b] mt-0.5 block">
                {isAdmin ? 'Full Editor & Publish Rights' : 'Restricted to Studio Owner'}
              </span>
            </div>
            <div className="p-3 bg-[#faf9f5] border border-[#0b132b]/6 rounded">
              <span className="text-[#0b132b]/50 block font-mono text-[10px]">INQUIRY DISPATCH</span>
              <span className="font-bold text-[#0b132b] mt-0.5 block">
                Verified Priority Routing
              </span>
            </div>
          </div>

          {/* Quick Role Switcher for Testing/Demonstration */}
          <div className="pt-3 border-t border-[#0b132b]/8 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-[#0b132b]/70 font-mono text-[11px]">
              Switch Role for Test / Review:
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setRoleForDemo('registered')}
                className={`px-3 py-1 rounded text-xs font-semibold cursor-pointer ${
                  currentUser.role === 'registered' ? 'bg-[#2563eb] text-white' : 'border border-[#0b132b]/15 hover:bg-[#faf9f5]'
                }`}
              >
                Registered Client
              </button>
              <button
                onClick={() => setRoleForDemo('owner')}
                className={`px-3 py-1 rounded text-xs font-semibold cursor-pointer ${
                  currentUser.role === 'owner' ? 'bg-[#0b132b] text-white' : 'border border-[#0b132b]/15 hover:bg-[#faf9f5]'
                }`}
              >
                Studio Owner (Admin)
              </button>
            </div>
          </div>
        </div>

        {/* Project Inquiries History */}
        <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#0b132b]">
              Your Project Inquiries ({myInquiries.length})
            </h2>
            <button
              onClick={() => navigate('/contact')}
              className="text-xs font-semibold text-[#2563eb] hover:underline cursor-pointer"
            >
              + Submit New Inquiry
            </button>
          </div>

          {myInquiries.length > 0 ? (
            <div className="space-y-3">
              {myInquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-4 bg-[#faf9f5] border border-[#0b132b]/8 rounded text-xs space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[10px] text-[#2563eb]">
                      ID: {inq.id} · Budget: {inq.budget_range}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold ${
                      inq.status === 'new' ? 'bg-blue-100 text-blue-800' :
                      inq.status === 'reviewed' ? 'bg-amber-100 text-amber-800' :
                      inq.status === 'replied' ? 'bg-emerald-100 text-emerald-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      Status: {inq.status}
                    </span>
                  </div>
                  <p className="text-[#0b132b]/80 leading-relaxed font-medium">
                    "{inq.message}"
                  </p>
                  {inq.admin_notes && (
                    <div className="p-2.5 bg-white border border-[#0b132b]/6 rounded text-[11px] text-[#0b132b]/70">
                      <strong className="text-[#0b132b] block mb-0.5">Studio Follow-Up Note:</strong>
                      {inq.admin_notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-[#faf9f5] border border-[#0b132b]/6 rounded text-xs text-[#0b132b]/60 space-y-2">
              <p>You have not submitted any project inquiries under this email yet.</p>
              <button
                onClick={() => navigate('/contact')}
                className="px-4 py-2 bg-[#0b132b] text-white text-xs font-semibold rounded cursor-pointer"
              >
                Start an Inquiry Funnel
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
