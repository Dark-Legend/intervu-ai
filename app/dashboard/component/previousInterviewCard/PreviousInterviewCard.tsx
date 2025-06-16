import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card/card";
import { copyToClipboard } from "@/lib/utils";
import { format } from "date-fns";
import { Copy, MoveRight, Send } from "lucide-react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

type PreviousInterviewCardProps = {
  val: unknown;
  viewDetails: unknown;
};

const PreviousInterviewCard: React.FC<PreviousInterviewCardProps> = ({
  val,
  viewDetails,
}) => {
  return (
    <Card className="w-full sm:w-72">
      <CardHeader className="flex items-center justify-between">
        <div className="w-7 h-7 bg-emerald-600 rounded-full"></div>
        <p>{format(val?.created_at, "dd MMM yyyy")}</p>
      </CardHeader>
      <CardContent>
        <p className="font-semibold">{val?.job_position}</p>
        <section>
          <p className="mt-2">{val?.duration}</p>
        </section>
        {!viewDetails ? (
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
        ) : (
          <Link
            href={`/dashboard/scheduled-interviews/details/${val?.interview_id}`}
          >
            <Button
              variant="outline"
              className="flex items-center gap-3 mt-5 w-full"
            >
              View Details <MoveRight />
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default PreviousInterviewCard;
