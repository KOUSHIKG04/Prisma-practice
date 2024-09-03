import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient( {
    log: ['query']
})

async function main() {
    // ... you will write your Prisma Client queries here
    const users = await prisma.user.findMany({});
    console.log(users);
    const user = await prisma.user.findUnique({
        where: {
            id: 2,
        },
        include: {
            posts: true
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