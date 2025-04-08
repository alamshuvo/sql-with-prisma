import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
    const createUser = prisma.user.create({
        data:{
            userName:"Iftakharffff",
            email:"iftakharalamshuvyo1ffff1@gmail.com"
        }
    });
    const updateUser = prisma.user.update({
        where:{
            id:1
        },
        data:{
            age:30
        }
    })

    const [userData,updatedData] = await prisma.$transaction([
        createUser,
        updateUser
    ])
    console.log(updateUser,userData);
}
batchTransaction()