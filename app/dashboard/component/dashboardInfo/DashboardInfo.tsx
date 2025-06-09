import { Card, CardContent, CardHeader } from "@/components/ui/card/card";
import { Phone, Video } from "lucide-react";
import React from "react";

export const DashboardInfo: React.FC = () => {
  return (
    <section className="flex flex-col lg:justify-between lg:items-center lg:flex-row gap-5 mt-10">
      <Card className="w-full">
        <CardHeader>
          <div className="w-10 h-10 rounded-sm bg-emerald-100/50 text-emerald-600 flex justify-center items-center">
            <Video />
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="font-bold text-2xl">Create New Interview</h1>
          <p className="font-semibold text-black/50">
            Create AI Interview and schedule then with Candidates
          </p>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <div className="w-10 h-10 rounded-sm bg-emerald-100/50 text-emerald-600 flex justify-center items-center">
            <Phone />
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="font-bold text-2xl">Create Phone Screening Call</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Schedule a phone screening call with candidates easily and
            efficiently.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
