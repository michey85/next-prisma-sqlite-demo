import { prisma } from "@/lib/prisma";

export function getPostById(id: string) {
  return prisma.post.findUnique({
    where: {
      id,
    },
  });
}

export function getAllPosts() {
  return prisma.post.findMany();
}
