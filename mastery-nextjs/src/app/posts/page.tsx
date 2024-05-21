import {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Posts"
}

export default function Posts() {
  return (
    <main>
      <h1>This is my posts page</h1>
      <Link href="/posts/1"> Dynamic Post 1</Link>
      <Link href="/posts/2"> Dynamic Post 2</Link>
      <Link href="/posts/3" replace> Dynamic Post 3</Link>
    </main>
  );
}