import { createClient, PostgrestError } from "@supabase/supabase-js";
import { Database } from "@lib/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

interface SupabaseResult {
  data?: { count: number };
  error?: PostgrestError;
}

const getLoves = async (slug: string): Promise<number> => {
  const { data: loves, error }: SupabaseResult = await supabase
    .from("loves")
    .select(`count`)
    .match({ slug: slug })
    .single();
  if (error && error.details.includes(`0 rows`)) {
    const { data, error }: SupabaseResult = await supabase
      .from(`loves`)
      .insert({ slug: slug, count: 1 }, { returning: `representation` })
      .single();
    return data.count;
  }
  if (!loves) {
    return 0;
  }
  return loves.count;
};

const registerLoves = async (slug: string): Promise<void> => {
  const { data, loves, error } = await supabase
    .rpc("increment")
    .from("loves")
    .select("*")
    .insert([{ slug: slug, count: 1 }]);
};

export { getLoves, registerLoves };
