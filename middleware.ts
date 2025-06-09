import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "./utils/supabase/server";

const dashboardRegex = /^\/dashboard(\/|$)/;
const publicRoutesRegex = /^\/$/;
const interviewRegex = /^\/interview(\/.*)?$/; // allows /interview and /interview/:id

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow access to interview route for everyone
  if (interviewRegex.test(pathname)) {
    return NextResponse.next();
  }

  // Auth check
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userInfo = user?.email;

  // Redirect unauthenticated users trying to access /dashboard
  if (!userInfo && dashboardRegex.test(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Redirect logged-in users from "/" to "/dashboard"
  if (userInfo && publicRoutesRegex.test(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
