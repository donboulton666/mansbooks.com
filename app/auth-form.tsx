"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@lib/database.types";

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>({
    isSingleton: false,
  });

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

  async function signInWithSpotify() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "spotify",
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }
  return (
    <div className="auth-widget">
      <Auth
        supabaseClient={supabase}
        view="magic_link"
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["google", "spotify"]}
        redirectTo="/user-account"
      />
    </div>
  );
}
