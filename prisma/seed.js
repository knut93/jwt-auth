const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');

async function createTest() {
    await prisma.user.deleteMany();
    console.log("Deleted all users");
    const salt1 = await bcrypt.genSalt(10)
    const salt2 = await bcrypt.genSalt(10)
    await prisma.user.createMany({
        data: [
            { password: await bcrypt.hash('kto', salt1), email: "K@email", lastName: "To" },
            { password: await bcrypt.hash('sum', salt2), email: "Summer@email", lastName: "Nguyen" }
        ],
        skipDuplicates: true,
    })
    console.log("Pushed users to DB");
}

createTest()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })