import { createClient } from "@supabase/supabase-js";
import { Database } from "@lib/database.types";

const options = {
  auth: {
    localStorage: true,
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: true,
  },
};
const supabaseUrl = "https://gkekdfhsxwgkgstwplzb.supabase.co";
const supabaseKey = process.env.NEXT_SUPABASE_KEY;

const client = createClient<Database>(supabaseUrl, supabaseKey, options);

const supabase = () => client;

export default supabase;
