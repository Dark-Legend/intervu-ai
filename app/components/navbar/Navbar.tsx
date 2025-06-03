import React from "react";
import { Login } from "./Login";

export const Navbar: React.FC = () => {
  return (
    <section className="py-2.5 px-3 border border-solid border-gray-200 shadow !flex justify-between items-center w-full">
      <h1 className="font-semibold text-2xl sm:text-4xl">
        <span className="text-emerald-400">Intervu</span>AI
      </h1>
      <Login />
    </section>
  );
};
