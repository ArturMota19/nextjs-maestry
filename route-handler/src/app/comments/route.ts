import { comments } from "./data"

export async function GET(){
  return Response.json(comments)
}
export async function POST(request: Request){
  const comment = await request.json()
  const singleComment = {
    id: comments.length + 1,
    text: comment.text
  }
  comments.push(singleComment)
  return new Response(JSON.stringify(singleComment), {
    headers: {
      'Content-Type': 'application/json'
    },
    status: 201
  })
}
