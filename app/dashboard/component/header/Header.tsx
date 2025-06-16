/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useDashboardStore } from "../../store";
import {
  HoverCard,
  HoverCardTrigger,
} from "@/components/ui/hoverCard/hover-card";
import { HoverCardContent } from "@radix-ui/react-hover-card";

export const Header: React.FC = () => {
  const userData = useDashboardStore((s) => s.userData);
  return (
    <section className="flex justify-end pr-5">
      <HoverCard>
        <HoverCardTrigger>
          <img
            src={userData?.img}
            className="rounded-full cursor-pointer"
            width={35}
            height={35}
            alt="user img"
          />
        </HoverCardTrigger>
        <HoverCardContent className="shadow mr-10 p-3 bg-white">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-semibold">Name:</span>
            <h1>{userData?.name}</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-semibold">Email:</span>:
            <h1>{userData?.email}</h1>
          </div>
        </HoverCardContent>
      </HoverCard>
    </section>
  );
};
