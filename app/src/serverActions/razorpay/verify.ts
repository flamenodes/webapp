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

    // Trigger provisioning / renewal after payment (handles renewals, manual ptero links, new purchases)
    try {
      const { fulfillPaidOrder } = await import('../billing/fulfill-order')
      await fulfillPaidOrder(orderId)
    } catch (fulfillError) {
      // Don't fail payment verification if provisioning encounters an issue
      console.error('Provisioning error after payment:', fulfillError)
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
