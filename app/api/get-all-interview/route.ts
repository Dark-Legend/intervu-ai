import { createClient } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient();
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams?.get("email");
  try {
    const { data: interviewDetail } = await supabase
      .from("interviewDetail")
      .select("*")
      .eq("user_email", email)
      ?.order("id", { ascending: false });

    if (interviewDetail?.length) {
      return NextResponse.json({ data: interviewDetail });
    }
  } catch (err) {
    return NextResponse.json(err);
  }
}
