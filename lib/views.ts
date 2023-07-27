import { createClient, PostgrestError } from "@supabase/supabase-js";
import { Database } from "@lib/schema";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

interface SupabaseResult {
  data?: { count: number };
  error?: PostgrestError;
}

const getViews = async (slug: string): Promise<number> => {
  const { data: views, error }: SupabaseResult = await supabase
    .from("views")
    .select(`count`)
    .match({ slug: slug })
    .single();
  if (error && error.details.includes(`0 rows`)) {
    const { data, error }: SupabaseResult = await supabase
      .from(`views`)
      .insert({ slug: slug, count: 1 }, { returning: `representation` })
      .single();
    return data.count;
  }
  if (!views) {
    return 0;
  }
  return views.count;
};
///
const registerView = async (slug: string): Promise<void> => {
  const { data, error } = await supabase.rpc("increment", {
    slug_text: slug,
  });
};
export { getViews, registerView };
