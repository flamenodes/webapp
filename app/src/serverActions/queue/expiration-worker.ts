import { getRedis } from './connection'
import { prisma } from '#/db'
import { ptero } from '../pterodactyl/client'
import { Worker } from 'bullmq'

const redis = getRedis()

// Worker to check and suspend expired servers
export const expirationWorker = new Worker(
  'server-expiration',
  async () => {
    try {
      console.log('\n⏰ Checking for expired servers...')

      // Find all servers with expiresAt in the past that are not yet suspended
      const expiredServers = await prisma.server.findMany({
        where: {
          expiresAt: {
            lt: new Date(),
          },
          suspended: false,
          status: { not: 'TERMINATED' },
        },
        include: {
          orderItem: {
            include: {
              product: true,
            },
          },
        },
      })

      if (expiredServers.length === 0) {
        console.log('✅ No expired servers to suspend')
        return { success: true, suspended: 0 }
      }

      console.log(`⏱️  Found ${expiredServers.length} expired server(s)`)

      let suspendedCount = 0

      for (const server of expiredServers) {
        try {
          const pteroData = (server.pterodactylData ?? {}) as any

          // The panel id lives either on the column or inside the snapshot JSON.
          // We key off the id rather than the product's deploy mode because the
          // order item is detached (SetNull) when its order is deleted, and the
          // server still has to be suspended on the panel.
          const pteroServerId: number | undefined =
            server.pterodactylServerId ?? pteroData?.id ?? undefined

          if (pteroServerId) {
            // Suspend on Pterodactyl
            console.log(`🔒 Suspending Pterodactyl server: ${server.name}`)
            await ptero.post(`/application/servers/${pteroServerId}/suspend`)
          }

          // Update database
          await prisma.server.update({
            where: { id: server.id },
            data: { suspended: true, status: 'SUSPENDED' },
          })

          console.log(`✅ Suspended: ${server.name}`)
          suspendedCount++
        } catch (error: any) {
          console.error(`❌ Failed to suspend ${server.name}:`, error.message)
        }
      }

      console.log(`✅ Expiration check complete. Suspended ${suspendedCount}/${expiredServers.length} servers`)
      return { success: true, suspended: suspendedCount }
    } catch (error: any) {
      console.error('❌ Expiration worker error:', error)
      return { success: false, error: error.message }
    }
  },
  { connection: redis }
)

expirationWorker.on('completed', (job) => {
  console.log(`✅ Expiration check job completed:`, job.data)
})

expirationWorker.on('failed', (job, err) => {
  console.error(`❌ Expiration check job failed:`, err.message)
})

// Schedule to run every hour
async function scheduleExpirationCheck() {
  const queue = (await import('./queues')).expirationQueue
  
  // Remove any existing recurring jobs
  const jobs = await queue.getRepeatableJobs()
  for (const job of jobs) {
    await queue.removeRepeatableByKey(job.key)
  }

  // Add new recurring job: every hour
  await queue.add(
    'check-expiration',
    {},
    {
      repeat: {
        pattern: '0 * * * *', // Every hour at minute 0
      },
      removeOnComplete: true,
    }
  )

  console.log('⏰ Scheduled expiration check to run every hour')
}

// Initialize on import
scheduleExpirationCheck().catch(err => console.error('Failed to schedule expiration check:', err))
