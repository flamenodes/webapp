import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'
import { hasPermissionFn } from '@/lib/has-permission'
import { prisma } from '#/db'
import { resolveDeployOwnerId } from '../pterodactyl/user-resolver'
import { z } from 'zod'

const retryDeploymentSchema = z.object({
  serverId: z.string(),
})

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

    const server = await prisma.server.findUnique({
      where: { id: data.serverId },
      include: {
        orderItem: {
          include: {
            product: true,
            order: true,
          },
        },
        user: true,
      },
    })

    if (!server) throw new Error('Server not found')

    const orderItem = server.orderItem
    const product = orderItem.product
    const user = server.user

    if (product.deployMode !== 'PTERODACTYL') {
      throw new Error('Only Pterodactyl servers can be deployed')
    }

    // Update status to PROCESSING
    await prisma.server.update({
      where: { id: server.id },
      data: { status: 'PROCESSING' },
    })

    const name = server.name
    const productSpecs = product.specs as Record<string, any> ?? {}
    const userConfig = (orderItem.configuration ?? {}) as Record<string, string>

    let resolvedEgg = Number(productSpecs.egg ?? process.env.PTERO_DEFAULT_EGG ?? 1)
    let resolvedNest = Number(productSpecs.nest ?? process.env.PTERO_DEFAULT_NEST ?? 1)
    let extraEnv: Record<string, string> = {}

    const configValueIds = Object.values(userConfig).filter(Boolean)
    if (configValueIds.length > 0) {
      const configValues = await prisma.configurationValue.findMany({
        where: { value: { in: configValueIds } },
      })
      for (const cv of configValues) {
        const meta = cv.metadata as Record<string, any> | null
        if (!meta) continue
        if (meta.eggId) resolvedEgg = Number(meta.eggId)
        if (meta.nestId) resolvedNest = Number(meta.nestId)
        if (meta.envVars && typeof meta.envVars === 'object') {
          extraEnv = { ...extraEnv, ...meta.envVars }
        }
      }
    }

    const resources = server.resources as any
    const billingDetails = orderItem.order.deliveryData as any

    // Trigger deployment
    const { deployServerFn } = await import('../queue/deploy-functions')

    const pteroOwnerId = await resolveDeployOwnerId({
      customerEmail: billingDetails?.billingDetails?.email || user.email,
      defaultUserId: Number(process.env.PTERO_DEFAULT_USER_ID ?? 1),
    })

    deployServerFn({
      data: {
        orderId: orderItem.orderId,
        orderItemId: orderItem.id,
        serverId: server.id,
        name,
        user: pteroOwnerId,
        nest: resolvedNest,
        egg: resolvedEgg,
        extraEnv,
        specs: {
          cpu: Number(resources?.cpu ?? 0),
          memory: Number(resources?.memory ?? 0),
          swap: Number(resources?.swap ?? 0),
          disk: Number(resources?.disk ?? 0),
          database: Number(resources?.database ?? 0),
          allocation: Number(resources?.allocation ?? 1),
          backups: Number(resources?.backups ?? 0),
        },
        type: product.category,
        userEmail: billingDetails?.billingDetails?.email || user.email,
        userName: billingDetails?.billingDetails?.firstName || user.name,
      },
    }).catch(err => console.error('Manual deployment failed:', err))

    return { success: true, message: 'Deployment triggered' }
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
