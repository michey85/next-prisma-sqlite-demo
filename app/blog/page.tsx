import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/services/posts";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export const revalidate = 10;

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      <h1>Blog page</h1>

      <ul className="posts">
        {posts.map((post: any) => (
          <li key={post.id} className="post-item">
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <Link href="/blog/new" className="add-new">
        Add new post
      </Link>
    </>
  );
}
