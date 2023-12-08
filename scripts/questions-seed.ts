const {PrismaQuestionsClient} =require("@prisma/client")

const db = new PrismaQuestionsClient();

async function questionsFunc() {
    try{
        await db.category.createMany({
            data:[
                {name : "What is the definition of agricultural extension education? "},
                {name : "Name two components of agricultural extension education? "},
                {name : "Name two components of agricultural advisory? "},
                {name : "How does advisory services differ from agricultural extension? "},
            ]
        })
        console.log("Success")
    }catch (error){
        console.log("Error seeding the database questions", error);
    }finally{
        await db.$disconnect();
    }
}
questionsFunc();