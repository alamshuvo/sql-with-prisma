import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const avgAge = async () => {
    const avgAge = await prisma.user.aggregate({
        _avg:{
            age:true
        }
    })

    const sumOfAge = await prisma.user.aggregate({
        _sum:{
            age:true
        }
    })
    const countOfAge = await prisma.user.aggregate({
        _count:{
            age:true
        }
    })
    console.log(countOfAge);
}
avgAge()