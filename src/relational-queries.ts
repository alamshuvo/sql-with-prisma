import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const relationalQueries = async () => {
    //fluent api 
    const result = await prisma.user.findUnique({
        where:{
            id:1
        }
    }).profile()
    console.log(result);
}
relationalQueries()