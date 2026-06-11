import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { prisma } from '#/db'
import { auth } from '@/lib/auth'
import { z } from 'zod'
import { razorpay } from '../razorpay/instance'

const wrapSuccess = <T>(message: string, data?: T) => ({ success: true, message, data })
const wrapError = (message: string) => ({ success: false, message })

const createManualOrderSchema = z.object({
  userEmail: z.string().email(),
  productId: z.string(),
  quantity: z.string().transform((v) => parseInt(v, 10)),
  billingPeriod: z.enum(['MONTHLY', 'QUARTERLY', 'YEARLY']),
})

const generatePaymentLinkSchema = z.object({
  orderId: z.string(),
})

const updateOrderStatusSchema = z.object({
  orderId: z.string(),
  status: z.string(),
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
      items: { include: { product: true } },
    },
    orderBy: { createdAt: 'desc' },
  })
})

export const createManualOrder = createServerFn({ method: 'POST' })
  .inputValidator(createManualOrderSchema)
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

    const product = await prisma.product.findUnique({
      where: { id: data.productId },
    })

    if (!product) return wrapError('Product not found')

    const unitPrice = product.price
    const totalPrice = unitPrice * data.quantity

    const order = await prisma.order.create({
      data: {
        userId: user.id,
        status: 'PENDING',
        subtotalAmount: totalPrice,
        discountAmount: 0,
        totalAmount: totalPrice,
        items: {
          create: {
            productId: product.id,
            productName: product.planName,
            quantity: data.quantity,
            billingPeriod: data.billingPeriod,
            unitPrice,
            totalPrice,
            specsSnapshot: product.specs ?? {},
          },
        },
      },
      include: { items: { include: { product: true } } },
    })

    return wrapSuccess('Order created successfully', order)
  })

export const generatePaymentLink = createServerFn({ method: 'POST' })
  .inputValidator(generatePaymentLinkSchema)
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

      const paymentLink = `${process.env.VITE_BETTER_AUTH_URL || process.env.BETTER_AUTH_URL || 'http://localhost:3000'}/checkout/payment?orderId=${order.id}&razorpayOrderId=${razorpayOrder.id}`

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
  .inputValidator(updateOrderStatusSchema)
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

    const updatedOrder = await prisma.order.update({
      where: { id: data.orderId },
      data: { status: data.status as any },
    })

    return wrapSuccess('Order status updated successfully', updatedOrder)
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
  .inputValidator(deliverCustomOrderSchema)
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

    // Update the server with the delivery info
    const updatedServer = await prisma.server.update({
      where: { id: pendingServer.id },
      data: {
        name: data.serverName,
        ip: data.ip || null,
        port: data.port || null,
        status: 'ACTIVE',
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
})

export const deleteOrder = createServerFn({ method: 'POST' })
  .inputValidator(deleteOrderSchema)
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

    // Delete servers from Pterodactyl if applicable
    for (const item of order.items) {
      if (item.server) {
        const deployMode = item.product?.deployMode ?? 'CUSTOM'
        const pteroData = item.server.pterodactylData as any

        if (deployMode === 'PTERODACTYL' && pteroData?.id) {
          try {
            const { ptero } = await import('../pterodactyl/client')
            await ptero.delete(`/application/servers/${pteroData.id}`)
          } catch (pteroError: any) {
            console.error(`Failed to delete Pterodactyl server ${pteroData.id}:`, pteroError.message)
          }
        }
      }
    }

    // Delete order (cascade will delete servers and order items)
    await prisma.order.delete({ where: { id: data.orderId } })

    return wrapSuccess('Order and associated servers deleted successfully')
  })
