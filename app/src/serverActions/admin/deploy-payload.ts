/**
 * Shared "deploy this existing server again" plumbing for admin actions.
 *
 * Building the payload from a server row was duplicated (and drift-prone)
 * across the retry and redeploy actions; this is the single source of truth.
 */
import { prisma } from '#/db'
import { extractPteroSpecsFromProduct } from '../pterodactyl/configData'
import { resolveDeployOwnerId } from '../pterodactyl/user-resolver'
import type { DeploymentJobData } from '../queue/queues'

export type DeploymentRequest = Omit<DeploymentJobData, 'mode' | 'source'>

export interface DispatchResult {
  /** True when the work was handed to BullMQ instead of run inline. */
  queued: boolean
  success: boolean
  message: string
  ip?: string | null
  port?: number | null
  pterodactylId?: number
}

/** Gather everything a Pterodactyl deployment needs from the database. */
export async function buildDeploymentRequest(serverId: string): Promise<DeploymentRequest> {
  const server = await prisma.server.findUniqueOrThrow({
    where: { id: serverId },
    include: {
      user: { select: { id: true, name: true, email: true } },
      orderItem: { include: { order: true, product: true } },
    },
  })

  const orderItem = server.orderItem
  const product = orderItem?.product
  if (!product) throw new Error('This server has no product attached')
  if (product.deployMode !== 'PTERODACTYL') {
    throw new Error('Only Pterodactyl servers can be deployed')
  }

  const specs = extractPteroSpecsFromProduct(product.specs)
  if (!specs.cpu || !specs.memory || !specs.disk) {
    throw new Error('Product specs are incomplete. CPU, memory, and disk must be greater than 0.')
  }

  const pteroConfig = (product.pteroConfig as any) ?? {}
  let nest = Number(pteroConfig.nest ?? process.env.PTERO_DEFAULT_NEST ?? 1)
  let egg = Number(pteroConfig.egg ?? process.env.PTERO_DEFAULT_EGG ?? 1)
  let extraEnv: Record<string, string> = { ...(pteroConfig.extraEnv ?? {}) }

  // A purchased configuration can override the egg/nest and add env vars.
  const userConfig = (orderItem.configuration ?? {}) as Record<string, string>
  const configValueIds = Object.values(userConfig).filter(Boolean)
  if (configValueIds.length > 0) {
    const configValues = await prisma.configurationValue.findMany({
      where: { value: { in: configValueIds } },
    })
    for (const cv of configValues) {
      const meta = cv.metadata as Record<string, any> | null
      if (!meta) continue
      if (meta.eggId) egg = Number(meta.eggId)
      if (meta.nestId) nest = Number(meta.nestId)
      if (meta.envVars && typeof meta.envVars === 'object') {
        extraEnv = { ...extraEnv, ...meta.envVars }
      }
    }
  }

  const billingDetails = (orderItem.order?.deliveryData as any)?.billingDetails ?? {}
  const customerEmail = billingDetails.email || server.user.email

  const pteroUser = await resolveDeployOwnerId({
    customerEmail,
    defaultUserId: Number(pteroConfig.user ?? process.env.PTERO_DEFAULT_USER_ID ?? 1),
  })

  return {
    orderId: orderItem.order?.id ?? '',
    orderItemId: server.orderItemId,
    serverId: server.id,
    name: server.name,
    user: pteroUser,
    nest,
    egg,
    extraEnv,
    specs,
    type: product.category ?? 'pterodactyl',
    userEmail: customerEmail,
    userName: billingDetails.firstName || server.user.name || 'User',
    billingPeriod: orderItem.billingPeriod,
  }
}

/**
 * Hand a deployment to BullMQ. Falls back to inline processing when Redis is
 * not configured, so the admin actions keep working without a queue.
 */
export async function dispatchDeployment(
  request: DeploymentRequest,
  options: { mode: 'create' | 'redeploy'; source: 'admin' | 'retry' | 'order' },
): Promise<DispatchResult> {
  const { addDeploymentJob } = await import('../queue/queues')

  const job = await addDeploymentJob({
    ...request,
    mode: options.mode,
    source: options.source,
  }).catch((error) => {
    console.error('❌ Could not enqueue deployment job:', error)
    return null
  })

  if (job) {
    return {
      queued: true,
      success: true,
      message:
        options.mode === 'redeploy'
          ? 'Redeployment queued — it will run in the background.'
          : 'Deployment queued — it will run in the background.',
    }
  }

  console.warn('⚠️  Deployment queue unavailable — running the deployment inline')
  const payload = { data: request } as any
  const result: any =
    options.mode === 'redeploy'
      ? await (await import('../queue/deploy-functions')).redeployServerFn(payload)
      : await (await import('../queue/deploy-functions')).deployServerFn(payload)

  return {
    queued: false,
    success: result?.success !== false,
    message:
      result?.success === false
        ? result?.error || 'Deployment failed'
        : options.mode === 'redeploy'
          ? 'Server redeployed successfully'
          : 'Deployment completed successfully',
    ip: result?.data?.ip ?? null,
    port: result?.data?.port ?? null,
    pterodactylId: result?.data?.pterodactylId,
  }
}
