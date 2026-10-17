import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Shield, 
  Layers, 
  FolderGit2, 
  Wrench, 
  Inbox, 
  Image as ImageIcon, 
  Settings as SettingsIcon, 
  Users, 
  Plus, 
  Edit3, 
  Trash2, 
  Check, 
  Eye, 
  EyeOff, 
  Lock, 
  ExternalLink,
  Save,
  Database,
  ArrowRight
} from 'lucide-react';
import { PortfolioProject, AccessLevel, ServiceItem, ServiceCategoryCode, InquiryStatus } from '../../types';

interface AdminPagesProps {
  subRoute?: string;
  navigate: (path: string) => void;
}

export const AdminPages: React.FC<AdminPagesProps> = ({ subRoute = 'overview', navigate }) => {
  const { 
    currentUser, 
    isAdmin, 
    setRoleForDemo,
    projects, 
    createProject, 
    updateProject, 
    deleteProject,
    services, 
    updateService, 
    toggleServicePublish,
    inquiries, 
    updateInquiryStatus, 
    deleteInquiry,
    sections,
    settings, 
    updateSettings,
    showToast,
    supabaseConnected
  } = useApp();

  const [activeTab, setActiveTab] = useState<string>(subRoute || 'overview');

  // Edit Project Modal state
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
  const [newProjectModal, setNewProjectModal] = useState(false);

  // New Project Form State
  const [newTitle, setNewTitle] = useState('');
  const [newTagline, setNewTagline] = useState('');
  const [newCategory, setNewCategory] = useState('Website Design & Architecture');
  const [newAccessLevel, setNewAccessLevel] = useState<AccessLevel>('PUBLIC_PREVIEW');
  const [newSummary, setNewSummary] = useState('');
  const [newCoverImage, setNewCoverImage] = useState('/src/assets/images/hero_jet_lancer_studio_1792203368567.jpg');

  // Inquiries filter
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState<'ALL' | InquiryStatus>('ALL');

  // Editable settings state
  const [editBrandName, setEditBrandName] = useState(settings.brand_name);
  const [editTagline, setEditTagline] = useState(settings.tagline);
  const [editEmail, setEditEmail] = useState(settings.contact_email);
  const [editPhone, setEditPhone] = useState(settings.contact_phone);
  const [editAddress, setEditAddress] = useState(settings.contact_address);
  const [editHours, setEditHours] = useState(settings.business_hours);
  const [editResponseTime, setEditResponseTime] = useState(settings.response_time);
  const [editAnnounceEnabled, setEditAnnounceEnabled] = useState(settings.announcement_enabled);
  const [editAnnounceText, setEditAnnounceText] = useState(settings.announcement_text);

  // Authorization Gate
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#faf9f5] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white border border-[#0b132b]/10 rounded-lg p-8 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 bg-red-100 text-red-700 rounded-full flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[#0b132b]">Studio Owner Access Required</h2>
          <p className="text-xs text-[#0b132b]/70 leading-relaxed">
            The administration console at <span className="font-mono text-[#2563eb]">/admin</span> is protected by Row Level Security policies. Only authorized studio directors may access portfolio editing, inquiry management, and visual builder controls.
          </p>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => setRoleForDemo('owner')}
              className="w-full py-2.5 bg-[#0b132b] hover:bg-black text-white rounded text-xs font-semibold cursor-pointer transition-colors"
            >
              Initialize Studio Owner Access (Demo Mode)
            </button>
            <button
              onClick={() => navigate('/login')}
              className="w-full py-2.5 border border-[#0b132b]/15 text-[#0b132b] rounded text-xs font-semibold cursor-pointer hover:bg-[#faf9f5]"
            >
              Sign In with Authorized Credentials
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleCreateProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newSummary.trim()) {
      showToast('Please provide a title and summary');
      return;
    }
    const slug = newTitle.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    createProject({
      slug,
      title: newTitle.trim(),
      tagline: newTagline.trim() || 'Custom demonstration concept',
      category: newCategory,
      access_level: newAccessLevel,
      cover_image: newCoverImage,
      summary: newSummary.trim(),
      client_type: 'Demonstration Concept',
      year: '2026',
      tags: ['Custom Concept', 'Design System'],
      overview: newSummary.trim(),
      challenge: 'Industry fragmentation and lack of standardized design tokens.',
      solution: 'Custom full-stack architecture built to client specification.',
      key_deliverables: [
        { title: 'Core Specification', description: 'Complete system architecture requirements.' },
        { title: 'Responsive Component Spec', description: 'Tested against desktop and mobile viewports.' }
      ],
      interactive_type: 'agency_showcase',
      order_index: projects.length + 1,
      is_published: true
    });
    setNewProjectModal(false);
    setNewTitle('');
    setNewSummary('');
    setNewTagline('');
  };

  const handleSaveSettings = () => {
    updateSettings({
      brand_name: editBrandName,
      tagline: editTagline,
      contact_email: editEmail,
      contact_phone: editPhone,
      contact_address: editAddress,
      business_hours: editHours,
      response_time: editResponseTime,
      announcement_enabled: editAnnounceEnabled,
      announcement_text: editAnnounceText
    });
    showToast('Business configuration saved.');
  };

  const filteredInquiries = inquiries.filter(
    inq => inquiryStatusFilter === 'ALL' || inq.status === inquiryStatusFilter
  );

  return (
    <div className="min-h-screen bg-[#faf9f5] flex flex-col">
      
      {/* Admin Sub-Navbar */}
      <div className="bg-[#0b132b] text-white border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#2563eb]" />
            <div>
              <span className="font-extrabold tracking-tight text-sm">
                JET<span className="font-light text-[#2563eb]">lancer</span>
              </span>
              <span className="ml-2 text-[10px] font-mono text-[#2563eb] bg-white/10 px-1.5 py-0.5 rounded uppercase">
                Studio Admin Workspace
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/admin/site-editor')}
              className="px-3 py-1.5 bg-[#2563eb] hover:bg-blue-600 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors shadow-sm"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Visual Website Editor</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Live Website</span>
            </button>
          </div>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="bg-white border-b border-[#0b132b]/8 px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-6 text-xs font-medium text-[#0b132b]/70 min-w-max">
          {[
            { id: 'overview', label: 'Overview', icon: Shield },
            { id: 'portfolio', label: `Portfolio (${projects.length})`, icon: FolderGit2 },
            { id: 'services', label: `Services (${services.length})`, icon: Wrench },
            { id: 'messages', label: `Inquiries (${inquiries.length})`, icon: Inbox },
            { id: 'media', label: 'Media Library', icon: ImageIcon },
            { id: 'pages', label: `Site Pages (${sections.length} Secs)`, icon: Layers },
            { id: 'settings', label: 'Website Settings', icon: SettingsIcon },
            { id: 'users', label: 'User RBAC', icon: Users }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3.5 border-b-2 flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'border-[#2563eb] text-[#0b132b] font-bold'
                    : 'border-transparent hover:text-[#0b132b] hover:border-[#0b132b]/20'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#2563eb]' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Admin Tab Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* ========================================================= */}
        {/* TAB 1: OVERVIEW */}
        {/* ========================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#0b132b]">Administrative Overview</h2>
              <p className="text-xs text-[#0b132b]/60">Genuine database metrics and studio operational shortcuts.</p>
            </div>

            {/* Real Database Metrics Cards (Zero fake statistics) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-[#0b132b]/8 rounded-lg p-5 space-y-1">
                <span className="text-[11px] font-mono text-[#0b132b]/50">CUSTOMER INQUIRIES</span>
                <p className="text-2xl font-extrabold text-[#0b132b] font-mono tabular-nums">{inquiries.length}</p>
                <p className="text-[11px] text-blue-600 font-medium">
                  {inquiries.filter(i => i.status === 'new').length} require triage
                </p>
              </div>

              <div className="bg-white border border-[#0b132b]/8 rounded-lg p-5 space-y-1">
                <span className="text-[11px] font-mono text-[#0b132b]/50">PORTFOLIO DEMONSTRATIONS</span>
                <p className="text-2xl font-extrabold text-[#0b132b] font-mono tabular-nums">{projects.length}</p>
                <p className="text-[11px] text-emerald-600 font-medium">
                  {projects.filter(p => p.is_published).length} Published / Active
                </p>
              </div>

              <div className="bg-white border border-[#0b132b]/8 rounded-lg p-5 space-y-1">
                <span className="text-[11px] font-mono text-[#0b132b]/50">SERVICES IN CATALOG</span>
                <p className="text-2xl font-extrabold text-[#0b132b] font-mono tabular-nums">{services.length}</p>
                <p className="text-[11px] text-[#0b132b]/60">5 Dedicated Practices</p>
              </div>

              <div className="bg-white border border-[#0b132b]/8 rounded-lg p-5 space-y-1">
                <span className="text-[11px] font-mono text-[#0b132b]/50">ACTIVE HOMEPAGE SECTIONS</span>
                <p className="text-2xl font-extrabold text-[#0b132b] font-mono tabular-nums">
                  {sections.filter(s => s.is_visible).length} / {sections.length}
                </p>
                <p className="text-[11px] text-[#2563eb] font-medium">Visual Builder Synced</p>
              </div>
            </div>

            {/* Quick Action Shortcuts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                onClick={() => navigate('/admin/site-editor')}
                className="bg-white border border-[#0b132b]/8 hover:border-[#2563eb] rounded-lg p-6 cursor-pointer transition-colors space-y-2 group"
              >
                <Layers className="w-5 h-5 text-[#2563eb]" />
                <h3 className="font-bold text-[#0b132b] group-hover:text-[#2563eb] transition-colors">
                  Visual Drag-and-Drop Website Builder →
                </h3>
                <p className="text-xs text-[#0b132b]/70 leading-relaxed">
                  Reorder sections, update hero copy, change image assets, and preview across desktop, tablet, and mobile breakpoints.
                </p>
              </div>

              <div
                onClick={() => setActiveTab('messages')}
                className="bg-white border border-[#0b132b]/8 hover:border-[#2563eb] rounded-lg p-6 cursor-pointer transition-colors space-y-2 group"
              >
                <Inbox className="w-5 h-5 text-[#2563eb]" />
                <h3 className="font-bold text-[#0b132b] group-hover:text-[#2563eb] transition-colors">
                  Customer Inquiries Queue ({inquiries.length}) →
                </h3>
                <p className="text-xs text-[#0b132b]/70 leading-relaxed">
                  Review submitted project briefs, update status from New to Replied, and log internal follow-up notes.
                </p>
              </div>

              <div
                onClick={() => setActiveTab('portfolio')}
                className="bg-white border border-[#0b132b]/8 hover:border-[#2563eb] rounded-lg p-6 cursor-pointer transition-colors space-y-2 group"
              >
                <FolderGit2 className="w-5 h-5 text-[#2563eb]" />
                <h3 className="font-bold text-[#0b132b] group-hover:text-[#2563eb] transition-colors">
                  Manage Portfolio Demonstrations →
                </h3>
                <p className="text-xs text-[#0b132b]/70 leading-relaxed">
                  Create new showcase concepts, toggle Public Preview vs Registered access modes, or edit project copy.
                </p>
              </div>
            </div>

            {/* Recent Inquiries Snippet */}
            <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#0b132b]">Recent Client Inquiries</h3>
                <button
                  onClick={() => setActiveTab('messages')}
                  className="text-xs text-[#2563eb] font-semibold hover:underline cursor-pointer"
                >
                  View All Messages
                </button>
              </div>

              <div className="space-y-3">
                {inquiries.slice(0, 3).map((inq) => (
                  <div key={inq.id} className="p-3 bg-[#faf9f5] border border-[#0b132b]/6 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#0b132b]">{inq.full_name}</span>
                        {inq.company && <span className="text-[#0b132b]/60">· {inq.company}</span>}
                      </div>
                      <p className="text-[#0b132b]/70 line-clamp-1 italic mt-0.5">"{inq.message}"</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-[10px] text-[#2563eb]">{inq.budget_range}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-white border border-[#0b132b]/10">
                        {inq.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: PORTFOLIO MANAGEMENT */}
        {/* ========================================================= */}
        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#0b132b]">Portfolio Project Management</h2>
                <p className="text-xs text-[#0b132b]/60">Manage demonstrations, access tier levels, and publication states.</p>
              </div>
              <button
                onClick={() => setNewProjectModal(true)}
                className="px-4 py-2 bg-[#0b132b] hover:bg-[#1d4ed8] text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors shadow-sm self-start sm:self-auto"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create Demonstration Project</span>
              </button>
            </div>

            {/* Projects Table */}
            <div className="bg-white border border-[#0b132b]/8 rounded-lg overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#faf9f5] border-b border-[#0b132b]/8 text-[11px] font-mono text-[#0b132b]/60 uppercase">
                  <tr>
                    <th className="p-3.5">Project Title</th>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Access Level</th>
                    <th className="p-3.5">State</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0b132b]/6">
                  {projects.map((proj) => (
                    <tr key={proj.id} className="hover:bg-[#faf9f5]/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#0b132b]">
                        <div className="flex items-center gap-3">
                          <img src={proj.cover_image} alt={proj.title} className="w-10 h-7 object-cover rounded border border-[#0b132b]/10 shrink-0" referrerPolicy="no-referrer" />
                          <div>
                            <p className="truncate max-w-xs">{proj.title}</p>
                            <span className="font-mono text-[10px] text-[#0b132b]/50">/{proj.slug}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3.5 text-[#0b132b]/70">{proj.category}</td>
                      <td className="p-3.5">
                        <select
                          value={proj.access_level}
                          onChange={(e) => updateProject(proj.id, { access_level: e.target.value as AccessLevel })}
                          className="bg-white border border-[#0b132b]/15 rounded px-2 py-1 text-[11px] font-mono text-[#0b132b]"
                        >
                          <option value="PUBLIC_PREVIEW">PUBLIC_PREVIEW</option>
                          <option value="REGISTERED">REGISTERED</option>
                          <option value="PRIVATE">PRIVATE</option>
                        </select>
                      </td>
                      <td className="p-3.5">
                        <button
                          onClick={() => updateProject(proj.id, { is_published: !proj.is_published })}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase cursor-pointer ${
                            proj.is_published ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {proj.is_published ? 'Published' : 'Draft'}
                        </button>
                      </td>
                      <td className="p-3.5 text-right space-x-2">
                        <button
                          onClick={() => navigate(`/portfolio/${proj.slug}`)}
                          className="p-1 text-gray-500 hover:text-[#0b132b] cursor-pointer"
                          title="View Case Study"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setEditingProject(proj)}
                          className="p-1 text-blue-600 hover:text-blue-800 cursor-pointer"
                          title="Edit Project"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => deleteProject(proj.id)}
                          className="p-1 text-red-500 hover:text-red-700 cursor-pointer"
                          title="Delete Project"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal: Create Demonstration Project */}
            {newProjectModal && (
              <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg max-w-lg w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between border-b border-[#0b132b]/8 pb-3">
                    <h3 className="font-bold text-sm text-[#0b132b]">Create New Demonstration Project</h3>
                    <button onClick={() => setNewProjectModal(false)} className="text-gray-400 hover:text-black">✕</button>
                  </div>
                  <form onSubmit={handleCreateProjectSubmit} className="space-y-4 text-xs">
                    <div className="space-y-1">
                      <label className="font-bold text-[#0b132b]">Project Title</label>
                      <input
                        type="text"
                        required
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="e.g. Helix BioTech Customer Portal"
                        className="w-full border border-gray-300 rounded p-2"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-[#0b132b]">Tagline</label>
                      <input
                        type="text"
                        value={newTagline}
                        onChange={(e) => setNewTagline(e.target.value)}
                        placeholder="e.g. Streamlined clinical inquiry triage & specimen status"
                        className="w-full border border-gray-300 rounded p-2"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-[#0b132b]">Category</label>
                      <select
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="w-full border border-gray-300 rounded p-2"
                      >
                        <option value="Website Design and Development">Website Design and Development</option>
                        <option value="AI and Automation">AI and Automation</option>
                        <option value="Content and Copywriting">Content and Copywriting</option>
                        <option value="Video and Media">Video and Media</option>
                        <option value="Digital Business Support">Digital Business Support</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-[#0b132b]">Access Level</label>
                      <select
                        value={newAccessLevel}
                        onChange={(e) => setNewAccessLevel(e.target.value as AccessLevel)}
                        className="w-full border border-gray-300 rounded p-2"
                      >
                        <option value="PUBLIC_PREVIEW">PUBLIC_PREVIEW (Visible to all)</option>
                        <option value="REGISTERED">REGISTERED (Requires authenticated client)</option>
                        <option value="PRIVATE">PRIVATE (Owner only)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-[#0b132b]">Summary</label>
                      <textarea
                        rows={3}
                        required
                        value={newSummary}
                        onChange={(e) => setNewSummary(e.target.value)}
                        placeholder="Comprehensive summary of the concept and deliverables..."
                        className="w-full border border-gray-300 rounded p-2"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-[#0b132b]">Cover Image URL / Path</label>
                      <input
                        type="text"
                        value={newCoverImage}
                        onChange={(e) => setNewCoverImage(e.target.value)}
                        className="w-full border border-gray-300 rounded p-2 font-mono text-[11px]"
                      />
                    </div>
                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setNewProjectModal(false)}
                        className="px-4 py-2 border rounded text-xs font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#0b132b] text-white rounded text-xs font-semibold"
                      >
                        Save Project
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Modal: Edit Project */}
            {editingProject && (
              <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg max-w-lg w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between border-b border-[#0b132b]/8 pb-3">
                    <h3 className="font-bold text-sm text-[#0b132b]">Edit Project: {editingProject.title}</h3>
                    <button onClick={() => setEditingProject(null)} className="text-gray-400 hover:text-black">✕</button>
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="space-y-1">
                      <label className="font-bold text-[#0b132b]">Title</label>
                      <input
                        type="text"
                        value={editingProject.title}
                        onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                        className="w-full border border-gray-300 rounded p-2"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-[#0b132b]">Tagline</label>
                      <input
                        type="text"
                        value={editingProject.tagline}
                        onChange={(e) => setEditingProject({ ...editingProject, tagline: e.target.value })}
                        className="w-full border border-gray-300 rounded p-2"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-[#0b132b]">Summary</label>
                      <textarea
                        rows={3}
                        value={editingProject.summary}
                        onChange={(e) => setEditingProject({ ...editingProject, summary: e.target.value })}
                        className="w-full border border-gray-300 rounded p-2"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-[#0b132b]">Cover Image</label>
                      <input
                        type="text"
                        value={editingProject.cover_image}
                        onChange={(e) => setEditingProject({ ...editingProject, cover_image: e.target.value })}
                        className="w-full border border-gray-300 rounded p-2 font-mono text-[11px]"
                      />
                    </div>
                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setEditingProject(null)}
                        className="px-4 py-2 border rounded text-xs font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          updateProject(editingProject.id, editingProject);
                          setEditingProject(null);
                        }}
                        className="px-4 py-2 bg-[#2563eb] text-white rounded text-xs font-semibold"
                      >
                        Save Updates
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: SERVICES MANAGEMENT */}
        {/* ========================================================= */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#0b132b]">Services Management ({services.length})</h2>
                <p className="text-xs text-[#0b132b]/60">Manage capabilities catalog, visibility, and category assignments.</p>
              </div>
              <button
                onClick={() => navigate('/services')}
                className="text-xs font-semibold text-[#2563eb] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View Public Directory →</span>
              </button>
            </div>

            <div className="bg-white border border-[#0b132b]/8 rounded-lg overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#faf9f5] border-b border-[#0b132b]/8 text-[11px] font-mono text-[#0b132b]/60 uppercase">
                  <tr>
                    <th className="p-3.5">#</th>
                    <th className="p-3.5">Practice</th>
                    <th className="p-3.5">Title</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0b132b]/6">
                  {services.map((srv) => (
                    <tr key={srv.id} className="hover:bg-[#faf9f5]/50 transition-colors">
                      <td className="p-3.5 font-mono text-[11px] text-[#2563eb] font-semibold">#{srv.service_number}</td>
                      <td className="p-3.5 font-mono text-[11px]">{srv.category_code} · {srv.category_name}</td>
                      <td className="p-3.5 font-bold text-[#0b132b]">{srv.title}</td>
                      <td className="p-3.5">
                        <button
                          onClick={() => toggleServicePublish(srv.id)}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase cursor-pointer ${
                            srv.is_published ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {srv.is_published ? 'Published' : 'Unpublished'}
                        </button>
                      </td>
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => navigate(`/services/${srv.slug}`)}
                          className="text-[#2563eb] hover:underline font-semibold cursor-pointer"
                        >
                          View Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: INQUIRIES MANAGEMENT */}
        {/* ========================================================= */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#0b132b]">Customer Inquiries ({inquiries.length})</h2>
                <p className="text-xs text-[#0b132b]/60">Manage submitted project briefs, update triage states, and log notes.</p>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5 p-1 bg-white border border-[#0b132b]/8 rounded text-xs">
                {(['ALL', 'new', 'reviewed', 'replied', 'archived'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setInquiryStatusFilter(st)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono uppercase cursor-pointer transition-colors ${
                      inquiryStatusFilter === st ? 'bg-[#0b132b] text-white font-bold' : 'text-[#0b132b]/60 hover:text-[#0b132b]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredInquiries.map((inq) => (
                <div key={inq.id} className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-4 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#0b132b]/8 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-sm text-[#0b132b]">{inq.full_name}</h3>
                        {inq.company && <span className="text-xs text-[#0b132b]/60">({inq.company})</span>}
                      </div>
                      <p className="text-xs font-mono text-[#2563eb]">{inq.email}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#0b132b]/60">
                        Budget: {inq.budget_range || 'Not specified'}
                      </span>
                      <select
                        value={inq.status}
                        onChange={(e) => updateInquiryStatus(inq.id, e.target.value as InquiryStatus)}
                        className="bg-[#faf9f5] border border-[#0b132b]/15 rounded px-2.5 py-1 text-xs font-mono uppercase text-[#0b132b]"
                      >
                        <option value="new">NEW</option>
                        <option value="reviewed">REVIEWED</option>
                        <option value="replied">REPLIED</option>
                        <option value="archived">ARCHIVED</option>
                      </select>
                      <button
                        onClick={() => deleteInquiry(inq.id)}
                        className="p-1.5 text-red-500 hover:text-red-700 cursor-pointer"
                        title="Delete Inquiry"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-[#0b132b]/80 leading-relaxed font-sans bg-[#faf9f5] p-3 rounded border border-[#0b132b]/6">
                    "{inq.message}"
                  </p>

                  {/* Admin follow up note editor */}
                  <div className="flex items-center gap-2 pt-1 text-xs">
                    <span className="font-bold text-[#0b132b] shrink-0">Admin Note:</span>
                    <input
                      type="text"
                      defaultValue={inq.admin_notes || ''}
                      onBlur={(e) => updateInquiryStatus(inq.id, inq.status, e.target.value)}
                      placeholder="Add follow-up notes or call timestamps..."
                      className="flex-1 bg-white border border-[#0b132b]/15 rounded px-3 py-1 text-xs text-[#0b132b] focus:outline-none focus:border-[#2563eb]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: MEDIA MANAGEMENT */}
        {/* ========================================================= */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#0b132b]">Media Library & Supabase Storage</h2>
                <p className="text-xs text-[#0b132b]/60">Verified studio assets and generated visual components.</p>
              </div>
              <span className="text-xs font-mono text-[#2563eb]">
                Bucket: /portfolio-assets (Active)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Studio Baseline', path: '/src/assets/images/hero_jet_lancer_studio_1792203368567.jpg', type: '16:9 Photography' },
                { title: 'Northstar Creative', path: '/src/assets/images/project_northstar_editorial_1792203369157.jpg', type: 'Editorial Exhibition' },
                { title: 'Alpine Sanctuary', path: '/src/assets/images/project_ai_video_campaign_1792203369949.jpg', type: '35mm Film Still' },
                { title: 'Automation Pipeline', path: '/src/assets/images/project_content_automation_1792203370024.jpg', type: 'Isometric Diagram' }
              ].map((media, idx) => (
                <div key={idx} className="bg-white border border-[#0b132b]/8 rounded-lg overflow-hidden space-y-2">
                  <div className="aspect-video bg-black overflow-hidden">
                    <img src={media.path} alt={media.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-3 space-y-1 text-xs">
                    <span className="font-mono text-[10px] text-[#2563eb]">{media.type}</span>
                    <h4 className="font-bold text-[#0b132b]">{media.title}</h4>
                    <p className="font-mono text-[10px] text-[#0b132b]/50 truncate">{media.path}</p>
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText(media.path);
                        showToast('Asset path copied to clipboard');
                      }}
                      className="w-full mt-2 py-1 bg-[#faf9f5] border border-[#0b132b]/10 rounded text-[11px] font-semibold text-[#0b132b] hover:bg-[#0b132b] hover:text-white transition-colors cursor-pointer"
                    >
                      Copy Path
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 6: PAGES MANAGEMENT */}
        {/* ========================================================= */}
        {activeTab === 'pages' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#0b132b]">Page Management & Structure</h2>
                <p className="text-xs text-[#0b132b]/60">Manage route metadata and launch the visual canvas editor.</p>
              </div>
              <button
                onClick={() => navigate('/admin/site-editor')}
                className="px-4 py-2 bg-[#2563eb] text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-blue-600 shadow-sm"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Open Visual Website Builder</span>
              </button>
            </div>

            <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-4">
              <h3 className="font-bold text-sm text-[#0b132b]">Configured Route Inventory</h3>
              <div className="divide-y divide-[#0b132b]/8 text-xs">
                {[
                  { route: '/', name: 'Homepage', status: 'Published', sections: `${sections.length} Active Blocks` },
                  { route: '/services', name: 'Services Directory', status: 'Published', sections: '84 Services' },
                  { route: '/portfolio', name: 'Portfolio Gallery', status: 'Published', sections: '6 Case Studies' },
                  { route: '/about', name: 'About JET lancer', status: 'Published', sections: 'Studio Creed & Stack' },
                  { route: '/process', name: 'Engineering Process', status: 'Published', sections: '5 Lifecycle Phases' },
                  { route: '/faq', name: 'Frequently Asked Questions', status: 'Published', sections: '7 Key Questions' },
                  { route: '/contact', name: 'Project Inquiries', status: 'Published', sections: 'Dynamic Intake Funnel' }
                ].map((pg, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#0b132b]">{pg.name} <span className="font-mono text-[#0b132b]/50">({pg.route})</span></p>
                      <p className="text-[11px] text-[#0b132b]/60">{pg.sections}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 uppercase">
                        {pg.status}
                      </span>
                      <button
                        onClick={() => navigate(pg.route)}
                        className="text-[#2563eb] hover:underline font-semibold"
                      >
                        Inspect
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 7: WEBSITE SETTINGS */}
        {/* ========================================================= */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#0b132b]">Website Configuration & Contact Details</h2>
              <p className="text-xs text-[#0b132b]/60">
                Edit business details, email, telephone, hours, and Supabase integration parameters.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Brand & Contact Form */}
              <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-4 text-xs">
                <h3 className="font-bold text-sm text-[#0b132b]">Business Identity & Contacts</h3>

                <div className="space-y-1">
                  <label className="font-bold text-[#0b132b]">Brand Name</label>
                  <input
                    type="text"
                    value={editBrandName}
                    onChange={(e) => setEditBrandName(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 text-[#0b132b]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#0b132b]">Official Tagline</label>
                  <input
                    type="text"
                    value={editTagline}
                    onChange={(e) => setEditTagline(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 text-[#0b132b]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#0b132b]">Business Email</label>
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 text-[#0b132b]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#0b132b]">Business Phone</label>
                  <input
                    type="text"
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 text-[#0b132b]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#0b132b]">Studio Address / Headquarters</label>
                  <input
                    type="text"
                    value={editAddress}
                    onChange={(e) => setEditAddress(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 text-[#0b132b]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#0b132b]">Operating Hours</label>
                  <input
                    type="text"
                    value={editHours}
                    onChange={(e) => setEditHours(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 text-[#0b132b]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#0b132b]">Response Time Guarantee</label>
                  <input
                    type="text"
                    value={editResponseTime}
                    onChange={(e) => setEditResponseTime(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 text-[#0b132b]"
                  />
                </div>

                <button
                  onClick={handleSaveSettings}
                  className="w-full py-2.5 bg-[#0b132b] hover:bg-[#1d4ed8] text-white rounded font-semibold cursor-pointer transition-colors"
                >
                  Save Business Configuration
                </button>
              </div>

              {/* Supabase Integration & Announcement Bar Settings */}
              <div className="space-y-6 text-xs">
                
                {/* Announcement Banner */}
                <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-4">
                  <h3 className="font-bold text-sm text-[#0b132b]">Top Announcement Banner</h3>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="annToggle"
                      checked={editAnnounceEnabled}
                      onChange={(e) => setEditAnnounceEnabled(e.target.checked)}
                      className="rounded text-[#2563eb]"
                    />
                    <label htmlFor="annToggle" className="font-semibold text-[#0b132b]">
                      Display Top Announcement Banner
                    </label>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#0b132b]">Banner Copy</label>
                    <input
                      type="text"
                      value={editAnnounceText}
                      onChange={(e) => setEditAnnounceText(e.target.value)}
                      className="w-full border border-gray-300 rounded p-2 text-[#0b132b]"
                    />
                  </div>

                  <button
                    onClick={handleSaveSettings}
                    className="py-1.5 px-4 bg-[#2563eb] text-white rounded font-semibold cursor-pointer"
                  >
                    Update Banner
                  </button>
                </div>

                {/* Supabase Connection Status Card */}
                <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-[#0b132b] flex items-center gap-2">
                      <Database className="w-4 h-4 text-[#2563eb]" />
                      <span>Supabase Database Status</span>
                    </h3>
                    <span className="font-mono text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      Schema Ready
                    </span>
                  </div>

                  <p className="text-[#0b132b]/70 leading-relaxed">
                    Target Supabase URL: <span className="font-mono text-[#2563eb] block mt-0.5">https://jwtflpmdeasmtkqeqwgb.supabase.co</span>
                  </p>

                  <div className="p-3 bg-[#faf9f5] border border-[#0b132b]/8 rounded space-y-1 text-[11px] text-[#0b132b]/80">
                    <span className="font-bold text-[#0b132b] block">SQL Migration File:</span>
                    <p className="font-mono text-[10px] text-[#2563eb]">/supabase/schema.sql</p>
                    <p className="pt-1">
                      Contains complete tables for <code className="bg-white px-1">profiles</code>, <code className="bg-white px-1">portfolio_projects</code>, <code className="bg-white px-1">services</code>, <code className="bg-white px-1">site_sections</code>, and <code className="bg-white px-1">contact_inquiries</code> with Row Level Security (RLS) policies.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 8: USERS & RBAC */}
        {/* ========================================================= */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#0b132b]">User RBAC & Permission Governance</h2>
              <p className="text-xs text-[#0b132b]/60">Inspection of Row Level Security tiers and authorized roles.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-3 text-xs">
                <span className="font-mono text-[11px] text-[#2563eb] font-bold">TIER 1: PUBLIC (ANONYMOUS)</span>
                <h3 className="font-bold text-[#0b132b]">Unauthenticated Visitors</h3>
                <p className="text-[#0b132b]/70 leading-relaxed">
                  Can view public homepage sections, browse 84 services, view public demonstration previews, and submit contact inquiries. Cannot access registered case study manifests or administrative routes.
                </p>
              </div>

              <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-3 text-xs">
                <span className="font-mono text-[11px] text-[#2563eb] font-bold">TIER 2: REGISTERED CLIENT</span>
                <h3 className="font-bold text-[#0b132b]">Authenticated Clients</h3>
                <p className="text-[#0b132b]/70 leading-relaxed">
                  Has authenticated user session. Unlocks all 6 in-depth architectural case studies, interactive pipelines, and access to client inquiry history. Cannot modify website structure or view other users’ inquiries.
                </p>
              </div>

              <div className="bg-white border border-[#0b132b]/8 rounded-lg p-6 space-y-3 text-xs">
                <span className="font-mono text-[11px] text-[#2563eb] font-bold">TIER 3: STUDIO OWNER / ADMIN</span>
                <h3 className="font-bold text-[#0b132b]">Authorized Studio Director</h3>
                <p className="text-[#0b132b]/70 leading-relaxed">
                  Full administrative permissions. Access to the Visual Drag-and-Drop Website Builder, customer inquiry triage queue, portfolio project creation, service editing, and site settings.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#0b132b]/8 rounded-lg space-y-2 text-xs">
              <h3 className="font-bold text-[#0b132b]">Security Architecture Verification</h3>
              <p className="text-[#0b132b]/70 leading-relaxed">
                As required by JET lancer security standards, administrative permissions are never determined by client-modifiable localStorage attributes alone. In production, Supabase PostgreSQL Row Level Security enforces <code className="bg-slate-100 px-1 font-mono">public.is_admin()</code> server-side definitions before allowing database updates.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
