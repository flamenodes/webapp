import { PrismaClient } from './app/src/generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🔍 Checking database...')
  
  const count = await prisma.user.count()
  console.log(`📊 Total users in database: ${count}`)
  
  if (count > 0) {
    const users = await prisma.user.findMany({
      take: 5,
      select: {
        id: true,
        clientId: true,
        name: true,
        email: true,
        username: true,
      }
    })
    console.log('👥 Sample users:', JSON.stringify(users, null, 2))
  } else {
    console.log('⚠️  No users found in database!')
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
