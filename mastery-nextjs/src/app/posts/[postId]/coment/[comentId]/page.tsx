import {notFound} from "next/navigation"

function simulateError(count:number) {
  return Math.floor(Math.random()*count);
}

export default function ComentDetail({ params }: { params: { postId: string, comentId: string }}
){
  const random = simulateError(2);
  if(random === 1) {
    throw new Error("Failed to load data");
  }
  return (
    <div>
      <h1>This is a individual page to a coment</h1>
      <p>Post id {params.postId}</p>
      <p>Coment id {params.comentId}</p>
    </div>
  )
}