"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

const signinProvider = async (provider: "google") => {
  const supabase = await createClient();
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000";
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${origin}/auth/callback`,
      skipBrowserRedirect: false,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
  if (error) {
    throw new TypeError(error.message);
  }

  if (data?.url) {
    redirect(data.url);
  }
};

const googleSigninProvider = () => signinProvider("google");

export { googleSigninProvider };

export async function signup() {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
