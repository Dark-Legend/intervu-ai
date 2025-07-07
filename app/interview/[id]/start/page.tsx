/* eslint-disable @typescript-eslint/prefer-as-const */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card/card";
import { Mic, Phone, Timer } from "lucide-react";
import Image from "next/image";
import { useDashboardStore } from "@/app/dashboard/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetFeedback } from "../query/mutation";
import { createClient } from "@/utils/supabase/client";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { clearVapiInstance, getVapiInstance } from "@/lib/vapi";
import Vapi from "@vapi-ai/web";

type InterviewInfoType = {
  job_position: string;
  questions_list: { question: string }[];
  interview_id: string;
};

const Start = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams?.get("name");
  const email = searchParams?.get("email");
  const supabase = createClient();
  const [conversation, setConversation] = useState<object | string>({});
  const interviewInfo = useDashboardStore(
    (s) => s.interviewInfo as InterviewInfoType
  );
  const { mutate: getFeedback } = useGetFeedback();
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer); // cleanup
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => String(num).padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  const handleEndCall = () => {
    setIsRunning(false);
  };

  const startCall = () => {
    let questionList: string = "";
    interviewInfo?.questions_list?.forEach((question: { question: string }) => {
      questionList = question?.question + "," + questionList;
    });
    const assistant: CreateAssistantDTO = {
      name: "AI Recruiter",
      firstMessage: `Hi! ${name}, how are you? Ready for your interview on ${interviewInfo?.job_position}`,
      model: {
        provider: "openai",
        model: "gpt-4o",
        temperature: 0.7,
        messages: [
          {
            role: "system" as "system",
            content: `
              You are an AI voice assistant conducting interviews.
              Your job is to ask candidates provided interview questions and assess their responses.
              Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
              "Hey there! Welcome to your ${interviewInfo?.job_position} interview. Let's get started with a few questions!"
              Ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise. Below are the questions.
              Questions:${questionList}
              If the candidate struggles, offer hints or rephrase the question without giving away the answer. Example:
              "Need a hint? Think about how React tracks component updates!"
              Provide brief, encouraging feedback after each answer. Example:
              "Nice! That's a solid answer."
              "Hmm, not quite! Want to try again?"
              Keep the conversation natural and engaging — use casual phrases like "Alright, next up..." or "Let's tackle a tricky one!"
              After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
              "That was great! You handled some tough questions well. Keep sharpening your skills!"
              End on a positive note:
              "Thanks for chatting! Hope to see you crushing projects soon!"
              Key Guidelines:
              Be friendly, engaging, and witty.
              Keep responses short and natural, like a real conversation.
              Adapt based on the candidate's confidence level.
              Ensure the interview remains focused on React.
            `.trim(),
          },
        ],
      },
      voice: {
        provider: "vapi",
        voiceId: "Neha",
      },
    };

    vapi?.start(assistant);
  };

  const createFeedback = async (val: string) => {
    await supabase
      .from("interview-feedback")
      .insert([
        {
          user_name: name,
          user_email: email,
          interview_id: interviewInfo?.interview_id,
          feedback: JSON.parse(val),
          recommended: false,
        },
      ])
      ?.select();
  };

  const handleAddFeedback = () => {
    const payload = conversation;

    getFeedback(payload, {
      onSuccess: (val) => {
        console.log(val, "VALL");
        createFeedback(val);
        router.replace(`/interview/${interviewInfo?.interview_id}/completed`);
        // console.log(data, "DAAT");
      },
    });
  };

  useEffect(() => {
    const instance = getVapiInstance();
    setVapi(instance);

    return () => {
      instance?.stop();
      clearVapiInstance();
    };
  }, []);

  useEffect(() => {
    if (!vapi || !interviewInfo || hasStartedRef.current) return;
    hasStartedRef.current = true;

    const handleMessage = (message: { conversation: string }) => {
      setConversation(message?.conversation);
    };

    const handleCallStart = () => console.log("Call Started");
    const handleSpeechStart = () => console.log("Speech Started");
    const handleCallEnd = () => console.log("Call Ended");
    const handleSpeechEnd = () => console.log("Speech Ended");
    vapi.on("message", handleMessage);
    vapi.on("call-start", handleCallStart);
    vapi.on("speech-start", handleSpeechStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("speech-end", handleSpeechEnd);
    startCall();

    return () => {
      vapi.off("message", handleMessage);
      vapi.off("call-start", () => {
        console.log("Call Ended");
      });
      vapi.off("call-end", () => {
        console.log("Call Ended");
      });
      vapi.off("speech-start", () => console.log("END"));
      vapi.off("speech-end", () => console.log("End"));
      vapi.stop();
      hasStartedRef.current = false;
    };
  }, [vapi, interviewInfo]);

  return (
    <section className="w-full bg-gray-200/70 px-11 md:px-48 py-10 h-screen">
      <h1 className="flex justify-between items-center w-full text-2xl font-semibold">
        AI Interview Session
        <span className="flex items-center gap-3 justify-center">
          <Timer /> {formatTime(secondsElapsed)}
        </span>
      </h1>

      <section className="mt-10">
        <section className="md:flex md:justify-center items-center gap-5">
          <Card className="mt-5 h-56 md:w-[500px] md:h-[400px] flex justify-center items-center">
            <CardContent>
              <section className="flex justify-center items-center flex-col gap-3">
                <Image
                  src="/AI_HR.png"
                  alt="icon"
                  width={100}
                  height={100}
                  className="rounded-full w-[70px] h-[70px] object-cover"
                />
                <h1 className="font-semibold text-lg">AI Recruiter</h1>
              </section>
            </CardContent>
          </Card>
          <Card className="mt-5 h-56 flex justify-center items-center md:w-[500px] md:h-[400px] ">
            <CardContent>
              <section className="flex justify-center items-center flex-col gap-3">
                <div className="w-[70px] h-[70px] rounded-full bg-emerald-700 text-white flex justify-center items-center text-xl">
                  {name?.[0]}
                </div>
                <h1 className="font-semibold text-lg">{name}</h1>
              </section>
            </CardContent>
          </Card>
        </section>
        <section className="flex justify-center items-center gap-3 mt-10">
          <Mic className="w-10 h-10 text-white bg-gray-600 rounded-full p-2 cursor-pointer" />
          <Phone
            onClick={() => {
              if (vapi) vapi.stop();
              handleAddFeedback();
              handleEndCall();
            }}
            className="w-10 h-10 text-white bg-red-600 rounded-full p-2 cursor-pointer"
          />
        </section>
        <h1 className="text-center mt-5 font-semibold text-lg">
          Interview in progress
        </h1>
      </section>
    </section>
  );
};

export default Start;
