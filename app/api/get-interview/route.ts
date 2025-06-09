import { createClient } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient();
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const interviewId = searchParams?.get("interview_id");

  try {
    let { data: interviewDetail } = await supabase
      .from("interviewDetail")
      .select("*")
      .eq("interview_id", interviewId);

    if (!interviewDetail?.length) {
      return NextResponse.json(
        { message: "Interview not found!" },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({ data: interviewDetail });
  } catch (err) {
    return NextResponse.json(err);
  }
}
