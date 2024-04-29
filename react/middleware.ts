import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/signup";

  const token = request.cookies.get("session")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  return await updateSession(request);
}

export const config = {
  matcher: ["/profile", "/login", "/signup"],
};
