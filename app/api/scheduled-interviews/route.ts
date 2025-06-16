import { createClient } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const email = searchParams.get("email");

  try {
    const supabase = await createClient();
    const data = await supabase
      .from("interviewDetail")
      .select(
        "job_position, duration,job_duration,type,questions_list interview_id,created_at, interview-feedback(user_email)"
      )
      .eq("user_email", email)
      .order("id", { ascending: false });
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(err);
  }
}
