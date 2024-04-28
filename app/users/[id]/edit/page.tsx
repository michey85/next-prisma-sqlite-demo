import { updatePost } from "@/app/blog/actions";
import { getPostById } from "@/services/posts";

type Props = {
  params: {
    id: string;
  };
};

export default async function Profile({ params: { id } }: Props) {
  const post = await getPostById(Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>Profile of {post.title}</h1>

      <form className="form" action={updatePost}>
        <input
          type="text"
          placeholder="title"
          required
          name="title"
          defaultValue={post.title}
        />
        <textarea
          placeholder="content"
          required
          name="content"
          defaultValue={post.content ?? ""}
          className="edit-text"
        />
        <input type="hidden" name="id" value={post.id}  />
        <div>
          <input type="submit" value="Update post" />
        </div>
      </form>
    </div>
  );
}
