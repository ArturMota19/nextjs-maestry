export default function ComentDetail({ params }: { params: { postId: string, comentId: string }}
){
  return (
    <div>
      <h1>This is a individual page to a coment</h1>
      <p>Post id {params.postId}</p>
      <p>Coment id {params.comentId}</p>
    </div>
  )
}