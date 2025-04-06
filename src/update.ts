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

// const updateMany = await prisma.post.updateMany({
//     where:{
//         title:"title2"
//     },
//     data:{
//         published : true,
//     }
// })
const upsertData = await prisma.post.upsert({
    where:{
        id:14
    },
    update:{
        title:"a",
        content:"updated content",
        authorName:"updated author"
    },
    create:{
        title:"this is created data",
        content:"created content",
        authorName:"created author"
    }
})
console.log(upsertData);
}
updates();