const {PrismaClient} =require("@prisma/client")

const database = new PrismaClient();

async function main() {
    try{
        await database.category.createMany({
            data:[
                {name : "RASTA"},
                {name : "A-Z Crop Guides (Internal)"},
                {name : "A-Z Crop Guides (External)"},
                {name : "Reference Materials"},
                {name : "Training Materials"},
                {name : "Demo Farms"},
                {name : "Pest & Disease Identification Charts"},
            ]
        })
        console.log("Success")
    }catch (error){
        console.log("Error seeding the database categories", error);
    }finally{
        await database.$disconnect();
    }
}
main();