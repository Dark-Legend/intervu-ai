import { Button } from "@/components/ui/button/button";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-white">
      <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-gray-900">
        <span className="text-emerald-400">AI-Powered</span> Interviews
        <br />
        For Modern Hiring
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 max-w-xl mt-6">
        Let <span className="font-semibold text-gray-800">IntervuAI</span>{" "}
        conduct smart, unbiased, and scalable interviews for your candidates —
        powered by intelligent automation.
      </p>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <Button className="bg-black text-white px-6 py-4 text-base font-semibold hover:bg-gray-900">
          Get Started
        </Button>
        <Button className="border border-gray-300 px-6 py-4 text-base font-semibold bg-white text-black hover:bg-gray-100">
          Learn More
        </Button>
      </div>
    </section>
  );
};
