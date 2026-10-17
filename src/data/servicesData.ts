import { ServiceCategory, ServiceItem } from '../types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    code: 'A',
    name: 'AI and Automation',
    short_title: 'AI & Automation',
    description: 'Intelligent workflows, AI video generation, automated agents, knowledge assistants, and custom API pipelines.',
    count: 20
  },
  {
    code: 'B',
    name: 'Website Design and Development',
    short_title: 'Websites & Engineering',
    description: 'Bespoke business websites, responsive engineering, e-commerce, custom customer portals, and visual CMS architecture.',
    count: 20
  },
  {
    code: 'C',
    name: 'Content and Copywriting',
    short_title: 'Content & Copywriting',
    description: 'Humanized content refinement, website copywriting, brand storytelling, video scripts, and editorial review.',
    count: 20
  },
  {
    code: 'D',
    name: 'Video and Media',
    short_title: 'Video & Media Production',
    description: 'Short & long-form video workflows, explainer video production, storyboarding, subtitling, and media repurposing.',
    count: 12
  },
  {
    code: 'E',
    name: 'Digital Business Support',
    short_title: 'Digital Business Support',
    description: 'Inquiry automation, CRM integration, workflow documentation, knowledge bases, and content migration.',
    count: 12
  }
];

export const RAW_SERVICES_LIST: Array<{
  num: number;
  cat: 'A' | 'B' | 'C' | 'D' | 'E';
  title: string;
  shortDesc: string;
  problem: string;
  useCases: string[];
  deliverables: string[];
  process: string[];
  dependencies?: string;
  featured?: boolean;
}> = [
  // CATEGORY A: AI AND AUTOMATION (1-20)
  {
    num: 1, cat: 'A', title: 'AI Video Generation',
    shortDesc: 'Generative video creation from text briefs, scripts, and moodboards for marketing and visual storytelling.',
    problem: 'Traditional video production takes weeks and costs tens of thousands of dollars before concept testing can begin.',
    useCases: ['Concept mood reels for pitches', 'Product visualization loops', 'Social media teaser campaigns'],
    deliverables: ['Custom video generation prompts', 'Rendered video assets in 1080p/4K', 'Style transfer variations'],
    process: ['Visual Brief & Style Discovery', 'Seed-Locked Prompt Engineering', 'Test Render Generation', 'Resolution Upscaling & Color Finishing'],
    dependencies: 'Requires cloud rendering API credits (e.g., Runway, Luma, or Sora when available).',
    featured: true
  },
  {
    num: 2, cat: 'A', title: 'AI-Assisted Video Editing',
    shortDesc: 'Automated rough cuts, silence removal, multi-camera angle switching, and smart pacing adjustments.',
    problem: 'Post-production editors lose hours scrubbing timelines for dead air, stutters, and repetitive takes.',
    useCases: ['Webinar and podcast long-form cuts', 'Executive interview editing', 'Educational lesson prep'],
    deliverables: ['Exported Final Cut / Premiere Pro timeline project', 'Cleaned multi-track audio', 'Segmented chapter markers'],
    process: ['Media Ingestion & Audio Transcription', 'Algorithmic Silence & Filler Trimming', 'Human Editorial Review', 'Master Export'],
    dependencies: 'Requires compatible NLE software (Premiere / DaVinci) or cloud video API.'
  },
  {
    num: 3, cat: 'A', title: 'AI Video Automation',
    shortDesc: 'End-to-end programmatic video rendering pipeline triggered by webhook events or database updates.',
    problem: 'Creating personalized or high-frequency videos manually does not scale for growing product catalogs.',
    useCases: ['Dynamic e-commerce product videos', 'Personalized client milestone recaps', 'Daily real estate listings'],
    deliverables: ['Cloud worker rendering script', 'Dynamic template project file', 'Webhook trigger integration'],
    process: ['Template Canvas Design', 'Data Binding Schema Definition', 'Cloud Function Deployment', 'Output Quality Benchmarking'],
    dependencies: 'Requires Remotion / FFmpeg cloud worker environment and cloud storage.'
  },
  {
    num: 4, cat: 'A', title: 'Content-to-Video Workflows',
    shortDesc: 'Systematic pipeline converting technical blogs, press releases, or documentation into engaging short videos.',
    problem: 'Written content struggles to capture attention on fast-moving visual feeds like LinkedIn, YouTube, and Instagram.',
    useCases: ['Converting engineering blogs into explainer shorts', 'Repurposing annual reports into video summaries'],
    deliverables: ['Extracted 60-second video script', 'Storyboard asset bundle', 'Rendered vertical & horizontal video cut'],
    process: ['Core Insight Extraction', 'Script Cadence Refinement', 'Visual Asset Synthesis', 'Master Compilation'],
    dependencies: 'Requires TTS voice API (ElevenLabs or equivalent) and asset storage.'
  },
  {
    num: 5, cat: 'A', title: 'AI Workflow Automation',
    shortDesc: 'Connecting disparate SaaS tools and databases into cohesive, self-healing automated business pipelines.',
    problem: 'Teams waste 15+ hours weekly copying data between spreadsheets, email clients, CRM software, and Slack.',
    useCases: ['Automated inquiry qualification and routing', 'Cross-platform inventory reconciliation', 'Contract generation on form sign'],
    deliverables: ['Visual workflow architecture diagram', 'Configured Make / Zapier / n8n pipelines', 'Error-handling webhook listener'],
    process: ['Process Audit & Bottleneck Mapping', 'Pipeline Blueprint Architecture', 'Testing & Sandboxing', 'Production Deployment'],
    dependencies: 'Requires customer credentials on relevant business SaaS platforms.',
    featured: true
  },
  {
    num: 6, cat: 'A', title: 'AI Agent Development',
    shortDesc: 'Autonomous multi-step agents capable of researching, reasoning, calling tools, and returning verified outputs.',
    problem: 'Simple chatbots fail when tasks require reading documents, querying APIs, and executing multi-step logic.',
    useCases: ['Competitive intelligence summarizers', 'Regulatory document auditors', 'Automated code review assistants'],
    deliverables: ['Node.js / Python agent runtime module', 'Custom tool schemas & function definitions', 'Evaluation benchmark test suite'],
    process: ['Objective & Constraint Specification', 'Tool Calling Architecture', 'Evaluation & Safety Tuning', 'Production Integration'],
    dependencies: 'Requires LLM API access with function calling support (Gemini 2.5/Flash, Anthropic, or OpenAI).'
  },
  {
    num: 7, cat: 'A', title: 'AI Voice Agents',
    shortDesc: 'Ultra-low latency conversational voice agents for phone intake, appointment confirmation, and customer triage.',
    problem: 'Missed customer calls lead directly to lost business, while legacy phone trees annoy prospective clients.',
    useCases: ['After-hours clinic or agency call reception', 'Outbound appointment confirmation', 'Order status inquiries'],
    deliverables: ['Telephony SIP / Twilio trunk integration', 'Conversational prompt state machine', 'Call transcript analytics pipeline'],
    process: ['Voice Persona & Tone Definition', 'Speech-to-Text & TTS Latency Optimization', 'Edge Case Guardrails', 'Live Testing'],
    dependencies: 'Requires Twilio or SIP telephony provider and high-speed streaming voice engine.'
  },
  {
    num: 8, cat: 'A', title: 'AI Customer Support Agents',
    shortDesc: 'Human-in-the-loop support agents grounded in your official documentation and policy guidelines.',
    problem: 'Customer support teams are overwhelmed by routine inquiries, causing response delays for complex tier-2 tickets.',
    useCases: ['Tier-1 website support', 'Warranty policy lookups', 'Billing status questions'],
    deliverables: ['Knowledge base vector embeddings', 'Support desk widget / Slack integration', 'Agent handoff logic rules'],
    process: ['Documentation Ingestion & Chunking', 'Response Boundary Rules', 'Human Escalation Routing', 'Telemetry & Quality Tuning'],
    dependencies: 'Requires access to your company FAQs or Help Desk API (Zendesk / Freshdesk / Supabase).'
  },
  {
    num: 9, cat: 'A', title: 'AI Chatbots',
    shortDesc: 'Context-aware interactive conversational interfaces embedded seamlessly into your website or client portal.',
    problem: 'Generic off-the-shelf bots look clunky, hallucinate answers, and lack brand design cohesion.',
    useCases: ['Pre-sales advisory chat', 'Product finder guide', 'Internal employee handbook query'],
    deliverables: ['Embeddable React chat component', 'Serverless conversational endpoint', 'Admin chat history dashboard'],
    process: ['Interface UI/UX Matching', 'Knowledge Grounding Setup', 'Fallback State Design', 'Launch & Monitoring'],
    dependencies: 'Requires server endpoint or Cloud Function host for secure API key proxying.'
  },
  {
    num: 10, cat: 'A', title: 'Appointment-Booking Automation',
    shortDesc: 'Intelligent calendar scheduling workflows eliminating back-and-forth email exchanges.',
    problem: 'Prospects drop off during multi-day email chains trying to find an agreeable meeting window.',
    useCases: ['Consultation booking from landing pages', 'Client review meeting scheduling', 'Podcast guest coordination'],
    deliverables: ['Direct calendar API sync (Google / Outlook)', 'SMS/Email reminder triggers', 'Time-zone auto-conversion logic'],
    process: ['Calendar Availability Matrix Setup', 'Intake Form Integration', 'Reminder Automation Flow', 'No-Show Followup Rules'],
    dependencies: 'Requires Google Workspace or Microsoft 365 OAuth credentials.'
  },
  {
    num: 11, cat: 'A', title: 'Lead Qualification Workflows',
    shortDesc: 'Automated scoring, company enrichment, and priority routing of incoming website inquiries.',
    problem: 'Sales teams spend valuable hours filtering out spam and low-budget tire kickers.',
    useCases: ['High-ticket B2B inquiry triage', 'Agency service inquiry scoring', 'SaaS enterprise demo requests'],
    deliverables: ['Lead scoring algorithm', 'Clearbit / Apollo enrichment webhook', 'Instant Slack / CRM alert notification'],
    process: ['ICP (Ideal Customer Profile) Definition', 'Enrichment Pipeline Construction', 'Scoring Model Calibration', 'CRM Integration'],
    dependencies: 'Requires third-party data enrichment API if firmographic lookups are desired.'
  },
  {
    num: 12, cat: 'A', title: 'AI Knowledge Assistants',
    shortDesc: 'Internal enterprise knowledge bases allowing team members to query PDFs, contracts, and internal SOPs instantly.',
    problem: 'Employees lose up to 20% of their working hours searching for company knowledge buried across disparate drives.',
    useCases: ['SOP instant search for new hires', 'Contract compliance search', 'Technical design document lookup'],
    deliverables: ['Document indexing pipeline', 'Hybrid vector/keyword search engine', 'Internal search web app'],
    process: ['Document Corpus Audit', 'OCR & Chunking Strategy', 'Evaluation Benchmarks', 'Role-Based Access Enforcement'],
    dependencies: 'Requires vector database (pgvector in Supabase or Pinecone).'
  },
  {
    num: 13, cat: 'A', title: 'Prompt Engineering',
    shortDesc: 'Systematic development, testing, and optimization of production system prompts for mission-critical tasks.',
    problem: 'Ad-hoc prompts break unpredictably, produce inconsistent JSON, or fail to adhere to security constraints.',
    useCases: ['Structured JSON extraction', 'Strict tone-of-voice alignment', 'Prompt injection defense'],
    deliverables: ['Version-controlled prompt library', 'Few-shot example datasets', 'Edge-case test matrix'],
    process: ['Task Decomposition', 'System Prompt Drafting', 'Automated Eval Harness Execution', 'Output Schema Lockdown'],
    dependencies: 'Works with any major LLM provider SDK.'
  },
  {
    num: 14, cat: 'A', title: 'AI Research Workflows',
    shortDesc: 'Automated web synthesis and competitive intelligence gathering delivering structured synthesis briefs.',
    problem: 'Gathering competitor pricing, market trends, and industry developments consumes excessive research bandwidth.',
    useCases: ['Weekly industry landscape briefing', 'Competitor feature matrix tracking', 'Academic literature synthesis'],
    deliverables: ['Automated scraper & scraper guardrails', 'Synthesis summary template', 'Scheduled executive email digest'],
    process: ['Source Selection & Query Design', 'Information Extraction Pipeline', 'Verification & Citation Pass', 'Digest Formatting'],
    dependencies: 'Requires web search API (Google Custom Search or Perplexity API).'
  },
  {
    num: 15, cat: 'A', title: 'Business Process Automation',
    shortDesc: 'Holistic automation of internal operations combining database triggers, webhooks, and cloud workers.',
    problem: 'Disconnected legacy software forces staff into repetitive, error-prone manual data entry.',
    useCases: ['Employee onboarding checklist dispatch', 'Vendor invoice routing & payment prep', 'Monthly project archive workflows'],
    deliverables: ['End-to-end automation architecture', 'Fault-tolerant serverless functions', 'Operational monitoring dashboard'],
    process: ['Process Discovery & Value Matrix', 'Flow Architecture & Fallback Design', 'Staging Dry-Runs', 'Production Cutover'],
    dependencies: 'Requires access to underlying business database and cloud runtime.'
  },
  {
    num: 16, cat: 'A', title: 'Document Processing Automation',
    shortDesc: 'Automated extraction of tables, line items, and structured fields from unstructured PDF invoices and contracts.',
    problem: 'Manual invoice data entry leads to clerical errors, overdue payments, and costly administrative overhead.',
    useCases: ['Invoice ingestion to accounting ledger', 'Receipt parsing for expense approval', 'Lease agreement clause extraction'],
    deliverables: ['PDF parsing pipeline', 'Normalized JSON output schema', 'Audit trail for flagged variances'],
    process: ['Document Schema Definition', 'OCR & Layout Recognition Tuning', 'Variance & Confidence Thresholds', 'ERP / Accounting Export'],
    dependencies: 'Requires document extraction vision model or cloud document AI API.'
  },
  {
    num: 17, cat: 'A', title: 'Automated Reporting',
    shortDesc: 'Executive-ready performance summaries and weekly digest emails generated automatically from live database metrics.',
    problem: 'Marketing and operations managers waste every Friday compiling spreadsheets for Monday morning meetings.',
    useCases: ['Weekly client marketing performance reports', 'Monthly agency utilization digests', 'E-commerce sales summaries'],
    deliverables: ['Custom PDF / HTML report generator', 'Scheduled cron trigger', 'Automated transactional email dispatch'],
    process: ['Data Source Aggregation Query', 'Visual Layout & Graph Design', 'Scheduled Test Dispatch', 'Recipient Group Management'],
    dependencies: 'Requires transactional email service (Resend / SendGrid).'
  },
  {
    num: 18, cat: 'A', title: 'AI-Powered FAQ Assistants',
    shortDesc: 'Interactive searchable help centers that dynamically answer complex customer questions with citations.',
    problem: 'Static FAQ pages are long, difficult to navigate, and frequently fail to answer nuanced customer questions.',
    useCases: ['Product technical documentation query', 'E-commerce return policy clarification', 'Software developer portals'],
    deliverables: ['Search component with instant answers', 'Auto-updating knowledge index', 'Unanswered query feedback log'],
    process: ['Existing FAQ Ingestion', 'Semantic Search Embedding', 'Component Embedding & Styling', 'Unmatched Query Reporting'],
    dependencies: 'Requires vector database or PostgreSQL full-text search.'
  },
  {
    num: 19, cat: 'A', title: 'AI Tool Integrations',
    shortDesc: 'Custom API bridges connecting modern AI capabilities into your existing proprietary or legacy software.',
    problem: 'Off-the-shelf AI apps live in silos away from the core tools your team actually works in all day.',
    useCases: ['Adding generative drafting directly into internal CRM', 'Image enhancement in custom DAM', 'Auto-tagging in custom ERP'],
    deliverables: ['RESTful / GraphQL middleware service', 'Authentication proxy & rate limiter', 'Developer documentation & SDK wrapper'],
    process: ['Legacy Endpoint Audit', 'Middleware Architecture Design', 'Security & Token Management', 'Load & Latency Testing'],
    dependencies: 'Requires API documentation and access to host application.'
  },
  {
    num: 20, cat: 'A', title: 'AI-Assisted Business Workflows',
    shortDesc: 'Tailored hybrid systems where human domain experts collaborate with intelligent assistive software modules.',
    problem: 'Full automation is often too risky, while purely manual work is too slow—a hybrid model is needed.',
    useCases: ['Agency proposal drafting with human final review', 'Architectural spec drafting', 'Legal contract initial redlining'],
    deliverables: ['Custom hybrid desktop/web workspace', 'Dual-pane review interface', 'Audit log of human overrides'],
    process: ['Workflow Decomposition', 'Intervention Gate Design', 'Workspace Interface Prototyping', 'User Training & Rollout'],
    dependencies: 'Requires client workflow specifications and staff onboarding session.'
  },

  // CATEGORY B: WEBSITE DESIGN AND DEVELOPMENT (21-40)
  {
    num: 21, cat: 'B', title: 'Business Website Development',
    shortDesc: 'Bespoke corporate websites engineered with clean typography, high performance, and human-crafted visual design.',
    problem: 'Cookie-cutter website templates dilute corporate credibility and fail to convert premium prospects.',
    useCases: ['Corporate identity websites', 'Consultancy and legal practice portals', 'High-end service provider hubs'],
    deliverables: ['Complete responsive TypeScript codebase', 'Custom CMS / admin editing interface', 'Production deployment setup'],
    process: ['Brand & Information Architecture Discovery', 'Wireframing & Editorial Layout', 'Full-Stack Development', 'QA & Launch'],
    dependencies: 'Domain name and hosting infrastructure (Vercel / Cloud Run / Supabase).',
    featured: true
  },
  {
    num: 22, cat: 'B', title: 'Landing Page Design',
    shortDesc: 'Single-purpose conversion pages focused on high intent, rigorous hierarchy, and measurable client acquisition.',
    problem: 'Traffic campaigns bleed ad spend when sent to cluttered homepages with no clear proposition or conversion funnel.',
    useCases: ['Paid search ad campaign destinations', 'New product launch waitlists', 'Executive event registrations'],
    deliverables: ['High-converting landing page', 'Validated lead capture form', 'Analytics & conversion tracking hooks'],
    process: ['Audience & Offer Analysis', 'Above-the-Fold Layout Formulation', 'Copywriting & Asset Integration', 'A/B Test Readiness'],
    dependencies: 'Connected analytics or marketing pixel setup.'
  },
  {
    num: 23, cat: 'B', title: 'Portfolio Website Development',
    shortDesc: 'Art-directed showcase platforms designed for architects, creative directors, photographers, and agencies.',
    problem: 'Creative studios often have portfolios that look like generic image grids without narrative context.',
    useCases: ['Architecture studio monograph sites', 'Film director showreel hubs', 'Industrial designer case studies'],
    deliverables: ['Editorial project gallery layout', 'Deep-dive case study templates', 'Multi-tier access controls for private work'],
    process: ['Asset Curation & Narrative Strategy', 'Layout & Typographic System Design', 'High-Resolution Media Optimization', 'Deployment'],
    dependencies: 'High-resolution imagery and project project brief text.'
  },
  {
    num: 24, cat: 'B', title: 'Agency Website Development',
    shortDesc: 'Flagship digital agency websites engineered to demonstrate technical rigor, taste, and organizational maturity.',
    problem: 'Agencies fail to win enterprise accounts when their own website is slow, buggy, or looks identical to competitors.',
    useCases: ['Digital marketing agencies', 'Custom software development consultancies', 'PR & communications firms'],
    deliverables: ['Full agency website architecture', 'Service catalog with filtering', 'Client inquiry triage dashboard'],
    process: ['Agency Positioning & Differentiation', 'Service Taxonomy Structuring', 'Component System Build', 'Performance Auditing'],
    dependencies: 'Client brand assets and service definitions.'
  },
  {
    num: 25, cat: 'B', title: 'E-Commerce Development',
    shortDesc: 'Custom online retail storefronts with refined product merchandising, quick-view drawers, and seamless checkout.',
    problem: 'Bloated Shopify themes load sluggishly and constrain unique brand storytelling.',
    useCases: ['Boutique luxury brands', 'Direct-to-consumer specialty goods', 'Digital downloads & software licenses'],
    deliverables: ['Custom headless or full-stack storefront', 'Cart & checkout integration', 'Inventory management back-office'],
    process: ['Catalog Architecture & Schema Design', 'Product Detail Layout Ergonomics', 'Payment Gateway Integration', 'Load Testing'],
    dependencies: 'Stripe or payment processor merchant account.'
  },
  {
    num: 26, cat: 'B', title: 'Website Redesign',
    shortDesc: 'Comprehensive architectural overhaul modernizing outdated tech stacks, typography, and UX bottlenecks.',
    problem: 'Aging legacy websites suffer from poor mobile responsiveness, broken scripts, and declining conversion rates.',
    useCases: ['Replatforming legacy WordPress sites to modern React', 'Visual rebrands following funding rounds', 'Accessibility overhauls'],
    deliverables: ['Full responsive redesign', '301 redirect map for SEO protection', 'Content migration & performance upgrade'],
    process: ['Current Site Audit & Heatmap Review', 'New Design System Definition', 'Full-Stack Rebuild', 'Seamless Cutover'],
    dependencies: 'DNS access and existing website content export.'
  },
  {
    num: 27, cat: 'B', title: 'Website Editing and Maintenance',
    shortDesc: 'Ongoing technical stewardship, dependency upgrades, security patching, and content updates.',
    problem: 'Without proactive maintenance, websites develop security vulnerabilities, plugin conflicts, and broken layouts.',
    useCases: ['Monthly retainer support', 'Quarterly framework updates', 'Urgent hotfix resolution'],
    deliverables: ['Monthly health & uptime reports', 'Security patch application', 'Dedicated support SLA channel'],
    process: ['Codebase Baseline Inspection', 'Automated Regression Test Setup', 'Scheduled Maintenance Windows', 'Emergency On-Call'],
    dependencies: 'Git repository and deployment server credentials.'
  },
  {
    num: 28, cat: 'B', title: 'Responsive Web Development',
    shortDesc: 'Fluid multi-device layouts tailored specifically for phone, tablet, laptop, and ultra-wide desktop monitors.',
    problem: 'Over 60% of modern web traffic is mobile, yet many sites still feel cramped and clumsy on smaller touchscreens.',
    useCases: ['Mobile-first redesigns', 'Tablet POS viewports', 'Ultra-wide monitor optimization (1440px-2560px)'],
    deliverables: ['Responsive CSS grid & flex layout', 'Touch-optimized gestures & targets', 'Dynamic viewport media handling'],
    process: ['Breakpoint Strategy Definition', 'Touch Target & Ergonomics Pass', 'Cross-Device Physical Lab Testing', 'Audit & Sign-Off'],
    dependencies: 'Existing website source code.'
  },
  {
    num: 29, cat: 'B', title: 'Website Troubleshooting',
    shortDesc: 'Rapid diagnostic and remediation services for broken layouts, console errors, API failures, and memory leaks.',
    problem: 'A broken contact form or checkout error can silently cost businesses thousands of dollars per day.',
    useCases: ['Diagnosing form submission drops', 'Resolving CSS rendering glitches', 'Fixing third-party script conflicts'],
    deliverables: ['Root cause diagnostic report', 'Applied code patch / pull request', 'Prevention test script'],
    process: ['Error Reproduction & Log Analysis', 'Isolating Faulting Modules', 'Hotfix Application & Testing', 'Post-Mortem Review'],
    dependencies: 'Access to error monitoring logs and codebase.'
  },
  {
    num: 30, cat: 'B', title: 'Performance Optimization',
    shortDesc: 'Core Web Vitals acceleration, image compression pipelines, bundle splitting, and sub-second load times.',
    problem: 'Slow page loads degrade Google search rankings and cause 40% of users to bounce before seeing your offer.',
    useCases: ['Achieving 90+ Lighthouse scores', 'Optimizing large media catalogs', 'Server-side response acceleration'],
    deliverables: ['Before/After Core Web Vitals audit', 'Optimized image delivery pipeline', 'Code-split bundle configuration'],
    process: ['Performance Profiling & Bottleneck Trace', 'Asset Minification & CDN Optimization', 'Rendering Tree Optimization', 'Verification'],
    dependencies: 'Access to CDN / hosting configuration.'
  },
  {
    num: 31, cat: 'B', title: 'API Integration',
    shortDesc: 'Robust backend connections to external REST, GraphQL, and Webhook APIs with proper security and rate limiting.',
    problem: 'Poorly written API integrations fail silently when third-party servers undergo maintenance or rate limit requests.',
    useCases: ['Syncing customer data to external platforms', 'Payment gateway webhooks', 'Weather or financial market feeds'],
    deliverables: ['Secure API proxy route', 'Exponential backoff retry mechanism', 'Typed interface definitions'],
    process: ['API Spec & Auth Review', 'Proxy Architecture Setup', 'Error & Timeout Handling Pass', 'Integration Testing'],
    dependencies: 'API documentation and developer credentials from the external service.'
  },
  {
    num: 32, cat: 'B', title: 'Third-Party Integrations',
    shortDesc: 'Seamless embedding of third-party widgets, analytics, CRMs, booking engines, and communication tools.',
    problem: 'Scattered external scripts degrade performance and cause layout shifts if not loaded asynchronously.',
    useCases: ['Google Tag Manager & analytics setup', 'Calendly / Cal.com embedding', 'HubSpot tracking scripts'],
    deliverables: ['Clean zero-layout-shift script loader', 'Privacy consent policy compliance', 'Verified event dispatch testing'],
    process: ['Script Audit & Consolidation', 'Asynchronous Loading Implementation', 'Event Trigger Verification', 'Privacy Compliance'],
    dependencies: 'Account access to third-party providers.'
  },
  {
    num: 33, cat: 'B', title: 'Dashboard Development',
    shortDesc: 'Bespoke administrative and client-facing web dashboards with live charts, filtering, and role-based access.',
    problem: 'Generic analytics dashboards are cluttered with irrelevant charts while missing the exact KPI your team needs.',
    useCases: ['Client reporting portals', 'Internal operational control panels', 'Subscription management views'],
    deliverables: ['Interactive dashboard with filters', 'Role-based route guards', 'CSV/PDF export functionality'],
    process: ['Metrics & KPI Hierarchy Discovery', 'Information Architecture Layout', 'Full-Stack Data Fetching & Caching', 'User Testing'],
    dependencies: 'Backend database or API feeds.'
  },
  {
    num: 34, cat: 'B', title: 'Membership Websites',
    shortDesc: 'Gated content architectures with subscriber authentication, tiered access permissions, and billing cycles.',
    problem: 'Managing subscriber access across different tiers is difficult to keep secure without robust database RLS.',
    useCases: ['Paid newsletter archives', 'Video masterclass portals', 'Professional association member directories'],
    deliverables: ['Authentication system with role guards', 'Protected member dashboard', 'Subscription billing webhooks'],
    process: ['Membership Tier Definition', 'Database Security Rules Setup', 'Protected Route Architecture', 'Billing Integration'],
    dependencies: 'Supabase Auth or equivalent and Stripe Billing.'
  },
  {
    num: 35, cat: 'B', title: 'Customer Portals',
    shortDesc: 'Dedicated self-service environments where clients can check project progress, upload files, and view invoices.',
    problem: 'Constant client emails asking for status updates waste account manager time and create communication lag.',
    useCases: ['Agency client project trackers', 'Accounting document upload vaults', 'Custom manufacturing order status'],
    deliverables: ['Customer portal web app', 'File upload & management vault', 'Real-time project milestone timeline'],
    process: ['Customer Journey Mapping', 'Secure File Storage Configuration', 'Milestone State Machine', 'Deployment'],
    dependencies: 'Supabase Storage or cloud S3 bucket.'
  },
  {
    num: 36, cat: 'B', title: 'Lead Capture Forms',
    shortDesc: 'Optimized multi-step forms with dynamic field validation, progress indicators, and instant notification hooks.',
    problem: 'Long single-page forms intimidate prospective leads, resulting in low completion and high abandonment rates.',
    useCases: ['High-value project inquiry funnels', 'Mortgage / loan pre-qualification', 'Consultation intake'],
    deliverables: ['Multi-step React form component', 'Server-side input validation', 'Instant lead routing webhook'],
    process: ['Funnel Drop-off Analysis', 'Progressive Disclosure UX Design', 'Validation & Error State Tuning', 'CRM Integration'],
    dependencies: 'Destination database or email notification webhook.'
  },
  {
    num: 37, cat: 'B', title: 'Contact Forms',
    shortDesc: 'Clean, accessible inquiry forms with anti-spam honeypot defense, field masking, and instant receipt confirmation.',
    problem: 'Standard forms are spammed by bots or fail silently due to unhandled SMTP connection drops.',
    useCases: ['General website contact pages', 'Press inquiry routing', 'Partnership request forms'],
    deliverables: ['Accessible contact form component', 'Invisible honeypot & rate limiter', 'Auto-responder confirmation email'],
    process: ['Field Requirement Discovery', 'Spam Defense Layer Setup', 'Database Persistence & Alerting', 'Testing'],
    dependencies: 'Database connection or transactional email service.'
  },
  {
    num: 38, cat: 'B', title: 'Content Management Systems (CMS)',
    shortDesc: 'Intuitive administrative backends allowing non-technical editors to publish pages, case studies, and blog posts.',
    problem: 'Marketing teams wait days for developers to make simple copy changes on rigid static websites.',
    useCases: ['Custom visual site builders', 'Headless CMS implementations', 'Blog and portfolio management'],
    deliverables: ['Admin management dashboard', 'Visual WYSIWYG / drag-and-drop editor', 'Draft and publishing preview workflow'],
    process: ['Content Model & Schema Architecture', 'Admin UI/UX Crafting', 'Draft/Publish State Machine', 'Editor Handover'],
    dependencies: 'Database tables for pages and sections (e.g. Supabase).',
    featured: true
  },
  {
    num: 39, cat: 'B', title: 'Accessibility Improvements',
    shortDesc: 'WCAG 2.1 AA compliance audits, keyboard navigation fixes, screen-reader landmarks, and contrast tuning.',
    problem: 'Inaccessible websites alienate millions of users with disabilities and expose businesses to legal liabilities.',
    useCases: ['Public institution compliance', 'Corporate ESG accessibility audits', 'Universal design improvements'],
    deliverables: ['Comprehensive WCAG AA audit report', 'Remediated HTML markup & ARIA roles', 'Keyboard navigation verification pass'],
    process: ['Automated & Manual Screen Reader Audit', 'Focus State & Contrast Remediation', 'Semantic HTML5 Structural Refactor', 'Validation'],
    dependencies: 'Existing website codebase.'
  },
  {
    num: 40, cat: 'B', title: 'Website Deployment Assistance',
    shortDesc: 'Production server setup, custom domain DNS configuration, SSL certification, and CI/CD deployment pipelines.',
    problem: 'Deployment hiccups, DNS propagation errors, and SSL mismatches can cause catastrophic launch downtime.',
    useCases: ['Domain cutovers with zero downtime', 'Setting up automated GitHub Actions deploys', 'Cloud Run / Vercel configurations'],
    deliverables: ['Configured production hosting environment', 'Automated CI/CD deployment workflow', 'Verified HTTPS & DNS settings'],
    process: ['Infrastructure Architecture Selection', 'CI/CD Pipeline Scripting', 'DNS & SSL Verification', 'Launch Day Monitoring'],
    dependencies: 'DNS registrar access and cloud hosting account.'
  },

  // CATEGORY C: CONTENT AND COPYWRITING (41-60)
  {
    num: 41, cat: 'C', title: 'AI Content Creation',
    shortDesc: 'High-speed conceptual drafting of marketing campaigns, articles, and briefs grounded in brand research.',
    problem: 'Creating content from a blank page is slow and often suffers from writer block across large content schedules.',
    useCases: ['Rapid campaign idea brainstorming', 'First-draft educational guides', 'Social media topic ideation'],
    deliverables: ['Curated draft batches', 'Custom generative prompt sets', 'Structured outline briefs'],
    process: ['Topic & Audience Briefing', 'Structured Model Prompting', 'Curated Batch Selection', 'Initial Human Polish'],
    dependencies: 'Requires client topic brief and brand voice guidelines.'
  },
  {
    num: 42, cat: 'C', title: 'AI Content Humanization',
    shortDesc: 'Substantive editorial refinement removing AI clichés, monotone sentence structures, and robotic filler.',
    problem: 'Audiences instinctively distrust generic AI prose filled with words like "delve", "tapestry", and "testament".',
    useCases: ['Refining AI-drafted articles', 'Polishing executive speeches', 'Upgrading automated marketing copy'],
    deliverables: ['Humanized, resonant copy rewrite', 'Before/After diff analysis report', 'Tone and cadence audit score'],
    process: ['Robotic Marker & Buzzword Strip', 'Sentence Rhythm & Cadence Restructuring', 'Concrete Sensory Noun Injection', 'Final Read-Aloud'],
    dependencies: 'Raw draft text to be refined.',
    featured: true
  },
  {
    num: 43, cat: 'C', title: 'Website Copywriting',
    shortDesc: 'Strategic homepage, about, and service page copy engineered to clarify value propositions and drive inquiries.',
    problem: 'Most agency copy talks endlessly about internal processes without addressing client pain points or business outcomes.',
    useCases: ['Complete agency website copy', 'New corporate brand launch copy', 'SaaS value proposition clarity'],
    deliverables: ['Full website copy deck', 'Headline & sub-headline variations', 'Interactive CTA copy matrices'],
    process: ['Customer Interview & Pain Point Mapping', 'Proposition Hierarchy Architecture', 'Full Draft Composition', 'Revision Passes'],
    dependencies: 'Information architecture and target audience profiles.'
  },
  {
    num: 44, cat: 'C', title: 'Landing-Page Copywriting',
    shortDesc: 'Conversion-focused copy that eliminates hesitation, presents clear proof, and guides the reader to a single action.',
    problem: 'Visitors scan landing pages in 5 seconds; confusing or bloated copy causes immediate tab closure.',
    useCases: ['High-ticket consulting landing pages', 'Webinar registration copy', 'Product pre-order pitches'],
    deliverables: ['Complete landing page copy spec', 'Above-the-fold proposition variants', 'Social proof narrative blocks'],
    process: ['Customer Objection Inventory', 'Hook Formulation', 'Argument & Evidence Sequencing', 'Friction Reduction Pass'],
    dependencies: 'Product offer details and proof points.'
  },
  {
    num: 45, cat: 'C', title: 'Blog Writing',
    shortDesc: 'Thoughtful, thoroughly researched long-form articles that establish genuine industry authority.',
    problem: 'Shallow 500-word SEO fluff articles damage brand prestige and fail to rank against in-depth authoritative content.',
    useCases: ['Weekly technical editorial articles', 'Founder thought leadership essays', 'Industry case breakdowns'],
    deliverables: ['1,500 - 3,000 word polished article', 'Meta title & description', 'Social snippet teasers'],
    process: ['Topic Research & Outline Approval', 'Subject Matter Deep Dive', 'Drafting & Fact-Checking', 'Editorial Polish'],
    dependencies: 'Target keywords or strategic editorial themes.'
  },
  {
    num: 46, cat: 'C', title: 'Article Writing',
    shortDesc: 'Bylined op-eds and journalistic analysis suitable for industry publications and corporate magazines.',
    problem: 'Pitching external publications requires journalistic rigor that typical marketing copywriters lack.',
    useCases: ['Industry magazine guest contributions', 'White paper companion articles', 'Annual shareholder essays'],
    deliverables: ['Publication-ready manuscript', 'Author bio & abstract', 'Editor query letter'],
    process: ['Angle Formulation', 'Primary Source & Data Gathering', 'Journalistic Composition', 'Proofing & Fact Check'],
    dependencies: 'Target publication guidelines.'
  },
  {
    num: 47, cat: 'C', title: 'Social Media Content',
    shortDesc: 'Concise, high-impact commentary and carousel copy designed for professional discussion on LinkedIn and X.',
    problem: 'Generic corporate social posts generate zero engagement and make brands look out of touch.',
    useCases: ['Executive personal branding on LinkedIn', 'Agency portfolio release threads', 'Industry insight commentary'],
    deliverables: ['Monthly calendar of 20+ bespoke posts', 'Carousel slide copy decks', 'Engagement reply playbook'],
    process: ['Core Thesis Definition', 'Hook & Format Ideation', 'Copywriting & Slide Breakdown', 'Review & Scheduling'],
    dependencies: 'Company news or topic roadmap.'
  },
  {
    num: 48, cat: 'C', title: 'Marketing Campaign Content',
    shortDesc: 'Integrated narrative copy threading cohesive messaging across email, landing pages, ads, and video scripts.',
    problem: 'Disjointed campaign messaging confuses prospective buyers when touchpoints do not align conceptually.',
    useCases: ['Quarterly brand awareness campaigns', 'Major feature release announcements', 'Seasonal promotional pushes'],
    deliverables: ['Campaign concept messaging bible', 'Omnichannel copy matrix', 'A/B testing ad variant decks'],
    process: ['Creative Campaign Theme Workshop', 'Core Hook Development', 'Asset-Specific Adaptation', 'Sign-Off'],
    dependencies: 'Campaign goals, budget, and target audience.'
  },
  {
    num: 49, cat: 'C', title: 'Video Scripts',
    shortDesc: 'Time-coded video scripts with audio voiceover and visual direction notes crafted for retention.',
    problem: 'Unscripted or poorly timed videos wander aimlessly, causing viewer drop-off in the first 10 seconds.',
    useCases: ['60-second product explainer scripts', 'Brand manifesto voiceover scripts', 'Customer case study interview guides'],
    deliverables: ['Two-column A/V (Audio/Visual) script', 'Pacing & word-count estimate', 'B-roll shot list recommendations'],
    process: ['Narrative Arc Outline', 'Drafting with Read-Aloud Timing', 'Visual Cue Annotation', 'Director Review'],
    dependencies: 'Target video length and platform format.'
  },
  {
    num: 50, cat: 'C', title: 'Product Descriptions',
    shortDesc: 'Compelling e-commerce copy blending sensory appeal, technical specifications, and purchase confidence.',
    problem: 'Dry manufacturer spec sheets fail to evoke desire or explain practical customer benefits.',
    useCases: ['Luxury goods catalogs', 'Tech hardware specifications with benefit breakdowns', 'Artisanal consumer products'],
    deliverables: ['Product title and short hook', 'Feature-to-benefit narrative paragraph', 'Structured specification table'],
    process: ['Product Feature Extraction', 'Benefit Translation Matrix', 'Sensory Language Layering', 'Batch Review'],
    dependencies: 'Product physical specs and materials.'
  },
  {
    num: 51, cat: 'C', title: 'Email Marketing Copy',
    shortDesc: 'High-open nurture sequences, product drops, and relationship-building newsletters that respect subscriber time.',
    problem: 'Spammy, sales-heavy emails end up in promotions folders or trigger immediate unsubscriptions.',
    useCases: ['Welcome nurture onboarding sequences', 'Monthly studio newsletter', 'High-touch consultation follow-ups'],
    deliverables: ['Multi-part automated email sequences', 'Subject line & preview text A/B pairs', 'Plain-text and HTML copy specs'],
    process: ['Customer Stage Segmentation', 'Sequence Hook Mapping', 'Compelling Copy Drafting', 'Deliverability Review'],
    dependencies: 'Email service provider (Klaviyo, Mailchimp, or Resend).'
  },
  {
    num: 52, cat: 'C', title: 'Brand Storytelling',
    shortDesc: 'Foundational brand narratives, manifestos, and mission statements that define your unique worldview.',
    problem: 'Companies struggle to articulate what they believe in without sounding like every other corporate mission statement.',
    useCases: ['Company about page overhaul', 'Pitch deck core narrative', 'Internal company culture handbook'],
    deliverables: ['Brand manifesto essay', 'Origin story narrative', 'Brand principles & positioning guide'],
    process: ['Founder Discovery Interview', 'Core Belief Archetyping', 'Manifesto Drafting', 'Executive Alignment'],
    dependencies: 'Access to founders or key executive stakeholders.'
  },
  {
    num: 53, cat: 'C', title: 'Content Repurposing',
    shortDesc: 'Systematically deconstructing one high-value long-form asset into 15+ micro-content pieces across multiple formats.',
    problem: 'Valuable webinars and whitepapers are published once and forgotten instead of generating sustained traffic.',
    useCases: ['Transforming a 45-min podcast into 5 articles, 10 social posts, and 3 video shorts'],
    deliverables: ['Repurposing asset matrix', 'Extracted quote cards and hooks', 'Platform-tailored text snippets'],
    process: ['Core Asset Transcript Review', 'High-Signal Hook Extraction', 'Multi-Format Transformation', 'Content Pack Delivery'],
    dependencies: 'Source video, podcast, or whitepaper.'
  },
  {
    num: 54, cat: 'C', title: 'Editorial Calendars',
    shortDesc: 'Structured publishing schedules aligning content topics with business goals, product drops, and seasonal demand.',
    problem: 'Ad-hoc publishing results in inconsistent cadence, rushed drafts, and missed business milestones.',
    useCases: ['Quarterly agency editorial planning', 'B2B content marketing roadmap', 'Social media publishing calendar'],
    deliverables: ['90-day interactive content calendar', 'Topic briefs with assigned channels', 'Cadence and workflow tracking spec'],
    process: ['Goal & Audience Audit', 'Theme & Cluster Formulation', 'Calendar Scheduling', 'Team Workflow Alignment'],
    dependencies: 'Internal publishing capacity details.'
  },
  {
    num: 55, cat: 'C', title: 'Proofreading',
    shortDesc: 'Rigorous typographical, grammatical, and formatting inspection catching embarrassing typos before publication.',
    problem: 'A single misspelling in a headline or investor deck erodes credibility and signals carelessness.',
    useCases: ['Final website launch pass', 'Annual report final PDF review', 'High-stakes proposal inspection'],
    deliverables: ['Marked-up manuscript / pull request', 'Typo and formatting correction list', 'Clean final document'],
    process: ['Line-by-line mechanical reading', 'Punctuation & capitalization check', 'Name & numeral verification', 'Final sign-off'],
    dependencies: 'Final draft manuscript.'
  },
  {
    num: 56, cat: 'C', title: 'Content Editing',
    shortDesc: 'Deep structural editing improving logical flow, argument coherence, evidence strength, and paragraph pacing.',
    problem: 'Drafts frequently suffer from muddled organization where the best point is buried in the fourth paragraph.',
    useCases: ['Substantive overhaul of whitepapers', 'Refining complex software documentation', 'Executive ghostwriting revisions'],
    deliverables: ['Restructured manuscript with tracked changes', 'Editorial rationale memo', 'Polished final version'],
    process: ['Macro-Structure Evaluation', 'Paragraph Flow Reorganization', 'Redundant Text Pruning', 'Sentence Refinement'],
    dependencies: 'Draft document.'
  },
  {
    num: 57, cat: 'C', title: 'Grammar and Clarity Refinement',
    shortDesc: 'Sentence-level line editing eliminating passive voice, wordiness, convoluted clauses, and jargon.',
    problem: 'Convoluted corporate jargon obscures good ideas and exhausts readers.',
    useCases: ['Technical software guides made accessible', 'Legal disclaimers translated to plain English', 'Customer portal copy'],
    deliverables: ['Cleaned text with high readability scores', 'Clarity improvement notes', 'Style concordance checklist'],
    process: ['Syntax & Voice Analysis', 'Active Voice Conversion', 'Jargon Replacement Pass', 'Cadence Smoothing'],
    dependencies: 'Draft text.'
  },
  {
    num: 58, cat: 'C', title: 'Brand Voice Development',
    shortDesc: 'Comprehensive voice and tone guidelines defining vocabulary, punctuation rules, and situational tone shifts.',
    problem: 'Multiple team members write in conflicting styles, leaving the brand feeling disjointed and disorganized.',
    useCases: ['Scaling marketing teams', 'Agency client style guide creation', 'Customer support tone playbook'],
    deliverables: ['Comprehensive Brand Voice Bible', 'Do/Don’t example comparisons', 'Tone spectrum matrix (support vs marketing)'],
    process: ['Personality Archetype Workshop', 'Vocabulary & Grammar Standards Definition', 'Practical Example Library Creation', 'Team Handover'],
    dependencies: 'Executive brand strategy input.'
  },
  {
    num: 59, cat: 'C', title: 'Content Restructuring',
    shortDesc: 'Architectural reorganizing of dense manuals, knowledge bases, and site architectures into scannable formats.',
    problem: 'Users cannot find answers in 80-page monolithic documents that lack clear hierarchies and scannable signposts.',
    useCases: ['Transforming PDF user manuals into interactive web docs', 'Restructuring messy knowledge bases'],
    deliverables: ['New hierarchical content map', 'Chunked modular text blocks', 'Cross-linking taxonomy structure'],
    process: ['Information Architecture Review', 'Content Modularization & Chunking', 'Navigation & Linking Taxonomy', 'Reassembly'],
    dependencies: 'Existing documentation corpus.'
  },
  {
    num: 60, cat: 'C', title: 'Content Quality Review',
    shortDesc: 'Independent editorial audits evaluating clarity, factual backing, tone consistency, and SEO health.',
    problem: 'Marketing teams lack an objective external perspective to evaluate whether their content is actually effective.',
    useCases: ['Pre-launch website content audit', 'Competitive content benchmarking', 'Annual content health checkup'],
    deliverables: ['Content Quality Scorecard', 'Prioritized remediation recommendations', 'Executive summary presentation'],
    process: ['Sample Corpus Ingestion', 'Multi-Point Quality Rubric Evaluation', 'Comparative Benchmark Analysis', 'Report Synthesis'],
    dependencies: 'List of target URLs or documents.'
  },

  // CATEGORY D: VIDEO AND MEDIA (61-72)
  {
    num: 61, cat: 'D', title: 'Promotional Video Concepts',
    shortDesc: 'Creative treatments, hook formulations, and high-level visual treatments for brand marketing videos.',
    problem: 'Video budgets are wasted when filming begins without a validated narrative concept or visual direction.',
    useCases: ['New brand launch video pitches', 'Product line announcement treatments', 'Crowdfunding campaign videos'],
    deliverables: ['Comprehensive Creative Treatment Deck', 'Logline and Narrative Synopsis', 'Visual Tone and Moodboard Reference'],
    process: ['Creative Brief Discovery', 'Concept Brainstorming & Selection', 'Visual Mood Curation', 'Concept Pitch Presentation'],
    dependencies: 'Target campaign goals and audience profile.',
    featured: true
  },
  {
    num: 62, cat: 'D', title: 'Short-Form Video Production',
    shortDesc: 'Fast-paced, vertically-formatted videos engineered for high retention on TikTok, Instagram Reels, and YouTube Shorts.',
    problem: 'Traditional horizontal videos fail completely when cropped awkwardly for vertical mobile feeds.',
    useCases: ['Product feature spotlights', 'Founder thought snippets', 'Customer testimonial shorts'],
    deliverables: ['Batch of 9:16 vertical video files', 'Embedded captions & kinetic typography', 'Soundtrack & sound design sync'],
    process: ['Hook Ideation & Scripting', 'Visual Asset Capture / Generation', 'Fast-Paced Timeline Editing', 'Audio Mix & Delivery'],
    dependencies: 'Client footage or script concept.'
  },
  {
    num: 63, cat: 'D', title: 'Long-Form Video Workflows',
    shortDesc: 'Structured production pipelines for episodic YouTube series, in-depth webinars, and documentary case studies.',
    problem: 'Long-form videos quickly lose viewer attention if chapters, pacing, and visual transitions are not tightly orchestrated.',
    useCases: ['Technical deep-dive webinars', 'Case study documentary films', 'Educational course modules'],
    deliverables: ['Full master cut with chapter markers', 'Audio mix & color grade', 'YouTube thumbnail & description bundle'],
    process: ['Editorial Assembly Pass', 'Pacing & B-Roll Integration', 'Sound Design & Color Pass', 'Final Master Export'],
    dependencies: 'Raw recorded footage or presentation slides.'
  },
  {
    num: 64, cat: 'D', title: 'Explainer Videos',
    shortDesc: 'Clear, engaging visual walkthroughs simplifying complex software, hardware, or business models.',
    problem: 'Prospects leave websites because they cannot grasp what an intricate B2B product actually does in 60 seconds.',
    useCases: ['SaaS product overview videos', 'Fintech mechanism explainers', 'Healthcare technology walkthroughs'],
    deliverables: ['60-90 second animated explainer video', 'Professional voiceover track', 'Soundtrack & sound effects mix'],
    process: ['Script & Visual Metaphor Design', 'Styleframe & Storyboard Sign-off', 'Motion Graphics Animation', 'Final Audio Polish'],
    dependencies: 'Product demo access or interface screenshots.'
  },
  {
    num: 65, cat: 'D', title: 'Educational Videos',
    shortDesc: 'Instructional content engineered for clarity, progressive disclosure, and student comprehension.',
    problem: 'Boring slide lectures fail to hold attention and result in low course completion rates.',
    useCases: ['Software customer onboarding academies', 'Internal employee compliance training', 'Public educational tutorials'],
    deliverables: ['Segmented video lessons with title slides', 'Downloadable lesson recap guides', 'LMS-compatible video files'],
    process: ['Learning Objective Definition', 'Curriculum Scripting', 'Screen Capture & Annotation', 'Master Delivery'],
    dependencies: 'Subject matter curriculum materials.'
  },
  {
    num: 66, cat: 'D', title: 'Faceless Video Production',
    shortDesc: 'High-production-value video assets built without on-camera talent using B-roll, motion graphics, and voiceovers.',
    problem: 'Many businesses lack comfortable on-camera talent or studio space but still need high-volume video output.',
    useCases: ['Technical tutorial channels', 'Financial market commentary', 'Product review breakdowns'],
    deliverables: ['Full edited video assets', 'Dynamic licensed B-roll curation', 'AI or professional human voiceover audio'],
    process: ['Topic Scripting & Timing', 'Asset & Footage Sourcing', 'Motion Graphic Overlay Assembly', 'Master Export'],
    dependencies: 'Target platform requirements.'
  },
  {
    num: 67, cat: 'D', title: 'Animated Video Concepts',
    shortDesc: 'Stylized 2D and 3D motion design bringing abstract concepts, workflows, and diagrams to life.',
    problem: 'Live-action video cannot visualize abstract software architecture or microscopic biological processes.',
    useCases: ['Data infrastructure visualizations', 'Crypto / Web3 protocol explainers', 'Fintech cash-flow animations'],
    deliverables: ['Styleframes and motion test clips', 'Rendered vector / 3D animations', 'Integrated SFX sound bed'],
    process: ['Styleframe Design', 'Kinetic Typography & Vector Rigging', 'Keyframe Animation', 'Sound Design Integration'],
    dependencies: 'Brand vector assets and technical diagram sketches.'
  },
  {
    num: 68, cat: 'D', title: 'Subtitle and Caption Workflows',
    shortDesc: 'Accurate, time-synchronized subtitles (.SRT, .VTT) and burned-in kinetic typography for silent mobile viewing.',
    problem: 'Up to 80% of mobile social video is watched with the sound muted; videos without captions are skipped instantly.',
    useCases: ['Burned-in animated social subtitles', 'Multi-language accessibility captions', 'Webinar transcription archives'],
    deliverables: ['Styled burned-in kinetic caption video', 'Exported .SRT and .VTT files', 'Full verbatim text transcript'],
    process: ['Speech-to-Text Transcription', 'Human Word Timing Verification', 'Typographic Styling & Highlighting', 'Final Render'],
    dependencies: 'Raw video or audio file.'
  },
  {
    num: 69, cat: 'D', title: 'Video Script Development',
    shortDesc: 'Professional scripting with precise visual cues, character directions, and audience retention psychology.',
    problem: 'Videos produced from generic bullet points ramble and fail to establish an emotional connection with the viewer.',
    useCases: ['Commercial broadcast spots', 'Company culture overview films', 'Kickstarter campaign pitches'],
    deliverables: ['Formatted screenplay with AV columns', 'Pacing and tonal guide', 'Director production notes'],
    process: ['Target Retention Curve Modeling', 'Scene-by-Scene Beat Outline', 'Script Writing & Dialogue Polish', 'Table Read Review'],
    dependencies: 'Project brief and narrative constraints.'
  },
  {
    num: 70, cat: 'D', title: 'Automated Video Production',
    shortDesc: 'Programmatic batch video generation pipelines rendering hundreds of customized variants for testing.',
    problem: 'Manually editing 50 variations of an ad for different cities or audiences takes weeks of repetitive editor labor.',
    useCases: ['Multi-variant localized advertising', 'Automated sports highlight compilation', 'Dynamic personalized video invites'],
    deliverables: ['Batch rendering template script', 'Automated cloud worker deployment', 'Exported asset library with metadata'],
    process: ['Template Asset Structuring', 'Dynamic Data Feed Mapping', 'Automated Batch Run', 'QC Verification Pass'],
    dependencies: 'Render worker infrastructure and asset library.'
  },
  {
    num: 71, cat: 'D', title: 'AI-Assisted Storyboarding',
    shortDesc: 'Rapid visual pre-visualization generating shot-by-shot storyboard frames to align directors and clients early.',
    problem: 'Hand-drawn storyboards are slow and costly, while pure text scripts fail to communicate visual composition.',
    useCases: ['Pre-production pitch decks', 'Camera angle and lighting alignment', 'Client visual sign-off milestones'],
    deliverables: ['Full multi-frame storyboard deck', 'Camera movement annotations', 'Lighting and color palette references'],
    process: ['Shot List Breakdown', 'Frame Composition & Prompt Generation', 'Consistency Pass & Editing', 'Deck Assembly'],
    dependencies: 'Director shot list or script.'
  },
  {
    num: 72, cat: 'D', title: 'Video Repurposing',
    shortDesc: 'Transforming existing long-form video archives into bite-sized clips, reels, GIFs, and quote assets.',
    problem: 'Companies have hours of high-value recorded webinars that generate zero new leads sitting unedited.',
    useCases: ['Webinar to viral clip extraction', 'Keynote address highlights', 'Podcast video clipping'],
    deliverables: ['Curated vertical short-form clips', 'Key moment time-stamped log', 'Accompanying social text snippets'],
    process: ['Source Video Audit & Timestamping', 'High-Impact Hook Isolation', '9:16 Aspect Re-Framing', 'Captions & Master Cut'],
    dependencies: 'Access to raw video recordings.'
  },

  // CATEGORY E: DIGITAL BUSINESS SUPPORT (73-84)
  {
    num: 73, cat: 'E', title: 'Digital Product Presentation',
    shortDesc: 'Interactive web showcases and interactive mockups that demonstrate digital products to investors and clients.',
    problem: 'Static PDFs and screenshots fail to convey the tactile delight and fluid motion of a modern digital application.',
    useCases: ['Investor pitch deck interactive demos', 'Product launch marketing pages', 'Sales team interactive demo kits'],
    deliverables: ['Interactive web-based product prototype', 'Clickable feature tour', 'High-res device frame renders'],
    process: ['Core User Flow Isolation', 'Interactive Prototype Build', 'Device Mockup Framing', 'Demo Scripting'],
    dependencies: 'Product design assets or live app URL.'
  },
  {
    num: 74, cat: 'E', title: 'Business Process Documentation',
    shortDesc: 'Clear, standardized SOPs and operating procedures that allow businesses to delegate and scale without chaos.',
    problem: 'Critical company procedures exist only in founders’ heads, creating dangerous operational bottlenecks.',
    useCases: ['Client onboarding SOPs', 'Technical deployment handbooks', 'Customer support escalation flows'],
    deliverables: ['Structured SOP library in Notion/web', 'Visual step-by-step workflow diagrams', 'Role responsibility matrices'],
    process: ['Staff Shadowing & Process Mapping', 'Clarity & Edge-Case Drafting', 'Diagram Creation', 'Team Validation Review'],
    dependencies: 'Access to operational team members.'
  },
  {
    num: 75, cat: 'E', title: 'Customer Inquiry Automation',
    shortDesc: 'Automated receipt, categorization, sentiment tagging, and preliminary response routing for inbound leads.',
    problem: 'Inbound inquiries sit unanswered for 24+ hours while prospects reach out to competing agencies.',
    useCases: ['Instant inquiry acknowledgment with custom scoping', 'Triage by deal size', 'Internal team assignment alerts'],
    deliverables: ['Inbound webhook receiver', 'Dynamic inquiry classification logic', 'Automated notification dispatch'],
    process: ['Form & Inbox Audit', 'Triage Logic Definition', 'Integration with CRM / Slack', 'Dry-Run Testing'],
    dependencies: 'Existing contact forms and CRM account.'
  },
  {
    num: 76, cat: 'E', title: 'CRM Integrations',
    shortDesc: 'Two-way synchronization between your website, forms, sales pipeline, and CRM platforms (HubSpot, Salesforce).',
    problem: 'Sales teams miss context when website interactions and form submissions do not synchronize to the CRM in real time.',
    useCases: ['HubSpot / Salesforce custom pipeline sync', 'Lead activity tracking', 'Automated deal stage progression'],
    deliverables: ['Custom CRM webhook integration', 'Field mapping configuration schema', 'Sync error alert monitor'],
    process: ['Data Model & Field Reconciliation', 'Webhook Proxy Construction', 'Two-Way Sync Verification', 'Sales Rep Handover'],
    dependencies: 'CRM API access credentials.'
  },
  {
    num: 77, cat: 'E', title: 'Data Entry Automation',
    shortDesc: 'Automated extraction and normalization of data from receipts, forms, and CSVs into production databases.',
    problem: 'Manual data entry is soul-crushing, slow, and prone to costly transcription mistakes.',
    useCases: ['Automated vendor receipt reconciliation', 'Event attendee list normalization', 'Catalog specification entry'],
    deliverables: ['Automated ETL data pipeline', 'Data cleaning & normalization script', 'Exception review queue interface'],
    process: ['Input Data Format Audit', 'Normalization Schema Setup', 'Transformation Logic Testing', 'Production Scheduler'],
    dependencies: 'Source file feeds and target database.'
  },
  {
    num: 78, cat: 'E', title: 'Research Organization',
    shortDesc: 'Structuring chaotic research papers, industry benchmarks, and client notes into searchable reference hubs.',
    problem: 'Valuable research insights get lost in scattered Google Docs and disorganized desktop folders.',
    useCases: ['Competitive intelligence archives', 'Academic research synthesis libraries', 'Due diligence document hubs'],
    deliverables: ['Organized digital research repository', 'Searchable tag & taxonomy system', 'Executive synthesis summary'],
    process: ['Document Gathering & Tagging', 'Taxonomy Architecture Definition', 'Repository Setup', 'Summary Synthesis'],
    dependencies: 'Source research documents.'
  },
  {
    num: 79, cat: 'E', title: 'Digital Project Setup',
    shortDesc: 'Turnkey initialization of project management workspaces, repositories, communication channels, and tracking boards.',
    problem: 'New projects suffer from disorganized kickoff phases where teams lack shared tools, boards, or communication standards.',
    useCases: ['Agency client project kickoff', 'Internal venture incubation setup', 'Cross-functional task force initialization'],
    deliverables: ['Configured Linear / Jira / Notion board', 'Slack channel hierarchy and integrations', 'Repository & CI/CD initial branch'],
    process: ['Project Scope & Milestones Review', 'Workspace Template Provisioning', 'Tool Integrations & Webhooks', 'Kickoff Briefing'],
    dependencies: 'Project management tool accounts.'
  },
  {
    num: 80, cat: 'E', title: 'Custom AI-Assisted Workflows',
    shortDesc: 'Bespoke automation pipelines engineered for proprietary business logic and specialized domain challenges.',
    problem: 'Generic automation software cannot accommodate specialized industry formulas or proprietary constraints.',
    useCases: ['Specialized architectural estimating workflows', 'Legal compliance checking pipelines', 'Custom logistics dispatch'],
    deliverables: ['Custom automation software module', 'API connectors & database triggers', 'Operational documentation & tests'],
    process: ['Problem Decomposition Workshop', 'Architecture Blueprinting', 'Custom Code Development', 'Operational Testing'],
    dependencies: 'Proprietary business requirements and system access.',
    featured: true
  },
  {
    num: 81, cat: 'E', title: 'Business Workflow Planning',
    shortDesc: 'Strategic mapping of organizational processes to identify inefficiencies, redundancies, and automation opportunities.',
    problem: 'Companies invest in expensive software without first diagnosing where the actual human bottlenecks exist.',
    useCases: ['Operations efficiency consulting', 'Agency capacity planning overhaul', 'Pre-automation architectural roadmap'],
    deliverables: ['Comprehensive Workflow Map & Bottleneck Audit', 'Prioritized Automation Roadmap', 'ROI & Time-Savings Projection'],
    process: ['Stakeholder Interviews', 'Process Mapping Diagramming', 'Bottleneck & Waste Identification', 'Executive Recommendations'],
    dependencies: 'Access to department heads and operational metrics.'
  },
  {
    num: 82, cat: 'E', title: 'Digital Content Organization',
    shortDesc: 'Digital Asset Management (DAM) taxonomy design, metadata tagging, and folder architecture for creative studios.',
    problem: 'Designers and editors spend hours hunting for brand logos, raw footage, and final approved export files.',
    useCases: ['Creative agency asset library reorganization', 'Brand asset hub setup', 'Video archive categorization'],
    deliverables: ['Standardized DAM taxonomy structure', 'File naming convention guidelines', 'Organized cloud storage repository'],
    process: ['Current Asset Audit', 'Taxonomy & Folder Hierarchy Design', 'Batch Renaming & Migration', 'Team Training Guide'],
    dependencies: 'Cloud storage repository access.'
  },
  {
    num: 83, cat: 'E', title: 'Website Content Migration',
    shortDesc: 'Safe, structured transfer of hundreds of pages, blog articles, and images between disparate CMS platforms.',
    problem: 'Replatforming websites often breaks image links, loses SEO metadata, and garbles formatting.',
    useCases: ['WordPress to custom React/Supabase migration', 'Legacy Drupal to modern CMS transfer', 'Consolidating multiple domains'],
    deliverables: ['Automated migration extraction script', '301 redirect map for SEO preservation', 'Verified content database tables'],
    process: ['Source Content Scraping & Export', 'Data Cleaning & Schema Transformation', 'Destination Database Ingestion', 'Link & Image Verification'],
    dependencies: 'Database exports or scraping access to legacy site.'
  },
  {
    num: 84, cat: 'E', title: 'Business Knowledge-Base Setup',
    shortDesc: 'Centralized company wiki and documentation portals engineered for rapid search, clear navigation, and ownership.',
    problem: 'Decentralized knowledge leads to conflicting answers, repeated onboarding questions, and lost institutional memory.',
    useCases: ['Company-wide internal wiki', 'Engineering runbook setup', 'Customer support policy reference portal'],
    deliverables: ['Deployed knowledge-base web portal', 'Hierarchical information taxonomy', 'Editor contribution & review workflow'],
    process: ['Knowledge Domain Mapping', 'Structure & Template Design', 'Core Content Authoring', 'Search & Permissions Verification'],
    dependencies: 'Internal company reference materials.'
  }
];

export const INITIAL_SERVICES: ServiceItem[] = RAW_SERVICES_LIST.map((item, index) => {
  const catNames: Record<string, string> = {
    'A': 'AI and Automation',
    'B': 'Website Design and Development',
    'C': 'Content and Copywriting',
    'D': 'Video and Media',
    'E': 'Digital Business Support'
  };

  const slug = item.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  return {
    id: `srv-${item.num}`,
    slug,
    service_number: item.num,
    category_code: item.cat,
    category_name: catNames[item.cat],
    title: item.title,
    short_description: item.shortDesc,
    full_description: `${item.shortDesc} At JET lancer, we combine thoughtful engineering with human craft to deliver practical solutions that integrate seamlessly into your day-to-day operations.`,
    problem_statement: item.problem,
    use_cases: item.useCases,
    deliverables: item.deliverables,
    process_steps: item.process,
    external_dependencies: item.dependencies,
    is_featured: !!item.featured,
    is_published: true,
    order_index: index + 1
  };
});
