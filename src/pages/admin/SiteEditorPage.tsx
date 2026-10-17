import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SiteSection, SectionType, DeviceViewport } from '../../types';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Eye, 
  EyeOff, 
  ArrowUp, 
  ArrowDown, 
  Trash2, 
  Plus, 
  Save, 
  RotateCcw, 
  Check, 
  ExternalLink,
  Layers,
  Settings as SettingsIcon,
  Image as ImageIcon
} from 'lucide-react';

interface SiteEditorPageProps {
  navigate: (path: string) => void;
}

export const SiteEditorPage: React.FC<SiteEditorPageProps> = ({ navigate }) => {
  const { 
    sections, 
    updateSectionConfig, 
    toggleSectionVisibility, 
    reorderSections, 
    addSection, 
    deleteSection, 
    resetSectionsToDefault,
    showToast,
    projects,
    services
  } = useApp();

  const [selectedSectionId, setSelectedSectionId] = useState<string>(sections[0]?.id || 'sec-hero');
  const [viewport, setViewport] = useState<DeviceViewport>('desktop');
  const [isSaved, setIsSaved] = useState(false);

  const selectedSection = sections.find(s => s.id === selectedSectionId) || sections[0];

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newSections = [...sections];
    const temp = newSections[index - 1];
    newSections[index - 1] = newSections[index];
    newSections[index] = temp;
    reorderSections(newSections);
  };

  const handleMoveDown = (index: number) => {
    if (index === sections.length - 1) return;
    const newSections = [...sections];
    const temp = newSections[index + 1];
    newSections[index + 1] = newSections[index];
    newSections[index] = temp;
    reorderSections(newSections);
  };

  const handleSave = () => {
    setIsSaved(true);
    showToast('Changes saved & published to live website.');
    setTimeout(() => setIsSaved(false), 2000);
  };

  // Preset media library assets for fast image picker
  const mediaLibrary = [
    { label: 'Agency Studio (Leica)', url: '/src/assets/images/hero_jet_lancer_studio_1792203368567.jpg' },
    { label: 'Northstar Editorial Gallery', url: '/src/assets/images/project_northstar_editorial_1792203369157.jpg' },
    { label: 'Alpine Sanctuary Still', url: '/src/assets/images/project_ai_video_campaign_1792203369949.jpg' },
    { label: 'Automation Pipeline Isometric', url: '/src/assets/images/project_content_automation_1792203370024.jpg' }
  ];

  return (
    <div className="min-h-screen bg-[#111827] text-[#f9fafb] flex flex-col">
      
      {/* Top Editor Toolbar */}
      <header className="h-14 bg-[#1f2937] border-b border-gray-700 px-4 flex items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/admin')}
            className="text-xs font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            ← Admin Dashboard
          </button>
          <span className="text-gray-600">/</span>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#2563eb]" />
            <h1 className="text-xs font-bold uppercase tracking-wider text-white">
              Visual Website Editor
            </h1>
            <span className="text-[11px] font-mono text-gray-400">Page: Homepage (/)</span>
          </div>
        </div>

        {/* Viewport Selectors */}
        <div className="flex items-center bg-[#111827] p-1 rounded border border-gray-700 gap-1">
          <button
            onClick={() => setViewport('desktop')}
            title="Desktop 1440px"
            className={`p-1.5 rounded transition-colors cursor-pointer ${
              viewport === 'desktop' ? 'bg-[#2563eb] text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewport('tablet')}
            title="Tablet 768px"
            className={`p-1.5 rounded transition-colors cursor-pointer ${
              viewport === 'tablet' ? 'bg-[#2563eb] text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewport('mobile')}
            title="Mobile 375px"
            className={`p-1.5 rounded transition-colors cursor-pointer ${
              viewport === 'mobile' ? 'bg-[#2563eb] text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={resetSectionsToDefault}
            className="px-3 py-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset Defaults</span>
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-3 py-1.5 text-xs text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 rounded flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Preview Live</span>
          </button>
          <button
            onClick={handleSave}
            className={`px-4 py-1.5 text-xs font-semibold rounded flex items-center gap-1.5 cursor-pointer transition-colors ${
              isSaved ? 'bg-emerald-600 text-white' : 'bg-[#2563eb] text-white hover:bg-blue-600'
            }`}
          >
            {isSaved ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
            <span>{isSaved ? 'Published!' : 'Save & Publish'}</span>
          </button>
        </div>
      </header>

      {/* Editor Body: 3-column Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT SIDEBAR: Page Structure & Sections Hierarchy */}
        <aside className="w-72 bg-[#1f2937] border-r border-gray-700 flex flex-col shrink-0">
          <div className="p-3 border-b border-gray-700 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Page Sections ({sections.length})
            </span>
            <div className="relative group">
              <button
                className="px-2 py-1 text-[11px] bg-[#2563eb] text-white rounded flex items-center gap-1 font-semibold cursor-pointer hover:bg-blue-600"
              >
                <Plus className="w-3 h-3" />
                <span>Add</span>
              </button>
              <div className="absolute left-0 mt-1 w-44 bg-[#111827] border border-gray-700 rounded shadow-xl py-1 hidden group-hover:block z-50 text-xs">
                <button
                  onClick={() => addSection('custom_text')}
                  className="w-full text-left px-3 py-1.5 hover:bg-gray-800 text-gray-300 cursor-pointer"
                >
                  + Custom Text / Callout
                </button>
                <button
                  onClick={() => addSection('approach')}
                  className="w-full text-left px-3 py-1.5 hover:bg-gray-800 text-gray-300 cursor-pointer"
                >
                  + Approach Block
                </button>
                <button
                  onClick={() => addSection('why_us')}
                  className="w-full text-left px-3 py-1.5 hover:bg-gray-800 text-gray-300 cursor-pointer"
                >
                  + Why Us Section
                </button>
                <button
                  onClick={() => addSection('contact_cta')}
                  className="w-full text-left px-3 py-1.5 hover:bg-gray-800 text-gray-300 cursor-pointer"
                >
                  + Contact CTA Banner
                </button>
              </div>
            </div>
          </div>

          {/* Section List with Ordering & Visibility Controls */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
            {sections.map((section, idx) => {
              const isSelected = section.id === selectedSectionId;
              return (
                <div
                  key={section.id}
                  onClick={() => setSelectedSectionId(section.id)}
                  className={`p-2.5 rounded border text-xs cursor-pointer transition-all flex items-center justify-between gap-2 ${
                    isSelected 
                      ? 'bg-[#111827] border-[#2563eb] text-white shadow-xs' 
                      : 'bg-[#1f2937] border-gray-700/60 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-mono text-[10px] text-gray-500 shrink-0">
                      0{idx + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold capitalize truncate">
                        {section.section_type.replace('_', ' ')}
                      </p>
                      <p className="text-[10px] text-gray-400 truncate">
                        {section.config.headline || 'Untitled Section'}
                      </p>
                    </div>
                  </div>

                  {/* Micro Actions */}
                  <div className="flex items-center gap-0.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => toggleSectionVisibility(section.id)}
                      className="p-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
                      title={section.is_visible ? 'Hide section' : 'Show section'}
                    >
                      {section.is_visible ? <Eye className="w-3 h-3 text-emerald-400" /> : <EyeOff className="w-3 h-3 text-gray-600" />}
                    </button>
                    <button
                      onClick={() => handleMoveUp(idx)}
                      disabled={idx === 0}
                      className="p-1 text-gray-400 hover:text-white disabled:opacity-20 cursor-pointer"
                      title="Move Up"
                    >
                      <ArrowUp className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleMoveDown(idx)}
                      disabled={idx === sections.length - 1}
                      className="p-1 text-gray-400 hover:text-white disabled:opacity-20 cursor-pointer"
                      title="Move Down"
                    >
                      <ArrowDown className="w-3 h-3" />
                    </button>
                    {sections.length > 1 && (
                      <button
                        onClick={() => deleteSection(section.id)}
                        className="p-1 text-red-400 hover:text-red-300 cursor-pointer"
                        title="Delete Section"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3 border-t border-gray-700 text-[11px] text-gray-400 text-center">
            Click any section above to select and edit its parameters in the right panel.
          </div>
        </aside>

        {/* CENTRAL CANVAS: Visual Website Preview */}
        <main className="flex-1 bg-[#0f172a] p-4 overflow-y-auto flex justify-center items-start">
          <div
            className={`transition-all duration-300 bg-[#faf9f5] text-[#0b132b] shadow-2xl rounded-sm overflow-hidden my-4 border border-gray-700 min-h-[900px] ${
              viewport === 'desktop' ? 'w-full max-w-[1280px]' : viewport === 'tablet' ? 'w-[768px]' : 'w-[375px]'
            }`}
          >
            {/* Visual Canvas Top Nav Indicator */}
            <div className="bg-[#faf9f5] border-b border-[#0b132b]/8 px-6 py-4 flex items-center justify-between text-xs">
              <span className="font-extrabold tracking-tight text-sm text-[#0b132b]">
                JET<span className="font-light text-[#2563eb]">lancer</span>
              </span>
              <div className="flex items-center gap-4 text-[#0b132b]/70 font-medium text-[11px]">
                <span>Services</span>
                <span>Portfolio</span>
                <span>Process</span>
                <span>Contact</span>
              </div>
            </div>

            {/* Rendered Live Sections on Canvas */}
            <div className="space-y-0">
              {sections.map((section, idx) => {
                if (!section.is_visible) return null;
                const isSelected = section.id === selectedSectionId;

                return (
                  <div
                    key={section.id}
                    onClick={() => setSelectedSectionId(section.id)}
                    className={`relative transition-all cursor-pointer group ${
                      isSelected ? 'ring-2 ring-[#2563eb] ring-offset-2 ring-offset-black/50' : 'hover:ring-1 hover:ring-[#2563eb]/40'
                    }`}
                  >
                    {/* Selected Badge */}
                    {isSelected && (
                      <div className="absolute top-2 left-2 z-20 bg-[#2563eb] text-white px-2 py-0.5 rounded text-[10px] font-mono flex items-center gap-1 shadow-sm">
                        <span>Selected: {section.section_type}</span>
                      </div>
                    )}

                    {/* Section Renderers based on section_type */}
                    {section.section_type === 'hero' && (
                      <section className={`px-6 py-16 ${section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                          <div className="space-y-4">
                            <span className="text-xs font-mono text-[#2563eb] uppercase tracking-wide">
                              Creative Digital Technology Studio
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0b132b] leading-[1.15]">
                              {section.config.headline}
                            </h2>
                            <p className="text-sm text-[#0b132b]/70 leading-relaxed">
                              {section.config.subheadline}
                            </p>
                            <div className="pt-2 flex flex-wrap gap-3">
                              <span className="px-4 py-2 bg-[#0b132b] text-white text-xs font-semibold rounded inline-block">
                                {section.config.primary_cta_label || 'Start a Project'}
                              </span>
                              <span className="px-4 py-2 bg-white text-[#0b132b] border border-[#0b132b]/15 text-xs font-semibold rounded inline-block">
                                {section.config.secondary_cta_label || 'Explore Work'}
                              </span>
                            </div>
                          </div>
                          <div>
                            {section.config.image_url ? (
                              <img
                                src={section.config.image_url}
                                alt="Studio Hero"
                                className="w-full h-64 object-cover rounded border border-[#0b132b]/10 shadow-sm"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className="w-full h-64 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-500">
                                No Image Selected
                              </div>
                            )}
                          </div>
                        </div>
                      </section>
                    )}

                    {section.section_type === 'services' && (
                      <section className={`px-6 py-16 border-t border-[#0b132b]/8 ${section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'}`}>
                        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                          <h2 className="text-2xl font-bold text-[#0b132b]">{section.config.headline}</h2>
                          <p className="text-xs text-[#0b132b]/70">{section.config.subheadline}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {services.slice(0, section.config.display_count || 6).map((srv) => (
                            <div key={srv.id} className="p-4 bg-white rounded border border-[#0b132b]/8 text-xs space-y-1">
                              <span className="font-mono text-[10px] text-[#2563eb]">Cat {srv.category_code} · #{srv.service_number}</span>
                              <h3 className="font-bold text-[#0b132b]">{srv.title}</h3>
                              <p className="text-[#0b132b]/60 line-clamp-2">{srv.short_description}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {section.section_type === 'featured_work' && (
                      <section className={`px-6 py-16 border-t border-[#0b132b]/8 ${section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'}`}>
                        <div className="flex items-center justify-between mb-8">
                          <div>
                            <h2 className="text-2xl font-bold text-[#0b132b]">{section.config.headline}</h2>
                            <p className="text-xs text-[#0b132b]/70">{section.config.subheadline}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {projects.slice(0, section.config.display_count || 3).map((proj) => (
                            <div key={proj.id} className="bg-white rounded border border-[#0b132b]/8 overflow-hidden text-xs">
                              <img src={proj.cover_image} alt={proj.title} className="w-full h-32 object-cover" referrerPolicy="no-referrer" />
                              <div className="p-3 space-y-1">
                                <span className="text-[10px] text-[#2563eb] font-mono">{proj.category}</span>
                                <h3 className="font-bold text-[#0b132b] truncate">{proj.title}</h3>
                                <p className="text-[#0b132b]/60 text-[11px] line-clamp-2">{proj.summary}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {section.section_type === 'approach' && (
                      <section className={`px-6 py-16 border-t border-[#0b132b]/8 ${section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'}`}>
                        <div className="max-w-2xl mb-8 space-y-2">
                          <h2 className="text-2xl font-bold text-[#0b132b]">{section.config.headline}</h2>
                          <p className="text-xs text-[#0b132b]/70">{section.config.subheadline}</p>
                          {section.config.body_text && (
                            <p className="text-xs text-[#0b132b]/80 leading-relaxed pt-1">{section.config.body_text}</p>
                          )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {(section.config.items || []).map((item, i) => (
                            <div key={i} className="p-4 bg-white rounded border border-[#0b132b]/8 text-xs space-y-1">
                              <h3 className="font-bold text-[#0b132b]">{item.title}</h3>
                              <p className="text-[#0b132b]/60 leading-relaxed">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {section.section_type === 'why_us' && (
                      <section className={`px-6 py-16 border-t border-[#0b132b]/8 ${section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'}`}>
                        <div className="max-w-2xl mb-8 space-y-2">
                          <h2 className="text-2xl font-bold text-[#0b132b]">{section.config.headline}</h2>
                          <p className="text-xs text-[#0b132b]/70 font-medium text-[#2563eb]">{section.config.subheadline}</p>
                          {section.config.body_text && (
                            <p className="text-xs text-[#0b132b]/80 leading-relaxed pt-1">{section.config.body_text}</p>
                          )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {(section.config.items || []).map((item, i) => (
                            <div key={i} className="p-4 bg-white rounded border border-[#0b132b]/8 text-xs space-y-1">
                              <h3 className="font-bold text-[#0b132b]">{item.title}</h3>
                              <p className="text-[#0b132b]/60 leading-relaxed">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {section.section_type === 'contact_cta' && (
                      <section className="px-6 py-14 bg-[#0b132b] text-white text-center space-y-3">
                        <h2 className="text-2xl font-bold">{section.config.headline}</h2>
                        <p className="text-xs text-white/70 max-w-md mx-auto">{section.config.subheadline}</p>
                        <div className="pt-2">
                          <span className="px-4 py-2 bg-[#2563eb] text-white text-xs font-semibold rounded inline-block">
                            {section.config.primary_cta_label || 'Start a Project'}
                          </span>
                        </div>
                      </section>
                    )}

                    {section.section_type === 'custom_text' && (
                      <section className={`px-6 py-12 border-t border-[#0b132b]/8 ${section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'}`}>
                        <h2 className="text-xl font-bold text-[#0b132b] mb-2">{section.config.headline}</h2>
                        <p className="text-xs text-[#0b132b]/70 mb-3">{section.config.subheadline}</p>
                        <p className="text-xs text-[#0b132b]/80 leading-relaxed max-w-2xl">{section.config.body_text}</p>
                      </section>
                    )}

                    {section.section_type === 'faq' && (
                      <section className={`px-6 py-14 border-t border-[#0b132b]/8 ${section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'}`}>
                        <div className="max-w-xl mx-auto text-center mb-8 space-y-1">
                          <h2 className="text-2xl font-bold text-[#0b132b]">{section.config.headline}</h2>
                          <p className="text-xs text-[#0b132b]/70">{section.config.subheadline}</p>
                        </div>
                        <div className="max-w-2xl mx-auto space-y-3">
                          {(section.config.items || []).slice(0, 3).map((item, idx) => (
                            <div key={idx} className="p-3 bg-white border border-[#0b132b]/8 rounded text-xs space-y-1">
                              <h3 className="font-bold text-[#0b132b]">{item.title}</h3>
                              <p className="text-[#0b132b]/70">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {section.section_type === 'process' && (
                      <section className={`px-6 py-14 border-t border-[#0b132b]/8 ${section.config.background_style === 'white' ? 'bg-white' : 'bg-[#faf9f5]'}`}>
                        <div className="max-w-xl mb-6 space-y-1">
                          <h2 className="text-2xl font-bold text-[#0b132b]">{section.config.headline}</h2>
                          <p className="text-xs text-[#0b132b]/70">{section.config.subheadline}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {(section.config.items || []).map((step, idx) => (
                            <div key={idx} className="p-3 bg-white border border-[#0b132b]/8 rounded text-xs space-y-1">
                              <h3 className="font-bold text-[#0b132b]">{step.title}</h3>
                              <p className="text-[#0b132b]/60 text-[11px]">{step.description}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer mockup */}
            <div className="bg-white border-t border-[#0b132b]/8 p-6 text-center text-xs text-[#0b132b]/50">
              JET lancer · Smart Digital Solutions. Human Touch. Professional Results.
            </div>
          </div>
        </main>

        {/* RIGHT SIDEBAR: Live Property Inspector */}
        <aside className="w-80 bg-[#1f2937] border-l border-gray-700 flex flex-col shrink-0">
          <div className="p-3 border-b border-gray-700 flex items-center gap-2">
            <SettingsIcon className="w-4 h-4 text-[#2563eb]" />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Section Properties
            </span>
          </div>

          {selectedSection ? (
            <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs text-gray-300">
              
              {/* Section Header Metadata */}
              <div className="p-3 bg-[#111827] rounded border border-gray-700">
                <span className="text-[10px] font-mono text-gray-400 block mb-0.5">TYPE: {selectedSection.section_type.toUpperCase()}</span>
                <span className="text-[10px] font-mono text-[#2563eb] block">ID: {selectedSection.id}</span>
              </div>

              {/* Headline */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-gray-300">Section Headline</label>
                <input
                  type="text"
                  value={selectedSection.config.headline || ''}
                  onChange={(e) => updateSectionConfig(selectedSection.id, { headline: e.target.value })}
                  className="w-full bg-[#111827] border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-[#2563eb]"
                />
              </div>

              {/* Subheadline */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-gray-300">Subheadline / Supporting Copy</label>
                <textarea
                  rows={3}
                  value={selectedSection.config.subheadline || ''}
                  onChange={(e) => updateSectionConfig(selectedSection.id, { subheadline: e.target.value })}
                  className="w-full bg-[#111827] border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-[#2563eb]"
                />
              </div>

              {/* Body Text (if applicable) */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-gray-300">Body Paragraph</label>
                <textarea
                  rows={4}
                  value={selectedSection.config.body_text || ''}
                  onChange={(e) => updateSectionConfig(selectedSection.id, { body_text: e.target.value })}
                  placeholder="Optional explanatory body text..."
                  className="w-full bg-[#111827] border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-[#2563eb]"
                />
              </div>

              {/* Primary CTA */}
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-gray-300">CTA Label</label>
                  <input
                    type="text"
                    value={selectedSection.config.primary_cta_label || ''}
                    onChange={(e) => updateSectionConfig(selectedSection.id, { primary_cta_label: e.target.value })}
                    className="w-full bg-[#111827] border border-gray-700 rounded px-2.5 py-1.5 text-white text-[11px]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-gray-300">CTA Destination</label>
                  <input
                    type="text"
                    value={selectedSection.config.primary_cta_link || ''}
                    onChange={(e) => updateSectionConfig(selectedSection.id, { primary_cta_link: e.target.value })}
                    className="w-full bg-[#111827] border border-gray-700 rounded px-2.5 py-1.5 text-white text-[11px]"
                  />
                </div>
              </div>

              {/* Background Theme Style */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-gray-300">Background Tone</label>
                <select
                  value={selectedSection.config.background_style || 'ivory'}
                  onChange={(e) => updateSectionConfig(selectedSection.id, { background_style: e.target.value as any })}
                  className="w-full bg-[#111827] border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-[#2563eb]"
                >
                  <option value="ivory">Warm Ivory Paper (#FAF9F5)</option>
                  <option value="white">Pure White (#FFFFFF)</option>
                  <option value="dark_navy">Deep Slate Navy (#0B132B)</option>
                </select>
              </div>

              {/* Image Picker */}
              <div className="space-y-2 pt-2 border-t border-gray-700">
                <label className="text-[11px] font-semibold text-gray-300 flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-[#2563eb]" />
                  Section Image / Asset
                </label>
                <input
                  type="text"
                  value={selectedSection.config.image_url || ''}
                  onChange={(e) => updateSectionConfig(selectedSection.id, { image_url: e.target.value })}
                  placeholder="URL or asset path..."
                  className="w-full bg-[#111827] border border-gray-700 rounded px-3 py-1.5 text-white text-[11px]"
                />
                
                {/* Fast Preset Asset Picker */}
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] text-gray-400">Quick Pick from Studio Media:</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {mediaLibrary.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => updateSectionConfig(selectedSection.id, { image_url: item.url })}
                        className="text-left p-1.5 bg-[#111827] border border-gray-700 hover:border-[#2563eb] rounded text-[10px] truncate cursor-pointer"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="flex-1 p-6 text-center text-gray-500 text-xs">
              Select a section to inspect and edit its properties.
            </div>
          )}

          <div className="p-3 border-t border-gray-700">
            <button
              onClick={handleSave}
              className="w-full py-2 bg-[#2563eb] hover:bg-blue-600 text-white rounded text-xs font-semibold cursor-pointer transition-colors"
            >
              Save Section Updates
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
};
