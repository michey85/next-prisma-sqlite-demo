import { createPost } from "@/app/blog/actions";
import { getAllUsers } from "@/services/posts";

export default async function NewPostForm() {
  const users = await getAllUsers();

  return (
    <form className="form" action={createPost}>
      <input type="text" placeholder="title" required name="title" />
      <textarea
        placeholder="content"
        required
        name="body"
        className="edit-text"
      />
      <select name="authorId">
        <option value="">Select user</option>
        {users.map((user: any) => (
          <option key={user.id} value={user.id}>
            {user.email}
          </option>
        ))}
      </select>
      <div>
        <input type="submit" value="Add post" />
      </div>
    </form>
  );
}
