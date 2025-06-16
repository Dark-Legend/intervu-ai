import { createClient } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const email = searchParams.get("email");
  const interview_id = searchParams.get("interview_id");

  try {
    const supabase = await createClient();
    const data = await supabase
      .from("interviewDetail")
      .select(
        "job_position, duration,job_description, type,questions_list, interview_id,created_at, interview-feedback(*)"
      )
      .eq("user_email", email)
      .eq("interview_id", interview_id);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(err);
  }
}
