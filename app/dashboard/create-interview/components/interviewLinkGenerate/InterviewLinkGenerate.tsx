import React from "react";
import {
  CircleCheckBig,
  Clock,
  CopyIcon,
  Logs,
  MoveLeft,
  Plus,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button/button";
import { SHARE_LIST } from "./constant";
import { resetDashboardStore, useDashboardStore } from "@/app/dashboard/store";
import { copyToClipboard } from "@/lib/utils";
import toast from "react-hot-toast";
import Link from "next/link";

const InterviewLink = ({ interviewId }: { interviewId: string }) => {
  const URL: string = `${process.env.NEXT_PUBLIC_HOST_URL}/interview/${interviewId}`;
  return (
    <Card>
      <CardHeader>
        <section className="flex justify-between items-center gap-2">
          <p className="font-semibold text-sm sm:text-2xl">Interview Link</p>
          <span className="bg-emerald-100/50 text-emerald-700 p-1.5 rounded-2xl text-sm">
            Valid for 30 Days
          </span>
        </section>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <section className="flex items-center gap-3">
          <Input disabled value={URL} />
          <Button
            onClick={() => {
              toast.success("Link copied");
              copyToClipboard(URL);
            }}
          >
            <CopyIcon /> Copy
          </Button>
        </section>
        <section className="flex justify-start items-center gap-8">
          <div className="flex items-center gap-3">
            <Clock size="20" />
            <p className="text-sm">30 Min</p>
          </div>
          <div className="flex items-center gap-3">
            <Logs size="20" />
            <p className="text-sm">10 Questions</p>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

const ShareViaSection = () => (
  <Card>
    <CardHeader className="font-semibold">Share Via</CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {SHARE_LIST?.map((list, i) => (
          <section
            key={i as number}
            className="flex items-center justify-center jus gap-2 border border-solid border-gray-200 shadow py-2 px-5 rounded-lg hover:bg-gray-200/20 w-full"
          >
            <list.icon />
            <p>{list?.title}</p>
          </section>
        ))}
      </div>
    </CardContent>
  </Card>
);

export const InterviewLinkGenerate: React.FC = () => {
  const interviewId = useDashboardStore((s) => s.formData.interviewId);
  return (
    <section className="mt-3 flex flex-col gap-5 p-4">
      <section className="flex flex-col items-center gap-3">
        <CircleCheckBig className="text-emerald-500" size="50" />
        <p className="text-2xl text-center font-semibold text-gray-800">
          🎉 Your AI Interview is Ready!
        </p>
        <p className="text-lg text-center text-gray-600">
          Share the link below with your candidates to begin the interview
          process.
        </p>
      </section>
      <InterviewLink interviewId={interviewId} />
      <ShareViaSection />
      <section className=" flex-col flex sm:flex-row justify-between items-center mt-6 gap-3">
        <Link href="/dashboard">
          <Button variant="outline" className="w-full sm:w-48">
            <MoveLeft /> Back to Dashboard
          </Button>
        </Link>
        <Link href="/dashboard/create-interview">
          <Button className="w-full sm:w-48" onClick={resetDashboardStore}>
            <Plus /> Create New Interview
          </Button>
        </Link>
      </section>
    </section>
  );
};

export default InterviewLinkGenerate;
