import {Metadata} from 'next';

export const metadata: Metadata = {
  title: "Posts"
}

export default function Posts() {
  return (
    <main>
      <h1>This is my posts page</h1>
      <p> Dynamic Post 1</p>
      <p> Dynamic Post 2</p>
      <p> Dynamic Post 3</p>
    </main>
  );
}