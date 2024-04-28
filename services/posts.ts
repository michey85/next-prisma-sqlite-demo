import { prisma } from "@/lib/prisma";

export function getPostById(id: number) {
  return prisma.post.findUnique({
    where: {
      id,
    },
  });
}

export function getAllPosts() {
  return prisma.post.findMany();
}
