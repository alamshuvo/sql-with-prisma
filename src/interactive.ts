import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const interactiveTransation = async () => {
    const result = await prisma.$transaction(async(tx)=>{
        const getAllPost = await tx.post.findMany({
            where:{
                published:true
            }
        })
        // query true
        const countUser = await tx.user.count()
        // query 3 
        const updateUser = await tx.user.update({
            where:{
                id:1
            },
            data:{
                age:45
            }
        })
        return {getAllPost,countUser,updateUser}
    })
    console.log(result);
}
interactiveTransation()