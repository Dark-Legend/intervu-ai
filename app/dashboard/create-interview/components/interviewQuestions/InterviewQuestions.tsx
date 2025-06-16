"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card/card";
import Loader from "@/app/components/loader/Loader";
import { Button } from "@/components/ui/button/button";
import { useCreateInterview } from "@/app/dashboard/queries/mutation";
import { setDashboardStore, useDashboardStore } from "@/app/dashboard/store";
import { v4 as uuidv4 } from "uuid";

const GeneratedQuestionsCard = ({ question, types }) => (
  <Card className="w-full rounded-lg">
    <CardContent className="flex flex-col gap-3">
      <p className="font-medium">{question}</p>
      <p className="text-emerald-400">Type: {types}</p>
    </CardContent>
  </Card>
);

const InterviewQuestions: React.FC = ({ onStepHandler }) => {
  const { interviewQuestions, jobDescription, jobPosition, type, duration } =
    useDashboardStore((s) => s.formData);
  const email = useDashboardStore((s) => s.userData.email);
  const { mutate: createInterviewMutation, isPending } = useCreateInterview();

  const handleCreateInterview = () => {
    const payload = {
      jobPosition,
      jobDescription,
      type,
      duration,
      interviewQuestions,
      interviewId: uuidv4(),
      email,
    };
    createInterviewMutation(payload, {
      onSuccess: () => {
        setDashboardStore((s) => ({
          ...s,
          formData: {
            ...s.formData,
            interviewId: payload?.interviewId,
          },
        }));
        onStepHandler();
      },
    });
  };
  return (
    <section>
      {/* <InterviewQuestionLoading /> */}
      <section className="flex justify-center items-center flex-col mt-3 gap-5">
        <h1 className="font-semibold text-2xl w-full text-left">
          Generated Interview Questions
        </h1>
        <section className="flex justify-center items-center flex-wrap max-h-[500px] overflow-auto gap-3 border border-solid border-gray-200 rounded-lg p-5">
          {interviewQuestions?.map((interview, i) => (
            <GeneratedQuestionsCard
              key={i}
              question={interview?.question}
              types={interview?.type}
            />
          ))}
        </section>
        <div className="flex justify-end w-full mt-3">
          <Button
            className="h-11 flex items-center gap-3"
            onClick={handleCreateInterview}
            disabled={isPending}
          >
            {isPending && <Loader />}
            You're Almost Done — Create Interview Link
          </Button>
        </div>
      </section>
    </section>
  );
};

export default InterviewQuestions;
