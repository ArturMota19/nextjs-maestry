import { type NextRequest } from "next/server"
import { headers } from "next/headers"
export async function GET(request: NextRequest) {
  // first way is using the nextRequest
  const requestHeaders = new Headers(request.headers)
  const authorization = requestHeaders.get("Authorization")

  // second way is using the headers helper
  const headersList = headers()
  const headerAuthorization = headersList.get("Authorization")

  console.log(authorization, headerAuthorization)
  return new Response("<h1>Profile API -  HTML Headers</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  })
}
