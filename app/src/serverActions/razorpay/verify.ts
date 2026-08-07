import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import crypto from 'crypto'
import { prisma } from '#/db'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'

const verifyPaymentSchema = z.object({
  razorpay_order_id: z.string(),
  razorpay_payment_id: z.string(),
  razorpay_signature: z.string(),
  orderId: z.string(),
})

export const verifyRazorpayPayment = createServerFn({ method: 'POST' })
  .validator(z.any())
  .handler(async ({ data: rawData }) => {
    const data = verifyPaymentSchema.parse(rawData)
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = data

    // Verify signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`
    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(text)
      .digest('hex')

    if (generated_signature !== razorpay_signature) {
      throw new Error('Payment verification failed')
    }

    // Get existing order first
    const existingOrder = await prisma.order.findUnique({
      where: { id: orderId },
    })

    if (!existingOrder) {
      throw new Error('Order not found')
    }

    // Update order status to PAID
    const order = await prisma.order.update({
      where: { id: orderId },
      data: {
        status: 'PAID',
        deliveryData: {
          ...(typeof existingOrder.deliveryData === 'object' && existingOrder.deliveryData !== null ? existingOrder.deliveryData : {}),
          razorpay_payment_id,
          razorpay_signature,
          payment_verified_at: new Date().toISOString(),
        },
      },
    })

    // Trigger server provisioning after payment
    try {
      const orderWithItems = await prisma.order.findUnique({
        where: { id: orderId },
        include: { items: { include: { product: true } } },
      })

      if (orderWithItems) {
        const pteroItems = orderWithItems.items.filter(
          (i) => i.product.deployMode === 'PTERODACTYL',
        )
        const customItems = orderWithItems.items.filter(
          (i) => i.product.deployMode === 'CUSTOM',
        )
        const billingDetails = order.deliveryData as any
        const { sendEmailFn, deployServerFn } = await import('../queue/deploy-functions')

        // Send order confirmation email
        sendEmailFn({
          data: {
            type: 'order-confirmation',
            to: billingDetails?.billingDetails?.email || session.user.email,
            subject: `Order Confirmation - ${orderId}`,
            data: {
              userName: billingDetails?.billingDetails?.firstName || session.user.name,
              orderId,
              productName: orderWithItems.items[0]?.productName,
              amount: (orderWithItems.totalAmount / 100).toFixed(2),
            },
          },
        }).catch(err => console.error('Email send failed:', err))

        // Create server records for CUSTOM items (manual delivery)
        await Promise.all(
          customItems.map(async (item) => {
            const existingServer = await prisma.server.findUnique({
              where: { orderItemId: item.id },
            })
            if (existingServer) return

            await prisma.server.create({
              data: {
                orderItemId: item.id,
                userId: session.user.id,
                name: `${item.productName}-${item.id.slice(0, 8)}`,
                type: item.product.category,
                status: 'PENDING_MANUAL',
                expiresAt: item.expiresAt,
              },
            })
          }),
        )

        // Create server records and queue deployment for PTERODACTYL items
        await Promise.all(
          pteroItems.map(async (item) => {
            const existingServer = await prisma.server.findUnique({
              where: { orderItemId: item.id },
            })
            if (existingServer) return

            const name = `${item.productName}-${item.id.slice(0, 8)}`
            const productSpecs = (item.product.specs as Record<string, any>) ?? {}
            const userConfig = (item.configuration ?? {}) as Record<string, string>

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
                userId: session.user.id,
                name,
                type: item.product.category,
                status: 'PROCESSING',
                expiresAt: item.expiresAt,
                resources: {
                  cpu: Number(productSpecs.cpu ?? 0),
                  memory: Number(productSpecs.memory ?? 0),
                  swap: Number(productSpecs.swap ?? 0),
                  disk: Number(productSpecs.disk ?? 0),
                  database: Number(productSpecs.database ?? 0),
                  allocation: Number(productSpecs.allocation ?? 1),
                  backups: Number(productSpecs.backups ?? 0),
                },
              },
            })

            await deployServerFn({
              data: {
                orderId,
                orderItemId: item.id,
                serverId: server.id,
                name,
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
                type: item.product.category,
                userEmail: billingDetails?.billingDetails?.email || session.user.email,
                userName: billingDetails?.billingDetails?.firstName || session.user.name,
              },
            }).catch(err => console.error('Deployment failed:', err))
          }),
        )
      }
    } catch (deployError) {
      // Don't fail payment verification if provisioning encounters an issue
      console.error('Provisioning error after payment:', deployError)
    }

    // Auto-generate invoice after successful payment
    try {
      const { buildAndSaveInvoice } = await import('../invoice/invoice.api')
      await buildAndSaveInvoice(orderId, {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      })
    } catch (invoiceError) {
      console.error('Invoice generation error after payment:', invoiceError)
    }

    return { success: true, message: 'Payment verified successfully', data: order }
  })
