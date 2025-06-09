"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card/card";
import { Input } from "@/components/ui/input";
import { Clock, Info, VideoIcon } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useGetInterview } from "./query/query";
import Link from "next/link";

const Interview = () => {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const { data: getInterviewInfo } = useGetInterview(id);
  console.log(id, getInterviewInfo);
  return (
    <section className="flex justify-center items-center">
      <Card className="mt-16 w-96 md:w-2xl">
        <CardHeader>
          <section className="flex  justify-center items-center flex-col gap-3">
            <h1 className="text-emerald-400 font-semibold text-3xl text-full">
              Intervu <span className="text-black">AI</span>
            </h1>
            <p className="text-center">AI-Powered Interview Platform</p>
          </section>
        </CardHeader>
        <CardContent className="w-full">
          <section className="flex justify-center items-center flex-col w-full gap-2">
            <Image
              src="/guy_with_computer.png"
              alt="icon"
              width={150}
              height={150}
            />
            <h1 className="font-bold text-lg mt-3">
              {getInterviewInfo?.[0]?.job_position}
            </h1>
            <div className="flex items-center gap-2 text-base font-semibold text-black/60">
              <Clock size={20} />
              {getInterviewInfo?.[0]?.duration}
            </div>
            <div className="w-full flex justify-center items-center flex-col gap-2 mt-3">
              <label>Enter you full name</label>
              <Input
                placeholder="e.g. John Wick"
                className="w-96"
                value={username}
                onChange={(e) => setUsername(e?.target?.value)}
              />
            </div>
            <section className="m-5 w-ful">
              <div className="flex gap-3 bg-emerald-100/50 p-2 rounded-lg w-full">
                <Info className="text-emerald-600" />{" "}
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-lg">Before you begin</p>
                  <p className="text-emerald-700">
                    - Test your camera and microphone
                  </p>
                  <p className="text-emerald-700">
                    - Ensure you have a stable internet connection
                  </p>
                  <p className="text-emerald-700">
                    - Find a Quiet place for interview
                  </p>
                </div>
              </div>
            </section>
            <div></div>
            <Link
              href={`/interview/${id}/start/${username}`}
              className="flex
                 items-center gap-3"
            >
              <Button className="w-96 h-10" disabled={!username?.length}>
                <VideoIcon /> Join Interview
              </Button>
            </Link>
          </section>
        </CardContent>
      </Card>
    </section>
  );
};

export default Interview;
