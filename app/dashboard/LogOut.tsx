"use client";

import { Button } from "@/components/ui/button/button";
import { createClient } from "@/utils/supabase/client";
import React from "react";

const LogOut = () => {
  const handleLogOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
  };
  return <Button onClick={handleLogOut}>Logout</Button>;
};

export default LogOut;
