import { prisma } from "@/lib/prisma";

export function getPostById(id: number) {
  return prisma.post.findUnique({
    where: {
      id,
    },
  });
}

export function getUserById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export function getAllPosts() {
  return prisma.post.findMany();
}

export function getAllUsers() {
  return prisma.user.findMany();
}
