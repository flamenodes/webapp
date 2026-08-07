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

    const server = await prisma.server.create({
      data: {
        userId: order.userId,
        orderItemId: orderItem.id,
        name: product.planName,
        type: product.category,
        status: 'PROCESSING',
        resources: productSpecs,
        expiresAt: orderItem.expiresAt,
      },
    })

    // Update order status
    await prisma.order.update({
      where: { id: order.id },
      data: { status: 'PROCESSING' },
    })

    const deploymentData = {
      orderId: order.id,
      orderItemId: orderItem.id,
      serverId: server.id,
      name: product.planName,
      user: Number(process.env.PTERO_DEFAULT_USER_ID ?? 1),
      nest: resolvedNest,
      egg: resolvedEgg,
      extraEnv,
      specs: {
        cpu: Number(productSpecs.cpu ?? 0),
        memory: Number(productSpecs.memory ?? 0),
        swap: Number(productSpecs.swap ?? 0),
        disk: Number(productSpecs.disk ?? 0),
        database: Number(productSpecs.database ?? 0),
        allocation: Number(productSpecs.allocation ?? 1),
        backups: Number(productSpecs.backups ?? 0),
      },
      type: product.category,
      userEmail: order.user.email,
      userName: order.user.name,
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

    // Create server record with provided details
    const server = await prisma.server.create({
      data: {
        userId: order.userId,
        orderItemId: orderItem.id,
        name: data.serverName,
        type: product.category,
        status: 'ACTIVE',
        resources: productSpecs,
        expiresAt: orderItem.expiresAt,
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
