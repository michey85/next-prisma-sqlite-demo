import { Metadata } from "next";
import Link from "next/link";
import { getAllUsers } from "@/services/users";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export const revalidate = 10;

export default async function Blog() {
  const users = await getAllUsers();

  return (
    <>
      <h1>Users page</h1>

      <ul className="posts">
        {users.map((post: any) => (
          <li key={post.id} className="post-item">
            <Link href={`/users/${post.id}`}>{post.email}</Link>
          </li>
        ))}
      </ul>

      <Link href="/users/new" className="add-new">
        Add new user
      </Link>
    </>
  );
}
