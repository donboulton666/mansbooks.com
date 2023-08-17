"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import AuthForm from "../app/auth/auth-form";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Messages from "./messages";
import type { Database } from "@/lib/database.types";
import cn from "classnames";
import styleUtils from "@components/utils.module.css";
import styles from "@components/conf-entry.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }
  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <>
      <div
        className={cn(
          styles.container,
          styleUtils.appear,
          styleUtils["appear-first"],
        )}
      >
        <h1 className={cn(styles.hero)}>Login</h1>
        <h2 className={cn(styles.description)}>
          Click Github Button to SignIn
        </h2>
        <div className={styles["form-row"]}>
          <AuthForm />
        </div>
        <Messages />
      </div>
    </>
  );
}
