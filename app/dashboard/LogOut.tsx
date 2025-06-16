"use client";

import { Button } from "@/components/ui/button/button";
import { createClient } from "@/utils/supabase/client";
import { LogOut } from "lucide-react";
import React from "react";

const Logout = () => {
  const handleLogOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.reload();
  };
  return (
    <Button onClick={handleLogOut} className="flex items-center gap-3">
      {" "}
      <LogOut />
      Logout
    </Button>
  );
};

export default Logout;
