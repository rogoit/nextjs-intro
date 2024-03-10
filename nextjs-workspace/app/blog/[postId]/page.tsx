import { getBlogPost } from "@/app/shared/api/backend-queries";
import Link from "next/link";

type Params = {
  params: {
    postId: string;
  };
};

export default async function BlogDetail(props: Params) {
  const blogPost = await getBlogPost(props.params.postId);
  return (
    <div>
      <h1>{blogPost?.title}</h1>
      <p>Blog Detail</p>
      <Link href="/blog">Back to Blog</Link>
    </div>
  );
}
