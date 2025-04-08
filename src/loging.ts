import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:[
        {
            emit:"event",
            level:"query"
        },
        {
            emit:"stdout",
            level:"info"
        },
        {
            emit:"stdout",
            level:"warn"
        },
        {
            emit:"event",
            level:"error"
        }
    ]
})
prisma.$on("query",(e)=>{
    console.log("Query",e.query);
    console.log(e.duration);
    console.log(e.timestamp);
})
const main = async () => {
    const getAllFromDb = await prisma.post.findMany();
    
}
main()