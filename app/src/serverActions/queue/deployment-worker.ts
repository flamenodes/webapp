import { getRedis } from './connection'
import type { DeploymentJobData } from './queues'
import { prisma } from '#/db'
import { pteroServerData } from '../pterodactyl/configData'
import { ptero } from '../pterodactyl/client'
import { addEmailJob } from './queues'
import { Worker } from 'bullmq'

async function processPteroDeployment(job: DeploymentJobData) {
  console.log(`\n🚀 Starting Pterodactyl deployment for: ${job.name}`)
  console.log('Job specs:', JSON.stringify(job.specs, null, 2))
  
  let lastError: any = null
  const maxRetries = 3
  const triedAllocations: number[] = []
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`\n🔄 Deployment attempt ${attempt}/${maxRetries}`)
      
      const serverPayload = await pteroServerData({
        name: job.name,
        user: job.user,
        egg: job.egg,
        nest: job.nest,
        specs: job.specs,
      }, triedAllocations)

      if (job.extraEnv && Object.keys(job.extraEnv).length > 0) {
        serverPayload.environment = { ...serverPayload.environment, ...job.extraEnv }
      }

      console.log('\n📦 Final server payload:')
      console.log('Limits:', JSON.stringify(serverPayload.limits, null, 2))
      console.log('Allocation:', serverPayload.allocation)
      console.log('Feature limits:', JSON.stringify(serverPayload.feature_limits, null, 2))
      
      triedAllocations.push(serverPayload.allocation.default)

      const res = await ptero.post('/application/servers', serverPayload)
      const attributes = res.data?.attributes ?? res.data?.data?.attributes

      if (!attributes) {
        throw new Error('No server attributes returned from Pterodactyl')
      }

      const ip = attributes.relationships?.allocations?.data?.[0]?.attributes?.ip ?? null
      const port = attributes.relationships?.allocations?.data?.[0]?.attributes?.port ?? null

      await prisma.server.update({
        where: { id: job.serverId },
        data: {
          status: 'ACTIVE',
          pterodactylData: attributes,
          ip: ip,
          port: port,
        },
      })

      console.log(`✅ Deployment successful: ${job.name} - ${ip}:${port}\n`)
      return { ip, port, pterodactylId: attributes.id }
    } catch (error: any) {
      lastError = error
      const isDaemonError = error.response?.data?.errors?.some(
        (e: any) => e.code === 'DaemonConnectionException'
      )
      
      if (isDaemonError && attempt < maxRetries) {
        console.warn(`⚠️ Daemon connection failed on attempt ${attempt}, trying different allocation...`)
        await new Promise(resolve => setTimeout(resolve, 2000))
        continue
      }
      
      throw error
    }
  }
  
  throw lastError || new Error('Deployment failed after all retries')
}

let deploymentWorker: any = null

const redis = getRedis()
if (redis) {
  try {
    deploymentWorker = new Worker(
    'server-deployment',
    async (job) => {
      const data = job.data as DeploymentJobData

      try {
        console.log(`Starting deployment for server: ${data.name}`)

        await addEmailJob({
          type: 'server-processing',
          to: data.userEmail,
          subject: `Your Server is Being Deployed - ${data.name}`,
          data: {
            userName: data.userName,
            serverName: data.name,
            serverId: data.serverId,
          },
        })

        const deployResult = await processPteroDeployment(data)

        await prisma.order.update({
          where: { id: data.orderId },
          data: { status: 'DELIVERED' },
        })

        await addEmailJob({
          type: 'server-ready',
          to: data.userEmail,
          subject: `Your Server is Ready! - ${data.name}`,
          data: {
            userName: data.userName,
            serverName: data.name,
            serverId: data.serverId,
            ip: deployResult.ip,
            port: deployResult.port,
            panelUrl: process.env.PTERODACTYL_URL,
          },
        })

        console.log(`✓ Deployment completed for server: ${data.name}`)
        return deployResult
      } catch (error) {
        console.error(`Deployment failed for server: ${data.name}`, error)
        
        await prisma.server.update({
          where: { id: data.serverId },
          data: { status: 'FAILED' },
        })

        throw error
      }
    },
    {
      connection: redis,
      concurrency: 3,
    }
  )

  deploymentWorker.on('completed', (job) => {
    console.log(`✓ Deployment job ${job.id} completed: ${job.data.name}`)
  })

  deploymentWorker.on('failed', (job, err) => {
    console.error(`✗ Deployment job ${job?.id} failed:`, err.message)
  })

  console.log('🚀 Deployment worker started')
  } catch {
    console.warn('⚠️  Failed to start deployment worker')
  }
} else {
  console.warn('⚠️  Deployment worker disabled - Redis not available')
}

export { deploymentWorker }
