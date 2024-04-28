import { getUserById } from "@/services/users";
import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostById } from "@/services/posts";
import { removePost } from "../actions";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts: any[] = await getAllPosts();

  return posts.map((post) => ({
    slug: post.id.toString()
  }));
}

export async function generateMetadata({
                                         params: { id }
                                       }: Props): Promise<Metadata> {
  const post = await getPostById(Number(id));

  return {
    title: post?.title ?? ""
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPostById(Number(id));
  const user = await getUserById(Number(post?.authorId));
  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{user?.email}</p>

      <form action={removePost.bind(null, Number(id))}>
        <input type="submit" value="delete post" />
      </form>

      <Link href={`/blog/${id}/edit`}>Edit</Link>
    </>
  );
}
