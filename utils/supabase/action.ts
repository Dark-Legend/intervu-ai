"use server";

import { redirect } from "next/navigation";
import { createClient } from "./server";

const signInWith = async (provider: "google") => {
  const supabase = await createClient();
  const URL = "http://localhost:3000/auth/callback";
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: URL,
    },
  });
  console.log(data, "DATA");
  if (error) {
    console.log(error);
  }

  redirect(data?.url);
};

export { signInWith };
