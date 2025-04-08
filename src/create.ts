import { PrismaClient, UserRole } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
// const createUser = await prisma.user.create({
//   data:{
//     userName:"user2",
//     email:"user1@gmail.com",
//     role:UserRole.user
//   }
// const createProfile = await prisma.profile.create({
//   data:{
//     bio:"this is bio",
//     userId:2
//   }
// })

// const createCategory = await prisma.category.create({
//   data:{
//     name:"web_development",
//   }
// })
const createPost = await prisma.post.create({
    data:{
        title:"this is title",
        content:"this is content of the post",
        authorId:1,
        postCategory:{
         create:{
            // category:{
            //     connect:{
            //         id:1
            //     }
            // }
            categoryId:3
         }
        }
    },
    include:{
        postCategory:true
    }
})
 console.log(createPost);
};

main();
