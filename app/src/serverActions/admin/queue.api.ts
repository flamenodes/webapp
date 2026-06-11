import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'
import { z } from 'zod'

const queueNameSchema = z.object({
  queueName: z.enum(['server-deployment', 'email-notifications']),
})

async function getQueueModule() {
  try {
    const { getRedis } = await import('../queue/connection')
    const { emailQueue, deploymentQueue, initQueues } = await import('../queue/queues')
    const redis = getRedis()
    return { redis, emailQueue, deploymentQueue, initQueues }
  } catch (error) {
    console.error('Failed to load queue modules:', error)
    return { redis: null, emailQueue: null, deploymentQueue: null, initQueues: () => {} }
  }
}

async function getQueueCounts(queue: any) {
  if (!queue) {
    return {
      waiting: 0,
      active: 0,
      completed: 0,
      failed: 0,
      delayed: 0,
      paused: 0,
    }
  }
  return await queue.getJobCounts()
}

async function getRecentJobs(queue: any, state: 'completed' | 'failed', limit = 5) {
  if (!queue) return []
  
  try {
    const jobs = await queue.getJobs([state], 0, limit - 1)
    return jobs.map((job: any) => ({
      id: job.id,
      name: job.data.name || job.data.serverName || job.data.type || 'Job',
      state,
      timestamp: job.timestamp || Date.now(),
    }))
  } catch (error) {
    return []
  }
}

export const getQueueStats = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) {
    throw new Error('Unauthorized')
  }

  const userRole = (session.user as any)?.role
  if (userRole !== 'admin' && userRole !== 'owner') {
    throw new Error('Unauthorized - Admin access required')
  }

  // Return empty stats since we're not using queues anymore
  return {
    redisConnected: false,
    deployment: {
      waiting: 0,
      active: 0,
      completed: 0,
      failed: 0,
      recentJobs: [],
    },
    email: {
      waiting: 0,
      active: 0,
      completed: 0,
      failed: 0,
      recentJobs: [],
    },
  }
})

export const retryFailedJobs = createServerFn({ method: 'POST' })
  .inputValidator(queueNameSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) {
      throw new Error('Unauthorized')
    }

    const userRole = (session.user as any)?.role
    if (userRole !== 'admin' && userRole !== 'owner') {
      throw new Error('Unauthorized - Admin access required')
    }

    return { success: true, retriedCount: 0 }
  })

export const clearCompletedJobs = createServerFn({ method: 'POST' })
  .inputValidator(queueNameSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) {
      throw new Error('Unauthorized')
    }

    const userRole = (session.user as any)?.role
    if (userRole !== 'admin' && userRole !== 'owner') {
      throw new Error('Unauthorized - Admin access required')
    }

    return { success: true }
  })
