import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "./utils/supabase/server";

const dashboardRegex = /^\/dashboard(\/|$)/;
const publicRoutesRegex = /^\/$/;

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Get user info (adjust to your auth/session method)
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userInfo = user?.email;

  // If user NOT logged in and trying to access dashboard → redirect to "/"
  if (!userInfo && dashboardRegex.test(pathname)) {
    if (pathname !== "/") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // If user logged in and trying to access "/" → redirect to "/dashboard"
  if (userInfo && publicRoutesRegex.test(pathname)) {
    if (pathname !== "/dashboard") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  // Allow request
  return NextResponse.next();
}
