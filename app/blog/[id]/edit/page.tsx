import { getPostById } from "@/services/posts";
import { updatePost } from "../../actions";

type Props = {
  params: {
    id: string;
  };
};

export default async function Profile({ params: { id } }: Props) {
  const post = await getPostById(id);

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
          name="body"
          defaultValue={post.body}
          className="edit-text"
        />
        <input type="hidden" name="id" value={post.id} />
        <div>
          <input type="submit" value="Update post" />
        </div>
      </form>
    </div>
  );
}
