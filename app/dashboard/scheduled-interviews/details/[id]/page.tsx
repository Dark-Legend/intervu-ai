"use client";

import { useParams } from "next/navigation";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card/card";
import { Calendar, Clock, Tag } from "lucide-react";
import { format } from "date-fns";
import { useGetScheduledInterviewDetail } from "../../query/query";
import { useDashboardStore } from "@/app/dashboard/store";
import CandidateDetail from "./components/candidate-detail/CandidateDetail";

const ScheduledInterviewDetails = () => {
  const { id } = useParams();
  const { email } = useDashboardStore((s) => s.userData);
  const { data: getInterviewData } = useGetScheduledInterviewDetail(email, id);
  return (
    <section className="flex flex-col gap-5 p-5 w-full">
      <h1 className="font-semibold text-2xl">Interview Details</h1>
      <Card>
        <CardHeader className="font-bold text-xl">
          {getInterviewData?.[0]?.job_position}
        </CardHeader>
        <CardContent>
          <section className="flex flex-col gap-5">
            <section className="flex items-center justify-between">
              <div>
                <p className="text-base text-black/50">Duration</p>
                <p className="text-sm sm:text-lg font-semibold flex items-center gap-1">
                  <Clock size={15} />
                  {getInterviewData?.[0]?.duration}
                </p>
              </div>
              <div>
                <p className="text-base text-black/50">Created On</p>
                <p className="text-sm sm:text-lg font-semibold flex items-center gap-1">
                  <Calendar size={15} />
                  {getInterviewData?.[0]?.created_at &&
                    format(getInterviewData?.[0]?.created_at, "MM dd, yyyy")}
                </p>
              </div>
              <div>
                <p className="text-base text-black/50">Created On</p>
                <p className="text-sm sm:text-lg font-semibold flex items-center gap-1">
                  <Tag size={15} />
                  {getInterviewData?.[0]?.type &&
                    JSON.parse(getInterviewData?.[0]?.type)?.[0]}
                </p>
              </div>
            </section>
            <section className="flex flex-col gap-3">
              <h1 className="font-bold text-xl">Job Description</h1>
              <p className="text-black/60">
                {getInterviewData?.[0]?.job_description}
              </p>
            </section>
            <section className="flex flex-col gap-3">
              <h1 className="font-bold text-xl">Interview Questions</h1>
              <div className="h-80 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {getInterviewData?.[0]?.questions_list?.map((q, i) => (
                  <p className="flex items-center text-black/60" key={i}>
                    {i + 1} {q?.question}
                  </p>
                ))}
              </div>
            </section>
          </section>
        </CardContent>
      </Card>
      <CandidateDetail candidateList={getInterviewData} />
    </section>
  );
};

export default ScheduledInterviewDetails;
