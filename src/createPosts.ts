import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const post = await prisma.post.create({
        data: {
            title: 'Hello World2',
            content: 'Hello World content2',
            published: true,
            author: {
                connect: {
                    id: 2
                }
            }
        }
    })
    console.log(post)
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