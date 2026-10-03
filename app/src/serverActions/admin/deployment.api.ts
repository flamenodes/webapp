import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'
import { hasPermissionFn } from '@/lib/has-permission'
import { prisma } from '#/db'
import { getPteroUrl, isPteroConfigured } from '../pterodactyl/client'
import { z } from 'zod'

const retryDeploymentSchema = z.object({
  serverId: z.string(),
})

/** Retry a failed deployment through the BullMQ queue. */
export const retryServerDeployment = createServerFn({ method: 'POST' })
  .validator((data) => retryDeploymentSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    const hasAccess = await hasPermissionFn({
      data: { permissions: { dashboard: ['admin'] } },
    })
    if (!hasAccess) throw new Error('Forbidden')

    const { buildDeploymentRequest, dispatchDeployment } = await import('./deploy-payload')
    const request = await buildDeploymentRequest(data.serverId)

    await prisma.server.update({
      where: { id: data.serverId },
      data: { status: 'PROCESSING' },
    })

    return dispatchDeployment(request, { mode: 'create', source: 'retry' })
  })

/**
 * Deployment pipeline configuration for the admin deploy page.
 *
 * Read on the server: `process.env` is always empty in the browser, which is why
 * the page previously always showed "Not Configured".
 */
export const getDeploymentConfigStatus = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  const hasAccess = await hasPermissionFn({
    data: { permissions: { dashboard: ['admin'] } },
  })
  if (!hasAccess) throw new Error('Forbidden')

  return {
    // PTERO_URL is the single source of truth for the panel URL.
    pteroConfigured: isPteroConfigured(),
    pteroUrl: getPteroUrl() ?? null,
    redisConfigured: Boolean(process.env.REDIS_URL),
    emailConfigured: Boolean(process.env.RESEND_API_KEY),
  }
})

export const getStuckServers = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  const hasAccess = await hasPermissionFn({
    data: { permissions: { dashboard: ['admin'] } },
  })
  if (!hasAccess) throw new Error('Forbidden')

  const servers = await prisma.server.findMany({
    where: {
      status: {
        in: ['PROCESSING', 'FAILED'],
      },
      createdAt: {
        lt: new Date(Date.now() - 10 * 60 * 1000), // Older than 10 minutes
      },
    },
    include: {
      orderItem: {
        include: {
          product: true,
          order: true,
        },
      },
      user: true,
    },
    orderBy: { createdAt: 'desc' },
  })

  return servers
})

export const getDeploymentQueueLogs = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  const hasAccess = await hasPermissionFn({
    data: { permissions: { dashboard: ['admin'] } },
  })
  if (!hasAccess) throw new Error('Forbidden')

  // Queues only exist when Redis is configured; otherwise report the section
  // as unavailable instead of throwing on an uninitialized queue.
  const { deploymentQueue } = await import('../queue/queues')
  if (!deploymentQueue) {
    return { available: false, logs: [] }
  }

  const jobs = await deploymentQueue.getCompleted(0, 50)
  const logs = jobs
    .map((job: any) => {
      const data = (job.data ?? {}) as Record<string, any>
      const result = (job.returnvalue ?? {}) as Record<string, any>
      const createdAt = job.timestamp
        ? new Date(Number(job.timestamp)).toISOString()
        : null
      const completedAt = job.finishedOn
        ? new Date(Number(job.finishedOn)).toISOString()
        : null
      const durationMs =
        job.finishedOn && job.processedOn
          ? Math.max(Number(job.finishedOn) - Number(job.processedOn), 0)
          : null

      return {
        id: String(job.id ?? ''),
        serverName: data.name ?? '',
        serverId: data.serverId ?? '',
        orderId: data.orderId ?? '',
        userEmail: data.userEmail ?? '',
        mode: data.mode ?? 'create',
        source: data.source ?? 'order',
        attemptsMade: Number(job.attemptsMade ?? 1),
        createdAt,
        completedAt,
        durationMs,
        ip: result.ip ?? null,
        port: result.port ?? null,
      }
    })
    .sort((a: any, b: any) =>
      (b.completedAt ?? '').localeCompare(a.completedAt ?? ''),
    )

  return { available: true, logs }
})
