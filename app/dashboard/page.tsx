// import { Button } from "@/components/ui/button/button";
import React from "react";
import { DashboardInfo } from "./component/dashboardInfo/DashboardInfo";
import { PreviouslyCreatedInterviews } from "./component/previouslyCreatedInterview/PreviouslyCreatedInterviews";

const Dashboard = async () => {
  return (
    <section className="px-5 flex flex-col">
      <DashboardInfo />
      <PreviouslyCreatedInterviews />
    </section>
  );
};

export default Dashboard;
