import { Send } from "lucide-react";
import Image from "next/image";
import React from "react";

const InterviewComplete = () => {
  return (
    <section>
      <section className="flex justify-center items-center flex-col gap-3 p-3">
        <Image
          src="/completeTick.png"
          alt="complete-icon"
          width={200}
          height={200}
        />
        <h1 className="text-3xl font-bold">Interview Completed</h1>
        <p className="font-semibold text-black/70 text-center">
          Thank you for participating in the AI-Driven interview with IntervuAI
        </p>
        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex justify-center items-center p-2 mt-5">
          <Send />
        </div>
        <h1 className="font-semibold text-xl">What's Next?</h1>
        <p className="text-black/60 md:w-1/2 text-center">
          The recrutier will review your interview responses and contact you
          soon regarding the next steps
        </p>
      </section>
    </section>
  );
};

export default InterviewComplete;
