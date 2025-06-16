import { Button } from "@/components/ui/button/button";
import { Plus, Video } from "lucide-react";
import React from "react";

export const InterviewsEmptyView: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-4 py-10">
      <Video className="text-emerald-600 w-12 h-12" />

      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          No Interviews Yet
        </h2>
        <p className="text-md mt-2 text-gray-500">
          You haven&apos;t created any interviews. Start by creating one below.
        </p>
      </div>

      <Button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
        <Plus className="w-4 h-4" />
        Create New Interview
      </Button>
    </section>
  );
};
