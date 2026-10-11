import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { z } from 'zod'
import { prisma } from '#/db'
import { auth } from '@/lib/auth'
import { createCashfreeOrder, createCashfreeOrderId, getCashfreeOrder, getCashfreeCredentials } from './client.server'

export const createCashfreeSession = createServerFn({ method: 'POST' })
  .validator(z.object({ orderId: z.string() }))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    const order = await prisma.order.findFirst({
      where: { id: data.orderId, userId: session.user.id, status: 'PENDING' },
      include: { user: { include: { billingAddress: true } } },
    })
    if (!order) throw new Error('Pending order not found')

    const paymentConfig = await prisma.razorpayConfig.findFirst()
    if (paymentConfig?.activeGateway === 'razorpay') {
      const production = paymentConfig.mode === 'production'
      const keyId = production
        ? paymentConfig.prodKeyId || process.env.RAZORPAY_PROD_KEY_ID || ''
        : paymentConfig.testKeyId || process.env.RAZORPAY_KEY_ID || ''
      const keySecret = production
        ? paymentConfig.prodKeySecret || process.env.RAZORPAY_PROD_KEY_SECRET || ''
        : paymentConfig.testKeySecret || process.env.RAZORPAY_KEY_SECRET || ''
      if (!keyId || !keySecret) throw new Error('Razorpay credentials are not configured for the active mode')
      const Razorpay = (await import('razorpay')).default
      const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret })
      const created = await razorpay.orders.create({
        amount: order.totalAmount * 100,
        currency: 'INR',
        receipt: order.id.slice(0, 40),
        notes: { orderId: order.id, userId: order.userId },
      })
      await prisma.order.update({
        where: { id: order.id },
        data: { deliveryData: { ...(order.deliveryData as object), razorpayOrderId: created.id, paymentProvider: 'razorpay', paymentMode: production ? 'production' : 'test' } },
      })
      return { gateway: 'razorpay' as const, keyId, razorpayOrderId: created.id, amount: created.amount, currency: created.currency }
    }

    const url = (process.env.VITE_CLIENT_URL || process.env.CLIENT_URL || 'http://localhost:3000').replace(/\/$/, '')
    const priorData = typeof order.deliveryData === 'object' && order.deliveryData !== null ? order.deliveryData as Record<string, unknown> : {}
    const credentials = await getCashfreeCredentials()
    const priorOrderId = typeof priorData.cashfreeOrderId === 'string' ? priorData.cashfreeOrderId : order.id
    const priorMode = priorData.paymentMode === 'production' ? 'production' : 'test'
    if (priorData.paymentProvider === 'cashfree' && typeof priorData.cashfreePaymentSessionId === 'string') {
      try {
        const priorOrder = await getCashfreeOrder(priorOrderId, priorMode)
        if (priorOrder.order_status === 'PAID') return { gateway: 'cashfree-paid' as const }
        const sessionCreatedAt = typeof priorData.cashfreeSessionCreatedAt === 'string' ? Date.parse(priorData.cashfreeSessionCreatedAt) : NaN
        const sessionIsFresh = Number.isFinite(sessionCreatedAt) && Date.now() - sessionCreatedAt < 29 * 60 * 1000
        if (priorOrder.order_status === 'ACTIVE' && priorMode === credentials.mode && sessionIsFresh) {
          return { gateway: 'cashfree' as const, paymentSessionId: priorData.cashfreePaymentSessionId, mode: priorMode }
        }
      } catch (error) {
        console.warn('Could not reuse prior Cashfree order; creating a fresh payment session:', error)
      }
    }
    const cashfreeOrderId = createCashfreeOrderId(order.id)
    const sessionExpiresAt = new Date(Date.now() + 30 * 60 * 1000)
    const deliveryData = typeof order.deliveryData === 'object' && order.deliveryData !== null ? order.deliveryData as Record<string, unknown> : {}
    const previousBillingDetails = deliveryData.billingDetails && typeof deliveryData.billingDetails === 'object'
      ? deliveryData.billingDetails as Record<string, unknown>
      : {}
    const cashfree = await createCashfreeOrder({
      orderId: cashfreeOrderId,
      amount: order.totalAmount,
      customerId: order.userId,
      customerName: order.user.name,
      customerEmail: order.user.email,
      customerPhone: typeof previousBillingDetails.phone === 'string' ? previousBillingDetails.phone : order.user.billingAddress?.phone,
      returnUrl: `${url}/billing/payment?orderId=${encodeURIComponent(order.id)}&cashfreeReturn=1`,
      expiresAt: sessionExpiresAt,
    })
    await prisma.order.update({
      where: { id: order.id },
      data: { deliveryData: { ...priorData, cashfreeOrderId: cashfree.order_id, cashfreePaymentSessionId: cashfree.payment_session_id, cashfreeSessionCreatedAt: new Date().toISOString(), paymentProvider: 'cashfree', paymentMode: credentials.mode } },
    })
    return { gateway: 'cashfree' as const, paymentSessionId: cashfree.payment_session_id, mode: credentials.mode }
  })

export const verifyCashfreePayment = createServerFn({ method: 'POST' })
  .validator(z.object({ orderId: z.string() }))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')
    const order = await prisma.order.findFirst({
      where: { id: data.orderId, userId: session.user.id },
    })
    if (!order) throw new Error('Order not found')
    if (order.status === 'PAID' || order.status === 'DELIVERED') {
      const { buildAndSaveInvoice } = await import('../invoice/invoice.server')
      const deliveryData = typeof order.deliveryData === 'object' && order.deliveryData !== null ? order.deliveryData as Record<string, unknown> : {}
      await buildAndSaveInvoice(order.id, { cashfree_order_id: deliveryData.cashfreeOrderId })
      return { success: true }
    }
    const deliveryData = typeof order.deliveryData === 'object' && order.deliveryData !== null ? order.deliveryData as Record<string, unknown> : {}
    const mode = deliveryData.paymentMode === 'production' ? 'production' : 'test'
    const cashfreeOrderId = typeof deliveryData.cashfreeOrderId === 'string' ? deliveryData.cashfreeOrderId : order.id
    const cashfree = await getCashfreeOrder(cashfreeOrderId, mode)
    if (cashfree.order_status !== 'PAID' || cashfree.order_amount !== order.totalAmount) {
      throw new Error('Cashfree has not confirmed this payment')
    }
    const updated = await prisma.order.update({
      where: { id: order.id },
      data: {
        status: 'PAID',
        deliveryData: { ...deliveryData, cashfreeOrderId: cashfree.order_id, paymentProvider: 'cashfree', paymentVerifiedAt: new Date().toISOString() },
      },
    })
    const { buildAndSaveInvoice } = await import('../invoice/invoice.server')
    await buildAndSaveInvoice(order.id, { cashfree_order_id: cashfree.order_id })
    try {
      const { fulfillPaidOrder } = await import('../billing/fulfill-order')
      await fulfillPaidOrder(order.id)
    } catch (error) { console.error('Provisioning error after Cashfree payment:', error) }
    return { success: true, data: updated }
  })
