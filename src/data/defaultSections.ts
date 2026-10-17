import { SiteSection } from '../types';

export const INITIAL_HOMEPAGE_SECTIONS: SiteSection[] = [
  {
    id: 'sec-hero',
    page_slug: 'home',
    section_type: 'hero',
    order_index: 1,
    is_visible: true,
    config: {
      headline: 'Smart Digital Solutions. Human Touch. Professional Results.',
      subheadline: 'From AI-powered workflows and intelligent customer experiences to carefully crafted websites and compelling digital content, JET lancer helps turn ideas into practical digital solutions.',
      primary_cta_label: 'Start a Project',
      primary_cta_link: '/contact',
      secondary_cta_label: 'Explore Our Work',
      secondary_cta_link: '/portfolio',
      background_style: 'ivory',
      image_url: '/src/assets/images/hero_jet_lancer_studio_1792203368567.jpg',
      image_caption: 'JET lancer studio workspace & architectural design laboratory',
      layout_variant: 'split'
    }
  },
  {
    id: 'sec-services',
    page_slug: 'home',
    section_type: 'services',
    order_index: 2,
    is_visible: true,
    config: {
      headline: 'Full-Spectrum Digital Capabilities',
      subheadline: 'Eighty-four specialized capabilities organized into five dedicated practices, from generative automation to bespoke full-stack engineering.',
      primary_cta_label: 'Explore All 84 Services',
      primary_cta_link: '/services',
      background_style: 'white',
      display_count: 5
    }
  },
  {
    id: 'sec-featured-work',
    page_slug: 'home',
    section_type: 'featured_work',
    order_index: 3,
    is_visible: true,
    config: {
      headline: 'Featured Demonstration Concepts',
      subheadline: 'Six original showcase projects illustrating our design standards, technical architecture, and human-in-the-loop methodologies.',
      primary_cta_label: 'View Portfolio Gallery',
      primary_cta_link: '/portfolio',
      background_style: 'ivory',
      display_count: 3
    }
  },
  {
    id: 'sec-approach',
    page_slug: 'home',
    section_type: 'approach',
    order_index: 4,
    is_visible: true,
    config: {
      headline: 'Our Architectural Approach',
      subheadline: 'We reject disposable software and generic AI templates. Every project follows a disciplined engineering progression.',
      body_text: 'By combining systematic requirements discovery, rigorous UI/UX drafting, and resilient software development, we ensure every digital asset stands the test of scale and time.',
      background_style: 'white',
      items: [
        { title: '01. Requirements & Discovery', description: 'Deconstruct organizational bottlenecks, technical dependencies, and concrete business outcomes before writing code.' },
        { title: '02. Information Architecture & Design', description: 'Formulate bespoke editorial layouts, strict typographic scales, and WCAG AA accessible component systems.' },
        { title: '03. Full-Stack Implementation', description: 'Engineer robust web applications with TypeScript, PostgreSQL row-level security, and resilient APIs.' },
        { title: '04. Verification & Refinement', description: 'Rigorous cross-device testing, performance optimization, and human content polishing before deployment.' }
      ]
    }
  },
  {
    id: 'sec-why-us',
    page_slug: 'home',
    section_type: 'why_us',
    order_index: 5,
    is_visible: true,
    config: {
      headline: 'Why JET lancer',
      subheadline: 'Technology should help produce better work without making the final result feel artificial.',
      body_text: 'While the market is flooded with automated junk and repetitive AI wrappers, JET lancer applies technology as a precision lever to amplify human judgment, taste, and reliability.',
      background_style: 'ivory',
      items: [
        { title: 'Human Taste & Editorial Rigor', description: 'Every sentence, layout, and component is vetted by human craft. We eliminate robotic AI hallmarks and awkward phrasing.' },
        { title: 'Full-Stack Technical Competence', description: 'We do not simply build static mockups. We deploy secure databases, authentication policies, and working automated pipelines.' },
        { title: 'Transparent Honest Delivery', description: 'We clearly differentiate between direct agency deliverables and external third-party API dependencies. No fake claims.' },
        { title: 'Production-Grade Performance', description: 'Sub-second load times, accessible DOM structures, and fluid responsive layouts tested across real devices.' }
      ]
    }
  },
  {
    id: 'sec-process',
    page_slug: 'home',
    section_type: 'process',
    order_index: 6,
    is_visible: true,
    config: {
      headline: 'Project Lifecycle & Delivery',
      subheadline: 'A structured, predictable working model from first consultation to post-launch stewardship.',
      primary_cta_label: 'Review Full Process',
      primary_cta_link: '/process',
      background_style: 'white',
      items: [
        { title: 'Phase 1: Project Intake & Scoping', description: 'Initial inquiry review, technical dependency mapping, and structured scope agreement.' },
        { title: 'Phase 2: Architectural Blueprinting', description: 'Wireframing, design token selection, database schema formulation, and milestone schedule.' },
        { title: 'Phase 3: Iterative Engineering', description: 'Sprint-based development with private preview links for client review at each milestone.' },
        { title: 'Phase 4: Launch & Knowledge Transfer', description: 'Domain DNS cutover, staff training documentation, and ongoing maintenance handover.' }
      ]
    }
  },
  {
    id: 'sec-faq',
    page_slug: 'home',
    section_type: 'faq',
    order_index: 7,
    is_visible: true,
    config: {
      headline: 'Frequently Asked Questions',
      subheadline: 'Direct answers about our services, AI implementations, technical stacks, and engagement terms.',
      primary_cta_label: 'View All FAQs',
      primary_cta_link: '/faq',
      background_style: 'ivory',
      items: [
        {
          title: 'What does JET lancer actually do?',
          description: 'JET lancer is a creative digital technology agency. We design and engineer high-performance websites, custom automated AI workflows, intelligent customer support agents, and refined brand content.'
        },
        {
          title: 'How do you use AI without making work feel generic?',
          description: 'Our central principle is that technology should produce better work without making the final result feel artificial. We use AI for rapid data processing, initial code drafting, and pattern discovery, but every final line of code and word of copy is edited, verified, and polished by human software engineers and editorial directors.'
        },
        {
          title: 'Are portfolio projects real clients or demonstration concepts?',
          description: 'All six portfolio projects featured in our gallery are original demonstration concepts created to transparently showcase our technical standards, design systems, and workflow methodologies without fabricating clients or fake testimonials.'
        },
        {
          title: 'What technologies do you build with?',
          description: 'We primarily engineer with React, TypeScript, Tailwind CSS, PostgreSQL, Supabase Auth and Storage, and modern Node.js cloud runtimes. We select tools based on longevity, speed, and maintainability.'
        },
        {
          title: 'How do project inquiries and pricing work?',
          description: 'Prospective clients submit project requirements through our inquiry funnel. We evaluate technical scope, timeline, and dependencies, and return a fixed-price milestone proposal within 24 business hours.'
        }
      ]
    }
  },
  {
    id: 'sec-contact-cta',
    page_slug: 'home',
    section_type: 'contact_cta',
    order_index: 8,
    is_visible: true,
    config: {
      headline: 'Ready to build something exceptional?',
      subheadline: 'Describe your requirements or schedule an exploratory architectural consultation.',
      primary_cta_label: 'Start a Project',
      primary_cta_link: '/contact',
      secondary_cta_label: 'Browse Services Directory',
      secondary_cta_link: '/services',
      background_style: 'white'
    }
  }
];
