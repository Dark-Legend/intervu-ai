"use server";

import { redirect } from "next/navigation";
import { createClient } from "./server";

const signInWith = async (provider: "google") => {
  const supabase = await createClient();
  const URL = `${process.env.NEXT_PUBLIC_HOST_URL}/auth/callback`;
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: URL,
    },
  });
  if (error) {
    console.log(error);
  }

  redirect(data?.url as string);
};

export { signInWith };
