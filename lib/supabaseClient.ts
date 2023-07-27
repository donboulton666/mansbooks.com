import { createClient } from "@supabase/supabase-js";
import { Database } from "@lib/schema";

const options = {
  auth: {
    localStorage: true,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
};

const supabaseUrl = NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const emailToIdSecret = process.env.EMAIL_TO_ID_SECRET;
const supabase = createClient<Database>(
  supabaseUrl,
  supabaseKey,
  emailToIdSecret,
  options
);
