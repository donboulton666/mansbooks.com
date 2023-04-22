import { createContext, useEffect, useState } from "react";
import { Database } from "@lib/schema";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
export const UserContext = createContext({});

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export function UserContextProvider({ children }) {
  const session = useSession();
  const supabase = useSupabaseClient<Database>();
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id)
      .then((result) => {
        setProfile(result.data?.[0]);
      });
  }, [session?.user?.id]);
  return (
    <UserContext.Provider value={{ profile }}>{children}</UserContext.Provider>
  );
}
