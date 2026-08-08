import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { prisma } from '#/db'
import { auth } from '@/lib/auth'
import { ptero } from '../pterodactyl/client'
import { z } from 'zod'
import net from 'net'
import { calculateExpiryDate } from '../billing/expiry'

const wrapSuccess = <T>(message: string, data?: T) => ({ success: true, message, data })
const wrapError = (message: string) => ({ success: false, message })

export const getUserServersWithDetails = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  const servers = await prisma.server.findMany({
    where: { userId: session.user.id },
    include: {
      orderItem: { include: { product: { include: { billingOptions: true } } } },
    },
    orderBy: { createdAt: 'desc' },
  })

  // Enrich each server with live Pterodactyl data if applicable
  const enriched = await Promise.all(
    servers.map(async (server) => {
      const pteroData = server.pterodactylData as any
      const deployMode = server.orderItem?.product?.deployMode || 'CUSTOM'

      if (deployMode === 'PTERODACTYL' && pteroData?.identifier) {
        try {
          const res = await ptero.get(
            `/client/servers/${pteroData.identifier}/resources`,
          )
          const state = res.data?.attributes?.current_state
          const usage = res.data?.attributes?.resources || {}
          return {
            ...server,
            deployMode,
            liveState: state as string,
            liveUsage: {
              cpu: usage.cpu_absolute ?? 0,
              memory: usage.memory_bytes ?? 0,
              disk: usage.disk_bytes ?? 0,
              network_rx: usage.network_rx_bytes ?? 0,
              network_tx: usage.network_tx_bytes ?? 0,
            },
          }
        } catch {
          return { ...server, deployMode, liveState: null, liveUsage: null }
        }
      }

      return { ...server, deployMode, liveState: null, liveUsage: null }
    }),
  )

  return enriched
})

export const pingServer = createServerFn({ method: 'GET' })
  .validator((data: any) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const server = await prisma.server.findUnique({
      where: { id: data.serverId, userId: session.user.id },
    })
    if (!server || !server.ip || !server.port) {
      return wrapError('Server has no IP/port configured')
    }

    const online = await new Promise<boolean>((resolve) => {
      const socket = new net.Socket()
      const timeout = 3000
      socket.setTimeout(timeout)
      socket.once('connect', () => { socket.destroy(); resolve(true) })
      socket.once('error', () => { socket.destroy(); resolve(false) })
      socket.once('timeout', () => { socket.destroy(); resolve(false) })
      socket.connect(server.port!, server.ip!)
    })

    return wrapSuccess(online ? 'online' : 'offline', { online, ip: server.ip, port: server.port })
  })

export const updateCustomServer = createServerFn({ method: 'POST' })
  .validator((data: any) =>
    z.object({
      serverId: z.string(),
      ip: z.string().optional(),
      port: z.number().optional(),
      label: z.string().optional(),
    }).parse(data),
  )
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const server = await prisma.server.findUnique({
      where: { id: data.serverId, userId: session.user.id },
      include: { orderItem: { include: { product: true } } },
    })
    if (!server) return wrapError('Server not found')
    if (server.orderItem?.product?.deployMode !== 'CUSTOM') {
      return wrapError('Only custom servers can be edited')
    }

    const resources = (server.resources as any) || {}
    if (data.label) {
      resources.label = data.label
    }

    const updated = await prisma.server.update({
      where: { id: data.serverId },
      data: {
        ip: data.ip ?? server.ip,
        port: data.port ?? server.port,
        resources,
      },
    })

    return wrapSuccess('Server updated', updated)
  })

export const getWebSocketToken = createServerFn({ method: 'GET' })
  .validator((data: any) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const server = await prisma.server.findUnique({
      where: { id: data.serverId, userId: session.user.id },
      include: { orderItem: { include: { product: true } } },
    })
    if (!server) return wrapError('Server not found')

    const pteroData = server.pterodactylData as any
    const deployMode = server.orderItem?.product?.deployMode || 'CUSTOM'

    if (deployMode !== 'PTERODACTYL' || !pteroData?.identifier) {
      return wrapError('Server does not support WebSocket')
    }

    try {
      const res = await ptero.get(
        `/client/servers/${pteroData.identifier}/websocket`,
      )
      return wrapSuccess('Token obtained', {
        token: res.data?.data?.token,
        socket: res.data?.data?.socket,
      })
    } catch (error: any) {
      return wrapError(error.message || 'Failed to obtain WebSocket token')
    }
  })

const createRenewalOrderSchema = z.object({
  serverId: z.string(),
  billingPeriod: z.enum(['HOURLY', 'DAILY', 'MONTHLY', 'QUARTERLY', 'SEMIANNUALLY', 'YEARLY', 'CUSTOM']),
  customDays: z.number().int().positive().optional(),
})

export const createRenewalOrder = createServerFn({ method: 'POST' })
  .validator((data: any) => createRenewalOrderSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const server = await prisma.server.findUnique({
      where: { id: data.serverId, userId: session.user.id },
      include: {
        orderItem: {
          include: {
            product: { include: { billingOptions: true } },
          },
        },
      },
    })
    if (!server) return wrapError('Server not found')
    if (server.status === 'TERMINATED') {
      return wrapError('Terminated servers cannot be renewed')
    }

    const product = server.orderItem?.product
    if (!product) return wrapError('Product not found for this server')

    // Resolve unit price from the product's billing options, fall back to base price
    let unitPrice = product.price
    if (product.billingOptions?.length) {
      const opt = product.billingOptions.find(
        (o) => o.billingPeriod === data.billingPeriod,
      )
      if (opt) unitPrice = opt.price
    }

    const expiresAt = calculateExpiryDate(data.billingPeriod, data.customDays)

    // Create a PENDING renewal order flagged with the server it extends
    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        status: 'PENDING',
        subtotalAmount: unitPrice,
        discountAmount: 0,
        totalAmount: unitPrice,
        renewalForServerId: server.id,
        items: {
          create: {
            productId: product.id,
            productName: product.planName,
            quantity: 1,
            billingPeriod: data.billingPeriod as any,
            unitPrice,
            totalPrice: unitPrice,
            specsSnapshot: server.resources ?? product.specs ?? {},
            expiresAt,
          },
        },
        deliveryData: {
          billingPeriod: data.billingPeriod,
          customDays: data.customDays ?? null,
          renewalServerId: server.id,
        },
      },
      include: { items: true },
    })

    // Create a Razorpay order server-side so the public payment page can be reused
    let razorpayOrderId: string | null = null
    try {
      const { razorpay } = await import('../razorpay/instance')
      const rzpOrder = await razorpay.orders.create({
        amount: unitPrice * 100,
        currency: 'INR',
        receipt: `ren_${order.id.slice(0, 32)}`,
        notes: {
          orderId: order.id,
          renewalServerId: server.id,
          userId: session.user.id,
        },
      })
      razorpayOrderId = rzpOrder.id

      await prisma.order.update({
        where: { id: order.id },
        data: {
          deliveryData: {
            ...(order.deliveryData as any),
            razorpayOrderId: rzpOrder.id,
            razorpayAmount: rzpOrder.amount,
          },
        },
      })
    } catch (error: any) {
      console.error('Razorpay order creation failed for renewal:', error)
    }

    if (!razorpayOrderId) {
      return wrapError('Failed to create payment session. Please try again.')
    }

    const redirectUrl = `/checkout/payment?orderId=${order.id}&razorpayOrderId=${razorpayOrderId}`

    return wrapSuccess('Renewal order created. Please complete payment.', {
      orderId: order.id,
      razorpayOrderId,
      redirectUrl,
      totalAmount: unitPrice,
    })
  })

export const reinstallServer = createServerFn({ method: 'POST' })
  .validator((data: any) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const server = await prisma.server.findUnique({
      where: { id: data.serverId, userId: session.user.id },
    })
    if (!server) return wrapError('Server not found')

    const pteroData = server.pterodactylData as any
    if (!pteroData?.identifier) {
      return wrapError('Server does not support reinstall')
    }

    try {
      await ptero.post(`/client/servers/${pteroData.identifier}/settings/reinstall`)
      return wrapSuccess('Server reinstall initiated')
    } catch (error: any) {
      return wrapError(error.message || 'Failed to reinstall server')
    }
  })

export const getServerDetails = createServerFn({ method: 'GET' })
  .validator((data: any) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    const server = await prisma.server.findUnique({
      where: { id: data.serverId, userId: session.user.id },
      include: {
        orderItem: {
          include: {
            product: true,
            order: true,
          },
        },
      },
    })

    if (!server) throw new Error('Server not found')

    return server
  })

