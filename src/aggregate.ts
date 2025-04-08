import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const avgAge = async () => {
    const avgAge = await prisma.user.aggregate({
        _avg:{
            age:true
        }
    })
    console.log(avgAge);
}
avgAge()