export default function PostId({ params }: { params: { postId: string }}){

  return (
    <h1>This is a individual page to a post {params.postId}</h1>
  )
}