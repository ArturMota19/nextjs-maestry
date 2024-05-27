// Route handlers are cached by default, so you can use global variables to store data between requests

export const dynamic = "force-dynamic";

export async function GET(){
  return Response.json({
    time: new Date().toLocaleTimeString()
  })
}