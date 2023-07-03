import { createClient } from "@supabase/supabase-js";
import { Database } from "@lib/schema";

const supabaseUrl = "https://gkekdfhsxwgkgstwplzb.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);
