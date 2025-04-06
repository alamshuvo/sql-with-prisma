import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();
const main =async ()=>{
    //find all for post
const getAllFromDb = await prisma.post.findMany();
//find one its findFrist find kore prothom j data ta match kore seita dyea dibe 
const findFirst = await prisma.post.findFirstOrThrow({
    where:{
        id: 9
    }
})

// find unique holo unique vabe find kora 
const findUnique = await prisma.post.findUniqueOrThrow({
    where:{
        id: 9
    }
})



console.log({findUnique});
  
}

main();