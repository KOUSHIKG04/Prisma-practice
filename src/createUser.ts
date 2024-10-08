import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query'], // ['query', 'info', 'warn', 'error'] used for debugging
})

async function main() {
    // ... you will write your Prisma Client queries here
    const user = await prisma.user.create({
        data: {
            name: 'Bob',
            email: '2k5zH@example.com',
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