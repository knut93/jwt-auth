import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function createClients() {
    console.log("Adding Clients");
    await prisma.client.createMany({
        data: [
            { email: "jdoe@email.com", lastName: "Doe", firstName: "John" }
        ],
        skipDuplicates: true,
    })
    console.log("Pushed Clients to DB");
}

createClients()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
