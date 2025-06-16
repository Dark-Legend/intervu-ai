"use client";

import React from "react";
import { MoveLeft } from "lucide-react";
import InterviewForm from "../interviewForm/InterviewForm";
import { Progress } from "@/components/ui/progress/progress";
import InterviewQuestions from "../interviewQuestions/InterviewQuestions";
import InterviewLinkGenerate from "../interviewLinkGenerate/InterviewLinkGenerate";
import { setDashboardStore, useDashboardStore } from "@/app/dashboard/store";

const BackInterview: React.FC = () => {
  const steps = useDashboardStore((s) => s.step);
  const handleFormData = (key: string, value: string | string[]) => {
    setDashboardStore((prev) => ({
      ...prev,
      formData: {
        ...prev.formData,
        [key]: value,
      },
    }));
  };
  const handleNextStep = () => {
    setDashboardStore((state) => {
      state.step += 1;
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <section className="flex flex-col items-center justify-center gap-3 md:w-2xl">
        <div className="w-full flex justify-start cursor-pointer items-center gap-2">
          <MoveLeft
            onClick={() => {
              if (steps > 1) {
                handleNextStep();
              }
            }}
          />
          <h1 className="font-semibold">Create New Interview</h1>
        </div>

        <Progress value={steps * 33.33} />

        {steps === 1 && (
          <InterviewForm
            onChangeHandler={handleFormData}
            onStepHandler={handleNextStep}
          />
        )}

        {steps === 2 && (
          <section className="flex justify-center items-center">
            <InterviewQuestions onStepHandler={handleNextStep} />
          </section>
        )}
        {steps === 3 && <InterviewLinkGenerate />}
      </section>
    </div>
  );
};

export default BackInterview;
