import { createContext, useEffect, useState } from "react";
import { Database } from "@lib/database.types";
import { useSession } from "@supabase/auth-helpers-react";
import supabase from "@lib/supabase";

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const session = useSession();
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
