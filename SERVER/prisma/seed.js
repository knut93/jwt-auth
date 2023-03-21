import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'
const prisma = new PrismaClient()

async function createTest() {
    await prisma.users.deleteMany();
    console.log("Deleted all users");
    await prisma.users.createMany({
      data: [
        {email: "K@email", password: bcrypt.hashSync("To", 8)},
        {email: "Eb@email", password: bcrypt.hashSync("Eb", 8)},
        {email: "Summer@email", password: bcrypt.hashSync("Summer", 8)}
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