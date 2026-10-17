-- JET LANCER PRODUCTION DATABASE SCHEMA & ROW LEVEL SECURITY
-- Generated for Supabase Project: https://jwtflpmdeasmtkqeqwgb.supabase.co
-- Compatible with PostgreSQL 15+ and Supabase Auth

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES TABLE (Linked with Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  company TEXT,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'registered', 'admin', 'owner')),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. PORTFOLIO PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.portfolio_projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  tagline TEXT,
  category TEXT NOT NULL,
  access_level TEXT NOT NULL DEFAULT 'PUBLIC_PREVIEW' CHECK (access_level IN ('PUBLIC_PREVIEW', 'REGISTERED', 'PRIVATE')),
  cover_image TEXT,
  summary TEXT NOT NULL,
  client_type TEXT,
  year TEXT,
  tags TEXT[] DEFAULT '{}',
  live_url TEXT,
  overview TEXT,
  challenge TEXT,
  solution TEXT,
  key_deliverables JSONB DEFAULT '[]'::jsonb,
  architecture_notes TEXT,
  results_concept TEXT,
  interactive_type TEXT, -- e.g. 'agency_showcase', 'landing_preview', 'video_storyboard', 'automation_flow', 'support_console', 'editorial_diff'
  order_index INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PORTFOLIO MEDIA TABLE
CREATE TABLE IF NOT EXISTS public.portfolio_media (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  project_id UUID REFERENCES public.portfolio_projects(id) ON DELETE CASCADE,
  media_url TEXT NOT NULL,
  media_type TEXT DEFAULT 'image' CHECK (media_type IN ('image', 'video', 'document')),
  caption TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. SERVICES TABLE (84 capabilities organized by category)
CREATE TABLE IF NOT EXISTS public.services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  category_code TEXT NOT NULL CHECK (category_code IN ('A', 'B', 'C', 'D', 'E')),
  category_name TEXT NOT NULL,
  service_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT,
  problem_statement TEXT,
  use_cases TEXT[] DEFAULT '{}',
  deliverables TEXT[] DEFAULT '{}',
  process_steps TEXT[] DEFAULT '{}',
  external_dependencies TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. SITE PAGES & SECTIONS (For Visual Website Builder)
CREATE TABLE IF NOT EXISTS public.site_pages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  meta_description TEXT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.site_sections (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  page_slug TEXT NOT NULL,
  section_type TEXT NOT NULL, -- 'hero', 'services', 'featured_work', 'approach', 'why_us', 'process', 'faq', 'contact_cta', 'custom_text'
  order_index INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  config JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. CONTACT INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service_slug TEXT,
  budget_range TEXT,
  timeline TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'replied', 'archived')),
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. SITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.site_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Helper function to check if current user is owner/admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'owner')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Profiles: Users can read & update their own profile; admins can read all
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id OR public.is_admin());

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Portfolio Projects:
-- 1. Public can view published projects marked PUBLIC_PREVIEW
CREATE POLICY "Public preview of projects"
  ON public.portfolio_projects FOR SELECT
  USING (is_published = true AND access_level = 'PUBLIC_PREVIEW');

-- 2. Registered users can view projects marked PUBLIC_PREVIEW or REGISTERED
CREATE POLICY "Registered users can view portfolio"
  ON public.portfolio_projects FOR SELECT
  TO authenticated
  USING (is_published = true AND access_level IN ('PUBLIC_PREVIEW', 'REGISTERED'));

-- 3. Owner/admin full access
CREATE POLICY "Admin full access to portfolio"
  ON public.portfolio_projects FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Services: Public can read published services; admins manage all
CREATE POLICY "Public can view published services"
  ON public.services FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admin full access to services"
  ON public.services FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Site Pages & Sections: Public read, Admin manage
CREATE POLICY "Public can view published pages"
  ON public.site_pages FOR SELECT
  USING (is_published = true);

CREATE POLICY "Public can view site sections"
  ON public.site_sections FOR SELECT
  USING (is_visible = true);

CREATE POLICY "Admin manage pages"
  ON public.site_pages FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Admin manage sections"
  ON public.site_sections FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Contact Inquiries: Anyone can insert an inquiry; only admins can view and manage
CREATE POLICY "Anyone can create inquiry"
  ON public.contact_inquiries FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admin manage inquiries"
  ON public.contact_inquiries FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Site Settings: Public can read; Admins can update
CREATE POLICY "Public can view settings"
  ON public.site_settings FOR SELECT
  USING (true);

CREATE POLICY "Admin manage settings"
  ON public.site_settings FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());
