import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 
  import.meta.env.VITE_SUPABASE_URL || 'https://jwtflpmdeasmtkqeqwgb.supabase.co';

export const SUPABASE_ANON_KEY = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabaseInstance: SupabaseClient | null = null;

if (SUPABASE_URL && SUPABASE_ANON_KEY) {
  try {
    supabaseInstance = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      }
    });
  } catch (err) {
    console.warn('Supabase client initialization note:', err);
  }
}

export const supabase = supabaseInstance;

export function isSupabaseConnected(): boolean {
  return !!supabaseInstance && !!SUPABASE_ANON_KEY;
}
