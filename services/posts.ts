import { prisma } from "@/lib/prisma";

export function getPostById(id: number) {
  try {
    return prisma.post.findUnique({
      where: {
        id,
      },
    });
  }
  catch (e) {
    console.error(JSON.stringify(e));
  }

}

export function getAllPosts() {
  return prisma.post.findMany();
}
