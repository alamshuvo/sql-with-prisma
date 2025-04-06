import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();
const main =async ()=>{
//   const result = await prisma.post.create({
//     data:{
//         title: 'Hello World this is title',
//         content: 'This is my first post',
//         authorName: 'Iftakhar Alam Shuvo',
//     }
//   })
//   console.log(result);

const getAllFromDb = await prisma.post.findMany();
console.log(getAllFromDb);
  
}

main();