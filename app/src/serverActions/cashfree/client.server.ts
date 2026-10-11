import { prisma } from '#/db'
import { randomUUID } from 'node:crypto'

const API_VERSION = '2025-01-01'

export async function getCashfreeCredentials(modeOverride?: 'test' | 'production') {
  const config = await prisma.razorpayConfig.findFirst()
  const production = (modeOverride ?? config?.mode) === 'production'
  const appId = production
    ? config?.cashfreeProdAppId || process.env.CASHFREE_PROD_APP_ID
    : config?.cashfreeTestAppId || process.env.CASHFREE_TEST_APP_ID
  const secret = production
    ? config?.cashfreeProdSecret || process.env.CASHFREE_PROD_SECRET
    : config?.cashfreeTestSecret || process.env.CASHFREE_TEST_SECRET
  if (!appId || !secret) throw new Error('Cashfree credentials are not configured for the active mode')
  return { appId, secret, mode: production ? 'production' : 'test' }
}

async function cashfreeRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const credentials = await getCashfreeCredentials()
  const baseUrl = credentials.mode === 'production'
    ? 'https://api.cashfree.com/pg'
    : 'https://sandbox.cashfree.com/pg'
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      'content-type': 'application/json',
      'x-api-version': API_VERSION,
      'x-client-id': credentials.appId,
      'x-client-secret': credentials.secret,
      ...init.headers,
    },
  })
  if (!response.ok) {
    const detail = await response.text()
    throw new Error(`Cashfree request failed (${response.status}): ${detail}`)
  }
  return response.json() as Promise<T>
}

export type CashfreeOrder = {
  order_id: string
  order_status: string
  payment_session_id: string
  order_amount: number
  order_currency: string
}

export async function createCashfreeOrder(input: {
  orderId: string
  amount: number
  customerId: string
  customerName: string
  customerEmail: string
  customerPhone?: string
  returnUrl: string
  expiresAt?: Date
}) {
  return cashfreeRequest<CashfreeOrder>('/orders', {
    method: 'POST',
    body: JSON.stringify({
      order_id: input.orderId,
      order_amount: input.amount,
      order_currency: 'INR',
      customer_details: {
        customer_id: input.customerId.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 50),
        customer_name: input.customerName || 'Customer',
        customer_email: input.customerEmail,
        customer_phone: input.customerPhone?.replace(/\D/g, '').slice(-10) || '9999999999',
      },
      order_meta: { return_url: input.returnUrl },
      order_note: `Payment for ${input.orderId}`,
      ...(input.expiresAt ? { order_expiry_time: input.expiresAt.toISOString() } : {}),
    }),
  })
}

export function createCashfreeOrderId(orderId: string) {
  const shortOrderId = orderId.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 24)
  return `cf_${shortOrderId}_${randomUUID().slice(0, 8)}`
}

export async function getCashfreeOrder(orderId: string, mode?: 'test' | 'production') {
  const credentials = await getCashfreeCredentials(mode)
  const baseUrl = credentials.mode === 'production' ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg'
  const response = await fetch(`${baseUrl}/orders/${encodeURIComponent(orderId)}`, {
    headers: {
      'x-api-version': API_VERSION,
      'x-client-id': credentials.appId,
      'x-client-secret': credentials.secret,
    },
  })
  if (!response.ok) throw new Error(`Cashfree order lookup failed (${response.status})`)
  return response.json() as Promise<CashfreeOrder>
}
