import { Queue, Worker, QueueScheduler, Job } from 'bullmq'
import IORedis from 'ioredis'
import { prisma } from '#/db'
import { ptero } from '../pterodactyl/client'
import { pteroServerData } from '../pterodactyl/configData'

const REDIS_URL = process.env.REDIS_URL ?? 'redis://127.0.0.1:6379'
const connection = new IORedis(REDIS_URL)
const queueName = 'pterodactyl-deploy'

export type PteroDeployJobData = {
  orderId: string
  orderItemId: string
  serverId: string
  name: string
  user: number
  nest: number
  egg: number
  specs: {
    cpu: number
    memory: number
    swap: number
    disk: number
    database: number
    allocation: number
    backups: number
  }
  type: string
}

export const deployQueue = new Queue<PteroDeployJobData>(queueName, {
  connection,
  defaultJobOptions: {
    removeOnComplete: true,
    removeOnFail: true,
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000,
    },
  },
})

new QueueScheduler(queueName, { connection })

export const enqueuePteroDeployment = async (jobData: PteroDeployJobData) => {
  return deployQueue.add('deploy-pterodactyl-server', jobData)
}

new Worker<PteroDeployJobData>(
  queueName,
  async (job: Job<PteroDeployJobData>) => {
    const { orderItemId, serverId, name, user, egg, nest, specs } = job.data

    const payload = await pteroServerData({
      name,
      user,
      egg,
      nest,
      specs,
    })

    const response = await ptero.post('/application/servers', payload)
    const serverData = response.data

    const updateData: Record<string, unknown> = {
      status: 'ACTIVE',
      pterodactylData: serverData,
      resources: specs,
    }

    if (serverData?.attributes?.server?.allocation?.ip) {
      updateData.ip = serverData.attributes.server.allocation.ip
    }

    if (serverData?.attributes?.server?.allocation?.port) {
      updateData.port = Number(serverData.attributes.server.allocation.port)
    }

    await prisma.server.update({
      where: { id: serverId },
      data: updateData,
    })

    return serverData
  },
  { connection },
).on('failed', async (job, err) => {
  if (!job || !job.data) return
  try {
    await prisma.server.update({
      where: { id: job.data.serverId },
      data: {
        status: 'FAILED',
        pterodactylData: {
          error: err?.message ?? 'Unknown deploy error',
        },
      },
    })
  } catch (updateErr) {
    console.error('Failed to update server status after deploy failure', updateErr)
  }
  console.error('Pterodactyl deploy job failed', job.id, err)
})
