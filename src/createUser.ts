import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            email: '2j5yH@example.com',
        }
    })
    console.log(user);
}

main()
    .then(async () => {
        console.log('Done!');
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })