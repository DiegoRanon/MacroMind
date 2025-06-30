// This file sets up the Supabase client for database operations

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client - replace with actual values in production
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "your-supabase-url";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-supabase-key";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
