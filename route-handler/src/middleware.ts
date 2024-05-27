// Middleware in NextJs allows to effectively control and intercept the request response cycle enabling:
// - Redirects
// - Rewrites
// - Manipulation of headers and cookies

import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest){
  const response = NextResponse.next()
  const themePreference = request.cookies.get("theme")
  if(!themePreference){
    response.cookies.set("theme", "dark")
  }
  // custom headers are useful for passing additional information in responses
  response.headers.set("custom-header", "custom-value")

  return response;

  // if(request.nextUrl.pathname === "/profile"){
  //   return NextResponse.rewrite(new URL("/hello", request.url))
  // }

  // return NextResponse.redirect(new URL("/", request.url))
}

// export const config = {
//   matcher: "/profile"
// }