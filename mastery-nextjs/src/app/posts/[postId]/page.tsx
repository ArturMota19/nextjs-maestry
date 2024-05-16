import { notFound } from "next/navigation"

export default function PostId({ params }: { params: { postId: string }}){
  if(parseInt(params.postId) > 10) return notFound()
  return (
    <h1>This is a individual page to a post {params.postId}</h1>
  )
}