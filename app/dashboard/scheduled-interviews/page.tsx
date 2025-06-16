"use client";

import React from "react";
import { useDashboardStore } from "../store";
import { useGetScheduledInterviews } from "./query/query";
import PreviousInterviewCard from "../component/previousInterviewCard/PreviousInterviewCard";

const ScheduledInterview = () => {
  const { email } = useDashboardStore((s) => s.userData);
  const { data: scheduledInterviews } = useGetScheduledInterviews(
    email as string
  );
  console.log(scheduledInterviews, "DATA");
  return (
    <section className="p-5 flex flex-col gap-3">
      <h1 className="text-black text-3xl font-semibold">
        Scheduled Interviews
      </h1>
      <section className="flex items-center gap-3 flex-wrap">
        {scheduledInterviews?.data?.map((val, i) => (
          <PreviousInterviewCard val={val} key={i} viewDetails={true} />
        ))}
      </section>
    </section>
  );
};

export default ScheduledInterview;
