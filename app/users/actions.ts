"use server";
import { prisma } from "@/lib/prisma";
import type { User } from "@prisma/client";
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

export async function removeUser(id: number) {
  await prisma.user.delete({
    where: {
      id
    }
  });

  revalidatePath("/users");
  redirect("/users");
}
