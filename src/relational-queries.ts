import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
const relationalQueries = async () => {
    //fluent api 
    // const result = await prisma.user.findUnique({
    //     where:{
    //         id:1
    //     }
    // }).profile()

    // relational filters 
    const publishedPostUsers = await prisma.user.findMany({
        include:{
            posts:{
                where:{
                    published:true
                }
            }
        }
    })
    console.dir(publishedPostUsers,{depth:Infinity});
}
relationalQueries()