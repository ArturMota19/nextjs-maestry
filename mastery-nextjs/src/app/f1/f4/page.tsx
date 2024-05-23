import Link from "next/link";

export default function F1() {
  return (
    <div>
      <h1>F4 page</h1>
      <Link href="/f1/f3">F3</Link>
      <Link href="/about">About</Link>
    </div>
  );
}