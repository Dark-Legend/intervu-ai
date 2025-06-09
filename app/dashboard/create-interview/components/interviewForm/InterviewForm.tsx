"use client";

import React, { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent } from "@/components/ui/card/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { INTERVIEW_TYPE_LIST } from "./constant";
import { cn } from "@/lib/utils";
import { useGetQuestions } from "@/app/dashboard/queries/mutation";
import { setDashboardStore, useDashboardStore } from "@/app/dashboard/store";
import Loader from "@/app/components/loader/Loader";

type InterviewFormProps = {
  onChangeHandler: (key: string, value: string | string[]) => void;
  onStepHandler: () => void;
};

const InterviewForm: React.FC<InterviewFormProps> = ({ onStepHandler }) => {
  const { jobDescription, jobPosition, type, duration } = useDashboardStore(
    (s) => s.formData
  );
  const { mutate: getQuestionMutations, isPending } = useGetQuestions();

  const handleOnChange = (key: string, value: string) => {
    setDashboardStore((state) => {
      if (key === "type") {
        const currentTypes = state.formData["type"] || [];
        const alreadySelected = currentTypes.includes(value);

        const updatedTypes = alreadySelected
          ? currentTypes.filter((val) => val !== value)
          : [...currentTypes, value];

        state.formData = {
          ...state.formData,
          type: updatedTypes,
        };
      } else {
        state.formData = {
          ...state.formData,
          [key]: value,
        };
      }
    });
  };

  const handleQuestionMutation = (e) => {
    e?.preventDefault();

    const payload = {
      jobPosition,
      jobDescription,
      type,
      duration,
    };
    getQuestionMutations(payload, {
      onSuccess: (data) => {
        const parsedData = JSON.parse(data)?.interviewQuestions;
        console.log(parsedData, data, "DATA");
        setDashboardStore((state) => ({
          ...state,
          formData: {
            ...state.formData,
            interviewQuestions: parsedData,
          },
        }));
        onStepHandler();
      },
    });
  };

  const LOADING_TEXT = "Hang tight! Smart questions are on their way...";
  return (
    <Card className="w-full">
      <CardContent>
        <form className="flex flex-col gap-5" onSubmit={handleQuestionMutation}>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Job Position</p>
            <Input
              value={jobPosition}
              placeholder="e.g Frontend Developer"
              onChange={(e) => handleOnChange("jobPosition", e?.target?.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Job Description</p>
            <Textarea
              value={jobDescription}
              className="h-44"
              placeholder="Enter job description"
              rows={6}
              cols={50}
              onChange={(e) =>
                handleOnChange("jobDescription", e?.target?.value)
              }
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Interview Question</p>
            <Select
              onValueChange={(e) => handleOnChange("duration", e)}
              value={duration}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Duration" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectGroup>
                  <SelectItem value="5 Minutes">5 Minutes</SelectItem>
                  <SelectItem value="15 Minutes">15 Minutes</SelectItem>
                  <SelectItem value="30 Minutes">30 Minutes</SelectItem>
                  <SelectItem value="45 Minutes">45 Minutes</SelectItem>
                  <SelectItem value="60 Minutes">60 Minutes</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="font-semibold">Interview Type</p>
            <section className="flex items-center gap-2 flex-wrap mt-2">
              {INTERVIEW_TYPE_LIST?.map((item) => (
                <div
                  key={item?.name}
                  onClick={() => {
                    handleOnChange("type", item?.name);
                  }}
                  className={cn(
                    " flex items-center gap-1 border border-solid border-emerald-600 p-2 rounded-4xl text-sm hover:bg-gray-100/60 cursor-pointer",
                    type?.includes(item?.name) &&
                      "text-emerald-600 font-semibold"
                  )}
                >
                  <item.icon size={15} className="text-emerald-600" />
                  {item?.name}
                </div>
              ))}
            </section>
          </div>
          <div className="flex justify-end items-center mt-5 gap-5">
            {isPending && (
              <p className="text-black/30 font-medium">{LOADING_TEXT}</p>
            )}
            <Button type="submit" disabled={isPending}>
              {isPending && <Loader />}
              Generate Questions <ArrowRight />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default InterviewForm;
