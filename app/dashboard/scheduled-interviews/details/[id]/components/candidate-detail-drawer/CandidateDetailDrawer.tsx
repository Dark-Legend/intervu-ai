import React from "react";
import { Button } from "@/components/ui/button/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/dialog";
import { ArrowDownLeftFromSquare } from "lucide-react";
import { Progress } from "@/components/ui/progress/progress";
import { cn } from "@/lib/utils";

type CandidateDetailDrawerProp = {
  candidateDetail: unknown;
};

const CandidateDetailDrawer: React.FC<CandidateDetailDrawerProp> = ({
  candidateDetail,
}) => {
  console.log(candidateDetail);
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          View Report <ArrowDownLeftFromSquare />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-5">
        <DialogHeader>
          <DialogTitle>
            <section className="flex justify-start items-center gap-2">
              <div className="w-14 h-14  text-white flex justify-center items-center font-normal rounded-full bg-emerald-700">
                {candidateDetail?.user_name?.[0]}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm sm:text-large">
                  {candidateDetail?.user_name}
                </p>
                <p className="text-black/50 text-xs sm:text-base">
                  {candidateDetail?.user_email}
                </p>
              </div>
            </section>
          </DialogTitle>
        </DialogHeader>
        <section className="mt-5 flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">Skill Assessment</h1>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <p>Experience</p>
                <p>
                  {candidateDetail?.feedback?.feedback?.rating?.experience}/10
                </p>
              </div>
              <Progress
                value={
                  candidateDetail?.feedback?.feedback?.rating?.experience * 10
                }
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <p>Communication</p>
                <p>
                  {candidateDetail?.feedback?.feedback?.rating?.communication}
                  /10
                </p>
              </div>
              <Progress
                value={
                  candidateDetail?.feedback?.feedback?.rating?.communication *
                  10
                }
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <p>Problem Solving</p>
                <p>
                  {candidateDetail?.feedback?.feedback?.rating?.problemSolving}
                  /10
                </p>
              </div>
              <Progress
                value={
                  candidateDetail?.feedback?.feedback?.rating?.problemSolving *
                  10
                }
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <p>Technical Skills</p>
                <p>
                  {candidateDetail?.feedback?.feedback?.rating?.technicalSkills}
                  /10
                </p>
              </div>
              <Progress
                value={
                  candidateDetail?.feedback?.feedback?.rating?.technicalSkills *
                  10
                }
              />
            </div>
          </section>
          <section className="flex flex-col gap-2">
            <p className="font-semibold text-2xl text-black">
              Performance Feedback
            </p>
            <div className="bg-gray-200 text-black/70 p-3 rounded-lg">
              {candidateDetail?.feedback?.feedback?.summary}
            </div>
          </section>
          <section
            className={cn(
              "flex flex-col p-3 rounded-lg",
              candidateDetail?.feedback?.feedback?.Recommendation ===
                "Do Not Recommend"
                ? "bg-red-100 text-red-500"
                : "bg-green-100 text-green-500"
            )}
          >
            <p className="font-semibold text-2xl">Recommendation</p>
            <p>{candidateDetail?.feedback?.feedback?.RecommendationMsg}</p>
          </section>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default CandidateDetailDrawer;
