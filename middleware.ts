import { clerkMiddleware } from "@clerk/nextjs/server";

// This example protects all routes including api/trpc routes
export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$|.*\\.jpg$|.*\\.ico$).*)",
  ],
};