import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query']
})

async function main() {
    // ... you will write your Prisma Client queries here
    const user = await prisma.user.findMany({
        where: {
            email: {
                endsWith: '@example.com'
            },
            posts: {
                // find all posts where published is true
                some: {
                    published: true
                }
            },
        },
        // include posts where published is true in the user query 
        include: {
            posts: {
                where: {
                    published: true
                }
            }
        }
    })
    console.log(user)
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