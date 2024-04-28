import { createPost } from "@/app/blog/actions";
import { User } from "@prisma/client";

export default function NewPostForm({ users }: { users: User[] }) {
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
