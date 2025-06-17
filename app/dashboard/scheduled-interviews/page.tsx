"use client";

import React from "react";
import { useDashboardStore } from "../store";
import { useGetScheduledInterviews } from "./query/query";
import PreviousInterviewCard from "../component/previousInterviewCard/PreviousInterviewCard";

type PreviousInterviewCardProps = {
  created_at: Date;
  job_position: string;
  duration: string;
  interview_id: string;
  viewDetails?: boolean;
};

const ScheduledInterview = () => {
  const { email } = useDashboardStore((s) => s.userData);
  const { data: scheduledInterviews } = useGetScheduledInterviews(
    email as string
  );
  return (
    <section className="p-5 flex flex-col gap-3">
      <h1 className="text-black text-3xl font-semibold">
        Scheduled Interviews
      </h1>
      <section className="flex items-center gap-3 flex-wrap">
        {scheduledInterviews?.data?.map(
          (val: PreviousInterviewCardProps, i: number) => (
            <PreviousInterviewCard val={val} key={i} viewDetails={true} />
          )
        )}
      </section>
    </section>
  );
};

export default ScheduledInterview;
