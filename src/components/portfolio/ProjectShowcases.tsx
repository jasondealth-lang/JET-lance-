import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  MessageSquare, 
  CheckCircle, 
  Layers, 
  Sliders, 
  Send,
  Eye,
  Film
} from 'lucide-react';

// 1. JET LANCER AGENCY DESIGN SYSTEM SHOWCASE
export const AgencyDesignShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'typography' | 'viewports'>('tokens');

  return (
    <div className="bg-white border border-[#0b132b]/10 rounded-lg p-6 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#0b132b]/8 gap-3">
        <div>
          <h4 className="text-base font-bold text-[#0b132b]">Interactive Design System Inspector</h4>
          <p className="text-xs text-[#0b132b]/60">Explore the foundational tokens, type scales, and layout rules governing JET lancer.</p>
        </div>
        <div className="flex items-center gap-1 p-1 bg-[#faf9f5] border border-[#0b132b]/8 rounded text-xs font-medium">
          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-3 py-1 rounded transition-colors cursor-pointer ${
              activeTab === 'tokens' ? 'bg-white shadow-xs text-[#0b132b] font-semibold' : 'text-[#0b132b]/60 hover:text-[#0b132b]'
            }`}
          >
            Color Distribution
          </button>
          <button
            onClick={() => setActiveTab('typography')}
            className={`px-3 py-1 rounded transition-colors cursor-pointer ${
              activeTab === 'typography' ? 'bg-white shadow-xs text-[#0b132b] font-semibold' : 'text-[#0b132b]/60 hover:text-[#0b132b]'
            }`}
          >
            Typographic Scale
          </button>
          <button
            onClick={() => setActiveTab('viewports')}
            className={`px-3 py-1 rounded transition-colors cursor-pointer ${
              activeTab === 'viewports' ? 'bg-white shadow-xs text-[#0b132b] font-semibold' : 'text-[#0b132b]/60 hover:text-[#0b132b]'
            }`}
          >
            Breakpoints
          </button>
        </div>
      </div>

      {activeTab === 'tokens' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded border border-[#0b132b]/8 bg-[#faf9f5]">
              <span className="text-[11px] font-mono text-[#0b132b]/50">60% Primary Canvas</span>
              <div className="h-10 my-2 rounded bg-[#faf9f5] border border-[#0b132b]/10 flex items-center px-3 text-xs font-mono">
                #FAF9F5 Warm Ivory
              </div>
              <p className="text-xs text-[#0b132b]/70">Paper-like, non-glaring background providing warmth and human craft.</p>
            </div>
            <div className="p-4 rounded border border-[#0b132b]/8 bg-white">
              <span className="text-[11px] font-mono text-[#0b132b]/50">30% Structural Typo & Surfaces</span>
              <div className="h-10 my-2 rounded bg-[#0b132b] text-white flex items-center px-3 text-xs font-mono">
                #0B132B Deep Navy
              </div>
              <p className="text-xs text-[#0b132b]/70">High-contrast, authoritative dark slate navy for crisp text readability.</p>
            </div>
            <div className="p-4 rounded border border-[#0b132b]/8 bg-white">
              <span className="text-[11px] font-mono text-[#0b132b]/50">10% Focused Action Accent</span>
              <div className="h-10 my-2 rounded bg-[#2563eb] text-white flex items-center px-3 text-xs font-mono">
                #2563EB Electric Cobalt
              </div>
              <p className="text-xs text-[#0b132b]/70">Concentrated strictly at interactive buttons, active links, and focus rings.</p>
            </div>
          </div>
          <div className="p-4 bg-[#faf9f5] rounded border border-[#0b132b]/8 text-xs text-[#0b132b]/70 leading-relaxed">
            <strong className="text-[#0b132b] block mb-1">Zero-Pill Architecture Rule</strong>
            Metadata is displayed as clean unboxed text with typographic separators (·) rather than rounded pill capsules or glowing cards.
          </div>
        </div>
      )}

      {activeTab === 'typography' && (
        <div className="space-y-4">
          <div className="p-4 bg-[#faf9f5] rounded border border-[#0b132b]/8 space-y-3">
            <div>
              <span className="text-[10px] font-mono text-[#0b132b]/50">Display Hero (Plus Jakarta Sans 800)</span>
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0b132b] mt-1">
                Smart Digital Solutions. Human Touch.
              </p>
            </div>
            <div className="pt-2 border-t border-[#0b132b]/8">
              <span className="text-[10px] font-mono text-[#0b132b]/50">Section Title (Plus Jakarta Sans 700)</span>
              <p className="text-xl font-bold text-[#0b132b] mt-0.5">
                Full-Spectrum Digital Capabilities
              </p>
            </div>
            <div className="pt-2 border-t border-[#0b132b]/8">
              <span className="text-[10px] font-mono text-[#0b132b]/50">Body Prose (Plus Jakarta Sans 400 - 16px / 1.6)</span>
              <p className="text-sm text-[#0b132b]/80 leading-relaxed mt-0.5 max-w-2xl">
                We combine AI-assisted workflows with disciplined human engineering, delivering web applications and automated systems that endure.
              </p>
            </div>
            <div className="pt-2 border-t border-[#0b132b]/8">
              <span className="text-[10px] font-mono text-[#0b132b]/50">Data & Code (JetBrains Mono tabular-nums)</span>
              <p className="font-mono text-xs text-[#2563eb] tabular-nums mt-0.5">
                Latency: 18ms · 84 Services Cataloged · 99.98% Core Uptime
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'viewports' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded border border-[#0b132b]/8 bg-[#faf9f5]">
            <h5 className="font-bold text-[#0b132b] mb-1">Desktop Baseline (1440px)</h5>
            <p className="text-[#0b132b]/70 mb-2">Max content container 1280px with 32px outer gutters. Two-column editorial balance with zero clipped hero headlines.</p>
            <span className="font-mono text-[10px] text-[#2563eb]">lg:max-w-7xl lg:px-8</span>
          </div>
          <div className="p-4 rounded border border-[#0b132b]/8 bg-[#faf9f5]">
            <h5 className="font-bold text-[#0b132b] mb-1">Tablet Ergonomics (768px)</h5>
            <p className="text-[#0b132b]/70 mb-2">Single-column stack with auto-collapsing secondary metrics. Sticky header capped at 12% viewport height.</p>
            <span className="font-mono text-[10px] text-[#2563eb]">md:px-6 md:grid-cols-2</span>
          </div>
          <div className="p-4 rounded border border-[#0b132b]/8 bg-[#faf9f5]">
            <h5 className="font-bold text-[#0b132b] mb-1">Mobile Presence (375px)</h5>
            <p className="text-[#0b132b]/70 mb-2">Touch targets ≥44px. Full-bleed cards with 16px padding. Simplified navigation drawer with fast tap responses.</p>
            <span className="font-mono text-[10px] text-[#2563eb]">px-4 py-3 min-h-[44px]</span>
          </div>
        </div>
      )}
    </div>
  );
};

// 2. NORTHSTAR CREATIVE LANDING PREVIEW
export const NorthstarLandingShowcase: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  const phases = [
    {
      num: 1,
      title: 'Proposition Stage',
      desc: 'High-impact editorial proposition with strong headline balance: "Design Direction for Industry Monoliths."',
      kpi: '2.4s Average Dwell Time'
    },
    {
      num: 2,
      title: 'Mechanism & Capabilities',
      desc: 'Asymmetric bento grid separating identity engineering, packaging design, and digital exhibition spaces.',
      kpi: '74% Scroll Depth'
    },
    {
      num: 3,
      title: 'Proof & Monograph Evidence',
      desc: 'Curated gallery cards presenting physical monographs and exhibitions with zero fake awards.',
      kpi: '3.8x More Case Views'
    },
    {
      num: 4,
      title: 'Conversion Funnel',
      desc: 'Three-field qualification form collecting project scope, proposed timeline, and budget band.',
      kpi: '14.2% Form Completion'
    }
  ];

  return (
    <div className="bg-[#faf9f5] border border-[#0b132b]/10 rounded-lg p-6 my-8">
      <div className="mb-4">
        <h4 className="text-base font-bold text-[#0b132b]">Northstar Conversion Architecture Simulation</h4>
        <p className="text-xs text-[#0b132b]/60">Inspect how Northstar Creative sequences proposition, proof, and qualification.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mb-6">
        {phases.map((p) => (
          <button
            key={p.num}
            onClick={() => setSelectedPhase(p.num)}
            className={`p-3 text-left rounded border transition-all cursor-pointer ${
              selectedPhase === p.num
                ? 'bg-white border-[#2563eb] shadow-xs'
                : 'bg-white/60 border-[#0b132b]/8 hover:border-[#0b132b]/20'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[11px] text-[#2563eb]">Stage 0{p.num}</span>
              {selectedPhase === p.num && <span className="text-[10px] bg-[#2563eb]/10 text-[#2563eb] px-1.5 py-0.5 rounded font-mono">Active</span>}
            </div>
            <h5 className="font-semibold text-xs text-[#0b132b] mb-1">{p.title}</h5>
            <p className="text-[11px] text-[#0b132b]/60 line-clamp-2">{p.desc}</p>
          </button>
        ))}
      </div>

      <div className="p-5 bg-white border border-[#0b132b]/10 rounded">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#0b132b]/8 text-xs">
          <span className="font-bold text-[#0b132b]">Stage {selectedPhase} Technical Blueprint</span>
          <span className="font-mono text-[#2563eb] text-[11px]">{phases[selectedPhase - 1].kpi}</span>
        </div>
        <p className="text-xs text-[#0b132b]/80 leading-relaxed mb-4">
          {phases[selectedPhase - 1].desc}
        </p>
        <div className="p-3 bg-[#faf9f5] rounded border border-[#0b132b]/6 text-[11px] text-[#0b132b]/70 font-mono">
          &lt;NorthstarSection phase="{phases[selectedPhase - 1].title.toLowerCase().replace(/\s+/g, '-')}" layout="asymmetric-grid" /&gt;
        </div>
      </div>
    </div>
  );
};

// 3. AI VIDEO CAMPAIGN STORYBOARD
export const VideoStoryboardShowcase: React.FC = () => {
  const [activeFrame, setActiveFrame] = useState(0);

  const frames = [
    {
      scene: 'Scene 01: Dawn Ascent',
      timecode: '00:00 - 00:04',
      lens: '35mm Anamorphic T1.8',
      lighting: 'Cool blue hour 4500K with alpine rim glow',
      promptSpec: 'Wide panoramic tracking shot of mist rising over snow-capped peaks, lone modern glass pavilion emerging from ridge.',
      audio: 'Subtle low frequency synthesizer drone, mountain wind foley fading slowly.'
    },
    {
      scene: 'Scene 02: Glass Pavilion Interior',
      timecode: '00:04 - 00:09',
      lens: '50mm Prime T1.4',
      lighting: 'Warm 2800K directional floor illumination against cold exterior',
      promptSpec: 'Slow dolly-in through double-height glass framing minimalist blonde wood table and glowing linear pendant.',
      audio: 'Soft acoustic piano chord progression, footsteps on polished stone.'
    },
    {
      scene: 'Scene 03: Twilight Gathering',
      timecode: '00:09 - 00:15',
      lens: '85mm Portrait T2.0',
      lighting: 'Golden hour ember ambient, soft specular highlights on glassware',
      promptSpec: 'Medium profile framing silhouettes in conversation against vast panoramic sunset over cloud sea.',
      audio: 'Muffled laughter, ambient glass clink, strings swelling in resonance.'
    },
    {
      scene: 'Scene 04: Alpine Nocturne Lockup',
      timecode: '00:15 - 00:20',
      lens: '24mm Ultra-Wide',
      lighting: 'Starlight night sky with pavilion casting geometric amber light onto granite cliff',
      promptSpec: 'Extreme wide aerial pull-back, pavilion glowing like an architectural lantern in vast wilderness.',
      audio: 'Final sustained cello note, title card dissolve, quiet mountain silence.'
    }
  ];

  return (
    <div className="bg-white border border-[#0b132b]/10 rounded-lg p-6 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#0b132b]/8 gap-3">
        <div>
          <h4 className="text-base font-bold text-[#0b132b]">Alpine Sanctuary: 4-Frame Key Storyboard</h4>
          <p className="text-xs text-[#0b132b]/60">Time-coded generative frames, camera specifications, and audio cue breakdown.</p>
        </div>
        <div className="flex items-center gap-1">
          {frames.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFrame(idx)}
              className={`w-8 h-8 rounded text-xs font-mono font-semibold transition-colors cursor-pointer ${
                activeFrame === idx ? 'bg-[#0b132b] text-white' : 'bg-[#faf9f5] text-[#0b132b]/60 hover:bg-[#0b132b]/10'
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="relative rounded overflow-hidden border border-[#0b132b]/10 bg-black aspect-video flex items-center justify-center">
            <img
              src="/src/assets/images/project_ai_video_campaign_1792203369949.jpg"
              alt={frames[activeFrame].scene}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#0b132b]/80 backdrop-blur-xs text-white px-2.5 py-1 rounded text-[11px] font-mono">
              {frames[activeFrame].scene}
            </div>
            <div className="absolute bottom-3 right-3 bg-[#0b132b]/80 backdrop-blur-xs text-[#2563eb] px-2.5 py-1 rounded text-[11px] font-mono">
              {frames[activeFrame].timecode}
            </div>
          </div>
          <div className="p-3 bg-[#faf9f5] border border-[#0b132b]/8 rounded text-xs">
            <span className="font-bold text-[#0b132b] block mb-1">Generative Prompt Seed Spec:</span>
            <p className="text-[#0b132b]/70 font-mono text-[11px] leading-relaxed">
              "{frames[activeFrame].promptSpec}"
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-[#faf9f5] border border-[#0b132b]/8 rounded space-y-3 text-xs">
            <div>
              <span className="text-[10px] font-mono text-[#0b132b]/50 uppercase tracking-wide">Optical Specification</span>
              <p className="font-semibold text-[#0b132b] mt-0.5">{frames[activeFrame].lens}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#0b132b]/50 uppercase tracking-wide">Color & Illumination</span>
              <p className="text-[#0b132b]/80 mt-0.5">{frames[activeFrame].lighting}</p>
            </div>
            <div className="pt-2 border-t border-[#0b132b]/8">
              <span className="text-[10px] font-mono text-[#0b132b]/50 uppercase tracking-wide">Audio Cue Direction</span>
              <p className="text-[#0b132b]/80 mt-0.5 italic">{frames[activeFrame].audio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. CONTENT TO VIDEO AUTOMATION PIPELINE
export const AutomationPipelineShowcase: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    { title: '1. Ingestion', desc: 'Webhook reads markdown from technical publishing CMS', status: 'Completed' },
    { title: '2. NLP Parsing', desc: 'Core thesis extracted into 60s spoken hook with rhythm markers', status: 'In Progress' },
    { title: '3. Asset Synthesis', desc: 'Generates animated charts, code callouts & licensed B-roll', status: 'Pending' },
    { title: '4. Human Review', desc: 'Editorial gate for audio cadence and factual accuracy', status: 'Pending' },
    { title: '5. Master Render', desc: 'FFmpeg cloud worker compiles 1080x1920 video with captions', status: 'Pending' }
  ];

  return (
    <div className="bg-[#faf9f5] border border-[#0b132b]/10 rounded-lg p-6 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#0b132b]/8 gap-3">
        <div>
          <h4 className="text-base font-bold text-[#0b132b]">5-Stage Content Automation Pipeline</h4>
          <p className="text-xs text-[#0b132b]/60">Simulate execution from raw technical article to broadcast-ready video asset.</p>
        </div>
        <button
          onClick={() => setCurrentStep(prev => prev < 4 ? prev + 1 : 0)}
          className="px-3 py-1.5 bg-[#2563eb] text-white rounded text-xs font-semibold cursor-pointer hover:bg-[#1d4ed8] transition-colors"
        >
          Simulate Next Stage →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className={`p-3 rounded border text-xs transition-colors ${
              idx === currentStep
                ? 'bg-white border-[#2563eb] shadow-xs'
                : idx < currentStep
                ? 'bg-white/80 border-emerald-500/30'
                : 'bg-white/40 border-[#0b132b]/8 text-[#0b132b]/40'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[10px] text-[#2563eb]">Stage 0{idx + 1}</span>
              {idx < currentStep && <Check className="w-3.5 h-3.5 text-emerald-600" />}
            </div>
            <p className="font-bold text-[#0b132b] mb-1">{s.title}</p>
            <p className="text-[11px] text-[#0b132b]/60 line-clamp-3">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border border-[#0b132b]/8 rounded flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <Layers className="w-4 h-4 text-[#2563eb]" />
          <div>
            <span className="font-semibold text-[#0b132b]">Active Execution Engine: </span>
            <span className="text-[#0b132b]/70 font-mono">Node 20 Worker + Whisper + Gemini Flash</span>
          </div>
        </div>
        <span className="font-mono text-[#2563eb] text-[11px]">Turnaround: &lt; 90 seconds</span>
      </div>
    </div>
  );
};

// 5. AI CUSTOMER SUPPORT CONSOLE
export const SupportConsoleShowcase: React.FC = () => {
  const [selectedTicket, setSelectedTicket] = useState(0);
  const [agentResponse, setAgentResponse] = useState(
    "Hello David. I verified your enterprise deployment tier. The custom PostgreSQL RLS policies you configured require the role attribute on auth.users metadata. I've prepared a patch script you can apply directly."
  );
  const [isApproved, setIsApproved] = useState(false);

  const tickets = [
    {
      id: 'TCK-8821',
      customer: 'David Chen',
      company: 'Aether Cloud Ops',
      subject: 'RLS policy evaluation on custom roles',
      sentiment: 'Frustrated (-0.4)',
      urgency: 'High',
      suggestedAction: 'Send Verified RLS Patch & Invite Senior Engineer'
    },
    {
      id: 'TCK-8822',
      customer: 'Sarah Miller',
      company: 'Lumen Biotech',
      subject: 'API rate limits on document vectorization',
      sentiment: 'Neutral (0.1)',
      urgency: 'Medium',
      suggestedAction: 'Increase Burst Quota to 120 req/min'
    }
  ];

  return (
    <div className="bg-white border border-[#0b132b]/10 rounded-lg p-6 my-8">
      <div className="pb-4 mb-6 border-b border-[#0b132b]/8">
        <h4 className="text-base font-bold text-[#0b132b]">Human-in-the-Loop Support Console</h4>
        <p className="text-xs text-[#0b132b]/60">Inspect triage queue, AI draft suggestions, and one-click human verification.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ticket List */}
        <div className="space-y-3">
          <span className="text-[11px] font-mono text-[#0b132b]/50 uppercase">Triage Queue (2 Active)</span>
          {tickets.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTicket(idx);
                setIsApproved(false);
              }}
              className={`w-full text-left p-3 rounded border transition-colors cursor-pointer text-xs ${
                selectedTicket === idx ? 'bg-[#faf9f5] border-[#2563eb]' : 'border-[#0b132b]/8 hover:bg-[#faf9f5]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10px] text-[#2563eb]">{t.id}</span>
                <span className="text-[10px] text-red-600 font-medium">{t.urgency}</span>
              </div>
              <p className="font-bold text-[#0b132b] truncate">{t.customer} · {t.company}</p>
              <p className="text-[11px] text-[#0b132b]/60 truncate">{t.subject}</p>
            </button>
          ))}
        </div>

        {/* Workspace Response Area */}
        <div className="lg:col-span-2 space-y-4">
          <div className="p-4 bg-[#faf9f5] border border-[#0b132b]/8 rounded text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#0b132b]">{tickets[selectedTicket].customer}</span>
              <span className="font-mono text-[11px] text-[#0b132b]/60">Sentiment: {tickets[selectedTicket].sentiment}</span>
            </div>
            <p className="text-[#0b132b]/80">
              "We're seeing intermittent 403 errors when users with custom 'editor' roles attempt to view the draft sections in the preview workspace."
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#0b132b] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
                Ground-Verified AI Response Draft
              </span>
              <span className="text-[11px] text-[#0b132b]/50">Editable by human agent</span>
            </div>
            <textarea
              value={agentResponse}
              onChange={(e) => setAgentResponse(e.target.value)}
              rows={4}
              className="w-full text-xs p-3 rounded border border-[#0b132b]/15 bg-white text-[#0b132b] focus:outline-none focus:border-[#2563eb]"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[11px] text-slate-500 font-mono">
              Status: {isApproved ? 'Approved & Dispatched' : 'Awaiting Human Approval'}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsApproved(true)}
                className={`px-4 py-2 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isApproved ? 'bg-emerald-600 text-white' : 'bg-[#0b132b] text-white hover:bg-[#1d4ed8]'
                }`}
              >
                {isApproved ? <CheckCircle className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                <span>{isApproved ? 'Dispatched' : 'Approve & Send'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 6. HUMANIZED CONTENT REFINEMENT DIFF STUDIO
export const ContentRefinementDiffShowcase: React.FC = () => {
  const [viewMode, setViewMode] = useState<'side-by-side' | 'analysis'>('side-by-side');

  const rawAiDraft = `In today's fast-paced digital landscape, it is imperative to leverage the power of synergistic AI paradigms to supercharge your business outcomes. As a testament to modern technological tapestry, our bespoke solutions delve deep into the intricacies of your operational workflows, unlocking unprecedented efficiencies and seamlessly elevating your competitive edge.`;

  const refinedProse = `Modern software should solve concrete problems without getting in the way. We engineer custom automation pipelines and web applications that remove repetitive administrative work from your team's day, so you can ship better products on predictable schedules.`;

  return (
    <div className="bg-white border border-[#0b132b]/10 rounded-lg p-6 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#0b132b]/8 gap-3">
        <div>
          <h4 className="text-base font-bold text-[#0b132b]">Editorial Transformation Studio</h4>
          <p className="text-xs text-[#0b132b]/60">Compare robotic AI defaults with humanized, resonant editorial prose.</p>
        </div>
        <div className="flex items-center gap-1 p-1 bg-[#faf9f5] border border-[#0b132b]/8 rounded text-xs font-medium">
          <button
            onClick={() => setViewMode('side-by-side')}
            className={`px-3 py-1 rounded transition-colors cursor-pointer ${
              viewMode === 'side-by-side' ? 'bg-white shadow-xs text-[#0b132b] font-semibold' : 'text-[#0b132b]/60'
            }`}
          >
            Side-by-Side Diff
          </button>
          <button
            onClick={() => setViewMode('analysis')}
            className={`px-3 py-1 rounded transition-colors cursor-pointer ${
              viewMode === 'analysis' ? 'bg-white shadow-xs text-[#0b132b] font-semibold' : 'text-[#0b132b]/60'
            }`}
          >
            Editorial Rationale
          </button>
        </div>
      </div>

      {viewMode === 'side-by-side' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Raw AI Box */}
          <div className="p-4 bg-red-50/50 border border-red-200/60 rounded">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-red-900">Raw AI Draft (Robotic Default)</span>
              <span className="text-[10px] font-mono text-red-700 bg-red-100 px-2 py-0.5 rounded">High Cliché Density</span>
            </div>
            <p className="text-xs text-red-950 leading-relaxed font-serif">
              "{rawAiDraft}"
            </p>
            <div className="mt-4 pt-3 border-t border-red-200/50 text-[11px] text-red-700 space-y-1">
              <p>❌ Banned buzzwords: "delve", "testament", "tapestry", "supercharge", "seamlessly".</p>
              <p>❌ Monotone sentence structure and zero concrete claims.</p>
            </div>
          </div>

          {/* Refined Prose Box */}
          <div className="p-4 bg-emerald-50/50 border border-emerald-200/60 rounded">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-emerald-950">Refined JET lancer Prose (Humanized)</span>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">High Clarity & Cadence</span>
            </div>
            <p className="text-xs text-emerald-950 leading-relaxed font-sans font-medium">
              "{refinedProse}"
            </p>
            <div className="mt-4 pt-3 border-t border-emerald-200/50 text-[11px] text-emerald-800 space-y-1">
              <p>✓ Active verbs: "solve", "engineer", "remove", "ship".</p>
              <p>✓ Natural conversational cadence and concrete client benefit.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-[#faf9f5] border border-[#0b132b]/8 rounded">
            <h5 className="font-bold text-[#0b132b] mb-1">Cadence & Variety</h5>
            <p className="text-[#0b132b]/70">Sentence lengths vary naturally between 9 and 24 words, preventing monotonous rhythms.</p>
          </div>
          <div className="p-4 bg-[#faf9f5] border border-[#0b132b]/8 rounded">
            <h5 className="font-bold text-[#0b132b] mb-1">Sensory Verbs</h5>
            <p className="text-[#0b132b]/70">Replaced abstract nouns with actionable verbs describing tangible work.</p>
          </div>
          <div className="p-4 bg-[#faf9f5] border border-[#0b132b]/8 rounded">
            <h5 className="font-bold text-[#0b132b] mb-1">Audience Respect</h5>
            <p className="text-[#0b132b]/70">Never patronizes readers with inflated metaphors; states business terms plainly.</p>
          </div>
        </div>
      )}
    </div>
  );
};
