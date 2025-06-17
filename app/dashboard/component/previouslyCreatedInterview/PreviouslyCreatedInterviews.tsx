"use client";

import React from "react";
import { useDashboardStore } from "../../store";
import { useGetPreviousInterviews } from "../../queries/query";
import PreviousInterviewCard from "../previousInterviewCard/PreviousInterviewCard";
import { InterviewsEmptyView } from "./InterviewsEmptyView";
// import { InterviewsEmptyView } from "./InterviewsEmptyView";

type PreviousInterviewCardProp = {
  created_at: Date;
  job_position: string;
  duration: string;
  interview_id: string;
} | null;

export const PreviouslyCreatedInterviews: React.FC = () => {
  const email = useDashboardStore((s) => s.userData.email);
  const { data: previousInterviewList = [] } = useGetPreviousInterviews(
    email as string
  );

  return (
    <section className="mt-10 flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Previously Created Interviews</h1>
      {/* <section>
        <InterviewsEmptyView />
      </section> */}
      <section className="flex items-center gap-3 flex-wrap">
        {Array.isArray(previousInterviewList)?.length ? (
          previousInterviewList?.data?.map(
            (val: PreviousInterviewCardProp, i: number) => (
              <PreviousInterviewCard val={val} key={i} />
            )
          )
        ) : (
          <section className="flex justify-center items-center w-full">
            <InterviewsEmptyView />
          </section>
        )}
      </section>
    </section>
  );
};
