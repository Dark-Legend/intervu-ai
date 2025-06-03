"use client";

import React from "react";
import { Button } from "@/components/ui/button/button";
import { LogIn } from "lucide-react";
import { signInWith } from "@/utils/supabase/action";

export const Login: React.FC = () => {
  return (
    <form>
      <Button
        formAction={() => signInWith("google")}
        className="bg-black border-none outline-none px-6 sm:px-10 flex items-center gap-1.5"
      >
        <LogIn />
        Login
      </Button>
    </form>
  );
};
