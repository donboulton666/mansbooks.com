"use client";

import { useState } from "react";
import Account from "app/account/account-form";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@lib/schema";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient<Database>();

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: 'https://mansbooks.com/stage/a?role=listener',
      },
    })
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }
  return (
    <>
      <Auth
        supabaseClient={supabase}
        view="magic_link"
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        showLinks={false}
        providers={["github"]}
        redirectTo="https://mansbooks.com/stage/a?role=listener"
      />
      <form action="/auth/sign-out" method="post">
        <button className="w-full rounded-lg border border-black bg-slate-900 text-slate-300" type="submit">
          Sign out
        </button>
      </form>
      </>
  );
}
