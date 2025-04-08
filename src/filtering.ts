import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
            published: true,
        }
      ],
    },
  });
  const orrFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where:{
        NOT:[
            {
                title:{
                    contains:"sub"
                }
            }
        ]
    }
  })

  const startsWith = await prisma.user.findMany({
    where:{
        userName:{
            startsWith:"user"
        }
    }
  })
  console.log(startsWith);
};
filtering();
