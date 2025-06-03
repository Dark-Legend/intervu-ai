// import { Button } from "@/components/ui/button/button";
import { createClient } from "@/utils/supabase/server";
import React from "react";
import LogOut from "./LogOut";

const Dashboard = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  console.log(data);
  return (
    <div>
      Dashboard
      <LogOut />
    </div>
  );
};

export default Dashboard;
