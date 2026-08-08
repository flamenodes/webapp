import { prisma } from '#/db'
import { ptero } from '../pterodactyl/client'
import { calculateExpiryDate } from './expiry'
import { extractPteroSpecsFromProduct } from '../pterodactyl/configData'

type OrderWithRelations = Awaited<ReturnType<typeof loadOrder>>

async function loadOrder(orderId: string) {
  return prisma.order.findUnique({
    where: { id: orderId },
    include: {
      items: { include: { product: true } },
      renewalForServer: true,
      user: { select: { id: true, name: true, email: true } },
    },
  })
}

async function sendRenewalEmail(
  order: NonNullable<OrderWithRelations>,
  server: { name: string },
  newExpiry: Date,
) {
  try {
    const { sendEmailFn } = await import('../queue/deploy-functions')
    await sendEmailFn({
      data: {
        type: 'server-renewed',
        to: order.user.email,
        subject: `Your server has been renewed - ${server.name}`,
        data: {
          userName: order.user.name,
          serverName: server.name,
          orderId: order.id,
          amount: order.totalAmount.toFixed(2),
          newExpiry: newExpiry.toISOString(),
        },
      },
    })
  } catch (error) {
    console.error('Renewal email send failed:', error)
  }
}

/** Renewal: extend expiresAt + unsuspend the existing server. No new server is created. */
async function fulfillRenewal(order: NonNullable<OrderWithRelations>) {
  const deliveryData = (order.deliveryData ?? {}) as any
  const billingPeriod: string = deliveryData.billingPeriod || order.items[0]?.billingPeriod || 'MONTHLY'
  const customDays: number | undefined = deliveryData.customDays

  const server = order.renewalForServer
  if (!server) throw new Error('Renewal server not found')

  const baseMs = Math.max(
    Date.now(),
    server.expiresAt ? new Date(server.expiresAt).getTime() : Date.now(),
  )
  const newExpiry = calculateExpiryDate(billingPeriod, customDays, new Date(baseMs))

  const pteroData = (server.pterodactylData ?? {}) as any
  const pteroServerId = server.pterodactylServerId ?? pteroData?.id

  // Unsuspend on Pterodactyl when applicable
  if (pteroServerId) {
    try {
      await ptero.post(`/application/servers/${pteroServerId}/unsuspend`)
    } catch (error: any) {
      console.error(
        `Failed to unsuspend Pterodactyl server ${pteroServerId}:`,
        error?.message,
      )
    }
  }

  await prisma.$transaction([
    prisma.server.update({
      where: { id: server.id },
      data: { expiresAt: newExpiry, suspended: false, status: 'ACTIVE' },
    }),
    prisma.order.update({
      where: { id: order.id },
      data: {
        status: 'DELIVERED',
        deliveryMessage: `Server renewed for ${billingPeriod.toLowerCase()} — expires ${newExpiry.toISOString()}`,
      },
    }),
  ])

  await sendRenewalEmail(order, server, newExpiry)

  return { renewal: true, serverId: server.id, newExpiry }
}

/** Manual admin order that links an already-existing Pterodactyl server. */
async function fulfillManualPteroLink(
  order: NonNullable<OrderWithRelations>,
  deliveryData: any,
) {
  const item = order.items[0]
  if (!item) throw new Error('Order has no items')

  const product = item.product
  const attrs = deliveryData.pteroAttributes as any
  const allocation =
    attrs?.relationships?.allocations?.data?.[0]?.attributes ?? attrs?.main_allocation ?? null
  const ip = allocation?.ip ?? deliveryData.pteroIp ?? null
  const port = allocation?.port ?? deliveryData.pteroPort ?? null

  const existing = await prisma.server.findUnique({
    where: { orderItemId: item.id },
  })

  if (!existing) {
    await prisma.server.create({
      data: {
        orderItemId: item.id,
        userId: order.userId,
        name: item.productName,
        type: product.category,
        status: 'ACTIVE',
        ip,
        port,
        pterodactylServerId: deliveryData.pteroServerId,
        pterodactylData: attrs ?? deliveryData,
        expiresAt: item.expiresAt,
      },
    })
  }

  await prisma.order.update({
    where: { id: order.id },
    data: {
      status: 'DELIVERED',
      deliveryMessage: 'Server linked to existing Pterodactyl server',
    },
  })

  return { manualPteroLink: true, serverId: existing?.id ?? null }
}

/** Normal purchase: provision CUSTOM (pending manual) + PTERODACTYL (create + deploy) servers. */
async function provisionNewServers(order: NonNullable<OrderWithRelations>) {
  const billingDetails = ((order.deliveryData ?? {}) as any)?.billingDetails ?? {}
  const pteroItems = order.items.filter((i) => i.product.deployMode === 'PTERODACTYL')
  const customItems = order.items.filter((i) => i.product.deployMode === 'CUSTOM')

  // CUSTOM items — create a pending server record for manual delivery
  await Promise.all(
    customItems.map(async (item) => {
      const existing = await prisma.server.findUnique({
        where: { orderItemId: item.id },
      })
      if (existing) return

      await prisma.server.create({
        data: {
          orderItemId: item.id,
          userId: order.userId,
          name: `${item.productName}-${item.id.slice(0, 8)}`,
          type: item.product.category,
          status: 'PENDING_MANUAL',
          expiresAt: item.expiresAt,
        },
      })
    }),
  )

  // PTERODACTYL items — create server record + deploy
  await Promise.all(
    pteroItems.map(async (item) => {
      const existing = await prisma.server.findUnique({
        where: { orderItemId: item.id },
      })
      if (existing) return

      const name = `${item.productName}-${item.id.slice(0, 8)}`
      const productSpecs = (item.product.specs ?? {}) as Record<string, any>
      const userConfig = (item.configuration ?? {}) as Record<string, string>
      const specs = extractPteroSpecsFromProduct(item.product.specs)

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

      const server = await prisma.server.create({
        data: {
          orderItemId: item.id,
          userId: order.userId,
          name,
          type: item.product.category,
          status: 'PROCESSING',
          expiresAt: item.expiresAt,
          resources: specs,
        },
      })

      const deploymentData = {
        orderId: order.id,
        orderItemId: item.id,
        serverId: server.id,
        name,
        user: Number(process.env.PTERO_DEFAULT_USER_ID ?? 1),
        nest: resolvedNest,
        egg: resolvedEgg,
        extraEnv,
        specs,
        type: item.product.category,
        userEmail: billingDetails.email || order.user.email,
        userName: billingDetails.firstName || order.user.name,
      }

      // Prefer the deployment queue, fall back to direct deployment
      try {
        const { addDeploymentJob } = await import('../queue/queues')
        const job = await addDeploymentJob(deploymentData)
        if (job) return
      } catch (error: any) {
        console.warn('Queue unavailable, deploying directly:', error?.message)
      }

      const { deployServerFn } = await import('../queue/deploy-functions')
      deployServerFn({ data: deploymentData }).catch((err) =>
        console.error('Direct deployment failed:', err),
      )
    }),
  )

  return { provisioned: true }
}

/**
 * Fulfill a paid order. Handles three cases:
 *  1. Renewal (order.renewalForServerId)  → extend + unsuspend existing server
 *  2. Manual admin order linking an existing Pterodactyl server (deliveryData.pteroServerId)
 *  3. Normal purchase → provision CUSTOM/PTERODACTYL servers
 * Idempotent: only runs on orders in PAID status.
 */
export async function fulfillPaidOrder(orderId: string) {
  const order = await loadOrder(orderId)
  if (!order) throw new Error('Order not found')

  // Only fulfill once — callers set PAID before invoking.
  if (order.status !== 'PAID') {
    return { skipped: true, status: order.status }
  }

  // 1. Renewal order
  if (order.renewalForServerId) {
    return fulfillRenewal(order)
  }

  // 2. Manual order linking an existing Pterodactyl server
  const deliveryData = (order.deliveryData ?? {}) as any
  if (deliveryData.pteroServerId) {
    return fulfillManualPteroLink(order, deliveryData)
  }

  // 3. Normal purchase
  return provisionNewServers(order)
}
