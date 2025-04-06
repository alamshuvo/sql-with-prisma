import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const updates = async () => {
//    const singleUpdate = await prisma.post.update({
//     where:{
//         id:9
//     },
//     data:{
//         title:"this is updated data",
//         content:"updated content",
//         authorName:"updated author"
//     }
//    })

const updateMany = await prisma.post.updateMany({
    where:{
        title:"title2"
    },
    data:{
        published : true,
    }
})
console.log(updateMany);
}
updates();