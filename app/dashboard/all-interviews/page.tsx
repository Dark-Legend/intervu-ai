"use client";

import React from "react";
import { useDashboardStore } from "../store";
import { useGetPreviousInterviews } from "../queries/query";
import PreviousInterviewCard from "../component/previousInterviewCard/PreviousInterviewCard";
import { InterviewsEmptyView } from "../component/previouslyCreatedInterview/InterviewsEmptyView";

type PreviousInterviewListValue = {
  created_at: Date;
  job_position: string;
  duration: string;
  interview_id: string;
} | null;

const AllInterviews = () => {
  const email = useDashboardStore((s) => s.userData.email);
  const { data: previousInterviewList = [] } = useGetPreviousInterviews(
    email as string
  );
  return (
    <section className="flex items-start gap-8 p-5 flex-col">
      <h1 className="text-3xl text-black font-semibold">All Interviews</h1>
      <section className="flex items-center gap-3 w-full">
        {Array.isArray(previousInterviewList)?.length ? (
          previousInterviewList?.data?.map(
            (val: PreviousInterviewListValue, i: number) => (
              <PreviousInterviewCard val={val} key={i} />
            )
          )
        ) : (
          <section className="flex justify-center items-center w-full mt-10">
            <InterviewsEmptyView />
          </section>
        )}
      </section>
    </section>
  );
};

export default AllInterviews;
