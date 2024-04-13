import { createPost } from "@/app/blog/actions";

export default function NewPostForm() {
  return (
    <form className="form" action={createPost}>
      <input type="text" placeholder="title" required name="title" />
      <textarea
        placeholder="content"
        required
        name="body"
        className="edit-text"
      />
      <div>
        <input type="submit" value="Add post" />
      </div>
    </form>
  );
}
