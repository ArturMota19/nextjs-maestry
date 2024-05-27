import { type NextRequest } from "next/server"
import { headers, cookies } from "next/headers"
export async function GET(request: NextRequest) {
  // first way is using the nextRequest
  const requestHeaders = new Headers(request.headers)
  const authorization = requestHeaders.get("Authorization")

  // second way is using the headers helper
  const headersList = headers()
  const headerAuthorization = headersList.get("Authorization")

  // first way to get cookies
  const theme = request.cookies.get("theme")

  // second way to get cookies
  cookies().set("resultsPerPage", "10")
  const resultsPerPage = cookies().get("resultsPerPage") // we can algo use another functions, like delete, getAll, etc

  console.log(authorization, headerAuthorization)
  console.log("Cookies: ", theme, resultsPerPage)
  return new Response("<h1>Profile API -  HTML Headers</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    },
  })
}
