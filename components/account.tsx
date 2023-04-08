import { useState, useEffect } from "react";
import {
  useUser,
  useSupabaseClient,
  Session,
} from "@supabase/auth-helpers-react";
import { Database } from "../lib/schema";
import Avatar from "./avatar";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function Account({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<Profiles["username"]>(null);
  const [website, setWebsite] = useState<Profiles["website"]>(null);
  const [avatar_url, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: Profiles["username"];
    website: Profiles["website"];
    avatar_url: Profiles["avatar_url"];
  }) {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  }

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  async function signInWithSlack() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "slack",
    });
  }

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: process.env.NEXT_PUBLIC_ADMIN_EMAILS,
      password: process.env.ADMIN_PASSWORD,
    });
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <div className="form-widget ml-8">
      <div className="col-span-6">
        <label
          htmlFor="email"
          className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300"
        >
          Email
        </label>
        <input
          className="mb-3 w-28 appearance-none rounded border-slate-800 bg-slate-900 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-300 focus:border-blue-400 focus:outline-none focus:ring-blue-300 sm:text-sm"
          id="email"
          type="text"
          value={session.user.email}
          disabled
        />
      </div>
      <div className="col-span-6">
        <label
          htmlFor="username"
          className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300"
        >
          Username
        </label>
        <input
          className="mb-3 w-28 appearance-none rounded border-slate-800 bg-slate-900 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-300 focus:border-blue-400 focus:outline-none focus:ring-blue-300 sm:text-sm"
          id="username"
          type="text"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="col-span-6">
        <label
          htmlFor="website"
          className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300"
        >
          Website
        </label>
        <input
          className="mb-3 w-28 appearance-none rounded border-slate-800 bg-slate-900 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-300 focus:border-blue-400 focus:outline-none focus:ring-blue-300 sm:text-sm"
          id="website"
          type="website"
          value={website || ""}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <button
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
      <Avatar
        uid={user.id}
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url);
          updateProfile({ username, website, avatar_url: url });
        }}
      />
    </div>
  );
}
