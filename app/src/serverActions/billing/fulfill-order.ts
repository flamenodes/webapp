import { prisma } from '#/db'
import { ptero } from '../pterodactyl/client'
import { resolveDeployOwnerId } from '../pterodactyl/user-resolver'
import { calculateExpiryDate } from './expiry'
import { extractPteroSpecsFromProduct, resolvePteroEggConfig } from '../pterodactyl/configData'

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

  // Renewal never re-provisions: it extends the cycle and lifts the expiry
  // suspension. Retry the panel call a couple of times — a 5xx or a timeout
  // here would otherwise leave a paid-for server frozen on the panel.
  let unsuspendError: string | null = null
  if (pteroServerId) {
    let lastError: any = null
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await ptero.post(`/application/servers/${pteroServerId}/unsuspend`)
        lastError = null
        break
      } catch (error: any) {
        lastError = error
        if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, 500 * attempt))
      }
    }
    if (lastError) {
      unsuspendError = lastError?.message ?? String(lastError)
      console.error(
        `Failed to unsuspend Pterodactyl server ${pteroServerId} after 3 attempts:`,
        unsuspendError,
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
        deliveryMessage: unsuspendError
          ? `Server renewed for ${billingPeriod.toLowerCase()} — expires ${newExpiry.toISOString()}. WARNING: the Pterodactyl unsuspend call failed (${unsuspendError}), so the panel may still show it suspended.`
          : `Server renewed for ${billingPeriod.toLowerCase()} — expires ${newExpiry.toISOString()}`,
      },
    }),
  ])

  await sendRenewalEmail(order, server, newExpiry)

  return { renewal: true, serverId: server.id, newExpiry, unsuspendError }
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
        // Billing cycle starts on delivery, not on order creation.
        expiresAt: calculateExpiryDate(item.billingPeriod, deliveryData.customDays ?? undefined),
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
  const deliveryData = (order.deliveryData ?? {}) as { customDays?: number }
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
          // Billing cycle starts when the admin actually delivers the server.
          expiresAt: null,
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
      const specs = extractPteroSpecsFromProduct(item.product.specs)

      // Egg/nest come from the product specs, then the purchased configuration.
      const { egg, nest, extraEnv } = await resolvePteroEggConfig({
        productSpecs: item.product.specs,
        configuration: item.configuration,
      })

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

      const ownerId = await resolveDeployOwnerId({
        customerEmail: billingDetails.email || order.user.email,
        defaultUserId: Number(process.env.PTERO_DEFAULT_USER_ID ?? 1),
      })

      const deploymentData = {
        orderId: order.id,
        orderItemId: item.id,
        serverId: server.id,
        name,
        user: ownerId,
        nest,
        egg,
        extraEnv,
        specs,
        type: item.product.category,
        userEmail: billingDetails.email || order.user.email,
        userName: billingDetails.firstName || order.user.name,
        billingPeriod: item.billingPeriod,
        customDays: deliveryData.customDays ?? undefined,
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
