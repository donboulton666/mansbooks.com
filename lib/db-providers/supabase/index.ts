import { NextApiRequest, NextApiResponse } from "next";
import { ConfUser } from "@lib/types";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/schema";

const options = {
  auth: {
    localStorage: true,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
};

const supabase =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_KEY &&
  process.env.EMAIL_TO_ID_SECRET
    ? createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_KEY,
        options
      )
    : undefined;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const allOnlineUsers = await supabase
    .from("users")
    .select("*")
    .eq("status", "ONLINE");
  res.status(200).json(allOnlineUsers);
};

export async function getUserByUsername(username: string): Promise<ConfUser> {
  const { data } = await supabase
    .from<ConfUser>("users")
    .select("name, ticketNumber")
    .eq("username", username)
    .single();

  return data ?? {};
}

export async function getUserById(id: string): Promise<ConfUser> {
  const { data, error } = await supabase
    .from<ConfUser>("users")
    .select("name, username, createdAt")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);

  return data ?? {};
}

export async function createUser(id: string, email: string): Promise<ConfUser> {
  const { data, error } = await supabase
    .from<ConfUser>("users")
    .insert({ id, email })
    .single();
  if (error) throw new Error(error.message);

  return data ?? {};
}

export async function getTicketNumberByUserId(
  id: string
): Promise<string | null> {
  const { data } = await supabase
    .from<ConfUser>("users")
    .select("ticketNumber")
    .eq("id", id)
    .single();

  return data?.ticketNumber!.toString() ?? null;
}

export async function createGitHubUser(user: any): Promise<string> {
  const { data, error } = await supabase
    .from("github_users")
    .insert({ userData: user })
    .single();
  if (error) throw new Error(error.message);

  return data.id;
}

export async function updateUserWithGitHubUser(
  id: string,
  token: string
): Promise<ConfUser> {
  const { data } = await supabase
    .from("github_users")
    .select("userData")
    .eq("id", token)
    .single();
  const { login: username, name } = data?.userData;
  if (!username) {
    throw new Error("Invalid or expired token");
  }

  const { error } = await supabase
    .from<ConfUser>("users")
    .update({ username, name })
    .eq("id", id)
    .single();
  if (error) console.log(error.message);

  return { username, name };
}
