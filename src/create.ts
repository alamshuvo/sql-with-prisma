import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  //   const result = await prisma.post.create({
  //     data:{
  //         title: 'Hello World this is title',
  //         content: 'This is my first post',
  //         authorName: 'Iftakhar Alam Shuvo',
  //     }
  //   })
  //   console.log(result);

  // create multiple data
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Hello World this is title",
        content: "This is my first post",
        authorName: "Iftakhar",
      },
      {
        title: "Hello World this is title",
        content: "This is my second post",
        authorName: "Alam",
      },
      {
        title: "Hello World this is title",
        content: "This is my third post",
        authorName: "Shuvo",
      }
    ],
  });
    console.log(createMany);
};

main();
