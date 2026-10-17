export type UserRole = 'user' | 'registered' | 'admin' | 'owner';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  company?: string;
  role: UserRole;
  avatar_url?: string;
  created_at: string;
}

export type AccessLevel = 'PUBLIC_PREVIEW' | 'REGISTERED' | 'PRIVATE';

export interface PortfolioDeliverable {
  title: string;
  description: string;
  format?: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  access_level: AccessLevel;
  cover_image: string;
  summary: string;
  client_type: string;
  year: string;
  tags: string[];
  live_url?: string;
  overview: string;
  challenge: string;
  solution: string;
  key_deliverables: PortfolioDeliverable[];
  architecture_notes?: string;
  results_concept?: string;
  interactive_type: 'agency_showcase' | 'landing_preview' | 'video_storyboard' | 'automation_flow' | 'support_console' | 'editorial_diff';
  order_index: number;
  is_published: boolean;
  created_at?: string;
}

export type ServiceCategoryCode = 'A' | 'B' | 'C' | 'D' | 'E';

export interface ServiceCategory {
  code: ServiceCategoryCode;
  name: string;
  short_title: string;
  description: string;
  count: number;
}

export interface ServiceItem {
  id: string;
  slug: string;
  service_number: number;
  category_code: ServiceCategoryCode;
  category_name: string;
  title: string;
  short_description: string;
  full_description: string;
  problem_statement: string;
  use_cases: string[];
  deliverables: string[];
  process_steps: string[];
  external_dependencies?: string;
  is_featured: boolean;
  is_published: boolean;
  order_index: number;
}

export type InquiryStatus = 'new' | 'reviewed' | 'replied' | 'archived';

export interface ContactInquiry {
  id: string;
  full_name: string;
  email: string;
  company?: string;
  service_slug?: string;
  budget_range?: string;
  timeline?: string;
  message: string;
  status: InquiryStatus;
  admin_notes?: string;
  created_at: string;
}

export type SectionType = 
  | 'hero' 
  | 'services' 
  | 'featured_work' 
  | 'approach' 
  | 'why_us' 
  | 'process' 
  | 'faq' 
  | 'contact_cta' 
  | 'custom_text'
  | 'metric_strip';

export interface SectionConfig {
  headline?: string;
  subheadline?: string;
  body_text?: string;
  primary_cta_label?: string;
  primary_cta_link?: string;
  secondary_cta_label?: string;
  secondary_cta_link?: string;
  background_style?: 'ivory' | 'white' | 'dark_navy' | 'subtle_bordered';
  image_url?: string;
  image_caption?: string;
  display_count?: number;
  layout_variant?: 'split' | 'centered' | 'grid' | 'editorial';
  items?: Array<{
    title: string;
    description: string;
    tag?: string;
  }>;
}

export interface SiteSection {
  id: string;
  page_slug: string;
  section_type: SectionType;
  order_index: number;
  is_visible: boolean;
  config: SectionConfig;
}

export interface SiteSettings {
  brand_name: string;
  tagline: string;
  contact_email: string;
  contact_phone: string;
  contact_address: string;
  business_hours: string;
  response_time: string;
  twitter_url: string;
  linkedin_url: string;
  github_url: string;
  announcement_enabled: boolean;
  announcement_text: string;
  announcement_link: string;
}

export type DeviceViewport = 'desktop' | 'tablet' | 'mobile';
