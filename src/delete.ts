import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const deleteData = async () => {
    // const result = await prisma.post.delete({
    //     where:{
    //         id: 10
    //     }
    // })
 const deleteMany = await prisma.post.deleteMany({
    where:{
        title:"title2"
    }
 })
 console.log(deleteMany);
}
deleteData()