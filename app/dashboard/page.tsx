// import { Button } from "@/components/ui/button/button";
import React from "react";
import { createClient } from "@/utils/supabase/server";
import { DashboardInfo } from "./component/dashboardInfo/DashboardInfo";
import { PreviouslyCreatedInterviews } from "./component/previouslyCreatedInterview/PreviouslyCreatedInterviews";

const Dashboard = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <section className="px-5 flex flex-col">
      <DashboardInfo />
      <PreviouslyCreatedInterviews />
    </section>
  );
};

export default Dashboard;
