import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/lib/database.types";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function Page() {
  const cookieStore = cookies();

  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const { data } = await supabase.from("todos").select();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
