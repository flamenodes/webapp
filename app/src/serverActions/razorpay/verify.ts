import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import crypto from 'node:crypto'
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

    const existingOrder = await prisma.order.findUnique({
      where: { id: orderId },
    })

    if (!existingOrder || existingOrder.userId !== session.user.id) {
      throw new Error('Order not found')
    }
    const deliveryData = typeof existingOrder.deliveryData === 'object' && existingOrder.deliveryData !== null ? existingOrder.deliveryData as Record<string, unknown> : {}
    if (deliveryData.razorpayOrderId !== razorpay_order_id) throw new Error('Payment order does not match this order')

    const config = await prisma.razorpayConfig.findFirst()
    const production = deliveryData.paymentMode === 'production' || (deliveryData.paymentMode === undefined && config?.mode === 'production')
    const secret = production
      ? config?.prodKeySecret || process.env.RAZORPAY_PROD_KEY_SECRET
      : config?.testKeySecret || process.env.RAZORPAY_KEY_SECRET
    if (!secret) throw new Error('Razorpay credentials are not configured')
    const generatedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex')
    if (generatedSignature !== razorpay_signature) throw new Error('Payment verification failed')

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

    // Auto-generate invoice after successful payment
    const { buildAndSaveInvoice } = await import('../invoice/invoice.server')
    await buildAndSaveInvoice(orderId, {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    })

    // Trigger provisioning / renewal after the invoice is saved.
    try {
      const { fulfillPaidOrder } = await import('../billing/fulfill-order')
      await fulfillPaidOrder(orderId)
    } catch (fulfillError) {
      // Don't fail payment verification if provisioning encounters an issue
      console.error('Provisioning error after payment:', fulfillError)
    }

    return { success: true, message: 'Payment verified successfully', data: order }
  })
