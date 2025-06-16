import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    jobPosition,
    jobDescription,
    type,
    duration,
    interviewQuestions,
    interviewId,
    email,
  } = await request?.json();

  try {
    const supabase = createClient();

    const { data } = await supabase
      .from("interviewDetail")
      .insert([
        {
          job_position: jobPosition,
          job_description: jobDescription,
          type,
          duration,
          questions_list: interviewQuestions,
          interview_id: interviewId,
          user_email: email,
        },
      ])
      .select();
    return NextResponse.json({ data: data });
  } catch (e) {
    return NextResponse.json(e);
  }
}
