"use client";

import React from "react";
import { useDashboardStore } from "../store";
import { useGetPreviousInterviews } from "../queries/query";
import PreviousInterviewCard from "../component/previousInterviewCard/PreviousInterviewCard";

const AllInterviews = () => {
  const email = useDashboardStore((s) => s.userData.email);
  const { data: previousInterviewList = [] } = useGetPreviousInterviews(email);
  return (
    <section className="flex items-start gap-8 p-5 flex-col">
      <h1 className="text-3xl text-black font-semibold">All Interviews</h1>
      <section className="flex items-center gap-3">
        {previousInterviewList?.data?.map((val: unknown, i: number) => (
          <PreviousInterviewCard val={val} key={i} />
        ))}
      </section>
    </section>
  );
};

export default AllInterviews;
