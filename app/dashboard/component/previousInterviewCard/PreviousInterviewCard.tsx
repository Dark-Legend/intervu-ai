import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card/card";
import { copyToClipboard } from "@/lib/utils";
import { format } from "date-fns";
import { Copy, Send } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const PreviousInterviewCard = ({ val }) => {
  return (
    <Card className="w-full sm:w-72">
      <CardHeader className="flex items-center justify-between">
        <div className="w-7 h-7 bg-emerald-600 rounded-full"></div>
        <p>{format(val?.created_at, "dd MMM yyyy")}</p>
      </CardHeader>
      <CardContent>
        <p className="font-semibold">{val?.job_position}</p>
        <p className="mt-2">{val?.duration}</p>
        <section className="flex mt-5 justify-between items-center">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-emerald-600 w-28"
            onClick={() => {
              const url = `${process.env.NEXT_PUBLIC_HOST_URL}/interview/${val?.interview_id}`;
              copyToClipboard(url);
              toast.success("Link copied");
            }}
          >
            {" "}
            <Copy /> Copy Link
          </Button>
          <Button className="flex items-center gap-2 w-28 bg-emerald-600 hover:bg-emerald-700">
            <Send />
            Send
          </Button>
        </section>
      </CardContent>
    </Card>
  );
};

export default PreviousInterviewCard;
