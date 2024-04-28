"use server";
import { prisma } from "@/lib/prisma";
import type { Post, User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUser(data: FormData) {
  const { name, email } = Object.fromEntries(data) as Omit<User, "id">;

  const user = await prisma.user.create({
    data: {
      name,
      email
    }
  });

  redirect(`/users/${user.id}`);
}

export async function createPost(data: FormData) {

  const {
    title,
    content,
    authorId
    // @ts-ignore
  } = Object.fromEntries(data) as Omit<Post, "id">;

  console.log('authorId',authorId);

  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId: Number(authorId)
    }
  });

  redirect(`/blog/${post.id}`);
}

export async function updatePost(data: FormData) {
  // @ts-ignore
  const { title, content, id } = Object.fromEntries(data) as Post;
  console.log("id", id);

  const post = await prisma.post.update({
    where: {
      id: Number(id)
    },
    data: {
      title,
      content
    }
  });

  revalidatePath(`/blog/${post.id}`);
  redirect(`/blog/${post.id}`);
}

export async function removePost(id: number) {
  await prisma.post.delete({
    where: {
      id
    }
  });

  revalidatePath("/blog");
  redirect("/blog");
}

export async function removeUser(id: number) {
  await prisma.user.delete({
    where: {
      id
    }
  });

  revalidatePath("/users");
  redirect("/users");
}
