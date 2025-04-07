import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const paginationSorting = async () => {
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 14,
    },
  });

  // sorting 
  const sortedData = await prisma.post.findMany({
    orderBy:{
        id:'desc'
    }
  })
  console.log(sortedData);
};
paginationSorting();
