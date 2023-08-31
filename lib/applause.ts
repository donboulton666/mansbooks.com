import { PostgrestError } from "@supabase/supabase-js";
import supabase from "@lib/supabase";

interface SupabaseResult {
  data?: { count: number };
  error?: PostgrestError;
}

const getApplause = async (slug: string): Promise<number> => {
  const { data: applause, error }: SupabaseResult = await supabase
    .from("applause")
    .select("*")
    .match({ slug: slug })
    .single();
  if (error && error.details.includes(`0 rows`)) {
    const { data, error }: SupabaseResult = await supabase
      .from(`applause`)
      .insert({ slug: slug, count: 1 }, { returning: `representation` })
      .single();
    return data.count;
  }
  if (!applause) {
    return 0;
  }
  return applause.count;
};

const registerApplause = async (slug: string): Promise<void> => {
  const { data, applause, error } = await supabase
    .rpc("increment")
    .from("applause")
    .select("*")
    .insert([{ slug: slug, count: 1 }]);
};

export { getApplause, registerApplause };
