import { PrismaClient } from "@prisma/client";
// prisma client API

const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Bob",
  //       email: "bob@prisma.io",
  //       posts: {
  //         create: {
  //           title: "Hello World",
  //         },
  //       },
  //     },
  //   });
  //   console.log(user);

  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(usersWithPosts, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// view console logs - npx ts-node script.ts
// https://www.prisma.io/docs/getting-started/quickstart
