import { removePost, removeUser } from "@/app/blog/actions";
import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostById, getUserById } from "@/services/posts";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts: any[] = await getAllPosts();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getUserById(Number(id));

  return {
    title: post?.name ?? "",
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getUserById(Number(id));

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <h1>{post.email}</h1>
      <p>{post.name}</p>

      <form action={removeUser.bind(null, Number(id))}>
        <input type="submit" value="delete post" />
      </form>

      <Link href={`/users/${id}/edit`}>Edit</Link>
    </>
  );
}
