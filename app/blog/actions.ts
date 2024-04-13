"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(data: FormData) {
  const { title, body } = Object.fromEntries(data);

  redirect(`/blog/...`);
}

export async function updatePost(data: FormData) {
  const { title, body, id } = Object.fromEntries(data);

  revalidatePath(`/blog/...`);
  redirect(`/blog/...`);
}

export async function removePost(id: string) {
  revalidatePath("/blog");
  redirect("/blog");
}
