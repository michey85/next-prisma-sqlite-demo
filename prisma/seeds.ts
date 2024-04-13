import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialPosts = [
  {
    title: "Panda CSS was released",
    body: "New generation of CSS-in-JS libraries makes it faster with no runtime style generation. \nPanda is a styling engine that generates styling primitives to author atomic CSS and recipes in a type-safe and readable manner. \nPanda combines the developer experience of CSS-in-JS and the performance of atomic CSS. It leverages static analysis to scan your JavaScript and TypeScript files for JSX style props and function calls, generating styles on-demand (aka Just-in-Time)",
  },
  {
    title: "New version of react-redux",
    body: "React-redux library got a new minor version 8.1.0. This feature release adds new development-mode safety checks for common errors (like poorly-written selectors), adds a workaround to fix crash errors when React-Redux hooks are imported into React Server Component files, and updates our hooks API docs page with improved explanations and updated links.",
  },
  {
    title: "NextJS 14 was released",
    body: "A lot of changes in the core library plus documentation updates. Fixed issues with NextJS examples and many more...",
  },
];

const seed = async () => {
  await prisma.post.deleteMany();

  for (const post of initialPosts) {
    await prisma.post.create({
      data: post,
    });
  }
};

seed();
