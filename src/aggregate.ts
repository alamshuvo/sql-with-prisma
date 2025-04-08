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

    const maxAge = await prisma.user.aggregate({
        _max:{
            age:true
        }
    })
    console.log(maxAge);
}
avgAge()