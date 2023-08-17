"use client";

import { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import Account from "@app/account/account";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@lib/schema";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient<Database>();
  const session = useSession();
  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: "donaldboulton@gmail.com",
      options: {
        emailRedirectTo: "https://mansbooks.com/auth/callback",
      },
    });
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }
  return (
    <>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["github"]}
          theme="dark"
        />
      ) : (
        <>
          <Account session={session} />
        </>
      )}
    </>
  );
}
