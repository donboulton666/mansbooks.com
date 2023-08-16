"use client";

import { useCallback, useEffect, useState } from "react";
import Avatar from "./avatar";
import { Database } from "@lib/database.types";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }
  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
    });
  }

  return (
    <div className="form-widget mb-10">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session?.user.email} disabled />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() =>
            updateProfile({ fullname, username, website, avatar_url })
          }
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <form action="/sign-up" method="post">
          <button
            className="w-full border border-slate-700 bg-slate-900 text-slate-300"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
