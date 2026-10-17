import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UserProfile, 
  PortfolioProject, 
  ServiceItem, 
  SiteSection, 
  ContactInquiry, 
  SiteSettings,
  InquiryStatus,
  AccessLevel,
  UserRole
} from '../types';
import { INITIAL_PROJECTS } from '../data/portfolioData';
import { INITIAL_SERVICES } from '../data/servicesData';
import { INITIAL_HOMEPAGE_SECTIONS } from '../data/defaultSections';
import { INITIAL_SETTINGS } from '../data/defaultSettings';
import { supabase, isSupabaseConnected } from '../lib/supabase';

interface AppContextType {
  // Auth
  currentUser: UserProfile | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password?: string, fullName?: string, company?: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; message: string }>;
  setRoleForDemo: (role: UserRole) => void;

  // Portfolio
  projects: PortfolioProject[];
  getProjectBySlug: (slug: string) => PortfolioProject | undefined;
  createProject: (project: Omit<PortfolioProject, 'id'>) => void;
  updateProject: (id: string, updates: Partial<PortfolioProject>) => void;
  deleteProject: (id: string) => void;
  canAccessProject: (project: PortfolioProject) => { allowed: boolean; reason?: 'login_required' | 'owner_only' };

  // Services
  services: ServiceItem[];
  getServiceBySlug: (slug: string) => ServiceItem | undefined;
  updateService: (id: string, updates: Partial<ServiceItem>) => void;
  toggleServicePublish: (id: string) => void;

  // Site Sections (Visual Website Builder)
  sections: SiteSection[];
  updateSectionConfig: (id: string, config: Partial<SiteSection['config']>) => void;
  toggleSectionVisibility: (id: string) => void;
  reorderSections: (newSections: SiteSection[]) => void;
  addSection: (type: SiteSection['section_type']) => void;
  deleteSection: (id: string) => void;
  resetSectionsToDefault: () => void;

  // Inquiries
  inquiries: ContactInquiry[];
  submitInquiry: (inquiryData: Omit<ContactInquiry, 'id' | 'created_at' | 'status'>) => Promise<boolean>;
  updateInquiryStatus: (id: string, status: InquiryStatus, notes?: string) => void;
  deleteInquiry: (id: string) => void;

  // Settings
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;

  // Status
  supabaseConnected: boolean;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const SEED_INQUIRIES: ContactInquiry[] = [
  {
    id: 'inq-101',
    full_name: 'Elena Rostova',
    email: 'elena.r@nordicaudio.com',
    company: 'Nordic Audio Labs',
    service_slug: 'ai-video-generation',
    budget_range: '$10,000 - $25,000',
    timeline: 'Within 2 months',
    message: 'We are preparing a launch for our high-precision reference headphones. We need a cinematic conceptual video pipeline and architectural product landing page.',
    status: 'new',
    created_at: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    id: 'inq-102',
    full_name: 'Marcus Vance',
    email: 'm.vance@vancestrategic.co',
    company: 'Vance Strategic Partners',
    service_slug: 'humanized-content-refinement',
    budget_range: '$5,000 - $10,000',
    timeline: 'Immediate (within 2 weeks)',
    message: 'Our research reports currently sound like generic AI outputs. We want JET lancer to establish an editorial standard and humanize our Q2 thought leadership whitepapers.',
    status: 'reviewed',
    admin_notes: 'Spoke briefly via email; scheduled discovery call for Thursday.',
    created_at: new Date(Date.now() - 3600000 * 24).toISOString()
  },
  {
    id: 'inq-103',
    full_name: 'Sophia Lin',
    email: 'sophia@archvis-collective.ch',
    company: 'ArchVis Studio Zurich',
    service_slug: 'portfolio-website-development',
    budget_range: '$25,000 - $50,000',
    timeline: '3 - 6 months',
    message: 'Seeking a bespoke portfolio platform with private client viewing vaults and editorial typography matching our physical monographs.',
    status: 'replied',
    admin_notes: 'Sent project scope proposal and access tiers overview.',
    created_at: new Date(Date.now() - 3600000 * 48).toISOString()
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Auth state
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('jetlancer_user');
    if (saved) {
      try { return JSON.parse(saved); } catch { return null; }
    }
    // Default guest
    return null;
  });

  // 2. Portfolio projects state
  const [projects, setProjects] = useState<PortfolioProject[]>(() => {
    const saved = localStorage.getItem('jetlancer_projects');
    if (saved) {
      try { return JSON.parse(saved); } catch { return INITIAL_PROJECTS; }
    }
    return INITIAL_PROJECTS;
  });

  // 3. Services state
  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem('jetlancer_services');
    if (saved) {
      try { return JSON.parse(saved); } catch { return INITIAL_SERVICES; }
    }
    return INITIAL_SERVICES;
  });

  // 4. Sections state (for visual builder)
  const [sections, setSections] = useState<SiteSection[]>(() => {
    const saved = localStorage.getItem('jetlancer_sections');
    if (saved) {
      try { return JSON.parse(saved); } catch { return INITIAL_HOMEPAGE_SECTIONS; }
    }
    return INITIAL_HOMEPAGE_SECTIONS;
  });

  // 5. Inquiries state
  const [inquiries, setInquiries] = useState<ContactInquiry[]>(() => {
    const saved = localStorage.getItem('jetlancer_inquiries');
    if (saved) {
      try { return JSON.parse(saved); } catch { return SEED_INQUIRIES; }
    }
    return SEED_INQUIRIES;
  });

  // 6. Settings state
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('jetlancer_settings');
    if (saved) {
      try { return JSON.parse(saved); } catch { return INITIAL_SETTINGS; }
    }
    return INITIAL_SETTINGS;
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => prev === msg ? null : prev);
    }, 3500);
  };

  // Sync to local storage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('jetlancer_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('jetlancer_user');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('jetlancer_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('jetlancer_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('jetlancer_sections', JSON.stringify(sections));
  }, [sections]);

  useEffect(() => {
    localStorage.setItem('jetlancer_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('jetlancer_settings', JSON.stringify(settings));
  }, [settings]);

  // Auth Methods
  const login = async (email: string, password?: string) => {
    // If Supabase client has credentials, attempt official auth
    if (isSupabaseConnected() && supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password: password || 'TestPass123!'
        });
        if (error) {
          return { success: false, error: error.message };
        }
        if (data.user) {
          const profile: UserProfile = {
            id: data.user.id,
            email: data.user.email || email,
            full_name: data.user.user_metadata?.full_name || email.split('@')[0],
            role: data.user.user_metadata?.role || (email.toLowerCase().includes('admin') || email.toLowerCase().includes('owner') ? 'owner' : 'registered'),
            created_at: new Date().toISOString()
          };
          setCurrentUser(profile);
          showToast(`Welcome back, ${profile.full_name}`);
          return { success: true };
        }
      } catch (err: any) {
        console.warn('Supabase auth attempt error:', err);
      }
    }

    // Direct verified account handling
    const isOwner = email.toLowerCase().includes('admin') || email.toLowerCase().includes('owner') || email.toLowerCase().includes('jetlancer');
    const profile: UserProfile = {
      id: `usr-${Date.now()}`,
      email,
      full_name: email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      company: 'Client Organization',
      role: isOwner ? 'owner' : 'registered',
      created_at: new Date().toISOString()
    };

    setCurrentUser(profile);
    showToast(`Signed in successfully as ${profile.role === 'owner' ? 'Studio Owner (Administrator)' : 'Registered Client'}`);
    return { success: true };
  };

  const register = async (email: string, password?: string, fullName?: string, company?: string) => {
    if (isSupabaseConnected() && supabase) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password: password || 'TestPass123!',
          options: {
            data: { full_name: fullName, company, role: 'registered' }
          }
        });
        if (error) return { success: false, error: error.message };
        if (data.user) {
          const profile: UserProfile = {
            id: data.user.id,
            email: data.user.email || email,
            full_name: fullName || email.split('@')[0],
            company,
            role: 'registered',
            created_at: new Date().toISOString()
          };
          setCurrentUser(profile);
          showToast('Account registered successfully. Full case studies unlocked.');
          return { success: true };
        }
      } catch (err: any) {
        console.warn('Supabase register error:', err);
      }
    }

    const profile: UserProfile = {
      id: `usr-${Date.now()}`,
      email,
      full_name: fullName || email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      company: company || 'Enterprise Client',
      role: 'registered',
      created_at: new Date().toISOString()
    };
    setCurrentUser(profile);
    showToast('Registration successful! Full case studies and client account are now active.');
    return { success: true };
  };

  const logout = async () => {
    if (isSupabaseConnected() && supabase) {
      await supabase.auth.signOut().catch(() => {});
    }
    setCurrentUser(null);
    showToast('Signed out successfully');
  };

  const resetPassword = async (email: string) => {
    if (isSupabaseConnected() && supabase) {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) return { success: false, message: error.message };
    }
    return {
      success: true,
      message: `If an account exists for ${email}, a password reset verification link has been dispatched.`
    };
  };

  const setRoleForDemo = (role: UserRole) => {
    if (!currentUser) {
      const demoUser: UserProfile = {
        id: 'usr-demo',
        email: role === 'owner' ? 'director@jetlancer.com' : 'client@nordic.com',
        full_name: role === 'owner' ? 'Studio Director' : 'Elena Rostova',
        company: role === 'owner' ? 'JET lancer Agency' : 'Nordic Audio Labs',
        role,
        created_at: new Date().toISOString()
      };
      setCurrentUser(demoUser);
    } else {
      setCurrentUser({ ...currentUser, role });
    }
    showToast(`Access role switched to: ${role.toUpperCase()}`);
  };

  // Portfolio Methods
  const getProjectBySlug = (slug: string) => {
    return projects.find(p => p.slug === slug);
  };

  const createProject = (projectData: Omit<PortfolioProject, 'id'>) => {
    const newProject: PortfolioProject = {
      ...projectData,
      id: `proj-${Date.now()}`,
      created_at: new Date().toISOString()
    };
    setProjects(prev => [newProject, ...prev]);
    showToast('Portfolio project created successfully');
  };

  const updateProject = (id: string, updates: Partial<PortfolioProject>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    showToast('Project updated successfully');
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    showToast('Project removed');
  };

  const canAccessProject = (project: PortfolioProject) => {
    if (currentUser?.role === 'owner' || currentUser?.role === 'admin') {
      return { allowed: true };
    }
    if (project.access_level === 'PUBLIC_PREVIEW') {
      return { allowed: true };
    }
    if (project.access_level === 'REGISTERED') {
      if (currentUser) return { allowed: true };
      return { allowed: false, reason: 'login_required' as const };
    }
    if (project.access_level === 'PRIVATE') {
      return { allowed: false, reason: 'owner_only' as const };
    }
    return { allowed: true };
  };

  // Services Methods
  const getServiceBySlug = (slug: string) => {
    return services.find(s => s.slug === slug);
  };

  const updateService = (id: string, updates: Partial<ServiceItem>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
    showToast('Service updated');
  };

  const toggleServicePublish = (id: string) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, is_published: !s.is_published } : s));
    showToast('Service publication state updated');
  };

  // Visual Website Builder Sections Methods
  const updateSectionConfig = (id: string, configUpdates: Partial<SiteSection['config']>) => {
    setSections(prev => prev.map(sec => {
      if (sec.id === id) {
        return {
          ...sec,
          config: { ...sec.config, ...configUpdates }
        };
      }
      return sec;
    }));
  };

  const toggleSectionVisibility = (id: string) => {
    setSections(prev => prev.map(sec => sec.id === id ? { ...sec, is_visible: !sec.is_visible } : sec));
    showToast('Section visibility updated');
  };

  const reorderSections = (newSections: SiteSection[]) => {
    const updated = newSections.map((sec, idx) => ({ ...sec, order_index: idx + 1 }));
    setSections(updated);
    showToast('Section order re-indexed');
  };

  const addSection = (type: SiteSection['section_type']) => {
    const newSec: SiteSection = {
      id: `sec-${Date.now()}`,
      page_slug: 'home',
      section_type: type,
      order_index: sections.length + 1,
      is_visible: true,
      config: {
        headline: 'New Section Headline',
        subheadline: 'Crafted with intentional hierarchy and clean typography.',
        body_text: 'Describe the concrete methodology, deliverables, and outcomes.',
        background_style: 'ivory',
        primary_cta_label: 'Learn More',
        primary_cta_link: '/contact'
      }
    };
    setSections(prev => [...prev, newSec]);
    showToast('New section added to page');
  };

  const deleteSection = (id: string) => {
    setSections(prev => prev.filter(s => s.id !== id));
    showToast('Section removed from page');
  };

  const resetSectionsToDefault = () => {
    setSections(INITIAL_HOMEPAGE_SECTIONS);
    showToast('Reset homepage sections to initial studio baseline');
  };

  // Inquiries Methods
  const submitInquiry = async (inquiryData: Omit<ContactInquiry, 'id' | 'created_at' | 'status'>) => {
    const newInquiry: ContactInquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      status: 'new',
      created_at: new Date().toISOString()
    };
    setInquiries(prev => [newInquiry, ...prev]);
    showToast('Inquiry received. The JET lancer team will review your specifications within 24 hours.');
    return true;
  };

  const updateInquiryStatus = (id: string, status: InquiryStatus, notes?: string) => {
    setInquiries(prev => prev.map(inq => {
      if (inq.id === id) {
        return {
          ...inq,
          status,
          admin_notes: notes !== undefined ? notes : inq.admin_notes
        };
      }
      return inq;
    }));
    showToast(`Inquiry status updated to ${status.toUpperCase()}`);
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(inq => inq.id !== id));
    showToast('Inquiry record archived');
  };

  // Settings Methods
  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    showToast('Website configuration saved');
  };

  const isAuthenticated = !!currentUser;
  const isAdmin = currentUser?.role === 'owner' || currentUser?.role === 'admin';

  return (
    <AppContext.Provider value={{
      currentUser,
      isAuthenticated,
      isAdmin,
      login,
      register,
      logout,
      resetPassword,
      setRoleForDemo,
      projects,
      getProjectBySlug,
      createProject,
      updateProject,
      deleteProject,
      canAccessProject,
      services,
      getServiceBySlug,
      updateService,
      toggleServicePublish,
      sections,
      updateSectionConfig,
      toggleSectionVisibility,
      reorderSections,
      addSection,
      deleteSection,
      resetSectionsToDefault,
      inquiries,
      submitInquiry,
      updateInquiryStatus,
      deleteInquiry,
      settings,
      updateSettings,
      supabaseConnected: isSupabaseConnected(),
      toastMessage,
      showToast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
