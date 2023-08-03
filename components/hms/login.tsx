import { useState, useEffect } from "react";
import {
  useUser,
  useSupabaseClient,
  Session,
} from "@supabase/auth-helpers-react";
import { Database } from "@lib/schema";
import styleUtils from "@components/utils.module.css";
import styles from "@components/form.module.css";

export default function Login({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

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

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({
        provider: "github",
      });
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn(styles.form, {
        [styles["share-page"]]: sharePage,
      })}
    >
      <div className={styles["form-row"]}>
        <p className="mb-4">Sign in via magic link with your email below</p>
        <input
          className={styles.input}
          type="email"
          placeholder="Your email"
          value={email}
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleLogin(email);
          }}
          disabled={loading}
          className="mt-4 w-full rounded-lg border-slate-800 bg-slate-900 p-2 pl-5 pr-5 text-lg text-slate-300 focus:border-4"
        >
          <span>{loading ? "Sending the link" : "Send magic link"}</span>
        </button>
        <p className="mt-4 text-center">or</p>
        <button
          className="mt-4 rounded-lg border-blue-300 bg-blue-500 p-2 pl-5 pr-5 text-lg text-gray-100 focus:border-4"
          onClick={() => handleGitHubLogin()}
          disabled={loading}
        >
          {loading ? "Logging in" : "Login with GitHub"}
        </button>
      </div>
    </div>
  );
}
