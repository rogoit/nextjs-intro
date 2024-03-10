import Link from "next/link";

export default function RootPage() {
  return (
    <div>
      <h1>Simple Blog</h1>
      <p>Example application</p>
      <Link href="/blog">Blog</Link>
    </div>
  );
}
