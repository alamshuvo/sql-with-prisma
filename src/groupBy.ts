import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const groupBy = async () => {
  const groupByPosts = await prisma.post.groupBy({
    by: ["published"],
    having:{
        published:true
    }
  });

  const groupByUser = await prisma.user.groupBy({
    by:['age'],
    having:{
        age:{
            _sum:{
                gt:1
            }
        }
    }
  })
  console.log(groupByUser);
};
groupBy();
