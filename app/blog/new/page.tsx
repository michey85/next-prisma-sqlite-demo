import NewPostForm from "@/components/NewPostForm";
import { getAllUsers } from "@/services/users";

export default async function NewPost() {
  const users = await getAllUsers();
  if (!users) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Create new post</h1>

      <NewPostForm users={users}/>
    </div>
  );
}
