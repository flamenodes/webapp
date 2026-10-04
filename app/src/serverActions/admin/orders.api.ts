import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { prisma } from '#/db'
import { Prisma } from '#/generated/prisma/client'
import { auth } from '@/lib/auth'
import { z } from 'zod'
import { razorpay } from '../razorpay/instance'
import { ptero } from '../pterodactyl/client'
import { resolvePteroServerId } from '../pterodactyl/server-resolver'
import { resolveDeployOwnerId } from '../pterodactyl/user-resolver'
import { calculateExpiryDate } from '../billing/expiry'
import { suspendServersForOrder } from '../billing/suspend-order-servers'

const wrapSuccess = <T>(message: string, data?: T) => ({ success: true, message, data })
const wrapError = (message: string) => ({ success: false, message })

const createManualOrderSchema = z.object({
  userEmail: z.string().email(),
  quantity: z.string().transform((v) => parseInt(v, 10)),
  orderType: z.enum(['EXISTING', 'CUSTOM']),
  productId: z.string().optional(),
  planName: z.string().optional(),
  price: z.string().optional().transform((v) => (v ? parseInt(v, 10) : undefined)),
  category: z.enum(['VPS', 'VDS', 'WEBHOST', 'DISCORD', 'DDOS_PROT', 'DEDICATED', 'MINECRAFT']).optional(),
  billingPeriod: z.enum(['HOURLY', 'DAILY', 'MONTHLY', 'QUARTERLY', 'SEMIANNUALLY', 'YEARLY', 'CUSTOM']).default('MONTHLY'),
  customDays: z.string().optional().transform((v) => (v ? parseInt(v, 10) : undefined)),
  pteroServerId: z.union([z.number().int().positive(), z.string().min(1)]),
  linkDirectly: z.boolean().default(false),
})

const generatePaymentLinkSchema = z.object({
  orderId: z.string(),
})

const updateOrderStatusSchema = z.object({
  orderId: z.string(),
  status: z.string(),
})

const changeOrderPurchaseDateSchema = z.object({
  orderId: z.string(),
  purchasedOn: z.string(), // ISO date string, e.g. '2026-08-09'
})

export const getRazorpayKeyId = createServerFn({ method: 'GET' }).handler(async () => {
  return process.env.RAZORPAY_KEY_ID || ''
})

export const getAllOrders = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  })

  const role = user?.role?.toUpperCase()
  if (role !== 'ADMIN' && role !== 'OWNER') throw new Error('Forbidden')

  return prisma.order.findMany({
    include: {
      user: { select: { id: true, name: true, email: true, image: true } },
      // `server` makes the order → server pairing visible in the admin table.
      items: { include: { product: true, server: true } },
    },
    orderBy: { createdAt: 'desc' },
  })
})

export const createManualOrder = createServerFn({ method: 'POST' })
  .validator(createManualOrderSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const adminUser = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    })

    const role = adminUser?.role?.toUpperCase()
    if (role !== 'ADMIN' && role !== 'OWNER') return wrapError('Forbidden')

    const user = await prisma.user.findUnique({
      where: { email: data.userEmail },
    })

    if (!user) return wrapError('User not found with this email')

    // Resolve the product backing this order.
    // EXISTING → pick from the product catalog (recommended).
    // CUSTOM   → one-off product created hidden from the catalog.
    let product
    let unitPrice: number

    if (data.orderType === 'CUSTOM') {
      if (!data.planName || !data.price || !data.category) {
        return wrapError('Plan name, price and category are required for a custom product')
      }

      product = await prisma.product.create({
        data: {
          planName: data.planName,
          price: data.price,
          category: data.category,
          inStock: false,
          deployMode: 'PTERODACTYL',
          specs: {},
          sortOrder: 9999,
        },
      })

      unitPrice = data.price
    } else {
      if (!data.productId) return wrapError('Please choose a product')

      product = await prisma.product.findUnique({
        where: { id: data.productId },
        include: { billingOptions: true },
      })

      if (!product) return wrapError('Product not found')

      // Use the billing-period price when available, fall back to the base price
      const billingOption = product.billingOptions.find(
        (opt) => opt.billingPeriod === data.billingPeriod,
      )
      unitPrice = billingOption?.price ?? product.price
    }

    const totalPrice = unitPrice * data.quantity
    const expiresAt = calculateExpiryDate(data.billingPeriod, data.customDays)

    // Resolve the identifier (numeric id, short uuid, or full uuid) to the numeric server id.
    let pteroServerId: number
    try {
      pteroServerId = await resolvePteroServerId(data.pteroServerId)
    } catch (error: any) {
      return wrapError(error?.message || 'Invalid Pterodactyl server id')
    }

    // Fetch the existing Pterodactyl server to link against
    let pteroAttributes: any
    try {
      const res = await ptero.get(`/application/servers/${pteroServerId}`)
      pteroAttributes = res.data?.attributes
      if (!pteroAttributes) throw new Error('No attributes returned from Pterodactyl')
    } catch (error: any) {
      return wrapError(`Could not fetch Pterodactyl server ${pteroServerId}: ${error?.message || 'not found'}`)
    }

    const allocations = pteroAttributes?.relationships?.allocations?.data ?? []
    const mainAlloc =
      allocations.find(
        (a: any) => a.attributes?.id === pteroAttributes?.main_allocation,
      )?.attributes ?? allocations[0]?.attributes
    const ip = mainAlloc?.ip ?? null
    const port = mainAlloc?.port ?? null

    const orderStatus = data.linkDirectly ? 'PAID' : 'PENDING'

    const order = await prisma.order.create({
      data: {
        userId: user.id,
        status: orderStatus,
        subtotalAmount: totalPrice,
        discountAmount: 0,
        totalAmount: totalPrice,
        deliveryData: {
          pteroServerId,
          pteroAttributes,
          billingPeriod: data.billingPeriod,
          customDays: data.customDays ?? null,
          orderType: data.orderType,
        },
        items: {
          create: {
            productId: product.id,
            productName: product.planName,
            quantity: data.quantity,
            billingPeriod: data.billingPeriod,
            unitPrice,
            totalPrice,
            specsSnapshot: product.specs ?? {},
            expiresAt,
          },
        },
      },
      include: { items: { include: { product: true } } },
    })

    // Deliver now: server is already provisioned, so link it and mark delivered.
    if (data.linkDirectly) {
      const server = await prisma.server.create({
        data: {
          orderItemId: order.items[0].id,
          userId: user.id,
          name: product.planName,
          type: product.category,
          status: 'ACTIVE',
          ip,
          port,
          pterodactylServerId: pteroServerId,
          pterodactylData: pteroAttributes,
          expiresAt,
        },
      })

      await prisma.order.update({
        where: { id: order.id },
        data: {
          status: 'DELIVERED',
          deliveryMessage: `Linked to existing Pterodactyl server ${pteroServerId}`,
        },
      })

      return wrapSuccess('Order created and server linked', { order, server })
    }

    // Pending + payment link: order is PENDING, generate a Razorpay link.
    try {
      const razorpayOrder = await razorpay.orders.create({
        amount: totalPrice * 100,
        currency: 'INR',
        receipt: `ord_${order.id.slice(0, 32)}`,
        notes: {
          orderId: order.id,
          userId: user.id,
          customerEmail: user.email,
        },
      })

      await prisma.order.update({
        where: { id: order.id },
        data: {
          deliveryData: {
            ...(order.deliveryData as any),
            razorpayOrderId: razorpayOrder.id,
            razorpayAmount: razorpayOrder.amount,
          },
        },
      })

      const paymentLink = `${process.env.VITE_CLIENT_URL || process.env.CLIENT_URL || 'http://localhost:3000'}/checkout/payment?orderId=${order.id}&razorpayOrderId=${razorpayOrder.id}`

      return wrapSuccess('Order created. Payment link generated.', {
        orderId: order.id,
        razorpayOrderId: razorpayOrder.id,
        paymentLink,
      })
    } catch (error: any) {
      console.error('Razorpay error:', error)
      return wrapSuccess('Order created. Payment link failed to generate — generate manually.', {
        orderId: order.id,
        razorpayOrderId: null,
        paymentLink: null,
      })
    }
  })

export const generatePaymentLink = createServerFn({ method: 'POST' })
  .validator(generatePaymentLinkSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const adminUser = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    })

    const role = adminUser?.role?.toUpperCase()
    if (role !== 'ADMIN' && role !== 'OWNER') return wrapError('Forbidden')

    const order = await prisma.order.findUnique({
      where: { id: data.orderId },
      include: { user: true, items: true },
    })

    if (!order) return wrapError('Order not found')

    if (order.status !== 'PENDING') {
      return wrapError('Payment link can only be generated for pending orders')
    }

    try {
      const razorpayOrder = await razorpay.orders.create({
        amount: order.totalAmount * 100,
        currency: 'INR',
        receipt: `ord_${order.id.slice(0, 32)}`,
        notes: {
          orderId: order.id,
          userId: order.userId,
          customerEmail: order.user.email,
        },
      })

      await prisma.order.update({
        where: { id: order.id },
        data: {
          deliveryData: {
            razorpayOrderId: razorpayOrder.id,
            razorpayAmount: razorpayOrder.amount,
            razorpayCurrency: razorpayOrder.currency,
          },
        },
      })

      const paymentLink = `${process.env.VITE_CLIENT_URL || process.env.CLIENT_URL || 'http://localhost:3000'}/checkout/payment?orderId=${order.id}&razorpayOrderId=${razorpayOrder.id}`

      return wrapSuccess('Payment link generated successfully', {
        orderId: order.id,
        razorpayOrderId: razorpayOrder.id,
        paymentLink,
      })
    } catch (error: any) {
      console.error('Razorpay error:', error)
      return wrapError(error.message || 'Failed to create Razorpay order')
    }
  })

export const updateOrderStatus = createServerFn({ method: 'POST' })
  .validator(updateOrderStatusSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const adminUser = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    })

    const role = adminUser?.role?.toUpperCase()
    if (role !== 'ADMIN' && role !== 'OWNER') return wrapError('Forbidden')

    const order = await prisma.order.findUnique({
      where: { id: data.orderId },
    })

    if (!order) return wrapError('Order not found')

    // Cancelling stops + suspends the servers and marks them Expired.
    if (data.status === 'CANCELLED') {
      await suspendServersForOrder(data.orderId)
    }

    const updatedOrder = await prisma.order.update({
      where: { id: data.orderId },
      data: { status: data.status as any },
    })

    return wrapSuccess('Order status updated successfully', updatedOrder)
  })

export const changeOrderPurchaseDate = createServerFn({ method: 'POST' })
  .validator(changeOrderPurchaseDateSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const adminUser = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    })

    const role = adminUser?.role?.toUpperCase()
    if (role !== 'ADMIN' && role !== 'OWNER') return wrapError('Forbidden')

    const order = await prisma.order.findUnique({
      where: { id: data.orderId },
      include: { items: { include: { server: true } } },
    })
    if (!order) return wrapError('Order not found')

    const purchasedOn = new Date(data.purchasedOn)
    if (isNaN(purchasedOn.getTime())) return wrapError('Invalid purchase date')

    const deliveryData = (order.deliveryData ?? {}) as any
    const customDays = deliveryData?.customDays as number | undefined

    // Recompute every order item's expiry from the new purchase date. The
    // renewal countdown (both in this table and on the user's server page)
    // is driven by expiresAt, so the linked server expiry moves with it.
    const updatedItems = await Promise.all(
      order.items.map(async (item) => {
        const newExpiry = calculateExpiryDate(item.billingPeriod, customDays, purchasedOn)
        const updatedItem = await prisma.orderItem.update({
          where: { id: item.id },
          data: { expiresAt: newExpiry },
        })
        if (item.server) {
          await prisma.server.update({
            where: { id: item.server.id },
            data: { expiresAt: newExpiry },
          })
        }
        return updatedItem
      }),
    )

    const updatedOrder = await prisma.order.update({
      where: { id: data.orderId },
      data: { createdAt: purchasedOn },
    })

    return wrapSuccess('Purchase date updated successfully', {
      order: updatedOrder,
      itemCount: updatedItems.length,
    })
  })

export const getAllProducts = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  })

  const role = user?.role?.toUpperCase()
  if (role !== 'ADMIN' && role !== 'OWNER') throw new Error('Forbidden')

  return prisma.product.findMany({
    orderBy: { planName: 'asc' },
  })
})

const deliverCustomOrderSchema = z.object({
  orderId: z.string(),
  serverName: z.string().min(1),
  ip: z.string().optional(),
  port: z.number().optional(),
  notes: z.string().optional(),
})

export const getPendingCustomOrders = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { role: true } })
  const role = user?.role?.toLowerCase()
  if (role !== 'admin' && role !== 'owner') throw new Error('Forbidden')

  const servers = await prisma.server.findMany({
    where: { status: 'PENDING_MANUAL' },
    include: {
      orderItem: {
        include: {
          order: { include: { user: true } },
          product: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return wrapSuccess('Pending manual deliveries fetched', servers)
})

export const deliverCustomOrder = createServerFn({ method: 'POST' })
  .validator(deliverCustomOrderSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { role: true } })
    const role = user?.role?.toLowerCase()
    if (role !== 'admin' && role !== 'owner') return wrapError('Forbidden')

    // Find the PENDING_MANUAL server for this order
    const order = await prisma.order.findUnique({
      where: { id: data.orderId },
      include: { items: { include: { server: true } } },
    })

    if (!order) return wrapError('Order not found')

    const pendingServer = order.items
      .flatMap((i) => (i.server ? [i.server] : []))
      .find((s) => s.status === 'PENDING_MANUAL')

    if (!pendingServer) return wrapError('No pending manual server found for this order')

    // Billing cycle starts on delivery, not on order creation.
    const item = order.items[0]
    const deliveryData = (order.deliveryData ?? {}) as any
    const deliveredAt = calculateExpiryDate(item?.billingPeriod ?? 'MONTHLY', deliveryData?.customDays ?? undefined)

    // Update the server with the delivery info
    const updatedServer = await prisma.server.update({
      where: { id: pendingServer.id },
      data: {
        name: data.serverName,
        ip: data.ip || null,
        port: data.port || null,
        status: 'ACTIVE',
        expiresAt: deliveredAt,
        pterodactylData: data.notes ? { notes: data.notes } : undefined,
      },
    })

    // Mark the order as DELIVERED
    await prisma.order.update({
      where: { id: data.orderId },
      data: {
        status: 'DELIVERED',
        deliveryMessage: data.notes || 'Server delivered manually',
      },
    })

    return wrapSuccess('Order delivered successfully', updatedServer)
  })

const deleteOrderSchema = z.object({
  orderId: z.string(),
  /** Delete the local Server row too. Unchecked → the server is detached and keeps running. */
  deleteServerRecord: z.boolean().default(true),
  /** Delete the server from the Pterodactyl panel too. */
  deletePteroServers: z.boolean().default(true),
})

const deleteOrdersSchema = z.object({
  orderIds: z.array(z.string()).min(1),
  deleteServerRecord: z.boolean().default(true),
  deletePteroServers: z.boolean().default(true),
})

const deployOrderSchema = z.object({
  orderId: z.string(),
})

const deployCustomOrderSchema = z.object({
  orderId: z.string(),
  serverName: z.string(),
  panelUrl: z.string().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
  message: z.string(),
})

type DeletableItem = {
  id: string
  server: {
    id: string
    pterodactylServerId: number | null
    pterodactylData: unknown
  } | null
}

/**
 * Best-effort removal of the panel servers behind these order items. Panel
 * failures are collected and reported but never abort the database delete —
 * a half-deleted order is worse than a stray panel server.
 */
async function deletePterodactylServersForItems(items: DeletableItem[]) {
  const failures: string[] = []

  for (const item of items) {
    const server = item.server
    if (!server) continue

    const pteroData = (server.pterodactylData ?? {}) as { id?: number }
    const pteroServerId = server.pterodactylServerId ?? pteroData?.id
    if (!pteroServerId) continue

    try {
      await ptero.delete(`/application/servers/${pteroServerId}`)
    } catch (error: any) {
      console.error(`Failed to delete Pterodactyl server ${pteroServerId}:`, error?.message)
      failures.push(`#${pteroServerId} (${error?.message ?? 'unknown error'})`)
    }
  }

  return failures
}

export const deleteOrder = createServerFn({ method: 'POST' })
  .validator(deleteOrderSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { role: true } })
    const role = user?.role?.toLowerCase()
    if (role !== 'admin' && role !== 'owner') return wrapError('Forbidden')

    const order = await prisma.order.findUnique({
      where: { id: data.orderId },
      include: {
        items: {
          include: {
            server: true,
            product: { select: { deployMode: true } },
          },
        },
      },
    })

    if (!order) return wrapError('Order not found')

    const failures = data.deletePteroServers
      ? await deletePterodactylServersForItems(order.items)
      : []

    if (data.deleteServerRecord) {
      // Cascade removes the order items and their servers.
      await prisma.order.delete({ where: { id: data.orderId } })
    } else {
      // Keep the servers alive; detach them so the cascade has nothing to remove.
      // A server whose panel entry was just deleted is marked TERMINATED and
      // unlinked from Pterodactyl, since it no longer exists there.
      const itemIds = order.items.map((item) => item.id)

      await prisma.server.updateMany({
        where: { orderItemId: { in: itemIds } },
        data: data.deletePteroServers
          ? {
              orderItemId: null,
              status: 'TERMINATED' as const,
              pterodactylServerId: null,
              pterodactylData: Prisma.DbNull,
            }
          : { orderItemId: null },
      })

      await prisma.order.delete({ where: { id: data.orderId } })
    }

    const keptNote = data.deleteServerRecord
      ? ''
      : ` ${order.items.filter((i) => i.server).length} server(s) kept and detached from the order.`
    const failureNote =
      failures.length > 0
        ? ` Pterodactyl deletion failed for ${failures.join(', ')}.`
        : ''

    return wrapSuccess(`Order deleted successfully.${keptNote}${failureNote}`)
  })

export const deleteOrders = createServerFn({ method: 'POST' })
  .validator(deleteOrdersSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { role: true } })
    const role = user?.role?.toLowerCase()
    if (role !== 'admin' && role !== 'owner') return wrapError('Forbidden')

    const orders = await prisma.order.findMany({
      where: { id: { in: data.orderIds } },
      include: {
        items: {
          include: {
            server: true,
            product: { select: { deployMode: true } },
          },
        },
      },
    })

    if (orders.length === 0) return wrapError('No matching orders found')

    const allItems = orders.flatMap((order) => order.items)

    const failures = data.deletePteroServers
      ? await deletePterodactylServersForItems(allItems)
      : []

    if (!data.deleteServerRecord) {
      const itemIds = allItems.map((item) => item.id)

      await prisma.server.updateMany({
        where: { orderItemId: { in: itemIds } },
        data: data.deletePteroServers
          ? {
              orderItemId: null,
              status: 'TERMINATED' as const,
              pterodactylServerId: null,
              pterodactylData: Prisma.DbNull,
            }
          : { orderItemId: null },
      })
    }

    const result = await prisma.order.deleteMany({
      where: { id: { in: orders.map((order) => order.id) } },
    })

    const failureNote =
      failures.length > 0
        ? ` Pterodactyl deletion failed for ${failures.join(', ')}.`
        : ''

    return wrapSuccess(`${result.count} order(s) deleted successfully.${failureNote}`)
  })

export const deployOrder = createServerFn({ method: 'POST' })
  .validator(deployOrderSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { role: true } })
    const role = user?.role?.toLowerCase()
    if (role !== 'admin' && role !== 'owner') return wrapError('Forbidden')

    const order = await prisma.order.findUnique({
      where: { id: data.orderId },
      include: {
        items: { include: { product: true, server: true } },
        user: true,
      },
    })

    if (!order) return wrapError('Order not found')
    if (order.status !== 'PAID') return wrapError('Order must be in PAID status to deploy')

    const orderItem = order.items[0]
    if (!orderItem) return wrapError('No items in order')

    const product = orderItem.product
    if (product.deployMode !== 'PTERODACTYL') {
      return wrapError('Only PTERODACTYL deploy mode can be auto-deployed')
    }

    // Check if server already exists
    if (orderItem.server) {
      return wrapError('Server already exists for this order')
    }

    // Create server record
    const { extractPteroSpecsFromProduct, resolvePteroEggConfig } = await import(
      '../pterodactyl/configData'
    )
    const specs = extractPteroSpecsFromProduct(product.specs)

    // Egg/nest come from the product specs, then the purchased configuration.
    const { egg: resolvedEgg, nest: resolvedNest, extraEnv } = await resolvePteroEggConfig({
      productSpecs: product.specs,
      configuration: orderItem.configuration,
    })

    const server = await prisma.server.create({
      data: {
        userId: order.userId,
        orderItemId: orderItem.id,
        name: product.planName,
        type: product.category,
        status: 'PROCESSING',
        resources: specs,
        expiresAt: orderItem.expiresAt,
      },
    })

    // Update order status
    await prisma.order.update({
      where: { id: order.id },
      data: { status: 'PROCESSING' },
    })

    const pteroOwnerId = await resolveDeployOwnerId({
      customerEmail: order.user.email,
      defaultUserId: Number(process.env.PTERO_DEFAULT_USER_ID ?? 1),
    })

    const deploymentData = {
      orderId: order.id,
      orderItemId: orderItem.id,
      serverId: server.id,
      name: product.planName,
      user: pteroOwnerId,
      nest: resolvedNest,
      egg: resolvedEgg,
      extraEnv,
      specs,
      type: product.category,
      userEmail: order.user.email,
      userName: order.user.name,
      billingPeriod: orderItem.billingPeriod,
      customDays: (order.deliveryData as any)?.customDays ?? undefined,
    }

    // Try to add to deployment queue first
    try {
      const { addDeploymentJob } = await import('../queue/queues')
      const job = await addDeploymentJob(deploymentData)

      if (job) {
        console.log('✅ Deployment job added to queue:', job.id)
        return wrapSuccess('Deployment started via queue', { serverId: server.id, jobId: job.id })
      }
    } catch (error) {
      console.warn('⚠️  Queue error:', error)
    }

    // Fallback: Deploy directly if queue fails
    console.warn('⚠️  Queue unavailable, deploying directly...')
    console.log('Deployment data:', JSON.stringify({
      orderId: deploymentData.orderId,
      serverId: deploymentData.serverId,
      serverName: deploymentData.name,
    }, null, 2))
    
    const { deployServerFn } = await import('../queue/deploy-functions')
    
    // Deploy in background (don't await to return quickly)
    deployServerFn({ data: deploymentData }).catch((err) => {
      console.error('❌ Direct deployment failed:', err)
    })
    
    return wrapSuccess('Deployment started (direct mode)', { serverId: server.id })
  })

export const deployCustomOrder = createServerFn({ method: 'POST' })
  .validator(deployCustomOrderSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { role: true } })
    const role = user?.role?.toLowerCase()
    if (role !== 'admin' && role !== 'owner') return wrapError('Forbidden')

    const order = await prisma.order.findUnique({
      where: { id: data.orderId },
      include: {
        items: { include: { product: true, server: true } },
        user: true,
      },
    })

    if (!order) return wrapError('Order not found')
    if (order.status !== 'PAID') return wrapError('Order must be in PAID status to deploy')

    const orderItem = order.items[0]
    if (!orderItem) return wrapError('No items in order')

    const product = orderItem.product
    if (product.deployMode !== 'CUSTOM') {
      return wrapError('Only CUSTOM deploy mode can use manual deployment')
    }

    // Check if server already exists
    if (orderItem.server) {
      return wrapError('Server already exists for this order')
    }

    const productSpecs = product.specs as Record<string, any> ?? {}

    // Create server record with provided details.
    // Billing cycle starts on delivery, not on order creation.
    const deliveredCustomExpiry = calculateExpiryDate(
      orderItem.billingPeriod,
      (order.deliveryData as any)?.customDays ?? undefined,
    )
    const server = await prisma.server.create({
      data: {
        userId: order.userId,
        orderItemId: orderItem.id,
        name: data.serverName,
        type: product.category,
        status: 'ACTIVE',
        resources: productSpecs,
        expiresAt: deliveredCustomExpiry,
        pterodactylData: {
          panelUrl: data.panelUrl,
          username: data.username,
          password: data.password,
        },
      },
    })

    // Update order with delivery message
    await prisma.order.update({
      where: { id: order.id },
      data: {
        status: 'DELIVERED',
        deliveryMessage: data.message,
        deliveryData: {
          panelUrl: data.panelUrl,
          username: data.username,
          deployedAt: new Date().toISOString(),
          deployedBy: session.user.id,
        },
      },
    })

    return wrapSuccess('Order deployed successfully', { serverId: server.id })
  })
