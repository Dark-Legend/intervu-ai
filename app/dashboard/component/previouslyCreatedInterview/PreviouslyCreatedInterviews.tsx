"use client";

import React from "react";
import { useDashboardStore } from "../../store";
import { useGetPreviousInterviews } from "../../queries/query";
import PreviousInterviewCard from "../previousInterviewCard/PreviousInterviewCard";
// import { InterviewsEmptyView } from "./InterviewsEmptyView";

export const PreviouslyCreatedInterviews: React.FC = () => {
  const email = useDashboardStore((s) => s.userData.email);
  const { data: previousInterviewList = [] } = useGetPreviousInterviews(email);

  return (
    <section className="mt-10 flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Previously Created Interviews</h1>
      {/* <section>
        <InterviewsEmptyView />
      </section> */}
      <section className="flex items-center gap-3 flex-wrap">
        {previousInterviewList?.data?.map((val, i) => (
          <PreviousInterviewCard val={val} key={i} />
        ))}
      </section>
    </section>
  );
};
