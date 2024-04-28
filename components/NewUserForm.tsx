import { createUser } from "@/app/users/actions";

export default function NewUserForm() {
  return (
    <form className="form" action={createUser}>
      <input type="email" placeholder="email" required name="email" />
      <input type="text" placeholder="name" name="name" />
      {/*<textarea*/}
      {/*  placeholder="content"*/}
      {/*  required*/}
      {/*  name="body"*/}
      {/*  className="edit-text"*/}
      {/*/>*/}
      <div>
        <input type="submit" value="Add post" />
      </div>
    </form>
  );
}
